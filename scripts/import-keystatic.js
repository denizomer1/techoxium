#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';

// Usage:
// KEYSTATIC_API_URL=https://api.keystatic.com \
// KEYSTATIC_TOKEN=your_token \
// KEYSTATIC_PROJECT=techoxium/techoxium \
// node scripts/import-keystatic.js

const API_URL = process.env.KEYSTATIC_API_URL;
const TOKEN = process.env.KEYSTATIC_TOKEN;
const PROJECT = process.env.KEYSTATIC_PROJECT || 'techoxium/techoxium';
const INPUT = path.resolve(process.cwd(), 'keystatic-import.json');
const DRY_RUN = process.env.DRY_RUN === '1' || process.env.DRY_RUN === 'true';

if (!API_URL || !TOKEN) {
  if (!DRY_RUN) {
    console.error('ERROR: KEYSTATIC_API_URL and KEYSTATIC_TOKEN environment variables are required.');
    console.error('Set them and re-run. Example:');
    console.error('KEYSTATIC_API_URL=https://api.keystatic.com KEYSTATIC_TOKEN=xxx node scripts/import-keystatic.js');
    process.exit(1);
  } else {
    console.warn('DRY_RUN mode: skipping token/API URL checks. No network calls will be made.');
  }
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function inferCollection(item) {
  // Simple heuristic: files under "en/" go to blogEn, otherwise blog.
  const fn = String(item.fileName || '');
  if (fn.includes('/en/') || fn.startsWith('en/')) return 'blogEn';
  return 'blog';
}

function buildPayload(item) {
  // Map fields from exported shape to Keystatic entry shape.
  // Adjust as necessary for your collection schema.
  return {
    title: item.title || item.fileName,
    description: item.description || '',
    pubDate: item.pubDate || null,
    updatedDate: item.updatedDate || null,
    tags: item.tags || [],
  // heroImage will be replaced with an uploaded asset reference when available.
  heroImage: item.heroImage || '',
    content: item.content || '',
    // include original filename so you can trace imports
    _meta: { sourceFile: item.fileName }
  };
}

async function importAll() {
  const raw = await fs.readFile(INPUT, 'utf8');
  const items = JSON.parse(raw);
  console.log('Found', items.length, 'items to import');

  for (const item of items) {
    const collection = inferCollection(item);
    const payload = buildPayload(item);

    // If there's a heroImage and it looks like a local path, attempt to upload it
    // to Keystatic and replace the heroImage field with an asset reference.
    if (item.heroImage && typeof item.heroImage === 'string' && item.heroImage.startsWith('/')) {
      const imgPath = path.resolve(process.cwd(), 'public', item.heroImage.replace(/^\/+/, ''));
      try {
        // Check file exists
        await fs.access(imgPath);
        if (DRY_RUN) {
          console.log('   DRY_RUN: would upload image for', item.fileName, '->', imgPath);
        } else {
          const asset = await uploadImage(imgPath);
          if (asset) {
            // Prefer id if returned, otherwise fall back to url
            if (asset.id) payload.heroImage = { id: asset.id };
            else if (asset.url) payload.heroImage = asset.url;
            else payload.heroImage = item.heroImage;
            // store original path for traceability
            payload._meta = { ...(payload._meta || {}), originalHeroImage: item.heroImage };
            console.log('   Uploaded image ->', asset.id || asset.url || 'unknown');
          } else {
            console.warn('   Image upload returned no asset info for', imgPath);
          }
        }
      } catch (err) {
        console.warn('   Skipping image upload, file not found or unreadable:', imgPath);
      }
    }

    const baseUrl = API_URL ? API_URL.replace(/\/$/, '') : 'DRY_RUN_BASE';
    const url = `${baseUrl}/projects/${encodeURIComponent(PROJECT)}/collections/${encodeURIComponent(collection)}/entries`;

    console.log(`-> Importing ${item.fileName} -> collection=${collection}`);

    try {
      const body = JSON.stringify({ data: payload }, null, 2);
      if (DRY_RUN) {
        console.log('   DRY_RUN: would POST to', url);
        console.log('   Request body:', body.split('\n').slice(0, 30).join('\n'));
      } else {
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`,
          },
          body,
        });

        if (res.ok) {
          const data = await res.json();
          console.log('   OK:', data.id ? `created id=${data.id}` : 'created');
        } else {
          const text = await res.text();
          console.error('   FAILED:', res.status, res.statusText, text.slice(0, 1000));
          if (res.status === 429) {
            console.log('   Rate limited — backing off 2s');
            await sleep(2000);
          }
        }
      }
    } catch (err) {
      console.error('   ERROR:', err.message);
      console.error('   Skipping item for now.');
    }

    // small delay to avoid bursting the API
    await sleep(250);
  }

  console.log('Import run finished');
}

async function uploadImage(filePath) {
  // Uploads a local file to the Keystatic Cloud project assets endpoint.
  // Returns an object with { id, url } when successful, or null on failure.
  const baseUrl = API_URL ? API_URL.replace(/\/$/, '') : 'DRY_RUN_BASE';
  const url = `${baseUrl}/projects/${encodeURIComponent(PROJECT)}/assets`;

  try {
    const buffer = await fs.readFile(filePath);
    const fileName = path.basename(filePath);

    if (DRY_RUN) {
      // Show a short preview of what would be uploaded
      console.log('   DRY_RUN: would POST file', fileName, 'to', url);
      return { id: null, url: null };
    }

    // Build multipart/form-data body using global FormData / Blob (Node 18+)
    const form = new FormData();
    // Blob accepts ArrayBufferView (Uint8Array). Buffer is iterable; convert to Uint8Array
    form.append('file', new Blob([buffer]), fileName);
    // include an optional path to help server dedupe or place files; uses original public path
    form.append('path', '/' + filePath.split('public' + path.sep).pop().replaceAll(path.sep, '/'));

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        // NOTE: Do NOT set Content-Type; fetch will set the multipart boundary for FormData
      },
      body: form,
    });

    if (!res.ok) {
      const txt = await res.text();
      console.error('   Image upload failed:', res.status, res.statusText, txt.slice(0, 1000));
      return null;
    }

    const data = await res.json();
    // Expecting something like { id, url } — adapt based on actual API.
    return { id: data.id, url: data.url };
  } catch (err) {
    console.error('   Image upload error:', err.message);
    return null;
  }
}

importAll().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});

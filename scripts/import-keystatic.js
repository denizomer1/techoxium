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

if (!API_URL || !TOKEN) {
  console.error('ERROR: KEYSTATIC_API_URL and KEYSTATIC_TOKEN environment variables are required.');
  console.error('Set them and re-run. Example:');
  console.error('KEYSTATIC_API_URL=https://api.keystatic.com KEYSTATIC_TOKEN=xxx node scripts/import-keystatic.js');
  process.exit(1);
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

    const url = `${API_URL.replace(/\/$/, '')}/projects/${encodeURIComponent(PROJECT)}/collections/${encodeURIComponent(collection)}/entries`;

    console.log(`-> Importing ${item.fileName} -> collection=${collection}`);

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({ data: payload }),
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
    } catch (err) {
      console.error('   ERROR:', err.message);
      console.error('   Skipping item for now.');
    }

    // small delay to avoid bursting the API
    await sleep(250);
  }

  console.log('Import run finished');
}

importAll().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});

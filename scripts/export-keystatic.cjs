#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const BLOG_DIR = path.join(__dirname, '../src/content/blog');
const out = [];

function readFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      readFiles(full);
    } else if (/\.mdx?$|\.mdoc?$|\.md$/.test(e.name)) {
      const raw = fs.readFileSync(full, 'utf8');
      const parsed = matter(raw);
      const rel = path.relative(BLOG_DIR, full);
      const slug = rel.replace(/\\.mdx?$|\\.mdoc?$|\\.md$/, '').replace(/\\\\/g, '/');
      out.push({
        fileName: slug,
        ...parsed.data,
        content: parsed.content.trim(),
      });
    }
  }
}

readFiles(BLOG_DIR);
fs.writeFileSync(path.join(__dirname, '../keystatic-import.json'), JSON.stringify(out, null, 2));
console.log('Wrote keystatic-import.json with', out.length, 'items');

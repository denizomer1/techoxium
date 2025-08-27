#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function slugifyTag(tag){
  return tag.trim().toLowerCase()
    .replace(/[^a-z0-9ığüşöçİĞÜŞÖÇ\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function extract(content){
  const matches = content.match(/#([A-Za-z0-9ığüşöçİĞÜŞÖÇ\s_-]+)/g);
  if(!matches) return [];
  const tags = matches.map(m => m.slice(1).trim()).filter(Boolean).map(slugifyTag);
  return Array.from(new Set(tags));
}

function ensureFrontmatter(file){
  const text = fs.readFileSync(file, 'utf8');
  const fmMatch = text.match(/^---\n([\s\S]*?)\n---\n?/);
  const tags = extract(text);
  if(!tags.length) return;
  let fm = fmMatch ? fmMatch[1] : '';
  if(/\ntags:\s*\[.*?\]/s.test('\n'+fm)){
    fm = fm.replace(/\ntags:\s*\[.*?\]/s, '\n' + 'tags: [' + tags.map(t=>`"${t}"`).join(', ') + ']');
  } else if(/\ntags:\s*/s.test('\n'+fm)){
    // skip complex structures
  } else {
    fm = fm + '\n' + 'tags: [' + tags.map(t=>`"${t}"`).join(', ') + ']';
  }
  const newText = '---\n' + fm + '\n---\n' + text.slice(fmMatch ? fmMatch[0].length : 0);
  fs.writeFileSync(file, newText, 'utf8');
  console.log('Updated', file, 'tags:', tags.join(','));
}

function walk(dir){
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fp = path.join(dir, file);
    const stat = fs.statSync(fp);
    if(stat && stat.isDirectory()) results = results.concat(walk(fp));
    else if(fp.endsWith('.md') || fp.endsWith('.mdx')) results.push(fp);
  });
  return results;
}

const files = walk(path.join(process.cwd(), 'src/content/blog'));
files.forEach(ensureFrontmatter);
console.log('Done');

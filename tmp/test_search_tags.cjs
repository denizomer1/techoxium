const fs = require('fs');
const path = require('path');

function parseFrontmatter(md) {
  const fmMatch = md.match(/^---\n([\s\S]*?)\n---/);
  if(!fmMatch) return {};
  const fm = fmMatch[1];
  const obj = {};
  // title
  const titleMatch = fm.match(/title:\s*"([^"]+)"/);
  if(titleMatch) obj.title = titleMatch[1];
  const descMatch = fm.match(/description:\s*"([^"]+)"/);
  if(descMatch) obj.description = descMatch[1];
  const pubMatch = fm.match(/pubDate:\s*([\d-]+)/);
  if(pubMatch) obj.pubDate = pubMatch[1];
  const heroMatch = fm.match(/heroImage:\s*"([^"]+)"/);
  if(heroMatch) obj.heroImage = heroMatch[1];

  // tags: support inline array ["a","b"] or YAML list - a
  const inlineTags = fm.match(/tags:\s*\[([^\]]*)\]/);
  if(inlineTags) {
    const items = inlineTags[1].split(',').map(s => s.trim().replace(/^"|"$/g,'').replace(/^'|'$/g,'')).filter(Boolean);
    obj.tags = items;
  } else {
    const listMatch = fm.match(/tags:\s*\n([\s\S]*?)$/m);
    if(listMatch) {
      const lines = listMatch[1].split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
      obj.tags = lines.map(l => l.replace(/^-\s*/,'').trim()).filter(Boolean);
    }
  }
  return obj;
}

const files = [
  'src/content/blog/gears-of-war-reloaded.md',
  'src/content/blog/en/gears-of-war-reloaded.md'
];

function matchQuery(post, qRaw){
  const q = String(qRaw).toLowerCase();
  const qNorm = q.startsWith('#') ? q.slice(1).trim() : q.trim();
  const qAsTag = qNorm.replace(/\s+/g,'-');
  const inTitle = (post.title||'').toLowerCase().includes(qNorm);
  const inDesc = (post.description||'').toLowerCase().includes(qNorm);
  const inTags = Array.isArray(post.tags) && post.tags.some(t => {
    const tagRaw = String(t||'').toLowerCase();
    const tagDisplay = tagRaw.replace(/-/g,' ');
    return tagRaw.includes(qNorm) || tagDisplay.includes(qNorm) || tagRaw.includes(qAsTag);
  });
  return inTitle || inDesc || inTags;
}

const q = 'oyun';
const results = [];
for(const f of files){
  const p = path.resolve(f);
  if(!fs.existsSync(p)) continue;
  const md = fs.readFileSync(p,'utf8');
  const fm = parseFrontmatter(md);
  fm.slug = path.basename(f, path.extname(f));
  if(matchQuery(fm, q)) results.push({ slug: fm.slug, title: fm.title, tags: fm.tags || [] });
}

console.log('Query:', q);
console.log('Matches found:', results.length);
console.log(JSON.stringify(results, null, 2));

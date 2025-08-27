const fs = require('fs');
const path = require('path');
const dir = path.resolve('src/content/blog/en');
if(!fs.existsSync(dir)) { console.log('No en directory'); process.exit(0);} 
const files = fs.readdirSync(dir).filter(f=>f.endsWith('.md'));
const allTags = new Set();
files.forEach(f=>{
  const md = fs.readFileSync(path.join(dir,f),'utf8');
  const m = md.match(/^---\n([\s\S]*?)\n---/);
  if(!m) return;
  const fm = m[1];
  const inline = fm.match(/tags:\s*\[([^\]]*)\]/);
  let tags = [];
  if(inline){ tags = inline[1].split(',').map(s=>s.trim().replace(/^"|"$/g,'').replace(/^'|'$/g,'')); }
  else {
    const listMatch = fm.match(/tags:\s*\n([\s\S]*?)$/m);
    if(listMatch) tags = listMatch[1].split(/\r?\n/).map(l=>l.trim().replace(/^-\s*/,'')).filter(Boolean);
  }
  tags.forEach(t=> allTags.add(t));
  console.log(f, '->', tags.join(', '));
});
console.log('\nUnique English tags:');
Array.from(allTags).sort().forEach(t=>{
  const slug = encodeURIComponent(t);
  const kebab = t.toLowerCase().replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-');
  console.log('-', t, '| encoded:', slug, '| kebab:', kebab);
});

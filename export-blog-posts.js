const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Blog klasörünün yolu
const blogDir = path.join(__dirname, 'src', 'content', 'blog');

// Tüm .mdoc dosyalarını al
function getBlogFiles() {
  const files = fs.readdirSync(blogDir);
  return files.filter(file => file.endsWith('.mdoc') && file !== 'en');
}

// Frontmatter ve içeriği parse et
function parseBlogFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(content);

  return {
    fileName: path.basename(filePath, '.mdoc'),
    title: parsed.data.title || '',
    description: parsed.data.description || '',
    pubDate: parsed.data.pubDate || '',
    heroImage: parsed.data.heroImage || '',
    tags: Array.isArray(parsed.data.tags) ? parsed.data.tags : [],
    content: parsed.content
  };
}

// Ana fonksiyon
function exportBlogPosts() {
  const blogFiles = getBlogFiles();
  const blogPosts = [];

  console.log('📝 Blog yazılarını dışa aktarıyorum...\n');

  blogFiles.forEach(file => {
    const filePath = path.join(blogDir, file);
    const blogPost = parseBlogFile(filePath);
    blogPosts.push(blogPost);

    console.log(`✅ ${blogPost.title}`);
    console.log(`   Dosya: ${blogPost.fileName}`);
    console.log(`   Açıklama: ${blogPost.description}`);
    console.log(`   Etiketler: ${blogPost.tags.join(', ')}`);
    console.log(`   Tarih: ${blogPost.pubDate}`);
    console.log(`   Görsel: ${blogPost.heroImage}`);
    console.log('   ---');
  });

  // JSON olarak kaydet
  const outputPath = path.join(__dirname, 'blog-posts-export.json');
  fs.writeFileSync(outputPath, JSON.stringify(blogPosts, null, 2));

  console.log(`\n🎉 Toplam ${blogPosts.length} blog yazısı dışa aktarıldı!`);
  console.log(`📄 JSON dosyası: ${outputPath}`);

  return blogPosts;
}

// Çalıştır
if (require.main === module) {
  exportBlogPosts();
}

module.exports = { exportBlogPosts, parseBlogFile };

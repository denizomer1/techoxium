// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

// Türkçe karakterleri İngilizce'ye çeviren fonksiyon
function turkishToEnglish(text: string): string {
  return text
    .toLowerCase()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9\s-]/g, '') // Özel karakterleri kaldır
    .replace(/\s+/g, '-') // Boşlukları tire ile değiştir
    .replace(/-+/g, '-') // Çoklu tireleri tek tire yap
    .trim();
}

export default config({
  storage: {
    kind: 'cloud',
  },
  collections: {
    blog: collection({
      label: 'Blog (TR)',
      slugField: 'title',
      path: 'src/content/blog/tr/*',
      format: { contentField: 'content' },
      parseSlugForSort: (slug) => turkishToEnglish(slug),
      schema: {
        title: fields.slug({
          name: { label: 'Title' },
          slug: {
            label: 'URL Slug',
            generate: (name) => turkishToEnglish(name)
          }
        }),
        description: fields.text({ label: 'Description', defaultValue: 'Bu blog yazısının kısa açıklaması' }),
        pubDate: fields.date({ label: 'Publish Date', defaultValue: { kind: 'today' } }),
        updatedDate: fields.date({ label: 'Updated Date', defaultValue: { kind: 'today' } }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags' }),
        heroImage: fields.text({ label: 'Hero Image', defaultValue: '' }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
    blogEn: collection({
      label: 'Blog (EN)',
      slugField: 'title',
      path: 'src/content/blog/en/*',
      format: { contentField: 'content' },
      parseSlugForSort: (slug) => turkishToEnglish(slug),
      schema: {
        title: fields.slug({
          name: { label: 'Title' },
          slug: {
            label: 'URL Slug',
            generate: (name) => turkishToEnglish(name)
          }
        }),
        description: fields.text({ label: 'Description', defaultValue: 'Short description of this blog post' }),
        pubDate: fields.date({ label: 'Publish Date', defaultValue: { kind: 'today' } }),
        updatedDate: fields.date({ label: 'Updated Date', defaultValue: { kind: 'today' } }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags' }),
        heroImage: fields.text({ label: 'Hero Image', defaultValue: '' }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});

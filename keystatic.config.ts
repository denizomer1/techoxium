import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'denizomer1/techoxium',
    branchPrefix: 'keystatic/',
  },
  ui: {
    brand: { name: 'Techoxium CMS' },
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/tr/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ 
          label: 'Title',
          validation: { isRequired: true }
        }),
        content: fields.mdx({
          label: 'Content',
        }),
      },
    }),
  },
});

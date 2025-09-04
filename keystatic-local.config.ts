import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: { name: 'Techoxium CMS' },
    navigation: {
      Blog: ['blog', 'blogEn'],
    },
  },
  collections: {
    blog: collection({
      label: 'Blog (TR)',
      slugField: 'title',
      path: 'src/content/tr/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ 
          label: 'Title',
          validation: { isRequired: true }
        }),
        description: fields.text({ 
          label: 'Description', 
          multiline: true
        }),
        pubDate: fields.date({ 
          label: 'Publish Date',
          defaultValue: { kind: 'today' }
        }),
        updatedDate: fields.date({ 
          label: 'Updated Date', 
          validation: { isRequired: false } 
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: props => props.value,
        }),
        heroImage: fields.text({ 
          label: 'Hero Image Path', 
          validation: { isRequired: false } 
        }),
        content: fields.mdx({
          label: 'Content',
        }),
      },
    }),
    blogEn: collection({
      label: 'Blog (EN)',
      slugField: 'title',
      path: 'src/content/en/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ 
          label: 'Title',
          validation: { isRequired: true }
        }),
        description: fields.text({ 
          label: 'Description', 
          multiline: true
        }),
        pubDate: fields.date({ 
          label: 'Publish Date',
          defaultValue: { kind: 'today' }
        }),
        updatedDate: fields.date({ 
          label: 'Updated Date', 
          validation: { isRequired: false } 
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: props => props.value,
        }),
        heroImage: fields.text({ 
          label: 'Hero Image Path', 
          validation: { isRequired: false } 
        }),
        content: fields.mdx({
          label: 'Content',
        }),
      },
    }),
  },
});

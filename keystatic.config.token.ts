import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'denizomer1',
      name: 'techoxium'
    },
    // Use Personal Access Token instead of OAuth
    token: process.env.GITHUB_TOKEN
  },
  ui: {
    brand: {
      name: 'Techoxium CMS'
    },
    navigation: {
      'Content': ['blog']
    }
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ 
          name: { label: 'Title' }
        }),
        description: fields.text({ 
          label: 'Description',
          multiline: true
        }),
        pubDate: fields.date({ 
          label: 'Publication Date',
          defaultValue: { kind: 'today' }
        }),
        updatedDate: fields.date({ 
          label: 'Updated Date'
        }),
        author: fields.text({ 
          label: 'Author', 
          defaultValue: 'Techoxium'
        }),
        heroImage: fields.image({
          label: 'Hero Image',
          directory: 'public/images',
          publicPath: '/images/'
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          { 
            label: 'Tags', 
            itemLabel: props => props.value || 'Empty tag'
          }
        ),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'public/images',
              publicPath: '/images/'
            }
          }
        })
      }
    })
  }
});

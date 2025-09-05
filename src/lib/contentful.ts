import { createClient } from 'contentful';

const isPreview = import.meta.env.PUBLIC_CONTENTFUL_PREVIEW === 'true';

export const contentfulClient = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: isPreview 
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN 
    : import.meta.env.CONTENTFUL_ACCESS_TOKEN,
  host: isPreview ? 'preview.contentful.com' : 'cdn.contentful.com',
});

// Blog post type definition
export interface BlogPost {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    slug: string;
    description?: string;
    content: any;
    heroImage?: {
      fields: {
        file: {
          url: string;
          details: {
            image: {
              width: number;
              height: number;
            };
          };
        };
        title: string;
      };
    };
    tags?: string[];
    publishDate: string;
    featured?: boolean;
  };
}

// Fetch all blog posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost',
      order: ['-fields.publishDate'],
    });
    
    return response.items as unknown as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Fetch single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    });
    
    return (response.items[0] as unknown as BlogPost) || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Fetch posts by tag
export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost',
      'fields.tags[in]': [tag],
      order: ['-fields.publishDate'],
    });
    
    return response.items as unknown as BlogPost[];
  } catch (error) {
    console.error('Error fetching posts by tag:', error);
    return [];
  }
}

// Get all unique tags
export async function getAllTags(): Promise<string[]> {
  try {
    const posts = await getBlogPosts();
    const allTags = posts.flatMap(post => post.fields.tags || []);
    return [...new Set(allTags)].sort();
  } catch (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
}

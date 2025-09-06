import { getCollection } from 'astro:content';

export async function GET() {
  try {
    const posts = await getCollection('blog');
    const items = posts.map((p: any) => ({
      id: p.id,
      slug: p.slug ?? p.id,
      title: p.data.title ?? '',
      description: p.data.description ?? '',
  date: p.data.date ? String(p.data.date) : '',
  image: p.data.image ?? null,
      tags: p.data.tags ?? [],
      // generate a kebab-case slug for each tag for robust routing
      tagSlugs: (p.data.tags || []).map((t: string) => String(t).toLowerCase().replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-')),
    }));

    return new Response(JSON.stringify(items), {
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return new Response(JSON.stringify([]), {
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    });
  }
}
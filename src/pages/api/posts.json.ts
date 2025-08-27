import { getCollection } from 'astro:content';

export async function GET(context: { url: { searchParams: URLSearchParams } }) {
  const locale = context.url.searchParams.get('locale') || 'tr';
  const collection = locale === 'en' ? 'blogEn' : 'blog';
  
  try {
    const posts = await getCollection(collection as any);
    const items = posts.map((p: any) => ({
      id: p.id,
      slug: p.slug ?? p.id,
      title: p.data.title ?? '',
      description: p.data.description ?? '',
      pubDate: p.data.pubDate ? String(p.data.pubDate) : '',
      heroImage: p.data.heroImage ?? null,
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

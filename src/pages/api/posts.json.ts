import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog');
  const items = posts.map((p) => ({
    id: p.id,
    slug: p.slug ?? p.id,
    title: p.data.title ?? '',
    description: p.data.description ?? p.data.excerpt ?? '',
    pubDate: p.data.pubDate ? String(p.data.pubDate) : '',
    heroImage: p.data.heroImage ?? null,
  }));

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json' },
  });
}

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = false;

export const GET: APIRoute = async ({ locals }) => {
  const user = (locals as any).user;
  if(!user) return new Response('Unauthorized', { status:401 });
  const posts = await getCollection('blog');
  return new Response(JSON.stringify(posts.map(p => ({ id: p.id, title: p.data.title }))), { headers:{ 'Content-Type':'application/json' }});
};

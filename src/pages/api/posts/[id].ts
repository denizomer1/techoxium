import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { resolveEnv } from '../../../lib/env';

export const prerender = false;

function kvKey(id: string){ return `post:${id}`; }

export const GET: APIRoute = async ({ params, locals }) => {
  const env: any = resolveEnv(locals);
  const id = params.id!;
  const override = await env.BLOG_DATA.get(kvKey(id));
  if(override){
    return new Response(JSON.stringify({ id, content: override, override: true }), { headers:{ 'Content-Type':'application/json' }});
  }
  const posts = await getCollection('blog');
  const post = posts.find(p => p.id === id || p.slug === id);
  if(!post) return new Response(JSON.stringify({ error:'Not found'}), { status:404 });
  return new Response(JSON.stringify({ id: post.id, data: post.data }), { headers:{ 'Content-Type':'application/json' }});
};

export const PUT: APIRoute = async ({ request, params, locals }) => {
  const env: any = resolveEnv(locals);
  const user = (locals as any).user;
  if(!user || user.role !== 'admin') return new Response('Forbidden', { status: 403 });
  const id = params.id!;
  const body = await request.json();
  const content = body.content as string;
  if(!content) return new Response(JSON.stringify({ error:'Missing content'}), { status:400 });
  await env.BLOG_DATA.put(kvKey(id), content);
  return new Response(JSON.stringify({ ok:true }));
};

export const DELETE: APIRoute = async ({ params, locals }) => {
  const env: any = resolveEnv(locals);
  const user = (locals as any).user;
  if(!user || user.role !== 'admin') return new Response('Forbidden', { status: 403 });
  const id = params.id!;
  await env.BLOG_DATA.delete(kvKey(id));
  return new Response(JSON.stringify({ ok:true }));
};

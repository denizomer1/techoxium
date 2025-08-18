import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ locals }) => {
  const user = (locals as any).user;
  if(!user) return new Response('Unauthorized', { status: 401 });
  return new Response(JSON.stringify({ user: { username: user.username, role: user.role } }), { headers:{ 'Content-Type':'application/json' }});
};

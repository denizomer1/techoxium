import type { APIRoute } from 'astro';
import { listUsers, createUser } from '../../../lib/auth';
import { resolveEnv } from '../../../lib/env';

export const prerender = false;

export const GET: APIRoute = async ({ locals }) => {
  const user = (locals as any).user;
  if(!user || user.role !== 'admin') return new Response('Forbidden', { status: 403 });
  const env: any = resolveEnv(locals);
  const users = await listUsers(env);
  return new Response(JSON.stringify(users.map(u => ({ username: u.username, role: u.role, created: u.created }))), { headers:{ 'Content-Type':'application/json' }});
};

export const POST: APIRoute = async ({ request, locals }) => {
  const user = (locals as any).user;
  if(!user || user.role !== 'admin') return new Response('Forbidden', { status: 403 });
  const env: any = resolveEnv(locals);
  const data = await request.json();
  const { username, password, role } = data;
  if(!username || !password || !role) return new Response(JSON.stringify({ error: 'Missing fields'}), { status:400 });
  const created = await createUser(env, username, password, role);
  return new Response(JSON.stringify({ username: created.username, role: created.role, created: created.created }), { status:201, headers:{ 'Content-Type':'application/json' }});
};

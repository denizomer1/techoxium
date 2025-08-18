import type { APIRoute } from 'astro';
import { updateUserRole, updateUserPassword, deleteUser, getUser } from '../../../lib/auth';
import { resolveEnv } from '../../../lib/env';

export const prerender = false;

export const GET: APIRoute = async ({ params, locals }) => {
  const admin = (locals as any).user;
  if(!admin || admin.role !== 'admin') return new Response('Forbidden', { status:403 });
  const env: any = resolveEnv(locals);
  const u = await getUser(env, params.username!);
  if(!u) return new Response('Not found', { status:404 });
  return new Response(JSON.stringify({ username: u.username, role: u.role, created: u.created }), { headers:{ 'Content-Type':'application/json' }});
};

export const PATCH: APIRoute = async ({ request, params, locals }) => {
  const admin = (locals as any).user;
  if(!admin || admin.role !== 'admin') return new Response('Forbidden', { status:403 });
  const env: any = resolveEnv(locals);
  const body = await request.json();
  const { role, password } = body;
  let updated = null;
  if(role){ updated = await updateUserRole(env, params.username!, role); }
  if(password){ updated = await updateUserPassword(env, params.username!, password); }
  if(!updated) return new Response(JSON.stringify({ error:'No changes'}), { status:400 });
  return new Response(JSON.stringify({ username: updated.username, role: updated.role, created: updated.created }), { headers:{ 'Content-Type':'application/json' }});
};

export const DELETE: APIRoute = async ({ params, locals }) => {
  const admin = (locals as any).user;
  if(!admin || admin.role !== 'admin') return new Response('Forbidden', { status:403 });
  const env: any = resolveEnv(locals);
  await deleteUser(env, params.username!);
  return new Response(JSON.stringify({ ok:true }));
};

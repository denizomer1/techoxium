import type { APIRoute } from 'astro';
import { verifyLogin, createSession, sessionCookie, ensureInitialAdmin } from '../../lib/auth';
import { resolveEnv } from '../../lib/env';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, locals }) => {
  const env: any = resolveEnv(locals);
  try { await ensureInitialAdmin(env); } catch(e){}
  const data = await request.formData();
  const username = (data.get('username') || '').toString();
  const password = (data.get('password') || '').toString();
  if(!username || !password) return new Response(JSON.stringify({ error: 'Missing credentials'}), { status: 400 });
  try {
    const user = await verifyLogin(env, username, password);
    if(!user) return new Response(JSON.stringify({ error: 'Invalid credentials'}), { status: 401 });
    const sess = await createSession(env, user.username);
    return new Response(JSON.stringify({ ok: true, user: { username: user.username, role: user.role } }), {
      status: 200,
      headers: { 'Set-Cookie': sessionCookie(sess.sid), 'Content-Type':'application/json' }
    });
  } catch(e: any){
    return new Response(JSON.stringify({ error: e.message || 'Login failed'}), { status: 500 });
  }
};

import type { APIRoute } from 'astro';
import { deleteSession } from '../../lib/auth';
import { resolveEnv } from '../../lib/env';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  const env: any = resolveEnv(locals);
  const cookie = request.headers.get('Cookie') || '';
  const match = cookie.match(/__session=([^;]+)/);
  if(match){
    const sid = decodeURIComponent(match[1]);
    await deleteSession(env, sid);
  }
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'Set-Cookie': '__session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0',
      'Content-Type': 'application/json'
    }
  });
};

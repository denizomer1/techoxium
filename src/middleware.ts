import type { MiddlewareHandler } from 'astro';
import { getSession, getUser } from './lib/auth';

// Inject a CSP header (report-only first) so we can iterate safely.
// After verifying no needed resources are blocked, switch to "Content-Security-Policy".
// Add missing gstatic identity script and Google accounts endpoints for Disqus SSO / Google login.
const cspDirectives = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self' https://accounts.google.com",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.disqus.com https://*.disquscdn.com https://www.youtube.com https://www.gstatic.com https://accounts.google.com https://cdn.viglink.com https://d-code.liadm.com",
  "connect-src 'self' https://*.disqus.com https://*.disquscdn.com https://www.youtube.com https://accounts.google.com https://cdn.viglink.com https://d-code.liadm.com",
  "img-src 'self' data: blob: https://*.disqus.com https://*.disquscdn.com https://referrer.disqus.com https://i.ytimg.com https://www.google.com https://www.gstatic.com https://accounts.google.com https://cdn.viglink.com",
  "style-src 'self' 'unsafe-inline' https://*.disquscdn.com https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "frame-src https://*.disqus.com https://disqus.com https://www.youtube.com https://accounts.google.com",
  "object-src 'none'",
  "upgrade-insecure-requests"
];

export const onRequest: MiddlewareHandler = async (context, next) => {
  const { request, locals, url } = context;
  // Attach env
  const env: any = (locals as any)?.runtime?.env || (locals as any)?.cloudflare?.env || (globalThis as any).process?.env || {};
  // Parse session cookie
  const cookie = request.headers.get('Cookie') || '';
  const match = cookie.match(/__session=([^;]+)/);
  if(match){
    const sid = decodeURIComponent(match[1]);
    try {
      const sess = await getSession(env, sid);
      if(sess){
        const user = await getUser(env, sess.username);
        (locals as any).session = sess;
        (locals as any).user = user;
      }
    } catch {}
  }

  // Protect admin routes & modifying APIs
  const pathname = new URL(url).pathname;
  const isApi = pathname.startsWith('/api/');
  const publicApi = ['/api/login', '/api/logout'];
  const needsAuth = pathname.startsWith('/admin') || (isApi && !publicApi.includes(pathname));
  if(needsAuth){
    if(!(locals as any).user){
      return new Response('Unauthorized', { status: 401 });
    }
  }

  const response = await next();
  const csp = cspDirectives.join('; ');
  response.headers.set('Content-Security-Policy-Report-Only', csp);
  return response;
};

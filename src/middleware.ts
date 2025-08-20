import type { MiddlewareHandler } from 'astro';

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
  const response = await next();
  const csp = cspDirectives.join('; ');
  response.headers.set('Content-Security-Policy-Report-Only', csp);
  // Basic caching strategy: short cache for HTML, long immutable for static assets
  try {
    const url = new URL(context.request.url);
    const path = url.pathname;
    const type = response.headers.get('Content-Type') || '';
    if (type.includes('text/html')) {
      response.headers.set('Cache-Control', 'public, max-age=300, must-revalidate');
    } else if (/\.(css|js|mjs|woff2?|png|svg|jpg|jpeg|gif|webp)$/i.test(path)) {
      if (!response.headers.has('Cache-Control')) {
        response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      }
    }
  } catch {}
  return response;
};

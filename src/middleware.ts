import type { MiddlewareHandler } from 'astro';

const cspDirectives = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://*.disqus.com https://*.disquscdn.com",
  "connect-src 'self' https://*.disqus.com https://*.disquscdn.com",
  "img-src 'self' data: https://*.disqus.com https://*.disquscdn.com https://i.ytimg.com",
  "style-src 'self' 'unsafe-inline' https://*.disquscdn.com",
  "font-src 'self' data:",
  "frame-src https://*.disqus.com https://disqus.com",
  "object-src 'none'"
];

export const onRequest: MiddlewareHandler = async (context, next) => {
  const response = await next();
  
  // Set CSP header
  const csp = cspDirectives.join('; ');
  response.headers.set('Content-Security-Policy-Report-Only', csp);
  
  // Basic caching strategy
  const url = new URL(context.request.url);
  const path = url.pathname;
  const contentType = response.headers.get('Content-Type') || '';
  
  if (contentType.includes('text/html')) {
    response.headers.set('Cache-Control', 'public, max-age=300');
  } else if (/\.(css|js|mjs|woff2?|png|svg|jpg|jpeg|gif|webp)$/i.test(path)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  
  return response;
};

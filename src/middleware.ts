import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async ({ request }, next) => {
  const url = new URL(request.url);
  
  // Skip middleware for static assets and API routes
  if (url.pathname.startsWith('/api/') || 
      url.pathname.startsWith('/_') || 
      url.pathname.includes('.')) {
    return next();
  }

  // No language routing needed - everything is Turkish now
  const response = await next();
  return response;
};

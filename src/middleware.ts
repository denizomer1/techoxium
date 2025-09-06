import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async ({ request }, next) => {
  const url = new URL(request.url);
  
  if (url.pathname.startsWith('/api/') || 
      url.pathname.startsWith('/_') || 
      url.pathname.includes('.')) {
    return next();
  }
  const response = await next();
  return response;
};

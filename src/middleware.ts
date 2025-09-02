import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async ({ request }, next) => {
  const url = new URL(request.url);
  
  // Skip middleware for static assets and API routes
  if (url.pathname.startsWith('/api/') || 
      url.pathname.startsWith('/_') || 
      url.pathname.includes('.') ||
      url.pathname.startsWith('/keystatic')) {
    return next();
  }

  // IP-based language detection
  const country = request.headers.get('cf-ipcountry') || 'TR'; // Default to TR for local development
  const isFromTurkey = country === 'TR';
  
  // Get current path info
  const isEnglishPath = url.pathname.startsWith('/en');
  const isTurkishPath = !isEnglishPath && url.pathname !== '/';
  
  // Auto-redirect based on IP country
  if (url.pathname === '/') {
    // Root page: redirect based on country
    if (isFromTurkey) {
      return Response.redirect(new URL('/tr', url), 302);
    } else {
      return Response.redirect(new URL('/en', url), 302);
    }
  }
  
  // Auto-redirect if user is on wrong language based on their country
  if (!request.headers.get('cookie')?.includes('manual-lang=true')) {
    if (isFromTurkey && isEnglishPath) {
      // Turkish user on English page -> redirect to Turkish
      const newPath = url.pathname.replace(/^\/en/, '') || '/tr';
      return Response.redirect(new URL(newPath, url), 302);
    } else if (!isFromTurkey && isTurkishPath) {
      // Non-Turkish user on Turkish page -> redirect to English
      const newPath = `/en${url.pathname}`;
      return Response.redirect(new URL(newPath, url), 302);
    }
  }

  const response = await next();
  return response;
};

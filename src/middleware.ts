import type { MiddlewareHandler } from 'astro';

const cspDirectives = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://*.disqus.com https://*.disquscdn.com https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com",
  "connect-src 'self' https://*.disqus.com https://*.disquscdn.com https://www.google-analytics.com https://analytics.google.com",
  "img-src 'self' data: https://*.disqus.com https://*.disquscdn.com https://i.ytimg.com https://www.google-analytics.com",
  "style-src 'self' 'unsafe-inline' https://*.disquscdn.com",
  "font-src 'self' data:",
  "frame-src https://*.disqus.com https://disqus.com https://pagead2.googlesyndication.com",
  "object-src 'none'"
];

// Language detection function
function detectPreferredLanguage(request: Request): string {
  // Get the current URL
  const currentUrl = new URL(request.url);
  
  // Skip language detection for API routes and assets
  if (currentUrl.pathname.startsWith('/api/') || 
      currentUrl.pathname.startsWith('/_') || 
      currentUrl.pathname.includes('.')) {
    return 'skip';
  }

  // Check if user has a preferred language cookie
  const cookies = request.headers.get('cookie');
  const langCookie = cookies?.match(/language=([^;]+)/)?.[1];
  
  // Get Accept-Language header for browser preference
  const acceptLanguage = request.headers.get('accept-language') || '';
  
  // Try to get country from Cloudflare headers (when deployed)
  const country = request.headers.get('cf-ipcountry');
  
  // Determine preferred language
  let preferredLanguage = 'tr'; // Default to Turkish
  
  if (langCookie) {
    // Use cookie preference first
    preferredLanguage = langCookie === 'en' ? 'en' : 'tr';
  } else if (country) {
    // Use country-based detection
    const englishCountries = ['US', 'GB', 'AU', 'CA', 'IE', 'NZ', 'ZA', 'IN'];
    preferredLanguage = englishCountries.includes(country) ? 'en' : 'tr';
  } else {
    // Fall back to browser language
    const browserLang = acceptLanguage.toLowerCase();
    if (browserLang.includes('en') && !browserLang.includes('tr')) {
      preferredLanguage = 'en';
    }
  }
  
  return preferredLanguage;
}

// Basic authentication for Keystatic
function checkAuth(request: Request): boolean {
  const authHeader = request.headers.get('authorization');
  
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return false;
  }
  
  const credentials = authHeader.slice(6); // Remove 'Basic '
  const decoded = atob(credentials);
  const [username, password] = decoded.split(':');
  
  // Simple authentication - you can change these credentials
  return username === 'admin' && password === '135790Bq';
}

export const onRequest: MiddlewareHandler = async ({ request }, next) => {
  const url = new URL(request.url);
  
  // Check if the request is for Keystatic admin
  if (url.pathname.startsWith('/keystatic')) {
    if (!checkAuth(request)) {
      return new Response('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Keystatic Admin"'
        }
      });
    }
  }
  
  // Language detection and redirection
  const preferredLanguage = detectPreferredLanguage(request);
  
  if (preferredLanguage !== 'skip') {
    // Check current path locale
    const isEnglishPath = url.pathname.startsWith('/en');
    const isTurkishPath = !isEnglishPath;
    
    // Get language cookie to see if user has made explicit choice
    const cookies = request.headers.get('cookie');
    const langCookie = cookies?.match(/language=([^;]+)/)?.[1];
    
    // Only redirect if there's a language mismatch and no explicit language cookie
    if (!langCookie) {
      if (preferredLanguage === 'en' && isTurkishPath && url.pathname !== '/') {
        // Redirect Turkish path to English and set a language cookie to avoid loops
        const newPath = `/en${url.pathname}`;
        const redirectRes = Response.redirect(new URL(newPath + url.search, url), 302);
        redirectRes.headers.set('Set-Cookie', 'language=en; Path=/; Max-Age=31536000; SameSite=Lax');
        return redirectRes;
      } else if (preferredLanguage === 'tr' && isEnglishPath) {
        // Redirect English path to Turkish and set a language cookie
        const newPath = url.pathname.replace(/^\/en/, '') || '/';
        const redirectRes = Response.redirect(new URL(newPath + url.search, url), 302);
        redirectRes.headers.set('Set-Cookie', 'language=tr; Path=/; Max-Age=31536000; SameSite=Lax');
        return redirectRes;
      }
    }
  }
  
  const response = await next();
  
  // Set CSP header
  const csp = cspDirectives.join('; ');
  response.headers.set('Content-Security-Policy-Report-Only', csp);
  
  // Basic caching strategy
  const path = url.pathname;
  const contentType = response.headers.get('Content-Type') || '';
  
  if (contentType.includes('text/html')) {
    response.headers.set('Cache-Control', 'public, max-age=300');
  } else if (/\.(css|js|mjs|woff2?|png|svg|jpg|jpeg|gif|webp)$/i.test(path)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  
  return response;
};

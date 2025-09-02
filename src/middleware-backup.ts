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

  const response = await next();
  return response;
};

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

// Keystatic authentication removed - now accessible without login
// Basic authentication function removed
// function checkAuth(request: Request): boolean {
//   const authHeader = request.headers.get('authorization');
//   
//   if (!authHeader || !authHeader.startsWith('Basic ')) {
//     return false;
//   }
//   
//   const credentials = authHeader.slice(6); // Remove 'Basic '
//   const decoded = atob(credentials);
//   const [username, password] = decoded.split(':');
//   
//   // Simple authentication - you can change these credentials
//   return username === 'admin' && password === '135790Bq';
// }

export const onRequest: MiddlewareHandler = async ({ request }, next) => {
  const url = new URL(request.url);
  
  // Skip middleware for static assets and API routes
  if (url.pathname.startsWith('/api/') || 
      url.pathname.startsWith('/_') || 
      url.pathname.includes('.') ||
      url.pathname.startsWith('/keystatic')) {
    return next();
  }

  const response = await next();
  return response;
};
};

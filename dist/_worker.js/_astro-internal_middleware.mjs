globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_D7JCRfrr.mjs';
import './chunks/astro/server_Dinni5C1.mjs';
import { s as sequence } from './chunks/index_BOEptLL9.mjs';

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
function detectPreferredLanguage(request) {
  const currentUrl = new URL(request.url);
  if (currentUrl.pathname.startsWith("/api/") || currentUrl.pathname.startsWith("/_") || currentUrl.pathname.includes(".")) {
    return "skip";
  }
  const cookies = request.headers.get("cookie");
  const langCookie = cookies?.match(/language=([^;]+)/)?.[1];
  const acceptLanguage = request.headers.get("accept-language") || "";
  const country = request.headers.get("cf-ipcountry");
  let preferredLanguage = "tr";
  if (langCookie) {
    preferredLanguage = langCookie === "en" ? "en" : "tr";
  } else if (country) {
    const englishCountries = ["US", "GB", "AU", "CA", "IE", "NZ", "ZA", "IN"];
    preferredLanguage = englishCountries.includes(country) ? "en" : "tr";
  } else {
    const browserLang = acceptLanguage.toLowerCase();
    if (browserLang.includes("en") && !browserLang.includes("tr")) {
      preferredLanguage = "en";
    }
  }
  return preferredLanguage;
}
function checkAuth(request) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return false;
  }
  const credentials = authHeader.slice(6);
  const decoded = atob(credentials);
  const [username, password] = decoded.split(":");
  return username === "admin" && password === "135790Bq";
}
const onRequest$2 = async ({ request }, next) => {
  const url = new URL(request.url);
  if (url.pathname.startsWith("/keystatic")) {
    if (!checkAuth(request)) {
      return new Response("Authentication required", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Keystatic Admin"'
        }
      });
    }
  }
  const preferredLanguage = detectPreferredLanguage(request);
  if (preferredLanguage !== "skip") {
    const isEnglishPath = url.pathname.startsWith("/en");
    const isTurkishPath = !isEnglishPath;
    const cookies = request.headers.get("cookie");
    const langCookie = cookies?.match(/language=([^;]+)/)?.[1];
    if (!langCookie) {
      if (preferredLanguage === "en" && isTurkishPath && url.pathname !== "/") {
        const newPath = `/en${url.pathname}`;
        const redirectRes = Response.redirect(new URL(newPath + url.search, url), 302);
        redirectRes.headers.set("Set-Cookie", "language=en; Path=/; Max-Age=31536000; SameSite=Lax");
        return redirectRes;
      } else if (preferredLanguage === "tr" && isEnglishPath) {
        const newPath = url.pathname.replace(/^\/en/, "") || "/";
        const redirectRes = Response.redirect(new URL(newPath + url.search, url), 302);
        redirectRes.headers.set("Set-Cookie", "language=tr; Path=/; Max-Age=31536000; SameSite=Lax");
        return redirectRes;
      }
    }
  }
  const response = await next();
  const csp = cspDirectives.join("; ");
  response.headers.set("Content-Security-Policy-Report-Only", csp);
  const path = url.pathname;
  const contentType = response.headers.get("Content-Type") || "";
  if (contentType.includes("text/html")) {
    response.headers.set("Cache-Control", "public, max-age=300");
  } else if (/\.(css|js|mjs|woff2?|png|svg|jpg|jpeg|gif|webp)$/i.test(path)) {
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable");
  }
  return response;
};

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	onRequest$2
	
);

export { onRequest };

globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead } from '../../chunks/astro/server_C-RMCnIV.mjs';
import { $ as $$Footer, a as $$Header, b as $$BaseHead } from '../../chunks/Footer_DVz6FYfL.mjs';
/* empty css                                  */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = "Page Not Found - Techoxium";
  const description = "The page you are looking for could not be found. Please return to the homepage to explore other content.";
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-oge2ccov> <head>', '<script type="application/ld+json">\n    {\n      "@context": "https://schema.org",\n      "@type": "WebPage",\n      "name": "404 - Page Not Found",\n      "description": "The page you are looking for could not be found",\n      "url": "https://techoxium.com/en/404",\n      "isPartOf": {\n        "@type": "WebSite",\n        "name": "Techoxium",\n        "url": "https://techoxium.com"\n      }\n    }\n    <\/script>', "</head> <body data-astro-cid-oge2ccov> ", ` <main class="error-page" data-astro-cid-oge2ccov> <div class="error-container" data-astro-cid-oge2ccov> <div class="error-content" data-astro-cid-oge2ccov> <h1 class="error-code" data-astro-cid-oge2ccov>404</h1> <h2 class="error-title" data-astro-cid-oge2ccov>Page Not Found</h2> <p class="error-description" data-astro-cid-oge2ccov>
The page you are looking for doesn't exist or may have been moved.
</p> <div class="error-actions" data-astro-cid-oge2ccov> <a href="/en" class="error-btn primary" data-astro-cid-oge2ccov>Go to Homepage</a> <a href="/en/blog" class="error-btn secondary" data-astro-cid-oge2ccov>Visit Blog</a> </div> </div> <div class="error-visual" data-astro-cid-oge2ccov> <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-oge2ccov> <circle cx="12" cy="12" r="10" data-astro-cid-oge2ccov></circle> <path d="m15 9-6 6" data-astro-cid-oge2ccov></path> <path d="m9 9 6 6" data-astro-cid-oge2ccov></path> </svg> </div> </div> </main> `, "  </body> </html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "locale": "en", "data-astro-cid-oge2ccov": true }), renderHead(), renderComponent($$result, "Header", $$Header, { "locale": "en", "data-astro-cid-oge2ccov": true }), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-oge2ccov": true }));
}, "/Users/mac/Desktop/techoxium/src/pages/en/404.astro", void 0);

const $$file = "/Users/mac/Desktop/techoxium/src/pages/en/404.astro";
const $$url = "/en/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

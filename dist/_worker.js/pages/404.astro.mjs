globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead } from '../chunks/astro/server_B-4SWSrX.mjs';
import { $ as $$Footer, a as $$Header, b as $$BaseHead } from '../chunks/Footer_BeM5TmgP.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = "Sayfa Bulunamad\u0131 - Techoxium";
  const description = "Arad\u0131\u011F\u0131n\u0131z sayfa bulunamad\u0131. Ana sayfaya d\xF6nerek di\u011Fer i\xE7eriklere g\xF6z atabilirsiniz.";
  return renderTemplate(_a || (_a = __template(['<html lang="tr" data-astro-cid-zetdm5md> <head>', '<script type="application/ld+json">\n    {\n      "@context": "https://schema.org",\n      "@type": "WebPage",\n      "name": "404 - Sayfa Bulunamad\u0131",\n      "description": "Arad\u0131\u011F\u0131n\u0131z sayfa bulunamad\u0131",\n      "url": "https://techoxium.com/404",\n      "isPartOf": {\n        "@type": "WebSite",\n        "name": "Techoxium",\n        "url": "https://techoxium.com"\n      }\n    }\n    <\/script>', "</head> <body data-astro-cid-zetdm5md> ", ` <main class="error-page" data-astro-cid-zetdm5md> <div class="error-container" data-astro-cid-zetdm5md> <div class="error-content" data-astro-cid-zetdm5md> <h1 class="error-code" data-astro-cid-zetdm5md>404</h1> <h2 class="error-title" data-astro-cid-zetdm5md>Sayfa Bulunamad\u0131</h2> <p class="error-description" data-astro-cid-zetdm5md>
Arad\u0131\u011F\u0131n\u0131z sayfa mevcut de\u011Fil veya ta\u015F\u0131nm\u0131\u015F olabilir.
</p> <div class="error-actions" data-astro-cid-zetdm5md> <a href="/" class="error-btn primary" data-astro-cid-zetdm5md>Ana Sayfaya D\xF6n</a> <a href="/blog" class="error-btn secondary" data-astro-cid-zetdm5md>Blog'a Git</a> </div> </div> <div class="error-visual" data-astro-cid-zetdm5md> <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zetdm5md> <circle cx="12" cy="12" r="10" data-astro-cid-zetdm5md></circle> <path d="m15 9-6 6" data-astro-cid-zetdm5md></path> <path d="m9 9 6 6" data-astro-cid-zetdm5md></path> </svg> </div> </div> </main> `, "  </body> </html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "locale": "tr", "data-astro-cid-zetdm5md": true }), renderHead(), renderComponent($$result, "Header", $$Header, { "locale": "tr", "data-astro-cid-zetdm5md": true }), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-zetdm5md": true }));
}, "/Users/mac/Desktop/techoxium/src/pages/404.astro", void 0);

const $$file = "/Users/mac/Desktop/techoxium/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

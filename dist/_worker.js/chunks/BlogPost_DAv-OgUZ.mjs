globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as createAstro, c as createComponent, r as renderTemplate, q as renderScript, a as renderComponent, t as renderSlot, e as addAttribute, b as renderHead, u as unescapeHTML } from './astro/server_B-4SWSrX.mjs';
import { $ as $$Footer, a as $$Header, b as $$BaseHead } from './Footer_BeM5TmgP.mjs';
import { $ as $$FormattedDate } from './FormattedDate_BOvJ5p-l.mjs';
import { b as $$BlogComment, a as $$TextToSpeech, $ as $$FontSizeControl } from './TextToSpeech_DGTZDMNM.mjs';
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://techoxium.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title = "", description = "", pubDate, updatedDate, heroImage, locale = "tr" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<html", " data-astro-cid-bvzihdzo> <head>", '<!-- Structured Data for Article --><script type="application/ld+json">', "<\/script>", "</head> <body data-astro-cid-bvzihdzo> ", ' <main class="blog-post-main" data-astro-cid-bvzihdzo> <article class="blog-post" data-astro-cid-bvzihdzo> <header class="post-header" data-astro-cid-bvzihdzo> <div class="post-meta" data-astro-cid-bvzihdzo> <time class="post-date" data-astro-cid-bvzihdzo> ', " </time> ", ' </div> <h1 class="post-title" data-astro-cid-bvzihdzo>', "</h1> ", ' <div class="accessibility-controls" data-astro-cid-bvzihdzo> ', " ", ' <div class="share-controls" aria-label="Share post" data-astro-cid-bvzihdzo> <button class="share-btn" id="share-x" title="Share on X" aria-label="Share on X" data-astro-cid-bvzihdzo>X</button> <button class="share-btn" id="share-copy" title="Copy link" aria-label="Copy link" data-astro-cid-bvzihdzo> <!-- Copy icon (animated) --> <svg class="icon icon-copy" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" data-astro-cid-bvzihdzo> <g data-astro-cid-bvzihdzo> <rect x="9" y="9" width="10" height="10" rx="2" ry="2" fill="currentColor" data-astro-cid-bvzihdzo></rect> <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="none" data-astro-cid-bvzihdzo></path> </g> </svg> </button> </div> </div> </header> ', ' <div class="post-content prose" data-astro-cid-bvzihdzo> ', " </div> ", " </article> </main> ", "  ", "</body></html>"])), addAttribute(locale, "lang"), renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "locale": locale, "data-astro-cid-bvzihdzo": true }), unescapeHTML(
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "image": heroImage ? new URL(heroImage, Astro2.site).toString() : new URL("/logo.png", Astro2.site).toString(),
      "datePublished": pubDate ? new Date(pubDate).toISOString() : void 0,
      "dateModified": updatedDate ? new Date(updatedDate).toISOString() : pubDate ? new Date(pubDate).toISOString() : void 0,
      "author": {
        "@type": "Person",
        "name": "Techoxium",
        "url": "https://techoxium.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Techoxium",
        "logo": {
          "@type": "ImageObject",
          "url": new URL("/logo.png", Astro2.site).toString()
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": new URL(Astro2.url.pathname, Astro2.site).toString()
      },
      "url": new URL(Astro2.url.pathname, Astro2.site).toString(),
      "isPartOf": {
        "@type": "WebSite",
        "name": "Techoxium",
        "url": "https://techoxium.com"
      },
      "inLanguage": locale === "en" ? "en-US" : "tr-TR",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": locale === "en" ? "Home" : "Ana Sayfa",
            "item": new URL(locale === "en" ? "/en" : "/", Astro2.site).toString()
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": locale === "en" ? "Blog" : "Blog",
            "item": new URL(locale === "en" ? "/en/blog" : "/blog", Astro2.site).toString()
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": title,
            "item": new URL(Astro2.url.pathname, Astro2.site).toString()
          }
        ]
      }
    })
  ), renderHead(), renderComponent($$result, "Header", $$Header, { "locale": locale, "data-astro-cid-bvzihdzo": true }), renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-bvzihdzo": true }), updatedDate && renderTemplate`<time class="post-updated" data-astro-cid-bvzihdzo>
Güncelleme: ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })} </time>`, title, description && renderTemplate`<p class="post-description" data-astro-cid-bvzihdzo>${description}</p>`, renderComponent($$result, "FontSizeControl", $$FontSizeControl, { "locale": locale, "data-astro-cid-bvzihdzo": true }), renderComponent($$result, "TextToSpeech", $$TextToSpeech, { "locale": locale, "data-astro-cid-bvzihdzo": true }), heroImage && renderTemplate`<div class="hero-image" data-astro-cid-bvzihdzo> <img${addAttribute(heroImage, "src")}${addAttribute(title, "alt")}${addAttribute(1200, "width")}${addAttribute(630, "height")} loading="eager" decoding="async" data-astro-cid-bvzihdzo> </div>`, renderSlot($$result, $$slots["default"]), renderComponent($$result, "BlogComment", $$BlogComment, { "locale": locale, "data-astro-cid-bvzihdzo": true }), renderComponent($$result, "Footer", $$Footer, { "locale": locale, "data-astro-cid-bvzihdzo": true }), renderScript($$result, "/Users/mac/Desktop/techoxium/src/layouts/BlogPost.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/mac/Desktop/techoxium/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };

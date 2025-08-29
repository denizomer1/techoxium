globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead, u as unescapeHTML, e as addAttribute } from '../chunks/astro/server_C-RMCnIV.mjs';
import { $ as $$Footer, t, a as $$Header, b as $$BaseHead } from '../chunks/Footer_CH2mcyHc.mjs';
import { g as getCollection } from '../chunks/_astro_content_EW_c4Bvs.mjs';
import { $ as $$PostCard } from '../chunks/PostCard_BbZipCvs.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const locale = "tr";
  const rawPosts = await getCollection("blog");
  const posts = rawPosts.map((p) => ({
    ...p,
    data: { ...p.data, pubDate: p.data.pubDate instanceof Date ? p.data.pubDate : new Date(p.data.pubDate) }
  })).sort((a, b) => Number(b.data.pubDate) - Number(a.data.pubDate));
  const [firstPost, ...restPosts] = posts;
  return renderTemplate(_a || (_a = __template(["<html", " data-astro-cid-j7pv25f6> <head>", '<!-- Structured Data for Website --><script type="application/ld+json">', "<\/script>", "</head> <body data-astro-cid-j7pv25f6> ", " <main data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>", "</h1> <section data-astro-cid-j7pv25f6> ", ' <div class="post-list grid grid-2" data-astro-cid-j7pv25f6> ', " </div> </section> </main> ", " </body></html>"])), addAttribute(locale, "lang"), renderComponent($$result, "BaseHead", $$BaseHead, { "title": t(locale, "site.title"), "description": t(locale, "site.description"), "locale": locale, "data-astro-cid-j7pv25f6": true }), unescapeHTML(
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Techoxium",
      "description": t(locale, "site.description"),
      "url": "https://techoxium.com",
      "publisher": {
        "@type": "Organization",
        "name": "Techoxium",
        "logo": {
          "@type": "ImageObject",
          "url": "https://techoxium.com/logo.png"
        }
      }
    })
  ), renderHead(), renderComponent($$result, "Header", $$Header, { "locale": locale, "data-astro-cid-j7pv25f6": true }), t(locale, "blog.title"), firstPost && renderTemplate`<div class="featured-list" data-astro-cid-j7pv25f6> ${renderComponent($$result, "PostCard", $$PostCard, { "href": `/${firstPost.id}/`, "title": firstPost.data.title, "description": firstPost.data.description, "pubDate": firstPost.data.pubDate, "heroImage": firstPost.data.heroImage, "large": true, "data-astro-cid-j7pv25f6": true })} </div>`, restPosts.map((post) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "href": `/${post.id}/`, "title": post.data.title, "description": post.data.description, "pubDate": post.data.pubDate, "heroImage": post.data.heroImage, "data-astro-cid-j7pv25f6": true })}`), renderComponent($$result, "Footer", $$Footer, { "locale": locale, "data-astro-cid-j7pv25f6": true }));
}, "/Users/mac/Desktop/techoxium/src/pages/index.astro", void 0);

const $$file = "/Users/mac/Desktop/techoxium/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

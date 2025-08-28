globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, d as addAttribute, r as renderComponent, e as renderHead, a as renderTemplate } from '../chunks/astro/server_Dwc-Xb_E.mjs';
import { t, $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_BrInUyoc.mjs';
import { g as getCollection } from '../chunks/_astro_content_D24jhqoj.mjs';
import { $ as $$PostCard } from '../chunks/PostCard_H-AIooQS.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const locale = "en";
  const rawPosts = await getCollection("blogEn");
  const posts = rawPosts.map((p) => ({
    ...p,
    data: { ...p.data, pubDate: p.data.pubDate instanceof Date ? p.data.pubDate : new Date(p.data.pubDate) }
  })).sort((a, b) => Number(b.data.pubDate) - Number(a.data.pubDate));
  const [firstPost, ...restPosts] = posts;
  return renderTemplate`<html${addAttribute(locale, "lang")} data-astro-cid-dhfotatx> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": t(locale, "site.title"), "description": t(locale, "site.description"), "locale": locale, "data-astro-cid-dhfotatx": true })}${renderHead()}</head> <body data-astro-cid-dhfotatx> ${renderComponent($$result, "Header", $$Header, { "locale": locale, "data-astro-cid-dhfotatx": true })} <main data-astro-cid-dhfotatx> <h1 data-astro-cid-dhfotatx>${t(locale, "blog.title")}</h1> <section data-astro-cid-dhfotatx> ${firstPost && renderTemplate`<div class="featured-list" data-astro-cid-dhfotatx> ${renderComponent($$result, "PostCard", $$PostCard, { "href": `/en/${firstPost.id}/`, "title": firstPost.data.title, "description": firstPost.data.description, "pubDate": firstPost.data.pubDate, "heroImage": firstPost.data.heroImage, "large": true, "data-astro-cid-dhfotatx": true })} </div>`} <div class="post-list grid grid-2" data-astro-cid-dhfotatx> ${restPosts.map((post) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "href": `/en/${post.id}/`, "title": post.data.title, "description": post.data.description, "pubDate": post.data.pubDate, "heroImage": post.data.heroImage, "data-astro-cid-dhfotatx": true })}`)} </div> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "locale": locale, "data-astro-cid-dhfotatx": true })} </body></html>`;
}, "/Users/mac/Desktop/techoxium/src/pages/en/index.astro", void 0);

const $$file = "/Users/mac/Desktop/techoxium/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, r as renderComponent, e as renderHead, d as addAttribute, a as renderTemplate } from '../../../chunks/astro/server_Dwc-Xb_E.mjs';
import { p as postMatchesTag, $ as $$BaseHead, a as $$Header, b as $$Footer } from '../../../chunks/Footer_DqNLYxEy.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_BYzDYrtE.mjs';
/* empty css                                       */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://techoxium.com");
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { params } = Astro2;
  const tag = String(params.tag || "");
  const locale = "en";
  const collection = "blogEn";
  const posts = (
    /** @type {any[]} */
    await getCollection(
      /** @type {any} */
      collection
    )
  );
  const filtered = posts.filter((p) => postMatchesTag(p, tag));
  return renderTemplate`<html lang="en" data-astro-cid-z56tv3dr> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `#${tag}`, "locale": locale, "data-astro-cid-z56tv3dr": true })}${renderHead()}</head> <body data-astro-cid-z56tv3dr> ${renderComponent($$result, "Header", $$Header, { "locale": locale, "data-astro-cid-z56tv3dr": true })} <main class="tag-main" data-astro-cid-z56tv3dr> <div class="container" data-astro-cid-z56tv3dr> <h1 data-astro-cid-z56tv3dr>#${tag}</h1> ${filtered.length ? renderTemplate`<ul class="tag-list" data-astro-cid-z56tv3dr> ${filtered.map((p) => {
    const post = (
      /** @type {any} */
      p
    );
    return renderTemplate`<li class="tag-item" data-astro-cid-z56tv3dr><a${addAttribute(`/${"en/" }${post.id}/`, "href")} data-astro-cid-z56tv3dr>${post.data.title}</a></li>`;
  })} </ul>` : renderTemplate`<p data-astro-cid-z56tv3dr>No posts in this category yet.</p>`} </div> </main> ${renderComponent($$result, "Footer", $$Footer, { "locale": locale, "data-astro-cid-z56tv3dr": true })} </body></html>`;
}, "/Users/mac/Desktop/techoxium/src/pages/en/tag/[tag].astro", void 0);

const $$file = "/Users/mac/Desktop/techoxium/src/pages/en/tag/[tag].astro";
const $$url = "/en/tag/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

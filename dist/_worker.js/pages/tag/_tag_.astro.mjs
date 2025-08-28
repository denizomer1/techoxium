globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as createAstro, c as createComponent, e as addAttribute, a as renderComponent, b as renderHead, r as renderTemplate } from '../../chunks/astro/server_C-RMCnIV.mjs';
import { p as postMatchesTag, b as $$BaseHead, a as $$Header, $ as $$Footer } from '../../chunks/Footer_DVz6FYfL.mjs';
import { g as getCollection } from '../../chunks/_astro_content_BBIrIJ25.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://techoxium.com");
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { params } = Astro2;
  const tag = String(params.tag || "");
  const locale = Astro2.url.pathname.startsWith("/en") ? "en" : "tr";
  const collection = locale === "en" ? "blogEn" : "blog";
  const posts = (
    /** @type {any[]} */
    await getCollection(
      /** @type {any} */
      collection
    )
  );
  const filtered = posts.filter((p) => postMatchesTag(p, tag));
  return renderTemplate`<html${addAttribute(locale, "lang")} data-astro-cid-3afyl2xd> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `#${tag}`, "locale": locale, "data-astro-cid-3afyl2xd": true })}${renderHead()}</head> <body data-astro-cid-3afyl2xd> ${renderComponent($$result, "Header", $$Header, { "locale": locale, "data-astro-cid-3afyl2xd": true })} <main class="tag-main" data-astro-cid-3afyl2xd> <div class="container" data-astro-cid-3afyl2xd> <h1 data-astro-cid-3afyl2xd>#${tag}</h1> ${filtered.length ? renderTemplate`<ul class="tag-list" data-astro-cid-3afyl2xd> ${filtered.map((p) => {
    const post = (
      /** @type {any} */
      p
    );
    return renderTemplate`<li class="tag-item" data-astro-cid-3afyl2xd><a${addAttribute(`/${locale === "en" ? "en/" : ""}${post.id}/`, "href")} data-astro-cid-3afyl2xd>${post.data.title}</a></li>`;
  })} </ul>` : renderTemplate`<p data-astro-cid-3afyl2xd>${locale === "en" ? "No posts in this category yet." : "Bu kategoride hen\xFCz yaz\u0131 yok."}</p>`} </div> </main> ${renderComponent($$result, "Footer", $$Footer, { "locale": locale, "data-astro-cid-3afyl2xd": true })} </body></html>`;
}, "/Users/mac/Desktop/techoxium/src/pages/tag/[tag].astro", void 0);

const $$file = "/Users/mac/Desktop/techoxium/src/pages/tag/[tag].astro";
const $$url = "/tag/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

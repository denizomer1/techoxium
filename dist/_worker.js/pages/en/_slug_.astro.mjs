globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as createAstro, c as createComponent, a as renderComponent, r as renderTemplate } from '../../chunks/astro/server_C-RMCnIV.mjs';
import { g as getCollection, r as renderEntry } from '../../chunks/_astro_content_IVToqrE3.mjs';
import { $ as $$BlogPost } from '../../chunks/BlogPost_HEZXnOJV.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://techoxium.com");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) {
    return Astro2.redirect("/en/404");
  }
  const posts = await getCollection("blogEn");
  const post = posts.find((p) => p.id === slug);
  if (!post) {
    return Astro2.redirect("/en/404");
  }
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { "title": post.data.title, "description": post.data.description, "pubDate": post.data.pubDate, "updatedDate": post.data.updatedDate, "heroImage": post.data.heroImage, "locale": "en" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/mac/Desktop/techoxium/src/pages/en/[slug].astro", void 0);

const $$file = "/Users/mac/Desktop/techoxium/src/pages/en/[slug].astro";
const $$url = "/en/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, d as addAttribute, r as renderComponent, e as renderHead, m as renderSlot, a as renderTemplate } from './astro/server_DCU9xl9x.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$FormattedDate, c as $$Footer } from './FormattedDate_BMk6lokI.mjs';
import { $ as $$FontSizeControl, a as $$TextToSpeech, b as $$BlogComment } from './TextToSpeech_Cx_ogwzL.mjs';
/* empty css                          */

const $$Astro = createAstro("https://techoxium.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title = "", description = "", pubDate, updatedDate, heroImage, locale = "tr" } = Astro2.props;
  return renderTemplate`<html${addAttribute(locale, "lang")} data-astro-cid-bvzihdzo> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "locale": locale, "data-astro-cid-bvzihdzo": true })}${renderHead()}</head> <body data-astro-cid-bvzihdzo> ${renderComponent($$result, "Header", $$Header, { "locale": locale, "data-astro-cid-bvzihdzo": true })} <main class="blog-post-main" data-astro-cid-bvzihdzo> <article class="blog-post" data-astro-cid-bvzihdzo> <header class="post-header" data-astro-cid-bvzihdzo> <div class="post-meta" data-astro-cid-bvzihdzo> <time class="post-date" data-astro-cid-bvzihdzo> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-bvzihdzo": true })} </time> ${updatedDate && renderTemplate`<time class="post-updated" data-astro-cid-bvzihdzo>
Güncelleme: ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })} </time>`} </div> <h1 class="post-title" data-astro-cid-bvzihdzo>${title}</h1> ${description && renderTemplate`<p class="post-description" data-astro-cid-bvzihdzo>${description}</p>`} <div class="accessibility-controls" data-astro-cid-bvzihdzo> ${renderComponent($$result, "FontSizeControl", $$FontSizeControl, { "locale": locale, "data-astro-cid-bvzihdzo": true })} ${renderComponent($$result, "TextToSpeech", $$TextToSpeech, { "locale": locale, "data-astro-cid-bvzihdzo": true })} </div> </header> ${heroImage && renderTemplate`<div class="hero-image" data-astro-cid-bvzihdzo> <img${addAttribute(heroImage, "src")}${addAttribute(title, "alt")}${addAttribute(1200, "width")}${addAttribute(630, "height")} loading="eager" decoding="async" data-astro-cid-bvzihdzo> </div>`} <div class="post-content prose" data-astro-cid-bvzihdzo> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "BlogComment", $$BlogComment, { "locale": locale, "data-astro-cid-bvzihdzo": true })} </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "locale": locale, "data-astro-cid-bvzihdzo": true })} </body></html>`;
}, "/Users/mac/Documents/techoxium/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };

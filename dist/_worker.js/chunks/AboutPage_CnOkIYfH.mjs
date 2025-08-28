globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, d as addAttribute, r as renderComponent, e as renderHead, a as renderTemplate } from './astro/server_Dwc-Xb_E.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from './Footer_DWOQ9eDf.mjs';
import { $ as $$FormattedDate } from './FormattedDate_BwUQSVsc.mjs';
import { $ as $$FontSizeControl, a as $$TextToSpeech, b as $$BlogComment } from './TextToSpeech_CFVVbS08.mjs';
/* empty css                         */

const $$Astro = createAstro("https://techoxium.com");
const $$AboutPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutPage;
  const { title = "", description = "", pubDate, locale = "tr" } = Astro2.props;
  return renderTemplate`<html${addAttribute(locale, "lang")} data-astro-cid-evzfsq7n> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "locale": locale, "data-astro-cid-evzfsq7n": true })}${renderHead()}</head> <body data-astro-cid-evzfsq7n> ${renderComponent($$result, "Header", $$Header, { "locale": locale, "data-astro-cid-evzfsq7n": true })} <main class="about-main" data-astro-cid-evzfsq7n> <article class="about-article" data-astro-cid-evzfsq7n> <header class="about-header" data-astro-cid-evzfsq7n> <div class="about-meta" data-astro-cid-evzfsq7n> <time class="about-date" data-astro-cid-evzfsq7n> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-evzfsq7n": true })} </time> </div> <h1 class="about-title" data-astro-cid-evzfsq7n>${title}</h1> <div class="accessibility-controls" data-astro-cid-evzfsq7n> ${renderComponent($$result, "FontSizeControl", $$FontSizeControl, { "locale": locale, "data-astro-cid-evzfsq7n": true })} ${renderComponent($$result, "TextToSpeech", $$TextToSpeech, { "locale": locale, "data-astro-cid-evzfsq7n": true })} </div> </header> <div class="about-content" data-astro-cid-evzfsq7n> <p class="about-description" data-astro-cid-evzfsq7n>${description}</p> </div> ${renderComponent($$result, "BlogComment", $$BlogComment, { "locale": locale, "data-astro-cid-evzfsq7n": true })} </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "locale": locale, "data-astro-cid-evzfsq7n": true })} </body></html>`;
}, "/Users/mac/Desktop/techoxium/src/layouts/AboutPage.astro", void 0);

export { $$AboutPage as $ };

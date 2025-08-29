globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, a as renderComponent, r as renderTemplate } from '../../chunks/astro/server_C-RMCnIV.mjs';
import { $ as $$AboutPage } from '../../chunks/AboutPage_iECuQKzb.mjs';
import { t } from '../../chunks/Footer_CH2mcyHc.mjs';
export { renderers } from '../../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const locale = "en";
  return renderTemplate`${renderComponent($$result, "Layout", $$AboutPage, { "title": t(locale, "about.title"), "description": t(locale, "about.description"), "pubDate": /* @__PURE__ */ new Date("August 18 2025"), "locale": locale })}`;
}, "/Users/mac/Desktop/techoxium/src/pages/en/about.astro", void 0);

const $$file = "/Users/mac/Desktop/techoxium/src/pages/en/about.astro";
const $$url = "/en/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

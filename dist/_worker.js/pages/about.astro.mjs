globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_Dwc-Xb_E.mjs';
import { $ as $$AboutPage } from '../chunks/AboutPage_CdMwiFzn.mjs';
import { t } from '../chunks/Footer_CNUfXmKk.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const locale = "tr";
  return renderTemplate`${renderComponent($$result, "Layout", $$AboutPage, { "title": t(locale, "about.title"), "description": t(locale, "about.description"), "pubDate": /* @__PURE__ */ new Date("August 18 2025"), "locale": locale })}`;
}, "/Users/mac/Desktop/techoxium/src/pages/about.astro", void 0);

const $$file = "/Users/mac/Desktop/techoxium/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

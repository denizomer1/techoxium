globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as createAstro, c as createComponent } from '../chunks/astro/server_C-RMCnIV.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://techoxium.com");
const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  return Astro2.redirect("/");
}, "/Users/mac/Desktop/techoxium/src/pages/blog.astro", void 0);

const $$file = "/Users/mac/Desktop/techoxium/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Blog,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

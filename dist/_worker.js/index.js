globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Caij3_2v.mjs';
import { manifest } from './manifest_DOQS0Wqz.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/posts.json.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/en/404.astro.mjs');
const _page6 = () => import('./pages/en/about.astro.mjs');
const _page7 = () => import('./pages/en/tag/_tag_.astro.mjs');
const _page8 = () => import('./pages/en/_slug_.astro.mjs');
const _page9 = () => import('./pages/en.astro.mjs');
const _page10 = () => import('./pages/rss.xml.astro.mjs');
const _page11 = () => import('./pages/tag/_tag_.astro.mjs');
const _page12 = () => import('./pages/_slug_.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/posts.json.ts", _page3],
    ["src/pages/blog.astro", _page4],
    ["src/pages/en/404.astro", _page5],
    ["src/pages/en/about.astro", _page6],
    ["src/pages/en/tag/[tag].astro", _page7],
    ["src/pages/en/[slug].astro", _page8],
    ["src/pages/en/index.astro", _page9],
    ["src/pages/rss.xml.js", _page10],
    ["src/pages/tag/[tag].astro", _page11],
    ["src/pages/[slug].astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

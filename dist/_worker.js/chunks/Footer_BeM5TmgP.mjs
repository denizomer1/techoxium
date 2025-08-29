globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as createAstro, c as createComponent, r as renderTemplate, e as addAttribute, w as maybeRenderHead, x as spreadAttributes, t as renderSlot, u as unescapeHTML, a as renderComponent, q as renderScript } from './astro/server_B-4SWSrX.mjs';
/* empty css                         */
import { g as getCollection } from './_astro_content_D1v3mtrW.mjs';
import { a as SITE_TITLE } from './consts_pVytapcw.mjs';

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$6 = createAstro("https://techoxium.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description = "", image = "", locale = "tr" } = Astro2.props;
  const DEFAULT_DESCRIPTION = "Teknolojinin Elementi";
  const metaDescription = description && description.trim().length > 0 ? description : DEFAULT_DESCRIPTION;
  const canonicalURL = new globalThis.URL(Astro2.url.pathname, Astro2.site);
  const DEFAULT_OG = "/logo.png";
  const ogImage = new globalThis.URL(image || DEFAULT_OG, Astro2.url).toString();
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#2337ff"><link rel="icon" href="/logo.png"><link rel="apple-touch-icon" href="/logo.png"><link rel="icon" type="image/svg+xml" href="/favicon-alt.svg"><link rel="manifest" href="/site.webmanifest"><meta name="generator"', '><!-- Font preloads for performance --><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><!-- Canonical URL --><link rel="canonical"', '><!-- Hreflang for internationalization --><link rel="alternate" hreflang="tr"', '><link rel="alternate" hreflang="en"', '><link rel="alternate" hreflang="x-default"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><meta name="author" content="Techoxium"><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow"><!-- Additional SEO Meta Tags --><meta name="theme-color" content="#2337ff"><meta name="msapplication-TileColor" content="#2337ff"><meta name="application-name" content="Techoxium"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:locale"', ">", '<!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', ">", `<!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-7V9HE536V0"><\/script><script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-7V9HE536V0');
<\/script><!-- Google AdSense --><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8927381570299660" crossorigin="anonymous"><\/script><!-- Language Switcher Script --><script src="/js/language-switcher.js"><\/script>`])), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), addAttribute(`https://techoxium.com${Astro2.url.pathname}`, "href"), addAttribute(`https://techoxium.com/en${Astro2.url.pathname}`, "href"), addAttribute(`https://techoxium.com${Astro2.url.pathname}`, "href"), title, addAttribute(title, "content"), addAttribute(metaDescription, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(metaDescription, "content"), addAttribute(locale === "en" ? "en_US" : "tr_TR", "content"), ogImage && renderTemplate`<meta property="og:image"${addAttribute(ogImage, "content")}>`, addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(metaDescription, "content"), ogImage && renderTemplate`<meta property="twitter:image"${addAttribute(ogImage, "content")}>`);
}, "/Users/mac/Desktop/techoxium/src/components/BaseHead.astro", void 0);

const $$Astro$5 = createAstro("https://techoxium.com");
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const pathname = Astro2.url.pathname.replace("/", "");
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + (subpath?.[0] || "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/Users/mac/Desktop/techoxium/src/components/HeaderLink.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro("https://techoxium.com");
const $$LanguageSwitcher = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LanguageSwitcher;
  const { locale = "tr", currentPath = "/" } = Astro2.props;
  const getAlternateUrl = (targetLocale) => {
    const normalized = currentPath.startsWith("/") ? currentPath : `/${currentPath}`;
    if (targetLocale === "tr") {
      const trPath = normalized.replace(/^\/en(?=\/|$)/, "");
      return trPath === "" ? "/" : trPath;
    } else {
      if (normalized === "/en" || normalized.startsWith("/en/")) return normalized;
      return normalized === "/" ? "/en" : `/en${normalized}`;
    }
  };
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="language-switcher" data-astro-cid-a2mxz4y6> <div class="language-options" data-astro-cid-a2mxz4y6> <a', "", ' title="T\xFCrk\xE7e" data-lang="tr" data-astro-cid-a2mxz4y6>\n\u{1F1F9}\u{1F1F7} TR\n</a> <a', "", ` title="English" data-lang="en" data-astro-cid-a2mxz4y6>
\u{1F1FA}\u{1F1F8} EN
</a> </div> </div>  <script>
  // Set language preference cookie when clicking language options
  document.addEventListener('DOMContentLoaded', function() {
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
      option.addEventListener('click', function(event) {
        // Prevent the native anchor navigation and handle it programmatically
        event.preventDefault();

        // Prevent double clicks causing duplicate navigation or errors
        if (this.dataset.disabled === '1') return;

        // Determine language and target URL
        const lang = this.dataset.lang || (this.textContent.includes('TR') ? 'tr' : 'en');
        const target = this.getAttribute('href') || '/';

        // Set language cookie
        document.cookie = 'language=' + lang + '; path=/; max-age=31536000; SameSite=Lax';

        // Disable all language options briefly to avoid multiple handlers firing
        document.querySelectorAll('.language-option').forEach(el => el.dataset.disabled = '1');
        setTimeout(() => { document.querySelectorAll('.language-option').forEach(el => el.dataset.disabled = '0'); }, 1000);

        // Navigate programmatically; normalize any duplicate /en prefixes
        let normalized = target || '/';
        if (!normalized.startsWith('/')) normalized = '/' + normalized;
        // Collapse any repeated /en segments like /en/en or /en/en/en
        normalized = normalized.replace(/(?:\\/en)+/g, '/en');
        // If normalized ends up as '/en/' keep single trailing slash
        if (normalized === '/en/') normalized = '/en';
        location.assign(normalized);
      });
    });
  });
<\/script>`], ["", '<div class="language-switcher" data-astro-cid-a2mxz4y6> <div class="language-options" data-astro-cid-a2mxz4y6> <a', "", ' title="T\xFCrk\xE7e" data-lang="tr" data-astro-cid-a2mxz4y6>\n\u{1F1F9}\u{1F1F7} TR\n</a> <a', "", ` title="English" data-lang="en" data-astro-cid-a2mxz4y6>
\u{1F1FA}\u{1F1F8} EN
</a> </div> </div>  <script>
  // Set language preference cookie when clicking language options
  document.addEventListener('DOMContentLoaded', function() {
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
      option.addEventListener('click', function(event) {
        // Prevent the native anchor navigation and handle it programmatically
        event.preventDefault();

        // Prevent double clicks causing duplicate navigation or errors
        if (this.dataset.disabled === '1') return;

        // Determine language and target URL
        const lang = this.dataset.lang || (this.textContent.includes('TR') ? 'tr' : 'en');
        const target = this.getAttribute('href') || '/';

        // Set language cookie
        document.cookie = 'language=' + lang + '; path=/; max-age=31536000; SameSite=Lax';

        // Disable all language options briefly to avoid multiple handlers firing
        document.querySelectorAll('.language-option').forEach(el => el.dataset.disabled = '1');
        setTimeout(() => { document.querySelectorAll('.language-option').forEach(el => el.dataset.disabled = '0'); }, 1000);

        // Navigate programmatically; normalize any duplicate /en prefixes
        let normalized = target || '/';
        if (!normalized.startsWith('/')) normalized = '/' + normalized;
        // Collapse any repeated /en segments like /en/en or /en/en/en
        normalized = normalized.replace(/(?:\\\\/en)+/g, '/en');
        // If normalized ends up as '/en/' keep single trailing slash
        if (normalized === '/en/') normalized = '/en';
        location.assign(normalized);
      });
    });
  });
<\/script>`])), maybeRenderHead(), addAttribute(getAlternateUrl("tr"), "href"), addAttribute(`language-option ${locale === "tr" ? "active" : ""}`, "class"), addAttribute(getAlternateUrl("en"), "href"), addAttribute(`language-option ${locale === "en" ? "active" : ""}`, "class"));
}, "/Users/mac/Desktop/techoxium/src/components/LanguageSwitcher.astro", void 0);

// Small utility helpers for tag slugging and matching
function tagToSlug(t) {
  let s = String(t);
  // Quick mapping for characters that don't decompose to ASCII via NFKD
  const charMap = {
    '\u0130': 'i', // İ
    '\u0131': 'i', // ı
    '\u015e': 's', // Ş
    '\u015f': 's', // ş
    '\u00c7': 'c', // Ç
    '\u00e7': 'c', // ç
    '\u011e': 'g', // Ğ
    '\u011f': 'g', // ğ
    '\u00d6': 'o', // Ö
    '\u00f6': 'o', // ö
    '\u00dc': 'u', // Ü
    '\u00fc': 'u'  // ü
  };
  s = s.replace(/[ - -]/g, (c) => c);
  s = s.replace(/[ - -]/g, (c) => c);
  // Apply charMap replacements
  s = s.replace(/[ - - -]|./g, (c) => (charMap[c] ? charMap[c] : c));
  return s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/['"‘’”“`]/g, '')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, ' ')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function postMatchesTag(post, tag) {
  const tags = (post && post.data && post.data.tags) || [];
  if (!tags || !tags.length) return false;
  if (tags.includes(tag)) return true;
  return tags.some(t => tagToSlug(String(t)) === tag);
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://techoxium.com");
const $$CategoryDropdown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CategoryDropdown;
  const { locale = "tr" } = Astro2.props;
  const collection = locale === "en" ? "blogEn" : "blog";
  const posts = await getCollection(
    /** @type {any} */
    collection
  );
  const tagSet = /* @__PURE__ */ new Set();
  posts.forEach((post) => (post.data.tags || []).forEach((tag) => tagSet.add(tag)));
  const serverTags = Array.from(tagSet).sort();
  const serverListHtml = serverTags.length ? serverTags.map((tag) => {
    const slug = tagToSlug(tag);
    const prefix = locale === "en" ? "/en" : "";
    const displayName = tag.replace(/-/g, " ");
    return `<li class="cat-item"><a href="${prefix}/tag/${slug}/" class="cat-item-link" data-tag="${tag}"><span class="cat-pill">#${tag}</span><span style="flex:1;margin-left:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${displayName}</span></a></li>`;
  }).join("") : `<li class="cat-item">${locale === "en" ? "No categories" : "Kategori yok"}</li>`;
  return renderTemplate(_a || (_a = __template(["", '<div class="cat-dropdown" data-dropdown', ' data-astro-cid-dwbhhniy> <button type="button" class="cat-toggle" aria-haspopup="listbox" aria-expanded="false" data-astro-cid-dwbhhniy> <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-dwbhhniy> <path d="M10 14l4-4-4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-dwbhhniy></path> </svg> <span class="cat-label" data-astro-cid-dwbhhniy>', '</span> </button> <div class="cat-panel" role="dialog" aria-hidden="true" data-astro-cid-dwbhhniy> <div class="cat-search" data-astro-cid-dwbhhniy> <input class="cat-input" type="search"', "", ' data-astro-cid-dwbhhniy> </div> <ul class="cat-list" role="listbox" tabindex="-1" data-astro-cid-dwbhhniy>', "</ul> </div> </div>  <script>\n(function() {\n  'use strict';\n\n  // Constants\n  const SELECTORS = {\n    dropdown: '[data-dropdown]',\n    toggle: '.cat-toggle',\n    panel: '.cat-panel',\n    input: '.cat-input',\n    list: '.cat-list',\n    label: '.cat-label'\n  };\n\n  const ATTRIBUTES = {\n    locale: 'data-locale',\n    expanded: 'aria-expanded',\n    hidden: 'aria-hidden',\n    tag: 'data-tag'\n  };\n\n  // Utility functions\n  function getLocale(element) {\n    return element.dataset.locale || document.documentElement.lang || 'tr';\n  }\n\n  function createTagSlug(tag) {\n    try {\n      return String(tag)\n        .toLowerCase()\n        .normalize('NFKD')\n        .replace(/['\"\\u2018\\u2019\\u201d\\u201c`]/g, '')\n        .replace(/[\\u0300-\\u036f]/g, '')\n        .replace(/[^a-z0-9\\s-]/g, ' ')\n        .trim()\n        .replace(/\\s+/g, '-')\n        .replace(/-+/g, '-');\n    } catch (error) {\n      return String(tag).toLowerCase().replace(/[^a-z0-9\\s-]/g, '').replace(/\\s+/g, '-');\n    }\n  }\n\n  function getTagHref(tag, postsData, locale) {\n    if (!tag) return '#';\n\n    const langPrefix = locale === 'en' ? '/en' : '';\n    let slug = createTagSlug(tag);\n\n    // Use API-provided slug if available\n    if (postsData?.length) {\n      for (const post of postsData) {\n        if (Array.isArray(post.tags) && post.tags.includes(tag) && Array.isArray(post.tagSlugs)) {\n          const index = post.tags.indexOf(tag);\n          if (post.tagSlugs[index]) {\n            slug = post.tagSlugs[index];\n            break;\n          }\n        }\n      }\n    }\n\n    return `${langPrefix}/tag/${slug}/`;\n  }\n\n  function renderTagList(listElement, tags, postsData, locale) {\n    if (!listElement || !Array.isArray(tags)) return;\n\n    const emptyMessage = locale === 'en' ? 'No categories' : 'Kategori yok';\n\n    listElement.innerHTML = tags.length\n      ? tags.map(tag => {\n          const href = getTagHref(tag, postsData, locale);\n          const displayName = tag.replace(/-/g, ' ');\n          return `<li class=\"cat-item\" role=\"option\">\n            <a href=\"${href}\" class=\"cat-item-link\" data-tag=\"${tag}\">\n              <span class=\"cat-pill\">#${tag}</span>\n              <span style=\"flex:1;margin-left:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis\">${displayName}</span>\n            </a>\n          </li>`;\n        }).join('')\n      : `<li class=\"cat-item\" role=\"option\">${emptyMessage}</li>`;\n  }\n\n  function updateToggleLabel(toggle, tags, locale) {\n    const label = toggle.querySelector(SELECTORS.label);\n    if (!label) return;\n\n    const baseText = locale === 'en' ? 'Categories' : 'Kategoriler';\n    label.textContent = tags.length ? `${baseText} (${tags.length})` : baseText;\n  }\n\n  // Main initialization function\n  async function initializeDropdown(root) {\n    const toggle = root.querySelector(SELECTORS.toggle);\n    const panel = root.querySelector(SELECTORS.panel);\n    const input = root.querySelector(SELECTORS.input);\n    const list = root.querySelector(SELECTORS.list);\n\n    if (!toggle || !panel || !input || !list) return;\n\n    const locale = getLocale(root);\n    let tags = [];\n    let postsData = [];\n\n    // Fetch tags from API\n    try {\n      const response = await fetch(`/api/posts.json?locale=${encodeURIComponent(locale)}`);\n      if (response.ok) {\n        postsData = await response.json();\n        const tagSet = new Set();\n        postsData.forEach(post => (post.tags || []).forEach(tag => tagSet.add(tag)));\n        tags = Array.from(tagSet).sort();\n      }\n    } catch (error) {\n      // Fallback to server-rendered tags or empty array\n      tags = [];\n      postsData = [];\n    }\n\n    // Panel state management\n    function openPanel() {\n      panel.setAttribute(ATTRIBUTES.hidden, 'false');\n      toggle.setAttribute(ATTRIBUTES.expanded, 'true');\n      input.focus();\n    }\n\n    function closePanel() {\n      panel.setAttribute(ATTRIBUTES.hidden, 'true');\n      toggle.setAttribute(ATTRIBUTES.expanded, 'false');\n    }\n\n    // Event handlers\n    function handleToggleClick(event) {\n      event.stopPropagation();\n      const isExpanded = toggle.getAttribute(ATTRIBUTES.expanded) === 'true';\n      isExpanded ? closePanel() : openPanel();\n    }\n\n    function handleOutsideClick(event) {\n      if (!root.contains(event.target)) {\n        closePanel();\n      }\n    }\n\n    function handleSearchInput() {\n      const query = input.value.trim().toLowerCase();\n      const filteredTags = tags.filter(tag =>\n        String(tag).toLowerCase().includes(query)\n      );\n      renderTagList(list, filteredTags, postsData, locale);\n    }\n\n    // Attach event listeners\n    toggle.addEventListener('click', handleToggleClick);\n    document.addEventListener('click', handleOutsideClick);\n    input.addEventListener('input', handleSearchInput);\n\n    // Initialize\n    updateToggleLabel(toggle, tags, locale);\n    renderTagList(list, tags, postsData, locale);\n  }\n\n  // Initialize all dropdowns on the page\n  function initializeAllDropdowns() {\n    document.querySelectorAll(SELECTORS.dropdown).forEach(initializeDropdown);\n  }\n\n  // Run initialization\n  if (document.readyState === 'loading') {\n    document.addEventListener('DOMContentLoaded', initializeAllDropdowns);\n  } else {\n    initializeAllDropdowns();\n  }\n})();\n<\/script>"], ["", '<div class="cat-dropdown" data-dropdown', ' data-astro-cid-dwbhhniy> <button type="button" class="cat-toggle" aria-haspopup="listbox" aria-expanded="false" data-astro-cid-dwbhhniy> <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-dwbhhniy> <path d="M10 14l4-4-4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-dwbhhniy></path> </svg> <span class="cat-label" data-astro-cid-dwbhhniy>', '</span> </button> <div class="cat-panel" role="dialog" aria-hidden="true" data-astro-cid-dwbhhniy> <div class="cat-search" data-astro-cid-dwbhhniy> <input class="cat-input" type="search"', "", ' data-astro-cid-dwbhhniy> </div> <ul class="cat-list" role="listbox" tabindex="-1" data-astro-cid-dwbhhniy>', "</ul> </div> </div>  <script>\n(function() {\n  'use strict';\n\n  // Constants\n  const SELECTORS = {\n    dropdown: '[data-dropdown]',\n    toggle: '.cat-toggle',\n    panel: '.cat-panel',\n    input: '.cat-input',\n    list: '.cat-list',\n    label: '.cat-label'\n  };\n\n  const ATTRIBUTES = {\n    locale: 'data-locale',\n    expanded: 'aria-expanded',\n    hidden: 'aria-hidden',\n    tag: 'data-tag'\n  };\n\n  // Utility functions\n  function getLocale(element) {\n    return element.dataset.locale || document.documentElement.lang || 'tr';\n  }\n\n  function createTagSlug(tag) {\n    try {\n      return String(tag)\n        .toLowerCase()\n        .normalize('NFKD')\n        .replace(/['\"\\\\u2018\\\\u2019\\\\u201d\\\\u201c\\`]/g, '')\n        .replace(/[\\\\u0300-\\\\u036f]/g, '')\n        .replace(/[^a-z0-9\\\\s-]/g, ' ')\n        .trim()\n        .replace(/\\\\s+/g, '-')\n        .replace(/-+/g, '-');\n    } catch (error) {\n      return String(tag).toLowerCase().replace(/[^a-z0-9\\\\s-]/g, '').replace(/\\\\s+/g, '-');\n    }\n  }\n\n  function getTagHref(tag, postsData, locale) {\n    if (!tag) return '#';\n\n    const langPrefix = locale === 'en' ? '/en' : '';\n    let slug = createTagSlug(tag);\n\n    // Use API-provided slug if available\n    if (postsData?.length) {\n      for (const post of postsData) {\n        if (Array.isArray(post.tags) && post.tags.includes(tag) && Array.isArray(post.tagSlugs)) {\n          const index = post.tags.indexOf(tag);\n          if (post.tagSlugs[index]) {\n            slug = post.tagSlugs[index];\n            break;\n          }\n        }\n      }\n    }\n\n    return \\`\\${langPrefix}/tag/\\${slug}/\\`;\n  }\n\n  function renderTagList(listElement, tags, postsData, locale) {\n    if (!listElement || !Array.isArray(tags)) return;\n\n    const emptyMessage = locale === 'en' ? 'No categories' : 'Kategori yok';\n\n    listElement.innerHTML = tags.length\n      ? tags.map(tag => {\n          const href = getTagHref(tag, postsData, locale);\n          const displayName = tag.replace(/-/g, ' ');\n          return \\`<li class=\"cat-item\" role=\"option\">\n            <a href=\"\\${href}\" class=\"cat-item-link\" data-tag=\"\\${tag}\">\n              <span class=\"cat-pill\">#\\${tag}</span>\n              <span style=\"flex:1;margin-left:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis\">\\${displayName}</span>\n            </a>\n          </li>\\`;\n        }).join('')\n      : \\`<li class=\"cat-item\" role=\"option\">\\${emptyMessage}</li>\\`;\n  }\n\n  function updateToggleLabel(toggle, tags, locale) {\n    const label = toggle.querySelector(SELECTORS.label);\n    if (!label) return;\n\n    const baseText = locale === 'en' ? 'Categories' : 'Kategoriler';\n    label.textContent = tags.length ? \\`\\${baseText} (\\${tags.length})\\` : baseText;\n  }\n\n  // Main initialization function\n  async function initializeDropdown(root) {\n    const toggle = root.querySelector(SELECTORS.toggle);\n    const panel = root.querySelector(SELECTORS.panel);\n    const input = root.querySelector(SELECTORS.input);\n    const list = root.querySelector(SELECTORS.list);\n\n    if (!toggle || !panel || !input || !list) return;\n\n    const locale = getLocale(root);\n    let tags = [];\n    let postsData = [];\n\n    // Fetch tags from API\n    try {\n      const response = await fetch(\\`/api/posts.json?locale=\\${encodeURIComponent(locale)}\\`);\n      if (response.ok) {\n        postsData = await response.json();\n        const tagSet = new Set();\n        postsData.forEach(post => (post.tags || []).forEach(tag => tagSet.add(tag)));\n        tags = Array.from(tagSet).sort();\n      }\n    } catch (error) {\n      // Fallback to server-rendered tags or empty array\n      tags = [];\n      postsData = [];\n    }\n\n    // Panel state management\n    function openPanel() {\n      panel.setAttribute(ATTRIBUTES.hidden, 'false');\n      toggle.setAttribute(ATTRIBUTES.expanded, 'true');\n      input.focus();\n    }\n\n    function closePanel() {\n      panel.setAttribute(ATTRIBUTES.hidden, 'true');\n      toggle.setAttribute(ATTRIBUTES.expanded, 'false');\n    }\n\n    // Event handlers\n    function handleToggleClick(event) {\n      event.stopPropagation();\n      const isExpanded = toggle.getAttribute(ATTRIBUTES.expanded) === 'true';\n      isExpanded ? closePanel() : openPanel();\n    }\n\n    function handleOutsideClick(event) {\n      if (!root.contains(event.target)) {\n        closePanel();\n      }\n    }\n\n    function handleSearchInput() {\n      const query = input.value.trim().toLowerCase();\n      const filteredTags = tags.filter(tag =>\n        String(tag).toLowerCase().includes(query)\n      );\n      renderTagList(list, filteredTags, postsData, locale);\n    }\n\n    // Attach event listeners\n    toggle.addEventListener('click', handleToggleClick);\n    document.addEventListener('click', handleOutsideClick);\n    input.addEventListener('input', handleSearchInput);\n\n    // Initialize\n    updateToggleLabel(toggle, tags, locale);\n    renderTagList(list, tags, postsData, locale);\n  }\n\n  // Initialize all dropdowns on the page\n  function initializeAllDropdowns() {\n    document.querySelectorAll(SELECTORS.dropdown).forEach(initializeDropdown);\n  }\n\n  // Run initialization\n  if (document.readyState === 'loading') {\n    document.addEventListener('DOMContentLoaded', initializeAllDropdowns);\n  } else {\n    initializeAllDropdowns();\n  }\n})();\n<\/script>"])), maybeRenderHead(), addAttribute(locale, "data-locale"), locale === "en" ? "Categories" : "Kategoriler", addAttribute(locale === "en" ? "Search categories..." : "Kategori ara...", "placeholder"), addAttribute(locale === "en" ? "Search categories" : "Kategori ara", "aria-label"), unescapeHTML(serverListHtml));
}, "/Users/mac/Desktop/techoxium/src/components/CategoryDropdown.astro", void 0);

const site$1 = {"title":"Techoxium","description":"En son teknoloji haberlerini buradan takip edebilirsiniz"};
const nav$1 = {"home":"Ana Sayfa","about":"Hakkımızda","blog":"Blog","search":"Ara...","themeToggle":"Tema değiştir","toggleMenu":"Menüyü aç/kapat"};
const buttons$1 = {"readMore":"Devamını Oku","backToHome":"Ana Sayfaya Dön"};
const about$1 = {"title":"Hakkımızda","description":"Techoxium'a Hoşgeldiniz! En son teknoloji haberlerini buradan takip edebilirsiniz 😊\n\nSitemiz beta sürecindedir ve hatalar ile karşılaşabilirsiniz. Bir hata farkederseniz bize aşağıdaki yorum satırından bildirmekten çekinmeyin 😉"};
const footer$1 = {"description":"En son teknoloji haberleri ve incelemeler","allRightsReserved":"Tüm hakları saklıdır"};
const language$1 = {"turkish":"Türkçe","english":"English","switchTo":"Dile geç:"};
const accessibility$1 = {"decreaseFontSize":"Yazı boyutunu küçült","increaseFontSize":"Yazı boyutunu büyüt","playAudio":"Yazıyı sesli oku","pauseAudio":"Sesli okumayı duraklat","stopAudio":"Sesli okumayı durdur"};
const blog$1 = {"title":"Blog Yazıları","noResults":"Sonuç bulunamadı","showComments":"Yorumları Göster","hideComments":"Yorumları Gizle"};
const trTranslations = {
  site: site$1,
  nav: nav$1,
  buttons: buttons$1,
  about: about$1,
  footer: footer$1,
  language: language$1,
  accessibility: accessibility$1,
  blog: blog$1,
};

const site = {"title":"Techoxium","description":"Stay updated with the latest technology news and reviews"};
const nav = {"home":"Home","about":"About","blog":"Blog","search":"Search...","themeToggle":"Toggle theme","toggleMenu":"Toggle menu"};
const buttons = {"readMore":"Read More","backToHome":"Back to Home"};
const about = {"title":"About Us","description":"Welcome to Techoxium! Stay updated with the latest technology news and reviews 😊\n\nOur site is in beta phase and you may encounter bugs. If you notice any errors, please let us know in the comment section below 😉"};
const footer = {"description":"Latest technology news and reviews","allRightsReserved":"All rights reserved"};
const language = {"turkish":"Türkçe","english":"English","switchTo":"Switch to:"};
const accessibility = {"decreaseFontSize":"Decrease font size","increaseFontSize":"Increase font size","playAudio":"Play audio","pauseAudio":"Pause audio","stopAudio":"Stop audio"};
const blog = {"title":"Blog Posts","noResults":"No results found","showComments":"Show Comments","hideComments":"Hide Comments"};
const enTranslations = {
  site,
  nav,
  buttons,
  about,
  footer,
  language,
  accessibility,
  blog,
};

const translations = {
  tr: trTranslations,
  en: enTranslations
};
function getTranslations(locale) {
  return translations[locale] || translations.tr;
}
function t(locale, key) {
  const trans = getTranslations(locale);
  const keys = key.split(".");
  let result = trans;
  for (const k of keys) {
    result = result?.[k];
  }
  return result || key;
}

const $$Astro$2 = createAstro("https://techoxium.com");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { locale = "tr" } = Astro2.props;
  const homeUrl = locale === "en" ? "/en" : "/";
  const aboutUrl = locale === "en" ? "/en/about" : "/about";
  return renderTemplate`${maybeRenderHead()}<header class="main-header" data-astro-cid-3ef6ksr2> <nav class="nav-container" data-astro-cid-3ef6ksr2> <div class="nav-brand" data-astro-cid-3ef6ksr2> <a${addAttribute(homeUrl, "href")} class="brand-link" data-astro-cid-3ef6ksr2> <img src="/logo.png"${addAttribute(SITE_TITLE, "alt")} width="32" height="32" data-astro-cid-3ef6ksr2> <span class="brand-text" data-astro-cid-3ef6ksr2>${SITE_TITLE}</span> </a> </div> <div class="nav-header-actions" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "LanguageSwitcher", $$LanguageSwitcher, { "locale": locale, "currentPath": Astro2.url.pathname, "data-astro-cid-3ef6ksr2": true })} <button class="theme-toggle" id="theme-toggle"${addAttribute(t(locale, "nav.themeToggle") || "Tema de\u011Fi\u015Ftir", "aria-label")} data-astro-cid-3ef6ksr2> <div class="theme-icon" data-astro-cid-3ef6ksr2> <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3ef6ksr2> <circle cx="12" cy="12" r="5" data-astro-cid-3ef6ksr2></circle> <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" data-astro-cid-3ef6ksr2></path> </svg> <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3ef6ksr2> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" data-astro-cid-3ef6ksr2></path> </svg> </div> </button> <button class="nav-toggle" id="nav-toggle"${addAttribute(t(locale, "nav.toggleMenu") || "Men\xFCy\xFC a\xE7/kapat", "aria-label")} data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2></span> <span data-astro-cid-3ef6ksr2></span> <span data-astro-cid-3ef6ksr2></span> </button> </div> <div class="nav-menu" id="nav-menu" data-astro-cid-3ef6ksr2> <div class="nav-search-mobile" data-astro-cid-3ef6ksr2> <div class="modern-search" data-astro-cid-3ef6ksr2> <div class="search-container" data-astro-cid-3ef6ksr2> <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3ef6ksr2> <circle cx="11" cy="11" r="7" data-astro-cid-3ef6ksr2></circle> <line x1="16.65" y1="16.65" x2="22" y2="22" data-astro-cid-3ef6ksr2></line> </svg> <input type="text"${addAttribute(t(locale, "nav.search"), "placeholder")} class="search-input" autocomplete="off" data-astro-cid-3ef6ksr2> <button class="search-clear" style="display: none;" data-astro-cid-3ef6ksr2>&times;</button> </div> <div class="search-results" data-astro-cid-3ef6ksr2></div> </div> </div> <div class="nav-links" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": aboutUrl, "data-astro-cid-3ef6ksr2": true }, { "default": async ($$result2) => renderTemplate`${t(locale, "nav.about")}` })} </div> <div class="nav-actions-desktop" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "LanguageSwitcher", $$LanguageSwitcher, { "locale": locale, "currentPath": Astro2.url.pathname, "data-astro-cid-3ef6ksr2": true })} ${renderComponent($$result, "CategoryDropdown", $$CategoryDropdown, { "locale": locale, "data-astro-cid-3ef6ksr2": true })} <div class="nav-search" data-astro-cid-3ef6ksr2> <div class="modern-search" data-astro-cid-3ef6ksr2> <div class="search-container" data-astro-cid-3ef6ksr2> <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3ef6ksr2> <circle cx="11" cy="11" r="7" data-astro-cid-3ef6ksr2></circle> <line x1="16.65" y1="16.65" x2="22" y2="22" data-astro-cid-3ef6ksr2></line> </svg> <input type="text"${addAttribute(t(locale, "nav.search"), "placeholder")} class="search-input" autocomplete="off" data-astro-cid-3ef6ksr2> <button class="search-clear" style="display: none;" data-astro-cid-3ef6ksr2>&times;</button> </div> <div class="search-results" data-astro-cid-3ef6ksr2></div> </div> </div> <button class="theme-toggle theme-toggle-desktop" id="theme-toggle-desktop"${addAttribute(t(locale, "nav.themeToggle") || "Tema de\u011Fi\u015Ftir", "aria-label")} data-astro-cid-3ef6ksr2> <div class="theme-icon" data-astro-cid-3ef6ksr2> <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3ef6ksr2> <circle cx="12" cy="12" r="5" data-astro-cid-3ef6ksr2></circle> <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" data-astro-cid-3ef6ksr2></path> </svg> <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3ef6ksr2> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" data-astro-cid-3ef6ksr2></path> </svg> </div> </button> </div> </div> </nav> </header>  ${renderScript($$result, "/Users/mac/Desktop/techoxium/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mac/Desktop/techoxium/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro("https://techoxium.com");
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Social;
  const { platform, link, size = "md", variant = "minimal" } = Astro2.props;
  const SOCIAL_CONFIG = {
    x: {
      name: "X",
      color: "#000000",
      icon: `<path d="M17.53 2.47A9.958 9.958 0 0 0 12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12 0-2.053-.519-3.985-1.43-5.67l-7.04 9.66c-.19.26-.48.41-.8.41-.32 0-.61-.15-.8-.41l-7.04-9.66A9.958 9.958 0 0 0 12 0c2.053 0 3.985.519 5.67 1.43l-9.66 7.04c-.26.19-.41.48-.41.8 0 .32.15.61.41.8l9.66 7.04A9.958 9.958 0 0 0 24 12c0-2.053-.519-3.985-1.43-5.67l-7.04 9.66c-.19.26-.48.41-.8.41-.32 0-.61-.15-.8-.41l-7.04-9.66A9.958 9.958 0 0 0 12 0z"/>`
    },
    youtube: {
      name: "YouTube",
      color: "#FF0000",
      icon: `<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>`
    },
    yt: {
      name: "YouTube",
      color: "#FF0000",
      icon: `<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>`
    },
    twitter: {
      name: "Twitter",
      color: "#1DA1F2",
      icon: `<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>`
    },
    instagram: {
      name: "Instagram",
      color: "#E4405F",
      icon: `<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>`
    },
    linkedin: {
      name: "LinkedIn",
      color: "#0077B5",
      icon: `<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>`
    },
    github: {
      name: "GitHub",
      color: "#333333",
      icon: `<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>`
    },
    facebook: {
      name: "Facebook",
      color: "#1877F2",
      icon: `<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>`
    },
    discord: {
      name: "Discord",
      color: "#5865F2",
      icon: `<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>`
    },
    nxt: {
      name: "Next",
      color: "#3B82F6",
      icon: `<path fill="currentColor" d="M6 6v12h3.5V9.8L15 18h3V6h-3.5v8.2L9 6H6z"/>`
    },
    telegram: {
      name: "Telegram",
      color: "#0088CC",
      icon: `<path d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931L23.93 3.821l.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693L18.953 5.78c.595-.394 1.136-.176.691.218z"/>`
    },
    tiktok: {
      name: "TikTok",
      color: "#000000",
      icon: `<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>`
    }
  };
  const config = SOCIAL_CONFIG[platform] || {
    name: platform,
    color: "#6B7280",
    icon: `<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>`
  };
  const sizeClasses = {
    sm: "social-sm",
    md: "social-md",
    lg: "social-lg"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`social-link ${sizeClasses[size]} social-${variant}`, "class")}${addAttribute(link, "href")}${addAttribute(`Visit our ${config.name}`, "aria-label")} rel="noopener noreferrer" target="_blank"${addAttribute(platform, "data-platform")}${addAttribute(`--social-color: ${config.color};`, "style")} data-astro-cid-yxtifmrq> ${platform === "x" ? renderTemplate`<span class="social-text" data-astro-cid-yxtifmrq>X</span>` : renderTemplate`<svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-yxtifmrq> <g data-astro-cid-yxtifmrq>${unescapeHTML(config.icon)}</g> </svg>`} <span class="social-tooltip" data-astro-cid-yxtifmrq>${config.name}</span> </a> `;
}, "/Users/mac/Desktop/techoxium/src/components/Social.astro", void 0);

const $$Astro = createAstro("https://techoxium.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const { locale = "tr" } = Astro2.props;
  const today = new globalThis.Date();
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte>
&copy; ${today.getFullYear()} Techoxium. ${t(locale, "footer.allRightsReserved")} <div class="social-links" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Social", $$Social, { "platform": "yt", "link": "https://www.youtube.com/@TechOxium", "size": "lg", "variant": "filled", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result, "Social", $$Social, { "platform": "x", "link": "https://x.com/techoxium", "size": "lg", "variant": "filled", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result, "Social", $$Social, { "platform": "nxt", "link": "https://sosyal.teknofest.app/@techoxium", "size": "lg", "variant": "filled", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result, "Social", $$Social, { "platform": "instagram", "link": "https://instagram.com/techoxium", "size": "lg", "variant": "filled", "data-astro-cid-sz7xmlte": true })} </div> </footer>  ${renderScript($$result, "/Users/mac/Desktop/techoxium/src/components/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mac/Desktop/techoxium/src/components/Footer.astro", void 0);

export { $$Footer as $, $$Header as a, $$BaseHead as b, postMatchesTag as p, t };

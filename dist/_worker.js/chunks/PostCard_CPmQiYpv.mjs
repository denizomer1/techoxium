globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, t as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from './astro/server_DCU9xl9x.mjs';
import { b as $$FormattedDate } from './FormattedDate_BMk6lokI.mjs';
/* empty css                         */

const $$Astro = createAstro("https://techoxium.com");
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { href, title, description = "", pubDate, heroImage, large = false } = Astro2.props;
  const date = pubDate ? pubDate instanceof Date ? pubDate : new Date(pubDate) : void 0;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`post-card${large ? " post-card--large" : ""}`, "class")} data-astro-cid-iyiqi2so> <a${addAttribute(href, "href")} class="post-link" data-astro-cid-iyiqi2so> <div class="post-image" data-astro-cid-iyiqi2so> ${heroImage && renderTemplate`<img${addAttribute(heroImage, "src")}${addAttribute(title, "alt")}${addAttribute(720, "width")}${addAttribute(360, "height")} loading="lazy" decoding="async" data-astro-cid-iyiqi2so>`} <div class="post-overlay" data-astro-cid-iyiqi2so> <svg class="play-icon" viewBox="0 0 24 24" fill="white" data-astro-cid-iyiqi2so> <path d="M8 5v14l11-7z" data-astro-cid-iyiqi2so></path> </svg> </div> </div> <div class="post-content" data-astro-cid-iyiqi2so> <header data-astro-cid-iyiqi2so> <div class="post-meta" data-astro-cid-iyiqi2so> ${date && renderTemplate`${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": date, "data-astro-cid-iyiqi2so": true })}`} </div> <h2 class="post-title" data-astro-cid-iyiqi2so>${title}</h2> </header> ${description && renderTemplate`<p class="post-description" data-astro-cid-iyiqi2so>${description}</p>`} <div class="read-more" data-astro-cid-iyiqi2so> <span data-astro-cid-iyiqi2so>Devamını Oku</span> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-iyiqi2so> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-iyiqi2so></path> </svg> </div> </div> </a> </article> `;
}, "/Users/mac/Documents/techoxium/src/components/PostCard.astro", void 0);

export { $$PostCard as $ };

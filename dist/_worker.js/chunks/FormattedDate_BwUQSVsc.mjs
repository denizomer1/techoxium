globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, v as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_Dwc-Xb_E.mjs';

const $$Astro = createAstro("https://techoxium.com");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const turkishMonths = {
    1: "ocak",
    2: "\u015Fubat",
    3: "mart",
    4: "nisan",
    5: "may\u0131s",
    6: "haziran",
    7: "temmuz",
    8: "a\u011Fustos",
    9: "eyl\xFCl",
    10: "ekim",
    11: "kas\u0131m",
    12: "aral\u0131k"
  };
  const { date } = Astro2.props;
  const d = date ? date instanceof Date ? date : new Date(date) : void 0;
  let formatted = "";
  if (d) {
    const day = d.getDate();
    const month = turkishMonths[d.getMonth() + 1];
    const year = d.getFullYear();
    formatted = `${day} ${month} ${year}`;
  }
  return renderTemplate`${d ? renderTemplate`${maybeRenderHead()}<time${addAttribute(d.toISOString(), "datetime")}>${formatted}</time>` : renderTemplate`<span aria-hidden="true"></span>`}`;
}, "/Users/mac/Desktop/techoxium/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };

globalThis.process ??= {}; globalThis.process.env ??= {};
import { g as getCollection } from '../../chunks/_astro_content_D-tSfqIq.mjs';
export { renderers } from '../../renderers.mjs';

async function GET(context) {
  const locale = context.url.searchParams.get("locale") || "tr";
  const collection = locale === "en" ? "blogEn" : "blog";
  try {
    const posts = await getCollection(collection);
    const items = posts.map((p) => ({
      id: p.id,
      slug: p.slug ?? p.id,
      title: p.data.title ?? "",
      description: p.data.description ?? "",
      pubDate: p.data.pubDate ? String(p.data.pubDate) : "",
      heroImage: p.data.heroImage ?? null
    }));
    return new Response(JSON.stringify(items), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return new Response(JSON.stringify([]), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

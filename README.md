techoxium site

Local development

1. Install dependencies:

	npm install

2. Run dev server:

	npm run dev

Build for production (Cloudflare Pages)

1. Build:

	npm run build

2. Preview locally:

	npm run preview

Notes

- Cloudflare Pages requires Node 18+. The project `package.json` includes an engines hint.
- This project is configured to use the `@astrojs/cloudflare-pages` adapter. If you intend to deploy as a Worker, restore Worker configuration in `wrangler.json`.
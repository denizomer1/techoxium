techoxium site

Local development

1. Install dependencies:

	npm install

2. Run dev server:

	npm run dev

Build for production (Cloudflare Workers)

1. Build:

	npm run build

2. Preview locally with wrangler:

	npm run preview

Notes

- This project uses the `@astrojs/cloudflare` adapter and `wrangler` for local preview and deploy.
- Ensure you have `wrangler` installed globally or available in devDependencies; `npm run preview` runs `wrangler dev` after building.
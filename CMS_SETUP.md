# Keystatic CMS Setup

## Current Setup Status

✅ **Astro integrations installed**: React, Markdoc, Keystatic  
✅ **Keystatic configuration created**: `keystatic.config.ts`  
✅ **Environment variables configured**: GitHub OAuth credentials  
✅ **Content structure**: Turkish blog posts in `src/content/*.mdoc`  

## GitHub OAuth Configuration

Your GitHub OAuth App is configured with:
- **Client ID**: `Ov23lio9kYetquoZUUpm`
- **Client Secret**: `2474f391a1c34fab05b0831aca6a9982dca219fc`
- **Callback URL**: `https://techoxium.pages.dev/api/keystatic/github/oauth/callback`

## Cloudflare Pages Environment Variables

Add these to your Cloudflare Pages project (Settings → Environment variables):
- `KEYSTATIC_GITHUB_CLIENT_ID`: `Ov23lio9kYetquoZUUpm` (Secret)
- `KEYSTATIC_GITHUB_CLIENT_SECRET`: `2474f391a1c34fab05b0831aca6a9982dca219fc` (Secret)
- `NODE_ENV`: `production` (Text)

## Access Points

- **Production CMS**: `https://techoxium.pages.dev/keystatic`
- **Local Development**: `http://localhost:4321/keystatic`
- **API Endpoint**: `/api/posts.json`

## Content Management

- **Storage**: Local for development, GitHub for production
- **Content Path**: `src/content/*.mdoc`
- **Image Path**: `public/images/`
- **Supported Formats**: Markdoc (.mdoc files)

## Next Steps

1. Deploy to Cloudflare Pages with environment variables
2. Access the CMS at `/keystatic` on your deployed site
3. Authenticate with GitHub to manage content

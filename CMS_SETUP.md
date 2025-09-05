# Keystatic CMS Setup

## Setting up GitHub OAuth for Production

1. Create a GitHub OAuth App:
   - Go to https://github.com/settings/applications/new
   - Application name: `Techoxium CMS`
   - Homepage URL: `https://techoxium.pages.dev`
   - Authorization callback URL: `https://techoxium.pages.dev/api/keystatic/github/oauth/callback`

2. Add Environment Variables to Cloudflare Pages:
   - Go to your Cloudflare Pages project settings
   - Navigate to Settings → Environment variables
   - Add these environment variables (set both as **"Secret"** type for security):
     - `KEYSTATIC_GITHUB_CLIENT_ID`: `Ov23lio9kYetquoZUUpm` (Secret)
     - `KEYSTATIC_GITHUB_CLIENT_SECRET`: `2474f391a1c34fab05b0831aca6a9982dca219fc` (Secret)

3. After setup, access your CMS at:
   - Production: `https://techoxium.pages.dev/keystatic`
   - Local development: `http://localhost:4321/keystatic`

## Content Structure

- Turkish content: `src/content/*.mdoc`
- English content: `src/content/en/*.mdoc` (planned)
- Images: `public/images/`

## API Endpoints

- Posts API: `/api/posts.json?locale=tr` or `/api/posts.json?locale=en`

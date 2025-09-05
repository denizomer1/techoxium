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

⚠️ **CRITICAL**: GitHub OAuth App callback URL must be EXACTLY:
- **Homepage URL**: `https://techoxium.pages.dev`
- **Authorization callback URL**: `https://techoxium.pages.dev/api/keystatic/github/oauth/callback`

🔧 **Fix Steps for 404 Error on Pages:**
1. Go to https://github.com/settings/developers
2. Click on your "Techoxium CMS" OAuth App
3. Verify the Authorization callback URL is: `https://techoxium.pages.dev/api/keystatic/github/oauth/callback`
4. Make sure there are NO trailing slashes or extra paths
5. Save changes

## Cloudflare Pages Environment Variables

**CRITICAL**: These MUST be set in Cloudflare Pages Dashboard:

1. Go to Cloudflare Pages → techoxium project → Settings → Environment variables
2. Add these variables as **"Secret"** type:
   - `KEYSTATIC_GITHUB_CLIENT_ID`: `Ov23lio9kYetquoZUUpm`
   - `KEYSTATIC_GITHUB_CLIENT_SECRET`: `2474f391a1c34fab05b0831aca6a9982dca219fc`
3. Add as **"Text"** type:
   - `NODE_ENV`: `production`

🚨 **Common Issues:**
- If GitHub login shows 404, check OAuth App callback URL
- Environment variables must be exactly as shown above
- Make sure both CLIENT_ID and CLIENT_SECRET are set as "Secret" type
- Redeploy after adding environment variables

## Access Points

- **Local Development**: `http://127.0.0.1:4321/keystatic` (No GitHub login required - uses local storage)
- **Production CMS**: `https://techoxium.pages.dev/keystatic` (Requires GitHub authentication)
- **API Endpoint**: `/api/posts.json`

## Development vs Production

### Local Development
- **Storage**: Local file system
- **Authentication**: None required
- **Content**: Directly edits files in `src/content/`
- **Access**: `npm run dev` → `http://127.0.0.1:4321/keystatic`

### Production
- **Storage**: GitHub repository
- **Authentication**: GitHub OAuth required
- **Content**: Synced with GitHub repository
- **Access**: Deploy to Cloudflare → `https://techoxium.pages.dev/keystatic`

## Content Management

- **Storage**: Local for development, GitHub for production
- **Content Path**: `src/content/*.mdoc`
- **Image Path**: `public/images/`
- **Supported Formats**: Markdoc (.mdoc files)

## Next Steps

1. Deploy to Cloudflare Pages with environment variables
2. Access the CMS at `/keystatic` on your deployed site
3. Authenticate with GitHub to manage content

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

## ⚠️ Current Issue: GitHub OAuth 404 on Production

**Problem**: OAuth callback endpoint returns 404 on Cloudflare Pages
**Status**: Investigating Keystatic + Cloudflare adapter compatibility

## 🔧 Immediate Workaround

### Option 1: Local Development + Git Push
1. Use local CMS: `npm run dev` → `http://127.0.0.1:4321/keystatic`
2. Create/edit content locally
3. Commit and push changes:
   ```bash
   git add .
   git commit -m "Update content via local CMS"
   git push
   ```
4. Cloudflare Pages will auto-deploy

### Option 2: Direct File Editing
1. Edit `.mdoc` files directly in `src/content/`
2. Use the existing file format:
   ```yaml
   ---
   title: "Your Title"
   description: "Description"
   pubDate: "2025-09-05"
   heroImage: "/images/your-image.png"
   tags: ["tag1", "tag2"]
   ---
   
   Your content here...
   ```

## 🔄 Current Investigation

- ✅ Repository is PUBLIC
- ✅ OAuth App configured correctly  
- ✅ Environment variables set
- ❌ Keystatic API routes not working on Cloudflare Pages
- 🔍 Checking Astro + Cloudflare + Keystatic compatibility

# Keystatic CMS Setup - GitHub App (Recommended)

## ✅ GitHub App Setup (Official Method)

### 1. Create GitHub App
Go to https://github.com/settings/apps/new:

**Basic Information:**
- GitHub App name: `Techoxium CMS`
- Homepage URL: `https://techoxium.pages.dev`
- User authorization callback URL: `https://techoxium.pages.dev/api/keystatic/github/oauth/callback`
- Setup URL: `https://techoxium.pages.dev/keystatic`
- Webhook URL: `https://techoxium.pages.dev/api/keystatic/github/webhook`
- Webhook secret: `keystatic-webhook-secret-2025`

**Repository permissions:**
- Contents: Read and write
- Metadata: Read  
- Pull requests: Write

**Subscribe to events:**
- Push
- Pull request

### 2. Install App & Get Credentials

1. Install the app on `denizomer1/techoxium` repository
2. Generate a private key (download .pem file)
3. Note the App ID and Installation ID

### 3. Cloudflare Pages Environment Variables

✅ **Your GitHub App Credentials:**
- **Client ID**: `Iv23liMeqTsIllTigNsp`
- **Client Secret**: `4e2ce6c805e4b55ce17d72dcec3b6cf89263ea38`

**Add these to Cloudflare Pages** (Settings → Environment variables):

Set as **"Secret"** type:
- `KEYSTATIC_GITHUB_CLIENT_ID`: `Iv23liMeqTsIllTigNsp`
- `KEYSTATIC_GITHUB_CLIENT_SECRET`: `4e2ce6c805e4b55ce17d72dcec3b6cf89263ea38`

Set as **"Text"** type:
- `NODE_ENV`: `production`

🚨 **IMPORTANT**: 
1. Go to Cloudflare Pages dashboard
2. Select your `techoxium` project
3. Go to Settings → Environment variables
4. Click "Add variable" for each one above
5. Set the TYPE correctly (Secret vs Text)
6. Save all changes

### 4. Deploy & Test

```bash
npm run deploy
```

Then access: `https://techoxium.pages.dev/keystatic`

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

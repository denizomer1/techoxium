#!/bin/bash

# Deployment script for Keystatic + Astro on Cloudflare Pages

echo "🚀 Building Techoxium with Keystatic CMS for production..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Backup current config and use production config
echo "🔧 Setting up production configuration..."
cp keystatic.config.ts keystatic.config.dev.ts
cp keystatic.config.prod.ts keystatic.config.ts

# Build for production
echo "🔨 Building for production..."
npm run build:cloudflare

# Deploy to Cloudflare Pages
echo "☁️ Deploying to Cloudflare Pages..."
npx wrangler deploy

# Restore development config
echo "🔄 Restoring development configuration..."
cp keystatic.config.dev.ts keystatic.config.ts
rm keystatic.config.dev.ts

echo "✅ Deployment complete!"
echo "🌐 CMS available at: https://techoxium.pages.dev/keystatic"
echo "🔑 GitHub authentication will be required for production CMS"

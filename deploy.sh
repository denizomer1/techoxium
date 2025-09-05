#!/bin/bash

# Deployment script for Keystatic + Astro on Cloudflare Pages

echo "🚀 Building Techoxium with Keystatic CMS..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build for production
echo "🔨 Building for production..."
npm run build:cloudflare

# Deploy to Cloudflare Pages
echo "☁️ Deploying to Cloudflare Pages..."
npm run deploy

echo "✅ Deployment complete!"
echo "🌐 CMS available at: https://techoxium.pages.dev/keystatic"

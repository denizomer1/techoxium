#!/bin/bash

# Build the Astro project
echo "Building Astro project..."
npm run build

# Deploy to Cloudflare Workers
echo "Deploying to Cloudflare Workers..."
npx wrangler deploy
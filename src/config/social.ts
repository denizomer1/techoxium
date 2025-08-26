/**
 * Social Media Configuration
 * 
 * Easy to edit social media links and settings.
 * Add or remove platforms as needed.
 */

export const SOCIAL_LINKS = {
  // Main social platforms
  youtube: 'https://www.youtube.com/@TechOxium',
  nxt: 'https://sosyal.teknofest.app/@techoxium',
  // x: 'https://x.com/Techoxium', // removed per request
  
  // Add more platforms (uncomment to use):
  // instagram: 'https://instagram.com/techoxium',
  // twitter: 'https://twitter.com/techoxium',
  // linkedin: 'https://linkedin.com/company/techoxium',
  // github: 'https://github.com/techoxium',
  // facebook: 'https://facebook.com/techoxium',
  // discord: 'https://discord.gg/techoxium',
  // telegram: 'https://t.me/techoxium',
  // tiktok: 'https://tiktok.com/@techoxium',
} as const;

export const SOCIAL_CONFIG = {
  // Default appearance settings
  defaultSize: 'md' as const,
  defaultVariant: 'filled' as const,
  
  // Header social links (smaller, minimal)
  header: {
    size: 'sm' as const,
    variant: 'minimal' as const,
    platforms: ['youtube', 'nxt'] as const,
  },
  
  // Footer social links (larger, filled)
  footer: {
    size: 'lg' as const,
    variant: 'filled' as const,
    platforms: ['youtube', 'nxt'] as const,
  },
} as const;

/**
 * How to add a new social platform:
 * 
 * 1. Add the link to SOCIAL_LINKS object above
 * 2. The icon is automatically handled in Social.astro
 * 3. Add the platform to the platforms array where you want it to appear
 * 
 * Example:
 * SOCIAL_LINKS.twitter = 'https://twitter.com/yourhandle'
 * Then add 'twitter' to the platforms arrays above
 */
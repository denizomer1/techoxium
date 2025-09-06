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

export const SOCIAL_LINKS = {
  // Main social platforms
  youtube: 'https://www.youtube.com/@techoxium',
  nxt: 'https://sosyal.teknofest.app/@techoxium',
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
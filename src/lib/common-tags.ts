// Common tags used across all languages
export const COMMON_TAGS = [
  'ai',
  'gaming', 
  'apple',
  'windows',
  'technology',
  'social-media'
] as const;

export type CommonTag = typeof COMMON_TAGS[number];
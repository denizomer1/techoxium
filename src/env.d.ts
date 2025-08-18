/// <reference types="astro/client" />

// Minimal environment typing to avoid referencing adapter-specific types in this repo.
type Env = Record<string, unknown>;

declare namespace App {
  interface Locals {}
}

// Fallback Astro global typing (if not already provided by generated types)
declare const Astro: import('astro').AstroGlobal;
// Fallback built-in global constructors (in case libs not picked up by editor)

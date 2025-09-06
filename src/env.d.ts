/// <reference types="astro/client" />


type Env = Record<string, unknown>;

declare namespace App {
  interface Locals {}
}
declare const Astro: import('astro').AstroGlobal;
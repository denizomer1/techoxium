export function resolveEnv(localsOrAstro: any){
  return (localsOrAstro?.runtime?.env) || (localsOrAstro?.cloudflare?.env) || (globalThis as any).process?.env || {};
}

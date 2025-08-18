// Static site: provide a no-op middleware so Astro's internal import succeeds.
export const onRequest = async (_ctx: any, next: any) => next();

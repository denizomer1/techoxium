import type { APIRoute } from 'astro';
export const prerender = true;
export const GET: APIRoute = async () => new Response('Not Found', { status: 404 });

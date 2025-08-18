import type { APIRoute } from 'astro';
// Simple hashing with Web Crypto (SHA-256) + salt
export async function hashPassword(pw: string, salt: string){
  const data = new TextEncoder().encode(pw + ':' + salt);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(hash)].map(b=>b.toString(16).padStart(2,'0')).join('');
}

export function randomId(len = 32){
  const bytes = crypto.getRandomValues(new Uint8Array(len));
  return [...bytes].map(b=>b.toString(16).slice(-2)).join('').slice(0,len);
}

export interface UserRecord { username: string; hash: string; salt: string; role: 'admin'|'guest'; created: string; }
export interface SessionRecord { sid: string; username: string; created: string; }

interface EnvBindings { BLOG_DATA: KVNamespace; SESSION_SECRET: string; INITIAL_ADMIN_USER?: string; INITIAL_ADMIN_PASS?: string; }

const USERS_KEY = 'users:'; // prefix
const SESSION_KEY = 'session:';

export async function ensureInitialAdmin(env: EnvBindings){
  const existing = await env.BLOG_DATA.list({ prefix: USERS_KEY });
  if(existing.keys.length === 0){
    const u = env.INITIAL_ADMIN_USER || 'admin';
    const p = env.INITIAL_ADMIN_PASS || 'admin123';
    await createUser(env, u, p, 'admin');
  }
}

export async function createUser(env: EnvBindings, username: string, password: string, role: 'admin'|'guest'){
  username = username.trim();
  if(!username) throw new Error('username required');
  const salt = randomId(16);
  const hash = await hashPassword(password, salt);
  const rec: UserRecord = { username, hash, salt, role, created: new Date().toISOString() };
  await env.BLOG_DATA.put(USERS_KEY+username, JSON.stringify(rec));
  return rec;
}

export async function getUser(env: EnvBindings, username: string){
  const v = await env.BLOG_DATA.get(USERS_KEY+username);
  return v ? JSON.parse(v) as UserRecord : null;
}

export async function listUsers(env: EnvBindings){
  const list = await env.BLOG_DATA.list({ prefix: USERS_KEY });
  const users: UserRecord[] = [];
  for(const k of list.keys){
    const v = await env.BLOG_DATA.get(k.name);
    if(v) users.push(JSON.parse(v));
  }
  return users;
}

export async function updateUserRole(env: EnvBindings, username: string, role: 'admin'|'guest'){
  const u = await getUser(env, username);
  if(!u) throw new Error('User not found');
  u.role = role;
  await env.BLOG_DATA.put(USERS_KEY+username, JSON.stringify(u));
  return u;
}

export async function updateUserPassword(env: EnvBindings, username: string, password: string){
  const u = await getUser(env, username);
  if(!u) throw new Error('User not found');
  const salt = randomId(16);
  const hash = await hashPassword(password, salt);
  u.salt = salt; u.hash = hash;
  await env.BLOG_DATA.put(USERS_KEY+username, JSON.stringify(u));
  return u;
}

export async function deleteUser(env: EnvBindings, username: string){
  await env.BLOG_DATA.delete(USERS_KEY+username);
}

export async function verifyLogin(env: EnvBindings, username: string, password: string){
  const user = await getUser(env, username);
  if(!user) return null;
  const hash = await hashPassword(password, user.salt);
  if(hash !== user.hash) return null;
  return user;
}

export async function createSession(env: EnvBindings, username: string){
  const sid = randomId(40);
  const rec: SessionRecord = { sid, username, created: new Date().toISOString() };
  await env.BLOG_DATA.put(SESSION_KEY+sid, JSON.stringify(rec), { expirationTtl: 60*60*12 }); // 12h
  return rec;
}

export async function getSession(env: EnvBindings, sid: string){
  const v = await env.BLOG_DATA.get(SESSION_KEY+sid);
  return v ? JSON.parse(v) as SessionRecord : null;
}

export function sessionCookie(sid: string){
  return `__session=${sid}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${60*60*12}`;
}

export async function deleteSession(env: EnvBindings, sid: string){
  try { await env.BLOG_DATA.delete(SESSION_KEY+sid); } catch {}
}

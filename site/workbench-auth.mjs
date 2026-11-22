// Production authentication only. Local identities live in worker.local.mjs.
const cache = new Map();
const bytes = s => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0));
export async function authenticate(request, env, fetcher = fetch) {
  try {
    const issuer = env.ACCESS_ISSUER;
    if (!/^https:\/\/[a-z0-9-]+\.cloudflareaccess\.com$/.test(issuer || '') || !env.ACCESS_AUD) return null;
    const token = request.headers.get('Cf-Access-Jwt-Assertion') || '';
    if (token.length > 16000) return null;
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const header = JSON.parse(new TextDecoder().decode(bytes(parts[0])));
    const claims = JSON.parse(new TextDecoder().decode(bytes(parts[1])));
    const now = Date.now() / 1000;
    if (header.alg !== 'RS256' || !header.kid || claims.iss !== issuer ||
        !Array.isArray(claims.aud) || !claims.aud.includes(env.ACCESS_AUD) ||
        !Number.isFinite(claims.exp) || claims.exp <= now ||
        !Number.isFinite(claims.iat) || claims.iat > now + 30 ||
        (claims.nbf !== undefined && (!Number.isFinite(claims.nbf) || claims.nbf > now)) ||
        typeof claims.sub !== 'string' || !claims.sub || typeof claims.email !== 'string') return null;
    const allowed = (env.ADMIN_EMAILS || '').split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
    if (!allowed.includes(claims.email.toLowerCase())) return null;
    let keys = cache.get(issuer);
    if (!keys || keys.until < now || !keys.keys.some(k => k.kid === header.kid)) {
      const response = await fetcher(`${issuer}/cdn-cgi/access/certs`);
      if (!response.ok) return null;
      keys = { keys: (await response.json()).keys, until: now + 300 };
      cache.set(issuer, keys);
    }
    const jwk = keys.keys.find(k => k.kid === header.kid && k.kty === 'RSA');
    if (!jwk) return null;
    const key = await crypto.subtle.importKey('jwk', jwk, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify']);
    if (!await crypto.subtle.verify('RSASSA-PKCS1-v1_5', key, bytes(parts[2]), new TextEncoder().encode(parts.slice(0, 2).join('.')))) return null;
    return { sub: claims.sub, email: claims.email.toLowerCase() };
  } catch { return null; }
}

export function validMutation(request) {
  return request.headers.get('origin') === new URL(request.url).origin &&
    request.headers.get('content-type')?.split(';')[0] === 'application/json' &&
    request.headers.get('x-workbench-request') === '1';
}

declare const process: { env: Record<string, string | undefined> };

/**
 * ECPay CheckMacValue (AioCheckOut/V5).
 *
 * ECPay's current AIO documentation requires:
 * 1. Sort parameter names A-Z.
 * 2. Prefix HashKey and suffix HashIV.
 * 3. URL encode the whole string.
 * 4. Lowercase it.
 * 5. SHA256 and uppercase the result.
 */
export async function generateCheckMacValue(
  params: Record<string, string | number>,
  hashKey: string,
  hashIV: string,
): Promise<string> {
  const filtered = Object.entries(params)
    .filter(([key]) => key !== 'CheckMacValue')
    .sort();

  const raw = [
    `HashKey=${hashKey}`,
    ...filtered.map(([key, value]) => `${key}=${value}`),
    `HashIV=${hashIV}`,
  ].join('&');

  // Match ECPay's documented URL-encoding rules.
  const encoded = encodeURIComponent(raw)
    .replace(/%20/g, '+')
    .replace(/%2D/gi, '-')
    .replace(/%5F/gi, '_')
    .replace(/%2E/gi, '.')
    .replace(/%21/gi, '!')
    .replace(/%2A/gi, '*')
    .replace(/%28/gi, '(')
    .replace(/%29/gi, ')');

  const data = new TextEncoder().encode(encoded.toLowerCase());
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase();
}

export async function verifyCheckMacValue(
  params: Record<string, string>,
  received: string,
  hashKey: string,
  hashIV: string,
): Promise<boolean> {
  const expected = await generateCheckMacValue(params, hashKey, hashIV);
  return expected === received;
}

export function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export function getAppUrl(): string {
  return (process.env.APP_URL || 'https://galaxyanswers.vercel.app').replace(/\/$/, '');
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

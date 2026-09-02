// Reduce direct credential extraction while preserving ordinary page automation.
// This is not a no-exfiltration boundary: Runtime.evaluate can still observe
// page-visible data such as non-HttpOnly document.cookie and web storage.

const BLOCKED_COOKIE_READS = new Set([
  "Network.getAllCookies",
  "Network.getCookies",
  "Page.getCookies",
  "Storage.getCookies",
]);
const SENSITIVE_HEADERS = new Set([
  "authorization",
  "cookie",
  "cookie2",
  "proxy-authorization",
  "set-cookie",
  "set-cookie2",
]);
const HEADER_CONTAINERS = new Set(["headers", "requestheaders", "responseheaders"]);
const RAW_HEADER_TEXT = new Set(["headerstext", "requestheaderstext", "responseheaderstext"]);
const COOKIE_ARRAYS = new Set([
  "associatedcookies",
  "blockedcookies",
  "cookies",
  "exemptedcookies",
]);
const COOKIE_VALUES = new Set(["cookie", "cookieline", "rawcookieline"]);

export function authorizeCdpCommand(method, params = {}) {
  if (BLOCKED_COOKIE_READS.has(method) || /\.(?:getAllCookies|getCookies)$/.test(method)) {
    throw new Error(`${method} is blocked by the personal credential firewall.`);
  }
  return { method, params };
}

function sanitizeHeaders(value, seen) {
  if (Array.isArray(value)) {
    return value
      .filter(
        (entry) =>
          !SENSITIVE_HEADERS.has(
            String(entry?.name ?? "")
              .trim()
              .toLowerCase(),
          ),
      )
      .map((entry) => sanitizeValue(entry, seen));
  }
  if (!value || typeof value !== "object") return {};
  const clean = {};
  for (const [name, entry] of Object.entries(value)) {
    if (!SENSITIVE_HEADERS.has(name.trim().toLowerCase())) clean[name] = sanitizeValue(entry, seen);
  }
  return clean;
}

function sanitizeValue(value, seen = new WeakMap()) {
  if (!value || typeof value !== "object") return value;
  if (seen.has(value)) return seen.get(value);
  if (Array.isArray(value)) {
    const clean = [];
    seen.set(value, clean);
    for (const entry of value) clean.push(sanitizeValue(entry, seen));
    return clean;
  }
  const clean = {};
  seen.set(value, clean);
  for (const [key, entry] of Object.entries(value)) {
    const normalized = key.toLowerCase();
    if (RAW_HEADER_TEXT.has(normalized) || COOKIE_VALUES.has(normalized)) continue;
    if (COOKIE_ARRAYS.has(normalized)) clean[key] = [];
    else if (HEADER_CONTAINERS.has(normalized)) clean[key] = sanitizeHeaders(entry, seen);
    else clean[key] = sanitizeValue(entry, seen);
  }
  return clean;
}

function shouldSanitize(method) {
  const domain = typeof method === "string" ? method.split(".", 1)[0] : "";
  return new Set(["Audits", "Fetch", "Network", "Storage"]).has(domain);
}

export function sanitizeCdpResult(method, result) {
  return shouldSanitize(method) ? sanitizeValue(result ?? {}) : (result ?? {});
}

export function sanitizeCdpEvent(method, params) {
  return shouldSanitize(method) ? sanitizeValue(params ?? {}) : (params ?? {});
}

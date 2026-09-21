export const BLOG_API_URL =
  process.env.NEXT_PUBLIC_BLOG_API_URL?.replace(/\/$/, "") ??
  "https://backendseo-1-8ldp.onrender.com";

export const BLOG_COMMENTS_ENABLED =
  process.env.NEXT_PUBLIC_BLOG_COMMENTS_ENABLED !== "false";

export const BLOG_DEFAULT_PAGE_SIZE = 9;

/** Build absolute media URL from API-relative paths like /uploads/... */
export function blogMediaUrl(path: string | null | undefined): string | null {
  if (!path) return null;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${BLOG_API_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

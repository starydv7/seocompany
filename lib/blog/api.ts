import { cache } from "react";
import { BLOG_API_URL, BLOG_DEFAULT_PAGE_SIZE } from "@/lib/blog/config";
import type {
  BlogCategory,
  BlogComment,
  BlogPost,
  BlogPostsQuery,
  BlogPostsResponse,
  BlogTag,
} from "@/lib/blog/types";

const FETCH_TIMEOUT_MS = 12_000;
/** Cache blog API responses for 2 minutes (ISR). */
const REVALIDATE_SECONDS = 120;

async function fetchJson<T>(
  path: string,
  init?: RequestInit & { noStore?: boolean }
): Promise<T | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  const { noStore, ...rest } = init ?? {};

  try {
    const res = await fetch(`${BLOG_API_URL}${path}`, {
      ...rest,
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        ...(rest.headers ?? {}),
      },
      ...(noStore
        ? { cache: "no-store" as const }
        : { next: { revalidate: REVALIDATE_SECONDS } }),
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export async function getBlogPosts(query: BlogPostsQuery = {}): Promise<BlogPostsResponse> {
  const params = new URLSearchParams();
  params.set("page", String(query.page ?? 1));
  params.set("limit", String(query.limit ?? BLOG_DEFAULT_PAGE_SIZE));
  if (query.search) params.set("search", query.search);
  if (query.categoryId) params.set("categoryId", query.categoryId);
  if (query.tagId) params.set("tagId", query.tagId);

  const remote = await fetchJson<BlogPostsResponse>(`/public/posts?${params.toString()}`);
  if (remote?.data) {
    return {
      data: remote.data.filter((p) => p.status === "published"),
      meta: remote.meta ?? {
        total: remote.data.length,
        page: query.page ?? 1,
        limit: query.limit ?? BLOG_DEFAULT_PAGE_SIZE,
        totalPages: 1,
      },
    };
  }

  return {
    data: [],
    meta: {
      total: 0,
      page: query.page ?? 1,
      limit: query.limit ?? BLOG_DEFAULT_PAGE_SIZE,
      totalPages: 0,
    },
  };
}

/** Deduped within a single request (metadata + page share one fetch). */
export const getBlogPostBySlug = cache(async (slug: string): Promise<BlogPost | null> => {
  const remote = await fetchJson<BlogPost>(
    `/public/posts/slug/${encodeURIComponent(slug)}`
  );
  if (!remote || remote.status !== "published") return null;
  return remote;
});

/** One list fetch → categories + tags (avoids 2 extra API round-trips). */
export function extractTaxonomy(posts: BlogPost[]): {
  categories: BlogCategory[];
  tags: BlogTag[];
} {
  const categories = new Map<string, BlogCategory>();
  const tags = new Map<string, BlogTag>();
  for (const post of posts) {
    for (const cat of post.categories ?? []) categories.set(cat.id, cat);
    for (const tag of post.tags ?? []) tags.set(tag.id, tag);
  }
  return {
    categories: Array.from(categories.values()),
    tags: Array.from(tags.values()),
  };
}

export async function getBlogCategories(): Promise<BlogCategory[]> {
  const list = await getBlogPosts({ page: 1, limit: 100 });
  return extractTaxonomy(list.data).categories;
}

export async function getBlogTags(): Promise<BlogTag[]> {
  const list = await getBlogPosts({ page: 1, limit: 100 });
  return extractTaxonomy(list.data).tags;
}

export function getPublishedRelatedPosts(post: BlogPost): BlogPost[] {
  return (post.relatedPosts ?? []).filter(
    (p) => p && p.status === "published" && p.slug && p.slug !== post.slug
  );
}

function isCommentApproved(comment: BlogComment): boolean {
  // Public API only returns approved comments; some payloads omit the flag.
  if (comment.isApproved === false || comment.approved === false) return false;
  return true;
}

export function normalizeComments(list: BlogComment[] | null | undefined): BlogComment[] {
  if (!list?.length) return [];
  return list
    .filter((c) => c && c.id && c.content && isCommentApproved(c))
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
}

export function getApprovedComments(post: BlogPost): BlogComment[] {
  return normalizeComments(post.comments);
}

/** Always fresh — never cache empty/stale comment lists. */
export async function getCommentsBySlug(slug: string): Promise<BlogComment[]> {
  const remote = await fetchJson<{
    comments?: BlogComment[];
    data?: BlogComment[];
    commentCount?: number;
  }>(`/public/posts/${encodeURIComponent(slug)}/comments`, { noStore: true });

  return normalizeComments(remote?.comments ?? remote?.data ?? []);
}

export async function getAllPublishedSlugs(): Promise<string[]> {
  const list = await getBlogPosts({ page: 1, limit: 1000 });
  return list.data.map((p) => p.slug);
}

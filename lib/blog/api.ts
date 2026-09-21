import { BLOG_API_URL, BLOG_DEFAULT_PAGE_SIZE } from "@/lib/blog/config";
import type {
  BlogCategory,
  BlogComment,
  BlogPost,
  BlogPostsQuery,
  BlogPostsResponse,
  BlogTag,
} from "@/lib/blog/types";

async function fetchJson<T>(path: string, init?: RequestInit): Promise<T | null> {
  try {
    const res = await fetch(`${BLOG_API_URL}${path}`, {
      ...init,
      headers: {
        Accept: "application/json",
        ...(init?.headers ?? {}),
      },
      next: { revalidate: 30 },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
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

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const remote = await fetchJson<BlogPost>(`/public/posts/slug/${encodeURIComponent(slug)}`);
  if (!remote || remote.status !== "published") return null;
  return remote;
}

export async function getBlogCategories(): Promise<BlogCategory[]> {
  const list = await getBlogPosts({ page: 1, limit: 100 });
  const map = new Map<string, BlogCategory>();
  for (const post of list.data) {
    for (const cat of post.categories ?? []) {
      map.set(cat.id, cat);
    }
  }
  return Array.from(map.values());
}

export async function getBlogTags(): Promise<BlogTag[]> {
  const list = await getBlogPosts({ page: 1, limit: 100 });
  const map = new Map<string, BlogTag>();
  for (const post of list.data) {
    for (const tag of post.tags ?? []) {
      map.set(tag.id, tag);
    }
  }
  return Array.from(map.values());
}

export function getPublishedRelatedPosts(post: BlogPost): BlogPost[] {
  return (post.relatedPosts ?? []).filter(
    (p) => p && p.status === "published" && p.slug && p.slug !== post.slug
  );
}

export function getApprovedComments(post: BlogPost): BlogComment[] {
  return (post.comments ?? []).filter((c) => c.approved !== false);
}

export async function getAllPublishedSlugs(): Promise<string[]> {
  const list = await getBlogPosts({ page: 1, limit: 1000 });
  return list.data.map((p) => p.slug);
}

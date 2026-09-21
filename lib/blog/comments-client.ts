import type { BlogComment, CreateCommentInput } from "@/lib/blog/types";

function commentsUrl(slug: string) {
  return `/api/blog/posts/${encodeURIComponent(slug)}/comments`;
}

/** Load approved comments via same-origin proxy (no CORS). */
export async function fetchBlogComments(slug: string): Promise<BlogComment[]> {
  try {
    const res = await fetch(commentsUrl(slug), {
      method: "GET",
      headers: { Accept: "application/json" },
      cache: "no-store",
    });
    if (!res.ok) return [];
    const data = (await res.json()) as { comments?: BlogComment[] };
    return Array.isArray(data.comments) ? data.comments : [];
  } catch {
    return [];
  }
}

/**
 * Browser posts to same-origin Next.js API (avoids CORS to Render).
 * Server then forwards to:
 * POST {BLOG_API_URL}/public/posts/{slug}/comments
 */
export async function submitBlogComment(
  slug: string,
  input: CreateCommentInput
): Promise<{ ok: boolean; message: string; comment?: BlogComment | null }> {
  try {
    const res = await fetch(commentsUrl(slug), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        authorName: input.authorName,
        authorEmail: input.authorEmail,
        content: input.content,
      }),
    });

    const data = (await res.json().catch(() => null)) as {
      message?: string;
      error?: string;
      comment?: BlogComment | null;
    } | null;

    if (!res.ok) {
      return {
        ok: false,
        message:
          data?.message ||
          data?.error ||
          "Could not submit your comment. Please try again.",
      };
    }

    return {
      ok: true,
      message: data?.message || "Comment posted successfully.",
      comment: data?.comment ?? null,
    };
  } catch {
    return { ok: false, message: "Network error while submitting comment." };
  }
}

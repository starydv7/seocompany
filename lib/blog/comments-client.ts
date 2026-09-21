import { BLOG_API_URL } from "@/lib/blog/config";
import type { CreateCommentInput } from "@/lib/blog/types";

export async function submitBlogComment(
  slug: string,
  input: CreateCommentInput
): Promise<{ ok: boolean; message: string }> {
  try {
    const res = await fetch(
      `${BLOG_API_URL}/public/posts/${encodeURIComponent(slug)}/comments`,
      {
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
      }
    );

    const data = (await res.json().catch(() => null)) as {
      message?: string;
      error?: string;
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
      message:
        data?.message ||
        "Comment submitted and awaiting moderation. Thank you!",
    };
  } catch {
    return { ok: false, message: "Network error while submitting comment." };
  }
}

import { BLOG_API_URL } from "@/lib/blog/config";
import type { CreateCommentInput } from "@/lib/blog/types";

export async function submitBlogComment(
  slug: string,
  input: CreateCommentInput
): Promise<{ ok: boolean; message: string }> {
  try {
    const res = await fetch(
      `${BLOG_API_URL}/public/posts/slug/${encodeURIComponent(slug)}/comments`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      }
    );
    if (!res.ok) {
      return {
        ok: false,
        message: "Could not submit your comment. Comments may not be enabled on the API yet.",
      };
    }
    return { ok: true, message: "Comment submitted for review. Thank you!" };
  } catch {
    return { ok: false, message: "Network error while submitting comment." };
  }
}

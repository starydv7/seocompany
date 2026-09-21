"use client";

import { useEffect, useState, useTransition } from "react";
import { MessageSquare } from "lucide-react";
import { fetchBlogComments, submitBlogComment } from "@/lib/blog/comments-client";
import type { BlogComment } from "@/lib/blog/types";

type Props = {
  slug: string;
  initialComments: BlogComment[];
};

export default function BlogComments({ slug, initialComments }: Props) {
  const [comments, setComments] = useState<BlogComment[]>(initialComments);
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const [loading, setLoading] = useState(initialComments.length === 0);

  // Always refresh from API on mount (fixes stale/empty SSR cache)
  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      const fresh = await fetchBlogComments(slug);
      if (cancelled) return;
      if (fresh.length > 0) setComments(fresh);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    startTransition(async () => {
      const result = await submitBlogComment(slug, {
        authorName: authorName.trim(),
        authorEmail: authorEmail.trim(),
        content: content.trim(),
      });

      if (!result.ok) {
        setError(result.message);
        return;
      }

      setMessage(result.message);
      setAuthorName("");
      setAuthorEmail("");
      setContent("");

      // Show immediately if API returned approved comment; else reload list
      if (result.comment && result.comment.isApproved !== false) {
        setComments((prev) => {
          if (prev.some((c) => c.id === result.comment!.id)) return prev;
          return [result.comment as BlogComment, ...prev];
        });
      } else {
        const fresh = await fetchBlogComments(slug);
        if (fresh.length > 0) setComments(fresh);
      }
    });
  };

  return (
    <section>
      <div className="flex items-center gap-2">
        <MessageSquare className="h-5 w-5 text-[#1570EF]" />
        <h2 className="text-lg font-bold text-slate-900">
          Comments
          {comments.length > 0 ? (
            <span className="ml-2 text-sm font-normal text-slate-500">
              ({comments.length})
            </span>
          ) : null}
        </h2>
      </div>

      <div className="mt-5 space-y-3">
        {loading && comments.length === 0 ? (
          <p className="text-sm text-slate-500">Loading comments…</p>
        ) : comments.length === 0 ? (
          <p className="text-sm text-slate-500">
            No comments yet. Be the first to share your thoughts.
          </p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold text-slate-900">
                  {comment.authorName}
                </p>
                <time className="text-[11px] text-slate-500">
                  {new Date(comment.createdAt).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {comment.content}
              </p>
            </div>
          ))
        )}
      </div>

      <form
        onSubmit={onSubmit}
        className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
      >
        <p className="text-sm font-semibold text-slate-900">Leave a comment</p>
        <p className="mt-1 text-xs text-slate-500">
          Your comment may appear after moderation, depending on site settings.
        </p>
        <div className="mt-3 space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              type="text"
              required
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
            <input
              type="email"
              required
              value={authorEmail}
              onChange={(e) => setAuthorEmail(e.target.value)}
              placeholder="Your email"
              className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <textarea
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write a comment…"
            rows={3}
            className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
          />
          {message ? (
            <p className="text-sm font-medium text-emerald-700">{message}</p>
          ) : null}
          {error ? (
            <p className="text-sm font-medium text-rose-600">{error}</p>
          ) : null}
          <button
            type="submit"
            disabled={pending}
            className="rounded-lg bg-[#1570EF] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#175CD3] disabled:opacity-60"
          >
            {pending ? "Sending…" : "Post comment"}
          </button>
        </div>
      </form>
    </section>
  );
}

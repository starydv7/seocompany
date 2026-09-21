"use client";

import { useState, useTransition } from "react";
import { MessageSquare } from "lucide-react";
import { submitBlogComment } from "@/lib/blog/comments-client";
import type { BlogComment } from "@/lib/blog/types";

type Props = {
  slug: string;
  initialComments: BlogComment[];
};

export default function BlogComments({ slug, initialComments }: Props) {
  const [comments] = useState(initialComments);
  const [authorName, setAuthorName] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    startTransition(async () => {
      const result = await submitBlogComment(slug, {
        authorName: authorName.trim(),
        content: content.trim(),
      });
      if (result.ok) {
        setMessage(result.message);
        setAuthorName("");
        setContent("");
      } else {
        setError(result.message);
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
            <span className="ml-2 text-sm font-normal text-slate-500">({comments.length})</span>
          ) : null}
        </h2>
      </div>

      <div className="mt-5 space-y-3">
        {comments.length === 0 ? (
          <p className="text-sm text-slate-500">No comments yet. Be the first to share your thoughts.</p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold text-slate-900">{comment.authorName}</p>
                <time className="text-[11px] text-slate-500">
                  {new Date(comment.createdAt).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{comment.content}</p>
            </div>
          ))
        )}
      </div>

      <form onSubmit={onSubmit} className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold text-slate-900">Leave a comment</p>
        <div className="mt-3 space-y-3">
          <input
            type="text"
            required
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
          />
          <textarea
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write a comment…"
            rows={3}
            className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
          />
          {message ? <p className="text-sm font-medium text-emerald-700">{message}</p> : null}
          {error ? <p className="text-sm font-medium text-rose-600">{error}</p> : null}
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

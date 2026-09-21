import { NextResponse } from "next/server";
import { BLOG_API_URL } from "@/lib/blog/config";

type Body = {
  authorName?: string;
  authorEmail?: string;
  content?: string;
};

async function upstreamComments(slug: string, init?: RequestInit) {
  return fetch(
    `${BLOG_API_URL}/public/posts/${encodeURIComponent(slug)}/comments`,
    {
      ...init,
      headers: {
        Accept: "application/json",
        ...(init?.headers ?? {}),
      },
      cache: "no-store",
    }
  );
}

/** GET — proxy approved comments (avoids CORS + stale ISR). */
export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug?.trim();
  if (!slug) {
    return NextResponse.json({ message: "Missing post slug." }, { status: 400 });
  }

  try {
    const upstream = await upstreamComments(slug);
    const data = (await upstream.json().catch(() => null)) as {
      comments?: unknown[];
      data?: unknown[];
      commentCount?: number;
      message?: string;
    } | null;

    if (!upstream.ok) {
      return NextResponse.json(
        { message: data?.message || "Could not load comments.", comments: [] },
        { status: upstream.status }
      );
    }

    const comments = data?.comments ?? data?.data ?? [];
    return NextResponse.json({
      comments,
      commentCount: data?.commentCount ?? comments.length,
    });
  } catch {
    return NextResponse.json(
      { message: "Network error while loading comments.", comments: [] },
      { status: 502 }
    );
  }
}

/** POST — proxy new comment to Render API. */
export async function POST(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug?.trim();
  if (!slug) {
    return NextResponse.json({ message: "Missing post slug." }, { status: 400 });
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ message: "Invalid JSON body." }, { status: 400 });
  }

  const authorName = body.authorName?.trim() ?? "";
  const authorEmail = body.authorEmail?.trim() ?? "";
  const content = body.content?.trim() ?? "";

  if (!authorName || !authorEmail || !content) {
    return NextResponse.json(
      { message: "Name, email, and comment are required." },
      { status: 400 }
    );
  }

  try {
    const upstream = await upstreamComments(slug, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ authorName, authorEmail, content }),
    });

    const data = (await upstream.json().catch(() => null)) as {
      message?: string;
      error?: string;
      comment?: unknown;
    } | null;

    if (!upstream.ok) {
      return NextResponse.json(
        {
          message:
            data?.message ||
            data?.error ||
            "Could not submit your comment. Please try again.",
        },
        { status: upstream.status }
      );
    }

    return NextResponse.json({
      message: data?.message || "Comment posted successfully.",
      comment: data?.comment ?? null,
    });
  } catch {
    return NextResponse.json(
      { message: "Network error while submitting comment." },
      { status: 502 }
    );
  }
}

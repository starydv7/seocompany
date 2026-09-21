import Link from "next/link";
import Image from "next/image";
import { MessageSquare } from "lucide-react";
import { blogMediaUrl } from "@/lib/blog/config";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import type { BlogPost } from "@/lib/blog/types";

function timeAgo(iso: string | null) {
  if (!iso) return "";
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.max(1, Math.floor(diff / 60000));
  if (mins < 60) return `${mins} minute${mins !== 1 ? "s" : ""} ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  const days = Math.floor(hours / 24);
  return `${days} day${days !== 1 ? "s" : ""} ago`;
}

function SidebarPostList({
  title,
  posts,
  showComments = false,
}: {
  title: string;
  posts: BlogPost[];
  showComments?: boolean;
}) {
  if (posts.length === 0) return null;

  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wide text-[#1570EF]">{title}</h3>
      <ul className="mt-4 space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
            <Link
              href={`/blog/${post.slug}`}
              className="text-[15px] font-semibold leading-snug text-slate-900 transition hover:text-[#1570EF]"
            >
              {post.title}
            </Link>
            <p className="mt-1 text-xs text-slate-500">
              {post.publishDate ? timeAgo(post.publishDate) : null}
              {showComments && post.comments?.length ? (
                <span className="ml-2 inline-flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" />
                  {post.comments.length}
                </span>
              ) : null}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BlogPostSidebar({
  related,
  recent,
}: {
  related: BlogPost[];
  recent: BlogPost[];
}) {
  const discussed = [...recent]
    .sort((a, b) => (b.comments?.length ?? 0) - (a.comments?.length ?? 0))
    .slice(0, 5);

  return (
    <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
      <SidebarPostList title="Related articles" posts={related.slice(0, 5)} />

      <SidebarPostList title="Latest posts" posts={recent.slice(0, 5)} showComments />

      {discussed.length > 0 ? (
        <SidebarPostList title="Most discussed" posts={discussed} showComments />
      ) : null}

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-wide text-[#1570EF]">
          Grow with BrandMarketing
        </h3>
        <div className="mt-4 space-y-4">
          <div className="rounded-lg border border-slate-100 bg-[#F9FAFB] p-3">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/logo.png"
                alt="BrandMarketing"
                width={40}
                height={40}
                className="h-10 w-10 rounded-lg object-contain"
              />
              <div>
                <p className="text-sm font-bold text-slate-900">Free SEO Audit</p>
                <p className="text-xs text-slate-500">Expert review of your site</p>
              </div>
            </div>
            <a
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex w-full items-center justify-center rounded-lg bg-[#1570EF] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#175CD3]"
            >
              Book a call
            </a>
          </div>
          <div className="rounded-lg border border-slate-100 bg-[#F9FAFB] p-3">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/logo.png"
                alt="BrandMarketing"
                width={40}
                height={40}
                className="h-10 w-10 rounded-lg object-contain"
              />
              <div>
                <p className="text-sm font-bold text-slate-900">Marketing Strategy</p>
                <p className="text-xs text-slate-500">PPC, SEO &amp; social growth</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="mt-3 flex w-full items-center justify-center rounded-lg bg-[#1570EF] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#175CD3]"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Clock, MessageSquare, User } from "lucide-react";
import BlogComments from "@/components/blog/BlogComments";
import BlogPostSidebar from "@/components/blog/BlogPostSidebar";
import BlogShareButtons from "@/components/blog/BlogShareButtons";
import { BLOG_SECTION } from "@/components/blog/blog-styles";
import { BLOG_COMMENTS_ENABLED, blogMediaUrl } from "@/lib/blog/config";
import { formatArticleContent } from "@/lib/blog/format-content";
import { SITE_URL } from "@/lib/site-routes";
import type { BlogComment, BlogPost } from "@/lib/blog/types";

type Props = {
  post: BlogPost;
  related: BlogPost[];
  recent: BlogPost[];
  comments: BlogComment[];
};

const ARTICLE_BODY =
  "article-body text-[16px] leading-[1.8] text-stone-700 [&_a]:font-semibold [&_a]:text-lux-bronze [&_a]:underline-offset-2 hover:[&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-lux-gold [&_blockquote]:pl-4 [&_blockquote]:italic [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:uppercase [&_h2]:tracking-tight [&_h2]:text-stone-900 [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-stone-900 [&_img]:my-6 [&_img]:max-h-96 [&_img]:w-auto [&_img]:max-w-full [&_img]:rounded-lg [&_li]:mb-2 [&_li]:pl-1 [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-5 [&_p:last-child]:mb-0 [&_pre]:my-5 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-stone-100 [&_pre]:p-4 [&_pre]:text-sm [&_pre]:text-stone-800 [&_strong]:font-bold [&_strong]:text-stone-900 [&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6";

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

export default function BlogPostView({ post, related, recent, comments }: Props) {
  const hero = blogMediaUrl(post.featuredImage);
  const authorAvatar = blogMediaUrl(post.author?.avatarUrl);
  const formattedContent = formatArticleContent(post.content);
  const shareUrl = `${SITE_URL}/blog/${post.slug}`;
  const commentCount = comments.length;

  return (
    <div className="min-h-screen bg-transparent">
      <div className={`${BLOG_SECTION} py-6 sm:py-8`}>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)] lg:gap-8 xl:gap-10">
          {/* Main column */}
          <main className="min-w-0">
            {/* Top meta */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-stone-500">
              {post.categories?.[0] ? (
                <Link
                  href={`/blog?categoryId=${post.categories[0].id}`}
                  className="text-lux-bronze hover:underline"
                >
                  {post.categories[0].name}
                </Link>
              ) : (
                <span>Blog</span>
              )}
              <span className="text-stone-500">|</span>
              <span className="inline-flex items-center gap-1 normal-case tracking-normal">
                <Clock className="h-3.5 w-3.5" />
                {post.estimatedReadingTime || 1} min read
              </span>
              {BLOG_COMMENTS_ENABLED ? (
                <>
                  <span className="text-stone-500">|</span>
                  <span className="inline-flex items-center gap-1 normal-case tracking-normal">
                    <MessageSquare className="h-3.5 w-3.5" />
                    {commentCount} {commentCount === 1 ? "comment" : "comments"}
                  </span>
                </>
              ) : null}
            </div>

            {/* Title */}
            <h1 className="mt-4 text-[clamp(1.5rem,3.5vw,2.35rem)] font-bold uppercase leading-[1.12] tracking-tight text-stone-900">
              {post.title}
            </h1>

            {/* Author + share row */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-5">
              <div className="flex items-center gap-3">
                {authorAvatar ? (
                  <Image
                    src={authorAvatar}
                    alt={post.author?.name ?? "Author"}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                    unoptimized
                  />
                ) : (
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-stone-600">
                    <User className="h-5 w-5" />
                  </span>
                )}
                <div>
                  <p className="text-sm font-bold text-stone-900">
                    {post.author?.name ?? "BrandMarketing"}
                  </p>
                  <p className="text-xs text-stone-500">
                    {post.publishDate ? timeAgo(post.publishDate) : "Recently published"}
                  </p>
                </div>
              </div>
              <BlogShareButtons url={shareUrl} title={post.title} />
            </div>

            {/* Hero image — full width of main column */}
            {hero ? (
              <figure className="mt-6 overflow-hidden rounded-lg bg-white">
                <div className="relative aspect-[16/9] w-full sm:aspect-[2/1]">
                  <Image
                    src={hero}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    priority
                    unoptimized
                  />
                </div>
              </figure>
            ) : null}

            {/* Excerpt lead */}
            {post.excerpt ? (
              <p className="mt-6 text-[17px] leading-relaxed text-stone-700">{post.excerpt}</p>
            ) : null}

            {/* Related quick links */}
            {related.length > 0 ? (
              <div className="mt-6 border-l-4 border-lux-gold bg-white/60 py-3 pl-4 pr-3">
                <p className="text-xs font-bold uppercase tracking-wide text-stone-500">Related</p>
                <ul className="mt-2 space-y-1">
                  {related.slice(0, 3).map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`/blog/${item.slug}`}
                        className="text-sm font-semibold text-lux-bronze hover:underline"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Article body */}
            <div className="mt-8">
              {formattedContent ? (
                <div
                  className={ARTICLE_BODY}
                  dangerouslySetInnerHTML={{ __html: formattedContent }}
                />
              ) : (
                <p className="text-stone-500">No content available.</p>
              )}
            </div>

            {/* Tags */}
            {(post.categories?.length || post.tags?.length) ? (
              <div className="mt-10 border-t border-stone-200 pt-6">
                <p className="text-xs font-bold uppercase tracking-wide text-stone-500">Topics</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.categories?.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/blog?categoryId=${cat.id}`}
                      className="rounded-full border border-stone-200 px-3 py-1 text-xs font-semibold text-stone-700 transition hover:border-lux-gold/50 hover:text-lux-bronze"
                    >
                      {cat.name}
                    </Link>
                  ))}
                  {post.tags?.map((tag) => (
                    <Link
                      key={tag.id}
                      href={`/blog?tagId=${tag.id}`}
                      className="rounded-full border border-stone-200 px-3 py-1 text-xs font-semibold text-stone-600 transition hover:border-lux-gold/50 hover:text-lux-bronze"
                    >
                      #{tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Author bio */}
            <div className="mt-8 border-t border-stone-200 pt-6">
              <p className="text-xs font-bold uppercase tracking-wide text-stone-500">About the author</p>
              <div className="mt-3 flex items-start gap-4">
                {authorAvatar ? (
                  <Image
                    src={authorAvatar}
                    alt={post.author?.name ?? "Author"}
                    width={48}
                    height={48}
                    className="h-12 w-12 shrink-0 rounded-full object-cover"
                    unoptimized
                  />
                ) : (
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-stone-600">
                    <User className="h-5 w-5" />
                  </span>
                )}
                <div>
                  <p className="font-bold text-stone-900">{post.author?.name ?? "BrandMarketing"}</p>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">
                    {post.author?.bio ??
                      "Digital marketing insights and growth strategies from the BrandMarketing team."}
                  </p>
                </div>
              </div>
            </div>

            {BLOG_COMMENTS_ENABLED ? (
              <div className="mt-10 border-t border-stone-200 pt-8">
                <BlogComments slug={post.slug} initialComments={comments} />
              </div>
            ) : null}
          </main>

          {/* Sidebar */}
          <BlogPostSidebar related={related} recent={recent} />
        </div>
      </div>
    </div>
  );
}

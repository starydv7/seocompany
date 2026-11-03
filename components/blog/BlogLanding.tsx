import Link from "next/link";
import BlogCard from "@/components/blog/BlogCard";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import type { BlogCategory, BlogPostsResponse, BlogTag } from "@/lib/blog/types";

type Props = {
  posts: BlogPostsResponse;
  categories: BlogCategory[];
  tags: BlogTag[];
  activeCategoryId?: string;
  activeTagId?: string;
  search?: string;
};

export default function BlogLanding({
  posts,
  categories,
  tags,
  activeCategoryId,
  activeTagId,
  search,
}: Props) {
  const buildHref = (next: {
    categoryId?: string | null;
    tagId?: string | null;
    search?: string | null;
    page?: number;
  }) => {
    const params = new URLSearchParams();
    const categoryId =
      next.categoryId === null ? undefined : (next.categoryId ?? activeCategoryId);
    const tagId = next.tagId === null ? undefined : (next.tagId ?? activeTagId);
    const q = next.search === null ? undefined : (next.search ?? search);
    const page = next.page;
    if (categoryId) params.set("categoryId", categoryId);
    if (tagId) params.set("tagId", tagId);
    if (q) params.set("search", q);
    if (page && page > 1) params.set("page", String(page));
    const qs = params.toString();
    return qs ? `/blog?${qs}` : "/blog";
  };

  const { data, meta } = posts;
  const activeCategory = categories.find((c) => c.id === activeCategoryId);
  const activeTag = tags.find((t) => t.id === activeTagId);
  const hasFilters = Boolean(activeCategory || activeTag || search);

  return (
    <div className="min-h-screen bg-transparent">
      {/* Blue hero */}
      <section className="relative overflow-hidden lux-banner">
        {/* Decorative shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-stone-900/5" />
          <div className="absolute -bottom-20 right-1/4 h-56 w-56 rounded-full bg-white" />
          <div className="absolute -left-12 top-1/3 h-40 w-40 rounded-full bg-white" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-lux-gold/10" />
        </div>

        <div className="relative mx-auto px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
            {/* Left — headline */}
            <div>
              <p className="text-sm font-semibold text-blue-700">Blog</p>
              <h1 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.15] tracking-tight text-stone-900">
                The Journal: Marketing Resources, Insights, and Industry News
              </h1>
            </div>

            {/* Right — subscribe */}
            <div className="lg:pt-6">
              <p className="text-[15px] leading-relaxed text-blue-700">
                Subscribe to learn about new product features, the latest in technology,
                marketing solutions, and updates from BrandMarketing.
              </p>
              <form action="/contact" method="get" className="mt-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="min-w-0 flex-1 rounded-lg border border-stone-300 bg-stone-900/5 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 outline-none transition focus:border-stone-300 focus:bg-stone-900/10"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-lg lux-cta px-5 py-2.5 text-sm font-semibold text-lux-ink"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Category / tag filters */}
        {(categories.length > 0 || tags.length > 0) ? (
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <Link
              href="/blog"
              className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
                !activeCategoryId && !activeTagId
                  ? "bg-white text-stone-900"
                  : "bg-white text-stone-600 hover:bg-white"
              }`}
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={buildHref({ categoryId: cat.id, tagId: null, page: 1 })}
                className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
                  activeCategoryId === cat.id
                    ? "bg-lux-gold text-lux-ink"
                    : "bg-white text-stone-600 hover:bg-white"
                }`}
              >
                {cat.name}
              </Link>
            ))}
            {tags.map((tag) => (
              <Link
                key={tag.id}
                href={buildHref({ tagId: tag.id, page: 1 })}
                className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
                  activeTagId === tag.id
                    ? "bg-lux-gold text-lux-ink"
                    : "bg-white text-stone-600 hover:bg-white"
                }`}
              >
                #{tag.name}
              </Link>
            ))}
          </div>
        ) : null}

        {hasFilters ? (
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-stone-500">
            <span>Filtered by:</span>
            {activeCategory ? (
              <span className="rounded-full bg-blue-50 px-3 py-0.5 font-medium text-blue-700">
                {activeCategory.name}
              </span>
            ) : null}
            {activeTag ? (
              <span className="rounded-full bg-white px-3 py-0.5 font-medium text-stone-700">
                #{activeTag.name}
              </span>
            ) : null}
            {search ? (
              <span className="rounded-full bg-white px-3 py-0.5 font-medium text-stone-700">
                &ldquo;{search}&rdquo;
              </span>
            ) : null}
            <Link href="/blog" className="font-semibold text-blue-700 hover:underline">
              Clear
            </Link>
          </div>
        ) : null}

        {data.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-stone-300 px-6 py-20 text-center">
            <p className="text-lg font-semibold text-stone-900">No published posts yet</p>
            <p className="mt-2 text-sm text-stone-500">
              Publish a post in your CMS, then refresh this page.
            </p>
            <Link href="/blog" className="mt-4 inline-flex text-sm font-semibold text-blue-700 hover:underline">
              Clear filters
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {meta.totalPages > 0 ? (
          <div className="mt-14 flex items-center justify-between border-t border-stone-200 pt-6">
            {meta.page > 1 ? (
              <Link
                href={buildHref({ page: meta.page - 1 })}
                className="rounded-lg border border-stone-200 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-stone-300 hover:bg-white/60"
              >
                Previous
              </Link>
            ) : (
              <span className="rounded-lg border border-stone-200/70 px-4 py-2 text-sm font-semibold text-stone-400">
                Previous
              </span>
            )}

            <span className="text-sm font-medium text-stone-600">
              Page {meta.page} of {meta.totalPages}
            </span>

            {meta.page < meta.totalPages ? (
              <Link
                href={buildHref({ page: meta.page + 1 })}
                className="rounded-lg border border-stone-200 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-stone-300 hover:bg-white/60"
              >
                Next
              </Link>
            ) : (
              <span className="rounded-lg border border-stone-200/70 px-4 py-2 text-sm font-semibold text-stone-400">
                Next
              </span>
            )}
          </div>
        ) : null}
      </section>

      {/* CTA banner */}
      <section className="lux-banner">
        <div className="mx-auto px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight text-stone-900">
            Ready to level up your business?
          </h2>
          <p className="mt-3 text-[15px] text-blue-700">
            Get a free SEO &amp; marketing audit. No obligation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-stone-300 px-5 py-2.5 text-sm font-semibold text-stone-900 transition hover:bg-stone-900/5"
            >
              View demo
            </Link>
            <a
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold lux-cta text-lux-ink"
            >
              Get started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostView from "@/components/blog/BlogPostView";
import {
  getAllPublishedSlugs,
  getApprovedComments,
  getBlogPostBySlug,
  getBlogPosts,
  getCommentsBySlug,
  getPublishedRelatedPosts,
} from "@/lib/blog/api";
import { blogMediaUrl } from "@/lib/blog/config";
import { SITE_URL } from "@/lib/site-routes";

/** Cache post pages for 2 minutes (ISR). */
export const revalidate = 120;

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const slugs = await getAllPublishedSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) return { title: "Post not found | BrandMarketing" };

  const title = post.metaTitle || `${post.title} | BrandMarketing Blog`;
  const description = post.metaDescription || post.excerpt || post.title;
  const ogImage = blogMediaUrl(post.socialSharingImage || post.featuredImage) || undefined;

  return {
    title,
    description,
    keywords: post.metaKeywords ?? undefined,
    openGraph: {
      title: post.metaTitle || post.title,
      description,
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      images: ogImage ? [{ url: ogImage }] : undefined,
      publishedTime: post.publishDate ?? undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) notFound();

  // Always load comments from dedicated endpoint (never trust stale page cache)
  const [recentList, comments] = await Promise.all([
    getBlogPosts({ page: 1, limit: 10 }),
    getCommentsBySlug(params.slug),
  ]);

  const recent = recentList.data.filter((p) => p.slug !== post.slug);
  const related = getPublishedRelatedPosts(post);
  const displayComments =
    comments.length > 0 ? comments : getApprovedComments(post);

  return (
    <BlogPostView
      post={post}
      related={related}
      recent={recent}
      comments={displayComments}
    />
  );
}

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
import type { BlogPost } from "@/lib/blog/types";
import { JsonLd } from "@/components/seo/JsonLd";
import { OG_IMAGE, ORGANIZATION_ID } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
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
  if (!post) return { title: "Post not found", robots: { index: false } };

  const title = post.metaTitle || `${post.title} | BrandMarketing Blog`;
  const description = post.metaDescription || post.excerpt || post.title;
  const ogImage = blogMediaUrl(post.socialSharingImage || post.featuredImage) || undefined;
  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: { absolute: title },
    description,
    keywords: post.metaKeywords ?? undefined,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle || post.title,
      description,
      type: "article",
      url,
      siteName: SITE_NAME,
      images: ogImage ? [{ url: ogImage }] : [OG_IMAGE],
      publishedTime: post.publishDate ?? undefined,
      modifiedTime: post.updatedAt,
      authors: post.author ? [post.author.name] : undefined,
      tags: post.tags.map((t) => t.name),
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description,
      images: ogImage ? [ogImage] : [OG_IMAGE.url],
    },
  };
}

function postJsonLd(post: BlogPost) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const image = blogMediaUrl(post.featuredImage || post.socialSharingImage);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        mainEntityOfPage: url,
        headline: post.title,
        description: post.metaDescription || post.excerpt || undefined,
        image: image || undefined,
        datePublished: post.publishDate || post.createdAt,
        dateModified: post.updatedAt,
        author: post.author
          ? { "@type": "Person", name: post.author.name }
          : { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
        keywords: post.metaKeywords?.join(", ") || undefined,
        articleSection: post.categories[0]?.name,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
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
    <>
      <JsonLd data={postJsonLd(post)} />
      <BlogPostView
        post={post}
        related={related}
        recent={recent}
        comments={displayComments}
      />
    </>
  );
}

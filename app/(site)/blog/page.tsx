import type { Metadata } from "next";
import BlogLanding from "@/components/blog/BlogLanding";
import { extractTaxonomy, getBlogPosts } from "@/lib/blog/api";

/** Cache the page for 2 minutes; still refreshes in the background. */
export const revalidate = 120;

export const metadata: Metadata = {
  title: "Blog | BrandMarketing",
  description:
    "SEO, PPC, social media, and growth insights from BrandMarketing — practical playbooks for modern brands.",
};

type SearchParams = {
  categoryId?: string;
  tagId?: string;
  search?: string;
  page?: string;
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const page = Number(searchParams.page ?? "1") || 1;
  const categoryId = searchParams.categoryId;
  const tagId = searchParams.tagId;
  const search = searchParams.search;

  // Unfiltered page 1: one API call. Filtered: filtered list + taxonomy list.
  const needsTaxonomyFetch = Boolean(categoryId || tagId || search || page > 1);

  const posts = await getBlogPosts({ page, categoryId, tagId, search });
  const taxonomySource = needsTaxonomyFetch
    ? await getBlogPosts({ page: 1, limit: 100 })
    : posts;
  const { categories, tags } = extractTaxonomy(taxonomySource.data);

  return (
    <BlogLanding
      posts={posts}
      categories={categories}
      tags={tags}
      activeCategoryId={categoryId}
      activeTagId={tagId}
      search={search}
    />
  );
}

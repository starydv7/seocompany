import type { Metadata } from "next";
import BlogLanding from "@/components/blog/BlogLanding";
import PageJsonLd from "@/components/seo/JsonLd";
import { extractTaxonomy, getBlogPosts } from "@/lib/blog/api";
import { pageMetadata } from "@/lib/seo";

/** Cache the page for 2 minutes; still refreshes in the background. */
export const revalidate = 120;

type SearchParams = {
  categoryId?: string;
  tagId?: string;
  search?: string;
  page?: string;
};

export function generateMetadata({ searchParams }: { searchParams: SearchParams }): Metadata {
  const base = pageMetadata("/blog");
  const isFiltered = Boolean(searchParams.categoryId || searchParams.tagId || searchParams.search);
  return isFiltered ? { ...base, robots: { index: false, follow: true } } : base;
}

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
    <>
      <PageJsonLd path="/blog" />
      <BlogLanding
        posts={posts}
        categories={categories}
        tags={tags}
        activeCategoryId={categoryId}
        activeTagId={tagId}
        search={search}
      />
    </>
  );
}

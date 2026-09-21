import type { Metadata } from "next";
import BlogLanding from "@/components/blog/BlogLanding";
import { getBlogCategories, getBlogPosts, getBlogTags } from "@/lib/blog/api";

export const dynamic = "force-dynamic";

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

  const [posts, categories, tags] = await Promise.all([
    getBlogPosts({ page, categoryId, tagId, search }),
    getBlogCategories(),
    getBlogTags(),
  ]);

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

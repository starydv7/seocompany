import type { MetadataRoute } from "next";
import { getAllPublishedSlugs } from "@/lib/blog/api";
import { SEO_PAGES } from "@/lib/seo";
import { PUBLIC_ROUTES, SITE_URL } from "@/lib/site-routes";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = PUBLIC_ROUTES.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "/" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : SEO_PAGES[path]?.serviceType ? 0.9 : 0.6,
  }));

  const slugs = await getAllPublishedSlugs();
  const blogEntries: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}

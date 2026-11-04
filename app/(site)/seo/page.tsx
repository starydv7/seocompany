import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { SEO_PAGE } from "@/lib/marketing/pages/seo-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/seo");

export default function SeoPage() {
  return (
    <>
      <PageJsonLd path="/seo" faqs={SEO_PAGE.faqs} />
      <EliteMarketingPage page={SEO_PAGE} />
    </>
  );
}

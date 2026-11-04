import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { AI_SEO_PAGE } from "@/lib/marketing/pages/seo-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/seo/aiseo");

export default function AiSeoPage() {
  return (
    <>
      <PageJsonLd path="/seo/aiseo" />
      <EliteMarketingPage page={AI_SEO_PAGE} />
    </>
  );
}

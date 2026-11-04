import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { LOCAL_SEO_PAGE } from "@/lib/marketing/pages/seo-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/seo/local");

export default function LocalSeoPage() {
  return (
    <>
      <PageJsonLd path="/seo/local" faqs={LOCAL_SEO_PAGE.faqs} />
      <EliteMarketingPage page={LOCAL_SEO_PAGE} />
    </>
  );
}

import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { TECHNICAL_SEO_PAGE } from "@/lib/marketing/pages/seo-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/seo/technical");

export default function TechnicalSeoPage() {
  return (
    <>
      <PageJsonLd path="/seo/technical" faqs={TECHNICAL_SEO_PAGE.faqs} />
      <EliteMarketingPage page={TECHNICAL_SEO_PAGE} />
    </>
  );
}

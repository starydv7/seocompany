import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { FRANCHISE_SEO_PAGE } from "@/lib/marketing/pages/seo-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/seo/franchise");

export default function FranchiseSeoPage() {
  return (
    <>
      <PageJsonLd path="/seo/franchise" faqs={FRANCHISE_SEO_PAGE.faqs} />
      <EliteMarketingPage page={FRANCHISE_SEO_PAGE} />
    </>
  );
}

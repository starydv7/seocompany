import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { BUSINESS_PAGE } from "@/lib/design-and-development/pages/dd-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/design-and-development/business-solutions");

export default function BusinessSolutionsPage() {
  return (
    <>
      <PageJsonLd path="/design-and-development/business-solutions" faqs={BUSINESS_PAGE.faqs} />
      <EliteMarketingPage page={BUSINESS_PAGE} />
    </>
  );
}

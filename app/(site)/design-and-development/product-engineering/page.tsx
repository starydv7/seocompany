import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { PRODUCT_PAGE } from "@/lib/design-and-development/pages/dd-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/design-and-development/product-engineering");

export default function ProductEngineeringPage() {
  return (
    <>
      <PageJsonLd path="/design-and-development/product-engineering" faqs={PRODUCT_PAGE.faqs} />
      <EliteMarketingPage page={PRODUCT_PAGE} />
    </>
  );
}

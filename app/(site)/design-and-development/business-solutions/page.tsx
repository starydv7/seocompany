import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { BUSINESS_ELITE } from "@/lib/design-and-development/elite-content";
import BusinessSolutionsLanding from "@/components/design-and-development/BusinessSolutionsLanding";

export const metadata: Metadata = pageMetadata("/design-and-development/business-solutions");

export default function BusinessSolutionsPage() {
  return (
    <>
      <PageJsonLd path="/design-and-development/business-solutions" faqs={BUSINESS_ELITE.faqs} />
      <BusinessSolutionsLanding />
    </>
  );
}

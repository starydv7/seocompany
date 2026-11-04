import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { DD_HUB_PAGE } from "@/lib/design-and-development/pages/dd-core-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/design-and-development");

export default function DesignAndDevelopmentPage() {
  return (
    <>
      <PageJsonLd path="/design-and-development" faqs={DD_HUB_PAGE.faqs} />
      <EliteMarketingPage page={DD_HUB_PAGE} />
    </>
  );
}

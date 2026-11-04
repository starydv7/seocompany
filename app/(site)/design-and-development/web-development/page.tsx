import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { WEB_PAGE } from "@/lib/design-and-development/pages/dd-core-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/design-and-development/web-development");

export default function WebDevelopmentPage() {
  return (
    <>
      <PageJsonLd path="/design-and-development/web-development" faqs={WEB_PAGE.faqs} />
      <EliteMarketingPage page={WEB_PAGE} />
    </>
  );
}

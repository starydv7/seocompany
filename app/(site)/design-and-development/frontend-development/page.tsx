import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { FRONTEND_PAGE } from "@/lib/design-and-development/pages/dd-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/design-and-development/frontend-development");

export default function FrontendDevelopmentPage() {
  return (
    <>
      <PageJsonLd path="/design-and-development/frontend-development" faqs={FRONTEND_PAGE.faqs} />
      <EliteMarketingPage page={FRONTEND_PAGE} />
    </>
  );
}

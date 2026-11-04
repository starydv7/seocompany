import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { BACKEND_PAGE } from "@/lib/design-and-development/pages/dd-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/design-and-development/backend-development");

export default function BackendDevelopmentPage() {
  return (
    <>
      <PageJsonLd path="/design-and-development/backend-development" faqs={BACKEND_PAGE.faqs} />
      <EliteMarketingPage page={BACKEND_PAGE} />
    </>
  );
}

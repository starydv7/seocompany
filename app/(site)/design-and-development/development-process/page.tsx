import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { PROCESS_PAGE } from "@/lib/design-and-development/pages/dd-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/design-and-development/development-process");

export default function DevelopmentProcessPage() {
  return (
    <>
      <PageJsonLd path="/design-and-development/development-process" faqs={PROCESS_PAGE.faqs} />
      <EliteMarketingPage page={PROCESS_PAGE} />
    </>
  );
}

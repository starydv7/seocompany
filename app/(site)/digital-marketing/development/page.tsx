import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { DM_DEVELOPMENT_PAGE } from "@/lib/marketing/pages/dm-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/digital-marketing/development");

export default function DigitalMarketingDevelopmentPage() {
  return (
    <>
      <PageJsonLd path="/digital-marketing/development" faqs={DM_DEVELOPMENT_PAGE.faqs} />
      <EliteMarketingPage page={DM_DEVELOPMENT_PAGE} />
    </>
  );
}

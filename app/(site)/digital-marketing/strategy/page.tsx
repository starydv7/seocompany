import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { DM_STRATEGY_PAGE } from "@/lib/marketing/pages/dm-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/digital-marketing/strategy");

export default function DigitalMarketingStrategyPage() {
  return (
    <>
      <PageJsonLd path="/digital-marketing/strategy" faqs={DM_STRATEGY_PAGE.faqs} />
      <EliteMarketingPage page={DM_STRATEGY_PAGE} />
    </>
  );
}

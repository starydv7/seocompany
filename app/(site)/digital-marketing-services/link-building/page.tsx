import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { LINK_BUILDING_PAGE } from "@/lib/marketing/pages/services-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/digital-marketing-services/link-building");

export default function LinkBuildingPage() {
  return (
    <>
      <PageJsonLd path="/digital-marketing-services/link-building" faqs={LINK_BUILDING_PAGE.faqs} />
      <EliteMarketingPage page={LINK_BUILDING_PAGE} />
    </>
  );
}

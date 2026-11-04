import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { MARKETPLACE_PAGE } from "@/lib/marketing/pages/services-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/digital-marketing-services/online-marketplace-marketing");

export default function MarketplaceMarketingPage() {
  return (
    <>
      <PageJsonLd path="/digital-marketing-services/online-marketplace-marketing" faqs={MARKETPLACE_PAGE.faqs} />
      <EliteMarketingPage page={MARKETPLACE_PAGE} />
    </>
  );
}

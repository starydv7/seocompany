import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import MarketplaceLanding from "@/components/marketplace/MarketplaceLanding";

export const metadata: Metadata = pageMetadata("/digital-marketing-services/online-marketplace-marketing");

export default function OnlineMarketplaceMarketingPage() {
  return (
    <>
      <PageJsonLd path="/digital-marketing-services/online-marketplace-marketing" />
      <MarketplaceLanding />
    </>
  );
}

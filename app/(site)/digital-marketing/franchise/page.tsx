import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { DM_FRANCHISE_PAGE } from "@/lib/marketing/pages/dm-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/digital-marketing/franchise");

export default function FranchiseMarketingPage() {
  return (
    <>
      <PageJsonLd path="/digital-marketing/franchise" faqs={DM_FRANCHISE_PAGE.faqs} />
      <EliteMarketingPage page={DM_FRANCHISE_PAGE} />
    </>
  );
}

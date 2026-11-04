import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { DM_ECOMMERCE_PAGE } from "@/lib/marketing/pages/dm-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/digital-marketing/ecommerce");

export default function EcommerceMarketingPage() {
  return (
    <>
      <PageJsonLd path="/digital-marketing/ecommerce" faqs={DM_ECOMMERCE_PAGE.faqs} />
      <EliteMarketingPage page={DM_ECOMMERCE_PAGE} />
    </>
  );
}

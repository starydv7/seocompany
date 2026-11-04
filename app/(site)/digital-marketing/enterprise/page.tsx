import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { DM_ENTERPRISE_PAGE } from "@/lib/marketing/pages/dm-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/digital-marketing/enterprise");

export default function EnterpriseMarketingPage() {
  return (
    <>
      <PageJsonLd path="/digital-marketing/enterprise" faqs={DM_ENTERPRISE_PAGE.faqs} />
      <EliteMarketingPage page={DM_ENTERPRISE_PAGE} />
    </>
  );
}

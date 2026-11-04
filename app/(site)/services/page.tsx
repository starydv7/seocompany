import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { CRO_CONTENT_PAGE } from "@/lib/marketing/pages/services-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/services");

export default function ServicesPage() {
  return (
    <>
      <PageJsonLd path="/services" faqs={CRO_CONTENT_PAGE.faqs} />
      <EliteMarketingPage page={CRO_CONTENT_PAGE} />
    </>
  );
}

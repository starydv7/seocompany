import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { DM_SERVICES_PAGE } from "@/lib/marketing/pages/services-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/digital-marketing-services");

export default function DigitalMarketingServicesPage() {
  return (
    <>
      <PageJsonLd path="/digital-marketing-services" faqs={DM_SERVICES_PAGE.faqs} />
      <EliteMarketingPage page={DM_SERVICES_PAGE} />
    </>
  );
}

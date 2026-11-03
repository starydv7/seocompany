import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import DigitalMarketingHubLanding from "@/components/digital-marketing/DigitalMarketingHubLanding";
import { DM_HUB_FAQS } from "@/lib/digital-marketing/hub-elite-content";

export const metadata: Metadata = pageMetadata("/digital-marketing");

export default function DigitalMarketingPage() {
  return (
    <>
      <PageJsonLd path="/digital-marketing" faqs={DM_HUB_FAQS} />
      <DigitalMarketingHubLanding />
    </>
  );
}

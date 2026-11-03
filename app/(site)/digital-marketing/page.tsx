import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import DigitalMarketingHubLanding from "@/components/digital-marketing/DigitalMarketingHubLanding";

export const metadata: Metadata = pageMetadata("/digital-marketing");

export default function DigitalMarketingPage() {
  return (
    <>
      <PageJsonLd path="/digital-marketing" />
      <DigitalMarketingHubLanding />
    </>
  );
}

import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import DevelopmentDmLanding from "@/components/digital-marketing/DevelopmentDmLanding";

export const metadata: Metadata = pageMetadata("/digital-marketing/development");

export default function DigitalMarketingDevelopmentPage() {
  return (
    <>
      <PageJsonLd path="/digital-marketing/development" />
      <DevelopmentDmLanding />
    </>
  );
}

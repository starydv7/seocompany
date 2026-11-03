import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import StrategyDmLanding from "@/components/digital-marketing/StrategyDmLanding";

export const metadata: Metadata = pageMetadata("/digital-marketing/strategy");

export default function DigitalMarketingStrategyPage() {
  return (
    <>
      <PageJsonLd path="/digital-marketing/strategy" />
      <StrategyDmLanding />
    </>
  );
}

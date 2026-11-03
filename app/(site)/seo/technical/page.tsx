import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import TechnicalSeoLanding from "@/components/seo/TechnicalSeoLanding";

export const metadata: Metadata = pageMetadata("/seo/technical");

export default function TechnicalSeoPage() {
  return (
    <>
      <PageJsonLd path="/seo/technical" />
      <TechnicalSeoLanding />
    </>
  );
}

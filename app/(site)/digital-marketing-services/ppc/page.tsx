import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import PpcLanding from "@/components/ppc/PpcLanding";

export const metadata: Metadata = pageMetadata("/digital-marketing-services/ppc");

export default function PpcMarketingPage() {
  return (
    <>
      <PageJsonLd path="/digital-marketing-services/ppc" />
      <PpcLanding />
    </>
  );
}

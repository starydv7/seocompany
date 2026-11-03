import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import FranchiseDmLanding from "@/components/digital-marketing/FranchiseDmLanding";

export const metadata: Metadata = pageMetadata("/digital-marketing/franchise");

export default function FranchiseDigitalMarketingPage() {
  return (
    <>
      <PageJsonLd path="/digital-marketing/franchise" />
      <FranchiseDmLanding />
    </>
  );
}

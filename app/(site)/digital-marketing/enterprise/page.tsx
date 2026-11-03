import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import EnterpriseDmLanding from "@/components/digital-marketing/EnterpriseDmLanding";

export const metadata: Metadata = pageMetadata("/digital-marketing/enterprise");

export default function EnterpriseDigitalMarketingPage() {
  return (
    <>
      <PageJsonLd path="/digital-marketing/enterprise" />
      <EnterpriseDmLanding />
    </>
  );
}

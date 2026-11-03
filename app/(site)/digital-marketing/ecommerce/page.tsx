import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import EcommerceDmLanding from "@/components/digital-marketing/EcommerceDmLanding";

export const metadata: Metadata = pageMetadata("/digital-marketing/ecommerce");

export default function EcommerceMarketingPage() {
  return (
    <>
      <PageJsonLd path="/digital-marketing/ecommerce" />
      <EcommerceDmLanding />
    </>
  );
}

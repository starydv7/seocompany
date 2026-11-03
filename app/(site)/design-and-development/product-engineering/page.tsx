import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { PRODUCT_ELITE } from "@/lib/design-and-development/elite-content";
import ProductEngineeringLanding from "@/components/design-and-development/ProductEngineeringLanding";

export const metadata: Metadata = pageMetadata("/design-and-development/product-engineering");

export default function ProductEngineeringPage() {
  return (
    <>
      <PageJsonLd path="/design-and-development/product-engineering" faqs={PRODUCT_ELITE.faqs} />
      <ProductEngineeringLanding />
    </>
  );
}

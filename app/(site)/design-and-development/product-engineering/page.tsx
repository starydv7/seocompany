import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import ProductEngineeringLanding from "@/components/design-and-development/ProductEngineeringLanding";

export const metadata: Metadata = pageMetadata("/design-and-development/product-engineering");

export default function ProductEngineeringPage() {
  return (
    <>
      <PageJsonLd path="/design-and-development/product-engineering" />
      <ProductEngineeringLanding />
    </>
  );
}

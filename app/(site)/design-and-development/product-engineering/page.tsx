import type { Metadata } from "next";
import ProductEngineeringLanding from "@/components/design-and-development/ProductEngineeringLanding";

export const metadata: Metadata = {
  title: "Product Engineering Services | BrandMarketing",
  description:
    "End-to-end product engineering from strategy and architecture to development, optimization, and long-term support.",
};

export default function ProductEngineeringPage() {
  return <ProductEngineeringLanding />;
}

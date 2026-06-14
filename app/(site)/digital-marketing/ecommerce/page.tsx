import type { Metadata } from "next";
import EcommerceDmLanding from "@/components/digital-marketing/EcommerceDmLanding";

export const metadata: Metadata = {
  title: "eCommerce Marketing Services | BrandMarketing",
  description:
    "eCommerce marketing that drives traffic, sales, and long-term growth — SEO, PPC, optimization, and store design.",
};

export default function EcommerceMarketingPage() {
  return <EcommerceDmLanding />;
}

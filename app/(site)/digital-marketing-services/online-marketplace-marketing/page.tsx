import type { Metadata } from "next";
import MarketplaceLanding from "@/components/marketplace/MarketplaceLanding";

export const metadata: Metadata = {
  title: "Online Marketplace Marketing Services | BrandMarketing",
  description:
    "Online marketplace marketing that drives visibility, sales and growth on Amazon, Flipkart, Meesho, and more.",
};

export default function OnlineMarketplaceMarketingPage() {
  return <MarketplaceLanding />;
}

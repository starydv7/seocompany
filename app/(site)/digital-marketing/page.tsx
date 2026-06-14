import type { Metadata } from "next";
import DigitalMarketingHubLanding from "@/components/digital-marketing/DigitalMarketingHubLanding";

export const metadata: Metadata = {
  title: "Digital Marketing Services | BrandMarketing",
  description:
    "Digital marketing that creates predictable growth — strategy, execution, and optimization built into one scalable system.",
};

export default function DigitalMarketingPage() {
  return <DigitalMarketingHubLanding />;
}

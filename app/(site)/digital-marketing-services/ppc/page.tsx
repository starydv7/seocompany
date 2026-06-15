import type { Metadata } from "next";
import PpcLanding from "@/components/ppc/PpcLanding";

export const metadata: Metadata = {
  title: "PPC Marketing Services | BrandMarketing",
  description:
    "PPC marketing that drives qualified traffic and maximum ROI — Google Ads, YouTube, programmatic, and enterprise paid media.",
};

export default function PpcMarketingPage() {
  return <PpcLanding />;
}

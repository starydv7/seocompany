import type { Metadata } from "next";
import StrategyDmLanding from "@/components/digital-marketing/StrategyDmLanding";

export const metadata: Metadata = {
  title: "Digital Marketing Strategy Services | BrandMarketing",
  description:
    "Build a winning digital marketing strategy with research-driven planning, channel selection, and measurable KPIs that drive real growth.",
};

export default function DigitalMarketingStrategyPage() {
  return <StrategyDmLanding />;
}

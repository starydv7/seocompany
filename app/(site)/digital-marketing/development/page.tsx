import type { Metadata } from "next";
import DevelopmentDmLanding from "@/components/digital-marketing/DevelopmentDmLanding";

export const metadata: Metadata = {
  title: "Digital Marketing Development | BrandMarketing",
  description:
    "We build the tracking, automation, funnels, and reporting systems behind scalable digital marketing.",
};

export default function DigitalMarketingDevelopmentPage() {
  return <DevelopmentDmLanding />;
}

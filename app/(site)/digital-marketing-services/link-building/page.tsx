import type { Metadata } from "next";
import LinkBuildingLanding from "@/components/link-building/LinkBuildingLanding";

export const metadata: Metadata = {
  title: "Link Building Services | BrandMarketing",
  description:
    "Link building that strengthens authority and drives rankings — white-hat backlinks, digital PR outreach, and strategic outreach.",
};

export default function LinkBuildingPage() {
  return <LinkBuildingLanding />;
}

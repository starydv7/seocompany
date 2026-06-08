import type { Metadata } from "next";
import FranchiseDmLanding from "@/components/digital-marketing/FranchiseDmLanding";

export const metadata: Metadata = {
  title: "Franchise Digital Marketing Services | BrandMarketing",
  description:
    "Franchise digital marketing for multi-location growth—local SEO, PPC, content, and scalable systems that boost visibility and leads across every franchise location.",
};

export default function FranchiseDigitalMarketingPage() {
  return <FranchiseDmLanding />;
}

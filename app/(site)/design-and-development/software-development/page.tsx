import type { Metadata } from "next";
import SoftwareDevLanding from "@/components/design-and-development/SoftwareDevLanding";

export const metadata: Metadata = {
  title: "Software Development Services | BrandMarketing",
  description:
    "Custom software development built for scale, performance, and long-term growth — from startup MVPs to enterprise platforms.",
};

export default function SoftwareDevelopmentPage() {
  return <SoftwareDevLanding />;
}

import type { Metadata } from "next";
import MobileAppDevLanding from "@/components/design-and-development/MobileAppDevLanding";

export const metadata: Metadata = {
  title: "Mobile App Development Services | BrandMarketing",
  description:
    "We build high-performance mobile applications that delight users, drive engagement, and accelerate business growth.",
};

export default function MobileAppDevelopmentPage() {
  return <MobileAppDevLanding />;
}

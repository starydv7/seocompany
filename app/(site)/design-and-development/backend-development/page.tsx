import type { Metadata } from "next";
import BackendDevLanding from "@/components/design-and-development/BackendDevLanding";

export const metadata: Metadata = {
  title: "Backend Development Services | BrandMarketing",
  description:
    "We build secure, robust, and scalable backend systems that handle complex logic, manage data, and power your applications seamlessly.",
};

export default function BackendDevelopmentPage() {
  return <BackendDevLanding />;
}

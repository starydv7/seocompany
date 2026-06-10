import type { Metadata } from "next";
import FrontendDevLanding from "@/components/design-and-development/FrontendDevLanding";

export const metadata: Metadata = {
  title: "Frontend Development Services | BrandMarketing",
  description:
    "We build fast, responsive, and interactive frontends that look stunning on every device and deliver exceptional user experiences.",
};

export default function FrontendDevelopmentPage() {
  return <FrontendDevLanding />;
}

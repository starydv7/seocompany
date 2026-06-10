import type { Metadata } from "next";
import WebDevLanding from "@/components/design-and-development/WebDevLanding";

export const metadata: Metadata = {
  title: "Web Development Services | BrandMarketing",
  description:
    "High-performance websites and web applications that drive traffic, engage users, and generate business results.",
};

export default function WebDevelopmentPage() {
  return <WebDevLanding />;
}

import type { Metadata } from "next";
import TechnicalSeoLanding from "@/components/seo/TechnicalSeoLanding";

export const metadata: Metadata = {
  title: "Technical SEO Services | BrandMarketing",
  description:
    "Technical SEO services that build a strong search foundation—audits, crawlability, indexation, Core Web Vitals, schema, migrations, and enterprise technical SEO.",
};

export default function TechnicalSeoPage() {
  return <TechnicalSeoLanding />;
}

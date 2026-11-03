import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { FRONTEND_ELITE } from "@/lib/design-and-development/elite-content";
import FrontendDevLanding from "@/components/design-and-development/FrontendDevLanding";

export const metadata: Metadata = pageMetadata("/design-and-development/frontend-development");

export default function FrontendDevelopmentPage() {
  return (
    <>
      <PageJsonLd path="/design-and-development/frontend-development" faqs={FRONTEND_ELITE.faqs} />
      <FrontendDevLanding />
    </>
  );
}

import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { BACKEND_ELITE } from "@/lib/design-and-development/elite-content";
import BackendDevLanding from "@/components/design-and-development/BackendDevLanding";

export const metadata: Metadata = pageMetadata("/design-and-development/backend-development");

export default function BackendDevelopmentPage() {
  return (
    <>
      <PageJsonLd path="/design-and-development/backend-development" faqs={BACKEND_ELITE.faqs} />
      <BackendDevLanding />
    </>
  );
}

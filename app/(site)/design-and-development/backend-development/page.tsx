import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import BackendDevLanding from "@/components/design-and-development/BackendDevLanding";

export const metadata: Metadata = pageMetadata("/design-and-development/backend-development");

export default function BackendDevelopmentPage() {
  return (
    <>
      <PageJsonLd path="/design-and-development/backend-development" />
      <BackendDevLanding />
    </>
  );
}

import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import WebDevLanding from "@/components/design-and-development/WebDevLanding";

export const metadata: Metadata = pageMetadata("/design-and-development/web-development");

export default function WebDevelopmentPage() {
  return (
    <>
      <PageJsonLd path="/design-and-development/web-development" />
      <WebDevLanding />
    </>
  );
}

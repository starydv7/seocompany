import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import SoftwareDevLanding from "@/components/design-and-development/SoftwareDevLanding";

export const metadata: Metadata = pageMetadata("/design-and-development/software-development");

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <PageJsonLd path="/design-and-development/software-development" />
      <SoftwareDevLanding />
    </>
  );
}

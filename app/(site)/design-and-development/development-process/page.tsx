import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import DevelopmentProcessLanding from "@/components/design-and-development/DevelopmentProcessLanding";

export const metadata: Metadata = pageMetadata("/design-and-development/development-process");

export default function DevelopmentProcessPage() {
  return (
    <>
      <PageJsonLd path="/design-and-development/development-process" />
      <DevelopmentProcessLanding />
    </>
  );
}

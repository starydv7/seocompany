import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import LinkBuildingLanding from "@/components/link-building/LinkBuildingLanding";

export const metadata: Metadata = pageMetadata("/digital-marketing-services/link-building");

export default function LinkBuildingPage() {
  return (
    <>
      <PageJsonLd path="/digital-marketing-services/link-building" />
      <LinkBuildingLanding />
    </>
  );
}

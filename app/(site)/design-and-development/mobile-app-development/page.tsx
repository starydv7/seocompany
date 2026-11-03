import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import MobileAppDevLanding from "@/components/design-and-development/MobileAppDevLanding";

export const metadata: Metadata = pageMetadata("/design-and-development/mobile-app-development");

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <PageJsonLd path="/design-and-development/mobile-app-development" />
      <MobileAppDevLanding />
    </>
  );
}

import type { Metadata } from "next";
import DesignDevHubLanding from "@/components/design-and-development/DesignDevHubLanding";
import PageJsonLd from "@/components/seo/JsonLd";
import { HUB_FAQS } from "@/lib/design-and-development/elite-content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/design-and-development");

export default function DesignAndDevelopmentPage() {
  return (
    <>
      <PageJsonLd path="/design-and-development" faqs={HUB_FAQS} />
      <DesignDevHubLanding />
    </>
  );
}

import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { UIUX_ELITE } from "@/lib/design-and-development/elite-content";
import UiuxDevLanding from "@/components/design-and-development/UiuxDevLanding";

export const metadata: Metadata = pageMetadata("/design-and-development/ui-ux-design");

export default function UiUxDesignPage() {
  return (
    <>
      <PageJsonLd path="/design-and-development/ui-ux-design" faqs={UIUX_ELITE.faqs} />
      <UiuxDevLanding />
    </>
  );
}

import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { UIUX_PAGE } from "@/lib/design-and-development/pages/dd-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/design-and-development/ui-ux-design");

export default function UiUxDesignPage() {
  return (
    <>
      <PageJsonLd path="/design-and-development/ui-ux-design" faqs={UIUX_PAGE.faqs} />
      <EliteMarketingPage page={UIUX_PAGE} />
    </>
  );
}

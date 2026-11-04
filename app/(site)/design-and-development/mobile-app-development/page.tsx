import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { MOBILE_PAGE } from "@/lib/design-and-development/pages/dd-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/design-and-development/mobile-app-development");

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <PageJsonLd path="/design-and-development/mobile-app-development" faqs={MOBILE_PAGE.faqs} />
      <EliteMarketingPage page={MOBILE_PAGE} />
    </>
  );
}

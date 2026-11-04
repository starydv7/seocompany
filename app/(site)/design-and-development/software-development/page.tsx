import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { SOFTWARE_PAGE } from "@/lib/design-and-development/pages/dd-core-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/design-and-development/software-development");

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <PageJsonLd path="/design-and-development/software-development" faqs={SOFTWARE_PAGE.faqs} />
      <EliteMarketingPage page={SOFTWARE_PAGE} />
    </>
  );
}

import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { PPC_PAGE } from "@/lib/marketing/pages/services-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/digital-marketing-services/ppc");

export default function PpcMarketingPage() {
  return (
    <>
      <PageJsonLd path="/digital-marketing-services/ppc" faqs={PPC_PAGE.faqs} />
      <EliteMarketingPage page={PPC_PAGE} />
    </>
  );
}

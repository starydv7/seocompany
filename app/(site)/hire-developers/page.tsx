import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { HIRE_PAGE } from "@/lib/design-and-development/pages/dd-core-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/hire-developers");

export default function HireDevelopersPage() {
  return (
    <>
      <PageJsonLd path="/hire-developers" faqs={HIRE_PAGE.faqs} />
      <EliteMarketingPage page={HIRE_PAGE} />
    </>
  );
}

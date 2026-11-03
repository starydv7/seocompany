import type { Metadata } from "next";
import HireDevelopersLanding from "@/components/hire-developers/HireDevelopersLanding";
import PageJsonLd, { JsonLd } from "@/components/seo/JsonLd";
import { HIRE_DEVELOPERS_ROUTE, HIRE_FAQS } from "@/lib/hire-developers/hire-developers-content";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(HIRE_DEVELOPERS_ROUTE);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${absoluteUrl(HIRE_DEVELOPERS_ROUTE)}#faq`,
  mainEntity: HIRE_FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function HireDevelopersPage() {
  return (
    <>
      <PageJsonLd path={HIRE_DEVELOPERS_ROUTE} />
      <JsonLd data={faqJsonLd} />
      <HireDevelopersLanding />
    </>
  );
}

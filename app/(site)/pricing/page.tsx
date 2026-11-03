import type { Metadata } from "next";
import PricingLanding from "@/components/pricing/PricingLanding";
import PageJsonLd, { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site-routes";
import { ORGANIZATION_ID, pageMetadata } from "@/lib/seo";
import { PRICING_FAQS, PRICING_PLANS, hasRealPrice } from "@/lib/pricing/pricing-content";

const PAGE_URL = `${SITE_URL}/pricing`;

export const metadata: Metadata = pageMetadata("/pricing");

function buildJsonLd() {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: PRICING_FAQS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  for (const plan of PRICING_PLANS.filter(hasRealPrice)) {
    graph.push({
      "@type": "Service",
      "@id": `${PAGE_URL}#${plan.id}`,
      name: plan.title,
      description: plan.headline,
      provider: { "@id": ORGANIZATION_ID },
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: plan.price[0].amount,
        url: `${PAGE_URL}#plan-${plan.id}`,
      },
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export default function PricingPage() {
  return (
    <>
      <PageJsonLd path="/pricing" />
      <JsonLd data={buildJsonLd()} />
      <PricingLanding />
    </>
  );
}

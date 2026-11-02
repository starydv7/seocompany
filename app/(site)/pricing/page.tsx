import type { Metadata } from "next";
import PricingLanding from "@/components/pricing/PricingLanding";
import { SITE_URL } from "@/lib/site-routes";
import { SITE_NAME } from "@/lib/site";
import { PRICING_FAQS, PRICING_PLANS, hasRealPrice } from "@/lib/pricing/pricing-content";

const TITLE = "SEO & AI Automation Pricing | BrandMarketing Digital";
const DESCRIPTION =
  "See starting prices for SEO audits, 90-day SEO sprints, AI automation setup and SEO-ready websites. Fixed-scope audits, USD pricing, reporting you can verify.";
const PAGE_URL = `${SITE_URL}/pricing`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL, type: "website" },
};

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
      provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
      />
      <PricingLanding />
    </>
  );
}

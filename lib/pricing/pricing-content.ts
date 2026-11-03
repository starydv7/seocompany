/**
 * Every value in PRICING_FIGURES maps to a [bracket] in the approved copy.
 * Leave a value as null until the figure or policy is confirmed; the page
 * then falls back to neutral wording and Offer schema is not emitted.
 */
export const PRICING_FIGURES = {
  auditPrice: null as number | null,
  auditCrawlPages: null as number | null,
  auditDeliveryDays: null as string | null,
  sprintMonthly: null as number | null,
  sprintMinimumMonths: null as number | null,
  sprintPagesPerMonth: null as number | null,
  automationSetup: null as number | null,
  automationMonthly: null as number | null,
  websitePrice: null as number | null,
  auditCreditedToFirstMonth: false,
};

export type PlanId = "audit" | "sprint" | "automation" | "website";

export type PricePart = { amount: number | null; suffix?: string };

export type PricingPlan = {
  id: PlanId;
  index: string;
  tag: string;
  title: string;
  headline: string;
  bestFor: string;
  features: string[];
  price: PricePart[];
  priceFallback: string;
  terms?: string;
  cta: string;
  learnMore?: { label: string; href: string };
  accent: { from: string; to: string; glow: string; ink: string };
};

const f = PRICING_FIGURES;

export function formatUsd(amount: number) {
  return `$${amount.toLocaleString("en-US")}`;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "audit",
    index: "01",
    tag: "Start here",
    title: "Technical SEO and Automation Audit",
    headline: "Find what is costing you rankings and leads.",
    bestFor: "Sites that get traffic but few enquiries, or teams planning a redesign.",
    features: [
      f.auditCrawlPages
        ? `Crawl and indexation review of up to ${f.auditCrawlPages.toLocaleString("en-US")} pages`
        : "Crawl and indexation review of your site",
      "Core Web Vitals and mobile speed check",
      "Keyword and competitor gap summary",
      "Lead-handling review: response time, forms and CRM routing",
      "Fix list ranked by impact and effort",
      f.auditDeliveryDays
        ? `30-minute walkthrough call, delivered in ${f.auditDeliveryDays} business days`
        : "30-minute walkthrough call once your fix list is delivered",
    ],
    price: [{ amount: f.auditPrice, suffix: "one-off" }],
    priceFallback: "Fixed one-off fee",
    cta: "Book my audit",
    learnMore: { label: "Technical SEO", href: "/seo/technical" },
    accent: { from: "#f3e3a6", to: "#ddbf5d", glow: "rgba(221,191,93,0.45)", ink: "#8f6c1d" },
  },
  {
    id: "sprint",
    index: "02",
    tag: "Grow",
    title: "90-Day SEO Sprint",
    headline: "Fixes built, pages published, progress reported.",
    bestFor: "Brands that want steady organic growth without chasing their developer.",
    features: [
      "Technical and on-page fixes implemented by our developers",
      f.sprintPagesPerMonth
        ? `${f.sprintPagesPerMonth} new or improved pages or articles each month`
        : "New or improved pages or articles each month",
      "Keyword mapping around what your buyers actually search",
      "Link outreach to relevant, reputable sites",
      "Monthly report that ties work to leads and revenue",
    ],
    price: [{ amount: f.sprintMonthly, suffix: "/month" }],
    priceFallback: "Monthly plan",
    terms: f.sprintMinimumMonths ? `${f.sprintMinimumMonths}-month minimum` : undefined,
    cta: "Plan my sprint",
    learnMore: { label: "SEO services", href: "/seo" },
    accent: { from: "#7ee8c7", to: "#50b444", glow: "rgba(80,180,68,0.42)", ink: "#2f7d27" },
  },
  {
    id: "automation",
    index: "03",
    tag: "Automate",
    title: "AI Automation Setup",
    headline: "Answer every lead in minutes, without adding headcount.",
    bestFor: "Service and ecommerce businesses that lose enquiries to slow follow-up.",
    features: [
      "Instant email and WhatsApp replies to new enquiries",
      "AI chat assistant trained on your services and policies",
      "CRM pipeline, lead scoring and sales alerts in HubSpot or your current tool",
      "Booking calendar that shows slots in the visitor's time zone",
      "Clear hand-off rules so a person steps in when it matters, plus monthly tuning",
    ],
    price: [
      { amount: f.automationSetup, suffix: "setup" },
      { amount: f.automationMonthly, suffix: "/month support" },
    ],
    priceFallback: "Setup + monthly support",
    cta: "Get an automation quote",
    learnMore: { label: "AI automation", href: "/design-and-development/business-solutions" },
    accent: { from: "#b9a6ff", to: "#6c47ff", glow: "rgba(108,71,255,0.45)", ink: "#5534d4" },
  },
  {
    id: "website",
    index: "04",
    tag: "Build",
    title: "SEO-Ready Website Build",
    headline: "A site designed to rank and convert from launch day.",
    bestFor: "New brands, migrations and sites that fail Core Web Vitals.",
    features: [
      "Next.js or Shopify build with a documented page structure",
      "Core Web Vitals passed on mobile before launch",
      "Redirect map, XML sitemap and structured data",
      "GA4, Search Console and conversion tracking set up",
      "30 days of post-launch support",
    ],
    price: [{ amount: f.websitePrice }],
    priceFallback: "Scoped per project",
    cta: "Get a website quote",
    learnMore: { label: "Web development", href: "/design-and-development/web-development" },
    accent: { from: "#9be7ff", to: "#2096ff", glow: "rgba(32,150,255,0.45)", ink: "#0b6cc0" },
  },
];

export const PRICING_INTRO = {
  eyebrow: "Pricing",
  title: "SEO, AI Automation and Web Development Pricing",
  body: "Every engagement starts with a fixed-scope audit, so you know what is holding back your rankings and your leads before you commit to ongoing work. After that, choose the plan that fits your stage.",
  currency: "Prices are in USD, and we can invoice in GBP, AUD or CAD.",
  invoiceCurrencies: ["USD", "GBP", "AUD", "CAD"],
};

export const PRICE_FACTORS = {
  title: "What affects your price",
  body: "Pricing depends on how many pages your site has, how competitive your market is, and how many tools we connect. Regulated industries such as healthcare and finance take more review time. Targeting several countries needs more content. We confirm the final scope in writing after the audit.",
  factors: [
    { key: "pages", label: "Pages on your site" },
    { key: "competition", label: "Market competitiveness" },
    { key: "tools", label: "Tools we connect" },
    { key: "regulated", label: "Regulated industries" },
    { key: "countries", label: "Countries targeted" },
  ] as const,
};

export const NO_PROMISE = {
  title: "What we will not promise",
  body: "No honest agency can guarantee a ranking, because search engines make that decision. We commit to the work, the deadlines and the reporting, and we show you the numbers every month.",
  commitments: ["The work", "The deadlines", "The reporting"],
};

export const PRICING_FAQS: { q: string; a: string }[] = [
  {
    q: "How much does SEO cost?",
    a:
      "It depends on your site size, competition and goals, which is why we start with a fixed-price audit. The audit shows what needs fixing and lets us quote the ongoing work accurately." +
      (f.auditCreditedToFirstMonth ? " The audit fee is credited against your first month." : ""),
  },
  {
    q: "Can I buy AI automation without SEO?",
    a: "Yes. Automation works with any traffic source, including ads, referrals and email. Many clients start there because faster follow-up wins more of the leads they already have.",
  },
  {
    q: "Is AI-written content safe for SEO?",
    a: "Google's guidance rewards helpful, accurate and original content, however it is produced. We use AI for research and first drafts, and a subject expert edits and fact-checks everything before it is published.",
  },
  {
    q: "Do you work in my time zone?",
    a: "Yes. We offer calls in US, UK and Australian business hours.",
  },
];

export function hasRealPrice(plan: PricingPlan) {
  return plan.price.every((part) => part.amount !== null);
}

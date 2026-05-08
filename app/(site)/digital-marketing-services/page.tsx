import type { Metadata } from "next";
import Link from "next/link";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import {
  ArrowRight,
  Megaphone,
  Target,
  Link2,
  ShoppingBag,
  Search,
  Users,
  Store,
  TrendingUp,
  Sparkles,
  PenTool,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Digital Marketing Services | BrandMarketing",
  description:
    "Full-stack digital marketing services that combine SEO, paid media, social, content and conversion expertise to drive predictable, compounding growth.",
};

type Category = {
  id: string;
  title: string;
  kicker: string;
  description: string;
  href: string;
  Icon: LucideIcon;
  accent: string;
  items: string[];
};

const categories: Category[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    kicker: "Strategy that scales.",
    description:
      "Full-funnel strategy and execution built around how your customers actually buy.",
    href: "/services",
    Icon: Sparkles,
    accent: "from-cyan-500 via-blue-600 to-indigo-600",
    items: [
      "Digital Marketing Strategy",
      "Digital Marketing Development",
      "Franchise Digital Marketing",
      "Enterprise Digital Marketing",
    ],
  },
  {
    id: "ppc",
    title: "Pay Per Click (PPC) Marketing",
    kicker: "Spend less, close faster.",
    description:
      "High-intent, ROI-obsessed paid media across Google, Meta, YouTube and programmatic.",
    href: "/automation-performance",
    Icon: Target,
    accent: "from-amber-500 via-orange-500 to-rose-500",
    items: [
      "Search Engine Marketing (SEM)",
      "Google Ads Management",
      "YouTube Ads Management",
      "Programmatic Advertising",
      "Lead Generation Services",
      "Franchise PPC",
      "Enterprise PPC",
    ],
  },
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    kicker: "Own page one.",
    description:
      "Technical, on-page and content SEO that compounds traffic and revenue month over month.",
    href: "/seo",
    Icon: Search,
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
    items: [
      "Local SEO",
      "Technical SEO",
      "AI SEO Services",
      "Franchise SEO",
      "Enterprise SEO",
      "SEO Audits",
      "Franchise SEO Audit",
      "Enterprise SEO Audit",
    ],
  },
  {
    id: "link-building",
    title: "Link Building",
    kicker: "Authority, on demand.",
    description:
      "White-hat digital PR outreach that earns the kind of links Google rewards.",
    href: "/seo",
    Icon: Link2,
    accent: "from-fuchsia-500 via-purple-500 to-indigo-500",
    items: ["Digital PR Outreach"],
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    kicker: "Build a brand that travels.",
    description:
      "Content and community management that turn passive scrollers into active buyers.",
    href: "/social-media",
    Icon: Users,
    accent: "from-pink-500 via-rose-500 to-orange-500",
    items: [
      "Social Media Management",
      "Social Media Brand Management",
      "Franchise Social Media",
      "Enterprise Social Media",
    ],
  },
  {
    id: "social-media-advertising",
    title: "Social Media Advertising",
    kicker: "Paid social, with a plan.",
    description:
      "Funnel-aware paid social campaigns that move audiences from awareness to conversion.",
    href: "/social-media",
    Icon: Megaphone,
    accent: "from-blue-500 via-indigo-500 to-purple-600",
    items: ["Facebook", "LinkedIn", "Twitter", "Instagram"],
  },
  {
    id: "ecommerce",
    title: "eCommerce Marketing",
    kicker: "Turn carts into customers.",
    description:
      "Conversion-engineered eCommerce growth across SEO, PPC, design and store optimization.",
    href: "/services",
    Icon: ShoppingBag,
    accent: "from-violet-500 via-fuchsia-500 to-pink-500",
    items: [
      "eCommerce SEO",
      "eCommerce PPC",
      "eCommerce Optimization",
      "Shopify SEO",
      "Shopify Web Design",
      "eCommerce Web Design",
    ],
  },
  {
    id: "marketplace",
    title: "Online Marketplace Marketing",
    kicker: "Win on Amazon and beyond.",
    description:
      "Listings, ads and storefronts engineered for marketplace algorithms and buyers.",
    href: "/services",
    Icon: Store,
    accent: "from-yellow-500 via-amber-500 to-orange-600",
    items: [
      "Amazon Marketing Services",
      "Amazon SEO",
      "Amazon Advertising/PPC",
      "Amazon Storefront & Branding",
      "Amazon Seller Consulting",
      "Amazon Posts Management",
      "Amazon DSP Advertising Management",
      "Target Plus Marketplace",
    ],
  },
  {
    id: "cro",
    title: "Conversion Rate Optimization (CRO)",
    kicker: "Same traffic, more revenue.",
    description:
      "Behavioral analytics and structured experimentation that lift conversion at every step.",
    href: "/services",
    Icon: TrendingUp,
    accent: "from-green-500 via-emerald-500 to-teal-500",
    items: ["CRO Audits", "User Experience Testing", "User Behavior Analytics"],
  },
  {
    id: "content",
    title: "Content Marketing",
    kicker: "Words that work.",
    description:
      "Strategy-led content, copy and email programs that build pipeline and trust together.",
    href: "/services",
    Icon: PenTool,
    accent: "from-sky-500 via-cyan-500 to-emerald-500",
    items: [
      "SEO Content Writing",
      "Copywriting Services",
      "Translation Services",
      "Email Marketing Services",
      "Outbound Marketing",
    ],
  },
];

const valueProps: { label: string; value: string }[] = [
  { label: "Average ROI", value: "300%+" },
  { label: "Leads Generated", value: "5M+" },
  { label: "Active Clients", value: "50+" },
  { label: "Industry Awards", value: "15+" },
];

export default function DigitalMarketingServicesPage() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(80,180,68,0.08),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(221,191,93,0.08),transparent_35%)]"
      />

      <div className="mx-auto w-full space-y-14">
        <Reveal>
          <header className="rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-xl shadow-emerald-100/30 backdrop-blur sm:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ddbf5d]/15 via-[#dde55d]/15 to-[#50b444]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#50b444]">
              <Sparkles className="h-3.5 w-3.5" />
              Digital Marketing Services
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Full-stack digital marketing built for{" "}
              <span className="bg-gradient-to-r from-[#ddbf5d] to-[#50b444] bg-clip-text text-transparent">
                compounding growth.
              </span>
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              From SEO to paid media, social to content, eCommerce to marketplaces — we run the
              entire growth engine for ambitious brands. Pick what you need, or combine them into a
              full-funnel system. Every service is built around outcomes you can measure.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ddbf5d] to-[#50b444] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#ddbf5d]/30 transition hover:brightness-105"
              >
                Book a Strategy Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#categories"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {valueProps.map((vp) => (
                <div
                  key={vp.label}
                  className="rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3"
                >
                  <p className="text-2xl font-bold text-[#50b444]">{vp.value}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    {vp.label}
                  </p>
                </div>
              ))}
            </div>
          </header>
        </Reveal>

        <Reveal>
          <div id="categories" className="scroll-mt-24 space-y-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#50b444]">
                  What we do
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  10 disciplines, one growth engine
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-slate-600">
                Every category below is delivered by specialists, integrated by strategists, and
                measured against the metrics that actually matter to your business.
              </p>
            </div>

            <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((c) => (
                <article
                  key={c.id}
                  id={c.id}
                  className="group flex h-full scroll-mt-24 flex-col rounded-2xl border border-slate-200/80 bg-white/90 p-6 text-sm shadow-sm shadow-sky-50 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md hover:shadow-emerald-100"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${c.accent} text-white shadow-md`}
                    >
                      <c.Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0 space-y-1">
                      <h3 className="text-base font-semibold tracking-tight text-slate-900">
                        {c.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-700">{c.kicker}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-700">{c.description}</p>

                  <ul className="mt-4 flex-1 space-y-2 text-xs text-slate-600">
                    {c.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#50b444]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-5">
                    <Link
                      href={c.href}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <section className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-emerald-50/30 to-amber-50/30 p-8 shadow-lg shadow-emerald-100/30 sm:p-12">
            <div className="grid gap-6 lg:grid-cols-[1.4fr,1fr] lg:items-center">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#50b444]">
                  Ready when you are
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Let&apos;s map the fastest path to growth for your business.
                </h2>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  Tell us your goals. We&apos;ll come back with a focused, measurable plan — no
                  fluff, no fixed packages, just the right mix of services for where you are
                  today.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href={HUBSPOT_MEETING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ddbf5d] to-[#50b444] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#ddbf5d]/30 transition hover:brightness-105"
                >
                  Schedule a Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Send us a brief
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </section>
  );
}

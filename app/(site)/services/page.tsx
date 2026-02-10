import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, Bot, Megaphone, Palette, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Digital Growth Suite",
  description:
    "Precision-engineered services to elevate your brand and multiply your revenue.",
};

type Service = {
  id: string;
  title: string;
  kicker: string;
  description: string;
  ctaLabel: string;
  icon: React.ReactNode;
  bullets: string[];
};

export default function ServicesPage() {
  const services: Service[] = [
    {
      id: "branding",
      title: "Branding & Identity",
      kicker: "The Soul of Your Business.",
      description:
        "We build iconic identities that resonate. From visual language to brand voice, we make sure you’re impossible to ignore.",
      ctaLabel: "View Branding Details",
      icon: <Palette className="h-6 w-6" />,
      bullets: [
        "Brand strategy & positioning",
        "Visual identity system (logo, color, typography)",
        "Messaging & brand voice guidelines",
        "Creative direction for campaigns and content",
      ],
    },
    {
      id: "social",
      title: "Social Media Management",
      kicker: "Be the Talk of the Timeline.",
      description:
        "We turn followers into fans. Data-driven content and community management that builds real authority.",
      ctaLabel: "View Social Strategy",
      icon: <Megaphone className="h-6 w-6" />,
      bullets: [
        "Content pillars & calendar planning",
        "Creative production direction",
        "Community management (comments, DMs, reviews)",
        "Performance reporting & optimization",
      ],
    },
    {
      id: "seo",
      title: "SEO Optimization",
      kicker: "Own the Search Results.",
      description:
        "Stop hiding on page two. We optimize your technical and content footprint to drive consistent, organic traffic.",
      ctaLabel: "View SEO Services",
      icon: <Search className="h-6 w-6" />,
      bullets: [
        "Technical SEO & Core Web Vitals",
        "Keyword + intent research and site architecture",
        "On-page optimization & content briefs",
        "Local SEO & high-intent visibility",
      ],
    },
    {
      id: "performance",
      title: "Performance Marketing",
      kicker: "Data-Driven ROI.",
      description:
        "Scale fast with precision targeting. We manage your spend like it’s our own to maximize your bottom line.",
      ctaLabel: "View Performance Plans",
      icon: <BarChart3 className="h-6 w-6" />,
      bullets: [
        "Offer + funnel alignment",
        "Audience strategy & testing plan",
        "Creative iteration and conversion optimization",
        "Tracking, attribution & weekly improvements",
      ],
    },
    {
      id: "ppc",
      title: "Paid Ads (PPC)",
      kicker: "Instant Impact.",
      description:
        "High-converting campaigns on Google, Meta, and beyond. We put your brand in front of buyers, not browsers.",
      ctaLabel: "View Ad Strategies",
      icon: <ArrowRight className="h-6 w-6" />,
      bullets: [
        "Google Ads & Meta Ads account builds",
        "Landing page recommendations for conversion",
        "Budget allocation and bid strategy",
        "Ongoing testing + performance reporting",
      ],
    },
    {
      id: "automation",
      title: "Marketing Automation",
      kicker: "Growth on Autopilot.",
      description:
        "Work smarter, not harder. We build intelligent systems that nurture leads and close sales while you sleep.",
      ctaLabel: "View Automation Tools",
      icon: <Bot className="h-6 w-6" />,
      bullets: [
        "CRM setup + pipeline automation",
        "Email/SMS/WhatsApp nurture sequences",
        "Lead capture, routing & speed-to-lead workflows",
        "Tracking, dashboards & lifecycle reporting",
      ],
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-14">
        <header className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
            Our Digital Growth Suite
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Precision-engineered services to elevate your brand and multiply your revenue.
          </h1>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Pick what you need, or combine them into a full-funnel system. Every service is built
            around one goal: outcomes you can measure.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {services.map((s) => (
            <article
              key={s.id}
              className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/90 p-6 text-sm shadow-sm shadow-sky-50 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-md hover:shadow-sky-100"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-md shadow-cyan-200">
                  {s.icon}
                </div>
                <div className="space-y-1">
                  <h2 className="text-base font-semibold tracking-tight text-slate-900">
                    {s.title}
                  </h2>
                  <p className="text-xs font-semibold text-slate-700">{s.kicker}</p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-700">{s.description}</p>

              <div className="mt-auto pt-6">
                <Link
                  href={`#${s.id}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800"
                >
                  {s.ctaLabel} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="space-y-6 pt-2">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Service details
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Click any service above to jump here. Want a custom plan? We’ll map the fastest path
              to growth for your goals.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((s) => (
              <section
                key={s.id}
                id={s.id}
                className="scroll-mt-28 rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm shadow-sky-50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                      {s.title}
                    </h3>
                    <p className="text-sm font-semibold text-slate-700">{s.kicker}</p>
                  </div>
                  <div className="hidden sm:flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-md shadow-cyan-200">
                    {s.icon}
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-700">{s.description}</p>

                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-cyan-200 transition hover:shadow-blue-200 hover:brightness-105"
                  >
                    Get a plan for this
                  </Link>
                  <Link
                    href="#top"
                    className="inline-flex items-center justify-center rounded-full border-2 border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-sky-300 hover:bg-sky-50"
                  >
                    Back to top
                  </Link>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      <a id="top" className="sr-only">
        Top
      </a>
    </section>
  );
}



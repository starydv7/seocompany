import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automation & Performance Marketing | BrandMarketing Digital",
  description:
    "Scale without the stress. High-velocity performance marketing with intelligent automation to turn ad spend into predictable revenue.",
};

export default function AutomationPerformancePage() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-16">
        {/* Hero */}
        <header className="space-y-5 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Automation &amp; Performance Marketing
          </h1>
          <p className="text-lg font-semibold text-slate-700 sm:text-xl">
            Scale Without the Stress
          </p>
          <p className="mx-auto max-w-3xl text-lg font-semibold text-slate-800 sm:text-xl">
            Stop Guessing. Start Scaling.
          </p>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 sm:text-base">
            We combine high-velocity Performance Marketing with intelligent Automation to turn your
            ad spend into a predictable revenue engine.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:shadow-teal-200 hover:brightness-105"
            >
              Get a Free Performance Audit
            </Link>
          </div>
        </header>

        {/* The Performance Marketing Paradox */}
        <section className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-emerald-50 sm:p-10">
          <h2 className="mb-4 text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            The Performance Marketing Paradox
          </h2>
          <p className="mb-4 text-base leading-relaxed text-slate-700">
            Most agencies focus on &quot;Clicks.&quot; We focus on Profit. In the modern digital
            landscape, manual bidding and generic targeting are no longer enough. To win, your brand
            needs to be faster, smarter, and more data-driven than the competition.
          </p>
          <p className="text-base leading-relaxed text-slate-700">
            At BrandMarketing Digital, we use the math of marketing to ensure your customer
            acquisition cost (CAC) stays low while your volume goes up.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="inline-flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50 px-6 py-4 shadow-sm">
              <p className="mb-1 text-sm font-semibold tracking-wide text-slate-500">
                ROI Formula
              </p>
              <p className="font-serif text-xl text-slate-800">
                ROI{" "}
                <span className="align-middle">
                  =
                  <span className="ml-2 inline-flex flex-col items-center">
                    <span className="border-b border-slate-400 px-2">
                      (Conversion Rate × Average Order Value) − CPA
                    </span>
                    <span className="mt-1 text-sm">Operational Overhead</span>
                  </span>
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Our Core Performance Services */}
        <section className="space-y-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Our Core Performance Services
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* 1. Paid Search & Social (PPC) */}
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-emerald-50">
              <h3 className="text-center text-lg font-semibold text-slate-900">
                1. Paid Search &amp; Social (PPC)
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                We dominate the platforms where your customers live. By utilizing AI-driven bidding
                and hyper-targeted audience segments, we ensure your ads appear in front of
                high-intent buyers.
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-xs font-semibold text-slate-900">
                  Platforms: Google Ads (Search/Display/Shopping), Meta Ads, LinkedIn, and TikTok.
                </p>
                <p className="text-xs font-semibold text-slate-900">
                  Focus: High-converting copy and thumb-stopping creative.
                </p>
              </div>
            </article>

            {/* 2. Marketing Automation & CRM Integration */}
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-emerald-50">
              <h3 className="text-center text-lg font-semibold text-slate-900">
                2. Marketing Automation &amp; CRM Integration
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Stop wasting time on repetitive tasks. We build &quot;set-and-forget&quot; systems
                that nurture leads while you sleep.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>
                  <span className="font-semibold text-slate-900">Lead Nurturing:</span> Automated
                  email and SMS sequences that trigger based on user behavior.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Sales Pipelines:</span> We sync
                  your marketing data directly with your CRM (HubSpot, Salesforce, etc.) for a
                  seamless sales handoff.
                </li>
              </ul>
            </article>

            {/* 3. Conversion Rate Optimization (CRO) */}
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-emerald-50">
              <h3 className="text-center text-lg font-semibold text-slate-900">
                3. Conversion Rate Optimization (CRO)
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Traffic is useless if your website is a leaky bucket. We use heatmaps and A/B
                testing to identify friction points on your landing pages and fix them.
              </p>
              <p className="mt-3 text-xs font-semibold text-slate-900">
                The Goal: More sales from the exact same amount of traffic.
              </p>
            </article>

            {/* 4. Precision Retargeting */}
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-emerald-50">
              <h3 className="text-center text-lg font-semibold text-slate-900">4. Precision Retargeting</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Most customers don&apos;t buy on the first visit. We build intelligent retargeting
                funnels that gently remind your prospects why they chose you, leading them back to
                the checkout.
              </p>
            </article>
          </div>
        </section>

        {/* Why Automation is Your "Unfair Advantage" */}
        <section className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-emerald-50 sm:p-10">
          <h2 className="mb-4 text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Why Automation is Your &quot;Unfair Advantage&quot;
          </h2>
          <p className="mb-6 text-base leading-relaxed text-slate-700">
            Automation isn&apos;t just about saving time; it&apos;s about eliminating human error
            and maximizing data.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200/60 bg-slate-50/50 p-5">
              <p className="text-sm font-semibold text-slate-900">24/7 Lead Response</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Never let a lead go cold. Automation ensures an instant touchpoint.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/60 bg-slate-50/50 p-5">
              <p className="text-sm font-semibold text-slate-900">Dynamic Personalization</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Show different ads to different people based on their specific interests.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/60 bg-slate-50/50 p-5">
              <p className="text-sm font-semibold text-slate-900">Predictive Analytics</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We use scripts to pause underperforming ads and boost winners automatically, saving
                you thousands in wasted spend.
              </p>
            </div>
          </div>
        </section>

        {/* The Results Speak for Themselves */}
        <section className="rounded-3xl border-2 border-dashed border-emerald-200 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-8 shadow-lg shadow-emerald-100/50 sm:p-12">
          <h2 className="mb-4 text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            The Results Speak for Themselves
          </h2>
          <blockquote className="rounded-xl border border-emerald-200/60 bg-white/80 p-6 text-sm italic leading-relaxed text-slate-700 shadow-sm">
            &quot;BrandMarketing Digital implemented an automated lead-nurture sequence that
            increased our closing rate by 40% without us spending an extra dollar on ads.&quot;
            <footer className="mt-3 text-xs font-semibold not-italic text-slate-600">
              — Operations Manager, [Industry Client]
            </footer>
          </blockquote>
        </section>

        {/* Frequently Asked Questions */}
        <section className="space-y-6 rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-emerald-50 sm:p-10">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Frequently Asked Questions (FAQ for SEO)
          </h2>
          <p className="text-sm text-slate-600">
            To rank for &quot;Performance Marketing Agency,&quot; we address common search queries:
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-200/60 bg-slate-50/30 p-5">
              <h3 className="text-sm font-semibold text-slate-900">
                What is the difference between Digital Marketing and Performance Marketing?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Digital marketing is an umbrella term. Performance marketing is a specific subset
                where the focus is entirely on measurable results (leads, sales, or clicks) and
                paying only when those actions occur.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/60 bg-slate-50/30 p-5">
              <h3 className="text-sm font-semibold text-slate-900">
                How does marketing automation improve ROI?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Automation reduces the &quot;cost per acquisition&quot; by keeping leads engaged
                without manual labor. It ensures no lead is forgotten and increases the lifetime
                value of a customer through automated upsells.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/60 bg-slate-50/30 p-5">
              <h3 className="text-sm font-semibold text-slate-900">
                Which platforms are best for my business?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                It depends on your audience. B2B brands typically see the best results on LinkedIn
                and Google Search, while B2C and E-commerce brands thrive on Meta, TikTok, and
                Google Shopping.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="rounded-3xl border-2 border-dashed border-emerald-200 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-8 text-center shadow-lg shadow-emerald-100/50 sm:p-12">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Ready to Automate Your Growth?
          </h2>
          <p className="mb-4 text-sm text-slate-700 sm:text-base">
            Don&apos;t let your competitors out-tech you. Let&apos;s build a performance engine that
            works as hard as you do.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:shadow-teal-200 hover:brightness-105"
          >
            Book My Strategy Session
          </Link>
          <p className="mt-4 text-xs font-semibold text-slate-600">No fluff. Just data.</p>
        </section>
      </div>
    </section>
  );
}


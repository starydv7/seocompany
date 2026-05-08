import type { Metadata } from "next";
import Link from "next/link";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import Reveal from "@/components/Reveal";
import {
  BarChart3,
  Bot,
  BrainCircuit,
  CircleDollarSign,
  Gauge,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Automation & Performance Marketing | BrandMarketing",
  description:
    "Scale without the stress. High-velocity performance marketing with intelligent automation to turn ad spend into predictable revenue.",
};

export default function AutomationPerformancePage() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.08),transparent_36%)]"
      />
      <div className="mx-auto w-full space-y-16">
        {/* Hero */}
        <Reveal>
          <header className="rounded-3xl border border-slate-200/80 bg-white/85 p-6 text-center shadow-xl shadow-emerald-100/40 backdrop-blur sm:p-10">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            <Rocket className="h-3.5 w-3.5" />
            Growth Engine
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Automation &amp; Performance Marketing
          </h1>
          <p className="mt-3 text-base font-semibold text-slate-700 sm:text-xl">
            Scale Without the Stress
          </p>
          <p className="mx-auto mt-1 w-full text-base font-semibold text-slate-800 sm:text-xl">
            Stop Guessing. Start Scaling.
          </p>
          <p className="mx-auto mt-4 w-full text-sm text-slate-600 sm:text-base">
            We combine high-velocity Performance Marketing with intelligent Automation to turn your
            ad spend into a predictable revenue engine.
          </p>
          <div className="mt-6">
            <Link
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#ddbf5d] to-[#50b444] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ddbf5d]/30 transition hover:brightness-105"
            >
              Get a Free Performance Audit
            </Link>
          </div>
          <div className="mt-6 grid gap-3 text-left sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Acquisition</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">Lower CAC, higher intent traffic</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Automation</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">Hands free lead nurturing</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">ROI</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">Measured and optimized weekly</p>
            </div>
          </div>
          </header>
        </Reveal>

        {/* The Performance Marketing Paradox */}
        <Reveal>
          <section className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-emerald-50 sm:p-10">
          <h2 className="mb-4 text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            The Performance Marketing Paradox
          </h2>
          <p className="mb-4 text-base leading-relaxed text-slate-700">
            Most agencies focus on &quot;Clicks.&quot; We focus on Profit. In the modern digital
            landscape, manual bidding and generic targeting are no longer enough. To win, your brand
            needs to be faster, smarter, and more data-driven than the competition.
          </p>
          <p className="text-base leading-relaxed text-slate-700">
            At BrandMarketing, we use the math of marketing to ensure your customer
            acquisition cost (CAC) stays low while your volume goes up.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="inline-flex flex-col items-center rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-emerald-50/40 px-6 py-4 shadow-sm">
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
                    <span className="mt-1 text-base">Operational Overhead</span>
                  </span>
                </span>
              </p>
            </div>
          </div>
          </section>
        </Reveal>

        {/* Our Core Performance Services */}
        <Reveal>
          <section className="space-y-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Our Core Performance Services
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* 1. Paid Search & Social (PPC) */}
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-emerald-50 transition hover:-translate-y-0.5 hover:shadow-emerald-100">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <SearchCheck className="h-5 w-5 text-emerald-600" />
                Paid Search &amp; Social (PPC)
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
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-emerald-50 transition hover:-translate-y-0.5 hover:shadow-emerald-100">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <Bot className="h-5 w-5 text-cyan-600" />
                Marketing Automation &amp; CRM Integration
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
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-emerald-50 transition hover:-translate-y-0.5 hover:shadow-emerald-100">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <Gauge className="h-5 w-5 text-violet-600" />
                Conversion Rate Optimization (CRO)
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
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-emerald-50 transition hover:-translate-y-0.5 hover:shadow-emerald-100">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <Target className="h-5 w-5 text-teal-600" />
                Precision Retargeting
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Most customers don&apos;t buy on the first visit. We build intelligent retargeting
                funnels that gently remind your prospects why they chose you, leading them back to
                the checkout.
              </p>
            </article>
          </div>
          </section>
        </Reveal>

        {/* Why Automation is Your "Unfair Advantage" */}
        <Reveal>
          <section className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-emerald-50 sm:p-10">
          <h2 className="mb-4 text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Why Automation is Your &quot;Unfair Advantage&quot;
          </h2>
          <p className="mb-6 text-base leading-relaxed text-slate-700">
            Automation isn&apos;t just about saving time; it&apos;s about eliminating human error
            and maximizing data.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200/60 bg-slate-50/50 p-5 transition hover:-translate-y-0.5 hover:shadow-sm">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-900"><Zap className="h-4 w-4 text-emerald-600" />24/7 Lead Response</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Never let a lead go cold. Automation ensures an instant touchpoint.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/60 bg-slate-50/50 p-5 transition hover:-translate-y-0.5 hover:shadow-sm">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-900"><BrainCircuit className="h-4 w-4 text-cyan-600" />Dynamic Personalization</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Show different ads to different people based on their specific interests.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/60 bg-slate-50/50 p-5 transition hover:-translate-y-0.5 hover:shadow-sm">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-900"><TrendingUp className="h-4 w-4 text-teal-600" />Predictive Analytics</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We use scripts to pause underperforming ads and boost winners automatically, saving
                you thousands in wasted spend.
              </p>
            </div>
          </div>
          </section>
        </Reveal>

        {/* The Results Speak for Themselves */}
        <Reveal>
          <section className="rounded-3xl border-2 border-dashed border-emerald-200 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-6 shadow-lg shadow-emerald-100/50 sm:p-12">
          <h2 className="mb-4 text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            The Results Speak for Themselves
          </h2>
          <blockquote className="rounded-xl border border-emerald-200/60 bg-white/80 p-6 text-sm italic leading-relaxed text-slate-700 shadow-sm">
            &quot;BrandMarketing implemented an automated lead-nurture sequence that
            increased our closing rate by 40% without us spending an extra dollar on ads.&quot;
            <footer className="mt-3 flex items-center gap-2 text-xs font-semibold not-italic text-slate-600">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" />
              Operations Manager
            </footer>
          </blockquote>
          </section>
        </Reveal>

        {/* Frequently Asked Questions */}
        <Reveal>
          <section className="space-y-6 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-emerald-50 sm:p-10">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-200/60 bg-slate-50/30 p-5 transition hover:border-emerald-200">
              <h3 className="text-sm font-semibold text-slate-900">
                What is the difference between Digital Marketing and Performance Marketing?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Digital marketing is an umbrella term. Performance marketing is a specific subset
                where the focus is entirely on measurable results (leads, sales, or clicks) and
                paying only when those actions occur.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/60 bg-slate-50/30 p-5 transition hover:border-emerald-200">
              <h3 className="text-sm font-semibold text-slate-900">
                How does marketing automation improve ROI?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Automation reduces the &quot;cost per acquisition&quot; by keeping leads engaged
                without manual labor. It ensures no lead is forgotten and increases the lifetime
                value of a customer through automated upsells.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/60 bg-slate-50/30 p-5 transition hover:border-emerald-200">
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
        </Reveal>

        {/* Final CTA */}
        <Reveal>
          <section className="rounded-3xl border-2 border-dashed border-emerald-200 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-6 text-center shadow-lg shadow-emerald-100/50 sm:p-12">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Ready to Automate Your Growth?
          </h2>
          <p className="mb-4 text-sm text-slate-700 sm:text-base">
            Don&apos;t let your competitors out-tech you. Let&apos;s build a performance engine that
            works as hard as you do.
          </p>
          <Link
            href={HUBSPOT_MEETING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#ddbf5d] to-[#50b444] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ddbf5d]/30 transition hover:brightness-105"
          >
            <CircleDollarSign className="mr-2 h-4 w-4" />
            Book My Strategy Session
          </Link>
          <p className="mt-4 text-xs font-semibold text-slate-600">No fluff. Just data.</p>
          </section>
        </Reveal>
      </div>
    </section>
  );
}


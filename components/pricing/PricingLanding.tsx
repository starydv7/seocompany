import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import LuxBackdrop from "@/components/lux/LuxBackdrop";
import LuxPage from "@/components/lux/LuxPage";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import { NO_PROMISE, PRICING_INTRO, PRICING_PLANS } from "@/lib/pricing/pricing-content";
import PricingCard from "./PricingCard";
import PricingRouteMap from "./PricingRouteMap";
import PricingFactors from "./PricingFactors";
import PricingFaq from "./PricingFaq";

const DELIVERABLES = [
  "Core Web Vitals",
  "Structured data",
  "XML sitemap",
  "Redirect map",
  "GA4",
  "Search Console",
  "HubSpot",
  "WhatsApp replies",
  "AI chat assistant",
  "Lead scoring",
  "Next.js",
  "Shopify",
  "Keyword mapping",
  "Link outreach",
];

export default function PricingLanding() {
  const [audit, ...plans] = PRICING_PLANS;

  return (
    <LuxPage>
      {/* Hero */}
      <section className="relative isolate overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        <LuxBackdrop />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.25fr,1fr] lg:gap-10">
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.04] py-1.5 pl-2 pr-4 ring-1 ring-inset ring-white/10 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ddbf5d] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ddbf5d]" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/70">
                {PRICING_INTRO.eyebrow}
              </span>
            </div>

            <h1 className="mt-7 text-[clamp(2.6rem,6.2vw,5.6rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-white">
              SEO,{" "}
              <span className="lux-gold-text font-serif italic">AI Automation</span>
              <br />
              and Web Development{" "}
              <span className="font-serif italic text-white/90">Pricing</span>
            </h1>

            <p className="mt-7 max-w-2xl text-[clamp(1rem,1.3vw,1.15rem)] leading-relaxed text-white/70">
              {PRICING_INTRO.body}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#plan-audit"
                className="lux-cta inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-[#06070d]"
              >
                Start with the audit
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
              <a
                href="#plans"
                className="lux-ghost inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white"
              >
                Compare plans
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3">
              <div className="flex items-center gap-1.5" aria-hidden>
                {PRICING_INTRO.invoiceCurrencies.map((code, i) => (
                  <span
                    key={code}
                    className={`rounded-md px-2 py-1 font-mono text-[11px] tracking-[0.14em] ${
                      i === 0 ? "bg-[#ddbf5d] text-[#06070d]" : "bg-white/[0.05] text-white/60 ring-1 ring-inset ring-white/10"
                    }`}
                  >
                    {code}
                  </span>
                ))}
              </div>
              <p className="text-sm text-white/55">{PRICING_INTRO.currency}</p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="lux-panel p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/50">Your route</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#ddbf5d]">Audit first</p>
              </div>
              <div className="mt-4">
                <PricingRouteMap />
              </div>
              <p className="font-serif mt-6 text-center text-lg italic text-white/70">
                Then choose the plan that fits your stage.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Deliverables ticker */}
      <div className="relative border-y border-white/[0.06] bg-white/[0.015] py-5">
        <div className="marquee-mask overflow-hidden">
          <div className="animate-marquee-ltr flex w-max items-center gap-10 [--marquee-duration:55s]">
            {[...DELIVERABLES, ...DELIVERABLES].map((item, i) => (
              <span key={i} className="flex items-center gap-10 whitespace-nowrap">
                <span className="font-serif text-xl italic text-white/55">{item}</span>
                <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-[#ddbf5d]/70" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Plans */}
      <section id="plans" className="relative scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(221,191,93,0.25), transparent 60%)" }}
        />
        <div className="relative mx-auto w-full max-w-7xl">
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#ddbf5d]">Four ways in</p>
                <h2 className="font-serif mt-3 text-[clamp(2.4rem,4.6vw,4rem)] leading-[1.02] text-white">
                  Choose the plan that <span className="italic text-white/70">fits your stage</span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-white/55">
                Every engagement starts with a fixed-scope audit, so you know what is holding back your rankings and
                your leads before you commit to ongoing work.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-7">
            <Reveal className="h-full">
              <PricingCard plan={audit} featured />
            </Reveal>
            {plans.map((plan, i) => (
              <Reveal key={plan.id} className="h-full" delay={0.08 * (i + 1)}>
                <PricingCard plan={plan} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scope + honesty */}
      <section className="relative px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[1.45fr,1fr] lg:gap-7">
          <Reveal className="h-full">
            <PricingFactors />
          </Reveal>

          <Reveal className="h-full" delay={0.1}>
            <div className="lux-panel relative flex h-full flex-col overflow-hidden p-6 sm:p-8 lg:p-10">
              <span
                aria-hidden
                className="font-serif pointer-events-none absolute -top-4 right-6 select-none text-[14rem] leading-none text-white/[0.05]"
              >
                &ldquo;
              </span>
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#ddbf5d]">Our word</p>
              <h3 className="font-serif mt-3 text-[clamp(2rem,3.4vw,3rem)] leading-[1.05] text-white">
                {NO_PROMISE.title}
              </h3>
              <p className="mt-5 text-[0.98rem] leading-relaxed text-white/70">{NO_PROMISE.body}</p>

              <div className="mt-auto pt-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/40">We commit to</p>
                <ul className="mt-4 space-y-2.5">
                  {NO_PROMISE.commitments.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between rounded-xl bg-white/[0.03] px-4 py-3 ring-1 ring-inset ring-white/[0.07]"
                    >
                      <span className="font-serif text-xl italic text-white">{item}</span>
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#50b444]/20 text-[#7ee8a0]">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="lux-hairline mb-16 sm:mb-20" aria-hidden />
          <Reveal>
            <PricingFaq />
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative px-4 pb-32 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[36px] px-6 py-16 text-center sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(221,191,93,0.28), transparent 60%), radial-gradient(ellipse at 50% 120%, rgba(80,180,68,0.22), transparent 55%), linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
              }}
            />
            <div aria-hidden className="absolute inset-0 -z-10 rounded-[36px] ring-1 ring-inset ring-white/10" />
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#ddbf5d]">Step one</p>
            <h2 className="font-serif mx-auto mt-4 max-w-3xl text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.02] text-white">
              Find what is costing you <span className="lux-gold-text italic">rankings and leads.</span>
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="lux-cta inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-[#06070d]"
              >
                Book my audit
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
              <Link
                href="/contact"
                className="lux-ghost inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white"
              >
                Talk to us first
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </LuxPage>
  );
}

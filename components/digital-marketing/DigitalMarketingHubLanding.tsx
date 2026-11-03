import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, Compass, Gauge, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import LuxBackdrop from "@/components/lux/LuxBackdrop";
import LuxCard from "@/components/lux/LuxCard";
import { LUX_ACCENTS } from "@/components/lux/accents";
import LuxPage, { LuxEyebrow, LuxPill } from "@/components/lux/LuxPage";
import {
  ELITE_SECTION,
  EliteFaq,
  EliteFinalCta,
  EliteHeading,
  EliteIndustries,
  EliteOfferings,
  EliteProcess,
  EliteStatement,
  EliteTicker,
} from "@/components/design-and-development/elite/EliteSections";
import DmEcosystemOrbit from "@/components/digital-marketing/elite/DmEcosystemOrbit";
import DmGrowthConsole from "@/components/digital-marketing/elite/DmGrowthConsole";
import {
  DM_HUB_BENEFITS,
  DM_HUB_ENTERPRISE,
  DM_HUB_FAQS,
  DM_HUB_FRANCHISE,
  DM_HUB_INDUSTRIES,
  DM_HUB_PROCESS,
  DM_HUB_SERVICES,
  DM_HUB_SYSTEMS,
  DM_HUB_TICKER,
} from "@/lib/digital-marketing/hub-elite-content";
import { DM_ENTERPRISE_ROUTE, DM_FRANCHISE_ROUTE } from "@/lib/digital-marketing/service-routes";
import { HUBSPOT_MEETING_URL } from "@/lib/site";

const HERO_HIGHLIGHTS = [
  { icon: Compass, title: "Strategy-led campaigns", caption: "Every spend has a purpose" },
  { icon: Gauge, title: "Live ROI dashboards", caption: "Full transparency" },
];

const PILLARS = ["Strategy", "Execution", "Optimisation"];

function Diamond() {
  return <span aria-hidden className="h-1.5 w-1.5 shrink-0 rotate-45 bg-lux-gold" />;
}

export default function DigitalMarketingHubLanding() {
  return (
    <LuxPage>
      {/* Hero */}
      <section className={`${ELITE_SECTION} isolate overflow-hidden pb-28 pt-14 sm:pb-36 sm:pt-20`}>
        <LuxBackdrop />
        <div className="relative grid w-full items-center gap-16 lg:grid-cols-[1.1fr,1fr] lg:gap-12">
          <Reveal>
            <LuxPill>Digital Marketing Agency</LuxPill>
            <h1 className="mt-8 text-[clamp(2.8rem,6.2vw,6rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-stone-900">
              Digital marketing that creates{" "}
              <span className="font-serif font-normal italic tracking-[-0.02em] lux-gold-text">predictable growth.</span>
            </h1>
            <p className="mt-6 flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-stone-600">
              {PILLARS.map((pillar, i) => (
                <span key={pillar} className="flex items-center gap-4">
                  {i > 0 ? <Diamond /> : null}
                  {pillar}
                </span>
              ))}
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
              We build data-driven marketing systems that attract qualified traffic, convert leads and scale revenue, with
              SEO, paid ads, content and automation working as one engine.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="lux-cta inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold"
              >
                Start Strategy Session
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
              <Link
                href="#services"
                className="lux-ghost inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-stone-900"
              >
                Explore services
              </Link>
            </div>
            <div className="mt-12 grid max-w-xl gap-3 sm:grid-cols-2">
              {HERO_HIGHLIGHTS.map(({ icon: Icon, title, caption }) => (
                <div key={caption} className="lux-plaque flex items-center gap-3.5 px-4 py-3.5">
                  <span className="lux-medallion" aria-hidden>
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-balance font-serif text-[1.2rem] leading-[1.15] text-stone-900">{title}</p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">{caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <DmGrowthConsole />
          </Reveal>
        </div>
      </section>

      <EliteTicker items={DM_HUB_TICKER} />

      {/* Services */}
      <section id="services" className={`${ELITE_SECTION} scroll-mt-28 py-24 sm:py-32`}>
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <EliteHeading eyebrow="What we do" title="Every Channel," accent="One Growth Team" />
            <p className="max-w-md text-sm leading-relaxed text-stone-500">
              Choose a single channel or hand us the full funnel. Strategy, creative, media and analytics are run by the
              same senior team.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DM_HUB_SERVICES.map((service, i) => {
            const tone = LUX_ACCENTS[service.accent];
            return (
              <Reveal key={service.href} delay={0.05 * (i % 3)} className="h-full">
                <Link href={service.href} className="group block h-full">
                  <LuxCard accent={tone} className="flex h-full flex-col overflow-hidden p-8">
                    <span
                      aria-hidden
                      className="lux-outline-numeral pointer-events-none absolute -right-1 -top-6 select-none font-serif text-[7rem] leading-none"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{ background: `linear-gradient(135deg, ${tone.from}, ${tone.to})`, boxShadow: `0 0 22px -4px ${tone.glow}` }}
                    >
                      <service.icon className="h-5 w-5 text-lux-ink" strokeWidth={2.25} />
                    </span>
                    <h3 className="mt-8 text-2xl font-semibold tracking-[-0.02em] text-stone-900">{service.title}</h3>
                    <p className="mt-1 font-serif text-lg italic" style={{ color: tone.ink }}>
                      {service.kicker}
                    </p>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-stone-600">{service.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.items.map((item) => (
                        <li key={item} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-stone-700 ring-1 ring-inset ring-stone-200">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-7 text-sm font-semibold text-stone-900 transition group-hover:text-lux-bronze">
                      Explore {service.title}
                      <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </LuxCard>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Ecosystem */}
      <section className={ELITE_SECTION}>
        <div className="overflow-hidden rounded-[40px] bg-gradient-to-br from-white via-[#fbf8f1] to-[#f3ecdd] px-6 py-14 ring-1 ring-inset ring-stone-200 sm:px-12 lg:px-16 lg:py-20">
          <div className="grid items-center gap-14 lg:grid-cols-[0.8fr,1.2fr]">
            <Reveal>
              <EliteHeading
                eyebrow="The ecosystem"
                title="Seven Channels,"
                accent="One Growth Engine"
                body="Most brands run channels in silos. We connect them, so SEO insight shapes ad copy, ads feed retargeting, email converts the leads and analytics tells every channel what to do next."
              />
              <ul className="mt-8 space-y-3">
                {["Shared data across every channel", "One strategy, one dashboard, one team", "Budget moves to what is working, weekly"].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-[0.95rem] font-medium text-stone-700">
                    <Diamond />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <DmEcosystemOrbit />
            </Reveal>
          </div>
        </div>
      </section>

      <EliteOfferings
        heading={{
          eyebrow: "Marketing development",
          title: "The Systems Behind",
          accent: "Your Marketing",
          body: "We don't just run campaigns. We build the tracking, automation, funnels and reporting that let marketing scale with confidence.",
        }}
        items={DM_HUB_SYSTEMS}
        accent="gold"
      />

      {/* Franchise + Enterprise */}
      <section className={`${ELITE_SECTION} pb-24 sm:pb-32`}>
        <Reveal>
          <EliteHeading eyebrow="Built for scale" title="From Many Locations" accent="to Many Brands" align="center" />
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <article className="lux-tile flex h-full flex-col rounded-[32px] bg-gradient-to-br from-white to-[#eef7e9] p-8 ring-1 ring-inset ring-stone-200 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="lux-medallion" aria-hidden>
                  <MapPin className="h-4 w-4" strokeWidth={2} />
                </span>
                <LuxEyebrow>Franchise marketing</LuxEyebrow>
              </div>
              <h3 className="mt-5 font-serif text-[clamp(1.9rem,3vw,2.6rem)] leading-[1.05] text-stone-900">{DM_HUB_FRANCHISE.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-stone-600">{DM_HUB_FRANCHISE.body}</p>
              <ul className="mt-6 space-y-2.5">
                {DM_HUB_FRANCHISE.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-stone-700">
                    <Diamond />
                    {point}
                  </li>
                ))}
              </ul>
              <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
                {DM_HUB_FRANCHISE.locations.map((loc, i) => (
                  <li key={loc} className="flex items-center justify-between gap-3 rounded-2xl bg-white/90 px-4 py-3 ring-1 ring-inset ring-stone-200">
                    <span className="flex items-center gap-2.5 text-sm font-medium text-stone-800">
                      <span className="relative flex h-2.5 w-2.5">
                        <span
                          className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lux-emerald opacity-60"
                          style={{ animationDelay: `${i * 0.4}s` }}
                        />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lux-emerald" />
                      </span>
                      {loc}
                    </span>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">Active</span>
                  </li>
                ))}
              </ul>
              <Link
                href={DM_FRANCHISE_ROUTE}
                className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-semibold text-stone-900 transition hover:text-lux-bronze"
              >
                Explore franchise marketing
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <article className="lux-tile flex h-full flex-col rounded-[32px] bg-gradient-to-br from-white to-[#e8f3fd] p-8 ring-1 ring-inset ring-stone-200 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="lux-medallion" aria-hidden>
                  <Building2 className="h-4 w-4" strokeWidth={2} />
                </span>
                <LuxEyebrow>Enterprise marketing</LuxEyebrow>
              </div>
              <h3 className="mt-5 font-serif text-[clamp(1.9rem,3vw,2.6rem)] leading-[1.05] text-stone-900">{DM_HUB_ENTERPRISE.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-stone-600">{DM_HUB_ENTERPRISE.body}</p>
              <ul className="mt-6 space-y-2.5">
                {DM_HUB_ENTERPRISE.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-stone-700">
                    <Diamond />
                    {point}
                  </li>
                ))}
              </ul>
              <ol className="relative mt-8 grid gap-2.5 sm:grid-cols-2">
                {DM_HUB_ENTERPRISE.workflow.map((step, i) => (
                  <li key={step.title} className="flex items-start gap-3 rounded-2xl bg-white/90 px-4 py-3 ring-1 ring-inset ring-stone-200">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-lux-champagne to-lux-gold font-serif text-sm text-lux-ink">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-stone-900">{step.title}</span>
                      <span className="block text-xs leading-relaxed text-stone-500">{step.body}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <Link
                href={DM_ENTERPRISE_ROUTE}
                className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-semibold text-stone-900 transition hover:text-lux-bronze"
              >
                Explore enterprise marketing
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      <EliteProcess
        heading={{ eyebrow: "Our process", title: "Six Steps to", accent: "Predictable Growth" }}
        steps={DM_HUB_PROCESS}
      />

      <EliteStatement
        heading={{ eyebrow: "Why BrandMarketing", title: "Marketing You Can", accent: "Measure" }}
        quote="If it can't be measured, it doesn't get budget. If it works, it gets more."
        benefits={DM_HUB_BENEFITS}
      />

      <EliteIndustries
        heading={{ eyebrow: "Industries", title: "Growth for", accent: "Every Sector" }}
        items={DM_HUB_INDUSTRIES}
      />

      <EliteFaq faqs={DM_HUB_FAQS} body="Straight answers to what businesses ask before hiring a digital marketing agency." />

      <EliteFinalCta
        eyebrow="Start growing"
        title="Build a Marketing System"
        accent="That Scales."
        body="From strategy to systems to execution, we help you attract more customers, convert more leads and grow revenue predictably."
      />
    </LuxPage>
  );
}

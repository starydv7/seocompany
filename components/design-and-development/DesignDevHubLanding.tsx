import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code2, Layers, Rocket, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import LuxBackdrop from "@/components/lux/LuxBackdrop";
import LuxCard from "@/components/lux/LuxCard";
import { LUX_ACCENTS, withAlpha } from "@/components/lux/accents";
import LuxPage, { LuxPill } from "@/components/lux/LuxPage";
import {
  ELITE_SECTION,
  EliteFaq,
  EliteFinalCta,
  EliteHeading,
  EliteHireBand,
  EliteIndustries,
  EliteProcess,
  EliteStatement,
  EliteTicker,
} from "@/components/design-and-development/elite/EliteSections";
import { DD_SERVICES } from "@/lib/design-and-development/dd-services";
import { HUB_FAQS, PROCESS_ELITE } from "@/lib/design-and-development/elite-content";
import { HUBSPOT_MEETING_URL } from "@/lib/site";

const STATS = [
  { value: "100+", label: "Products shipped" },
  { value: "50+", label: "Active clients" },
  { value: "8+", label: "Years experience" },
  { value: "12+", label: "Tech stacks" },
];

const TICKER = [
  "Custom software",
  "Next.js websites",
  "iOS & Android apps",
  "SaaS platforms",
  "UI/UX design",
  "APIs & integrations",
  "Dashboards",
  "Cloud & DevOps",
  "MVPs for startups",
  "Business automation",
];

const BENEFITS = [
  { icon: Layers, title: "One senior team", body: "Designers, frontend, backend and mobile engineers under one roof. No agency handoffs." },
  { icon: Rocket, title: "Shipped every sprint", body: "Working software in your hands every two weeks, with demos you can click." },
  { icon: ShieldCheck, title: "Built to last", body: "Typed code, automated tests, security reviews and documentation as standard." },
  { icon: Code2, title: "SEO built in", body: "As an SEO agency too, every build is fast, structured and ready to rank." },
];

const INDUSTRIES = [
  "Startups",
  "SaaS",
  "Healthcare",
  "Fintech",
  "eCommerce",
  "Education",
  "Logistics",
  "Real Estate",
];

export default function DesignDevHubLanding() {
  return (
    <LuxPage>
      {/* Hero */}
      <section className={`${ELITE_SECTION} isolate overflow-hidden pb-20 pt-14 sm:pb-28 sm:pt-20`}>
        <LuxBackdrop />
        <div className="relative grid w-full items-center gap-14 lg:grid-cols-[1.2fr,1fr] lg:gap-12">
          <Reveal>
            <LuxPill>Design &amp; Development</LuxPill>
            <h1 className="mt-8 text-[clamp(2.8rem,6.4vw,6rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-stone-900">
              Software, web &amp; apps,{" "}
              <span className="font-serif font-normal italic tracking-[-0.02em] lux-gold-text">engineered to scale.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-stone-600">
              A senior design and development company building custom software, high-performance websites, mobile apps
              and SaaS products. Modern stacks, predictable delivery, SEO built in.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="lux-cta inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold"
              >
                Book a Strategy Call
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
              <Link
                href="#services"
                className="lux-ghost inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-stone-900"
              >
                Explore services
              </Link>
            </div>
            <dl className="mt-12 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="lux-plaque px-4 py-3.5">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-serif text-[1.9rem] leading-none text-stone-900">{stat.value}</span>
                    <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="lux-orbit rounded-[32px] bg-white/80 p-6 shadow-[0_40px_80px_-40px_rgba(80,60,20,0.35)] ring-1 ring-inset ring-stone-200 backdrop-blur sm:p-8">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-lux-bronze">Capabilities</p>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-stone-600">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lux-emerald opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-lux-emerald" />
                  </span>
                  Taking new projects
                </span>
              </div>
              <ul className="mt-6 grid grid-cols-3 gap-3">
                {DD_SERVICES.map((service) => {
                  const tone = LUX_ACCENTS[service.accent];
                  return (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className="lux-tile group flex h-full flex-col items-center gap-3 rounded-2xl bg-[#fbf8f1] px-2 py-4 text-center ring-1 ring-inset ring-stone-200"
                      >
                        <span
                          className="flex h-11 w-11 items-center justify-center rounded-xl ring-1 ring-inset ring-stone-200 transition group-hover:scale-110"
                          style={{ background: `linear-gradient(135deg, ${withAlpha(tone.glow, 0.3)}, #fff)`, color: tone.ink }}
                        >
                          <service.icon className="h-5 w-5" />
                        </span>
                        <span className="text-[11px] font-semibold leading-tight text-stone-800 sm:text-xs">{service.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <EliteTicker items={TICKER} />

      {/* Services */}
      <section id="services" className={`${ELITE_SECTION} scroll-mt-28 py-24 sm:py-32`}>
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <EliteHeading eyebrow="What we build" title="Nine Capabilities," accent="One Delivery Team" />
            <p className="max-w-md text-sm leading-relaxed text-stone-500">
              Pick a single service or bring us the whole product. Every capability is delivered by the same senior team.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DD_SERVICES.map((service, i) => {
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
                      className="flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-inset ring-stone-200"
                      style={{ background: `linear-gradient(135deg, ${withAlpha(tone.glow, 0.28)}, transparent)`, color: tone.ink }}
                    >
                      <service.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-8 text-2xl font-semibold tracking-[-0.02em] text-stone-900">{service.title}</h3>
                    <p className="mt-1 font-serif text-lg italic text-lux-bronze">{service.kicker}</p>
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

      <EliteStatement
        heading={{ eyebrow: "Why BrandMarketing", title: "Design, Engineering & Growth,", accent: "Under One Roof" }}
        quote="Most agencies build it and leave. We build it, launch it and help it rank."
        benefits={BENEFITS}
      />

      <EliteProcess heading={PROCESS_ELITE.process} steps={PROCESS_ELITE.process.steps} />

      <EliteIndustries
        heading={{ eyebrow: "Industries", title: "Products Built for", accent: "Every Sector" }}
        items={INDUSTRIES}
      />

      <EliteHireBand
        roleId="full-stack-developers"
        title="Prefer to hire developers directly?"
        body="Add dedicated web, app, React, Node.js or full-stack developers and UI/UX designers to your team, monthly or hourly."
      />

      <EliteFaq faqs={HUB_FAQS} body="Everything clients ask before starting a design or development project with us." />

      <EliteFinalCta
        eyebrow="Start your project"
        title="Have a Product in Mind?"
        accent="Let's Build It."
        body="Tell us what you're building. We'll come back with a focused scope, timeline and estimate, free."
      />
    </LuxPage>
  );
}

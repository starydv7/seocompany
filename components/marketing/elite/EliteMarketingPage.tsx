import Link from "next/link";
import { ArrowRight, ArrowUpRight, Layers, Users } from "lucide-react";
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
  EliteHireBand,
  EliteIndustries,
  EliteOfferings,
  EliteProcess,
  EliteRelated,
  EliteStack,
  EliteStatement,
  EliteTicker,
  type EliteRelatedItem,
} from "@/components/design-and-development/elite/EliteSections";
import MarketingConsole from "@/components/marketing/elite/MarketingConsole";
import MarketingOrbit from "@/components/marketing/elite/MarketingOrbit";
import { DD_SERVICES } from "@/lib/design-and-development/dd-services";
import { MARKETING_SERVICES } from "@/lib/marketing/marketing-services";
import type { MarketingCard, MarketingPage, MarketingPanel } from "@/lib/marketing/types";
import { HUBSPOT_MEETING_URL } from "@/lib/site";

const RELATED_CATALOG: EliteRelatedItem[] = [
  ...MARKETING_SERVICES,
  ...DD_SERVICES,
  {
    href: "/design-and-development",
    title: "Design & Development",
    description: "Every design and engineering service, delivered by one senior team.",
    icon: Layers,
    accent: "gold",
  },
  {
    href: "/hire-developers",
    title: "Hire Developers",
    description: "Dedicated developers and designers who join your team and tools.",
    icon: Users,
    accent: "emerald",
  },
];

function Diamond() {
  return <span aria-hidden className="h-1.5 w-1.5 shrink-0 rotate-45 bg-lux-gold" />;
}

function MarketingHero({ hero, console: consoleData }: Pick<MarketingPage, "hero" | "console">) {
  return (
    <section className={`${ELITE_SECTION} isolate overflow-hidden pb-28 pt-14 sm:pb-36 sm:pt-20`}>
      <LuxBackdrop />
      <div className="relative grid w-full items-center gap-16 lg:grid-cols-[1.1fr,1fr] lg:gap-12">
        <Reveal>
          <LuxPill>{hero.pill}</LuxPill>
          <h1 className="mt-8 text-[clamp(2.6rem,5.8vw,5.6rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-stone-900">
            {hero.title}{" "}
            <span className="font-serif font-normal italic tracking-[-0.02em] lux-gold-text">{hero.accent}</span>
          </h1>
          <p className="mt-6 flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-stone-600">
            {hero.pillars.map((pillar, i) => (
              <span key={pillar} className="flex items-center gap-4">
                {i > 0 ? <Diamond /> : null}
                {pillar}
              </span>
            ))}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">{hero.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="lux-cta inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold"
            >
              {hero.cta}
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
            <Link
              href="#services"
              className="lux-ghost inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-stone-900"
            >
              {hero.secondaryCta ?? "Explore services"}
            </Link>
          </div>
          <div className="mt-12 grid max-w-xl gap-3 sm:grid-cols-2">
            {hero.highlights.map(({ icon: Icon, title, caption }) => (
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
          <MarketingConsole data={consoleData} />
        </Reveal>
      </div>
    </section>
  );
}

function ServiceCardBody({ card, index }: { card: MarketingCard; index: number }) {
  const tone = LUX_ACCENTS[card.accent];
  return (
    <LuxCard accent={tone} className="flex h-full flex-col overflow-hidden p-8">
      <span
        aria-hidden
        className="lux-outline-numeral pointer-events-none absolute -right-1 -top-6 select-none font-serif text-[7rem] leading-none"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <span
        className="flex h-12 w-12 items-center justify-center rounded-2xl"
        style={{ background: `linear-gradient(135deg, ${tone.from}, ${tone.to})`, boxShadow: `0 0 22px -4px ${tone.glow}` }}
      >
        <card.icon className="h-5 w-5 text-lux-ink" strokeWidth={2.25} />
      </span>
      <h3 className="mt-8 text-2xl font-semibold tracking-[-0.02em] text-stone-900">{card.title}</h3>
      <p className="mt-1 font-serif text-lg italic" style={{ color: tone.ink }}>
        {card.kicker}
      </p>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-stone-600">{card.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {card.items.map((item) => (
          <li key={item} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-stone-700 ring-1 ring-inset ring-stone-200">
            {item}
          </li>
        ))}
      </ul>
      {card.href ? (
        <span className="mt-auto inline-flex items-center gap-1.5 pt-7 text-sm font-semibold text-stone-900 transition group-hover:text-lux-bronze">
          Explore {card.title}
          <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      ) : null}
    </LuxCard>
  );
}

function MarketingServices({ services }: Pick<MarketingPage, "services">) {
  return (
    <section id="services" className={`${ELITE_SECTION} scroll-mt-28 py-24 sm:py-32`}>
      <Reveal>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <EliteHeading eyebrow={services.eyebrow} title={services.title} accent={services.accent} />
          <p className="max-w-md text-sm leading-relaxed text-stone-500">{services.aside}</p>
        </div>
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.items.map((card, i) => (
          <Reveal key={card.title} delay={0.05 * (i % 3)} className="h-full">
            {card.href ? (
              <Link href={card.href} className="group block h-full">
                <ServiceCardBody card={card} index={i} />
              </Link>
            ) : (
              <div id={card.anchor} className="group h-full scroll-mt-28">
                <ServiceCardBody card={card} index={i} />
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function MarketingOrbitPanel({ orbit }: Pick<MarketingPage, "orbit">) {
  return (
    <section className={ELITE_SECTION}>
      <div className="overflow-hidden rounded-[40px] bg-gradient-to-br from-white via-[#fbf8f1] to-[#f3ecdd] px-6 py-14 ring-1 ring-inset ring-stone-200 sm:px-12 lg:px-16 lg:py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr,1.2fr]">
          <Reveal>
            <EliteHeading eyebrow={orbit.eyebrow} title={orbit.title} accent={orbit.accent} body={orbit.body} />
            <ul className="mt-8 space-y-3">
              {orbit.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-[0.95rem] font-medium text-stone-700">
                  <Diamond />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <MarketingOrbit center={orbit.center} nodes={orbit.nodes} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const PANEL_TINTS: Record<MarketingPanel["tint"], string> = {
  emerald: "#eef7e9",
  sky: "#e8f3fd",
  gold: "#fbf3dc",
  rose: "#fdeef4",
  violet: "#f0ecff",
};

function Panel({ panel }: { panel: MarketingPanel }) {
  return (
    <article
      className="lux-tile flex h-full flex-col rounded-[32px] p-8 ring-1 ring-inset ring-stone-200 sm:p-10"
      style={{ background: `linear-gradient(135deg, #ffffff, ${PANEL_TINTS[panel.tint]})` }}
    >
      <div className="flex items-center gap-3">
        <span className="lux-medallion" aria-hidden>
          <panel.icon className="h-4 w-4" strokeWidth={2} />
        </span>
        <LuxEyebrow>{panel.eyebrow}</LuxEyebrow>
      </div>
      <h3 className="mt-5 font-serif text-[clamp(1.9rem,3vw,2.6rem)] leading-[1.05] text-stone-900">{panel.title}</h3>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-stone-600">{panel.body}</p>
      <ul className="mt-6 space-y-2.5">
        {panel.points.map((point) => (
          <li key={point} className="flex items-center gap-3 text-sm text-stone-700">
            <Diamond />
            {point}
          </li>
        ))}
      </ul>
      <ol className="mt-8 grid gap-2.5 sm:grid-cols-2">
        {panel.tiles.map((tile, i) => (
          <li key={tile.title} className="flex items-start gap-3 rounded-2xl bg-white/90 px-4 py-3 ring-1 ring-inset ring-stone-200">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-lux-champagne to-lux-gold font-serif text-sm text-lux-ink">
              {i + 1}
            </span>
            <span>
              <span className="block text-sm font-semibold text-stone-900">{tile.title}</span>
              {tile.body ? <span className="block text-xs leading-relaxed text-stone-500">{tile.body}</span> : null}
            </span>
          </li>
        ))}
      </ol>
      {panel.href ? (
        <Link
          href={panel.href}
          className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-semibold text-stone-900 transition hover:text-lux-bronze"
        >
          {panel.linkLabel ?? "Learn more"}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      ) : null}
    </article>
  );
}

function MarketingSplit({ split }: { split: NonNullable<MarketingPage["split"]> }) {
  return (
    <section className={`${ELITE_SECTION} pb-24 sm:pb-32`}>
      <Reveal>
        <EliteHeading eyebrow={split.eyebrow} title={split.title} accent={split.accent} body={split.body} align="center" />
      </Reveal>
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {split.panels.map((panel, i) => (
          <Reveal key={panel.title} delay={0.08 * i} className="h-full">
            <Panel panel={panel} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/** Full premium marketing page: hero dashboard, services, orbit, systems, panels, process, proof, FAQ and CTA. */
export default function EliteMarketingPage({ page }: { page: MarketingPage }) {
  return (
    <LuxPage>
      <MarketingHero hero={page.hero} console={page.console} />
      <EliteTicker items={page.ticker} />
      <MarketingServices services={page.services} />
      <MarketingOrbitPanel orbit={page.orbit} />
      <EliteOfferings heading={page.systems} items={page.systems.items} accent={page.accent} />
      {page.split ? <MarketingSplit split={page.split} /> : null}
      <EliteProcess heading={page.process} steps={page.process.steps} />
      {page.stack ? <EliteStack heading={page.stack} groups={page.stack.groups} /> : null}
      <EliteStatement heading={page.statement} quote={page.statement.quote} benefits={page.statement.benefits} />
      <EliteIndustries heading={page.industries} items={page.industries.items} />
      {page.hire ? <EliteHireBand {...page.hire} /> : null}
      <EliteFaq faqs={page.faqs} body={`Straight answers to what clients ask most about ${page.name.toLowerCase()}.`} />
      {page.related.length ? (
        <EliteRelated
          routes={page.related}
          catalog={RELATED_CATALOG}
          heading={{ eyebrow: "Keep exploring", title: "Related", accent: "Services" }}
        />
      ) : null}
      <EliteFinalCta {...page.cta} />
    </LuxPage>
  );
}
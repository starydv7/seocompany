import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  ChevronDown,
  Clapperboard,
  Cloud,
  Car,
  Coffee,
  Cpu,
  Dumbbell,
  Gem,
  MapPin,
  Scale,
  Shirt,
  Smartphone,
  Sofa,
  UtensilsCrossed,
  Wrench,
  Factory,
  GraduationCap,
  HeartPulse,
  Hotel,
  Landmark,
  Plane,
  Rocket,
  ShoppingBag,
  Store,
  Truck,
  Users,
  Briefcase,
  Building,
  Activity,
  BarChart3,
  Blocks,
  ClipboardList,
  Code2,
  Database,
  FileSearch,
  Globe,
  Layers,
  MonitorSmartphone,
  Palette,
  Plug,
  Server,
  ShoppingCart,
  Sparkles,
  TestTube2,
  Wand2,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import LuxCard from "@/components/lux/LuxCard";
import { LUX_ACCENTS, withAlpha, type LuxAccentName } from "@/components/lux/accents";
import { LuxEyebrow } from "@/components/lux/LuxPage";
import { ddService } from "@/lib/design-and-development/dd-services";
import type {
  EliteBenefit,
  EliteFaq as EliteFaqItem,
  EliteHeading as EliteHeadingData,
  EliteOffering,
  EliteService,
  EliteStep,
} from "@/lib/design-and-development/elite-content";
import { HIRE_DEVELOPERS_ROUTE } from "@/lib/hire-developers/hire-developers-content";
import { HUBSPOT_MEETING_URL } from "@/lib/site";

export const ELITE_SECTION = "relative px-[var(--lux-gutter)]";

const PROCESS_COLS: Record<number, string> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
};

const INDUSTRY_ICONS: Record<string, LucideIcon> = {
  Healthcare: HeartPulse,
  Fintech: Landmark,
  Finance: Landmark,
  eCommerce: ShoppingBag,
  Retail: Store,
  Education: GraduationCap,
  Logistics: Truck,
  Travel: Plane,
  "Real Estate": Building2,
  Startups: Rocket,
  SaaS: Cloud,
  Media: Clapperboard,
  Manufacturing: Factory,
  Hospitality: Hotel,
  Marketplaces: Store,
  Enterprise: Building,
  "Professional Services": Briefcase,
  Technology: Cpu,
  Franchises: MapPin,
  Restaurants: UtensilsCrossed,
  Fitness: Dumbbell,
  "Home Services": Wrench,
  Automotive: Car,
  Beauty: Gem,
  Legal: Scale,
  Fashion: Shirt,
  Electronics: Smartphone,
  "Home & Living": Sofa,
  "Food & Beverage": Coffee,
};

export function EliteHeading({
  eyebrow,
  title,
  accent,
  body,
  align = "left",
  as: Tag = "h2",
}: EliteHeadingData & { align?: "left" | "center"; as?: "h1" | "h2" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <LuxEyebrow>{eyebrow}</LuxEyebrow>
      <Tag className="mt-4 font-serif text-[clamp(2.3rem,4.8vw,4.25rem)] leading-[1.02] text-stone-900">
        {title} <span className="lux-gold-text italic">{accent}</span>
      </Tag>
      {body ? <p className="mt-5 text-base leading-relaxed text-stone-600 sm:text-lg">{body}</p> : null}
    </div>
  );
}

export function EliteTicker({ items }: { items: string[] }) {
  return (
    <div className="relative border-y border-stone-200/70 bg-white/60 py-6" aria-label="Capabilities">
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee-ltr flex w-max items-center gap-12 [--marquee-duration:55s]">
          {[...items, ...items].map((item, i) => (
            <span key={i} aria-hidden={i >= items.length} className="flex items-center gap-12 whitespace-nowrap">
              <span className="font-serif text-2xl italic text-stone-500 sm:text-3xl">{item}</span>
              <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-lux-gold/70" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function EliteOfferings({
  heading,
  items,
  accent,
}: {
  heading: EliteHeadingData;
  items: EliteOffering[];
  accent: LuxAccentName;
}) {
  const tone = LUX_ACCENTS[accent];
  return (
    <section className={`${ELITE_SECTION} py-24 sm:py-32`}>
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-10 h-[34rem] w-[34rem] rounded-full opacity-40 blur-[120px]"
        style={{ background: `radial-gradient(circle, ${withAlpha(tone.glow, 0.5)}, transparent 60%)` }}
      />
      <Reveal>
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <EliteHeading {...heading} body={undefined} />
          {heading.body ? <p className="max-w-md text-sm leading-relaxed text-stone-500">{heading.body}</p> : null}
        </div>
      </Reveal>
      <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={0.06 * (i % 3)} className="h-full">
            <LuxCard as="article" accent={tone} className="flex h-full flex-col overflow-hidden p-8">
              <span
                aria-hidden
                className="lux-outline-numeral pointer-events-none absolute -right-1 -top-6 select-none font-serif text-[7rem] leading-none"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="lux-check flex h-12 w-12 items-center justify-center rounded-2xl text-lux-ink">
                <item.icon className="h-5 w-5" strokeWidth={2.25} />
              </span>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.02em] text-stone-900">{item.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-stone-600">{item.body}</p>
              <ul className="mt-auto space-y-2 pt-6">
                {item.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-stone-700">
                    <span aria-hidden className="h-1.5 w-1.5 shrink-0 rotate-45 bg-lux-gold" />
                    {point}
                  </li>
                ))}
              </ul>
            </LuxCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function EliteStatement({
  heading,
  quote,
  benefits,
}: {
  heading: EliteHeadingData;
  quote: string;
  benefits: EliteBenefit[];
}) {
  return (
    <section className={`${ELITE_SECTION} pb-24 sm:pb-32`}>
      <div className="lux-orbit overflow-hidden rounded-[36px] bg-gradient-to-br from-white via-[#fbf8f1] to-[#f3ecdd] ring-1 ring-inset ring-stone-200">
        <div aria-hidden className="lux-horizon opacity-40" />
        <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[1fr,1.05fr] lg:gap-16 lg:p-16">
          <Reveal>
            <EliteHeading {...heading} />
            <p className="mt-8 border-l-2 border-lux-gold/70 pl-6 font-serif text-2xl italic leading-snug text-stone-700 sm:text-[1.7rem]">
              &ldquo;{quote}&rdquo;
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:self-center">
            {benefits.map((benefit, i) => (
              <Reveal key={benefit.title} delay={0.08 * i} className="h-full">
                <div className="lux-tile flex h-full flex-col rounded-3xl bg-white/80 p-6 ring-1 ring-inset ring-stone-200">
                  <span className="lux-medallion" aria-hidden>
                    <benefit.icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.01em] text-stone-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{benefit.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function EliteProcess({ heading, steps }: { heading: EliteHeadingData; steps: EliteStep[] }) {
  const inset = `${50 / steps.length}%`;
  return (
    <section className={`${ELITE_SECTION} pb-24 sm:pb-32`}>
      <Reveal>
        <EliteHeading {...heading} align="center" />
      </Reveal>
      <div className="relative mt-16">
        <div aria-hidden className="lux-flow-track top-7 hidden lg:block" style={{ left: inset, right: inset }} />
        <ol className={`grid gap-10 sm:grid-cols-2 lg:gap-6 ${PROCESS_COLS[steps.length] ?? "lg:grid-cols-4"}`}>
          {steps.map((step, i) => (
            <li key={step.title} style={{ ["--node-delay" as string]: `${i * 0.45}s` }}>
              <Reveal delay={0.1 * i}>
                <div className="relative flex flex-col items-center text-center">
                  <span className="lux-node relative flex h-14 w-14 items-center justify-center rounded-full bg-[#f1ead9] ring-1 ring-lux-gold/60 shadow-[0_0_40px_-6px_rgba(221,191,93,0.7)]">
                    <span className="absolute inset-1 rounded-full bg-gradient-to-br from-lux-champagne/30 to-transparent" />
                    <span className="relative font-serif text-xl text-lux-bronze">{i + 1}</span>
                  </span>
                  <span className="mt-6 font-mono text-[10px] tracking-[0.32em] text-stone-400">
                    STEP {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-serif text-[1.75rem] leading-tight text-stone-900">{step.title}</h3>
                  <p className="mt-3 max-w-[30ch] text-sm leading-relaxed text-stone-500">{step.body}</p>
                  <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-stone-700 ring-1 ring-inset ring-lux-gold/40">
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-lux-emerald" />
                    {step.deliverable}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** First matching keyword in a stack group title picks its icon; order matters ("Cloud & Design" is cloud). */
const STACK_ICONS: [RegExp, LucideIcon][] = [
  [/front|interface/i, MonitorSmartphone],
  [/cross-platform|application|frameworks?$/i, Layers],
  [/mobile|native/i, Smartphone],
  [/back|api|languages/i, Server],
  [/data/i, Database],
  [/cloud|devops|hosting/i, Cloud],
  [/release|monitor/i, Activity],
  [/quality|test/i, TestTube2],
  [/research/i, FileSearch],
  [/design|prototyp/i, Palette],
  [/visual|motion|styling/i, Wand2],
  [/cms|commerce/i, ShoppingCart],
  [/integration/i, Plug],
  [/analytics|product/i, BarChart3],
  [/planning/i, ClipboardList],
  [/collaboration/i, Users],
  [/engineering|tools?$/i, Code2],
  [/web/i, Globe],
];

const STACK_ACCENTS: LuxAccentName[] = ["sky", "emerald", "violet", "gold", "rose"];

function stackIcon(title: string): LucideIcon {
  return STACK_ICONS.find(([pattern]) => pattern.test(title))?.[1] ?? Blocks;
}

export function EliteStack({ heading, groups }: { heading: EliteHeadingData; groups: { title: string; items: string[] }[] }) {
  const total = groups.reduce((sum, group) => sum + group.items.length, 0);
  return (
    <section className={`${ELITE_SECTION} pb-24 sm:pb-32`}>
      <div
        className="relative isolate overflow-hidden rounded-[40px] bg-gradient-to-br from-white via-[#fbf8f1] to-[#f1e8d4] px-6 py-14 ring-1 ring-inset ring-lux-gold/30 sm:px-12 lg:px-14 lg:py-16"
        style={{ boxShadow: "0 40px 90px -60px rgba(120,90,30,0.55)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(143,108,29,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(143,108,29,0.07) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at 70% 0%, black 20%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at 70% 0%, black 20%, transparent 75%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-32 -z-10 h-[26rem] w-[26rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(221,191,93,0.35), transparent 65%)" }}
        />

        <Reveal>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <EliteHeading {...heading} />
            <dl className="flex shrink-0 items-stretch gap-8">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500">Technologies</dt>
                <dd className="mt-2 font-serif text-6xl leading-none lux-gold-text">{total}</dd>
              </div>
              <span aria-hidden className="w-px bg-gradient-to-b from-transparent via-lux-gold/60 to-transparent" />
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500">Disciplines</dt>
                <dd className="mt-2 font-serif text-6xl leading-none text-stone-900">{String(groups.length).padStart(2, "0")}</dd>
              </div>
            </dl>
          </div>
        </Reveal>

        <div className={`mt-14 grid gap-5 sm:grid-cols-2 ${PROCESS_COLS[groups.length] ?? "lg:grid-cols-4"}`}>
          {groups.map((group, i) => {
            const tone = LUX_ACCENTS[STACK_ACCENTS[i % STACK_ACCENTS.length]];
            const Icon = stackIcon(group.title);
            return (
              <Reveal key={group.title} delay={0.06 * i} className="h-full">
                <article className="lux-tile group relative flex h-full flex-col overflow-hidden rounded-[28px] bg-white/85 p-7 ring-1 ring-inset ring-stone-200/80 backdrop-blur transition hover:ring-lux-gold/60">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px]"
                    style={{ background: `linear-gradient(90deg, ${tone.from}, ${tone.to})` }}
                  />
                  <span
                    aria-hidden
                    className="lux-outline-numeral pointer-events-none absolute -right-1 -top-5 select-none font-serif text-[6.5rem] leading-none"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ background: `linear-gradient(135deg, ${tone.from}, ${tone.to})`, boxShadow: `0 0 24px -4px ${tone.glow}` }}
                  >
                    <Icon className="h-5 w-5 text-lux-ink" strokeWidth={2.25} />
                  </span>
                  <h3 className="mt-7 font-serif text-[1.7rem] leading-tight text-stone-900">{group.title}</h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.28em]" style={{ color: tone.ink }}>
                    {group.items.length} tools
                  </p>
                  <div aria-hidden className="mt-5 h-px bg-gradient-to-r from-lux-gold/60 via-stone-200 to-transparent" />
                  <ul className="mt-2 divide-y divide-stone-200/70">
                    {group.items.map((tech) => (
                      <li key={tech} className="flex items-center gap-3 py-2.5 text-sm font-medium text-stone-700 transition group-hover:text-stone-900">
                        <span
                          aria-hidden
                          className="h-1.5 w-1.5 shrink-0 rotate-45"
                          style={{ background: tone.to, boxShadow: `0 0 8px ${withAlpha(tone.glow, 0.9)}` }}
                        />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function EliteIndustries({ heading, items }: { heading: EliteHeadingData; items: string[] }) {
  return (
    <section className={`${ELITE_SECTION} pb-24 sm:pb-32`}>
      <Reveal>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <EliteHeading {...heading} />
          <p className="max-w-md text-sm leading-relaxed text-stone-500">
            Domain experience that shortens discovery and avoids the mistakes others learn the hard way.
          </p>
        </div>
      </Reveal>
      <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {items.map((name, i) => {
          const Icon = INDUSTRY_ICONS[name] ?? Users;
          return (
            <li key={name}>
              <Reveal delay={0.04 * i}>
                <div className="lux-tile flex items-center gap-4 rounded-2xl bg-white/70 px-5 py-5 ring-1 ring-inset ring-stone-200">
                  <span className="lux-check flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lux-ink">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="text-[0.95rem] font-semibold text-stone-900">{name}</span>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function EliteHireBand({ roleId, title, body }: { roleId: string; title: string; body: string }) {
  return (
    <section className={`${ELITE_SECTION} pb-24 sm:pb-32`}>
      <Reveal>
        <div className="lux-orbit relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#fbf3dc] via-white to-[#eef7e9] px-8 py-10 ring-1 ring-inset ring-lux-gold/40 sm:px-12 sm:py-12">
          <div aria-hidden className="lux-grain" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <LuxEyebrow>Hire developers</LuxEyebrow>
              <h2 className="mt-3 font-serif text-[clamp(1.9rem,3.2vw,2.75rem)] leading-[1.05] text-stone-900">{title}</h2>
              <p className="mt-3 text-base leading-relaxed text-stone-600">{body}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`${HIRE_DEVELOPERS_ROUTE}#${roleId}`}
                className="lux-cta inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold"
              >
                Hire developers
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
              <Link
                href={HIRE_DEVELOPERS_ROUTE}
                className="lux-ghost inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-stone-900"
              >
                See hiring models
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function EliteFaq({ faqs, title = "Frequently Asked", accent = "Questions", body }: { faqs: EliteFaqItem[]; title?: string; accent?: string; body?: string }) {
  return (
    <section id="faq" className={`${ELITE_SECTION} scroll-mt-28 pb-24 sm:pb-32`}>
      <div className="grid gap-12 lg:grid-cols-[0.8fr,1.2fr]">
        <Reveal>
          <EliteHeading eyebrow="FAQ" title={title} accent={accent} body={body} />
        </Reveal>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="lux-panel group px-6 py-5 transition [&_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-lux-gold/50">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <h3 className="text-base font-semibold text-stone-900">{faq.q}</h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-inset ring-stone-200 transition group-open:rotate-180 group-open:bg-lux-gold/20">
                  <ChevronDown className="h-4 w-4 text-lux-bronze" />
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export type EliteRelatedItem = {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: LuxAccentName;
};

export function EliteRelated({
  routes,
  heading,
  catalog,
}: {
  routes: string[];
  heading?: EliteHeadingData;
  catalog?: EliteRelatedItem[];
}) {
  const lookup = (href: string) => (catalog ? catalog.find((item) => item.href === href) : ddService(href));
  const services = routes.map(lookup).filter((s): s is NonNullable<typeof s> => Boolean(s));
  return (
    <section className={`${ELITE_SECTION} pb-24 sm:pb-32`}>
      <div className="lux-hairline mb-20" aria-hidden />
      <Reveal>
        <EliteHeading {...(heading ?? { eyebrow: "Keep exploring", title: "Related", accent: "Services" })} />
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((service, i) => {
          const tone = LUX_ACCENTS[service.accent];
          return (
            <Reveal key={service.href} delay={0.06 * i} className="h-full">
              <Link href={service.href} className="group block h-full">
                <LuxCard accent={tone} className="flex h-full flex-col p-8">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-inset ring-stone-200"
                    style={{ background: `linear-gradient(135deg, ${withAlpha(tone.glow, 0.25)}, transparent)`, color: tone.ink }}
                  >
                    <service.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.02em] text-stone-900">{service.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-stone-600">{service.description}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-stone-900 transition group-hover:text-lux-bronze">
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
  );
}

export function EliteFinalCta({ eyebrow, title, accent, body }: EliteHeadingData) {
  return (
    <section className={`${ELITE_SECTION} pb-32`}>
      <Reveal>
        <div className="relative w-full overflow-hidden rounded-[40px] px-6 py-20 text-center sm:px-12 sm:py-28">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(221,191,93,0.3), transparent 60%), radial-gradient(ellipse at 50% 120%, rgba(80,180,68,0.22), transparent 55%), linear-gradient(180deg, #ffffff, rgba(255,255,255,0.7))",
            }}
          />
          <div aria-hidden className="lux-horizon -z-10 opacity-60" />
          <div aria-hidden className="absolute inset-0 -z-10 rounded-[40px] ring-1 ring-inset ring-stone-200" />
          <LuxEyebrow>{eyebrow}</LuxEyebrow>
          <h2 className="mx-auto mt-5 max-w-4xl font-serif text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.98] text-stone-900">
            {title} <span className="lux-gold-text italic">{accent}</span>
          </h2>
          {body ? <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">{body}</p> : null}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="lux-cta inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold"
            >
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
            <Link
              href="/contact"
              className="lux-ghost inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-stone-900"
            >
              Contact us
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/** Full set of industry-standard sections rendered beneath a service page's hero. */
export default function EliteServiceSections({ service }: { service: EliteService }) {
  return (
    <>
      <EliteTicker items={service.ticker} />
      <EliteOfferings heading={service.offerings} items={service.offerings.items} accent={service.accent} />
      <EliteStatement heading={service.statement} quote={service.statement.quote} benefits={service.statement.benefits} />
      <EliteProcess heading={service.process} steps={service.process.steps} />
      <EliteStack heading={service.stack} groups={service.stack.groups} />
      <EliteIndustries heading={service.industries} items={service.industries.items} />
      {service.hire ? <EliteHireBand {...service.hire} /> : null}
      <EliteFaq faqs={service.faqs} body={`Answers to the questions clients ask most about ${service.name.toLowerCase()}.`} />
      <EliteRelated routes={service.related} />
      <EliteFinalCta {...service.cta} />
    </>
  );
}
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  ChevronDown,
  Code2,
  Handshake,
  Layers,
  MessagesSquare,
  Palette,
  Rocket,
  Search,
  Server,
  Smartphone,
  TrendingUp,
  UserCheck,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import LuxBackdrop from "@/components/lux/LuxBackdrop";
import LuxCard from "@/components/lux/LuxCard";
import { LUX_ACCENTS, withAlpha, type LuxAccent } from "@/components/lux/accents";
import LuxPage, { LuxEyebrow, LuxPill } from "@/components/lux/LuxPage";
import { TECH_STACK_CATEGORIES } from "@/lib/design-and-development/tech-stack-content";
import {
  HIRE_FAQS,
  HIRE_ROLES,
  HIRING_MODELS,
  HIRING_STEPS,
  WHY_HIRE_US,
} from "@/lib/hire-developers/hire-developers-content";
import { HUBSPOT_MEETING_URL } from "@/lib/site";

const SECTION = "relative px-[var(--lux-gutter)]";

const ROLE_STYLE: Record<string, { icon: LucideIcon; accent: LuxAccent }> = {
  "web-developers": { icon: Code2, accent: LUX_ACCENTS.sky },
  "app-developers": { icon: Smartphone, accent: LUX_ACCENTS.violet },
  "react-developers": { icon: Blocks, accent: LUX_ACCENTS.sky },
  "backend-developers": { icon: Server, accent: LUX_ACCENTS.emerald },
  "full-stack-developers": { icon: Layers, accent: LUX_ACCENTS.gold },
  "ui-ux-designers": { icon: Palette, accent: LUX_ACCENTS.rose },
};

const STEP_ICONS: LucideIcon[] = [Search, UserCheck, Rocket, TrendingUp];
const WHY_ICONS: LucideIcon[] = [TrendingUp, UserCheck, Workflow, MessagesSquare, Handshake, Users];

const HERO_HIGHLIGHTS = [
  { icon: Users, title: "Dedicated, hourly or fixed", caption: "Hire the way you work" },
  { icon: Layers, title: "Developers + designers + SEO", caption: "One senior team" },
];

function SectionHeading({
  eyebrow,
  title,
  accent,
  body,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  accent: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <LuxEyebrow>{eyebrow}</LuxEyebrow>
      <h2 className="mt-4 font-serif text-[clamp(2.4rem,5vw,4.25rem)] leading-[1.02] text-stone-900">
        {title} <span className="lux-gold-text italic">{accent}</span>
      </h2>
      {body ? <p className="mt-5 text-base leading-relaxed text-stone-600 sm:text-lg">{body}</p> : null}
    </div>
  );
}

export default function HireDevelopersLanding() {
  return (
    <LuxPage>
      {/* Hero */}
      <section className={`${SECTION} isolate overflow-hidden pb-24 pt-14 sm:pb-32 sm:pt-20`}>
        <LuxBackdrop />
        <div className="relative grid w-full items-center gap-14 lg:grid-cols-[1.25fr,0.95fr] lg:gap-12">
          <Reveal>
            <LuxPill>Hire Developers</LuxPill>
            <h1 className="mt-8 text-[clamp(2.8rem,6.6vw,6.25rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-stone-900">
              Hire Dedicated Developers
              <br />
              <span className="lux-gold-text font-serif font-normal italic tracking-[-0.02em]">Who Ship Like Your Own Team</span>
            </h1>
            <p className="mt-8 max-w-2xl text-[clamp(1rem,1.35vw,1.2rem)] leading-relaxed text-stone-600">
              Hire senior web developers, mobile app developers, React, Next.js and Node.js engineers from
              BrandMarketing. Meet vetted developers, interview them, and scale your team up or down as your roadmap
              changes.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="lux-cta inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold"
              >
                Hire Developers Now
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
              <Link
                href="/pricing"
                className="lux-ghost inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-stone-900"
              >
                See pricing
              </Link>
            </div>
            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
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

          <Reveal delay={0.15}>
            <LuxCard featured className="p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <LuxEyebrow>Who do you need?</LuxEyebrow>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-400">Free consultation</span>
              </div>
              <p className="mt-4 font-serif text-[clamp(1.9rem,2.8vw,2.4rem)] leading-[1.05] text-stone-900">
                Pick a role, <span className="lux-gold-text italic">meet your developer</span>
              </p>
              <ul className="mt-6 grid gap-2">
                {HIRE_ROLES.map((role) => {
                  const { icon: Icon, accent } = ROLE_STYLE[role.id];
                  return (
                    <li key={role.id}>
                      <a
                        href={`#${role.id}`}
                        className="group flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 ring-1 ring-inset ring-stone-200 transition hover:bg-white hover:ring-lux-gold/60"
                      >
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                          style={{ background: withAlpha(accent.glow, 0.18), color: accent.ink }}
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="flex-1 text-sm font-semibold text-stone-800">{role.label}</span>
                        <ArrowRight className="h-4 w-4 text-stone-400 transition group-hover:translate-x-0.5 group-hover:text-lux-bronze" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </LuxCard>
          </Reveal>
        </div>
      </section>

      {/* Roles */}
      <section id="roles" className={`${SECTION} scroll-mt-28 pb-24 sm:pb-32`}>
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow="Developers for hire" title="Hire Developers for" accent="Every Layer" />
            <p className="max-w-md text-sm leading-relaxed text-stone-500">
              From a single specialist to a complete product team, hire the exact skills your roadmap needs.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {HIRE_ROLES.map((role, i) => {
            const { icon: Icon, accent } = ROLE_STYLE[role.id];
            return (
              <Reveal key={role.id} delay={0.06 * (i % 3)} className="h-full">
                <LuxCard as="article" id={role.id} accent={accent} className="flex h-full scroll-mt-28 flex-col p-8">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-inset ring-stone-200"
                    style={{ background: `linear-gradient(135deg, ${withAlpha(accent.glow, 0.25)}, transparent)`, color: accent.ink }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.02em] text-stone-900">{role.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-stone-600">{role.body}</p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${role.title} skills`}>
                    {role.skills.map((skill) => (
                      <li key={skill} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-stone-700 ring-1 ring-inset ring-stone-200">
                        {skill}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs text-stone-500">
                    <span className="font-semibold uppercase tracking-[0.18em] text-stone-400">Great for</span> {role.goodFor}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-sm font-semibold">
                    <a href={HUBSPOT_MEETING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-stone-900 hover:text-lux-bronze">
                      {role.label}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <Link href={role.serviceHref} className="inline-flex items-center gap-1 text-stone-500 hover:text-lux-bronze">
                      {role.serviceLabel}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </LuxCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Hiring models */}
      <section className={`${SECTION} pb-24 sm:pb-32`}>
        <div className="lux-hairline mb-20" aria-hidden />
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Engagement models"
            title="Flexible Ways to"
            accent="Hire Developers"
            body="Choose the model that fits your budget and roadmap, and switch whenever your needs change."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {HIRING_MODELS.map((model, i) => (
            <Reveal key={model.title} delay={0.08 * i} className="h-full">
              <LuxCard featured={i === 0} className="flex h-full flex-col p-8 sm:p-10">
                <span className="font-mono text-xs tracking-[0.3em] text-stone-400">0{i + 1}</span>
                <h3 className="mt-6 font-serif text-3xl leading-none text-stone-900">{model.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-stone-600">{model.body}</p>
                <p className="mt-auto pt-6 text-xs text-stone-500">
                  <span className="font-semibold uppercase tracking-[0.18em] text-lux-bronze">Best for</span> {model.bestFor}
                </p>
              </LuxCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className={`${SECTION} pb-24 sm:pb-32`}>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How hiring works"
            title="Hire a Developer in"
            accent="Four Steps"
            body="A simple process that gets the right developer working on your product without months of recruiting."
          />
        </Reveal>
        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px lg:block"
            style={{ background: "linear-gradient(90deg, rgba(108,71,255,0.6), rgba(32,150,255,0.6), rgba(80,180,68,0.6), rgba(221,191,93,0.8))" }}
          />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {HIRING_STEPS.map((step, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <Reveal key={step.title} delay={0.1 * i}>
                  <div className="relative flex flex-col items-center text-center">
                    <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#f1ead9] ring-1 ring-lux-gold/60 shadow-[0_0_40px_-6px_rgba(221,191,93,0.7)]">
                      <span className="absolute inset-1 rounded-full bg-gradient-to-br from-lux-champagne/20 to-transparent" />
                      <Icon className="relative h-5 w-5 text-lux-bronze" />
                    </span>
                    <span className="mt-6 font-mono text-[10px] tracking-[0.32em] text-stone-400">STEP 0{i + 1}</span>
                    <h3 className="mt-2 font-serif text-3xl text-stone-900">{step.title}</h3>
                    <p className="mt-3 max-w-[30ch] text-sm leading-relaxed text-stone-500">{step.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className={`${SECTION} pb-24 sm:pb-32`}>
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow="Why BrandMarketing" title="Why Hire Developers" accent="From Us?" />
            <p className="max-w-md text-sm leading-relaxed text-stone-500">
              Development talent backed by an agency that understands search, design and growth.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_HIRE_US.map((item, i) => {
            const Icon = WHY_ICONS[i];
            return (
              <Reveal key={item.title} delay={0.06 * (i % 3)} className="h-full">
                <div className="lux-panel flex h-full gap-5 p-6 sm:p-7">
                  <span className="lux-check flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-lux-ink">
                    <Icon className="h-5 w-5" strokeWidth={2.25} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.01em] text-stone-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Tech stack */}
      <section className={`${SECTION} pb-24 sm:pb-32`}>
        <div className="lux-hairline mb-20" aria-hidden />
        <Reveal>
          <SectionHeading eyebrow="Technology" title="Skills You Can" accent="Hire Today" />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_STACK_CATEGORIES.map((category, i) => (
            <Reveal key={category.id} delay={0.06 * (i % 3)} className="h-full">
              <div className="lux-panel h-full p-6 sm:p-7">
                <h3 className="font-serif text-2xl text-stone-900">{category.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <li key={tech} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-stone-700 ring-1 ring-inset ring-stone-200">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={`${SECTION} scroll-mt-28 pb-24 sm:pb-32`}>
        <div className="grid gap-12 lg:grid-cols-[0.8fr,1.2fr]">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Hiring Developers:"
              accent="Your Questions"
              body="Everything you need to know before you hire a developer from BrandMarketing."
            />
          </Reveal>
          <div className="space-y-3">
            {HIRE_FAQS.map((faq) => (
              <details key={faq.q} className="lux-panel group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-stone-900">
                  <h3>{faq.q}</h3>
                  <ChevronDown className="h-5 w-5 shrink-0 text-lux-bronze transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`${SECTION} pb-32`}>
        <Reveal>
          <div className="relative w-full overflow-hidden rounded-[40px] px-6 py-20 text-center sm:px-12 sm:py-28">
            <div
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(221,191,93,0.3), transparent 60%), radial-gradient(ellipse at 50% 120%, rgba(32,150,255,0.2), transparent 55%), linear-gradient(180deg, #ffffff, rgba(255,255,255,0.7))",
              }}
            />
            <div aria-hidden className="lux-horizon -z-10 opacity-60" />
            <div aria-hidden className="absolute inset-0 -z-10 rounded-[40px] ring-1 ring-inset ring-stone-200" />
            <LuxEyebrow>Start hiring</LuxEyebrow>
            <h2 className="mx-auto mt-5 max-w-4xl font-serif text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.98] text-stone-900">
              Ready to <span className="lux-gold-text italic">Hire Developers</span> Who Deliver?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
              Tell us what you are building. We will match you with the right developers and a plan to start fast.
            </p>
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
    </LuxPage>
  );
}

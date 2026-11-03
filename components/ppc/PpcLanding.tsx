import type { ReactNode } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Calendar, Check, CircleDollarSign, Play } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import PpcHeroDashboard from "@/components/ppc/PpcHeroDashboard";
import PpcFaqSection from "@/components/ppc/PpcFaqSection";
import { PPC_PLATFORM_ICONS } from "@/components/ppc/PpcPlatformIcons";
import {
  PPC_ALT_BG,
  PPC_BG,
  PPC_BODY,
  PPC_BTN_OUTLINE,
  PPC_BTN_PRIMARY,
  PPC_CARD_BODY,
  PPC_CARD_TITLE,
  PPC_CHECK,
  PPC_HERO_TITLE,
  PPC_PAD,
  PPC_PANEL_CARD,
  PPC_PLATFORM_CARD,
  PPC_SECTION,
  PPC_SECTION_PY,
  PPC_SECTION_TITLE,
  PPC_SECTION_TITLE_LEFT,
  PPC_SERVICE_CARD,
  PPC_TAG,
  PPC_TITLE_ACCENT,
} from "@/components/ppc/ppc-styles";
import {
  ppcFaq,
  ppcFinalCta,
  ppcHero,
  ppcIndustries,
  ppcPlatforms,
  ppcProcess,
  ppcServices,
  ppcWhyChoose,
} from "@/lib/ppc/ppc-content";

function WavyUnderline({ children }: { children: ReactNode }) {
  return (
    <span className={`relative inline ${PPC_TITLE_ACCENT}`}>
      {children}
      <svg
        className="absolute -bottom-1 left-0 w-full text-violet-600"
        viewBox="0 0 120 8"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 4 Q15 0 30 4 T60 4 T90 4 T120 4"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export default function PpcLanding() {
  const topServices = ppcServices.items.slice(0, 4);
  const bottomServices = ppcServices.items.slice(4);

  return (
    <div className={`min-h-screen w-full max-w-none ${PPC_BG}`}>
      {/* Hero */}
      <section className={`relative ${PPC_SECTION} bg-transparent pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pt-14`}>
        <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-12 xl:gap-16">
          <div className="min-w-0 space-y-5 lg:max-w-xl">
            <span className={PPC_TAG}>
              <CircleDollarSign className="h-3.5 w-3.5 text-violet-700" strokeWidth={2} />
              {ppcHero.badge}
            </span>
            <h1 className={PPC_HERO_TITLE}>
              {ppcHero.titleBefore}{" "}
              <WavyUnderline>{ppcHero.titleAccent}</WavyUnderline>
            </h1>
            <p className={PPC_BODY}>{ppcHero.subtitle}</p>
            <ul className="space-y-2.5">
              {ppcHero.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-stone-700">
                  <span className={PPC_CHECK}>
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href={HUBSPOT_MEETING_URL} target="_blank" rel="noopener noreferrer" className={PPC_BTN_PRIMARY}>
                {ppcHero.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#services" className={`${PPC_BTN_OUTLINE} gap-2`}>
                {ppcHero.ctaSecondary}
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-violet-200 bg-violet-50">
                  <Play className="h-3 w-3 fill-violet-600 text-violet-700" />
                </span>
              </Link>
            </div>
          </div>
          <div className="min-w-0 w-full">
            <PpcHeroDashboard />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className={`${PPC_SECTION} ${PPC_SECTION_PY} ${PPC_ALT_BG}`}>
        <div className="mb-10 text-center">
          <h2 className={PPC_SECTION_TITLE}>{ppcServices.title}</h2>
          <p className={`mx-auto mt-3 max-w-2xl ${PPC_BODY}`}>{ppcServices.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topServices.map((item) => {
            const Icon = item.icon as LucideIcon;
            return (
              <article key={item.title} className={PPC_SERVICE_CARD}>
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                  <Icon className="h-5 w-5 text-violet-700" strokeWidth={1.75} />
                </span>
                <h3 className={PPC_CARD_TITLE}>{item.title}</h3>
                <p className={`mt-2 ${PPC_CARD_BODY}`}>{item.desc}</p>
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-stone-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-700" strokeWidth={2.5} />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-auto lg:max-w-[75%] lg:grid-cols-3">
          {bottomServices.map((item) => {
            const Icon = item.icon as LucideIcon;
            return (
              <article key={item.title} className={PPC_SERVICE_CARD}>
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                  <Icon className="h-5 w-5 text-violet-700" strokeWidth={1.75} />
                </span>
                <h3 className={PPC_CARD_TITLE}>{item.title}</h3>
                <p className={`mt-2 ${PPC_CARD_BODY}`}>{item.desc}</p>
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-stone-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-700" strokeWidth={2.5} />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className={`${PPC_SECTION} ${PPC_SECTION_PY} bg-transparent`}>
        <div className="mb-10 text-center">
          <h2 className={PPC_SECTION_TITLE}>{ppcProcess.title}</h2>
          <p className={`mx-auto mt-3 max-w-xl ${PPC_BODY}`}>{ppcProcess.subtitle}</p>
        </div>
        <div className="relative overflow-x-auto pb-2">
          <div className="relative flex min-w-[52rem] items-start justify-between sm:min-w-0">
            <div
              className="absolute left-[8%] right-[8%] top-[1.35rem] hidden border-t border-dashed border-violet-200 sm:block"
              aria-hidden
            />
            {ppcProcess.steps.map((step) => {
              const Icon = step.icon as LucideIcon;
              return (
                <div
                  key={step.title}
                  className="relative z-10 flex w-[16%] min-w-[5rem] flex-col items-center text-center"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 text-violet-700" strokeWidth={1.75} />
                  </span>
                  <p className="mt-2 text-xs font-bold text-violet-700 sm:text-sm">{step.num}</p>
                  <p className="mt-1 text-xs font-bold text-stone-900 sm:text-sm">{step.title}</p>
                  <p className="mt-1 text-[10px] leading-snug text-stone-600 sm:text-[11px]">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose + Platforms */}
      <section className={`${PPC_SECTION} ${PPC_SECTION_PY} ${PPC_ALT_BG}`}>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className={PPC_PANEL_CARD}>
            <h2 className={`mb-6 ${PPC_SECTION_TITLE_LEFT}`}>{ppcWhyChoose.title}</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {ppcWhyChoose.items.map((item) => {
                const Icon = item.icon as LucideIcon;
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white">
                      <Icon className="h-5 w-5 text-violet-700" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-stone-900">{item.label}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-stone-600">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={PPC_PANEL_CARD}>
            <h2 className={`mb-6 ${PPC_SECTION_TITLE_LEFT}`}>{ppcPlatforms.title}</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {ppcPlatforms.platforms.map((name) => {
                const Icon = PPC_PLATFORM_ICONS[name];
                return (
                  <div key={name} className={PPC_PLATFORM_CARD}>
                    {Icon ? <Icon className="h-9 w-9" /> : null}
                    <span className="text-center text-[10px] font-semibold leading-tight text-stone-700 sm:text-xs">
                      {name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Industries + FAQ */}
      <section className={`${PPC_SECTION} ${PPC_SECTION_PY} bg-transparent`}>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className={PPC_PANEL_CARD}>
            <h2 className={`mb-6 ${PPC_SECTION_TITLE_LEFT}`}>{ppcIndustries.title}</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {ppcIndustries.items.map((ind) => {
                const Icon = ind.icon as LucideIcon;
                return (
                  <div key={ind.label} className="flex flex-col items-center gap-2 text-center">
                    <Icon className="h-6 w-6 text-violet-700" strokeWidth={1.75} />
                    <span className="text-[11px] font-semibold text-stone-700 sm:text-xs">{ind.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={PPC_PANEL_CARD}>
            <h2 className={`mb-6 ${PPC_SECTION_TITLE_LEFT}`}>{ppcFaq.title}</h2>
            <PpcFaqSection items={[...ppcFaq.items]} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${PPC_SECTION} ${PPC_PAD} pb-14 sm:pb-16`}>
        <div className="relative overflow-hidden rounded-2xl lux-banner p-6 sm:rounded-3xl sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-8 top-0 h-40 w-40 rounded-full bg-stone-900/5 blur-3xl" aria-hidden />
          <div className="relative grid items-center gap-6 lg:grid-cols-[1fr_auto] lg:gap-10">
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-xl font-bold leading-tight text-stone-900 sm:text-2xl lg:text-[1.75rem]">
                {ppcFinalCta.title}
              </h2>
              <p className="text-sm leading-relaxed text-indigo-700 sm:text-base">{ppcFinalCta.subtitle}</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-end">
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold lux-cta text-lux-ink"
              >
                {ppcFinalCta.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold lux-ghost text-stone-900"
              >
                {ppcFinalCta.ctaSecondary}
                <Calendar className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Calendar, Check, Play } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import EcommerceDmDeviceMockup from "@/components/digital-marketing/EcommerceDmDeviceMockup";
import { ECOMMERCE_PLATFORM_ICONS } from "@/components/digital-marketing/EcommercePlatformIcons";
import FaqAccordion from "@/components/seo/FaqAccordion";
import {
  ECM_BG,
  ECM_BODY,
  ECM_BTN_OUTLINE,
  ECM_BTN_PRIMARY,
  ECM_CARD,
  ECM_CARD_BODY,
  ECM_CARD_TITLE,
  ECM_CHECK,
  ECM_HERO_TITLE,
  ECM_PAD,
  ECM_SECTION,
  ECM_SECTION_PY,
  ECM_SECTION_TITLE,
  ECM_TAG,
  ECM_TITLE_GRADIENT,
} from "@/components/digital-marketing/ecommerce-dm-styles";
import {
  ecommerceDmFaq,
  ecommerceDmFinalCta,
  ecommerceDmHero,
  ecommerceDmIndustries,
  ecommerceDmPlatforms,
  ecommerceDmProcess,
  ecommerceDmServices,
  ecommerceDmWhyChoose,
} from "@/lib/digital-marketing/ecommerce-dm-content";

export default function EcommerceDmLanding() {
  return (
    <div className={`min-h-screen w-full max-w-none ${ECM_BG}`}>
      {/* Hero */}
      <section className={`relative ${ECM_SECTION} pb-14 pt-10 sm:pb-16 sm:pt-12 lg:pt-14`}>
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_80%_20%,rgba(34,197,94,0.1),transparent_65%)]"
          aria-hidden
        />
        <div className="relative grid items-start gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div className="min-w-0 space-y-5">
            <span className={ECM_TAG}>{ecommerceDmHero.badge}</span>
            <h1 className={ECM_HERO_TITLE}>
              {ecommerceDmHero.titleBefore}{" "}
              <span className={ECM_TITLE_GRADIENT}>{ecommerceDmHero.titleAccent}</span>
            </h1>
            <p className={ECM_BODY}>{ecommerceDmHero.subtitle}</p>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {ecommerceDmHero.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className={ECM_CHECK}>
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href={HUBSPOT_MEETING_URL} target="_blank" rel="noopener noreferrer" className={ECM_BTN_PRIMARY}>
                {ecommerceDmHero.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${ECM_BTN_OUTLINE} gap-2`}
              >
                {ecommerceDmHero.ctaSecondary}
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50">
                  <Play className="h-3 w-3 fill-emerald-600 text-emerald-600" />
                </span>
              </Link>
            </div>
          </div>
          <div className="min-w-0 self-start lg:pt-2">
            <EcommerceDmDeviceMockup />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={`${ECM_SECTION} ${ECM_SECTION_PY} bg-white`}>
        <div className="mb-8 text-center sm:mb-10">
          <h2 className={ECM_SECTION_TITLE}>{ecommerceDmServices.title}</h2>
          <p className={`mx-auto mt-3 max-w-2xl ${ECM_BODY}`}>{ecommerceDmServices.subtitle}</p>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#22c55e]" />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {ecommerceDmServices.items.map((item) => {
            const Icon = item.icon as LucideIcon;
            return (
              <article key={item.title} className={ECM_CARD}>
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
                  <Icon className="h-5 w-5 text-emerald-600" strokeWidth={1.75} />
                </span>
                <h3 className={ECM_CARD_TITLE}>{item.title}</h3>
                <p className={`mt-2 ${ECM_CARD_BODY}`}>{item.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
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
      <section className={`${ECM_SECTION} ${ECM_SECTION_PY} ${ECM_BG}`}>
        <div className="mb-8 text-center sm:mb-10">
          <h2 className={ECM_SECTION_TITLE}>{ecommerceDmProcess.title}</h2>
          <p className={`mx-auto mt-3 max-w-xl ${ECM_BODY}`}>{ecommerceDmProcess.subtitle}</p>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#22c55e]" />
        </div>
        <div className="relative overflow-x-auto pb-2">
          <div className="relative flex min-w-[44rem] items-start justify-between gap-2 sm:min-w-0">
            <div className="absolute left-[5%] right-[5%] top-5 hidden border-t border-dashed border-slate-300 sm:block" aria-hidden />
            {ecommerceDmProcess.steps.map((step) => (
              <div key={step.title} className="relative z-10 flex w-[15%] min-w-[4.5rem] flex-col items-center text-center">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[10px] font-bold text-white shadow-md sm:h-11 sm:w-11 sm:text-xs"
                  style={{ backgroundColor: step.color }}
                >
                  {step.num}
                </span>
                <p className="mt-3 text-xs font-bold text-slate-800 sm:text-sm">{step.title}</p>
                <p className="mt-1 text-[10px] leading-snug text-slate-500 sm:text-[11px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why + Platforms */}
      <section className={`${ECM_SECTION} ${ECM_SECTION_PY} bg-white`}>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className={`mb-6 text-left ${ECM_SECTION_TITLE}`}>{ecommerceDmWhyChoose.title}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {ecommerceDmWhyChoose.items.map((item) => {
                const Icon = item.icon as LucideIcon;
                return (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                      <Icon className="h-5 w-5 text-emerald-600" strokeWidth={1.75} />
                    </span>
                    <span className="text-sm font-semibold text-slate-800">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h2 className={`mb-6 text-left ${ECM_SECTION_TITLE}`}>{ecommerceDmPlatforms.title}</h2>
            <div className="grid grid-cols-4 gap-4 sm:gap-5">
              {ecommerceDmPlatforms.platforms.map((name) => {
                const Icon = ECOMMERCE_PLATFORM_ICONS[name];
                return (
                  <div key={name} className="flex flex-col items-center gap-2">
                    {Icon ? <Icon className="h-9 w-9 sm:h-10 sm:w-10" /> : null}
                    <span className="text-center text-[10px] font-semibold text-slate-600 sm:text-xs">{name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Industries + FAQ */}
      <section className={`${ECM_SECTION} ${ECM_SECTION_PY} ${ECM_BG}`}>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className={`mb-6 text-left ${ECM_SECTION_TITLE}`}>{ecommerceDmIndustries.title}</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {ecommerceDmIndustries.items.map((ind) => {
                const Icon = ind.icon as LucideIcon;
                return (
                  <div key={ind.label} className="flex min-w-[5rem] flex-col items-center gap-1.5">
                    <Icon className="h-5 w-5 text-emerald-600 sm:h-[22px] sm:w-[22px]" strokeWidth={1.75} />
                    <span className="text-[11px] font-semibold text-slate-700 sm:text-xs">{ind.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h2 className={`mb-6 text-left ${ECM_SECTION_TITLE}`}>{ecommerceDmFaq.title}</h2>
            <FaqAccordion items={[...ecommerceDmFaq.items]} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${ECM_SECTION} ${ECM_PAD} pb-14 sm:pb-16`}>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#16a34a] via-[#22c55e] to-[#15803d] p-6 sm:rounded-3xl sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-8 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" aria-hidden />
          <div className="relative grid items-center gap-6 lg:grid-cols-[1fr_auto] lg:gap-10">
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-xl font-bold leading-tight text-white sm:text-2xl lg:text-[1.75rem]">
                {ecommerceDmFinalCta.title}
              </h2>
              <p className="text-sm leading-relaxed text-emerald-50 sm:text-base">{ecommerceDmFinalCta.subtitle}</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-end">
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-lg transition hover:bg-emerald-50"
              >
                {ecommerceDmFinalCta.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                {ecommerceDmFinalCta.ctaSecondary}
                <Calendar className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Calendar, Check, ChevronRight } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import DmHubDeviceMockup from "@/components/digital-marketing/DmHubDeviceMockup";
import DmHubEcosystemDiagram from "@/components/digital-marketing/DmHubEcosystemDiagram";
import DmHubFranchiseEnterpriseSection from "@/components/digital-marketing/DmHubFranchiseEnterpriseSection";
import {
  HUB_BG,
  HUB_BODY,
  HUB_BTN_OUTLINE,
  HUB_BTN_PRIMARY,
  HUB_CARD,
  HUB_CARD_BODY,
  HUB_CARD_TITLE,
  HUB_CHECK,
  HUB_HERO_TITLE,
  HUB_PAD,
  HUB_SECTION,
  HUB_SECTION_PY,
  HUB_SECTION_TITLE,
  HUB_SECTION_TITLE_LEFT,
  HUB_TAG,
  HUB_TITLE_GRADIENT,
} from "@/components/digital-marketing/hub-dm-styles";
import {
  dmHubDevelopment,
  dmHubEcosystem,
  dmHubFinalCta,
  dmHubFoundations,
  dmHubHero,
  dmHubIndustries,
  dmHubProcess,
  dmHubStrategy,
  dmHubWhyChoose,
} from "@/lib/digital-marketing/hub-dm-content";

export default function DigitalMarketingHubLanding() {
  return (
    <div className={`min-h-screen w-full max-w-none ${HUB_BG}`}>
      {/* Hero */}
      <section className={`relative ${HUB_SECTION} pb-14 pt-10 sm:pb-16 sm:pt-12 lg:pt-14`}>
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_80%_20%,rgba(124,58,237,0.08),transparent_65%)]"
          aria-hidden
        />
        <div className="relative grid items-start gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div className="min-w-0 space-y-5">
            <span className={HUB_TAG}>{dmHubHero.badge}</span>
            <h1 className={HUB_HERO_TITLE}>
              {dmHubHero.titleBefore}{" "}
              <span className={HUB_TITLE_GRADIENT}>{dmHubHero.titleAccent}</span>
            </h1>
            <p className="text-base font-semibold sm:text-lg">
              {dmHubHero.tagline.map((t, i) => (
                <span key={t.word}>
                  {i > 0 ? " " : ""}
                  <span style={{ color: t.color }}>{t.word}</span>
                </span>
              ))}
            </p>
            <p className={HUB_BODY}>{dmHubHero.subtitle}</p>
            <ul className="space-y-2.5">
              {dmHubHero.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className={HUB_CHECK}>
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href={HUBSPOT_MEETING_URL} target="_blank" rel="noopener noreferrer" className={HUB_BTN_PRIMARY}>
                {dmHubHero.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={HUBSPOT_MEETING_URL} target="_blank" rel="noopener noreferrer" className={HUB_BTN_OUTLINE}>
                {dmHubHero.ctaSecondary}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="min-w-0 self-start lg:pt-2">
            <DmHubDeviceMockup />
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className={`${HUB_SECTION} ${HUB_SECTION_PY} bg-white`}>
        <div className="mb-8 text-center sm:mb-10">
          <h2 className={HUB_SECTION_TITLE}>{dmHubEcosystem.title}</h2>
          <p className={`mx-auto mt-3 max-w-2xl ${HUB_BODY}`}>{dmHubEcosystem.subtitle}</p>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#7c3aed]" />
        </div>
        <DmHubEcosystemDiagram />
      </section>

      {/* Strategy process */}
      <section className={`${HUB_SECTION} ${HUB_SECTION_PY} ${HUB_BG}`}>
        <div className="mb-8 sm:mb-10">
          <span className={HUB_TAG}>{dmHubStrategy.badge}</span>
          <h2 className={`mt-4 ${HUB_SECTION_TITLE_LEFT}`}>{dmHubStrategy.title}</h2>
          <p className={`mt-3 max-w-2xl ${HUB_BODY}`}>{dmHubStrategy.subtitle}</p>
        </div>
        <div className="relative overflow-x-auto pb-2">
          <div className="relative flex min-w-[44rem] items-start justify-between gap-1 sm:min-w-0">
            <div className="absolute left-[6%] right-[6%] top-6 hidden border-t border-dashed border-violet-200 sm:block" aria-hidden />
            {dmHubStrategy.steps.map((step, i) => {
              const Icon = step.icon as LucideIcon;
              return (
                <div
                  key={step.title}
                  className="relative z-10 flex w-[15%] min-w-[4.75rem] flex-col items-center text-center"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 shadow-sm sm:h-[3.25rem] sm:w-[3.25rem]">
                    <Icon className="h-5 w-5 text-violet-600" strokeWidth={1.75} />
                  </span>
                  {i < dmHubStrategy.steps.length - 1 ? (
                    <ChevronRight className="absolute -right-2 top-3 hidden h-4 w-4 text-violet-300 sm:block" aria-hidden />
                  ) : null}
                  <p className="mt-3 text-xs font-bold text-slate-800 sm:text-sm">{step.title}</p>
                  <p className="mt-1 text-[10px] leading-snug text-slate-500 sm:text-[11px]">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development systems */}
      <section className={`${HUB_SECTION} ${HUB_SECTION_PY} bg-white`}>
        <div className="mb-8 sm:mb-10">
          <span className={HUB_TAG}>{dmHubDevelopment.badge}</span>
          <h2 className={`mt-4 ${HUB_SECTION_TITLE_LEFT}`}>{dmHubDevelopment.title}</h2>
          <p className={`mt-3 max-w-2xl ${HUB_BODY}`}>{dmHubDevelopment.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {dmHubDevelopment.items.map((item) => {
            const Icon = item.icon as LucideIcon;
            return (
              <article key={item.title} className={HUB_CARD}>
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50">
                  <Icon className="h-5 w-5 text-violet-600" strokeWidth={1.75} />
                </span>
                <h3 className={HUB_CARD_TITLE}>{item.title}</h3>
                <p className={`mt-2 ${HUB_CARD_BODY}`}>{item.desc}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Franchise + Enterprise */}
      <section className={`${HUB_SECTION} ${HUB_SECTION_PY} ${HUB_BG}`}>
        <DmHubFranchiseEnterpriseSection />
      </section>

      {/* Process timeline */}
      <section className={`${HUB_SECTION} ${HUB_SECTION_PY} bg-white`}>
        <div className="mb-8 text-center sm:mb-10">
          <h2 className={HUB_SECTION_TITLE}>{dmHubProcess.title}</h2>
          <p className={`mx-auto mt-3 max-w-xl ${HUB_BODY}`}>{dmHubProcess.subtitle}</p>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#7c3aed]" />
        </div>
        <div className="relative overflow-x-auto pb-2">
          <div className="relative flex min-w-[44rem] items-start justify-between gap-2 sm:min-w-0">
            <div className="absolute left-[5%] right-[5%] top-5 hidden border-t border-dashed border-slate-300 sm:block" aria-hidden />
            {dmHubProcess.steps.map((step) => (
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

      {/* Foundations */}
      <section className={`${HUB_SECTION} ${HUB_SECTION_PY} ${HUB_BG}`}>
        <div className="mb-8 text-center sm:mb-10">
          <h2 className={HUB_SECTION_TITLE}>{dmHubFoundations.title}</h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#7c3aed]" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {dmHubFoundations.items.map((item) => {
            const Icon = item.icon as LucideIcon;
            return (
              <article key={item.title} className={`${HUB_CARD} flex items-start gap-4`}>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50">
                  <Icon className="h-5 w-5 text-violet-600" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className={HUB_CARD_TITLE}>{item.title}</h3>
                  <p className={`mt-1.5 ${HUB_CARD_BODY}`}>{item.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Why choose */}
      <section className={`${HUB_SECTION} ${HUB_SECTION_PY} bg-white`}>
        <div className="mb-8 text-center sm:mb-10">
          <h2 className={HUB_SECTION_TITLE}>{dmHubWhyChoose.title}</h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#7c3aed]" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {dmHubWhyChoose.items.map((item) => {
            const Icon = item.icon as LucideIcon;
            return (
              <div key={item.title} className="text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50">
                  <Icon className="h-5 w-5 text-violet-600" strokeWidth={1.75} />
                </span>
                <p className="mt-3 text-sm font-bold text-slate-900 sm:text-base">{item.title}</p>
                <p className={`mt-1.5 ${HUB_CARD_BODY}`}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Industries */}
      <section className={`${HUB_SECTION} ${HUB_SECTION_PY} ${HUB_BG}`}>
        <div className="mb-8 text-center sm:mb-10">
          <h2 className={HUB_SECTION_TITLE}>{dmHubIndustries.title}</h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#7c3aed]" />
        </div>
        <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-6 sm:gap-x-10">
          {dmHubIndustries.items.map((ind) => {
            const Icon = ind.icon as LucideIcon;
            return (
              <div key={ind.label} className="flex min-w-[5.5rem] flex-col items-center gap-2">
                <Icon className="h-6 w-6 text-violet-600 sm:h-7 sm:w-7" strokeWidth={1.75} />
                <span className="text-center text-[11px] font-semibold text-slate-700 sm:text-xs">{ind.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className={`${HUB_SECTION} ${HUB_PAD} pb-14 sm:pb-16`}>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#4f46e5] via-[#6366f1] to-[#7c3aed] p-6 text-center sm:rounded-3xl sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-8 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" aria-hidden />
          <div className="relative mx-auto max-w-2xl space-y-4">
            <h2 className="text-xl font-bold leading-tight text-white sm:text-2xl lg:text-[1.75rem]">
              {dmHubFinalCta.title}
            </h2>
            <p className="text-sm leading-relaxed text-violet-100 sm:text-base">{dmHubFinalCta.subtitle}</p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-violet-700 shadow-lg transition hover:bg-violet-50"
              >
                {dmHubFinalCta.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                {dmHubFinalCta.ctaSecondary}
                <Calendar className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Calendar, Check, Link2, Play } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import LinkBuildingHeroDashboard from "@/components/link-building/LinkBuildingHeroDashboard";
import SocialMediaFaqSection from "@/components/social-media/SocialMediaFaqSection";
import {
  LB_ALT_BG,
  LB_APPROACH_CARD,
  LB_BG,
  LB_BODY,
  LB_BTN_OUTLINE,
  LB_BTN_PRIMARY,
  LB_CARD_BODY,
  LB_CARD_TITLE,
  LB_CHECK,
  LB_HERO_TITLE,
  LB_PAD,
  LB_PANEL_CARD,
  LB_SECTION,
  LB_SECTION_PY,
  LB_SECTION_TITLE,
  LB_SECTION_TITLE_LEFT,
  LB_SERVICE_CARD,
  LB_TAG,
  LB_TITLE_ACCENT,
} from "@/components/link-building/link-building-styles";
import {
  linkBuildingApproaches,
  linkBuildingFaq,
  linkBuildingFinalCta,
  linkBuildingHero,
  linkBuildingIndustries,
  linkBuildingProcess,
  linkBuildingServices,
  linkBuildingWhyChoose,
} from "@/lib/link-building/link-building-content";

export default function LinkBuildingLanding() {
  return (
    <div className={`min-h-screen w-full max-w-none ${LB_BG}`}>
      {/* Hero */}
      <section className={`relative ${LB_SECTION} bg-white pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pt-14`}>
        <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-12 xl:gap-16">
          <div className="min-w-0 space-y-5 lg:max-w-xl">
            <span className={LB_TAG}>
              <Link2 className="h-3.5 w-3.5 text-violet-600" strokeWidth={2} />
              {linkBuildingHero.badge}
            </span>
            <h1 className={LB_HERO_TITLE}>
              {linkBuildingHero.titleBefore}{" "}
              <span className={LB_TITLE_ACCENT}>{linkBuildingHero.titleAccent}</span>
            </h1>
            <p className={LB_BODY}>{linkBuildingHero.subtitle}</p>
            <ul className="space-y-2.5">
              {linkBuildingHero.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-[#374151]">
                  <span className={LB_CHECK}>
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href={HUBSPOT_MEETING_URL} target="_blank" rel="noopener noreferrer" className={LB_BTN_PRIMARY}>
                {linkBuildingHero.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#services" className={`${LB_BTN_OUTLINE} gap-2`}>
                {linkBuildingHero.ctaSecondary}
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-violet-200 bg-violet-50">
                  <Play className="h-3 w-3 fill-violet-600 text-violet-600" />
                </span>
              </Link>
            </div>
          </div>
          <div className="min-w-0 w-full">
            <LinkBuildingHeroDashboard />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className={`${LB_SECTION} ${LB_SECTION_PY} ${LB_ALT_BG}`}>
        <div className="mb-10 text-center">
          <h2 className={LB_SECTION_TITLE}>{linkBuildingServices.title}</h2>
          <p className={`mx-auto mt-3 max-w-2xl ${LB_BODY}`}>{linkBuildingServices.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {linkBuildingServices.items.map((item) => {
            const Icon = item.icon as LucideIcon;
            return (
              <article key={item.title} className={LB_SERVICE_CARD}>
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F5F3FF]">
                  <Icon className="h-5 w-5 text-violet-600" strokeWidth={1.75} />
                </span>
                <h3 className={LB_CARD_TITLE}>{item.title}</h3>
                <p className={`mt-2 ${LB_CARD_BODY}`}>{item.desc}</p>
                <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-[#6B7280]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" strokeWidth={2.5} />
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
      <section className={`${LB_SECTION} ${LB_SECTION_PY} bg-white`}>
        <div className="mb-10 text-center">
          <h2 className={LB_SECTION_TITLE}>{linkBuildingProcess.title}</h2>
          <p className={`mx-auto mt-3 max-w-xl ${LB_BODY}`}>{linkBuildingProcess.subtitle}</p>
        </div>
        <div className="relative overflow-x-auto pb-2">
          <div className="relative flex min-w-[52rem] items-start justify-between sm:min-w-0">
            <div
              className="absolute left-[8%] right-[8%] top-[1.35rem] hidden border-t border-dashed border-violet-200 sm:block"
              aria-hidden
            />
            {linkBuildingProcess.steps.map((step) => {
              const Icon = step.icon as LucideIcon;
              return (
                <div
                  key={step.title}
                  className="relative z-10 flex w-[16%] min-w-[5rem] flex-col items-center text-center"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F3FF] sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 text-violet-600" strokeWidth={1.75} />
                  </span>
                  <p className="mt-2 text-xs font-bold text-violet-600 sm:text-sm">{step.num}</p>
                  <p className="mt-1 text-xs font-bold text-[#111827] sm:text-sm">{step.title}</p>
                  <p className="mt-1 text-[10px] leading-snug text-[#6B7280] sm:text-[11px]">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approaches */}
      <section className={`${LB_SECTION} ${LB_SECTION_PY} ${LB_ALT_BG}`}>
        <div className="mb-10 text-center">
          <h2 className={LB_SECTION_TITLE}>{linkBuildingApproaches.title}</h2>
          <p className={`mx-auto mt-3 max-w-xl ${LB_BODY}`}>{linkBuildingApproaches.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {linkBuildingApproaches.items.map((item) => {
            const Icon = item.icon as LucideIcon;
            return (
              <div key={item.label} className={LB_APPROACH_CARD}>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F5F3FF]">
                  <Icon className="h-4 w-4 text-violet-600" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-semibold text-[#111827]">{item.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose + Industries */}
      <section className={`${LB_SECTION} ${LB_SECTION_PY} bg-white`}>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className={LB_PANEL_CARD}>
            <h2 className={`mb-6 ${LB_SECTION_TITLE_LEFT}`}>{linkBuildingWhyChoose.title}</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {linkBuildingWhyChoose.items.map((item) => {
                const Icon = item.icon as LucideIcon;
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F5F3FF]">
                      <Icon className="h-5 w-5 text-violet-600" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-[#111827]">{item.label}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-[#6B7280]">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={LB_PANEL_CARD}>
            <h2 className={LB_SECTION_TITLE_LEFT}>{linkBuildingIndustries.title}</h2>
            <p className={`mt-2 mb-6 text-sm ${LB_BODY}`}>{linkBuildingIndustries.subtitle}</p>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
              {linkBuildingIndustries.items.map((ind) => {
                const Icon = ind.icon as LucideIcon;
                return (
                  <div key={ind.label} className="flex flex-col items-center gap-2 text-center">
                    <Icon className="h-6 w-6 text-violet-600" strokeWidth={1.75} />
                    <span className="text-[11px] font-semibold text-[#374151] sm:text-xs">{ind.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${LB_SECTION} ${LB_SECTION_PY} ${LB_ALT_BG}`}>
        <div className="mb-10 text-center">
          <h2 className={LB_SECTION_TITLE}>{linkBuildingFaq.title}</h2>
        </div>
        <SocialMediaFaqSection items={[...linkBuildingFaq.items]} />
      </section>

      {/* CTA — light purple */}
      <section className={`${LB_SECTION} ${LB_PAD} pb-14 sm:pb-16`}>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-100 via-violet-50 to-indigo-50 p-6 sm:rounded-3xl sm:p-8 lg:p-10">
          <div className="relative grid items-center gap-6 lg:grid-cols-[1fr_auto] lg:gap-10">
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-xl font-bold leading-tight text-[#111827] sm:text-2xl lg:text-[1.75rem]">
                {linkBuildingFinalCta.title}
              </h2>
              <p className="text-sm leading-relaxed text-[#6B7280] sm:text-base">{linkBuildingFinalCta.subtitle}</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-end">
              <Link href={HUBSPOT_MEETING_URL} target="_blank" rel="noopener noreferrer" className={LB_BTN_PRIMARY}>
                {linkBuildingFinalCta.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${LB_BTN_OUTLINE} gap-2`}
              >
                {linkBuildingFinalCta.ctaSecondary}
                <Calendar className="h-4 w-4 text-violet-600" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

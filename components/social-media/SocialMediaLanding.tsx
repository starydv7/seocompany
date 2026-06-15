import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Calendar, Check, Clock, Play } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import SocialMediaHeroDashboard from "@/components/social-media/SocialMediaHeroDashboard";
import SocialMediaFaqSection from "@/components/social-media/SocialMediaFaqSection";
import { SOCIAL_PLATFORM_ICONS } from "@/components/social-media/SocialPlatformIcons";
import {
  SMM_ALT_BG,
  SMM_BG,
  SMM_BODY,
  SMM_BTN_OUTLINE,
  SMM_BTN_PRIMARY,
  SMM_CARD_BODY,
  SMM_CARD_TITLE,
  SMM_CHECK,
  SMM_HERO_TITLE,
  SMM_PAD,
  SMM_PANEL_CARD,
  SMM_PLATFORM_CARD,
  SMM_SECTION,
  SMM_SECTION_PY,
  SMM_SECTION_TITLE,
  SMM_SECTION_TITLE_LEFT,
  SMM_SERVICE_CARD,
  SMM_TAG,
  SMM_TITLE_ACCENT,
} from "@/components/social-media/social-media-styles";
import {
  socialMediaFaq,
  socialMediaFinalCta,
  socialMediaHero,
  socialMediaIndustries,
  socialMediaPlatforms,
  socialMediaProcess,
  socialMediaServices,
  socialMediaWhyChoose,
} from "@/lib/social-media/social-media-content";

export default function SocialMediaLanding() {
  return (
    <div className={`min-h-screen w-full max-w-none ${SMM_BG}`}>
      {/* Hero */}
      <section className={`relative ${SMM_SECTION} bg-white pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pt-14`}>
        <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-12 xl:gap-16">
          <div className="min-w-0 space-y-5 lg:max-w-xl">
            <span className={SMM_TAG}>
              <Clock className="h-3.5 w-3.5 text-violet-600" strokeWidth={2} />
              {socialMediaHero.badge}
            </span>
            <h1 className={SMM_HERO_TITLE}>
              {socialMediaHero.titleBefore}{" "}
              <span className={SMM_TITLE_ACCENT}>{socialMediaHero.titleAccent}</span>
            </h1>
            <p className={SMM_BODY}>{socialMediaHero.subtitle}</p>
            <ul className="space-y-2.5">
              {socialMediaHero.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-[#374151]">
                  <span className={SMM_CHECK}>
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href={HUBSPOT_MEETING_URL} target="_blank" rel="noopener noreferrer" className={SMM_BTN_PRIMARY}>
                {socialMediaHero.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#services" className={`${SMM_BTN_OUTLINE} gap-2`}>
                {socialMediaHero.ctaSecondary}
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-violet-200 bg-violet-50">
                  <Play className="h-3 w-3 fill-violet-600 text-violet-600" />
                </span>
              </Link>
            </div>
          </div>
          <div className="min-w-0 w-full pb-8 sm:pb-10 lg:pb-14">
            <SocialMediaHeroDashboard />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className={`${SMM_SECTION} ${SMM_SECTION_PY} ${SMM_ALT_BG}`}>
        <div className="mb-10 text-center">
          <h2 className={SMM_SECTION_TITLE}>{socialMediaServices.title}</h2>
          <p className={`mx-auto mt-3 max-w-2xl ${SMM_BODY}`}>{socialMediaServices.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {socialMediaServices.items.map((item) => {
            const Icon = item.icon as LucideIcon;
            return (
              <article key={item.title} className={SMM_SERVICE_CARD}>
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F5F3FF]">
                  <Icon className="h-5 w-5 text-violet-600" strokeWidth={1.75} />
                </span>
                <h3 className={SMM_CARD_TITLE}>{item.title}</h3>
                <p className={`mt-2 ${SMM_CARD_BODY}`}>{item.desc}</p>
                <ul className="mt-4 space-y-2">
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
      <section className={`${SMM_SECTION} ${SMM_SECTION_PY} bg-white`}>
        <div className="mb-10 text-center">
          <h2 className={SMM_SECTION_TITLE}>{socialMediaProcess.title}</h2>
          <p className={`mx-auto mt-3 max-w-xl ${SMM_BODY}`}>{socialMediaProcess.subtitle}</p>
        </div>
        <div className="relative overflow-x-auto pb-2">
          <div className="relative flex min-w-[52rem] items-start justify-between sm:min-w-0">
            <div
              className="absolute left-[8%] right-[8%] top-[1.35rem] hidden border-t border-dashed border-violet-200 sm:block"
              aria-hidden
            />
            {socialMediaProcess.steps.map((step) => {
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

      {/* Platforms */}
      <section id="platforms" className={`${SMM_SECTION} ${SMM_SECTION_PY} ${SMM_ALT_BG}`}>
        <div className="mb-10 text-center">
          <h2 className={SMM_SECTION_TITLE}>{socialMediaPlatforms.title}</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7 lg:gap-4">
          {socialMediaPlatforms.platforms.map((name) => {
            const Icon = SOCIAL_PLATFORM_ICONS[name];
            return (
              <div key={name} className={SMM_PLATFORM_CARD}>
                {Icon ? <Icon className="h-10 w-10" /> : null}
                <span className="text-center text-xs font-semibold text-[#374151]">{name}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose + Industries */}
      <section className={`${SMM_SECTION} ${SMM_SECTION_PY} bg-white`}>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className={SMM_PANEL_CARD}>
            <h2 className={`mb-6 ${SMM_SECTION_TITLE_LEFT}`}>{socialMediaWhyChoose.title}</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {socialMediaWhyChoose.items.map((item) => {
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
          <div className={SMM_PANEL_CARD}>
            <h2 className={SMM_SECTION_TITLE_LEFT}>{socialMediaIndustries.title}</h2>
            <p className={`mt-2 mb-6 text-sm ${SMM_BODY}`}>{socialMediaIndustries.subtitle}</p>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
              {socialMediaIndustries.items.map((ind) => {
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
      <section className={`${SMM_SECTION} ${SMM_SECTION_PY} ${SMM_ALT_BG}`}>
        <div className="mb-10 text-center">
          <h2 className={SMM_SECTION_TITLE}>{socialMediaFaq.title}</h2>
        </div>
        <SocialMediaFaqSection items={[...socialMediaFaq.items]} />
      </section>

      {/* CTA */}
      <section className={`${SMM_SECTION} ${SMM_PAD} pb-14 sm:pb-16`}>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#4338ca] via-[#6366F1] to-[#5850EC] p-6 sm:rounded-3xl sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-8 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" aria-hidden />
          <div className="relative grid items-center gap-6 lg:grid-cols-[1fr_auto] lg:gap-10">
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-xl font-bold leading-tight text-white sm:text-2xl lg:text-[1.75rem]">
                {socialMediaFinalCta.title}
              </h2>
              <p className="text-sm leading-relaxed text-indigo-100 sm:text-base">{socialMediaFinalCta.subtitle}</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-end">
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-violet-700 shadow-lg transition hover:bg-violet-50"
              >
                {socialMediaFinalCta.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                {socialMediaFinalCta.ctaSecondary}
                <Calendar className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

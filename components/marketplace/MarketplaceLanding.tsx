import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Calendar, Check, Play, ShoppingBag } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import MarketplaceHeroDashboard from "@/components/marketplace/MarketplaceHeroDashboard";
import { MARKETPLACE_PLATFORM_ICONS } from "@/components/marketplace/MarketplacePlatformIcons";
import SocialMediaFaqSection from "@/components/social-media/SocialMediaFaqSection";
import {
  MP_ALT_BG,
  MP_BG,
  MP_BODY,
  MP_BTN_OUTLINE,
  MP_BTN_PRIMARY,
  MP_CARD_BODY,
  MP_CARD_TITLE,
  MP_CHECK,
  MP_HERO_TITLE,
  MP_PAD,
  MP_PANEL_CARD,
  MP_PLATFORM_CARD,
  MP_SECTION,
  MP_SECTION_PY,
  MP_SECTION_TITLE,
  MP_SECTION_TITLE_LEFT,
  MP_SERVICE_CARD,
  MP_TAG,
  MP_TITLE_ACCENT,
} from "@/components/marketplace/marketplace-styles";
import {
  marketplaceFaq,
  marketplaceFinalCta,
  marketplaceHero,
  marketplaceIndustries,
  marketplacePlatforms,
  marketplaceProcess,
  marketplaceServices,
  marketplaceWhyChoose,
} from "@/lib/marketplace/marketplace-content";

export default function MarketplaceLanding() {
  return (
    <div className={`min-h-screen w-full max-w-none ${MP_BG}`}>
      {/* Hero */}
      <section className={`relative ${MP_SECTION} bg-white pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pt-14`}>
        <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-12 xl:gap-16">
          <div className="min-w-0 space-y-5 lg:max-w-xl">
            <span className={MP_TAG}>
              <ShoppingBag className="h-3.5 w-3.5 text-orange-600" strokeWidth={2} />
              {marketplaceHero.badge}
            </span>
            <h1 className={MP_HERO_TITLE}>
              {marketplaceHero.titleBefore}{" "}
              <span className={MP_TITLE_ACCENT}>{marketplaceHero.titleAccent}</span>
            </h1>
            <p className={MP_BODY}>{marketplaceHero.subtitle}</p>
            <ul className="space-y-2">
              {marketplaceHero.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-[#374151]">
                  <span className={MP_CHECK}>
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href={HUBSPOT_MEETING_URL} target="_blank" rel="noopener noreferrer" className={MP_BTN_PRIMARY}>
                {marketplaceHero.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#services" className={`${MP_BTN_OUTLINE} gap-2`}>
                {marketplaceHero.ctaSecondary}
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-orange-200 bg-orange-50">
                  <Play className="h-3 w-3 fill-orange-600 text-orange-600" />
                </span>
              </Link>
            </div>
          </div>
          <div className="min-w-0 w-full">
            <MarketplaceHeroDashboard />
          </div>
        </div>
      </section>

      {/* Services 4x2 */}
      <section id="services" className={`${MP_SECTION} ${MP_SECTION_PY} ${MP_ALT_BG}`}>
        <div className="mb-10 text-center">
          <h2 className={MP_SECTION_TITLE}>{marketplaceServices.title}</h2>
          <p className={`mx-auto mt-3 max-w-2xl ${MP_BODY}`}>{marketplaceServices.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {marketplaceServices.items.map((item) => {
            const Icon = item.icon as LucideIcon;
            return (
              <article key={item.title} className={MP_SERVICE_CARD}>
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50">
                  <Icon className="h-5 w-5 text-orange-600" strokeWidth={1.75} />
                </span>
                <h3 className={MP_CARD_TITLE}>{item.title}</h3>
                <p className={`mt-2 ${MP_CARD_BODY}`}>{item.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-[#6B7280]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" strokeWidth={2.5} />
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
      <section className={`${MP_SECTION} ${MP_SECTION_PY} bg-white`}>
        <div className="mb-10 text-center">
          <h2 className={MP_SECTION_TITLE}>{marketplaceProcess.title}</h2>
          <p className={`mx-auto mt-3 max-w-xl ${MP_BODY}`}>{marketplaceProcess.subtitle}</p>
        </div>
        <div className="relative overflow-x-auto pb-2">
          <div className="relative flex min-w-[52rem] items-start justify-between sm:min-w-0">
            <div
              className="absolute left-[8%] right-[8%] top-[1.35rem] hidden border-t border-dashed border-orange-200 sm:block"
              aria-hidden
            />
            {marketplaceProcess.steps.map((step) => {
              const Icon = step.icon as LucideIcon;
              return (
                <div
                  key={step.title}
                  className="relative z-10 flex w-[16%] min-w-[5rem] flex-col items-center text-center"
                >
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full sm:h-12 sm:w-12"
                    style={{ backgroundColor: `${step.color}18` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: step.color }} strokeWidth={1.75} />
                  </span>
                  <p className="mt-2 text-xs font-bold" style={{ color: step.color }}>
                    {step.num}
                  </p>
                  <p className="mt-1 text-xs font-bold text-[#111827] sm:text-sm">{step.title}</p>
                  <p className="mt-1 text-[10px] leading-snug text-[#6B7280] sm:text-[11px]">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose + Marketplaces + Industries — 3 column on xl */}
      <section className={`${MP_SECTION} ${MP_SECTION_PY} ${MP_ALT_BG}`}>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          <div className={MP_PANEL_CARD}>
            <h2 className={`mb-6 ${MP_SECTION_TITLE_LEFT}`}>{marketplaceWhyChoose.title}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {marketplaceWhyChoose.items.map((item) => {
                const Icon = item.icon as LucideIcon;
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-50">
                      <Icon className="h-4 w-4 text-violet-600" strokeWidth={1.75} />
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
          <div className={MP_PANEL_CARD}>
            <h2 className={`mb-6 ${MP_SECTION_TITLE_LEFT}`}>{marketplacePlatforms.title}</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {marketplacePlatforms.platforms.map((name) => {
                const Icon = MARKETPLACE_PLATFORM_ICONS[name];
                return (
                  <div key={name} className={MP_PLATFORM_CARD}>
                    {Icon ? <Icon className="h-10 w-10" /> : null}
                    <span className="text-center text-xs font-semibold text-[#374151]">{name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={`${MP_PANEL_CARD} lg:col-span-2 xl:col-span-1`}>
            <h2 className={`mb-6 ${MP_SECTION_TITLE_LEFT}`}>{marketplaceIndustries.title}</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {marketplaceIndustries.items.map((ind) => {
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
      <section className={`${MP_SECTION} ${MP_SECTION_PY} bg-white`}>
        <div className="mb-10 text-center">
          <h2 className={MP_SECTION_TITLE}>{marketplaceFaq.title}</h2>
        </div>
        <SocialMediaFaqSection items={[...marketplaceFaq.items]} />
      </section>

      {/* CTA */}
      <section className={`${MP_SECTION} ${MP_PAD} pb-14 sm:pb-16`}>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#4338ca] via-[#6366F1] to-[#5850EC] p-6 sm:rounded-3xl sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-8 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" aria-hidden />
          <div className="relative grid items-center gap-6 lg:grid-cols-[1fr_auto] lg:gap-10">
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-xl font-bold leading-tight text-white sm:text-2xl lg:text-[1.75rem]">
                {marketplaceFinalCta.title}
              </h2>
              <p className="text-sm leading-relaxed text-indigo-100 sm:text-base">{marketplaceFinalCta.subtitle}</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-end">
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-violet-700 shadow-lg transition hover:bg-violet-50"
              >
                {marketplaceFinalCta.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                {marketplaceFinalCta.ctaSecondary}
                <Calendar className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

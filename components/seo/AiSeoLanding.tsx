import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import Reveal from "@/components/Reveal";
import AiSeoEvolutionSection from "@/components/seo/AiSeoEvolutionSection";
import AiSeoFaqCtaSection from "@/components/seo/AiSeoFaqCtaSection";
import AiSeoHeroDiagram from "@/components/seo/AiSeoHeroDiagram";
import AiSeoProblemsSection from "@/components/seo/AiSeoProblemsSection";
import AiSeoServicesSection from "@/components/seo/AiSeoServicesSection";
import AiSeoVisibilitySection from "@/components/seo/AiSeoVisibilitySection";
import AiSeoWhatWhySection from "@/components/seo/AiSeoWhatWhySection";
import OffWhiteSparkleBg from "@/components/seo/OffWhiteSparkleBg";
import { AI_HERO_TITLE, AI_LABEL_PURPLE } from "@/components/seo/ai-seo-styles";
import { aiSeoHero } from "@/lib/seo/ai-seo-content";

const HERO_PAD = "w-full p-[2%]";

export default function AiSeoLanding() {
  const {
    badge,
    title,
    subtitle,
    primaryCta,
    secondaryCta,
    secondaryHref,
    trustLabel,
    brands,
  } = aiSeoHero;

  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-900">
      <OffWhiteSparkleBg />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_78%_42%,rgba(196,181,253,0.28),transparent_62%)]"
      />

      <div className="relative">
        {/* 1. Hero */}
        <section className={`relative isolate overflow-hidden ${HERO_PAD} pb-8 pt-10 sm:pb-12 sm:pt-14 lg:pb-14 lg:pt-16`}>
          <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-x-[6%] lg:gap-y-0">
            <Reveal className="flex min-w-0 flex-col justify-center">
              <div className="flex w-full flex-col gap-5 sm:gap-6">
                <p
                  className={`inline-flex w-fit items-center gap-2 rounded-full border border-violet-200/90 bg-violet-50 px-4 py-1.5 text-[10px] tracking-[0.2em] ${AI_LABEL_PURPLE}`}
                >
                  <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#7c3aed]" strokeWidth={2.5} />
                  {badge}
                </p>
                <h1 className={`${AI_HERO_TITLE} text-[1.7rem] sm:text-[2.15rem] lg:text-[2.5rem] xl:text-[2.65rem]`}>
                  {title}
                </h1>
                <p className="max-w-[50ch] text-left text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                  {subtitle}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href={HUBSPOT_MEETING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-300/40 transition hover:bg-violet-700 sm:w-auto"
                  >
                    {primaryCta}
                    <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.5} />
                  </Link>
                  <Link
                    href={secondaryHref}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm sm:w-auto"
                  >
                    {secondaryCta}
                    <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.5} />
                  </Link>
                </div>
                <div className="border-t border-slate-100/80 pt-5">
                  <p className="text-left text-xs text-slate-500">{trustLabel}</p>
                  <ul className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-8">
                    {brands.map((brand) => (
                      <li key={brand} className="text-[13px] font-bold text-slate-400 sm:text-sm">
                        {brand}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="flex w-full justify-center lg:justify-end">
              <div className="w-full lg:max-w-[34rem]">
                <AiSeoHeroDiagram />
              </div>
            </Reveal>
          </div>
        </section>

        <div className="relative z-10">
          <AiSeoEvolutionSection />
        </div>
        <AiSeoWhatWhySection />
        <AiSeoVisibilitySection />
        <AiSeoServicesSection />
        <AiSeoProblemsSection />
        <AiSeoFaqCtaSection />
      </div>
    </div>
  );
}

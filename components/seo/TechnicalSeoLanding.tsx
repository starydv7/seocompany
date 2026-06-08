import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Zap } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import Reveal from "@/components/Reveal";
import TechnicalBottomSection from "@/components/seo/TechnicalBottomSection";
import TechnicalEnterpriseProcess from "@/components/seo/TechnicalEnterpriseProcess";
import TechnicalHeroDashboard from "@/components/seo/TechnicalHeroDashboard";
import TechnicalIssuesSection from "@/components/seo/TechnicalIssuesSection";
import TechnicalProblemsRow from "@/components/seo/TechnicalProblemsRow";
import TechnicalServicesSection from "@/components/seo/TechnicalServicesSection";
import TechnicalWhatWhySection from "@/components/seo/TechnicalWhatWhySection";
import {
  TECH_BTN_OUTLINE,
  TECH_BTN_PRIMARY,
  TECH_HERO_BG,
  TECH_HERO_TITLE,
  TECH_PAD,
  TECH_TITLE_GRADIENT,
} from "@/components/seo/technical-seo-styles";
import { technicalHero } from "@/lib/seo/technical-seo-content";

export default function TechnicalSeoLanding() {
  const {
    eyebrow,
    titleLine1,
    titleLine2,
    paragraph1,
    paragraph2,
    features,
    primaryCta,
    secondaryCta,
    secondaryHref,
  } = technicalHero;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section
        className={`relative overflow-hidden ${TECH_HERO_BG} ${TECH_PAD} pb-16 pt-10 sm:pb-20 sm:pt-14`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_70%_42%,rgba(124,58,237,0.22),transparent_68%)]"
        />

        <div className="relative grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-x-[6%]">
          <Reveal className="min-w-0 lg:max-w-[34rem]">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#5b21b6]/80 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
              <Zap className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
              {eyebrow}
            </p>

            <h1 className={`${TECH_HERO_TITLE} mt-6`}>
              <span className="block text-[1.55rem] leading-[1.18] sm:text-[2rem] lg:text-[2.2rem]">
                {titleLine1}
              </span>
              <span
                className={`${TECH_TITLE_GRADIENT} mt-1 text-[1.85rem] sm:text-[2.35rem] lg:text-[2.65rem]`}
              >
                {titleLine2}
              </span>
            </h1>

            <div className="mt-6 max-w-[54ch] space-y-4 text-sm leading-[1.7] text-white/90 sm:text-[15px]">
              <p>{paragraph1}</p>
              <p>{paragraph2}</p>
            </div>

            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              {features.map((f) => {
                const Icon = f.icon as LucideIcon;
                return (
                  <li
                    key={f.label}
                    className="flex items-center gap-2 text-[11px] font-medium text-white sm:text-xs"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-600/90 shadow-sm shadow-violet-900/50">
                      <Icon className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
                    </span>
                    {f.label}
                  </li>
                );
              })}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={TECH_BTN_PRIMARY}
              >
                {primaryCta}
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
              <Link href={secondaryHref} className={TECH_BTN_OUTLINE}>
                {secondaryCta}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="w-full min-w-0">
            <TechnicalHeroDashboard />
          </Reveal>
        </div>
      </section>

      <TechnicalIssuesSection />
      <TechnicalWhatWhySection />
      <TechnicalServicesSection />
      <TechnicalProblemsRow />
      <TechnicalEnterpriseProcess />
      <TechnicalBottomSection />
    </div>
  );
}

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import Reveal from "@/components/Reveal";
import EnterpriseDmAnalyticsSection from "@/components/digital-marketing/EnterpriseDmAnalyticsSection";
import EnterpriseDmChallengesSection from "@/components/digital-marketing/EnterpriseDmChallengesSection";
import EnterpriseDmFaqSection from "@/components/digital-marketing/EnterpriseDmFaqSection";
import EnterpriseDmFinalCtaSection from "@/components/digital-marketing/EnterpriseDmFinalCtaSection";
import EnterpriseDmHeroDashboard from "@/components/digital-marketing/EnterpriseDmHeroDashboard";
import EnterpriseDmIndustriesSection from "@/components/digital-marketing/EnterpriseDmIndustriesSection";
import EnterpriseDmProcessSection from "@/components/digital-marketing/EnterpriseDmProcessSection";
import EnterpriseDmServicesSection from "@/components/digital-marketing/EnterpriseDmServicesSection";
import EnterpriseDmWhySection from "@/components/digital-marketing/EnterpriseDmWhySection";
import {
  EDM_BTN_OUTLINE,
  EDM_BTN_PRIMARY,
  EDM_HERO_BG,
  EDM_HERO_TITLE,
  EDM_PAD,
  EDM_TITLE_GRADIENT,
} from "@/components/digital-marketing/enterprise-dm-styles";
import { enterpriseDmHero } from "@/lib/digital-marketing/enterprise-content";

export default function EnterpriseDmLanding() {
  const {
    badge,
    titleLine1,
    titleAccent,
    subtitle,
    features,
    primaryCta,
    secondaryCta,
    secondaryHref,
  } = enterpriseDmHero;

  return (
    <div className="min-h-screen w-full max-w-none bg-white">
      <section
        className={`relative w-full max-w-none overflow-hidden ${EDM_HERO_BG} ${EDM_PAD} pb-16 pt-10 sm:pb-20 sm:pt-14`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_75%_40%,rgba(139,92,246,0.2),transparent_65%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_20%_80%,rgba(59,130,246,0.08),transparent_55%)]"
        />

        <div className="relative grid w-full max-w-none grid-cols-1 items-center gap-10 xl:grid-cols-2 xl:gap-x-[4%]">
          <Reveal className="min-w-0 w-full">
            <p className="inline-flex rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-300">
              {badge}
            </p>

            <h1 className={`${EDM_HERO_TITLE} mt-6`}>
              <span className="block text-[1.45rem] leading-[1.2] sm:text-[1.85rem] lg:text-[2.1rem]">
                {titleLine1}
              </span>
              <span
                className={`${EDM_TITLE_GRADIENT} mt-1 text-[1.65rem] sm:text-[2rem] lg:text-[2.35rem]`}
              >
                {titleAccent}
              </span>
            </h1>

            <p className="mt-6 w-full text-sm leading-[1.75] text-slate-300 sm:text-[15px]">
              {subtitle}
            </p>

            <ul className="mt-7 grid w-full grid-cols-2 gap-x-6 gap-y-4">
              {features.map((f) => {
                const Icon = f.icon as LucideIcon;
                return (
                  <li
                    key={f.label}
                    className="flex items-center gap-2.5 text-[11px] font-medium text-slate-200 sm:text-xs"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-violet-400/40 bg-violet-500/15">
                      <Icon className="h-4 w-4 text-violet-300" strokeWidth={2} />
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
                className={EDM_BTN_PRIMARY}
              >
                {primaryCta}
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
              <Link href={secondaryHref} className={EDM_BTN_OUTLINE}>
                {secondaryCta}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="w-full min-w-0">
            <EnterpriseDmHeroDashboard />
          </Reveal>
        </div>
      </section>

      <EnterpriseDmWhySection />
      <EnterpriseDmServicesSection />
      <EnterpriseDmChallengesSection />
      <EnterpriseDmIndustriesSection />
      <EnterpriseDmProcessSection />
      <EnterpriseDmAnalyticsSection />
      <EnterpriseDmFaqSection />
      <EnterpriseDmFinalCtaSection />
    </div>
  );
}

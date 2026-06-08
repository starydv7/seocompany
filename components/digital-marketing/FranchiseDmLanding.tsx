import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import Reveal from "@/components/Reveal";
import FranchiseDmChallengesSection from "@/components/digital-marketing/FranchiseDmChallengesSection";
import FranchiseDmFaqSection from "@/components/digital-marketing/FranchiseDmFaqSection";
import FranchiseDmFinalCtaSection from "@/components/digital-marketing/FranchiseDmFinalCtaSection";
import FranchiseDmHeroDashboard from "@/components/digital-marketing/FranchiseDmHeroDashboard";
import FranchiseDmMarketSection from "@/components/digital-marketing/FranchiseDmMarketSection";
import FranchiseDmProcessSection from "@/components/digital-marketing/FranchiseDmProcessSection";
import FranchiseDmServicesSection from "@/components/digital-marketing/FranchiseDmServicesSection";
import FranchiseDmStatsBar from "@/components/digital-marketing/FranchiseDmStatsBar";
import {
  FDM_BTN_OUTLINE,
  FDM_BTN_PRIMARY,
  FDM_HERO_BG,
  FDM_HERO_TITLE,
  FDM_PAD,
  FDM_TAG,
  FDM_TITLE_GRADIENT,
} from "@/components/digital-marketing/franchise-dm-styles";
import { franchiseDmHero } from "@/lib/digital-marketing/franchise-dm-content";

export default function FranchiseDmLanding() {
  const {
    badge,
    titleLine1,
    titleAccent,
    subtitle,
    features,
    primaryCta,
    secondaryCta,
    secondaryHref,
  } = franchiseDmHero;

  return (
    <div className="min-h-screen w-full max-w-none bg-white">
      <section
        className={`relative w-full max-w-none overflow-hidden ${FDM_HERO_BG} ${FDM_PAD} pb-4 pt-10 sm:pt-14`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_85%_35%,rgba(167,139,250,0.15),transparent_65%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_10%_70%,rgba(99,102,241,0.06),transparent_55%)]"
        />

        <div className="relative grid w-full max-w-none grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-x-[5%]">
          <Reveal className="w-full min-w-0">
            <p className={FDM_TAG}>{badge}</p>

            <h1 className={`${FDM_HERO_TITLE} mt-6 text-[1.75rem] leading-[1.2] sm:text-[2.1rem] lg:text-[2.5rem]`}>
              {titleLine1}{" "}
              <span className={FDM_TITLE_GRADIENT}>{titleAccent}</span>
            </h1>

            <p className="mt-5 text-sm leading-[1.75] text-slate-600 sm:mt-6 sm:text-[15px]">
              {subtitle}
            </p>

            <ul className="mt-7 grid w-full grid-cols-2 gap-x-4 gap-y-3 sm:gap-x-6 sm:gap-y-4">
              {features.map((f) => {
                const Icon = f.icon as LucideIcon;
                return (
                  <li
                    key={f.label}
                    className="flex items-center gap-2.5 text-[11px] font-medium text-slate-700 sm:text-xs"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-50">
                      <Icon className="h-4 w-4 text-violet-600" strokeWidth={2} />
                    </span>
                    <span className="leading-snug">{f.label}</span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={FDM_BTN_PRIMARY}
              >
                {primaryCta}
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
              <Link href={secondaryHref} className={FDM_BTN_OUTLINE}>
                {secondaryCta}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex w-full min-w-0 items-center justify-center">
            <FranchiseDmHeroDashboard />
          </Reveal>
        </div>
      </section>

      <FranchiseDmStatsBar />
      <FranchiseDmServicesSection />
      <FranchiseDmMarketSection />
      <FranchiseDmChallengesSection />
      <FranchiseDmProcessSection />
      <FranchiseDmFinalCtaSection />
      <FranchiseDmFaqSection />
    </div>
  );
}

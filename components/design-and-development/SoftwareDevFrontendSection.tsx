import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check, Code2, Play } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import FrontendDevHeroVisual from "@/components/design-and-development/FrontendDevHeroVisual";
import {
  SectionHeading,
  ServiceSectionShell,
} from "@/components/design-and-development/ServiceSectionShell";
import type { ServiceSectionVariant } from "@/components/design-and-development/software-dev-styles";
import {
  FDM_BTN_OUTLINE,
  FDM_BTN_PRIMARY,
  FDM_CHECK,
  FDM_FONT_DISPLAY,
  FDM_FONT_GRADIENT,
  FDM_FONT_LEAD,
  FDM_FONT_LIST,
  FDM_FONT_TEAL,
  FDM_TAG,
} from "@/components/design-and-development/frontend-dev-styles";
import { frontendDevHero } from "@/lib/design-and-development/frontend-dev-content";

type Props = { variant?: ServiceSectionVariant };

export default function SoftwareDevFrontendSection({ variant = "card" }: Props) {
  return (
    <ServiceSectionShell variant={variant} id="frontend-development">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-[8%] top-[6%] h-[45%] w-[42%] rounded-full bg-teal-100/45 blur-3xl" />
        <div className="absolute -right-[6%] top-[14%] h-[40%] w-[38%] rounded-full bg-emerald-100/35 blur-3xl" />
        <div
          className="absolute right-[4%] top-[10%] h-[50%] w-[26%] opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, #99f6e4 1.2px, transparent 1.2px)",
            backgroundSize: "14px 14px",
          }}
        />
      </div>

      <div className="relative grid w-full items-start gap-[2%] lg:grid-cols-2 lg:items-center">
        <div className="min-w-0 space-y-4 sm:space-y-5">
          <span className={FDM_TAG}>
            <Code2 className="h-3.5 w-3.5 text-teal-600" strokeWidth={2.5} />
            {frontendDevHero.badge}
          </span>

          <SectionHeading variant={variant} className={FDM_FONT_DISPLAY}>
            <span className="block">{frontendDevHero.titleBefore}</span>
            <span className="mt-0.5 block">
              <span className="relative inline-block">
                <span className={FDM_FONT_TEAL}>{frontendDevHero.titleTeal}</span>
                <svg
                  className="absolute -bottom-0.5 left-0 w-full"
                  viewBox="0 0 120 6"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 4 C30 1, 60 5, 118 2"
                    fill="none"
                    stroke="#14b8a6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              <span className={FDM_FONT_GRADIENT}>{frontendDevHero.titleGradient}</span>
            </span>
          </SectionHeading>

          <p className={FDM_FONT_LEAD}>{frontendDevHero.subtitle}</p>

          <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {frontendDevHero.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className={FDM_CHECK}>
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
                <span className={FDM_FONT_LIST}>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={FDM_BTN_PRIMARY}
            >
              {frontendDevHero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${FDM_BTN_OUTLINE} gap-2`}
            >
              {frontendDevHero.ctaSecondary}
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-teal-200 bg-teal-50">
                <Play className="h-3 w-3 fill-teal-600 text-teal-600" />
              </span>
            </Link>
          </div>
        </div>

        <div className="min-w-0 lg:min-h-[30rem]">
          <FrontendDevHeroVisual />
        </div>
      </div>

      <div className="relative mt-[2%] grid grid-cols-2 gap-4 border-t border-slate-100 pt-[2%] sm:grid-cols-4 sm:gap-6">
        {frontendDevHero.features.map((feat) => {
          const Icon = feat.icon as LucideIcon;
          return (
            <div key={feat.label} className="flex items-center gap-2.5 sm:gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 sm:h-10 sm:w-10">
                <Icon className="h-4 w-4 text-teal-600 sm:h-[18px] sm:w-[18px]" strokeWidth={2} />
              </span>
              <span className="text-sm font-semibold text-slate-800">{feat.label}</span>
            </div>
          );
        })}
      </div>
    </ServiceSectionShell>
  );
}

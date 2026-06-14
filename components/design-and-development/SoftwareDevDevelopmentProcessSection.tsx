import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check, PenTool, Play } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import DevelopmentProcessHeroVisual from "@/components/design-and-development/DevelopmentProcessHeroVisual";
import {
  SectionHeading,
  ServiceSectionShell,
} from "@/components/design-and-development/ServiceSectionShell";
import type { ServiceSectionVariant } from "@/components/design-and-development/software-dev-styles";
import {
  DPM_BG,
  DPM_BTN_OUTLINE,
  DPM_BTN_PRIMARY,
  DPM_CHECK,
  DPM_FONT_DISPLAY,
  DPM_FONT_GRADIENT,
  DPM_FONT_LEAD,
  DPM_FONT_LIST,
  DPM_TAG,
  DPM_TRUST_CARD,
} from "@/components/design-and-development/development-process-styles";
import { developmentProcessHero } from "@/lib/design-and-development/development-process-content";

type Props = { variant?: ServiceSectionVariant };

export default function SoftwareDevDevelopmentProcessSection({ variant = "card" }: Props) {
  return (
    <ServiceSectionShell
      variant={variant}
      id="development-process"
      shellClassName={DPM_BG}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-[8%] top-[6%] h-[45%] w-[42%] rounded-full bg-violet-100/35 blur-3xl" />
        <div className="absolute -right-[6%] top-[14%] h-[40%] w-[38%] rounded-full bg-indigo-100/30 blur-3xl" />
        <div
          className="absolute right-[4%] top-[10%] h-[45%] w-[28%] opacity-[0.18]"
          style={{
            backgroundImage: "radial-gradient(circle, #c4b5fd 1.2px, transparent 1.2px)",
            backgroundSize: "14px 14px",
          }}
        />
      </div>

      <div className="relative grid w-full items-start gap-[2%] lg:grid-cols-2 lg:items-start">
        <div className="min-w-0 space-y-4 sm:space-y-5 lg:pt-0">
          <span className={DPM_TAG}>
            <PenTool className="h-3.5 w-3.5 text-violet-600" strokeWidth={2.5} />
            {developmentProcessHero.badge}
          </span>

          <SectionHeading variant={variant} className={DPM_FONT_DISPLAY}>
            <span className="block">{developmentProcessHero.titleBefore}</span>
            <span className="mt-1 block text-[clamp(1.2rem,2.6vw,1.75rem)] font-bold leading-tight">
              {developmentProcessHero.gradientLines.map((line) => (
                <span key={line} className={`block ${DPM_FONT_GRADIENT}`}>
                  {line}
                </span>
              ))}
            </span>
          </SectionHeading>

          <p className={DPM_FONT_LEAD}>{developmentProcessHero.subtitle}</p>

          <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {developmentProcessHero.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className={DPM_CHECK}>
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
                <span className={DPM_FONT_LIST}>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={DPM_BTN_PRIMARY}
            >
              {developmentProcessHero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${DPM_BTN_OUTLINE} gap-2`}
            >
              {developmentProcessHero.ctaSecondary}
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-violet-200 bg-violet-50">
                <Play className="h-3 w-3 fill-violet-600 text-violet-600" />
              </span>
            </Link>
          </div>
        </div>

        <div className="min-w-0 self-start lg:pl-[2%]">
          <DevelopmentProcessHeroVisual />
        </div>
      </div>

      <div className="relative mt-[2%] grid grid-cols-2 gap-3 border-t border-violet-100/80 pt-[2%] sm:grid-cols-4 sm:gap-4">
        {developmentProcessHero.trust.map((item) => {
          const Icon = item.icon as LucideIcon;
          return (
            <div key={item.label} className={DPM_TRUST_CARD}>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-50 sm:h-9 sm:w-9">
                <Icon className="h-4 w-4 text-violet-600" strokeWidth={2} />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-bold text-slate-800 sm:text-[11px]">{item.label}</p>
                <p className="text-[8px] text-slate-500 sm:text-[9px]">{item.sub}</p>
              </div>
            </div>
          );
        })}
      </div>
    </ServiceSectionShell>
  );
}

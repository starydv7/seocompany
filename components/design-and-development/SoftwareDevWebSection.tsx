import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check, Globe } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import WebDevHeroBrowser from "@/components/design-and-development/WebDevHeroBrowser";
import {
  SectionHeading,
  ServiceSectionShell,
} from "@/components/design-and-development/ServiceSectionShell";
import type { ServiceSectionVariant } from "@/components/design-and-development/software-dev-styles";
import {
  WDM_BTN_OUTLINE,
  WDM_BTN_PRIMARY,
  WDM_CHECK,
  WDM_FONT_DISPLAY,
  WDM_FONT_GRADIENT,
  WDM_FONT_LEAD,
  WDM_FONT_LIST,
  WDM_TAG,
} from "@/components/design-and-development/web-dev-styles";
import { webDevHero } from "@/lib/design-and-development/web-dev-content";

type Props = { variant?: ServiceSectionVariant };

export default function SoftwareDevWebSection({ variant = "card" }: Props) {
  return (
    <ServiceSectionShell variant={variant} id="web-development">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -left-[10%] top-[5%] h-[50%] w-[45%] rounded-full bg-violet-100/40 blur-3xl" />
        <div className="absolute -right-[8%] top-[10%] h-[45%] w-[40%] rounded-full bg-blue-100/35 blur-3xl" />
        <div
          className="absolute right-[2%] top-[8%] h-[55%] w-[28%] opacity-25"
          style={{
            backgroundImage: "radial-gradient(circle, #c4b5fd 1.2px, transparent 1.2px)",
            backgroundSize: "14px 14px",
          }}
        />
      </div>

      <div className="relative grid w-full items-start gap-[2%] lg:grid-cols-2 lg:items-center">
        <div className="min-w-0 space-y-4 sm:space-y-5">
          <span className={WDM_TAG}>
            <Globe className="h-3.5 w-3.5 text-violet-600" strokeWidth={2.5} />
            {webDevHero.badge}
          </span>

          <SectionHeading variant={variant} className={WDM_FONT_DISPLAY}>
            <span className="block">{webDevHero.titleBefore}</span>
            <span className="relative mt-0.5 inline-block">
              <span className={WDM_FONT_GRADIENT}>{webDevHero.titleAccent}</span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 6 C50 2, 100 8, 198 3"
                  fill="none"
                  stroke="url(#sdm-web-underline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="sdm-web-underline" x1="0" y1="0" x2="200" y2="0">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </SectionHeading>

          <p className={WDM_FONT_LEAD}>{webDevHero.subtitle}</p>

          <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {webDevHero.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className={WDM_CHECK}>
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
                <span className={WDM_FONT_LIST}>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={WDM_BTN_PRIMARY}
            >
              {webDevHero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={HUBSPOT_MEETING_URL} target="_blank" rel="noopener noreferrer" className={WDM_BTN_OUTLINE}>
              {webDevHero.ctaSecondary}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="min-w-0">
          <WebDevHeroBrowser />
        </div>
      </div>

      <div className="relative mt-[2%] grid grid-cols-2 gap-4 border-t border-slate-100 pt-[2%] sm:grid-cols-4 sm:gap-6">
        {webDevHero.features.map((feat) => {
          const Icon = feat.icon as LucideIcon;
          return (
            <div key={feat.label} className="flex items-center gap-2.5 sm:gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-50 sm:h-10 sm:w-10">
                <Icon className="h-4 w-4 text-violet-600 sm:h-[18px] sm:w-[18px]" strokeWidth={2} />
              </span>
              <span className="text-sm font-semibold text-slate-800">{feat.label}</span>
            </div>
          );
        })}
      </div>
    </ServiceSectionShell>
  );
}

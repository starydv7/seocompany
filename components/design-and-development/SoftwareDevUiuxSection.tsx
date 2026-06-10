import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check, Palette, Play } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import UiuxDevHeroDashboard from "@/components/design-and-development/UiuxDevHeroDashboard";
import { UIUX_TOOL_ICONS } from "@/components/design-and-development/UiuxToolIcons";
import {
  SectionHeading,
  ServiceSectionShell,
} from "@/components/design-and-development/ServiceSectionShell";
import type { ServiceSectionVariant } from "@/components/design-and-development/software-dev-styles";
import {
  UDM_BTN_OUTLINE,
  UDM_BTN_PRIMARY,
  UDM_CHECK,
  UDM_FEATURE_CARD,
  UDM_FONT_DISPLAY,
  UDM_FONT_GRADIENT,
  UDM_FONT_LEAD,
  UDM_FONT_LIST,
  UDM_TAG,
} from "@/components/design-and-development/uiux-dev-styles";
import { uiuxDevHero } from "@/lib/design-and-development/uiux-dev-content";

type Props = { variant?: ServiceSectionVariant };

export default function SoftwareDevUiuxSection({ variant = "card" }: Props) {
  return (
    <ServiceSectionShell variant={variant} id="ui-ux-design">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-[8%] top-[6%] h-[45%] w-[42%] rounded-full bg-pink-100/40 blur-3xl" />
        <div className="absolute -right-[6%] top-[12%] h-[40%] w-[38%] rounded-full bg-violet-100/35 blur-3xl" />
        <div
          className="absolute right-[3%] top-[8%] h-[50%] w-[26%] opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, #f0abfc 1.2px, transparent 1.2px)",
            backgroundSize: "14px 14px",
          }}
        />
      </div>

      <div className="relative grid w-full items-start gap-[2%] lg:grid-cols-[minmax(0,38%)_minmax(0,62%)]">
        <div className="min-w-0 space-y-4 sm:space-y-5">
          <span className={UDM_TAG}>
            <Palette className="h-3.5 w-3.5 text-violet-600" strokeWidth={2.5} />
            {uiuxDevHero.badge}
          </span>

          <SectionHeading variant={variant} className={UDM_FONT_DISPLAY}>
            <span className="block">{uiuxDevHero.titleBefore}</span>
            <span className="relative mt-0.5 inline-block">
              <span className={UDM_FONT_GRADIENT}>{uiuxDevHero.titleAccent}</span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 6 C50 2, 100 8, 198 3"
                  fill="none"
                  stroke="url(#sdm-uiux-underline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="sdm-uiux-underline" x1="0" y1="0" x2="200" y2="0">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </SectionHeading>

          <p className={UDM_FONT_LEAD}>{uiuxDevHero.subtitle}</p>

          <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {uiuxDevHero.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className={UDM_CHECK}>
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
                <span className={UDM_FONT_LIST}>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={UDM_BTN_PRIMARY}
            >
              {uiuxDevHero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${UDM_BTN_OUTLINE} gap-2`}
            >
              {uiuxDevHero.ctaSecondary}
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-violet-200 bg-violet-50">
                <Play className="h-3 w-3 fill-violet-600 text-violet-600" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 sm:grid-cols-4 sm:gap-2.5">
            {uiuxDevHero.features.map((feat) => {
              const Icon = feat.icon as LucideIcon;
              return (
                <div key={feat.label} className={UDM_FEATURE_CARD}>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-50 sm:h-9 sm:w-9">
                    <Icon className="h-4 w-4 text-violet-600" strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold text-slate-800 sm:text-[11px]">{feat.label}</p>
                    <p className="text-[8px] text-slate-500 sm:text-[9px]">{feat.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="min-w-0">
          <UiuxDevHeroDashboard />
        </div>
      </div>

      <div className="relative mt-[2%] rounded-xl border border-slate-100 bg-white px-4 py-3.5 shadow-[0_4px_20px_rgba(15,23,42,0.06)] sm:px-5 sm:py-4">
        <p className="mb-3 text-center text-[10px] font-bold uppercase tracking-wider text-slate-700 sm:text-xs">
          Tools We Use
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:gap-x-5">
          {uiuxDevHero.designSystem.tools.map((tool) => {
            const Icon = UIUX_TOOL_ICONS[tool as keyof typeof UIUX_TOOL_ICONS];
            return (
              <div key={tool} className="flex items-center gap-1.5">
                {Icon ? <Icon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" /> : null}
                <span className="text-[10px] font-semibold text-slate-600 sm:text-xs">{tool}</span>
              </div>
            );
          })}
        </div>
      </div>
    </ServiceSectionShell>
  );
}

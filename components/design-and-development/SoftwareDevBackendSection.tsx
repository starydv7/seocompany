import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check, Play, Shield } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import BackendDevHeroDashboard from "@/components/design-and-development/BackendDevHeroDashboard";
import { BACKEND_TECH_ICONS } from "@/components/design-and-development/BackendTechIcons";
import {
  SectionHeading,
  ServiceSectionShell,
} from "@/components/design-and-development/ServiceSectionShell";
import type { ServiceSectionVariant } from "@/components/design-and-development/software-dev-styles";
import {
  BDM_BTN_OUTLINE,
  BDM_BTN_PRIMARY,
  BDM_CHECK,
  BDM_FONT_ACCENT,
  BDM_FONT_DISPLAY,
  BDM_FONT_LEAD,
  BDM_FONT_LIST,
  BDM_TAG,
} from "@/components/design-and-development/backend-dev-styles";
import { backendDevHero } from "@/lib/design-and-development/backend-dev-content";

type Props = { variant?: ServiceSectionVariant };

export default function SoftwareDevBackendSection({ variant = "card" }: Props) {
  return (
    <ServiceSectionShell variant={variant} id="backend-development">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-[8%] top-[6%] h-[45%] w-[42%] rounded-full bg-orange-100/40 blur-3xl" />
        <div className="absolute -right-[6%] top-[12%] h-[40%] w-[38%] rounded-full bg-violet-100/30 blur-3xl" />
        <div
          className="absolute right-[3%] top-[8%] h-[50%] w-[26%] opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, #fdba74 1.2px, transparent 1.2px)",
            backgroundSize: "14px 14px",
          }}
        />
      </div>

      <div className="relative grid w-full items-start gap-[2%] lg:grid-cols-2 lg:items-center">
        <div className="min-w-0 space-y-4 sm:space-y-5">
          <span className={BDM_TAG}>
            <Shield className="h-3.5 w-3.5 text-orange-600" strokeWidth={2.5} />
            {backendDevHero.badge}
          </span>

          <SectionHeading variant={variant} className={BDM_FONT_DISPLAY}>
            <span className="block">{backendDevHero.titleBefore}</span>
            <span className="relative mt-0.5 inline-block">
              <span className={BDM_FONT_ACCENT}>{backendDevHero.titleAccent}</span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 6 C50 2, 100 8, 198 3"
                  fill="none"
                  stroke="url(#sdm-backend-underline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="sdm-backend-underline" x1="0" y1="0" x2="200" y2="0">
                    <stop offset="0%" stopColor="#ea580c" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </SectionHeading>

          <p className={BDM_FONT_LEAD}>{backendDevHero.subtitle}</p>

          <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {backendDevHero.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className={BDM_CHECK}>
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
                <span className={BDM_FONT_LIST}>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={BDM_BTN_PRIMARY}
            >
              {backendDevHero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${BDM_BTN_OUTLINE} gap-2`}
            >
              {backendDevHero.ctaSecondary}
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-orange-200 bg-orange-50">
                <Play className="h-3 w-3 fill-orange-600 text-orange-600" />
              </span>
            </Link>
          </div>
        </div>

        <div className="min-w-0 lg:min-h-[32rem]">
          <BackendDevHeroDashboard />
          <div className="relative mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 rounded-xl border border-slate-100 bg-white px-4 py-4 shadow-[0_8px_24px_rgba(15,23,42,0.08)] sm:gap-x-5 sm:px-6">
            <span className="w-full text-center text-xs font-bold text-slate-900 sm:w-auto sm:text-sm">
              Built With
            </span>
            {backendDevHero.builtWith.map((tech) => {
              const Icon = BACKEND_TECH_ICONS[tech as keyof typeof BACKEND_TECH_ICONS];
              return (
                <div key={tech} className="flex items-center gap-1.5">
                  {Icon ? <Icon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" /> : null}
                  <span className="text-[10px] font-semibold text-slate-600 sm:text-xs">{tech}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative mt-[2%] grid grid-cols-2 gap-4 border-t border-slate-100 pt-[2%] sm:grid-cols-4 sm:gap-6">
        {backendDevHero.features.map((feat) => {
          const Icon = feat.icon as LucideIcon;
          return (
            <div key={feat.label} className="flex items-center gap-2.5 sm:gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 sm:h-10 sm:w-10">
                <Icon className="h-4 w-4 text-orange-600 sm:h-[18px] sm:w-[18px]" strokeWidth={2} />
              </span>
              <span className="text-sm font-semibold text-slate-800">{feat.label}</span>
            </div>
          );
        })}
      </div>
    </ServiceSectionShell>
  );
}

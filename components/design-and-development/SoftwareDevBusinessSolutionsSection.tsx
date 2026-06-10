import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Briefcase, Check, Phone } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import BusinessSolutionsHeroDashboard from "@/components/design-and-development/BusinessSolutionsHeroDashboard";
import {
  SectionHeading,
  ServiceSectionShell,
} from "@/components/design-and-development/ServiceSectionShell";
import type { ServiceSectionVariant } from "@/components/design-and-development/software-dev-styles";
import {
  BSM_BTN_OUTLINE,
  BSM_BTN_PRIMARY,
  BSM_CHECK,
  BSM_FONT_BLUE,
  BSM_FONT_DISPLAY,
  BSM_FONT_LEAD,
  BSM_FONT_LIST,
  BSM_SERVICE_CARD,
  BSM_TAG,
} from "@/components/design-and-development/business-solutions-styles";
import {
  BUSINESS_CARD_ACCENT,
  businessSolutionsHero,
} from "@/lib/design-and-development/business-solutions-content";

type Props = { variant?: ServiceSectionVariant };

export default function SoftwareDevBusinessSolutionsSection({ variant = "card" }: Props) {
  return (
    <ServiceSectionShell variant={variant} id="business-solutions">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-[8%] top-[6%] h-[45%] w-[42%] rounded-full bg-blue-100/35 blur-3xl" />
        <div className="absolute -right-[6%] top-[12%] h-[40%] w-[38%] rounded-full bg-violet-100/30 blur-3xl" />
      </div>

      <div className="relative grid w-full items-start gap-[2%] lg:grid-cols-2 lg:items-center">
        <div className="min-w-0 space-y-4 sm:space-y-5">
          <span className={BSM_TAG}>
            <Briefcase className="h-3.5 w-3.5 text-violet-600" strokeWidth={2.5} />
            {businessSolutionsHero.badge}
          </span>

          <SectionHeading variant={variant} className={BSM_FONT_DISPLAY}>
            <span className="block">{businessSolutionsHero.titleBefore}</span>
            <span className={`mt-1 block text-[clamp(1.25rem,2.8vw,1.85rem)] font-bold leading-tight ${BSM_FONT_BLUE}`}>
              {businessSolutionsHero.titleBlue}
            </span>
          </SectionHeading>

          <p className={BSM_FONT_LEAD}>{businessSolutionsHero.subtitle}</p>

          <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {businessSolutionsHero.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className={BSM_CHECK}>
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
                <span className={BSM_FONT_LIST}>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={BSM_BTN_PRIMARY}
            >
              {businessSolutionsHero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${BSM_BTN_OUTLINE} gap-2`}
            >
              {businessSolutionsHero.ctaSecondary}
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-violet-200 bg-violet-50">
                <Phone className="h-3 w-3 text-violet-600" />
              </span>
            </Link>
          </div>
        </div>

        <div className="min-w-0">
          <BusinessSolutionsHeroDashboard />
        </div>
      </div>

      <div className="relative mt-[2%] grid grid-cols-1 gap-[2%] border-t border-slate-100 pt-[2%] sm:grid-cols-2 lg:grid-cols-5">
        {businessSolutionsHero.serviceCards.map((card) => {
          const Icon = card.icon as LucideIcon;
          const accent = BUSINESS_CARD_ACCENT[card.accent];
          return (
            <div key={card.title} className={`${BSM_SERVICE_CARD} ${accent.border}`}>
              <span className={`mb-2 flex h-8 w-8 items-center justify-center rounded-lg ${accent.iconBg}`}>
                <Icon className={`h-4 w-4 ${accent.iconColor}`} strokeWidth={2} />
              </span>
              <p className="text-[11px] font-bold text-slate-800 sm:text-xs">{card.title}</p>
              <p className="mt-1 flex-1 text-[9px] leading-relaxed text-slate-500 sm:text-[10px]">{card.desc}</p>
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-2 inline-flex items-center gap-1 text-[9px] font-semibold sm:text-[10px] ${accent.link}`}
              >
                Learn More
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          );
        })}
      </div>

      <div className="relative mt-[2%] flex flex-col gap-4 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-4 sm:flex-row sm:items-center sm:gap-6 sm:px-5 sm:py-4">
        <p className="shrink-0 text-sm font-bold text-slate-900 sm:text-base">Industries We Serve</p>
        <div className="flex flex-1 flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:justify-end sm:gap-x-6 lg:gap-x-8">
          {businessSolutionsHero.industries.map((ind) => {
            const Icon = ind.icon as LucideIcon;
            return (
              <div key={ind.label} className="flex min-w-[3.5rem] flex-col items-center gap-1.5">
                <Icon className="h-5 w-5 text-violet-600 sm:h-[22px] sm:w-[22px]" strokeWidth={1.75} />
                <span className="text-[11px] font-semibold text-violet-800 sm:text-xs">{ind.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </ServiceSectionShell>
  );
}

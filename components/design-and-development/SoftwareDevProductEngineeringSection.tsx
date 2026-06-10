import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check, Layers, Play } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import ProductEngineeringHeroVisual from "@/components/design-and-development/ProductEngineeringHeroVisual";
import TechStackBar from "@/components/design-and-development/TechStackBar";
import {
  SectionHeading,
  ServiceSectionShell,
} from "@/components/design-and-development/ServiceSectionShell";
import type { ServiceSectionVariant } from "@/components/design-and-development/software-dev-styles";
import {
  PEM_BTN_OUTLINE,
  PEM_BTN_PRIMARY,
  PEM_CHECK,
  PEM_FEATURE_CARD,
  PEM_FONT_BLUE,
  PEM_FONT_DISPLAY,
  PEM_FONT_LEAD,
  PEM_FONT_LIST,
  PEM_FONT_PURPLE,
  PEM_TAG,
} from "@/components/design-and-development/product-engineering-styles";
import { productEngineeringHero } from "@/lib/design-and-development/product-engineering-content";

type Props = { variant?: ServiceSectionVariant };

export default function SoftwareDevProductEngineeringSection({ variant = "card" }: Props) {
  return (
    <ServiceSectionShell variant={variant} id="product-engineering">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-[8%] top-[6%] h-[45%] w-[42%] rounded-full bg-violet-100/40 blur-3xl" />
        <div className="absolute -right-[6%] top-[12%] h-[40%] w-[38%] rounded-full bg-blue-100/30 blur-3xl" />
        <div
          className="absolute right-[3%] top-[8%] h-[50%] w-[26%] opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, #c4b5fd 1.2px, transparent 1.2px)",
            backgroundSize: "14px 14px",
          }}
        />
      </div>

      <div className="relative grid w-full items-start gap-[2%] lg:grid-cols-2 lg:items-center">
        <div className="min-w-0 space-y-4 sm:space-y-5">
          <span className={PEM_TAG}>
            <Layers className="h-3.5 w-3.5 text-violet-600" strokeWidth={2.5} />
            {productEngineeringHero.badge}
          </span>

          <SectionHeading variant={variant} className={PEM_FONT_DISPLAY}>
            <span className="block">{productEngineeringHero.titleBefore}</span>
            <span className="mt-1 block text-[clamp(1.25rem,2.8vw,1.85rem)] font-bold leading-tight">
              <span className={PEM_FONT_PURPLE}>{productEngineeringHero.titlePurple}</span>{" "}
              <span className={PEM_FONT_BLUE}>{productEngineeringHero.titleBlue}</span>
            </span>
          </SectionHeading>

          <p className={PEM_FONT_LEAD}>{productEngineeringHero.subtitle}</p>

          <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {productEngineeringHero.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className={PEM_CHECK}>
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
                <span className={PEM_FONT_LIST}>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={PEM_BTN_PRIMARY}
            >
              {productEngineeringHero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${PEM_BTN_OUTLINE} gap-2`}
            >
              {productEngineeringHero.ctaSecondary}
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-violet-200 bg-violet-50">
                <Play className="h-3 w-3 fill-violet-600 text-violet-600" />
              </span>
            </Link>
          </div>
        </div>

        <div className="min-w-0">
          <ProductEngineeringHeroVisual />
        </div>
      </div>

      <div className="relative mt-[2%] grid grid-cols-2 gap-3 border-t border-slate-100 pt-[2%] sm:grid-cols-4 sm:gap-4">
        {productEngineeringHero.features.map((feat) => {
          const Icon = feat.icon as LucideIcon;
          return (
            <div key={feat.label} className={PEM_FEATURE_CARD}>
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

      <TechStackBar technologies={productEngineeringHero.technologies} />
    </ServiceSectionShell>
  );
}

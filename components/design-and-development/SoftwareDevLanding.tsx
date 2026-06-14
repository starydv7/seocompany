import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import SoftwareDevHeroDashboard from "@/components/design-and-development/SoftwareDevHeroDashboard";
import SoftwareDevServiceCard from "@/components/design-and-development/SoftwareDevServiceCard";
import SoftwareDevBackendSection from "@/components/design-and-development/SoftwareDevBackendSection";
import SoftwareDevFrontendSection from "@/components/design-and-development/SoftwareDevFrontendSection";
import SoftwareDevMobileSection from "@/components/design-and-development/SoftwareDevMobileSection";
import SoftwareDevBusinessSolutionsSection from "@/components/design-and-development/SoftwareDevBusinessSolutionsSection";
import SoftwareDevDevelopmentProcessSection from "@/components/design-and-development/SoftwareDevDevelopmentProcessSection";
import SoftwareDevProductEngineeringSection from "@/components/design-and-development/SoftwareDevProductEngineeringSection";
import SoftwareDevUiuxSection from "@/components/design-and-development/SoftwareDevUiuxSection";
import SoftwareDevWebSection from "@/components/design-and-development/SoftwareDevWebSection";
import SoftwareDevFinalCta from "@/components/design-and-development/SoftwareDevFinalCta";
import {
  SDM_BTN_OUTLINE,
  SDM_BTN_PRIMARY,
  SDM_CAP_CARD,
  SDM_CAP_ICON_BOX,
  SDM_FONT_DISPLAY,
  SDM_FONT_DISPLAY_ACCENT,
  SDM_FONT_LEAD,
  SDM_FONT_SECTION,
  SDM_SECTION,
  SDM_SECTION_PY,
  SDM_SERVICE_SECTION,
  SDM_SERVICE_STACK,
  SDM_TAG,
} from "@/components/design-and-development/software-dev-styles";
import {
  softwareDevCapabilities,
  softwareDevHero,
  softwareDevServiceCards,
} from "@/lib/design-and-development/software-dev-content";

export default function SoftwareDevLanding() {
  return (
    <div className="w-full max-w-none overflow-x-hidden bg-white">
      {/* Hero */}
      <section className={`${SDM_SECTION} ${SDM_SECTION_PY} bg-[#faf9ff] pt-8 sm:pt-12`}>
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="max-w-xl space-y-5">
            <span className={SDM_TAG}>{softwareDevHero.badge}</span>
            <h1 className={SDM_FONT_DISPLAY}>
              {softwareDevHero.titleLines.map((line) => (
                <span
                  key={line.text}
                  className={`block ${line.accent ? SDM_FONT_DISPLAY_ACCENT : ""}`}
                >
                  {line.text}
                </span>
              ))}
            </h1>
            <p className={SDM_FONT_LEAD}>{softwareDevHero.subtitle}</p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={SDM_BTN_PRIMARY}
              >
                {softwareDevHero.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={SDM_BTN_OUTLINE}
              >
                {softwareDevHero.ctaSecondary}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <SoftwareDevHeroDashboard />
        </div>
      </section>

      {/* Capabilities — 7 icon cards + service grid */}
      <section className={`${SDM_SECTION} ${SDM_SECTION_PY} border-t border-slate-100 bg-[#F9FAFB]`}>
        <div className="mb-8 text-center sm:mb-10">
          <h2 className={SDM_FONT_SECTION}>{softwareDevCapabilities.title}</h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-[#7c3aed]" />
        </div>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 xl:grid-cols-7">
          {softwareDevCapabilities.items.map((cap) => {
            const Icon = cap.icon as LucideIcon;
            return (
              <div key={cap.title} className={SDM_CAP_CARD}>
                <span className={SDM_CAP_ICON_BOX}>
                  <Icon className="h-5 w-5 text-[#7c3aed] sm:h-[22px] sm:w-[22px]" strokeWidth={1.75} />
                </span>
                <p className="text-[10px] font-semibold leading-snug text-slate-800 sm:text-[11px]">
                  {cap.title}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Service rows — one full-width white card per row */}
      <section className={SDM_SERVICE_SECTION}>
        <div className={SDM_SERVICE_STACK}>
          <SoftwareDevWebSection />
          <SoftwareDevMobileSection />
          <SoftwareDevFrontendSection />
          <SoftwareDevBackendSection />
          <SoftwareDevUiuxSection />
          <SoftwareDevProductEngineeringSection />
          <SoftwareDevBusinessSolutionsSection />
          <SoftwareDevDevelopmentProcessSection />
          {softwareDevServiceCards
            .filter(
              (service) =>
                service.id !== "web" &&
                service.id !== "mobile" &&
                service.id !== "frontend" &&
                service.id !== "backend" &&
                service.id !== "uiux" &&
                service.id !== "product" &&
                service.id !== "business" &&
                service.id !== "process"
            )
            .map((service) => {
              const Icon = service.icon as LucideIcon;
              return (
                <SoftwareDevServiceCard
                  key={service.id}
                  title={service.title}
                  icon={Icon}
                  description={service.description}
                  accent={service.accent}
                  items={service.items}
                  graphic={service.graphic}
                />
              );
            })}
        </div>
      </section>

      {/* Final CTA */}
      <section className={`${SDM_SECTION} pb-12 pt-2 sm:pb-16`}>
        <SoftwareDevFinalCta />
      </section>
    </div>
  );
}

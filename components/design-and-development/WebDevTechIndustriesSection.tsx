import type { LucideIcon } from "lucide-react";
import TechStackBar from "@/components/design-and-development/TechStackBar";
import {
  WDM_FONT_SECTION,
  WDM_SECTION,
  WDM_SECTION_PY,
} from "@/components/design-and-development/web-dev-styles";
import { webDevIndustries, webDevTechnologies } from "@/lib/design-and-development/web-dev-content";

export default function WebDevTechIndustriesSection() {
  return (
    <section className={`${WDM_SECTION} ${WDM_SECTION_PY} bg-[#FAFAF8]`}>
      <div className="mb-6">
        <TechStackBar technologies={webDevTechnologies} />
      </div>

      <div className="mt-10 rounded-xl border border-slate-100 bg-white px-4 py-4 shadow-sm sm:px-5 sm:py-5">
        <h2 className={`mb-6 text-left sm:mb-8 ${WDM_FONT_SECTION}`}>Industries We Support</h2>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-8 lg:justify-between">
          {webDevIndustries.map((ind) => {
            const Icon = ind.icon as LucideIcon;
            return (
              <div key={ind.label} className="flex min-w-[4rem] flex-col items-center gap-1.5">
                <Icon className="h-5 w-5 text-violet-600 sm:h-[22px] sm:w-[22px]" strokeWidth={1.75} />
                <span className="text-[11px] font-semibold text-violet-800 sm:text-xs">{ind.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

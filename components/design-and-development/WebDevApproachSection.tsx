import type { LucideIcon } from "lucide-react";
import WebDevDeviceMockup from "@/components/design-and-development/WebDevDeviceMockup";
import {
  WDM_CARD,
  WDM_FONT_BODY,
  WDM_FONT_CARD_TITLE,
  WDM_FONT_LEAD,
  WDM_FONT_SECTION,
  WDM_SECTION,
  WDM_SECTION_PY,
} from "@/components/design-and-development/web-dev-styles";
import { webDevApproach, webDevWhyChoose } from "@/lib/design-and-development/web-dev-content";

export default function WebDevApproachSection() {
  return (
    <section className={`${WDM_SECTION} ${WDM_SECTION_PY} bg-white`}>
      <div className="mb-8 text-center sm:mb-10">
        <h2 className={WDM_FONT_SECTION}>{webDevWhyChoose.title}</h2>
        <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#7c3aed]" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {webDevWhyChoose.items.map((item) => {
          const Icon = item.icon as LucideIcon;
          return (
            <article key={item.title} className={`${WDM_CARD} flex gap-4`}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50">
                <Icon className="h-5 w-5 text-violet-600" strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <h3 className={WDM_FONT_CARD_TITLE}>{item.title}</h3>
                <p className={`mt-1.5 ${WDM_FONT_BODY}`}>{item.desc}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-14 lg:mt-16">
        <h2 className={`text-left ${WDM_FONT_SECTION}`}>{webDevApproach.title}</h2>
        <p className={`mt-3 max-w-2xl ${WDM_FONT_LEAD}`}>{webDevApproach.subtitle}</p>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <div className="relative min-w-0 overflow-x-auto pb-2">
            <div className="relative flex min-w-[44rem] items-start justify-between gap-1 sm:min-w-0 sm:gap-2">
              <div
                className="absolute left-[4%] right-[4%] top-5 hidden h-px bg-slate-200 sm:block"
                aria-hidden
              />
              {webDevApproach.steps.map((step) => {
                const Icon = step.icon as LucideIcon;
                return (
                  <div
                    key={step.title}
                    className="relative z-10 flex w-[13%] min-w-[4.25rem] flex-col items-center text-center sm:min-w-[4.5rem]"
                  >
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full text-[10px] font-bold text-white shadow-md sm:h-11 sm:w-11 sm:text-xs"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.num}
                    </span>
                    <span className="mt-2 flex h-7 w-7 items-center justify-center rounded-lg bg-violet-50 sm:h-8 sm:w-8">
                      <Icon className="h-3.5 w-3.5 text-violet-600 sm:h-4 sm:w-4" strokeWidth={2} />
                    </span>
                    <p className="mt-2 text-xs font-bold text-slate-800 sm:text-sm">{step.title}</p>
                    <p className="mt-1 text-[10px] leading-snug text-slate-500 sm:text-[11px]">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[28rem] shrink-0 lg:mx-0 lg:pt-2">
            <WebDevDeviceMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

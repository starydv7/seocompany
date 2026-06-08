import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  EDM_BODY,
  EDM_SECTION,
  EDM_SECTION_PY,
  EDM_SECTION_TITLE,
} from "@/components/digital-marketing/enterprise-dm-styles";
import { enterpriseDmAnalytics } from "@/lib/digital-marketing/enterprise-content";

const FLOW_COLORS = ["#8b5cf6", "#6366f1", "#3b82f6", "#22c55e", "#14b8a6"];

export default function EnterpriseDmAnalyticsSection() {
  const { title, intro, flow, features } = enterpriseDmAnalytics;

  return (
    <section className={`${EDM_SECTION} bg-[#f8fafc] ${EDM_SECTION_PY}`}>
      <Reveal className="w-full text-center">
        <h2 className={EDM_SECTION_TITLE}>{title}</h2>
        <p className={`mt-3 ${EDM_BODY} text-slate-500`}>{intro}</p>
      </Reveal>

      <Reveal delay={0.05} className="mt-10 w-full">
        <div className="w-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_6px_28px_rgba(15,23,42,0.05)] sm:p-8 lg:p-10">
          <div className="relative w-full">
            <div
              aria-hidden
              className="pointer-events-none absolute left-[10%] right-[10%] top-6 hidden border-t border-dashed border-violet-300 sm:block"
            />
            <div className="relative grid grid-cols-2 gap-8 sm:grid-cols-5 sm:gap-4">
              {flow.map((node, i) => {
                const Icon = node.icon as LucideIcon;
                const color = FLOW_COLORS[i] ?? "#8b5cf6";
                return (
                  <div key={node.label} className="relative flex flex-col items-center text-center">
                    <span
                      className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white shadow-[0_4px_16px_rgba(15,23,42,0.08)]"
                      style={{ backgroundColor: `${color}18`, color }}
                    >
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </span>
                    <p className="mt-3 text-[11px] font-bold leading-tight text-slate-800 sm:text-xs">
                      {node.label}
                    </p>
                    {i < flow.length - 1 && (
                      <ChevronRight
                        aria-hidden
                        className="absolute -right-3 top-5 hidden h-4 w-4 text-violet-400 sm:block lg:-right-2"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 border-t border-slate-100 pt-8 sm:grid-cols-4">
            {features.map((f) => {
              const Icon = f.icon as LucideIcon;
              return (
                <div
                  key={f.label}
                  className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-3"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100">
                    <Icon className="h-4 w-4 text-violet-600" strokeWidth={2} />
                  </span>
                  <span className="text-[11px] font-semibold leading-tight text-slate-700 sm:text-xs">
                    {f.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

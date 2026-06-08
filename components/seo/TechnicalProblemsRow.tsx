import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import { TECH_SECTION, TECH_SECTION_TITLE } from "@/components/seo/technical-seo-styles";
import { technicalProblemsRow } from "@/lib/seo/technical-seo-content";

export default function TechnicalProblemsRow() {
  const { title, items } = technicalProblemsRow;

  return (
    <section className={`${TECH_SECTION} border-y border-slate-100 bg-slate-50/60 py-10 sm:py-12`}>
      <Reveal className="text-center">
        <h2 className={TECH_SECTION_TITLE}>{title}</h2>
      </Reveal>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
        {items.map((item, i) => {
          const Icon = item.icon as LucideIcon;
          return (
            <Reveal key={item.label} delay={i * 0.03}>
              <div className="flex flex-col items-center text-center">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-white shadow-[0_4px_16px_rgba(15,23,42,0.06)]"
                  style={{ backgroundColor: item.bg }}
                >
                  <Icon className="h-5 w-5" style={{ color: item.color }} strokeWidth={2} />
                </span>
                <p className="mt-3 text-[11px] font-bold leading-snug text-slate-800 sm:text-xs">
                  {item.label}
                </p>
                <p className="mt-1.5 max-w-[11rem] text-[10px] leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  EDM_BODY,
  EDM_PURPLE,
  EDM_SECTION,
  EDM_SECTION_PY,
  EDM_SECTION_TITLE,
} from "@/components/digital-marketing/enterprise-dm-styles";
import { enterpriseDmIndustries } from "@/lib/digital-marketing/enterprise-content";

export default function EnterpriseDmIndustriesSection() {
  const { title, intro, items } = enterpriseDmIndustries;

  return (
    <section className={`${EDM_SECTION} border-y border-slate-100 bg-[#f8fafc] ${EDM_SECTION_PY}`}>
      <Reveal className="w-full text-center">
        <h2 className={EDM_SECTION_TITLE}>{title}</h2>
        <p className={`mt-3 ${EDM_BODY} text-slate-500`}>{intro}</p>
      </Reveal>

      <div className="mt-10 grid w-full grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
        {items.map((item, i) => {
          const Icon = item.icon as LucideIcon;
          return (
            <Reveal key={item.label} delay={i * 0.03}>
              <div className="flex flex-col items-center text-center">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-white shadow-[0_4px_16px_rgba(15,23,42,0.05)]"
                  style={{ color: EDM_PURPLE }}
                >
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <p className="mt-3 text-[11px] font-semibold leading-snug text-slate-700 sm:text-xs">
                  {item.label}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

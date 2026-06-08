import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  FDM_PURPLE,
  FDM_SECTION,
  FDM_SECTION_PY,
  FDM_SECTION_TITLE,
  FDM_TAG,
} from "@/components/digital-marketing/franchise-dm-styles";
import { franchiseDmProcess } from "@/lib/digital-marketing/franchise-dm-content";

export default function FranchiseDmProcessSection() {
  const { tag, title, steps } = franchiseDmProcess;

  return (
    <section className={`${FDM_SECTION} bg-slate-50/70 ${FDM_SECTION_PY}`}>
      <Reveal className="w-full text-center">
        <p className={FDM_TAG}>{tag}</p>
        <h2 className={`mt-5 ${FDM_SECTION_TITLE}`}>{title}</h2>
      </Reveal>

      <div className="relative mt-14 w-full">
        <div
          aria-hidden
          className="pointer-events-none absolute left-[8%] right-[8%] top-7 hidden border-t-2 border-dashed border-violet-200 lg:block"
        />

        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon as LucideIcon;
            return (
              <Reveal key={step.num} delay={i * 0.05}>
                <div className="flex flex-col items-center text-center">
                  <span
                    className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full text-sm font-bold text-white shadow-[0_0_0_6px_rgba(124,58,237,0.15)]"
                    style={{ backgroundColor: FDM_PURPLE }}
                  >
                    {step.num}
                  </span>
                  <span className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50">
                    <Icon className="h-5 w-5 text-violet-600" strokeWidth={2} />
                  </span>
                  <p className="mt-4 text-base font-bold text-slate-900">{step.title}</p>
                  <p className="mt-2 w-full text-sm leading-relaxed text-slate-500">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

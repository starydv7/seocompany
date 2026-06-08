import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import TechnicalEnterpriseIllustration from "@/components/seo/TechnicalEnterpriseIllustration";
import { TECH_SECTION } from "@/components/seo/technical-seo-styles";
import { technicalEnterprise, technicalProcess } from "@/lib/seo/technical-seo-content";

export default function TechnicalEnterpriseProcess() {
  const { title: entTitle, description, features } = technicalEnterprise;
  const { title: procTitle, steps } = technicalProcess;

  return (
    <section className={TECH_SECTION}>
      <Reveal>
        <article className="overflow-hidden rounded-2xl border border-slate-200/80 shadow-[0_8px_40px_rgba(15,23,42,0.08)]">
          {/* ── Top: Enterprise (dark) ── */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#05071a] via-[#0b1120] to-[#0f172a] px-6 py-8 sm:px-10 sm:py-10">
            <div
              aria-hidden
              className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_70%_80%_at_80%_50%,rgba(99,70,254,0.35),transparent_70%)]"
            />

            <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-10">
              <div className="min-w-0">
                <h2 className="text-xl font-bold text-white sm:text-2xl">{entTitle}</h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-300/90">
                  {description}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5 sm:gap-3">
                  {features.map((f) => {
                    const Icon = f.icon as LucideIcon;
                    return (
                      <div key={f.label} className="flex flex-col items-center text-center">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-white/[0.05] backdrop-blur-sm">
                          <Icon className="h-5 w-5 text-violet-200" strokeWidth={1.75} />
                        </span>
                        <p className="mt-2 text-[9px] font-medium leading-tight text-slate-300 sm:text-[10px]">
                          {f.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex shrink-0 items-center justify-center lg:min-w-[14rem]">
                <TechnicalEnterpriseIllustration />
              </div>
            </div>
          </div>

          {/* ── Bottom: Process (white) ── */}
          <div className="bg-white px-6 py-12 sm:px-12 sm:py-16">
            <h2 className="text-center text-xl font-bold tracking-tight text-[#0a0b1e] sm:text-[1.65rem]">
              {procTitle}
            </h2>

            <div className="relative mx-auto mt-12 max-w-5xl sm:mt-14">
              {/* Dotted line + end caps — passes through circle centers */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-[3%] right-[3%] top-[22px] hidden items-center sm:flex"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#6c5ce7]" />
                <div className="mx-0.5 h-0 flex-1 border-t-[1.5px] border-dashed border-[#a78bfa]/80" />
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#6c5ce7]" />
              </div>

              <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-4 sm:gap-6">
                {steps.map((step) => (
                  <div
                    key={step.num}
                    className="flex flex-col items-center text-center"
                  >
                    <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#6c5ce7] text-[11px] font-bold tracking-wide text-white shadow-[0_0_0_7px_rgba(108,92,231,0.22),0_4px_16px_rgba(108,92,231,0.35)]">
                      {step.num}
                    </span>
                    <p className="mt-6 text-sm font-bold leading-snug text-[#0a0b1e]">
                      {step.title}
                    </p>
                    <p className="mt-2 max-w-[12rem] text-[13px] leading-relaxed text-slate-500">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}

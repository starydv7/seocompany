import Reveal from "@/components/Reveal";
import { EDM_SECTION, EDM_SECTION_PY } from "@/components/digital-marketing/enterprise-dm-styles";
import { enterpriseDmProcess } from "@/lib/digital-marketing/enterprise-content";

export default function EnterpriseDmProcessSection() {
  const { title, steps } = enterpriseDmProcess;

  return (
    <section className={`${EDM_SECTION} bg-white ${EDM_SECTION_PY}`}>
      <Reveal>
        <article className="w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#4c1d95] via-[#5b21b6] to-[#6d28d9] px-6 py-10 shadow-[0_12px_48px_rgba(91,33,182,0.4)] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <h2 className="text-center text-xl font-bold text-white sm:text-2xl">{title}</h2>

          <div className="relative mt-12 w-full sm:mt-14">
            <div
              aria-hidden
              className="pointer-events-none absolute left-[4%] right-[4%] top-[22px] hidden items-center sm:flex"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-white/60" />
              <div className="mx-1 h-0 flex-1 border-t border-dashed border-white/35" />
              <span className="h-2 w-2 shrink-0 rounded-full bg-white/60" />
            </div>

            <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-4 sm:gap-6">
              {steps.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center">
                  <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#7c3aed] text-[11px] font-bold tracking-wide text-white shadow-[0_0_0_7px_rgba(124,58,237,0.35)]">
                    {step.num}
                  </span>
                  <p className="mt-6 text-sm font-bold leading-snug text-white sm:text-[15px]">
                    {step.title}
                  </p>
                  <p className="mt-2 max-w-[13rem] text-xs leading-relaxed text-white/75 sm:text-[13px]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}

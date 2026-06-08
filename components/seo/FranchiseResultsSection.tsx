import Reveal from "@/components/Reveal";
import {
  FRANCHISE_INNER,
  FRANCHISE_ITEM_BODY,
  FRANCHISE_SECTION,
  FRANCHISE_SECTION_TITLE,
} from "@/components/seo/franchise-seo-styles";
import { franchiseMetrics } from "@/lib/seo/franchise-content";

export default function FranchiseResultsSection() {
  return (
    <section className={FRANCHISE_SECTION}>
      <Reveal className={`${FRANCHISE_INNER} mb-[2%] text-center`}>
        <h2 className={FRANCHISE_SECTION_TITLE}>
          Franchise Results That Drive Growth
        </h2>
      </Reveal>
      <div className={`${FRANCHISE_INNER} grid w-full grid-cols-1 gap-[2%] sm:grid-cols-2 lg:grid-cols-5 lg:items-stretch`}>
        {franchiseMetrics.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.04} className="h-full min-w-0">
            <article className="flex h-full min-h-[11rem] w-full flex-col items-center justify-center rounded-xl border border-slate-200/90 bg-white p-[2%] text-center shadow-[0_2px_14px_rgba(15,23,42,0.05)]">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-50">
                <m.icon className="h-6 w-6 text-indigo-600" />
              </span>
              <p className="mt-3 shrink-0 text-xl font-bold leading-none text-slate-900">
                {m.value}
              </p>
              <p className={`mt-2 flex min-h-[3rem] items-center justify-center ${FRANCHISE_ITEM_BODY}`}>
                {m.label}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

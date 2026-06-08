import { AlertTriangle } from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  FRANCHISE_INNER,
  FRANCHISE_ITEM_BODY,
  FRANCHISE_ITEM_TITLE,
  FRANCHISE_SECTION,
  FRANCHISE_SECTION_SUBTITLE,
  FRANCHISE_SECTION_TITLE,
} from "@/components/seo/franchise-seo-styles";
import { franchiseChallenges } from "@/lib/seo/franchise-content";

function DottedCurve({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 40 C30 8, 55 72, 116 36"
        stroke="#e2e8f0"
        strokeWidth="1.5"
        strokeDasharray="4 6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ChallengesSection() {
  const { badge, title, titleHighlight, titleEnd, subtitle, items } = franchiseChallenges;

  return (
    <section className={`relative overflow-hidden ${FRANCHISE_SECTION}`}>
      <DottedCurve className="pointer-events-none absolute left-[2%] top-24 hidden h-20 w-28 opacity-80 lg:block xl:left-[6%]" />
      <DottedCurve className="pointer-events-none absolute right-[2%] top-24 hidden h-20 w-28 -scale-x-100 opacity-80 lg:block xl:right-[6%]" />

      <div className={`relative ${FRANCHISE_INNER}`}>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-rose-600">
            <AlertTriangle className="h-3.5 w-3.5" strokeWidth={2.5} />
            {badge}
          </p>
          <h2 className={`mt-5 ${FRANCHISE_SECTION_TITLE}`}>
            {title}{" "}
            <span className="text-rose-600">{titleHighlight}</span> {titleEnd}
          </h2>
          <p className={`mx-auto mt-4 max-w-2xl ${FRANCHISE_SECTION_SUBTITLE}`}>
            {subtitle}
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 auto-rows-fr gap-4 sm:grid-cols-2 sm:items-stretch lg:mt-12 lg:grid-cols-3 lg:gap-5 xl:grid-cols-6 xl:gap-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.04} className="h-full">
                <article className="flex h-full min-h-[10.5rem] flex-col items-center rounded-2xl border border-slate-100 bg-white p-[2%] text-center shadow-[0_4px_24px_rgba(15,23,42,0.06)]">
                  <Icon className="h-9 w-9 text-rose-500" strokeWidth={1.75} />
                  <h3 className={`mt-4 ${FRANCHISE_ITEM_TITLE}`}>
                    {item.title}
                  </h3>
                  <span className="mt-3 block h-px w-10 bg-rose-400" aria-hidden />
                  <p className={`mt-3 flex-1 ${FRANCHISE_ITEM_BODY}`}>
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import type { LucideIcon } from "lucide-react";
import { Check, TrendingUp, X } from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  FDM_SECTION,
  FDM_SECTION_PY,
  FDM_SECTION_TITLE,
  FDM_TAG,
} from "@/components/digital-marketing/franchise-dm-styles";
import { franchiseDmVs } from "@/lib/digital-marketing/franchise-dm-content";

function VsBadge() {
  return (
    <div className="relative flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center sm:h-20 sm:w-20">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 80 80"
        aria-hidden
      >
        {[36, 30, 24].map((r) => (
          <circle
            key={r}
            cx="40"
            cy="40"
            r={r}
            fill="none"
            stroke="#c4b5fd"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity={0.45}
          />
        ))}
      </svg>
      <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 via-violet-600 to-indigo-600 text-sm font-black tracking-wide text-white shadow-[0_0_28px_rgba(124,58,237,0.45)] sm:h-16 sm:w-16 sm:text-base">
        VS
      </span>
    </div>
  );
}

function ComparisonCard({
  variant,
  title,
  items,
}: {
  variant: "negative" | "positive";
  title: string;
  items: readonly { title: string; description: string; icon: LucideIcon }[];
}) {
  const isNegative = variant === "negative";
  const HeaderIcon = isNegative ? X : Check;

  return (
    <article
      className={`h-full rounded-2xl border p-[2%] sm:rounded-3xl ${
        isNegative
          ? "border-red-100/90 bg-gradient-to-b from-red-50/70 to-rose-50/40"
          : "border-emerald-100/90 bg-gradient-to-b from-emerald-50/70 to-teal-50/40"
      }`}
    >
      <header className="flex items-center gap-3 border-b border-slate-200/60 pb-5">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
            isNegative ? "bg-red-500" : "bg-emerald-500"
          }`}
        >
          <HeaderIcon className="h-5 w-5 text-white" strokeWidth={2.5} />
        </span>
        <h3 className="text-base font-bold leading-snug text-slate-900 sm:text-lg">{title}</h3>
      </header>

      <ul className="mt-1 divide-y divide-slate-200/70">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.title} className="flex gap-3.5 py-5 first:pt-4 last:pb-1 sm:gap-4 sm:py-5">
              <span
                className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  isNegative ? "bg-red-100/90" : "bg-emerald-100/90"
                }`}
              >
                <Icon
                  className={`h-[18px] w-[18px] ${isNegative ? "text-red-500" : "text-emerald-600"}`}
                  strokeWidth={2}
                />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold leading-snug text-slate-900 sm:text-[15px]">
                  {item.title}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500 sm:text-sm">
                  {item.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default function FranchiseDmChallengesSection() {
  const {
    tag,
    title,
    subtitle,
    withoutTitle,
    withTitle,
    without,
    with: withItems,
    bottomLine,
  } = franchiseDmVs;

  return (
    <section className={`${FDM_SECTION} bg-slate-50/40 ${FDM_SECTION_PY}`}>
      <Reveal className="w-full text-center">
        <p className={FDM_TAG}>{tag}</p>
        <h2 className={`mt-5 ${FDM_SECTION_TITLE}`}>{title}</h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-[15px]">{subtitle}</p>
      </Reveal>

      <div className="relative mt-12 w-full lg:mt-14">
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <VsBadge />
        </div>

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-[3%]">
          <Reveal>
            <ComparisonCard variant="negative" title={withoutTitle} items={without} />
          </Reveal>

          <div className="flex justify-center lg:hidden">
            <VsBadge />
          </div>

          <Reveal delay={0.06}>
            <ComparisonCard variant="positive" title={withTitle} items={withItems} />
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1} className="mt-8 w-full lg:mt-10">
        <div className="flex w-full flex-col gap-4 rounded-2xl border border-slate-200/90 bg-white p-[2%] shadow-[0_4px_24px_rgba(15,23,42,0.04)] sm:flex-row sm:items-center sm:gap-5 sm:rounded-3xl">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100">
            <TrendingUp className="h-5 w-5 text-violet-600" strokeWidth={2} />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-wide text-violet-600">
              {bottomLine.label}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-700 sm:text-[15px]">
              {bottomLine.textBefore}{" "}
              <strong className="font-bold text-slate-900">{bottomLine.highlight}</strong>{" "}
              {bottomLine.textAfter}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

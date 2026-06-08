import type { LucideIcon } from "lucide-react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CircleDollarSign,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import TechnicalIssuesHub from "@/components/seo/TechnicalIssuesHub";
import {
  TECH_BODY,
  TECH_GRADIENT,
  TECH_SECTION,
  TECH_TITLE,
} from "@/components/seo/technical-seo-styles";
import { technicalIssues } from "@/lib/seo/technical-seo-content";

function ComparisonCard({
  title,
  items,
  variant,
}: {
  title: string;
  items: readonly { label: string; icon: LucideIcon }[];
  variant: "negative" | "positive";
}) {
  const isNeg = variant === "negative";
  const Arrow = isNeg ? ArrowDownRight : ArrowUpRight;

  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white shadow-[0_4px_24px_rgba(15,23,42,0.05)] ${
        isNeg ? "border-rose-200/90" : "border-emerald-200/90"
      }`}
    >
      <p
        className={`px-5 py-3.5 text-sm font-bold ${
          isNeg ? "border-b border-rose-100 bg-rose-50/70 text-rose-600" : "border-b border-emerald-100 bg-emerald-50/70 text-emerald-600"
        }`}
      >
        {title}
      </p>
      <ul className="divide-y divide-slate-100">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label} className="flex items-center gap-3 px-5 py-3.5">
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  isNeg ? "bg-rose-50 text-rose-500" : "bg-emerald-50 text-emerald-600"
                }`}
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
              </span>
              <span className="min-w-0 flex-1 text-sm font-medium text-slate-800">
                {item.label}
              </span>
              <Arrow
                className={`h-5 w-5 shrink-0 ${isNeg ? "text-rose-500" : "text-emerald-500"}`}
                strokeWidth={2.5}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function TechnicalIssuesSection() {
  const { titleBefore, titleAccent, subtitle, without, with: withSeo } = technicalIssues;

  const withoutItems = without.items.map((item) => ({
    ...item,
    icon: item.icon as LucideIcon,
  }));
  const withItems = withSeo.items.map((item) => ({
    ...item,
    icon:
      item.label === "Rankings Improve"
        ? (CircleDollarSign as LucideIcon)
        : (item.icon as LucideIcon),
  }));

  return (
    <section className={`${TECH_SECTION} bg-white py-12 sm:py-16`}>
      <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,34%)_minmax(0,1fr)] lg:gap-x-[5%] xl:gap-x-[6%]">
        <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <h2 className={`text-[1.65rem] leading-[1.2] sm:text-[1.85rem] lg:text-[2rem] ${TECH_TITLE}`}>
              <span className="block text-slate-900">{titleBefore}</span>
              <span className={`block ${TECH_GRADIENT}`}>{titleAccent}</span>
            </h2>
            <p className={`mt-5 max-w-md leading-relaxed ${TECH_BODY}`}>{subtitle}</p>
          </Reveal>

          <div className="mt-8 space-y-4">
            <Reveal>
              <ComparisonCard
                title={without.title}
                items={withoutItems}
                variant="negative"
              />
            </Reveal>
            <Reveal delay={0.05}>
              <ComparisonCard title={withSeo.title} items={withItems} variant="positive" />
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.08} className="min-w-0">
          <TechnicalIssuesHub />
        </Reveal>
      </div>
    </section>
  );
}

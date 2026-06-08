import type { LucideIcon } from "lucide-react";
import { Check, Star, X } from "lucide-react";
import Reveal from "@/components/Reveal";
import TechnicalWhatWhyHub from "@/components/seo/TechnicalWhatWhyHub";
import {
  TECH_ACCENT,
  TECH_BODY,
  TECH_PURPLE,
  TECH_SECTION,
  TECH_TITLE,
} from "@/components/seo/technical-seo-styles";
import { whatIsTechnicalSeo, whyTechnicalSeo } from "@/lib/seo/technical-seo-content";

function SplitHeading({
  before,
  accent,
}: {
  before: string;
  accent: string;
}) {
  return (
    <h2 className={`text-[1.5rem] leading-tight sm:text-[1.65rem] lg:text-[1.75rem] ${TECH_TITLE}`}>
      {before}
      <span style={{ color: TECH_PURPLE }}>{accent}</span>
    </h2>
  );
}

function ComparisonBox({
  title,
  items,
  variant,
}: {
  title: string;
  items: readonly string[];
  variant: "negative" | "positive";
}) {
  const isNeg = variant === "negative";
  return (
    <div
      className={`overflow-hidden rounded-xl border ${
        isNeg
          ? "border-rose-200/90 bg-rose-50/40"
          : "border-emerald-200/90 bg-emerald-50/40"
      }`}
    >
      <p
        className={`px-4 py-3 text-sm font-bold ${
          isNeg ? "text-rose-600" : "text-emerald-600"
        }`}
      >
        {title}
      </p>
      <ul className={`divide-y ${isNeg ? "divide-rose-100/80" : "divide-emerald-100/80"}`}>
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 px-4 py-3 text-[13px] leading-snug text-slate-600"
          >
            {isNeg ? (
              <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" strokeWidth={2.5} />
            ) : (
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500">
                <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
              </span>
            )}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TechnicalWhatWhySection() {
  const { titleBefore, titleAccent, body, checklist } = whatIsTechnicalSeo;
  const {
    titleBefore: whyBefore,
    titleAccent: whyAccent,
    lead,
    withoutTitle,
    without,
    withTitle,
    with: withList,
    impactTitle,
    impacts,
    bannerBefore,
    bannerAccent,
  } = whyTechnicalSeo;

  return (
    <section className={`${TECH_SECTION} bg-white py-12 sm:py-16`}>
      <div className="grid w-full grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,22%)_minmax(0,34%)_minmax(0,44%)] lg:gap-x-[3%] xl:gap-x-[4%]">
        {/* Left — What Is */}
        <Reveal className="min-w-0 lg:pt-2">
          <SplitHeading before={titleBefore} accent={titleAccent} />
          <p className={`mt-4 leading-relaxed text-slate-600 ${TECH_BODY}`}>{body}</p>
          <ul className="mt-6 space-y-3.5">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: TECH_PURPLE }}
                >
                  <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Center — Hub */}
        <Reveal delay={0.05} className="flex min-w-0 items-center justify-center px-2">
          <TechnicalWhatWhyHub />
        </Reveal>

        {/* Right — Why + compare + impact */}
        <Reveal delay={0.08} className="min-w-0">
          <SplitHeading before={whyBefore} accent={whyAccent} />
          <p className={`mt-4 max-w-lg leading-relaxed text-slate-500 ${TECH_BODY}`}>{lead}</p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-3">
            <div className="min-w-0 flex-1 space-y-3">
              <ComparisonBox title={withoutTitle} items={without} variant="negative" />
              <ComparisonBox title={withTitle} items={withList} variant="positive" />
            </div>

            <div className="w-full shrink-0 self-start rounded-xl border border-violet-100/90 bg-[#f8fafc] px-3 py-3.5 sm:w-[8.75rem]">
              <p className="text-[10px] font-bold leading-snug text-slate-900">{impactTitle}</p>
              <ul className="mt-3 space-y-2.5">
                {impacts.map((item) => {
                  const Icon = item.icon as LucideIcon;
                  return (
                    <li key={item.label} className="flex items-center gap-2">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-violet-100">
                        <Icon
                          className="h-3.5 w-3.5"
                          style={{ color: TECH_PURPLE }}
                          strokeWidth={2}
                        />
                      </span>
                      <span className="text-[10px] font-semibold leading-tight text-slate-700">
                        {item.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-12 sm:mt-14">
        <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-5 sm:gap-5 sm:px-7 sm:py-6">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full shadow-md"
            style={{ backgroundColor: TECH_PURPLE }}
          >
            <Star className="h-5 w-5 fill-white text-white" strokeWidth={1.5} />
          </span>
          <p className="text-sm leading-[1.75] text-slate-600 sm:text-[15px]">
            {bannerBefore}
            <span className={`font-bold ${TECH_ACCENT}`}>{bannerAccent}</span>
          </p>
        </div>
      </Reveal>
    </section>
  );
}

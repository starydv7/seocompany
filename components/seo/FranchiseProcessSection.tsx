import type { LucideIcon } from "lucide-react";
import { Check, ChevronRight, Workflow } from "lucide-react";
import Reveal from "@/components/Reveal";
import { TITLE_GRADIENT } from "@/components/seo/franchise-seo-styles";
import { franchiseProcessSection } from "@/lib/seo/franchise-content";

const SECTION_TITLE =
  "text-lg font-bold leading-snug tracking-tight text-slate-900 sm:text-xl";
const SUBTITLE = "text-[11px] leading-relaxed text-slate-500 sm:text-xs";
const CARD_DESC = "mt-2 flex-1 text-[11px] leading-relaxed text-slate-500";
const FEATURE_TITLE = "text-[13px] font-bold leading-snug text-slate-900";
const FEATURE_BODY = "mt-0.5 text-[11px] leading-relaxed text-slate-500";

function ProcessCard({
  step,
  title,
  description,
  tagline,
  icon: Icon,
  tagIcon: TagIcon,
}: {
  step: string;
  title: string;
  description: string;
  tagline: string;
  icon: LucideIcon;
  tagIcon: LucideIcon;
}) {
  return (
    <article className="relative flex min-w-[8.75rem] flex-1 flex-col rounded-lg border border-slate-200/90 bg-white px-3 pb-4 pt-9 text-center shadow-[0_2px_12px_rgba(15,23,42,0.04)] sm:min-w-[10rem] sm:px-3.5 sm:pb-5 sm:pt-10">
      <span className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-violet-100 shadow-sm">
        <Icon className="h-4 w-4 text-violet-600" strokeWidth={2} />
      </span>
      <p className="text-xs font-bold text-violet-700">{step}</p>
      <h3 className="mt-1 text-[13px] font-bold leading-snug text-slate-900">{title}</h3>
      <p className={CARD_DESC}>{description}</p>
      <div className="mt-4 flex items-center justify-center gap-1 border-t border-slate-100 pt-3">
        <TagIcon className="h-3 w-3 shrink-0 text-violet-500" strokeWidth={2} />
        <span className="text-[10px] font-medium leading-tight text-violet-600">{tagline}</span>
      </div>
    </article>
  );
}

export default function FranchiseProcessSection() {
  const { badge, titlePrefix, titleAccent, subtitle, steps, features } = franchiseProcessSection;

  return (
    <section className="w-full px-[2%] py-12 sm:py-16 lg:py-14">
      <Reveal className="mx-auto max-w-4xl text-center">
        <p className="inline-flex items-center gap-1.5 rounded-full border border-violet-200/90 bg-violet-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-violet-700 sm:text-[11px]">
          <Workflow className="h-3 w-3 shrink-0" strokeWidth={2} />
          {badge}
        </p>
        <h2 className={`mt-4 ${SECTION_TITLE}`}>
          {titlePrefix} <span className={TITLE_GRADIENT}>{titleAccent}</span>
        </h2>
        <p className={`mx-auto mt-3 max-w-2xl ${SUBTITLE}`}>{subtitle}</p>
      </Reveal>

      <Reveal delay={0.06} className="mx-auto mt-8 max-w-6xl sm:mt-10">
        <div className="flex items-stretch gap-1 overflow-x-auto pb-2 sm:gap-1.5 lg:overflow-visible lg:pb-0">
          {steps.map((step, i) => (
            <div key={step.title} className="flex min-w-0 flex-1 items-stretch">
              <ProcessCard
                step={step.step}
                title={step.title}
                description={step.description}
                tagline={step.tagline}
                icon={step.icon as LucideIcon}
                tagIcon={step.tagIcon as LucideIcon}
              />
              {i < steps.length - 1 && (
                <ChevronRight
                  className="mx-0.5 hidden w-4 shrink-0 self-center text-slate-300 sm:mx-1 lg:flex"
                  strokeWidth={2}
                  aria-hidden
                />
              )}
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 max-w-6xl rounded-2xl border border-slate-200/90 bg-slate-50/80 px-4 py-5 sm:mt-10 sm:px-6 sm:py-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-600">
                <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
              </span>
              <div className="min-w-0 text-left">
                <p className={FEATURE_TITLE}>{feature.title}</p>
                <p className={FEATURE_BODY}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

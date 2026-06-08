import type { LucideIcon } from "lucide-react";
import { ChevronRight, Circle, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  AI_ACCENT_COLOR,
  AI_LABEL_PURPLE,
  AI_SECTION_TITLE,
  AI_TITLE_COLOR,
} from "@/components/seo/ai-seo-styles";
import { FRANCHISE_CARD, FRANCHISE_SECTION, FRANCHISE_SECTION_SUBTITLE } from "@/components/seo/franchise-seo-styles";
import { aiSeoEvolution } from "@/lib/seo/ai-seo-content";

function StepCard({
  step,
  Icon,
}: {
  step: (typeof aiSeoEvolution.steps)[number];
  Icon: LucideIcon;
}) {
  const hereBadge = "hereBadge" in step ? step.hereBadge : undefined;

  return (
    <article
      className={`relative flex min-h-[11.5rem] w-full flex-col items-center rounded-xl border bg-white px-3 py-6 text-center shadow-[0_4px_20px_rgba(15,23,42,0.06)] ${
        step.highlight
          ? "border-[#7c3aed] pt-8 shadow-[0_0_28px_rgba(124,58,237,0.32)] ring-2 ring-[#c4b5fd]/60"
          : "border-slate-100"
      }`}
    >
      {hereBadge && (
        <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#7c3aed] px-3 py-1 text-[9px] font-bold uppercase tracking-wide text-white shadow-md">
          {hereBadge}
        </span>
      )}
      <Icon
        className={`h-7 w-7 ${step.highlight ? AI_ACCENT_COLOR : AI_TITLE_COLOR}`}
        strokeWidth={1.75}
      />
      <p className={`mt-3 text-sm font-bold ${AI_ACCENT_COLOR}`}>{step.year}</p>
      <p className={`mt-1 text-sm font-bold leading-snug ${AI_TITLE_COLOR}`}>{step.label}</p>
      <p className="mt-2 text-[11px] leading-relaxed text-slate-500">{step.description}</p>
    </article>
  );
}

function TimelineConnector() {
  return (
    <span
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50"
      aria-hidden
    >
      <ChevronRight className="h-4 w-4 text-slate-400" strokeWidth={2.5} />
    </span>
  );
}

export default function AiSeoEvolutionSection() {
  const { badge, titleBefore, titleAccent, subtitle, steps, footerBefore, footerAccent } =
    aiSeoEvolution;

  return (
    <section className={`relative z-10 ${FRANCHISE_SECTION}`}>
      <div className={FRANCHISE_CARD}>
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,30%)_minmax(0,1fr)] lg:gap-x-[4%]">
          <Reveal className="min-w-0 shrink-0">
            <p className={`inline-flex items-center gap-2 text-[10px] ${AI_LABEL_PURPLE}`}>
              <Circle className="h-3 w-3 fill-[#7c3aed] text-[#7c3aed]" strokeWidth={3} />
              {badge}
            </p>
            <h2 className={`mt-4 text-2xl sm:text-[1.75rem] lg:text-[2rem] ${AI_SECTION_TITLE}`}>
              {titleBefore}{" "}
              <span className={AI_ACCENT_COLOR}>{titleAccent}</span>
            </h2>
            <p className={`mt-4 max-w-sm ${FRANCHISE_SECTION_SUBTITLE} text-slate-600`}>
              {subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.06} className="min-w-0 w-full">
            <div className="hidden w-full items-stretch gap-2 lg:flex">
              {steps.map((step, i) => {
                const Icon = step.icon as LucideIcon;
                return (
                  <div key={step.year} className="flex min-w-0 flex-1 items-center gap-2">
                    <StepCard step={step} Icon={Icon} />
                    {i < steps.length - 1 && <TimelineConnector />}
                  </div>
                );
              })}
            </div>
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
              {steps.map((step) => {
                const Icon = step.icon as LucideIcon;
                return <StepCard key={step.year} step={step} Icon={Icon} />;
              })}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex items-center gap-3 rounded-xl bg-violet-50/90 px-4 py-4 sm:px-5">
            <Sparkles className="h-5 w-5 shrink-0 text-[#7c3aed]" strokeWidth={2} />
            <p className="text-sm leading-relaxed text-slate-700">
              {footerBefore}
              <span className={`font-bold ${AI_ACCENT_COLOR}`}>{footerAccent}</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

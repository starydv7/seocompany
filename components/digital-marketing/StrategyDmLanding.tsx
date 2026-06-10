import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check, PieChart } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import Reveal from "@/components/Reveal";
import StrategyDmHeroDashboard from "@/components/digital-marketing/StrategyDmHeroDashboard";
import {
  DSM_BTN_PRIMARY,
  DSM_CARD,
  DSM_NAVY,
  DSM_PURPLE,
  DSM_SECTION,
  DSM_SECTION_PY,
  DSM_SECTION_TITLE,
  DSM_TAG,
  DSM_TITLE_GRADIENT,
  DSM_BODY,
} from "@/components/digital-marketing/strategy-dm-styles";
import {
  strategyFinalCta,
  strategyFocus,
  strategyHero,
  strategyProcess,
  strategyWhy,
} from "@/lib/digital-marketing/strategy-content";

function StrategyOverviewCard() {
  return (
    <div className={`${DSM_CARD} p-[2%] sm:p-6`} aria-hidden>
      <p className="text-sm font-bold text-slate-900">{strategyWhy.chartTitle}</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="col-span-2 rounded-xl bg-violet-50/80 p-3">
          <svg viewBox="0 0 200 60" className="h-14 w-full">
            <path
              d="M0 45 L30 38 L60 42 L90 28 L120 32 L150 18 L180 22 L200 10"
              fill="none"
              stroke="#7c3aed"
              strokeWidth="2.5"
            />
            <path
              d="M0 45 L30 38 L60 42 L90 28 L120 32 L150 18 L180 22 L200 10 L200 60 L0 60 Z"
              fill="url(#strat-chart-fill)"
              opacity="0.25"
            />
            <defs>
              <linearGradient id="strat-chart-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="rounded-xl bg-slate-50 p-3">
          <div className="flex h-16 items-end justify-center gap-1.5">
            {[40, 65, 50, 80, 55].map((h, i) => (
              <div
                key={i}
                className="w-3 rounded-t-sm bg-violet-400"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center rounded-xl bg-slate-50 p-3">
          <svg viewBox="0 0 80 80" className="h-16 w-16">
            <circle cx="40" cy="40" r="28" fill="none" stroke="#e9e5ff" strokeWidth="10" />
            <circle
              cx="40"
              cy="40"
              r="28"
              fill="none"
              stroke="#7c3aed"
              strokeWidth="10"
              strokeDasharray="120 176"
              transform="rotate(-90 40 40)"
            />
            <text x="40" y="44" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#7c3aed">
              68%
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function StrategyDmLanding() {
  const { badge, titleBefore, titleAccent, subtitle, cta } = strategyHero;

  return (
    <div className="min-h-screen w-full max-w-none bg-white">
      <section className={`${DSM_SECTION} pb-10 pt-10 sm:pb-14 sm:pt-12`}>
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-[4%]">
          <Reveal className="w-full min-w-0">
            <p className={DSM_TAG}>{badge}</p>
            <h1 className="mt-5 text-[1.75rem] font-bold leading-[1.2] tracking-tight text-slate-900 sm:text-[2.1rem] lg:text-[2.5rem]">
              {titleBefore}{" "}
              <span className={DSM_TITLE_GRADIENT}>{titleAccent}</span>
            </h1>
            <p className={`mt-5 ${DSM_BODY}`}>{subtitle}</p>
            <div className="mt-8">
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={DSM_BTN_PRIMARY}
              >
                {cta}
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="flex w-full min-w-0 items-center justify-center">
            <StrategyDmHeroDashboard />
          </Reveal>
        </div>
      </section>

      <section className={`${DSM_SECTION} bg-slate-50/60 ${DSM_SECTION_PY}`}>
        <Reveal className="w-full text-center">
          <h2 className={DSM_SECTION_TITLE}>{strategyProcess.title}</h2>
        </Reveal>

        <div className="relative mt-10 w-full lg:mt-12">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[4%] right-[4%] top-8 hidden items-center lg:flex"
          >
            <div className="h-0 w-full border-t border-dashed border-violet-200" />
          </div>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {strategyProcess.steps.map((step, i) => {
              const Icon = step.icon as LucideIcon;
              return (
                <Reveal key={step.num} delay={i * 0.04}>
                  <article className={`${DSM_CARD} flex h-full flex-col items-center p-[2%] text-center sm:p-5`}>
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: DSM_PURPLE }}
                    >
                      {step.num}
                    </span>
                    <span className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50">
                      <Icon className="h-5 w-5 text-violet-600" strokeWidth={2} />
                    </span>
                    <h3 className="mt-4 text-sm font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">{step.desc}</p>
                    {i < strategyProcess.steps.length - 1 && (
                      <ArrowRight
                        className="mt-4 hidden h-4 w-4 text-violet-300 lg:block"
                        aria-hidden
                      />
                    )}
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${DSM_SECTION} ${DSM_SECTION_PY}`}>
        <Reveal className="w-full text-center">
          <h2 className={DSM_SECTION_TITLE}>{strategyFocus.title}</h2>
        </Reveal>

        <div className="mt-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {strategyFocus.items.map((item, i) => {
            const Icon = item.icon as LucideIcon;
            return (
              <Reveal key={item.title} delay={i * 0.03}>
                <article className={`${DSM_CARD} flex gap-4 p-[2%] sm:p-5`}>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50">
                    <Icon className="h-5 w-5 text-violet-600" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 sm:text-base">{item.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500 sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className={`${DSM_SECTION} bg-slate-50/50 ${DSM_SECTION_PY}`}>
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-[3%]">
          <Reveal>
            <h2 className="text-[1.5rem] font-bold tracking-tight text-slate-900 sm:text-[1.75rem]">
              {strategyWhy.title}
            </h2>
            <ul className="mt-6 space-y-4">
              {strategyWhy.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-700 sm:text-[15px]">
                  <span
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: DSM_PURPLE }}
                  >
                    <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.06}>
            <StrategyOverviewCard />
          </Reveal>
        </div>
      </section>

      <section className={`${DSM_SECTION} pb-16 pt-4 sm:pb-20`}>
        <Reveal>
          <div
            className="flex w-full flex-col items-start gap-6 rounded-3xl p-[2%] sm:flex-row sm:items-center sm:gap-8 sm:p-[2%]"
            style={{ backgroundColor: DSM_NAVY }}
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-600 shadow-lg">
              <PieChart className="h-7 w-7 text-white" strokeWidth={2} />
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-bold text-white sm:text-2xl">{strategyFinalCta.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{strategyFinalCta.subtitle}</p>
            </div>
            <Link
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${DSM_BTN_PRIMARY} shrink-0`}
            >
              {strategyFinalCta.cta}
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

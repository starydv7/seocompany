import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import Reveal from "@/components/Reveal";
import {
  FRANCHISE_BTN,
  FRANCHISE_ITEM_TITLE,
  FRANCHISE_SECTION,
  FRANCHISE_SECTION_SUBTITLE,
  FRANCHISE_SECTION_TITLE,
  TITLE_GRADIENT,
} from "@/components/seo/franchise-seo-styles";
import { franchiseProblemsSection } from "@/lib/seo/franchise-content";

const DIAGRAM_CELL = "flex h-12 w-full items-center justify-center";

function ProblemCard({
  title,
  diagram,
}: {
  title: string;
  diagram: number;
}) {
  return (
    <article className="flex h-full w-full min-w-0 flex-col rounded-xl border border-slate-200/90 bg-white px-3 py-4 shadow-[0_2px_14px_rgba(15,23,42,0.05)] sm:px-4 sm:py-5">
      <h3 className={`flex min-h-[3rem] items-center justify-center text-center ${FRANCHISE_ITEM_TITLE}`}>
        {title}
      </h3>
      <div className="mt-3 grid min-h-[9rem] flex-1 grid-cols-[1fr_auto_1fr] items-end gap-1">
        <div className="flex min-w-0 flex-col">
          <p className={`mb-2 text-center text-xs text-slate-400`}>Before</p>
          <div className={DIAGRAM_CELL}>
            <BeforeHalf type={diagram} />
          </div>
        </div>
        <ArrowRight className="mb-6 h-3.5 w-3.5 shrink-0 self-end text-indigo-300" />
        <div className="flex min-w-0 flex-col">
          <p className="mb-2 text-center text-xs text-slate-400">After</p>
          <div className={DIAGRAM_CELL}>
            <AfterHalf type={diagram} />
          </div>
        </div>
      </div>
    </article>
  );
}

function BeforeHalf({ type }: { type: number }) {
  if (type === 0) {
    return (
      <svg viewBox="0 0 48 44" className="h-11 w-12 opacity-75 sm:h-12 sm:w-14">
        <circle cx="24" cy="6" r="3.5" fill="#a5b4fc" />
        <circle cx="10" cy="22" r="3" fill="#cbd5e1" />
        <circle cx="38" cy="20" r="3" fill="#c4b5fd" />
        <circle cx="24" cy="36" r="3" fill="#cbd5e1" />
        <line x1="24" y1="9" x2="10" y2="19" stroke="#cbd5e1" strokeWidth="1" />
        <line x1="24" y1="9" x2="38" y2="17" stroke="#cbd5e1" strokeWidth="1" />
        <line x1="10" y1="25" x2="24" y2="33" stroke="#cbd5e1" strokeWidth="1" />
      </svg>
    );
  }
  if (type === 1) {
    return (
      <div className="grid grid-cols-4 gap-0.5 opacity-75 sm:gap-1">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className={`h-3.5 w-3.5 rounded-full sm:h-4 sm:w-4 ${i % 3 === 0 ? "bg-violet-400" : "bg-slate-200"}`}
          />
        ))}
      </div>
    );
  }
  if (type === 2) {
    return (
      <svg viewBox="0 0 50 36" className="h-10 w-12 opacity-75 sm:h-11 sm:w-14">
        <circle cx="18" cy="18" r="12" fill="#818cf8" opacity="0.75" />
        <circle cx="32" cy="18" r="12" fill="#a78bfa" opacity="0.75" />
      </svg>
    );
  }
  if (type === 3) {
    return (
      <svg viewBox="0 0 50 36" className="h-10 w-12 opacity-75 sm:h-11 sm:w-14">
        <circle cx="18" cy="18" r="12" fill="#60a5fa" opacity="0.8" />
        <circle cx="32" cy="18" r="12" fill="#c084fc" opacity="0.8" />
      </svg>
    );
  }
  return (
    <div className="flex w-14 flex-col gap-0.5 opacity-75 sm:w-16">
      <span className="h-1.5 rounded-sm bg-orange-300" />
      <span className="h-1.5 rounded-sm bg-violet-300" />
      <span className="h-1.5 rounded-sm bg-slate-200" />
      <span className="h-1.5 rounded-sm bg-slate-300" />
    </div>
  );
}

function AfterHalf({ type }: { type: number }) {
  if (type === 0) {
    return (
      <svg viewBox="0 0 48 44" className="h-11 w-12 sm:h-12 sm:w-14">
        <circle cx="24" cy="6" r="3.5" fill="#6366f1" />
        <circle cx="10" cy="22" r="3" fill="#818cf8" />
        <circle cx="38" cy="20" r="3" fill="#8b5cf6" />
        <circle cx="24" cy="36" r="3" fill="#6366f1" />
        <line x1="24" y1="9" x2="10" y2="19" stroke="#6366f1" strokeWidth="1" />
        <line x1="24" y1="9" x2="38" y2="17" stroke="#8b5cf6" strokeWidth="1" />
        <line x1="10" y1="25" x2="24" y2="33" stroke="#6366f1" strokeWidth="1" />
      </svg>
    );
  }
  if (type === 1) {
    return (
      <div className="grid grid-cols-4 gap-0.5 sm:gap-1">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 sm:h-4 sm:w-4"
          >
            <svg viewBox="0 0 10 10" className="h-2.5 w-2.5">
              <path
                d="M1.5 5 L4 7.5 L8.5 2.5"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        ))}
      </div>
    );
  }
  if (type === 2) {
    return <span className="block h-10 w-10 rounded-full bg-emerald-500 sm:h-11 sm:w-11" />;
  }
  if (type === 3) {
    return (
      <div className="flex items-center gap-1">
        <span className="h-8 w-8 rounded-full bg-emerald-500 sm:h-9 sm:w-9" />
        <div className="relative h-8 w-8 sm:h-9 sm:w-9">
          <span className="absolute left-0 h-8 w-8 rounded-full bg-emerald-400 sm:h-9 sm:w-9" />
          <span className="absolute left-2 h-8 w-8 rounded-full bg-blue-500 sm:left-2.5 sm:h-9 sm:w-9" />
        </div>
      </div>
    );
  }
  return (
    <div className="flex w-14 flex-col gap-1 sm:w-16">
      <span className="h-2 rounded-sm bg-emerald-500" />
      <span className="h-2 rounded-sm bg-blue-500" />
    </div>
  );
}

export default function FranchiseProblemsSection() {
  const { titlePrefix, titleAccent, subtitle, problems } = franchiseProblemsSection;

  return (
    <section className={FRANCHISE_SECTION}>
      <div className={`grid w-full grid-cols-1 items-start gap-[2%] lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:items-center xl:grid-cols-[minmax(0,300px)_minmax(0,1fr)]`}>
        <Reveal className="min-w-0 shrink-0 lg:sticky lg:top-24 lg:max-w-[300px] lg:self-start">
          <h2 className={FRANCHISE_SECTION_TITLE}>
            {titlePrefix} <span className={TITLE_GRADIENT}>{titleAccent}</span>
          </h2>
          <p className={`mt-4 ${FRANCHISE_SECTION_SUBTITLE}`}>{subtitle}</p>
          <Link href={HUBSPOT_MEETING_URL} target="_blank" rel="noopener noreferrer" className={`mt-6 ${FRANCHISE_BTN}`}>
            Book a Strategy Call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="min-w-0 w-full">
          <div className="grid w-full grid-cols-2 items-stretch gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-3 xl:gap-4">
            {problems.map((problem, i) => (
              <Reveal key={problem.title} delay={i * 0.04} className="h-full min-w-0">
                <ProblemCard title={problem.title} diagram={problem.diagram} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

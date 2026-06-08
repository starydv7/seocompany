import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { localProblemsSection } from "@/lib/seo/local-content";

const CARD =
  "flex h-full w-full min-w-0 flex-col items-center rounded-xl border border-slate-200/80 bg-white px-3 py-5 text-center sm:px-4 sm:py-6";

const VISUAL_BOX = "flex w-full min-h-[8.75rem] flex-1 flex-col justify-end pt-4 sm:min-h-[9.25rem]";

function BeforeAfterColumns({ children }: { children: ReactNode }) {
  return <div className="grid w-full grid-cols-2 gap-2 sm:gap-3">{children}</div>;
}

function ColumnLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2 text-center text-[10px] font-medium tracking-wide text-slate-400">{children}</p>
  );
}

function MapSnippet({ position, variant }: { position: string; variant: "before" | "after" }) {
  const pinColor = variant === "before" ? "#a78bfa" : "#22c55e";
  const roadColor = variant === "before" ? "#cbd5e1" : "#86efac";
  return (
    <div className="flex min-w-0 flex-col items-center">
      <div className="w-full overflow-hidden rounded-md border border-slate-200/90 bg-slate-50/90">
        <div className="relative aspect-[4/3] w-full bg-gradient-to-b from-slate-100 to-slate-200/70">
          <svg viewBox="0 0 88 64" className="h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
            <path d="M0 48 Q22 34 44 42 T88 38 L88 64 L0 64 Z" fill="#e8ecf1" />
            <path d="M8 52 L28 44 L48 48 L72 44" stroke={roadColor} strokeWidth="1.2" fill="none" />
            <circle cx="44" cy="30" r="6" fill={pinColor} />
            <circle cx="44" cy="30" r="2.5" fill="white" />
          </svg>
        </div>
      </div>
      <p className="mt-1.5 text-[10px] font-semibold text-slate-700">{position}</p>
    </div>
  );
}

function CompareList({
  before,
  after,
  afterTone,
}: {
  before: string[];
  after: string[];
  afterTone: "blue" | "green";
}) {
  const afterClass = afterTone === "green" ? "text-emerald-600" : "text-blue-600";
  return (
    <BeforeAfterColumns>
      <div className="flex min-w-0 flex-col items-center px-0.5">
        <ColumnLabel>Before</ColumnLabel>
        <ul className="w-full space-y-1.5 text-center">
          {before.map((item) => (
            <li key={item} className="text-[10px] font-semibold leading-snug text-violet-600 sm:text-[11px]">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex min-w-0 flex-col items-center px-0.5">
        <ColumnLabel>After</ColumnLabel>
        <ul className="w-full space-y-1.5 text-center">
          {after.map((item) => (
            <li key={item} className={`text-[10px] font-semibold leading-snug sm:text-[11px] ${afterClass}`}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </BeforeAfterColumns>
  );
}

function StarRow({
  filled,
  total = 5,
  size = "md",
  greenAfter,
}: {
  filled: number;
  total?: number;
  size?: "md" | "sm";
  greenAfter?: boolean;
}) {
  const cls = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4 sm:h-[1.15rem] sm:w-[1.15rem]";
  return (
    <div className="flex items-center justify-center gap-0.5">
      {Array.from({ length: total }).map((_, i) => (
        <StarIcon
          key={i}
          className={cls}
          filled={i < Math.floor(filled)}
          half={filled % 1 >= 0.5 && i === Math.floor(filled)}
          green={greenAfter && i < filled}
        />
      ))}
    </div>
  );
}

function StarIcon({
  className,
  filled,
  half,
  green,
}: {
  className: string;
  filled: boolean;
  half?: boolean;
  green?: boolean;
}) {
  let fill = "#e2e8f0";
  if (filled) fill = green ? "#22c55e" : "#f97316";
  if (half) fill = "url(#star-half)";
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden>
      {half && (
        <defs>
          <linearGradient id="star-half" x1="0" x2="1" y1="0" y2="0">
            <stop offset="50%" stopColor="#f97316" />
            <stop offset="50%" stopColor="#e2e8f0" />
          </linearGradient>
        </defs>
      )}
      <path
        d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.2l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5z"
        fill={fill}
      />
    </svg>
  );
}

function MiniGauge({ variant }: { variant: "before" | "after" }) {
  const rotation = variant === "before" ? -58 : 58;
  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative h-[4.25rem] w-full max-w-[7.5rem] sm:h-[4.75rem]">
        <svg viewBox="0 0 120 68" className="h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
          <defs>
            <linearGradient id={`gauge-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f87171" />
              <stop offset="45%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#2dd4bf" />
            </linearGradient>
          </defs>
          <path
            d="M12 58 A48 48 0 0 1 108 58"
            fill="none"
            stroke={`url(#gauge-${variant})`}
            strokeWidth="10"
            strokeLinecap="round"
          />
          <circle cx="60" cy="58" r="4" fill="#475569" />
          <line
            x1="60"
            y1="58"
            x2="60"
            y2="22"
            stroke="#334155"
            strokeWidth="2"
            strokeLinecap="round"
            transform={`rotate(${rotation} 60 58)`}
          />
        </svg>
      </div>
      <p
        className={`mt-1 text-center text-[9px] font-semibold leading-tight sm:text-[10px] ${
          variant === "before" ? "text-red-500" : "text-teal-600"
        }`}
      >
        {variant === "before" ? "Low Authority" : "High Authority"}
      </p>
    </div>
  );
}

function ProblemVisual({ type }: { type: (typeof localProblemsSection.problems)[number]["visual"] }) {
  if (type === "maps") {
    return (
      <BeforeAfterColumns>
        <div className="min-w-0">
          <ColumnLabel>Before</ColumnLabel>
          <MapSnippet position="Position #15" variant="before" />
        </div>
        <div className="min-w-0">
          <ColumnLabel>After</ColumnLabel>
          <MapSnippet position="Position #3" variant="after" />
        </div>
      </BeforeAfterColumns>
    );
  }
  if (type === "nap") {
    return (
      <CompareList
        before={["Wrong Address", "Wrong Phone", "Different Name"]}
        after={["Consistent", "Accurate", "Trusted"]}
        afterTone="blue"
      />
    );
  }
  if (type === "pages") {
    return (
      <CompareList
        before={["Duplicate Content", "No Local Focus", "Weak Rankings"]}
        after={["Unique Content", "Local Optimized", "Higher Rankings"]}
        afterTone="green"
      />
    );
  }
  if (type === "reviews") {
    return (
      <div className="flex w-full flex-col items-center gap-3 sm:gap-4">
        <StarRow filled={3.5} />
        <BeforeAfterColumns>
          <div className="flex flex-col items-center">
            <ColumnLabel>Before</ColumnLabel>
            <p className="text-xl font-bold leading-none text-slate-800">3.2</p>
            <div className="mt-1.5">
              <StarRow filled={3} size="sm" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <ColumnLabel>After</ColumnLabel>
            <p className="text-xl font-bold leading-none text-emerald-600">4.8</p>
            <div className="mt-1.5">
              <StarRow filled={5} size="sm" greenAfter />
            </div>
          </div>
        </BeforeAfterColumns>
      </div>
    );
  }
  return (
    <BeforeAfterColumns>
      <div className="min-w-0">
        <ColumnLabel>Before</ColumnLabel>
        <MiniGauge variant="before" />
      </div>
      <div className="min-w-0">
        <ColumnLabel>After</ColumnLabel>
        <MiniGauge variant="after" />
      </div>
    </BeforeAfterColumns>
  );
}

export default function LocalProblemsSection() {
  const { title, subtitle, problems } = localProblemsSection;

  return (
    <section className="w-full px-[2%] py-14 sm:py-16 lg:py-20">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-[1.75rem]">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-[15px]">
          {subtitle}
        </p>
      </Reveal>

      <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5 lg:items-stretch lg:gap-3 xl:gap-4">
        {problems.map((problem, i) => (
          <Reveal key={problem.title} delay={i * 0.04} className="h-full min-w-0">
            <article className={CARD}>
              <h3 className="w-full px-1 text-[13px] font-bold leading-snug text-slate-900 sm:text-sm lg:text-[14px]">
                {problem.title}
              </h3>
              <p className="mx-auto mt-2 flex min-h-[2.75rem] w-full items-center justify-center px-1 text-[11px] leading-snug text-slate-500 sm:min-h-[3rem] sm:text-xs">
                {problem.subtitle}
              </p>
              <div className={VISUAL_BOX}>
                <div className="flex w-full max-w-full items-end justify-center">
                  <ProblemVisual type={problem.visual} />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

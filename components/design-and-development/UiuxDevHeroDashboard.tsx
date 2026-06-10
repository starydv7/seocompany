import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { UDM_CARD } from "@/components/design-and-development/uiux-dev-styles";
import { uiuxDevHero } from "@/lib/design-and-development/uiux-dev-content";

function ProcessBar() {
  return (
    <div className={UDM_CARD}>
      <p className="mb-3 text-[10px] font-bold text-slate-800 sm:text-xs">Our Design Process</p>
      <div className="flex items-start overflow-x-auto">
        {uiuxDevHero.process.map((step, i) => {
          const Icon = step.icon as LucideIcon;
          return (
            <div key={step.title} className="flex min-w-0 flex-1 items-start">
              <div className="flex flex-1 flex-col items-center px-0.5 text-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-100 bg-violet-50 sm:h-10 sm:w-10">
                  <Icon className="h-4 w-4 text-violet-600 sm:h-[18px] sm:w-[18px]" strokeWidth={2} />
                </div>
                <span className="mt-1.5 text-[8px] font-bold text-violet-600 sm:text-[9px]">{step.step}</span>
                <p className="mt-0.5 text-[9px] font-bold text-slate-800 sm:text-[10px]">{step.title}</p>
                <p className="mt-0.5 max-w-[5.5rem] text-[7px] leading-snug text-slate-500 sm:max-w-[6rem] sm:text-[8px]">
                  {step.desc}
                </p>
              </div>
              {i < uiuxDevHero.process.length - 1 && (
                <ChevronRight className="mx-0.5 mt-3 h-3.5 w-3.5 shrink-0 text-slate-300 sm:mt-3.5 sm:h-4 sm:w-4" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function WireframeCard() {
  return (
    <div className={`${UDM_CARD} flex flex-col`}>
      <p className="mb-2 text-[10px] font-bold text-slate-800 sm:text-xs">Wireframe Example</p>
      <div className="flex-1 rounded-lg border border-slate-200 bg-slate-50 p-2">
        <div className="mb-2 flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        </div>
        <div className="space-y-1.5">
          <div className="h-3 w-3/4 rounded bg-slate-200" />
          <div className="h-2 w-full rounded bg-slate-200/80" />
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            <div className="h-10 rounded bg-slate-200/70" />
            <div className="h-10 rounded bg-slate-200/70" />
          </div>
          <div className="h-2 w-5/6 rounded bg-slate-200/60" />
          <div className="h-6 w-1/3 rounded bg-violet-200/80" />
        </div>
      </div>
    </div>
  );
}

function PrototypeFlowCard() {
  const screens = ["Home", "Browse", "Cart", "Done"];
  return (
    <div className={`${UDM_CARD} flex flex-col`}>
      <p className="mb-2 text-[10px] font-bold text-slate-800 sm:text-xs">Interactive Prototype Flow</p>
      <div className="relative flex flex-1 items-center justify-between gap-1 px-1">
        <div className="absolute inset-x-2 top-1/2 h-px -translate-y-1/2 border-t-2 border-dashed border-blue-300" aria-hidden />
        {screens.map((label, i) => (
          <div key={label} className="relative z-10 flex flex-col items-center">
            <div className="h-[4.5rem] w-[2.2rem] rounded-md border-2 border-blue-200 bg-white p-0.5 shadow-sm sm:h-[5rem] sm:w-[2.5rem]">
              <div className="h-full rounded-sm bg-gradient-to-b from-blue-50 to-white p-0.5">
                <div className="mb-0.5 h-1 w-full rounded bg-blue-200/60" />
                <div className="h-1 w-2/3 rounded bg-slate-200" />
                <div className="mt-1 h-2 w-full rounded bg-slate-100" />
              </div>
            </div>
            <span className="mt-1 text-[6px] font-medium text-slate-500 sm:text-[7px]">{label}</span>
            {i < screens.length - 1 && (
              <span className="absolute -right-2 top-1/2 z-20 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-blue-400" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function DesignSystemCard() {
  const { colors } = uiuxDevHero.designSystem;
  return (
    <div className={`${UDM_CARD} flex flex-col`}>
      <p className="mb-2 text-[10px] font-bold text-slate-800 sm:text-xs">Design System</p>
      <p className="mb-1.5 text-[8px] font-semibold text-slate-600 sm:text-[9px]">Colors</p>
      <div className="mb-2.5 flex gap-1.5">
        {colors.map((c) => (
          <span
            key={c}
            className="h-5 w-5 rounded-full border border-slate-100 shadow-sm sm:h-6 sm:w-6"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
      <p className="mb-1 text-[8px] font-semibold text-slate-600 sm:text-[9px]">Typography — Inter</p>
      <div className="mb-2.5 space-y-0.5">
        <p className="text-[10px] font-bold text-slate-800 sm:text-[11px]">Heading 1</p>
        <p className="text-[9px] font-semibold text-slate-700 sm:text-[10px]">Heading 2</p>
        <p className="text-[8px] text-slate-500 sm:text-[9px]">Body Text</p>
      </div>
      <p className="mb-1.5 text-[8px] font-semibold text-slate-600 sm:text-[9px]">UI Elements</p>
      <div className="flex flex-wrap gap-1">
        <span className="rounded bg-violet-600 px-2 py-0.5 text-[7px] font-semibold text-white sm:text-[8px]">Primary</span>
        <span className="rounded border border-slate-200 px-2 py-0.5 text-[7px] font-semibold text-slate-600 sm:text-[8px]">Secondary</span>
        <span className="inline-flex h-3.5 w-6 items-center rounded-full bg-violet-600 px-0.5 sm:h-4 sm:w-7">
          <span className="h-2.5 w-2.5 rounded-full bg-white sm:h-3 sm:w-3" />
        </span>
        <span className="h-4 w-12 rounded border border-slate-200 bg-white sm:h-5 sm:w-14" />
      </div>
    </div>
  );
}

function ResearchCard() {
  const { research } = uiuxDevHero;
  const r = 28;
  const cx = 40;
  const cy = 40;
  let offset = 0;
  const arcs = research.segments.map((seg) => {
    const dash = (seg.pct / 100) * 2 * Math.PI * r;
    const gap = 2 * Math.PI * r - dash;
    const el = (
      <circle
        key={seg.label}
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke={seg.color}
        strokeWidth="10"
        strokeDasharray={`${dash} ${gap}`}
        strokeDashoffset={-offset}
        transform={`rotate(-90 ${cx} ${cy})`}
      />
    );
    offset += dash;
    return el;
  });

  return (
    <div className={UDM_CARD}>
      <p className="mb-2 text-[10px] font-bold text-slate-800 sm:text-xs">User Research & Insights</p>
      <div className="flex items-center gap-3">
        <div className="relative shrink-0">
          <svg viewBox="0 0 80 80" className="h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]">
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f1f5f9" strokeWidth="10" />
            {arcs}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[9px] font-bold text-slate-900 sm:text-[10px]">{research.total}</span>
            <span className="text-[6px] text-slate-500 sm:text-[7px]">Total Users</span>
          </div>
        </div>
        <div className="min-w-0 flex-1 space-y-1">
          {research.segments.map((seg) => (
            <div key={seg.label} className="flex items-center gap-1.5">
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: seg.color }} />
              <span className="text-[8px] text-slate-600 sm:text-[9px]">{seg.label}</span>
              <span className="ml-auto text-[8px] font-semibold text-slate-800 sm:text-[9px]">{seg.pct}%</span>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-2.5 text-[8px] font-semibold text-slate-600 sm:text-[9px]">Top User Goals</p>
      <div className="mt-1 flex flex-wrap gap-1">
        {research.goals.map((g) => (
          <span key={g} className="rounded-full bg-violet-50 px-2 py-0.5 text-[7px] font-medium text-violet-700 sm:text-[8px]">
            {g}
          </span>
        ))}
      </div>
    </div>
  );
}

function UsabilityCard() {
  const { usability } = uiuxDevHero;
  return (
    <div className={UDM_CARD}>
      <p className="mb-2 text-[10px] font-bold text-slate-800 sm:text-xs">Usability Testing Results</p>
      <div className="flex items-start gap-3">
        <div className="relative shrink-0">
          <svg viewBox="0 0 72 72" className="h-14 w-14 sm:h-16 sm:w-16">
            <circle cx="36" cy="36" r="28" fill="none" stroke="#f1f5f9" strokeWidth="8" />
            <circle
              cx="36"
              cy="36"
              r="28"
              fill="none"
              stroke="#7c3aed"
              strokeWidth="8"
              strokeDasharray={`${(usability.successRate / 100) * 176} 176`}
              strokeLinecap="round"
              transform="rotate(-90 36 36)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[11px] font-bold text-violet-600 sm:text-xs">{usability.successRate}%</span>
            <span className="text-[6px] text-slate-500 sm:text-[7px]">Success</span>
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 60 24" className="h-6 w-16">
              <polyline
                points="0,20 10,16 20,18 30,12 40,14 50,8 60,10"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-[9px] font-bold text-emerald-600 sm:text-[10px]">{usability.improvement}</span>
          </div>
          <p className="text-[7px] text-slate-500 sm:text-[8px]">Improvement in User Satisfaction</p>
        </div>
      </div>
      <p className="mb-1.5 mt-2.5 text-[8px] font-semibold text-slate-600 sm:text-[9px]">Key Metrics</p>
      <div className="space-y-1.5">
        {usability.metrics.map((m) => (
          <div key={m.label}>
            <div className="mb-0.5 flex justify-between text-[7px] sm:text-[8px]">
              <span className="text-slate-600">{m.label}</span>
              <span className="font-semibold text-slate-800">{"display" in m ? m.display : `${m.pct}%`}</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-pink-500"
                style={{ width: `${m.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function UiuxDevHeroDashboard() {
  return (
    <div className="flex w-full flex-col gap-[2%]">
      <ProcessBar />
      <div className="grid grid-cols-1 gap-[2%] sm:grid-cols-3">
        <WireframeCard />
        <PrototypeFlowCard />
        <DesignSystemCard />
      </div>
      <div className="grid grid-cols-1 gap-[2%] sm:grid-cols-2">
        <ResearchCard />
        <UsabilityCard />
      </div>
    </div>
  );
}

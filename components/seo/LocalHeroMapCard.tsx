import { MapPin, Search, Star, TrendingUp } from "lucide-react";
import { localHero } from "@/lib/seo/local-content";

const MAP_MARKERS = [
  { left: "18%", top: "32%" },
  { left: "72%", top: "24%" },
  { left: "78%", top: "58%" },
  { left: "24%", top: "68%" },
  { left: "58%", top: "38%" },
  { left: "42%", top: "22%" },
];

function MapMarker({ left, top }: { left: string; top: string }) {
  return (
    <span
      className="absolute z-[2] flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 shadow-md shadow-blue-200/80"
      style={{ left, top, transform: "translate(-50%, -50%)" }}
    >
      <span className="h-2 w-2 rounded-full bg-white" />
    </span>
  );
}

function StylizedMap() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 400 280"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <rect width="400" height="280" fill="#f1f5f9" />
      <path d="M0 80 Q120 60 200 90 T400 70 L400 0 L0 0 Z" fill="#e8ecf4" />
      <path d="M0 200 Q100 220 220 190 T400 210 L400 280 L0 280 Z" fill="#e2e8f0" />
      <ellipse cx="85" cy="95" rx="42" ry="28" fill="#d1fae5" opacity="0.85" />
      <ellipse cx="310" cy="200" rx="55" ry="32" fill="#d1fae5" opacity="0.7" />
      <path
        d="M40 140 L120 100 L200 130 L280 90 L360 120"
        fill="none"
        stroke="#cbd5e1"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M60 180 L160 150 L240 170 L340 140"
        fill="none"
        stroke="#e2e8f0"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M100 60 L180 80 L260 50 L320 75"
        fill="none"
        stroke="#e2e8f0"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FlowStepsColumn() {
  const { flowSteps } = localHero;

  return (
    <div className="relative flex w-[38%] max-w-[11.5rem] shrink-0 flex-col justify-between gap-2 py-0.5 sm:max-w-[12.5rem] sm:gap-2.5">
      <div
        aria-hidden
        className="absolute left-[1.35rem] top-[12%] bottom-[12%] w-px border-l-2 border-dashed border-violet-200"
      />
      {flowSteps.map((step) => {
        const Icon = step.icon;
        return (
          <div
            key={step.title}
            className="relative z-[1] flex items-center gap-2.5 rounded-xl border border-slate-100 bg-white px-2.5 py-2.5 shadow-[0_2px_12px_rgba(15,23,42,0.06)] sm:gap-3 sm:px-3 sm:py-3"
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${step.color}`}
            >
              <Icon className="h-4 w-4" strokeWidth={2} />
            </span>
            <div className="min-w-0 leading-tight">
              <p className="text-[11px] font-bold text-slate-900 sm:text-xs">{step.title}</p>
              <p className="mt-0.5 text-[10px] leading-snug text-slate-500">{step.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function MetricsBar() {
  const { performanceMetrics } = localHero;

  return (
    <div className="grid grid-cols-2 divide-slate-100 border-t border-slate-100 sm:grid-cols-4 sm:divide-x">
      {performanceMetrics.map((m) => (
        <div
          key={m.label}
          className="px-4 py-4 text-center sm:px-5 sm:py-5 [&:not(:last-child)]:border-b sm:[&:not(:last-child)]:border-b-0"
        >
          <p className="text-[11px] font-medium text-slate-500">{m.label}</p>
          <p className="mt-1.5 text-lg font-bold text-slate-900 sm:text-xl">{m.value}</p>
          <p className="mt-1 inline-flex items-center justify-center gap-0.5 text-xs font-semibold text-emerald-600">
            <TrendingUp className="h-3.5 w-3.5" strokeWidth={2.5} />
            {m.delta.replace("+", "+ ")}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function LocalHeroMapCard() {
  const { mapSearchQuery, businessRating } = localHero;

  return (
    <div className="flex h-full min-h-[500px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_10px_40px_rgba(99,102,241,0.12)] sm:min-h-[540px]">
      <div className="flex min-h-0 flex-1 gap-2.5 p-3 sm:gap-3 sm:p-4">
        <div className="relative min-h-[240px] min-w-0 flex-1 overflow-hidden rounded-xl border border-slate-100 sm:min-h-[260px]">
          <StylizedMap />

          <div className="absolute left-3 right-3 top-3 z-[4] sm:left-4 sm:right-4 sm:top-4">
            <div className="flex items-center justify-between gap-2 rounded-xl border border-slate-200/90 bg-white px-3.5 py-2.5 shadow-sm">
              <span className="text-sm font-medium text-slate-700">{mapSearchQuery}</span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100">
                <Search className="h-4 w-4 text-violet-600" strokeWidth={2.5} />
              </span>
            </div>
          </div>

          {[100, 76, 52].map((size) => (
            <div
              key={size}
              className="pointer-events-none absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200/80 bg-sky-100/20"
              style={{ width: size, height: size }}
            />
          ))}

          {MAP_MARKERS.map((m) => (
            <MapMarker key={`${m.left}-${m.top}`} left={m.left} top={m.top} />
          ))}

          <div className="absolute left-1/2 top-[52%] z-[5] flex -translate-x-1/2 -translate-y-[58%] flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 shadow-[0_6px_20px_rgba(91,33,182,0.45)]">
              <MapPin className="h-7 w-7 text-white" fill="white" strokeWidth={1.5} />
            </div>
            <div className="mt-2 rounded-xl border border-slate-100 bg-white px-3.5 py-2 text-center shadow-md">
              <p className="text-xs font-bold text-slate-900">Your Business</p>
              <p className="mt-1 flex items-center justify-center gap-1">
                <span className="text-xs font-bold text-slate-800">{businessRating}</span>
                <span className="flex text-emerald-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </span>
              </p>
            </div>
          </div>
        </div>

        <FlowStepsColumn />
      </div>

      <MetricsBar />
    </div>
  );
}

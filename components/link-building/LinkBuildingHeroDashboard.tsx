import { linkBuildingHero } from "@/lib/link-building/link-building-content";

function TrafficLights() {
  return (
    <div className="flex items-center gap-2">
      <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
      <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
      <span className="h-3 w-3 rounded-full bg-[#28C840]" />
    </div>
  );
}

function ReferringDomainsChart() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const yLabels = ["50", "40", "30", "20", "10"];

  return (
    <div className="flex h-[9.5rem] gap-2 sm:h-[11rem]">
      <div className="flex w-7 shrink-0 flex-col justify-between py-1 text-[10px] font-medium text-slate-400">
        {yLabels.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
      <div className="relative min-w-0 flex-1">
        <svg viewBox="0 0 300 100" className="h-[calc(100%-1.25rem)] w-full" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="lb-chart-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[20, 40, 60, 80].map((y) => (
            <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="#e2e8f0" strokeWidth="0.6" />
          ))}
          <polygon
            points="0,82 43,72 86,68 129,52 172,48 215,32 258,28 300,18 300,100 0,100"
            fill="url(#lb-chart-fill)"
          />
          <polyline
            points="0,82 43,72 86,68 129,52 172,48 215,32 258,28 300,18"
            fill="none"
            stroke="#6366F1"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="215" cy="32" r="5" fill="#6366F1" stroke="#fff" strokeWidth="2" />
          <rect x="188" y="8" width="58" height="24" rx="5" fill="#1e293b" />
          <text x="217" y="22" textAnchor="middle" fill="#fff" fontSize="7.5" fontWeight="600">
            May 30
          </text>
          <text x="217" y="30" textAnchor="middle" fill="#c7d2fe" fontSize="7">
            48
          </text>
        </svg>
        <div className="mt-1 flex justify-between text-[10px] font-medium text-slate-400">
          {months.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardPanel() {
  const { dashboard } = linkBuildingHero;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_28px_80px_rgba(15,23,42,0.14)]">
      <div className="border-b border-slate-100 px-4 py-3">
        <TrafficLights />
      </div>

      <div className="flex min-h-[22rem] sm:min-h-[26rem]">
        <aside className="hidden w-[24%] shrink-0 border-r border-slate-100 bg-slate-50/70 py-4 sm:block">
          <nav className="space-y-1">
            {dashboard.nav.map((item, i) => (
              <div
                key={item}
                className={`relative px-4 py-2 text-xs font-medium ${
                  i === 0
                    ? "bg-violet-50 text-violet-700 before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:bg-violet-600"
                    : "text-slate-500"
                }`}
              >
                {item}
              </div>
            ))}
          </nav>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col p-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {dashboard.metrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
                <p className="text-[11px] font-medium text-slate-500">{m.label}</p>
                <p className="mt-1 text-lg font-bold text-slate-900">{m.value}</p>
                <p className="mt-0.5 flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                  <svg viewBox="0 0 10 10" className="h-2.5 w-2.5" aria-hidden>
                    <path d="M5 1L9 7H1L5 1z" fill="currentColor" />
                  </svg>
                  {m.change}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid flex-1 grid-cols-1 gap-3 lg:grid-cols-[1fr_36%]">
            <div className="rounded-xl border border-slate-100 bg-white p-3 sm:p-4">
              <p className="text-sm font-semibold text-slate-800">New Referring Domains</p>
              <ReferringDomainsChart />
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-3 sm:p-4">
              <p className="mb-3 text-sm font-semibold text-slate-800">Top Linked Pages</p>
              <div className="space-y-3">
                {dashboard.linkedPages.map((p) => (
                  <div key={p.label}>
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <span className="truncate text-[10px] font-medium text-slate-600 sm:text-xs">{p.label}</span>
                      <span className="shrink-0 text-xs font-bold text-slate-800">{p.pct}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full rounded-full bg-violet-600" style={{ width: `${p.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LinkBuildingHeroDashboard() {
  return (
    <div className="relative w-full">
      <DashboardPanel />
    </div>
  );
}

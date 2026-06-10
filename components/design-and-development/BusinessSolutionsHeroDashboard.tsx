import { businessSolutionsHero } from "@/lib/design-and-development/business-solutions-content";
import { BUSINESS_INTEGRATION_ICONS } from "@/components/design-and-development/BusinessSolutionsIntegrationIcons";

function MiniLineChart({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 80 28" className="h-7 w-full">
      <polyline
        points="0,22 12,18 24,20 36,12 48,14 60,8 72,10 80,6"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Sidebar() {
  return (
    <aside className="flex w-[28%] shrink-0 flex-col border-r border-slate-100 bg-slate-50/80 p-2 sm:p-2.5">
      <div className="mb-2 flex items-center gap-1.5 border-b border-slate-100 pb-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-violet-600 text-[8px] font-bold text-white">
          BE
        </span>
        <span className="text-[8px] font-bold text-slate-800 sm:text-[9px]">
          {businessSolutionsHero.dashboard.productName}
        </span>
      </div>
      <nav className="space-y-0.5">
        {businessSolutionsHero.dashboard.nav.map((item, i) => (
          <div
            key={item}
            className={`rounded-md px-1.5 py-1 text-[7px] font-medium sm:text-[8px] ${
              i === 0 ? "bg-violet-100 text-violet-700" : "text-slate-500"
            }`}
          >
            {item}
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default function BusinessSolutionsHeroDashboard() {
  const { dashboard } = businessSolutionsHero;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_8px_32px_rgba(15,23,42,0.08)]">
      <div className="flex min-h-[18rem] sm:min-h-[22rem]">
        <Sidebar />
        <div className="min-w-0 flex-1 p-2 sm:p-3">
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
            <div className="rounded-lg border border-slate-100 bg-white p-2 shadow-sm">
              <p className="text-[7px] font-semibold text-slate-600 sm:text-[8px]">Business Performance</p>
              <p className="mt-0.5 text-[9px] font-bold text-emerald-600 sm:text-[10px]">{dashboard.performance.value}</p>
              <p className="text-[6px] text-slate-500 sm:text-[7px]">{dashboard.performance.label}</p>
              <MiniLineChart color="#10b981" />
            </div>
            <div className="rounded-lg border border-slate-100 bg-white p-2 shadow-sm">
              <p className="text-[7px] font-semibold text-slate-600 sm:text-[8px]">{dashboard.efficiency.label}</p>
              <div className="mt-1 flex items-center gap-2">
                <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#f1f5f9" strokeWidth="5" />
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="#7c3aed"
                    strokeWidth="5"
                    strokeDasharray="70 88"
                    strokeLinecap="round"
                    transform="rotate(-90 18 18)"
                  />
                </svg>
                <div>
                  <p className="text-[10px] font-bold text-slate-900 sm:text-[11px]">{dashboard.efficiency.value}</p>
                  <p className="text-[7px] font-semibold text-emerald-600 sm:text-[8px]">{dashboard.efficiency.change}</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-slate-100 bg-white p-2 shadow-sm">
              <p className="text-[7px] font-semibold text-slate-600 sm:text-[8px]">Process Automation</p>
              <p className="mt-0.5 text-[9px] font-bold text-slate-900 sm:text-[10px]">{dashboard.automation.value}</p>
              <p className="text-[6px] text-slate-500 sm:text-[7px]">{dashboard.automation.label}</p>
              <div className="mt-1 flex items-end gap-0.5">
                {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-violet-400" style={{ height: `${h * 0.12}px` }} />
                ))}
              </div>
              <p className="mt-0.5 text-[7px] font-semibold text-violet-600 sm:text-[8px]">{dashboard.automation.change}</p>
            </div>
            <div className="rounded-lg border border-slate-100 bg-white p-2 shadow-sm">
              <p className="text-[7px] font-semibold text-slate-600 sm:text-[8px]">{dashboard.satisfaction.label}</p>
              <p className="mt-0.5 text-[10px] font-bold text-blue-600 sm:text-[11px]">{dashboard.satisfaction.value}</p>
              <MiniLineChart color="#3b82f6" />
            </div>
          </div>

          <div className="mt-1.5 rounded-lg border border-slate-100 bg-white p-2 shadow-sm sm:mt-2">
            <p className="mb-1.5 text-[7px] font-semibold text-slate-600 sm:text-[8px]">Top Integrations</p>
            <div className="space-y-1">
              {dashboard.integrations.map((name) => {
                const Icon = BUSINESS_INTEGRATION_ICONS[name as keyof typeof BUSINESS_INTEGRATION_ICONS];
                return (
                  <div key={name} className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      {Icon ? <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> : null}
                      <span className="text-[7px] font-medium text-slate-700 sm:text-[8px]">{name}</span>
                    </div>
                    <span className="flex items-center gap-0.5 text-[6px] font-semibold text-emerald-600 sm:text-[7px]">
                      <span className="h-1 w-1 rounded-full bg-emerald-500" />
                      Active
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-1.5 rounded-lg border border-slate-100 bg-slate-50 p-2 sm:mt-2">
            <p className="mb-1.5 text-[7px] font-semibold text-slate-600 sm:text-[8px]">Solution Architecture</p>
            <div className="flex flex-wrap items-center gap-1">
              {dashboard.architecture.map((step, i) => (
                <div key={step} className="flex items-center gap-1">
                  <span className="rounded-md bg-white px-1.5 py-0.5 text-[6px] font-semibold text-slate-700 shadow-sm sm:text-[7px]">
                    {step}
                  </span>
                  {i < dashboard.architecture.length - 1 && (
                    <span className="text-[8px] text-violet-400">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ecommerceDmHero } from "@/lib/digital-marketing/ecommerce-dm-content";

function RevenueChart() {
  return (
    <svg viewBox="0 0 280 90" className="h-full w-full" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="ecm-revenue-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points="0,65 40,55 80,58 120,38 160,42 200,28 240,32 280,20 280,90 0,90"
        fill="url(#ecm-revenue-fill)"
      />
      <polyline
        points="0,65 40,55 80,58 120,38 160,42 200,28 240,32 280,20"
        fill="none"
        stroke="#22c55e"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="200" cy="28" r="4" fill="#22c55e" />
      <rect x="178" y="8" width="52" height="18" rx="4" fill="#0f172a" opacity="0.85" />
      <text x="204" y="20" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="600">
        May 20 · $24,560
      </text>
    </svg>
  );
}

function DashboardPanel() {
  const { dashboard } = ecommerceDmHero;

  return (
    <div className="flex aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
      <aside className="hidden w-[24%] shrink-0 border-r border-slate-100 bg-slate-50/80 p-2 sm:block sm:p-2.5">
        <nav className="space-y-0.5">
          {dashboard.nav.map((item, i) => (
            <div
              key={item}
              className={`rounded-md px-2 py-1 text-[7px] font-medium sm:text-[8px] ${
                i === 0 ? "bg-emerald-100 text-emerald-800" : "text-slate-600"
              }`}
            >
              {item}
            </div>
          ))}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col p-2 sm:p-3">
        <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4 sm:gap-2">
          {dashboard.metrics.map((m) => (
            <div key={m.label} className="rounded-lg border border-slate-100 bg-white p-1.5 shadow-sm sm:p-2">
              <p className="text-[6px] font-medium text-slate-500 sm:text-[7px]">{m.label}</p>
              <p className="text-[10px] font-bold text-slate-900 sm:text-xs">{m.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-2 grid min-h-0 flex-1 grid-cols-1 gap-2 sm:grid-cols-[1fr_36%]">
          <div className="flex min-h-[4rem] flex-col rounded-lg border border-slate-100 bg-white p-2 sm:min-h-[5rem]">
            <p className="text-[7px] font-semibold text-slate-700 sm:text-[8px]">Revenue Over Time</p>
            <div className="mt-1 min-h-0 flex-1">
              <RevenueChart />
            </div>
          </div>
          <div className="rounded-lg border border-slate-100 bg-white p-2">
            <p className="mb-1.5 text-[7px] font-semibold text-slate-700 sm:text-[8px]">Top Channels</p>
            <div className="space-y-1.5">
              {dashboard.channels.map((ch) => (
                <div key={ch.label}>
                  <div className="mb-0.5 flex justify-between text-[6px] sm:text-[7px]">
                    <span className="text-slate-600">{ch.label}</span>
                    <span className="font-semibold text-slate-800">{ch.pct}%</span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-emerald-500" style={{ width: `${ch.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhonePanel() {
  const { phone } = ecommerceDmHero.dashboard;

  return (
    <div className="flex h-full flex-col rounded-[1.1rem] border-[3px] border-slate-900 bg-white p-2 shadow-[0_16px_40px_rgba(15,23,42,0.25)] sm:p-2.5">
      <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-slate-300" />
      <p className="text-[8px] font-bold text-slate-800 sm:text-[9px]">{phone.title}</p>
      <svg viewBox="0 0 80 28" className="mt-2 h-8 w-full">
        <polyline
          points="0,22 20,18 40,20 60,10 80,14"
          fill="none"
          stroke="#22c55e"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <p className="mt-2 text-[7px] font-semibold text-slate-600 sm:text-[8px]">Top Products</p>
      <ul className="mt-1.5 flex-1 space-y-1.5">
        {phone.products.map((name) => (
          <li key={name} className="flex items-center gap-1.5 rounded-md border border-slate-100 bg-slate-50 p-1.5">
            <span className="h-6 w-6 shrink-0 rounded bg-emerald-100" />
            <span className="text-[6px] font-medium text-slate-700 sm:text-[7px]">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function EcommerceDmDeviceMockup() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <DashboardPanel />
      <div className="absolute -bottom-2 right-[-2%] z-10 w-[28%] min-w-[5rem] max-w-[6.5rem] sm:right-0">
        <div className="aspect-[9/16] w-full">
          <PhonePanel />
        </div>
      </div>
    </div>
  );
}

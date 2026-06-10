import { backendDevHero } from "@/lib/design-and-development/backend-dev-content";

const NAV = [
  { label: "Overview", active: true },
  { label: "API Endpoints" },
  { label: "Database" },
  { label: "Users" },
  { label: "Security" },
  { label: "Logs" },
  { label: "Monitoring" },
  { label: "Settings" },
  { label: "Integrations" },
];

const STATS = [
  { label: "API Requests", value: "2.45M", pct: "+18.6%", color: "#f97316" },
  { label: "Avg. Response Time", value: "120ms", pct: "+12.4%", color: "#7c3aed" },
  { label: "Active Users", value: "24,580", pct: "+16.8%", color: "#3b82f6" },
  { label: "Error Rate", value: "0.24%", pct: "+8.2%", color: "#ef4444" },
];

const ENDPOINTS = [
  { method: "GET", path: "/api/users", count: "245K", trend: "+12%" },
  { method: "POST", path: "/api/orders", count: "182K", trend: "+8%" },
  { method: "PUT", path: "/api/products", count: "98K", trend: "+5%" },
  { method: "DELETE", path: "/api/sessions", count: "42K", trend: "+3%" },
];

const METHOD_COLORS: Record<string, string> = {
  GET: "bg-emerald-100 text-emerald-700",
  POST: "bg-blue-100 text-blue-700",
  PUT: "bg-amber-100 text-amber-700",
  DELETE: "bg-rose-100 text-rose-700",
};

function MiniSparkline({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 48 16" className="h-3 w-full">
      <polyline
        points="0,12 8,10 16,11 24,6 32,8 40,4 48,6"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Sidebar() {
  return (
    <aside className="flex w-[30%] shrink-0 flex-col bg-[#0f172a] p-2.5 sm:p-3">
      <div className="flex items-center gap-2 border-b border-slate-700/80 pb-2.5">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 text-[9px] font-bold text-white">
          SF
        </span>
        <span className="text-[11px] font-bold text-white sm:text-xs">{backendDevHero.dashboard.productName}</span>
      </div>
      <nav className="mt-2 flex-1 space-y-0.5">
        {NAV.map((item) => (
          <div
            key={item.label}
            className={`rounded-md px-2 py-1.5 text-[9px] font-medium sm:text-[10px] ${
              item.active ? "bg-orange-600/90 text-white" : "text-slate-400"
            }`}
          >
            {item.label}
          </div>
        ))}
      </nav>
      <div className="mt-2 rounded-lg border border-slate-700 bg-slate-800/80 p-2">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="text-[9px] font-semibold text-emerald-400 sm:text-[10px]">System Status: Healthy</span>
        </div>
        <p className="mt-1 text-[8px] text-slate-400 sm:text-[9px]">Uptime: 99.99%</p>
        <svg viewBox="0 0 60 16" className="mt-1 h-3 w-full">
          <polyline points="0,12 10,10 20,11 30,8 40,9 50,6 60,7" fill="none" stroke="#34d399" strokeWidth="1.5" />
        </svg>
      </div>
    </aside>
  );
}

function StatCards() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {STATS.map((s) => (
        <div key={s.label} className="rounded-lg border border-slate-100 bg-white p-2 shadow-sm">
          <p className="text-[8px] font-medium text-slate-500 sm:text-[9px]">{s.label}</p>
          <div className="mt-0.5 flex items-baseline justify-between gap-1">
            <p className="text-[11px] font-bold text-slate-900 sm:text-xs">{s.value}</p>
            <span className="text-[8px] font-semibold text-emerald-600 sm:text-[9px]">{s.pct}</span>
          </div>
          <MiniSparkline color={s.color} />
        </div>
      ))}
    </div>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="rounded-lg border border-slate-100 bg-white p-2 shadow-sm">
      <p className="mb-2 text-[9px] font-semibold text-slate-800 sm:text-[10px]">Architecture Overview</p>
      <div className="flex flex-col items-center gap-1">
        <div className="rounded border border-slate-200 bg-slate-50 px-2 py-1 text-[8px] font-medium text-slate-700 sm:text-[9px]">
          Client
        </div>
        <div className="h-2 w-px bg-slate-300" />
        <div className="rounded border border-orange-200 bg-orange-50 px-2 py-1 text-[8px] font-medium text-orange-800 sm:text-[9px]">
          Load Balancer
        </div>
        <div className="h-2 w-px bg-slate-300" />
        <div className="flex gap-1">
          {["API Gateway", "Auth Service", "User Service"].map((n) => (
            <div key={n} className="rounded border border-slate-200 bg-slate-800 px-1 py-0.5 text-[7px] font-medium text-white sm:text-[8px]">
              {n}
            </div>
          ))}
        </div>
        <div className="h-2 w-px bg-slate-300" />
        <div className="flex gap-2">
          <div className="rounded border border-red-200 bg-red-50 px-1.5 py-0.5 text-[7px] font-medium text-red-800 sm:text-[8px]">
            Cache Redis
          </div>
          <div className="rounded border border-blue-200 bg-blue-50 px-1.5 py-0.5 text-[7px] font-medium text-blue-800 sm:text-[8px]">
            Database PostgreSQL
          </div>
        </div>
      </div>
    </div>
  );
}

function EndpointsTable() {
  return (
    <div className="rounded-lg border border-slate-100 bg-white p-2 shadow-sm">
      <p className="mb-1.5 text-[9px] font-semibold text-slate-800 sm:text-[10px]">Top API Endpoints</p>
      <div className="space-y-1">
        {ENDPOINTS.map((ep) => (
          <div key={ep.path} className="flex items-center gap-1.5 rounded bg-slate-50 px-1.5 py-1">
            <span className={`shrink-0 rounded px-1 py-0.5 text-[7px] font-bold sm:text-[8px] ${METHOD_COLORS[ep.method]}`}>
              {ep.method}
            </span>
            <span className="min-w-0 flex-1 truncate text-[8px] font-medium text-slate-700 sm:text-[9px]">{ep.path}</span>
            <span className="text-[8px] font-semibold text-slate-800 sm:text-[9px]">{ep.count}</span>
            <span className="text-[7px] font-semibold text-emerald-600 sm:text-[8px]">{ep.trend}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DatabasePanel() {
  const bars = [
    { label: "CPU Usage", pct: 45 },
    { label: "Memory Usage", pct: 62 },
    { label: "Storage", pct: 78 },
  ];

  return (
    <div className="rounded-lg border border-slate-100 bg-white p-2 shadow-sm">
      <p className="mb-2 text-[9px] font-semibold text-slate-800 sm:text-[10px]">Database Performance</p>
      <div className="space-y-1.5">
        {bars.map((b) => (
          <div key={b.label}>
            <div className="flex justify-between text-[8px] sm:text-[9px]">
              <span className="text-slate-600">{b.label}</span>
              <span className="font-semibold text-slate-800">{b.pct}%</span>
            </div>
            <div className="mt-0.5 h-1.5 rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-violet-500" style={{ width: `${b.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 120 32" className="mt-2 h-8 w-full">
        <path d="M0,28 Q20,20 40,22 T80,14 T120,18 L120,32 L0,32 Z" fill="#ede9fe" />
        <path d="M0,28 Q20,20 40,22 T80,14 T120,18" fill="none" stroke="#7c3aed" strokeWidth="2" />
      </svg>
    </div>
  );
}

function JsonPanel() {
  return (
    <div className="relative rounded-lg bg-[#0f172a] p-2 shadow-sm">
      <span className="absolute right-2 top-2 rounded bg-emerald-600 px-1.5 py-0.5 text-[8px] font-bold text-white sm:text-[9px]">
        200 OK
      </span>
      <p className="mb-1 text-[8px] font-semibold text-slate-400 sm:text-[9px]">API Response</p>
      <pre className="font-mono text-[7px] leading-relaxed text-slate-300 sm:text-[8px]">
        <span className="text-slate-500">{"{"}</span>
        {"\n  "}
        <span className="text-violet-300">&quot;status&quot;</span>
        <span className="text-slate-500">: </span>
        <span className="text-emerald-400">&quot;success&quot;</span>
        <span className="text-slate-500">,</span>
        {"\n  "}
        <span className="text-violet-300">&quot;data&quot;</span>
        <span className="text-slate-500">: {"{"}</span>
        {"\n    "}
        <span className="text-sky-300">&quot;id&quot;</span>
        <span className="text-slate-500">: </span>
        <span className="text-amber-300">1024</span>
        <span className="text-slate-500">,</span>
        {"\n    "}
        <span className="text-sky-300">&quot;name&quot;</span>
        <span className="text-slate-500">: </span>
        <span className="text-emerald-400">&quot;Alex Morgan&quot;</span>
        <span className="text-slate-500">,</span>
        {"\n    "}
        <span className="text-sky-300">&quot;email&quot;</span>
        <span className="text-slate-500">: </span>
        <span className="text-emerald-400">&quot;alex@serverflow.io&quot;</span>
        <span className="text-slate-500">,</span>
        {"\n    "}
        <span className="text-sky-300">&quot;role&quot;</span>
        <span className="text-slate-500">: </span>
        <span className="text-emerald-400">&quot;admin&quot;</span>
        {"\n  "}
        <span className="text-slate-500">{"}"}</span>
        <span className="text-slate-500">,</span>
        {"\n  "}
        <span className="text-violet-300">&quot;timestamp&quot;</span>
        <span className="text-slate-500">: </span>
        <span className="text-emerald-400">&quot;2026-06-08T12:00:00Z&quot;</span>
        {"\n"}
        <span className="text-slate-500">{"}"}</span>
      </pre>
    </div>
  );
}

export default function BackendDevHeroDashboard() {
  return (
    <div className="relative w-full" aria-hidden>
      <div className="pointer-events-none absolute -right-4 top-8 h-40 w-40 rounded-full bg-orange-200/30 blur-3xl" />
      <div
        className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_28px_60px_rgba(15,23,42,0.14)]"
        style={{ transform: "perspective(1200px) rotateY(-4deg) rotateX(2deg)" }}
      >
        <div className="flex min-h-[26rem] sm:min-h-[30rem]">
          <Sidebar />
          <main className="min-w-0 flex-1 bg-slate-50 p-2.5 sm:p-3">
            <div className="flex items-start justify-between gap-2 border-b border-slate-200 pb-2">
              <div>
                <p className="text-[11px] font-bold text-slate-900 sm:text-xs">System Overview</p>
                <p className="text-[8px] text-slate-500 sm:text-[9px]">Real-time overview of your backend infrastructure</p>
              </div>
              <div className="flex shrink-0 items-center gap-1.5">
                <span className="rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[8px] text-slate-600 sm:text-[9px]">
                  Production ▾
                </span>
                <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm">
                  <span className="h-3 w-2.5 rounded-sm border-2 border-slate-400 border-t-transparent" />
                  <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-red-500" />
                </span>
                <span className="h-6 w-6 rounded-full bg-gradient-to-br from-orange-300 to-amber-400" />
              </div>
            </div>
            <div className="mt-2 space-y-2">
              <StatCards />
              <div className="grid gap-2 sm:grid-cols-2">
                <ArchitectureDiagram />
                <EndpointsTable />
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <DatabasePanel />
                <JsonPanel />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

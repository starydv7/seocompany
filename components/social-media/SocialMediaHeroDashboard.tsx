import Image from "next/image";
import { socialMediaHero } from "@/lib/social-media/social-media-content";

function TrafficLights() {
  return (
    <div className="flex items-center gap-2">
      <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
      <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
      <span className="h-3 w-3 rounded-full bg-[#28C840]" />
    </div>
  );
}

function EngagementChart() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const yLabels = ["20K", "15K", "10K", "5K"];

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
            <linearGradient id="smm-chart-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[20, 40, 60, 80].map((y) => (
            <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="#e2e8f0" strokeWidth="0.6" />
          ))}
          <polygon
            points="0,72 43,58 86,64 129,42 172,48 215,30 258,36 300,22 300,100 0,100"
            fill="url(#smm-chart-fill)"
          />
          <polyline
            points="0,72 43,58 86,64 129,42 172,48 215,30 258,36 300,22"
            fill="none"
            stroke="#6366F1"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="172" cy="48" r="5" fill="#6366F1" stroke="#fff" strokeWidth="2" />
          <rect x="145" y="18" width="58" height="24" rx="5" fill="#1e293b" />
          <text x="174" y="32" textAnchor="middle" fill="#fff" fontSize="7.5" fontWeight="600">
            May 30
          </text>
          <text x="174" y="40" textAnchor="middle" fill="#c7d2fe" fontSize="7">
            12.5K
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

const PLATFORM_BAR_COLORS: Record<string, string> = {
  Instagram: "#E1306C",
  Facebook: "#1877F2",
  LinkedIn: "#0A66C2",
  Twitter: "#000000",
  YouTube: "#FF0000",
};

function DashboardPanel() {
  const { dashboard } = socialMediaHero;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_28px_80px_rgba(15,23,42,0.14)]">
      <div className="border-b border-slate-100 px-4 py-3">
        <TrafficLights />
      </div>

      <div className="flex min-h-[22rem] sm:min-h-[26rem]">
        <aside className="hidden w-[26%] shrink-0 border-r border-slate-100 bg-slate-50/70 py-4 sm:block">
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

          <div className="mt-4 grid flex-1 grid-cols-1 gap-3 lg:grid-cols-[1fr_38%]">
            <div className="rounded-xl border border-slate-100 bg-white p-3 sm:p-4">
              <p className="text-sm font-semibold text-slate-800">Engagement Over Time</p>
              <EngagementChart />
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-3 sm:p-4">
              <p className="mb-3 text-sm font-semibold text-slate-800">Top Platforms</p>
              <div className="space-y-3">
                {dashboard.platforms.map((p) => (
                  <div key={p.label}>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-600">{p.label}</span>
                      <span className="text-xs font-bold text-slate-800">{p.pct}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${p.pct}%`,
                          backgroundColor: PLATFORM_BAR_COLORS[p.label] ?? "#6366F1",
                        }}
                      />
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

function PostPreview() {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gradient-to-br from-red-500 via-red-600 to-red-700">
      <div className="absolute inset-0 flex items-center justify-center p-3">
        <Image
          src="/assets/logo.png"
          alt=""
          width={80}
          height={80}
          className="h-full w-full object-contain brightness-0 invert"
          aria-hidden
        />
      </div>
    </div>
  );
}

function PhonePanel() {
  const { phone } = socialMediaHero.dashboard;

  return (
    <div className="flex h-full flex-col rounded-[1.75rem] border-[4px] border-slate-900 bg-white p-3 shadow-[0_24px_56px_rgba(15,23,42,0.3)] sm:p-4">
      <div className="mx-auto mb-2.5 h-1.5 w-12 rounded-full bg-slate-300" />
      <p className="text-xs font-bold text-slate-900 sm:text-sm">{phone.title}</p>
      <div className="mt-3">
        <PostPreview />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {phone.stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-slate-100 bg-slate-50 p-2">
            <p className="text-[10px] font-medium text-slate-500">{s.label}</p>
            <p className="text-sm font-bold text-slate-900">{s.value}</p>
            <p className="text-[10px] font-semibold text-emerald-600">{s.change}</p>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 100 28" className="mt-3 h-8 w-full" aria-hidden>
        <defs>
          <linearGradient id="phone-chart-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points="0,20 20,16 40,18 60,10 80,14 100,8 100,28 0,28" fill="url(#phone-chart-fill)" />
        <polyline
          points="0,20 20,16 40,18 60,10 80,14 100,8"
          fill="none"
          stroke="#6366F1"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function SocialMediaHeroDashboard() {
  return (
    <div className="relative w-full pr-4 sm:pr-8 lg:pr-12">
      <DashboardPanel />
      <div className="absolute -bottom-6 right-0 z-20 w-[38%] min-w-[9rem] max-w-[11.5rem] sm:-bottom-8 sm:max-w-[13rem]">
        <div className="aspect-[9/18] w-full">
          <PhonePanel />
        </div>
      </div>
    </div>
  );
}

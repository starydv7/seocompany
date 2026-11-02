import { developmentDmHero } from "@/lib/digital-marketing/development-dm-content";

function Sparkline({ color, points }: { color: string; points: string }) {
  return (
    <svg viewBox="0 0 100 24" className="mt-1.5 h-5 w-full" aria-hidden>
      <polyline fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" points={points} />
    </svg>
  );
}

function CampaignChart() {
  return (
    <svg viewBox="0 0 280 100" className="h-full w-full" preserveAspectRatio="none" aria-hidden>
      <polyline
        points="0,70 35,55 70,60 105,40 140,48 175,30 210,38 245,22 280,28"
        fill="none"
        stroke="#7c3aed"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <polyline
        points="0,75 35,68 70,62 105,55 140,50 175,45 210,42 245,35 280,32"
        fill="none"
        stroke="#14b8a6"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.85"
      />
      <polyline
        points="0,80 35,72 70,70 105,65 140,58 175,52 210,48 245,42 280,38"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

function LaptopDashboard() {
  const { dashboard } = developmentDmHero;

  return (
    <div className="flex aspect-[16/10] w-full overflow-hidden bg-white/[0.035]">
      {/* Sidebar */}
      <aside className="hidden w-[22%] shrink-0 border-r border-white/[0.09] bg-white/[0.035] p-2 sm:block sm:p-2.5">
        <p className="text-[7px] font-bold uppercase tracking-wide text-white/50 sm:text-[8px]">
          {dashboard.sidebar[0]}
        </p>
        <nav className="mt-2 space-y-1">
          {dashboard.sidebar.slice(1).map((item, i) => (
            <div
              key={item}
              className={`rounded-md px-1.5 py-1 text-[7px] font-medium sm:text-[8px] ${
                i === 0 ? "bg-violet-400/10 text-violet-300" : "text-white/65"
              }`}
            >
              {item}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col p-2 sm:p-3">
        <div className="mb-2 flex items-center justify-between border-b border-white/[0.06] pb-2">
          <p className="text-[9px] font-bold text-white sm:text-[10px]">{dashboard.title}</p>
          <span className="rounded bg-violet-600 px-1.5 py-0.5 text-[6px] font-semibold text-white sm:text-[7px]">
            Dashboard
          </span>
        </div>

        <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4 sm:gap-2">
          {dashboard.metrics.map((m) => (
            <div key={m.label} className="rounded-lg border border-white/[0.06] bg-white/[0.035] p-1.5 shadow-sm sm:p-2">
              <p className="text-[6px] font-medium text-white/50 sm:text-[7px]">{m.label}</p>
              <p className="text-[10px] font-bold text-white sm:text-xs">{m.value}</p>
              <Sparkline color={m.color} points={m.points} />
            </div>
          ))}
        </div>

        <div className="mt-2 grid min-h-0 flex-1 grid-cols-1 gap-2 sm:grid-cols-[1fr_38%]">
          <div className="flex min-h-[4.5rem] flex-col rounded-lg border border-white/[0.06] bg-white/[0.035] p-2 sm:min-h-[5.5rem]">
            <p className="text-[7px] font-semibold text-white/65 sm:text-[8px]">Campaign Performance</p>
            <div className="mt-1 min-h-0 flex-1">
              <CampaignChart />
            </div>
          </div>
          <div className="rounded-lg border border-white/[0.06] bg-white/[0.035] p-2">
            <p className="mb-1.5 text-[7px] font-semibold text-white/65 sm:text-[8px]">Top Performing Channels</p>
            <div className="space-y-1.5">
              {dashboard.channels.map((ch) => (
                <div key={ch.label}>
                  <div className="mb-0.5 flex justify-between text-[6px] sm:text-[7px]">
                    <span className="text-white/65">{ch.label}</span>
                    <span className="font-semibold text-white">{ch.pct}%</span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-white/[0.05]">
                    <div className="h-full rounded-full" style={{ width: `${ch.pct}%`, backgroundColor: ch.color }} />
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

function PhoneDashboard() {
  const { phone } = developmentDmHero.dashboard;

  return (
    <div className="flex h-full flex-col bg-white/[0.035] p-2 sm:p-2.5">
      <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-white/15" />
      <p className="text-[8px] font-bold text-white sm:text-[9px]">{phone.title}</p>
      <div className="mt-2 flex flex-1 flex-col gap-2">
        {phone.metrics.map((m) => (
          <div key={m.label} className="flex-1 rounded-lg border border-white/[0.06] bg-white/[0.035] p-1.5">
            <p className="text-[6px] font-medium text-white/50 sm:text-[7px]">{m.label}</p>
            <p className="text-[9px] font-bold text-white sm:text-[10px]">{m.value}</p>
            <svg viewBox="0 0 60 20" className="mt-1 h-4 w-full">
              <polyline
                points="0,16 15,12 30,14 45,8 60,10"
                fill="none"
                stroke={m.color}
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DevelopmentDmDeviceMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[24rem] sm:max-w-[28rem] lg:max-w-[32rem]">
      <div className="relative z-10">
        <div className="rounded-t-[1.1rem] border border-white/15 bg-gradient-to-b from-white/10 to-white/10 p-2 shadow-[0_24px_60px_rgba(15,23,42,0.15)] sm:rounded-t-[1.25rem] sm:p-2.5">
          <div className="overflow-hidden rounded-t-lg border border-slate-900/70 shadow-inner">
            <div className="flex items-center gap-1 border-b border-white/[0.09] bg-white/[0.05] px-2 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            </div>
            <LaptopDashboard />
          </div>
        </div>
        <div className="h-1.5 bg-gradient-to-b from-white/20 to-white/20 sm:h-2" />
        <div className="mx-auto w-[104%] -translate-x-[2%] rounded-b-xl border border-white/15 bg-gradient-to-b from-white/10 to-white/10 px-4 pb-3 pt-2 shadow-lg sm:rounded-b-2xl">
          <div className="mx-auto h-1 w-[50%] rounded-full bg-white/20" />
        </div>
      </div>

      <div className="absolute -bottom-1 right-[-2%] z-20 w-[26%] min-w-[4.75rem] max-w-[6rem] sm:max-w-[6.5rem]">
        <div className="rounded-[1.25rem] border-[3px] border-slate-900 bg-slate-900 p-0.5 shadow-[0_16px_40px_rgba(15,23,42,0.3)]">
          <div className="aspect-[9/16] w-full overflow-hidden rounded-[1rem]">
            <PhoneDashboard />
          </div>
        </div>
      </div>
    </div>
  );
}

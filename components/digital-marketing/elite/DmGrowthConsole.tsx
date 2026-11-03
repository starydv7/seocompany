import { BarChart3, TrendingUp, Users } from "lucide-react";
import { LUX_ACCENTS } from "@/components/lux/accents";
import { dmHubHero } from "@/lib/digital-marketing/hub-dm-content";

const KPI_TONES = [LUX_ACCENTS.gold, LUX_ACCENTS.sky, LUX_ACCENTS.emerald, LUX_ACCENTS.rose];
const CHANNEL_FILLS = [
  "linear-gradient(90deg,#f3e3a6,#ddbf5d)",
  "linear-gradient(90deg,#9be7ff,#2096ff)",
  "linear-gradient(90deg,#7ee8c7,#50b444)",
  "linear-gradient(90deg,#ffc2d6,#ef5f9d)",
];

/** Illustrative marketing dashboard used as the hub hero visual. */
export default function DmGrowthConsole() {
  const { metrics, barHeights, channels, phone } = dmHubHero.dashboard;

  return (
    <div className="relative mx-auto w-full max-w-[40rem] lg:ml-auto">
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-[48px] opacity-70 blur-3xl"
        style={{ background: "radial-gradient(circle at 70% 30%, rgba(221,191,93,0.35), transparent 60%), radial-gradient(circle at 20% 80%, rgba(80,180,68,0.22), transparent 55%)" }}
      />
      <div className="lux-orbit rounded-[32px] bg-white/85 p-5 shadow-[0_50px_100px_-45px_rgba(80,60,20,0.45)] ring-1 ring-inset ring-stone-200 backdrop-blur sm:p-7">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-lux-bronze">Marketing overview</p>
            <p className="mt-1 font-serif text-2xl text-stone-900">Growth Engine</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-stone-700 ring-1 ring-inset ring-stone-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lux-emerald opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lux-emerald" />
            </span>
            Live
          </span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {metrics.map((m, i) => {
            const tone = KPI_TONES[i % KPI_TONES.length];
            return (
              <div key={m.label} className="rounded-2xl bg-[#fbf8f1] p-4 ring-1 ring-inset ring-stone-200/80">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">{m.label}</p>
                <div className="mt-2 flex items-end justify-between gap-2">
                  <span className="font-serif text-[1.9rem] leading-none text-stone-900">{m.value}</span>
                  <svg viewBox="0 0 100 30" className="h-9 w-[58%] overflow-visible" aria-hidden>
                    <polygon points={`0,30 ${m.points} 100,30`} fill={tone.to} opacity="0.12" />
                    <polyline
                      points={m.points}
                      fill="none"
                      stroke={tone.to}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength={100}
                      className="lux-spark"
                      style={{ animationDelay: `${i * 0.35}s` }}
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-[1.1fr,1fr]">
          <div className="rounded-2xl bg-[#fbf8f1] p-4 ring-1 ring-inset ring-stone-200/80">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">Weekly conversions</p>
              <BarChart3 className="h-3.5 w-3.5 text-lux-bronze" />
            </div>
            <div className="mt-4 flex h-24 items-end gap-2">
              {barHeights.map((h, i) => (
                <span
                  key={i}
                  className="lux-bar-rise flex-1 rounded-t-md"
                  style={{
                    height: `${h}%`,
                    background: i === barHeights.length - 2 ? "linear-gradient(180deg,#50b444,#ddbf5d)" : "linear-gradient(180deg,#ddbf5d,#f3e3a6)",
                    animationDelay: `${i * 0.12}s`,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-[#fbf8f1] p-4 ring-1 ring-inset ring-stone-200/80">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">Channel mix</p>
            <ul className="mt-3 space-y-2.5">
              {channels.map((c, i) => (
                <li key={c.label}>
                  <div className="flex items-center justify-between text-[11px] font-semibold text-stone-700">
                    <span>{c.label}</span>
                    <span className="text-stone-500">{c.pct}%</span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-stone-200/70">
                    <div
                      className="lux-bar-grow h-full rounded-full"
                      style={{ width: `${c.pct * 2}%`, background: CHANNEL_FILLS[i % CHANNEL_FILLS.length], animationDelay: `${0.3 + i * 0.15}s` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="lux-hover-float absolute -bottom-9 -left-4 hidden sm:block lg:-left-10">
        <div className="lux-plaque flex items-center gap-3.5 px-4 py-3.5">
          <span className="lux-medallion" aria-hidden>
            <Users className="h-4 w-4" strokeWidth={2} />
          </span>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">{phone.title}</p>
            <p className="font-serif text-[1.2rem] leading-tight text-stone-900">
              {phone.metrics[0].label} {phone.metrics[0].value}
            </p>
          </div>
        </div>
      </div>
      <div className="lux-hover-float absolute -right-3 -top-7 hidden sm:block lg:-right-6" style={{ animationDelay: "-3s" }}>
        <div className="lux-plaque flex items-center gap-3 px-4 py-3">
          <span className="lux-medallion" aria-hidden>
            <TrendingUp className="h-4 w-4" strokeWidth={2} />
          </span>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">{phone.metrics[2].label}</p>
            <p className="font-serif text-[1.2rem] leading-tight text-stone-900">{phone.metrics[2].value}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

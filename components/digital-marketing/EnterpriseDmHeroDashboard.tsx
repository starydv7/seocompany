"use client";

import { enterpriseDmHero } from "@/lib/digital-marketing/enterprise-content";

function MiniSparkline({ color, points }: { color: string; points: string }) {
  return (
    <svg viewBox="0 0 100 28" className="mt-2 h-7 w-full" aria-hidden>
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        points={points}
      />
    </svg>
  );
}

function RevenueDonut({
  segments,
  center,
  centerLabel,
}: {
  segments: readonly { label: string; pct: number; color: string }[];
  center: string;
  centerLabel: string;
}) {
  const size = 100;
  const r = 38;
  const cx = 50;
  const cy = 50;
  let offset = 0;

  return (
    <div className="flex items-center gap-3">
      <svg width={size} height={size} viewBox="0 0 100 100" className="shrink-0">
        {segments.map((s, i) => {
          const dash = (s.pct / 100) * 2 * Math.PI * r;
          const gap = 2 * Math.PI * r;
          const el = (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke={s.color}
              strokeWidth={10}
              strokeDasharray={`${dash} ${gap}`}
              strokeDashoffset={-offset}
              transform={`rotate(-90 ${cx} ${cy})`}
            />
          );
          offset += dash;
          return el;
        })}
        <text x={cx} y={cy - 4} textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">
          {center}
        </text>
        <text x={cx} y={cy + 10} textAnchor="middle" fill="#94a3b8" fontSize="6">
          {centerLabel}
        </text>
      </svg>
      <ul className="min-w-0 flex-1 space-y-1">
        {segments.map((s) => (
          <li key={s.label} className="flex items-center justify-between gap-1 text-[9px]">
            <span className="flex items-center gap-1 text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: s.color }} />
              {s.label}
            </span>
            <span className="font-semibold text-slate-300">{s.pct}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function EnterpriseDmHeroDashboard() {
  const { metrics, revenue, channels, journey } = enterpriseDmHero;

  const sparkPoints = [
    "0,22 18,18 36,20 54,12 72,14 100,6",
    "0,24 20,20 40,16 60,18 80,10 100,8",
    "0,26 15,22 35,18 55,14 75,10 100,4",
  ];

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-md sm:p-5">
      {/* Top metrics */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-3"
          >
            <p className="text-[10px] font-medium text-slate-400">{m.label}</p>
            <p className="mt-1 text-lg font-bold text-emerald-400">{m.delta}</p>
            <p className="text-[9px] text-slate-500">{m.sub}</p>
            <MiniSparkline color={m.lineColor} points={sparkPoints[i]} />
          </div>
        ))}
      </div>

      {/* Middle row */}
      <div className="mt-4 grid grid-cols-1 gap-4 border-t border-white/[0.06] pt-4 lg:grid-cols-2">
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Revenue Attribution
          </p>
          <RevenueDonut
            segments={revenue.segments}
            center={revenue.center}
            centerLabel={revenue.centerLabel}
          />
        </div>

        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Channel Performance
          </p>
          <div className="space-y-2.5">
            {channels.map((c) => (
              <div key={c.label}>
                <div className="mb-1 flex justify-between text-[10px]">
                  <span className="text-slate-400">{c.label}</span>
                  <span className="font-bold text-white">{c.pct}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${c.pct}%`, backgroundColor: c.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer journey */}
      <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
          Customer Journey
        </p>
        <div className="relative flex items-start justify-between gap-1">
          <div
            className="absolute left-[8%] right-[8%] top-4 h-px bg-gradient-to-r from-emerald-500/50 via-violet-500/50 to-pink-500/50"
            aria-hidden
          />
          {journey.map((j) => (
            <div key={j.step} className="relative z-10 flex flex-1 flex-col items-center text-center">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold text-white shadow-lg"
                style={{ backgroundColor: j.color }}
              >
                {j.step[0]}
              </span>
              <p className="mt-2 text-[9px] font-semibold text-slate-300">{j.step}</p>
              <p className="text-[10px] font-bold text-white">{j.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { Building2, MapPin } from "lucide-react";
import { FDM_FLOAT_CARD } from "@/components/digital-marketing/franchise-dm-styles";
import { franchiseDmHero } from "@/lib/digital-marketing/franchise-dm-content";

const BAR_SETS: [number, number, number][] = [
  [10, 16, 22],
  [14, 18, 12],
  [8, 14, 20],
  [12, 10, 18],
  [10, 20, 16],
];

function FlowLines() {
  const cx = 200;
  const hqY = 52;
  const citiesY = 210;
  const cityXs = [40, 110, 200, 290, 360];

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 400 340"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <linearGradient id="fdm-flow-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <filter id="fdm-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {[72, 108, 144, 180].map((r) => (
        <ellipse
          key={r}
          cx="200"
          cy="175"
          rx={r + 30}
          ry={r * 0.5}
          fill="none"
          stroke="#e0e7ff"
          strokeWidth="0.75"
          opacity="0.7"
        />
      ))}

      <line
        x1={cx}
        y1={hqY + 28}
        x2={cx}
        y2={citiesY - 50}
        stroke="url(#fdm-flow-grad)"
        strokeWidth="2"
        filter="url(#fdm-glow)"
      />

      {cityXs.map((x) => (
        <path
          key={x}
          d={`M ${cx} ${hqY + 28} Q ${(cx + x) / 2} ${citiesY - 90} ${x} ${citiesY - 50}`}
          fill="none"
          stroke="url(#fdm-flow-grad)"
          strokeWidth="1.5"
          opacity="0.8"
          filter="url(#fdm-glow)"
        />
      ))}

      {cityXs.map((x) => (
        <circle key={`dot-${x}`} cx={x} cy={citiesY - 62} r="3" fill="#8b5cf6" opacity="0.8" />
      ))}

      <ellipse cx="200" cy="310" rx="150" ry="20" fill="#ede9fe" opacity="0.6" />
    </svg>
  );
}

function CityCard({
  name,
  bars,
  lift,
}: {
  name: string;
  bars: [number, number, number];
  lift: number;
}) {
  return (
    <div
      className={`${FDM_FLOAT_CARD} flex w-[4.25rem] flex-col items-center px-2 py-2.5 sm:w-[4.75rem] sm:py-3`}
      style={{ transform: `translateY(-${lift}px)` }}
    >
      <MapPin className="h-4 w-4 text-violet-500" strokeWidth={2} />
      <p className="mt-1 text-[9px] font-bold text-slate-800 sm:text-[10px]">{name}</p>
      <div className="mt-2 flex h-7 items-end gap-0.5">
        {bars.map((h, i) => (
          <span
            key={i}
            className="w-1.5 rounded-sm sm:w-2"
            style={{
              height: `${h}px`,
              background: i === 2 ? "#7c3aed" : "#c4b5fd",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function FranchiseDmHeroDashboard() {
  const { cities } = franchiseDmHero;

  return (
    <div className="relative flex w-full items-center justify-center py-4 lg:py-0">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_45%,rgba(167,139,250,0.2),transparent_72%)]"
      />

      <div className="relative w-full">
        <FlowLines />

        <div className="relative z-10 flex flex-col items-center">
          <div
            className={`${FDM_FLOAT_CARD} flex items-center gap-2.5 px-5 py-3.5 shadow-[0_8px_32px_rgba(124,58,237,0.15)]`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50">
              <Building2 className="h-5 w-5 text-violet-600" strokeWidth={2} />
            </span>
            <span className="text-sm font-bold text-slate-800">Corporate HQ</span>
          </div>

          <div
            className="my-3 h-8 w-px bg-gradient-to-b from-violet-400 to-indigo-300"
            aria-hidden
          />

          <div className="flex w-full items-end justify-between gap-1 px-1">
            {cities.map((city, i) => (
              <CityCard
                key={city.name}
                name={city.name}
                lift={city.lift}
                bars={BAR_SETS[i] ?? [10, 14, 18]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

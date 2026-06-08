"use client";

import { ArrowDown, ArrowUp } from "lucide-react";
import { useId } from "react";
import { technicalHero } from "@/lib/seo/technical-seo-content";

const MINT = "#6ee7b7";
const MINT_BRIGHT = "#86efac";
const TRACK = "rgba(255,255,255,0.08)";

function HealthGauge({ score, max }: { score: number; max: number }) {
  const size = 140;
  const stroke = 12;
  const r = (size - stroke) / 2 - 2;
  const cx = size / 2;
  const cy = size / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - score / max);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="mx-auto">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={TRACK} strokeWidth={stroke} />
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke={MINT}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${cx} ${cy})`}
      />
      <text x={cx} y={cy - 6} textAnchor="middle" fill="#fff" fontSize="28" fontWeight="700">
        {score}
      </text>
      <text x={cx} y={cy + 16} textAnchor="middle" fill="#94a3b8" fontSize="13" fontWeight="500">
        / {max}
      </text>
    </svg>
  );
}

function LineChart({
  points,
  stroke,
  fillId,
  strokeId,
  dotFill,
}: {
  points: string;
  stroke: string;
  fillId: string;
  strokeId?: string;
  dotFill: string;
}) {
  const coords = points.split(" ").map((p) => {
    const [x, y] = p.split(",").map(Number);
    return { x, y };
  });

  return (
    <svg viewBox="0 0 140 44" className="mt-3 h-11 w-full" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.35" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
        {strokeId && (
          <linearGradient id={strokeId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
        )}
      </defs>
      <polygon fill={`url(#${fillId})`} points={`0,44 ${points} 140,44`} />
      <polyline
        fill="none"
        stroke={strokeId ? `url(#${strokeId})` : stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
      {coords.map((c, i) => (
        <circle
          key={i}
          cx={c.x}
          cy={c.y}
          r="2.5"
          fill={dotFill}
          stroke="#fff"
          strokeWidth="0.5"
          opacity={strokeId ? 1 : 0.9}
        />
      ))}
    </svg>
  );
}

export default function TechnicalHeroDashboard() {
  const uid = useId().replace(/:/g, "");
  const {
    healthTitle,
    score,
    scoreMax,
    scoreLabel,
    scoreDelta,
    bars,
    crawlErrors,
    pagesIndexed,
  } = technicalHero;

  const crawlPts = "0,10 18,16 32,12 48,22 64,14 80,20 96,8 112,14 140,6";
  const pagesPts = "0,36 20,30 40,26 60,20 80,14 100,10 120,6 140,4";

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0b0e14] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
      {/* Top row — 2 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="p-5 sm:p-6">
          <p className="text-sm font-semibold text-white">{healthTitle}</p>
          <div className="mt-5 flex flex-col items-center">
            <HealthGauge score={score} max={scoreMax} />
            <p className="mt-2 text-sm font-bold" style={{ color: MINT_BRIGHT }}>
              {scoreLabel}
            </p>
            <p className="mt-1 text-xs text-slate-400">{scoreDelta}</p>
          </div>
        </div>

        <div className="flex flex-col justify-center border-t border-white/[0.06] p-5 sm:border-l sm:border-t-0 sm:p-6">
          <div className="space-y-4">
            {bars.map((b) => (
              <div key={b.label}>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="text-xs font-medium text-slate-300">{b.label}</span>
                  <span className="text-xs font-bold text-white">{b.pct}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full" style={{ backgroundColor: TRACK }}>
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${b.pct}%`, backgroundColor: MINT }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row — 2 chart panels */}
      <div className="grid grid-cols-2 border-t border-white/[0.06]">
        <div className="border-r border-white/[0.06] p-4 sm:p-5">
          <p className="text-xs font-semibold text-slate-300">{crawlErrors.label}</p>
          <p className="mt-2 text-3xl font-bold leading-none text-[#ff4d4d] sm:text-[2rem]">
            {crawlErrors.value}
          </p>
          <p className="mt-1.5 flex flex-wrap items-center gap-1 text-[11px]">
            <span className="inline-flex items-center gap-0.5 font-semibold text-emerald-400">
              <ArrowDown className="h-3 w-3" strokeWidth={3} />
              -38%
            </span>
            <span className="text-slate-500">vs last 30 days</span>
          </p>
          <LineChart
            points={crawlPts}
            stroke="#ff4d4d"
            fillId={`crawlFill-${uid}`}
            dotFill="#ff6b6b"
          />
        </div>

        <div className="p-4 sm:p-5">
          <p className="text-xs font-semibold text-slate-300">{pagesIndexed.label}</p>
          <p className="mt-2 text-3xl font-bold leading-none text-white sm:text-[2rem]">
            {pagesIndexed.value}
          </p>
          <p className="mt-1.5 flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
            <ArrowUp className="h-3 w-3" strokeWidth={3} />
            {pagesIndexed.delta}
          </p>
          <LineChart
            points={pagesPts}
            stroke="#9370db"
            fillId={`pagesFill-${uid}`}
            strokeId={`pagesStroke-${uid}`}
            dotFill="#c4b5fd"
          />
        </div>
      </div>
    </div>
  );
}

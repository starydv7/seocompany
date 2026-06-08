"use client";

import type { LucideIcon } from "lucide-react";
import { Monitor } from "lucide-react";
import { technicalIssues } from "@/lib/seo/technical-seo-content";

type Position = (typeof technicalIssues.spokes)[number]["position"];

const SLOT: Record<Position, string> = {
  "top-left": "left-[2%] top-[8%]",
  "top-center": "left-1/2 top-[2%] -translate-x-1/2",
  "top-right": "right-[2%] top-[8%]",
  "mid-left": "left-0 top-[42%] -translate-y-1/2",
  "mid-right": "right-0 top-[42%] -translate-y-1/2",
  "bottom-center": "bottom-[2%] left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-[8%] right-[4%]",
};

/** Line ends at card inner edge toward hub (viewBox 0–100) */
const ANCHOR: Record<Position, { x: number; y: number }> = {
  "top-left": { x: 22, y: 20 },
  "top-center": { x: 50, y: 14 },
  "top-right": { x: 78, y: 20 },
  "mid-left": { x: 18, y: 50 },
  "mid-right": { x: 82, y: 50 },
  "bottom-center": { x: 50, y: 86 },
  "bottom-right": { x: 76, y: 80 },
};

const HUB = { x: 50, y: 50, r: 14 };

function hubEdge(tx: number, ty: number) {
  const dx = tx - HUB.x;
  const dy = ty - HUB.y;
  const len = Math.hypot(dx, dy) || 1;
  return {
    x1: HUB.x + (dx / len) * HUB.r,
    y1: HUB.y + (dy / len) * HUB.r,
    x2: tx,
    y2: ty,
  };
}

function SpokeCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <article className="w-[10.75rem] rounded-2xl border border-slate-100/90 bg-white p-3.5 shadow-[0_8px_30px_rgba(15,23,42,0.07)] sm:w-[12rem] sm:p-4">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50">
        <Icon className="h-[18px] w-[18px] text-rose-500" strokeWidth={2} />
      </span>
      <h3 className="mt-2.5 text-[13px] font-bold leading-snug text-slate-900">{title}</h3>
      <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500">{description}</p>
    </article>
  );
}

export default function TechnicalIssuesHub() {
  const { hubLabel, spokes } = technicalIssues;

  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-[40rem] lg:max-w-none">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        {spokes.map((s) => {
          const end = ANCHOR[s.position];
          const { x1, y1, x2, y2 } = hubEdge(end.x, end.y);
          return (
            <g key={s.title}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#cbd5e1"
                strokeWidth="0.55"
              />
              <circle cx={x1} cy={y1} r="1.1" fill="#ef4444" />
            </g>
          );
        })}
      </svg>

      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/20 blur-2xl" />
        <div className="relative flex flex-col items-center rounded-full bg-white px-4 py-4 shadow-[0_0_48px_rgba(139,92,246,0.28)] ring-1 ring-violet-100 sm:px-5 sm:py-5">
          <div className="overflow-hidden rounded-lg border border-slate-200/90 shadow-sm">
            <div className="flex h-3.5 items-center gap-1 bg-gradient-to-r from-violet-500 to-indigo-500 px-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
            </div>
            <div className="flex h-10 w-14 items-center justify-center bg-slate-50 sm:w-16">
              <Monitor className="h-5 w-5 text-slate-400" strokeWidth={1.75} />
            </div>
          </div>
          <span className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-900 sm:text-[11px]">
            {hubLabel}
          </span>
        </div>
      </div>

      {spokes.map((s) => (
        <div key={s.title} className={`absolute z-10 ${SLOT[s.position]}`}>
          <SpokeCard
            title={s.title}
            description={s.description}
            icon={s.icon as LucideIcon}
          />
        </div>
      ))}
    </div>
  );
}

"use client";

import type { LucideIcon } from "lucide-react";
import { whatIsTechnicalSeo } from "@/lib/seo/technical-seo-content";
import { TECH_PURPLE } from "@/components/seo/technical-seo-styles";

type Position = (typeof whatIsTechnicalSeo.hubSpokes)[number]["position"];

const SLOT: Record<Position, string> = {
  "top-center": "left-1/2 top-0 -translate-x-1/2",
  "top-right": "right-[2%] top-[10%]",
  "mid-right": "right-0 top-[40%] -translate-y-1/2",
  "bottom-right": "right-[6%] bottom-[10%]",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
  "mid-left": "left-0 top-[40%] -translate-y-1/2",
  "top-left": "left-[2%] top-[10%]",
};

const ANCHOR: Record<Position, { x: number; y: number }> = {
  "top-center": { x: 50, y: 12 },
  "top-right": { x: 80, y: 20 },
  "mid-right": { x: 86, y: 50 },
  "bottom-right": { x: 78, y: 80 },
  "bottom-center": { x: 50, y: 88 },
  "mid-left": { x: 14, y: 50 },
  "top-left": { x: 20, y: 20 },
};

const HUB = { x: 50, y: 50, r: 16 };

function hubEdge(tx: number, ty: number) {
  const dx = tx - HUB.x;
  const dy = ty - HUB.y;
  const len = Math.hypot(dx, dy) || 1;
  return { x1: HUB.x + (dx / len) * HUB.r, y1: HUB.y + (dy / len) * HUB.r, x2: tx, y2: ty };
}

/** Icon on top, label below — matches reference spoke tiles */
function SpokeTile({ label, icon: Icon }: { label: string; icon: LucideIcon }) {
  return (
    <div className="flex w-[4.5rem] flex-col items-center rounded-xl border border-slate-100/90 bg-white px-2 py-2.5 shadow-[0_4px_18px_rgba(15,23,42,0.08)] sm:w-[5rem] sm:py-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50/80">
        <Icon className="h-[18px] w-[18px]" style={{ color: TECH_PURPLE }} strokeWidth={2} />
      </span>
      <span className="mt-2 text-center text-[9px] font-semibold leading-tight text-slate-700 sm:text-[10px]">
        {label}
      </span>
    </div>
  );
}

export default function TechnicalWhatWhyHub() {
  const { hubLabel, hubSpokes } = whatIsTechnicalSeo;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-none">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        {hubSpokes.map((s) => {
          const end = ANCHOR[s.position];
          const { x1, y1, x2, y2 } = hubEdge(end.x, end.y);
          return (
            <line
              key={s.label}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#d1d5db"
              strokeWidth="0.6"
              strokeDasharray="2.5 3"
            />
          );
        })}
      </svg>

      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <div
          className="flex h-[5.25rem] w-[5.25rem] items-center justify-center rounded-full shadow-[0_8px_32px_rgba(93,63,211,0.45)] sm:h-[5.75rem] sm:w-[5.75rem]"
          style={{ backgroundColor: TECH_PURPLE }}
        >
          <span className="max-w-[4rem] text-center text-[10px] font-bold leading-tight text-white sm:text-[11px]">
            {hubLabel}
          </span>
        </div>
      </div>

      {hubSpokes.map((s) => (
        <div key={s.label} className={`absolute z-10 ${SLOT[s.position]}`}>
          <SpokeTile label={s.label} icon={s.icon as LucideIcon} />
        </div>
      ))}
    </div>
  );
}

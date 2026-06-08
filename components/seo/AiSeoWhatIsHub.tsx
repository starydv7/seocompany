"use client";

import type { LucideIcon } from "lucide-react";
import { aiSeoWhatIs } from "@/lib/seo/ai-seo-content";

/** SVG coordinate space — keep in sync with card anchor positions */
const VB = { w: 520, h: 400 };
const HUB = { cx: 260, cy: 175, r: 52 };
const RING_R = 148;

/** Inner edge of each card (where threads attach) */
const ANCHORS = {
  leftTop: { x: 148, y: 52 },
  leftMid: { x: 132, y: 175 },
  leftBot: { x: 148, y: 298 },
  rightTop: { x: 372, y: 52 },
  rightMid: { x: 388, y: 175 },
  rightBot: { x: 372, y: 298 },
  bottom: { x: 260, y: 332 },
} as const;

function hubEdgeToward(tx: number, ty: number) {
  const dx = tx - HUB.cx;
  const dy = ty - HUB.cy;
  const len = Math.hypot(dx, dy) || 1;
  return {
    x1: HUB.cx + (dx / len) * HUB.r,
    y1: HUB.cy + (dy / len) * HUB.r,
    x2: tx,
    y2: ty,
  };
}

function curvedPath(tx: number, ty: number, bend: number) {
  const { x1, y1, x2, y2 } = hubEdgeToward(tx, ty);
  const cx = (x1 + x2) / 2 + bend;
  const cy = (y1 + y2) / 2;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

function straightPath(tx: number, ty: number) {
  const { x1, y1 } = hubEdgeToward(tx, ty);
  return `M ${x1} ${y1} L ${tx} ${ty}`;
}

function SpokeCard({
  label,
  icon: Icon,
  color,
}: {
  label: string;
  icon: LucideIcon;
  color: string;
}) {
  const [iconText, iconBg] = color.split(" ");
  return (
    <div className="flex w-[10.5rem] items-center gap-2.5 rounded-xl border border-slate-100/90 bg-white px-2.5 py-2 shadow-[0_2px_12px_rgba(15,23,42,0.06)] sm:w-[11.5rem] sm:px-3 sm:py-2.5">
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${iconBg}`}
      >
        <Icon className={`h-4 w-4 ${iconText}`} strokeWidth={2} />
      </span>
      <span className="text-[10px] font-semibold leading-snug text-slate-800 sm:text-[11px]">
        {label}
      </span>
    </div>
  );
}

const THREAD =
  "fill-none stroke-[#c4b5fd] stroke-[1.5] [stroke-dasharray:5_6]";

export default function AiSeoWhatIsHub() {
  const { hubLabel, spokes } = aiSeoWhatIs;
  const left = spokes.filter((s) => s.side === "left");
  const right = spokes.filter((s) => s.side === "right");
  const bottom = spokes.find((s) => s.side === "bottom");

  const leftSlots = ["top-[5%]", "top-[39%]", "top-[73%]"] as const;
  const rightSlots = ["top-[5%]", "top-[39%]", "top-[73%]"] as const;
  const anchorKeys = ["leftTop", "leftMid", "leftBot", "rightTop", "rightMid", "rightBot"] as const;

  return (
    <div className="relative mx-auto mt-8 w-full max-w-[30rem] sm:max-w-[34rem]">
      <div
        className="relative w-full"
        style={{ aspectRatio: `${VB.w} / ${VB.h}` }}
      >
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox={`0 0 ${VB.w} ${VB.h}`}
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <circle
            cx={HUB.cx}
            cy={HUB.cy}
            r={RING_R}
            fill="none"
            stroke="#e9d5ff"
            strokeWidth="1"
            strokeDasharray="6 8"
          />
          <path className={THREAD} d={curvedPath(ANCHORS.leftTop.x, ANCHORS.leftTop.y, -32)} />
          <path className={THREAD} d={straightPath(ANCHORS.leftMid.x, ANCHORS.leftMid.y)} />
          <path className={THREAD} d={curvedPath(ANCHORS.leftBot.x, ANCHORS.leftBot.y, -32)} />
          <path className={THREAD} d={curvedPath(ANCHORS.rightTop.x, ANCHORS.rightTop.y, 32)} />
          <path className={THREAD} d={straightPath(ANCHORS.rightMid.x, ANCHORS.rightMid.y)} />
          <path className={THREAD} d={curvedPath(ANCHORS.rightBot.x, ANCHORS.rightBot.y, 32)} />
          <path className={THREAD} d={straightPath(ANCHORS.bottom.x, ANCHORS.bottom.y)} />
        </svg>

        <div className="absolute left-1/2 top-[43.5%] z-10 flex h-[5.25rem] w-[5.25rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#4f46e5] via-[#6d28d9] to-[#7c3aed] shadow-[0_0_44px_rgba(124,58,237,0.5)] ring-[3px] ring-violet-200/80 sm:h-[5.75rem] sm:w-[5.75rem]">
          <span className="text-center text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
            {hubLabel}
          </span>
        </div>

        {left.map((s, i) => (
          <div key={s.label} className={`absolute left-0 z-10 ${leftSlots[i]}`}>
            <SpokeCard label={s.label} icon={s.icon as LucideIcon} color={s.color} />
          </div>
        ))}
        {right.map((s, i) => (
          <div key={s.label} className={`absolute right-0 z-10 ${rightSlots[i]}`}>
            <SpokeCard label={s.label} icon={s.icon as LucideIcon} color={s.color} />
          </div>
        ))}
        {bottom && (
          <div className="absolute bottom-[1%] left-1/2 z-10 -translate-x-1/2">
            <SpokeCard
              label={bottom.label}
              icon={bottom.icon as LucideIcon}
              color={bottom.color}
            />
          </div>
        )}
      </div>
    </div>
  );
}

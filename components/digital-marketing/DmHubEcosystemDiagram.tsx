"use client";

import type { LucideIcon } from "lucide-react";
import { dmHubEcosystem } from "@/lib/digital-marketing/hub-dm-content";
import { HUB_CARD } from "@/components/digital-marketing/hub-dm-styles";

const VB = { w: 520, h: 400 };
const HUB = { cx: 260, cy: 175, r: 52 };
const RING_R = 148;

const ANCHORS = {
  leftTop: { x: 148, y: 52 },
  leftMid: { x: 132, y: 175 },
  leftBot: { x: 148, y: 298 },
  rightTop: { x: 372, y: 52 },
  rightMid: { x: 388, y: 175 },
  rightBot: { x: 372, y: 298 },
  bottom: { x: 260, y: 332 },
} as const;

const CARD_SLOT: Record<string, string> = {
  leftTop: "left-[2%] top-[2%]",
  leftMid: "left-[0%] top-[38%]",
  leftBot: "left-[2%] top-[72%]",
  rightTop: "right-[2%] top-[2%]",
  rightMid: "right-[0%] top-[38%]",
  rightBot: "right-[2%] top-[72%]",
  bottom: "bottom-[0%] left-1/2 -translate-x-1/2",
};

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
  desc,
  icon: Icon,
  color,
}: {
  label: string;
  desc: string;
  icon: LucideIcon;
  color: string;
}) {
  const [iconText, iconBg] = color.split(" ");
  return (
    <div className={`${HUB_CARD} w-[10.5rem] p-3 sm:w-[11.5rem] sm:p-3.5`}>
      <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${iconBg}`}>
        <Icon className={`h-4 w-4 ${iconText}`} strokeWidth={2} />
      </span>
      <p className="mt-2 text-xs font-bold text-slate-900 sm:text-[13px]">{label}</p>
      <p className="mt-0.5 text-[10px] leading-snug text-slate-500 sm:text-[11px]">{desc}</p>
    </div>
  );
}

const THREAD = "fill-none stroke-[#c4b5fd] stroke-[1.5] [stroke-dasharray:5_6]";

export default function DmHubEcosystemDiagram() {
  const { hubLabel, spokes } = dmHubEcosystem;

  return (
    <div className="relative mx-auto w-full max-w-[34rem] sm:max-w-[38rem] lg:max-w-none">
      <div className="relative w-full" style={{ aspectRatio: `${VB.w} / ${VB.h}` }}>
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

        <div className="absolute left-1/2 top-[44%] z-20 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-[-12%] rounded-full bg-violet-500/15 blur-2xl" aria-hidden />
          <div className="relative flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full bg-gradient-to-br from-[#7c3aed] via-[#6366f1] to-[#4f46e5] shadow-[0_0_48px_rgba(99,102,241,0.45)] sm:h-[6rem] sm:w-[6rem]">
            <span className="max-w-[4.5rem] text-center text-[10px] font-bold leading-tight text-white sm:text-[11px]">
              {hubLabel}
            </span>
          </div>
        </div>

        <div className="absolute inset-0">
          {spokes.map((spoke) => (
            <div key={spoke.label} className={`absolute z-10 ${CARD_SLOT[spoke.position]}`}>
              <SpokeCard
                label={spoke.label}
                desc={spoke.desc}
                icon={spoke.icon as LucideIcon}
                color={spoke.color}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

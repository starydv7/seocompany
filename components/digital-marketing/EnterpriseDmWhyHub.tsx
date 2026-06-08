"use client";

import type { LucideIcon } from "lucide-react";
import { Building2 } from "lucide-react";
import { EDM_PURPLE } from "@/components/digital-marketing/enterprise-dm-styles";
import { enterpriseDmWhy } from "@/lib/digital-marketing/enterprise-content";

type Position = (typeof enterpriseDmWhy.hubSpokes)[number]["position"];

/** Anchor point (% of container) — cards sit outside the hub ring */
const ANCHOR: Record<Position, { left: string; top: string; tx: string; ty: string }> = {
  "top-center": { left: "50%", top: "2%", tx: "-50%", ty: "0" },
  "mid-right": { left: "98%", top: "50%", tx: "-100%", ty: "-50%" },
  "bottom-center": { left: "50%", top: "98%", tx: "-50%", ty: "-100%" },
  "mid-left": { left: "2%", top: "50%", tx: "0", ty: "-50%" },
};

function SpokeCard({
  label,
  icon: Icon,
  compact,
}: {
  label: string;
  icon: LucideIcon;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-xl border border-slate-100/90 bg-white shadow-[0_4px_22px_rgba(15,23,42,0.09)] ${
        compact ? "w-[7.25rem] px-2.5 py-2 sm:w-[7.75rem]" : "w-[9.5rem] px-3 py-2.5 sm:w-[10rem]"
      }`}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-50">
        <Icon className="h-3.5 w-3.5" style={{ color: EDM_PURPLE }} strokeWidth={2} />
      </span>
      <span className="text-[10px] font-semibold leading-snug text-slate-800 sm:text-[11px]">
        {label}
      </span>
    </div>
  );
}

export default function EnterpriseDmWhyHub() {
  const { hubSpokes } = enterpriseDmWhy;

  return (
    <div className="relative h-[17rem] w-full overflow-visible sm:h-[19rem] lg:h-[21rem]">
      {/* Dashed rings */}
      <svg
        className="pointer-events-none absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 200 200"
        aria-hidden
      >
        {[32, 50, 68, 86].map((r) => (
          <circle
            key={r}
            cx="100"
            cy="100"
            r={r}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="1"
            strokeDasharray="3 6"
          />
        ))}
      </svg>

      {/* Center hub */}
      <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
        <div
          className="flex h-[4.75rem] w-[4.75rem] items-center justify-center rounded-full shadow-[0_0_48px_rgba(124,58,237,0.5)] sm:h-[5.25rem] sm:w-[5.25rem]"
          style={{ backgroundColor: EDM_PURPLE }}
        >
          <Building2 className="h-8 w-8 text-white sm:h-9 sm:w-9" strokeWidth={1.75} />
        </div>
      </div>

      {hubSpokes.map((s) => {
        const a = ANCHOR[s.position];
        const isSide = s.position === "mid-left" || s.position === "mid-right";
        return (
          <div
            key={s.label}
            className="absolute z-20"
            style={{
              left: a.left,
              top: a.top,
              transform: `translate(${a.tx}, ${a.ty})`,
            }}
          >
            <SpokeCard
              label={s.label}
              icon={s.icon as LucideIcon}
              compact={isSide}
            />
          </div>
        );
      })}
    </div>
  );
}

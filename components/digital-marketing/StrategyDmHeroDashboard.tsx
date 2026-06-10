"use client";

import type { LucideIcon } from "lucide-react";
import { strategyHero } from "@/lib/digital-marketing/strategy-content";
import { DSM_CARD } from "@/components/digital-marketing/strategy-dm-styles";

const SPOKE_POS: Record<string, string> = {
  top: "left-1/2 top-[2%] -translate-x-1/2",
  right: "right-[2%] top-1/2 -translate-y-1/2",
  bottom: "bottom-[2%] left-1/2 -translate-x-1/2",
  left: "left-[2%] top-1/2 -translate-y-1/2",
};

export default function StrategyDmHeroDashboard() {
  const { spokes } = strategyHero;

  return (
    <div
      className="relative mx-auto h-[22rem] w-full sm:h-[26rem] lg:h-[28rem]"
      aria-hidden
    >
      <svg
        className="pointer-events-none absolute left-1/2 top-1/2 h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 320 320"
        preserveAspectRatio="xMidYMid meet"
      >
        {[140, 110, 80, 50].map((r) => (
          <circle
            key={r}
            cx="160"
            cy="160"
            r={r}
            fill="none"
            stroke="#ddd6fe"
            strokeWidth="1"
            strokeDasharray="4 5"
            opacity="0.7"
          />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/20 blur-2xl" />
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 shadow-[0_0_40px_rgba(124,58,237,0.45)] sm:h-28 sm:w-28">
          <svg viewBox="0 0 64 64" className="h-14 w-14 sm:h-16 sm:w-16">
            <circle cx="32" cy="32" r="24" fill="none" stroke="white" strokeWidth="3" opacity="0.9" />
            <circle cx="32" cy="32" r="16" fill="none" stroke="white" strokeWidth="2.5" opacity="0.7" />
            <circle cx="32" cy="32" r="8" fill="white" />
            <path
              d="M8 32 L28 32 M32 8 L32 24"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.85"
            />
            <path
              d="M32 32 L52 18"
              stroke="#c4b5fd"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <polygon points="52,18 46,20 48,14" fill="white" />
          </svg>
        </div>
      </div>

      {spokes.map((spoke) => {
        const Icon = spoke.icon as LucideIcon;
        return (
          <div
            key={spoke.label}
            className={`absolute z-20 w-[7.75rem] sm:w-[8.75rem] ${SPOKE_POS[spoke.position]}`}
          >
            <div className={`${DSM_CARD} p-2.5 sm:p-3`}>
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-50 sm:h-8 sm:w-8">
                <Icon className="h-3.5 w-3.5 text-violet-600 sm:h-4 sm:w-4" strokeWidth={2} />
              </span>
              <p className="mt-1.5 text-[11px] font-bold text-slate-900 sm:text-xs">{spoke.label}</p>
              <p className="mt-0.5 text-[9px] leading-snug text-slate-500 sm:text-[10px]">
                {spoke.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

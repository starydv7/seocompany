import type { LucideIcon } from "lucide-react";

/** Franchise page: full-width blocks, 2% padding on all sides */
export const FRANCHISE_PAD = "p-[2%]";
export const FRANCHISE_SECTION = `w-full ${FRANCHISE_PAD}`;
export const FRANCHISE_INNER = `w-full min-w-0 ${FRANCHISE_PAD}`;
export const FRANCHISE_CARD =
  `w-full min-w-0 rounded-xl border border-white/[0.09] bg-white/[0.035] ${FRANCHISE_PAD} shadow-[0_2px_14px_rgba(15,23,42,0.05)]`;

/** Shared typography — one scale for the whole franchise page */
export const FRANCHISE_SECTION_TITLE =
  "text-xl font-bold leading-snug tracking-tight text-white";
export const FRANCHISE_SECTION_SUBTITLE =
  "text-xs leading-relaxed text-white/50";
export const FRANCHISE_BADGE =
  "inline-flex items-center gap-1.5 rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-violet-300";
export const FRANCHISE_ITEM_TITLE = "text-sm font-bold leading-snug text-white";
export const FRANCHISE_ITEM_BODY = "mt-0.5 text-xs leading-relaxed text-white/50";
export const FRANCHISE_TAB_LABEL = "text-[11px] font-semibold leading-tight";
export const FRANCHISE_BTN =
  "inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-2.5 text-xs font-semibold lux-cta text-lux-ink";
export const FRANCHISE_CHECK_ICON =
  "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-600";
export const FRANCHISE_STEP_BOX =
  "flex h-full min-h-[8.25rem] w-full min-w-0 flex-col items-center justify-center rounded-lg border border-white/[0.09] bg-white/[0.035] px-2 py-3 text-center shadow-[0_1px_8px_rgba(15,23,42,0.04)]";
export const FRANCHISE_STEP_NUM = "text-xs font-bold text-violet-300";
export const FRANCHISE_STEP_TITLE = "mt-1 text-xs font-bold leading-snug text-white";
export const FRANCHISE_STEP_TAGLINE =
  "mt-1 line-clamp-2 min-h-[2rem] text-xs leading-snug text-violet-300";
export const FRANCHISE_FAQ_ROW =
  "flex h-[3.5rem] w-full shrink-0 items-center gap-3 p-[2%] text-left sm:gap-4";
export const FRANCHISE_FAQ_QUESTION =
  "min-w-0 flex-1 text-sm font-semibold leading-snug text-white";

/** Enterprise-style title accents (blue → violet gradient) */
export const TITLE_GRADIENT =
  "lux-gold-text";

export const TITLE_ACCENT_BLUE = "text-blue-300";

export const PILLAR_ICON_BOX =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-2 border-indigo-400/40 bg-white/[0.035] sm:h-10 sm:w-10";

export function GradientIconBox({ icon: Icon, className = "" }: { icon: LucideIcon; className?: string }) {
  return (
    <span
      className={`relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.09] bg-white/[0.035] ${className}`}
    >
      <Icon className="h-5 w-5" stroke="url(#franchise-icon-grad)" strokeWidth={2} fill="none" />
    </span>
  );
}

export function GradientDefs() {
  return (
    <svg width={0} height={0} className="absolute" aria-hidden>
      <defs>
        <linearGradient id="franchise-icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
    </svg>
  );
}

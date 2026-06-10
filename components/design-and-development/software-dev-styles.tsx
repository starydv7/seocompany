/**
 * Software Development page design tokens.
 * Typography inherits Inter from root layout — use these classes for consistency.
 */

export const SDM_PAD = "px-[2%]";
export const SDM_SECTION = `w-full max-w-none ${SDM_PAD}`;
export const SDM_SECTION_PY = "py-10 sm:py-14 lg:py-16";

/* —— Typography (Inter via layout.tsx) —— */
export const SDM_FONT_DISPLAY =
  "text-[clamp(1.65rem,3.8vw,2.5rem)] font-bold leading-[1.15] tracking-tight text-slate-900";
export const SDM_FONT_DISPLAY_ACCENT = "text-[#7c3aed]";
export const SDM_FONT_LEAD = "text-[15px] leading-relaxed text-slate-600 sm:text-base";
export const SDM_FONT_SECTION =
  "text-center text-[clamp(1.25rem,2.5vw,1.85rem)] font-bold tracking-tight text-slate-900";
export const SDM_FONT_CARD_TITLE = "text-lg font-bold tracking-tight text-slate-900 sm:text-xl";
export const SDM_FONT_BODY = "text-sm leading-relaxed text-slate-600";
export const SDM_FONT_LIST = "text-sm leading-relaxed text-slate-700";
export const SDM_FONT_CAPTION = "text-[10px] font-semibold leading-snug text-slate-600 sm:text-[11px]";
export const SDM_FONT_LABEL =
  "text-[9px] font-bold uppercase tracking-[0.2em] text-violet-700 sm:text-[10px]";

/* —— Legacy aliases (used across section components) —— */
export const SDM_TITLE = "font-bold tracking-tight text-slate-900";
export const SDM_SECTION_TITLE = SDM_FONT_SECTION;
export const SDM_BODY = SDM_FONT_LEAD;
export const SDM_TAG =
  "inline-flex items-center rounded-full border border-violet-200/80 bg-[#f3f0ff] px-3.5 py-1 " +
  SDM_FONT_LABEL;
export const SDM_TITLE_ACCENT = SDM_FONT_DISPLAY_ACCENT;

/* —— Buttons —— */
export const SDM_BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-[#7c3aed] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(124,58,237,0.28)] transition hover:bg-[#6d28d9]";
export const SDM_BTN_OUTLINE =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-[#7c3aed] bg-white px-5 py-2.5 text-sm font-semibold text-[#7c3aed] transition hover:bg-violet-50";

/* —— Surfaces —— */
export const SDM_CARD =
  "rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_4px_24px_rgba(15,23,42,0.07)]";
export const SDM_SERVICE_STACK = "flex w-full flex-col gap-[3%]";
export const SDM_PAGE_HERO = `w-full max-w-none ${SDM_PAD} py-10 sm:py-14 lg:py-16 bg-white`;

export type ServiceSectionVariant = "card" | "page";

export function serviceSectionClass(variant: ServiceSectionVariant) {
  return variant === "page"
    ? `${SDM_PAGE_HERO} relative overflow-hidden`
    : `${SDM_SERVICE_CARD} relative scroll-mt-24 overflow-hidden`;
}
export const SDM_SERVICE_SECTION = "w-full max-w-none bg-[#f3f4f6] px-[2%] py-[2%]";
export const SDM_SERVICE_CARD =
  "w-full overflow-visible rounded-2xl border border-slate-200/80 bg-white p-[2%] shadow-[0_4px_24px_rgba(15,23,42,0.06)]";
export const SDM_CAP_CARD =
  "flex min-h-[7.5rem] flex-col items-center justify-center rounded-xl border border-[#E5E7EB] bg-white px-2 py-4 text-center shadow-[0_2px_14px_rgba(15,23,42,0.05)] sm:min-h-[8.5rem] sm:px-3 sm:py-5";
export const SDM_ICON_BOX =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef2ff] sm:h-10 sm:w-10";
export const SDM_CAP_ICON_BOX =
  "mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-[#f3f0ff] sm:h-12 sm:w-12";

/* —— Lists —— */
export const SDM_BULLET_LIST = "space-y-1.5 sm:space-y-2";
export const SDM_BULLET_ITEM = `flex items-start gap-2 ${SDM_FONT_BODY}`;
export const SDM_BULLET_DOT = "mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#7c3aed]";

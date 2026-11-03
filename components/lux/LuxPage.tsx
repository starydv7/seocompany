import type { ReactNode } from "react";

/** Dark luxury page shell; the negative margin cancels the footer's top margin so the page meets it seamlessly. */
export default function LuxPage({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`lux-root relative isolate -mb-20 overflow-hidden ${className}`}>{children}</div>;
}

export function LuxEyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-[10px] uppercase tracking-[0.32em] text-lux-bronze ${className}`}>{children}</p>
  );
}

export function LuxPill({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full bg-white py-1.5 pl-2 pr-4 ring-1 ring-inset ring-stone-200 backdrop-blur">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lux-gold opacity-70" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-lux-gold" />
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-stone-600">{children}</span>
    </div>
  );
}

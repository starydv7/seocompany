"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Check, FileStack, Globe, Plug, ShieldCheck, Swords } from "lucide-react";
import { PRICE_FACTORS } from "@/lib/pricing/pricing-content";

type FactorKey = (typeof PRICE_FACTORS.factors)[number]["key"];

const ICONS: Record<FactorKey, LucideIcon> = {
  pages: FileStack,
  competition: Swords,
  tools: Plug,
  regulated: ShieldCheck,
  countries: Globe,
};

function scopeLabel(count: number) {
  if (count === 0) return "Tap what applies to you";
  if (count <= 2) return "Focused scope";
  if (count <= 4) return "Broader scope";
  return "Full-scale scope";
}

export default function PricingFactors() {
  const [selected, setSelected] = useState<Set<FactorKey>>(() => new Set());
  const total = PRICE_FACTORS.factors.length;
  const progress = selected.size / total;

  const toggle = (key: FactorKey) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  return (
    <div className="lux-panel h-full p-6 sm:p-8 lg:p-10">
      <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-lux-bronze">Scope</p>
      <h3 className="font-serif mt-3 text-[clamp(2rem,3.4vw,3rem)] leading-[1.05] text-stone-900">
        {PRICE_FACTORS.title}
      </h3>
      <p className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-stone-600">{PRICE_FACTORS.body}</p>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {PRICE_FACTORS.factors.map(({ key, label }) => {
          const Icon = ICONS[key];
          const on = selected.has(key);
          return (
            <button
              key={key}
              type="button"
              aria-pressed={on}
              onClick={() => toggle(key)}
              className={`lux-chip ${on ? "lux-chip-on" : ""} relative flex flex-col items-start gap-3 rounded-2xl p-4 text-left`}
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-xl transition ${
                  on ? "bg-[#ddbf5d] text-[#06070d]" : "bg-white text-stone-600"
                }`}
              >
                <Icon className="h-4 w-4" strokeWidth={2} />
              </span>
              <span className={`text-[13px] font-medium leading-snug ${on ? "text-stone-900" : "text-stone-600"}`}>
                {label}
              </span>
              {on ? (
                <Check className="absolute right-3 top-3 h-3.5 w-3.5 text-lux-bronze" strokeWidth={3} aria-hidden />
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between text-xs">
          <span className="font-mono uppercase tracking-[0.24em] text-stone-500">Scope depth</span>
          <span className="font-medium text-stone-700" aria-live="polite">
            {scopeLabel(selected.size)}
          </span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white">
          <div className="lux-meter-fill h-full rounded-full" style={{ width: `${Math.max(progress, 0.04) * 100}%` }} />
        </div>
        <p className="mt-3 text-xs text-stone-500">We confirm the final scope in writing after the audit.</p>
      </div>
    </div>
  );
}

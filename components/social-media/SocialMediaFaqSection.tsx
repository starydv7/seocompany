"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

type FaqItem = { q: string; a: string };

export default function SocialMediaFaqSection({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const mid = Math.ceil(items.length / 2);
  const left = items.slice(0, mid);
  const right = items.slice(mid);

  const renderColumn = (column: FaqItem[], offset: number) => (
    <div className="space-y-3">
      {column.map((item, i) => {
        const index = offset + i;
        const isOpen = openIndex === index;
        return (
          <div key={item.q} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left sm:px-5 sm:py-4"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-semibold text-slate-900">{item.q}</span>
              <Plus
                className={`h-4 w-4 shrink-0 text-violet-600 transition-transform ${isOpen ? "rotate-45" : ""}`}
                strokeWidth={2.5}
              />
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-4 pb-4 text-sm leading-relaxed text-slate-600 sm:px-5">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="grid gap-3 sm:gap-4 lg:grid-cols-2">
      {renderColumn(left, 0)}
      {renderColumn(right, mid)}
    </div>
  );
}

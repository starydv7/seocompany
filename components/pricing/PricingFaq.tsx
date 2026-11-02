"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { PRICING_FAQS } from "@/lib/pricing/pricing-content";

const ZONES = [
  { label: "US", city: "New York", tz: "America/New_York" },
  { label: "UK", city: "London", tz: "Europe/London" },
  { label: "AU", city: "Sydney", tz: "Australia/Sydney" },
];

function ZoneClocks() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {ZONES.map((zone) => (
        <div key={zone.tz} className="lux-panel rounded-2xl px-4 py-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#ddbf5d]">{zone.label}</p>
          <p className="font-serif mt-2 text-2xl leading-none text-white tabular-nums sm:text-3xl" suppressHydrationWarning>
            {now
              ? new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: zone.tz }).format(now)
              : "--:--"}
          </p>
          <p className="mt-1.5 text-xs text-white/45">{zone.city}</p>
        </div>
      ))}
    </div>
  );
}

export default function PricingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:gap-16">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#ddbf5d]">FAQ</p>
        <h3 className="font-serif mt-3 text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.02] text-white">
          Pricing questions
        </h3>
        <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-white/60">
          Calls in US, UK and Australian business hours.
        </p>
        <div className="mt-8 max-w-md">
          <ZoneClocks />
        </div>
      </div>

      <div className="space-y-3">
        {PRICING_FAQS.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `pricing-faq-${index}`;
          return (
            <div
              key={item.q}
              className={`lux-panel overflow-hidden rounded-2xl transition-shadow duration-300 ${
                isOpen ? "shadow-[inset_0_0_0_1px_rgba(221,191,93,0.45)]" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center gap-5 px-5 py-5 text-left sm:px-7"
              >
                <span className="font-mono text-xs tracking-[0.2em] text-white/35">{String(index + 1).padStart(2, "0")}</span>
                <span className="flex-1 text-base font-semibold text-white sm:text-lg">{item.q}</span>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                    isOpen ? "rotate-45 bg-[#ddbf5d] text-[#06070d]" : "bg-white/[0.06] text-white/70"
                  }`}
                >
                  <Plus className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </button>
              <div
                id={panelId}
                className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-6 pl-[4.25rem] text-[0.95rem] leading-relaxed text-white/65 sm:px-7 sm:pl-[5.1rem]">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

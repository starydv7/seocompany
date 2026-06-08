"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronDown, Circle } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { FRANCHISE_SECTION } from "@/components/seo/franchise-seo-styles";
import { aiSeoFaqs, aiSeoFinalCta } from "@/lib/seo/ai-seo-content";

function CtaGrowthGraphic() {
  return (
    <div className="relative flex h-[10rem] w-full max-w-[14rem] items-end justify-center lg:ml-auto lg:h-[11rem] lg:max-w-[16rem]" aria-hidden>
      <svg viewBox="0 0 200 160" className="h-full w-full">
        <rect x="20" y="90" width="18" height="50" rx="3" fill="url(#ctaBar)" opacity="0.7" />
        <rect x="48" y="70" width="18" height="70" rx="3" fill="url(#ctaBar2)" opacity="0.85" />
        <rect x="76" y="50" width="18" height="90" rx="3" fill="url(#ctaBar2)" />
        <rect x="104" y="30" width="18" height="110" rx="3" fill="url(#ctaBar2)" />
        <rect x="132" y="15" width="18" height="125" rx="3" fill="url(#ctaBar2)" />
        <path d="M10 100 C50 80, 90 50, 170 20" stroke="#f5f3ff" strokeWidth="2.5" fill="none" />
        <path d="M155 8 L175 28 L165 28 L165 45 L185 45 L185 28 L175 28 Z" fill="#ede9fe" />
        <defs>
          <linearGradient id="ctaBar" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
          <linearGradient id="ctaBar2" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#c4b5fd" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function AiSeoFaqCtaSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { badge, title, subtitle, primaryLabel, secondaryLabel, secondaryHref } = aiSeoFinalCta;

  return (
    <section className={`${FRANCHISE_SECTION} pb-16`}>
      <Reveal>
        <div className="w-full overflow-hidden rounded-2xl bg-[#0f172a] p-[2%]">
          <h2 className="text-xl font-bold text-white">Frequently Asked Questions</h2>
          <div className="mt-4 divide-y divide-slate-700/80">
            {aiSeoFaqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-medium text-white/95">{item.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-violet-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-4 text-xs leading-relaxed text-slate-400">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08} className="mt-[2%]">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#5b21b6] via-[#4f46e5] to-[#3b82f6] p-[2%] shadow-[0_24px_56px_rgba(79,70,229,0.35)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1 lg:max-w-[55%]">
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/90">
                <Circle className="h-3 w-3 fill-white/80 text-white/80" strokeWidth={2} />
                {badge}
              </p>
              <h2 className="mt-4 text-xl font-bold leading-snug text-white sm:text-2xl">{title}</h2>
              <p className="mt-3 text-sm text-white/90">{subtitle}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={HUBSPOT_MEETING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-violet-800"
                >
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </Link>
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-white/85 px-5 py-3 text-sm font-semibold text-white"
                >
                  {secondaryLabel}
                </Link>
              </div>
            </div>
            <CtaGrowthGraphic />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

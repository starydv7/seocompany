"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import { ArrowRight, Check, ChevronDown, TrendingUp } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { TECH_SECTION } from "@/components/seo/technical-seo-styles";
import {
  technicalFaqs,
  technicalFinalCta,
  technicalWhyChoose,
} from "@/lib/seo/technical-seo-content";

function CtaChart() {
  return (
    <div
      className="absolute bottom-6 right-6 flex h-[118px] w-[160px] items-end justify-end gap-2"
      aria-hidden
    >
      <div className="absolute -top-2 right-0 flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-bold text-white/90">
        <TrendingUp className="h-3 w-3" />
        +42%
      </div>

      {[28, 40, 52, 66, 90].map((h, i) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          className="w-[18px] rounded-t-sm bg-white/20"
          style={{
            height: `${h}px`,
            background:
              i === 4
                ? "linear-gradient(180deg, rgba(255,255,255,0.45), rgba(255,255,255,0.12))"
                : "rgba(255,255,255,0.18)",
          }}
        />
      ))}
    </div>
  );
}

export default function TechnicalBottomSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { title: whyTitle, items: whyItems } = technicalWhyChoose;
  const { title, subtitle, checklist, primaryLabel } = technicalFinalCta;

  return (
    <section className={`${TECH_SECTION} pb-16`}>
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-5">
        {/* Why Choose — 2×2 */}
        <Reveal>
          <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">{whyTitle}</h2>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {whyItems.map((item) => {
                const Icon = item.icon as LucideIcon;
                return (
                  <div key={item.title} className="flex gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100">
                      <Icon className="h-5 w-5 text-violet-600" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-900">{item.title}</p>
                      <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* FAQ */}
        <Reveal delay={0.04}>
          <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Frequently Asked Questions</h2>
            <div className="mt-4 divide-y divide-slate-100">
              {technicalFaqs.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={item.q}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-3 py-3.5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[13px] font-semibold text-slate-800">{item.q}</span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-violet-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-3 text-[11px] leading-relaxed text-slate-600">{item.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Final CTA */}
        <Reveal delay={0.08}>
          <div className="relative flex h-full min-h-[18rem] flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-[#7c3aed] via-[#6d28d9] to-[#4f46e5] p-8 shadow-xl shadow-violet-400/30 sm:p-9">
            <div className="relative z-10 flex flex-1 flex-col">
              <h2 className="text-[1.55rem] font-bold leading-[1.15] tracking-tight text-white sm:text-[1.85rem]">
                {title}
              </h2>
              <p className="mt-4 max-w-[28ch] text-sm leading-relaxed text-white/90">
                {subtitle}
              </p>

              <ul className="mt-6 space-y-2">
                {checklist.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[13px] text-white/90">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15">
                      <Check className="h-[14px] w-[14px] text-white" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 pr-36 sm:pr-40">
                <Link
                  href={HUBSPOT_MEETING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-xl bg-white/25 px-4 py-2.5 text-[13px] font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition hover:bg-white/30"
                >
                  {primaryLabel}
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </Link>
              </div>
            </div>
            <CtaChart />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

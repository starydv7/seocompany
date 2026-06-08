"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { TECH_BTN_PRIMARY, TECH_SECTION } from "@/components/seo/technical-seo-styles";
import { technicalFaqs, technicalFinalCta } from "@/lib/seo/technical-seo-content";

function CtaBars() {
  return (
    <div className="relative flex h-28 w-full max-w-[10rem] items-end justify-center gap-2 lg:ml-auto" aria-hidden>
      {[40, 55, 70, 88, 100].map((h, i) => (
        <div
          key={i}
          className="w-4 rounded-t-md bg-white/30"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

export default function TechnicalFaqCtaSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { title, subtitle, primaryLabel } = technicalFinalCta;

  return (
    <section className={`${TECH_SECTION} pb-16`}>
      <div className="grid w-full grid-cols-1 gap-[2%] lg:grid-cols-2">
        <Reveal>
          <div className="rounded-2xl border border-slate-200/90 bg-white p-[2%] shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <div className="mt-4 divide-y divide-slate-100">
              {technicalFaqs.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={item.q}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-semibold text-slate-800">{item.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-violet-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-4 text-xs leading-relaxed text-slate-600">{item.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="relative flex h-full min-h-[16rem] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-[#6d28d9] via-[#7c3aed] to-[#4f46e5] p-[2%] shadow-xl shadow-violet-400/30 lg:flex-row lg:items-center">
            <div className="relative z-10 max-w-md">
              <h2 className="text-xl font-bold text-white sm:text-2xl">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-violet-100">{subtitle}</p>
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${TECH_BTN_PRIMARY} mt-6 bg-white text-violet-700 hover:bg-violet-50`}
              >
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <CtaBars />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

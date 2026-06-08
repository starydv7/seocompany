"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  EDM_BODY,
  EDM_SECTION,
  EDM_SECTION_PY,
  EDM_SECTION_TITLE,
} from "@/components/digital-marketing/enterprise-dm-styles";
import { enterpriseDmFaqs } from "@/lib/digital-marketing/enterprise-content";

export default function EnterpriseDmFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={`${EDM_SECTION} bg-white ${EDM_SECTION_PY}`}>
      <div className="grid w-full max-w-none grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-[3%]">
        <Reveal className="lg:pt-2">
          <h2 className={EDM_SECTION_TITLE}>Frequently Asked Questions</h2>
          <p className={`mt-4 w-full ${EDM_BODY}`}>
            Answers to common questions about enterprise digital marketing strategy,
            execution, and measurable growth.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="w-full divide-y divide-slate-200 rounded-2xl border border-slate-200/80 bg-white">
            {enterpriseDmFaqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-slate-50/80 sm:px-6"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold leading-snug text-slate-800">
                      {item.q}
                    </span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-violet-500 transition-transform ${isOpen ? "rotate-45" : ""}`}
                      strokeWidth={2}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

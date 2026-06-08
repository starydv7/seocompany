"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  FDM_BODY,
  FDM_SECTION,
  FDM_SECTION_PY,
  FDM_SECTION_TITLE,
} from "@/components/digital-marketing/franchise-dm-styles";
import { franchiseDmFaqs } from "@/lib/digital-marketing/franchise-dm-content";

export default function FranchiseDmFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={`${FDM_SECTION} bg-slate-50/50 ${FDM_SECTION_PY}`}>
      <Reveal className="w-full text-center">
        <h2 className={FDM_SECTION_TITLE}>Frequently Asked Questions</h2>
        <p className={`mt-3 ${FDM_BODY}`}>
          Everything you need to know about franchise digital marketing.
        </p>
      </Reveal>

      <div className="mt-10 w-full">
        <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200/80 bg-white shadow-sm">
          {franchiseDmFaqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.q} delay={index * 0.03}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-[2%] py-5 text-left transition hover:bg-slate-50/80"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-slate-800 sm:text-[15px]">
                      {item.q}
                    </span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-violet-500 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className={`px-[2%] pb-5 ${FDM_BODY}`}>{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

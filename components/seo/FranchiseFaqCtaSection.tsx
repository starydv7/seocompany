"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ChevronDown, HelpCircle } from "lucide-react";
import FranchiseCtaBanner from "@/components/seo/FranchiseCtaBanner";
import Reveal from "@/components/Reveal";
import {
  FRANCHISE_CARD,
  FRANCHISE_FAQ_QUESTION,
  FRANCHISE_ITEM_BODY,
  FRANCHISE_ITEM_TITLE,
  FRANCHISE_SECTION,
  FRANCHISE_SECTION_SUBTITLE,
  FRANCHISE_SECTION_TITLE,
  TITLE_GRADIENT,
} from "@/components/seo/franchise-seo-styles";
import {
  franchiseCtaFeatures,
  franchiseFaqs,
  franchiseFaqSection,
} from "@/lib/seo/franchise-content";

const FAQ_ROW =
  "flex w-full min-h-[3.5rem] items-center gap-3 px-[2%] py-3 text-left sm:gap-4";

export default function FranchiseFaqCtaSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { title, subtitleLead, subtitleAccent, subtitleTail } = franchiseFaqSection;

  return (
    <section className={FRANCHISE_SECTION}>
      {/* FAQ + CTA — equal height */}
      <div className="grid w-full grid-cols-1 items-stretch gap-[2%] lg:grid-cols-2">
        <Reveal className="flex h-full min-w-0">
          <div className={`${FRANCHISE_CARD} flex h-full w-full min-h-[28rem] flex-col lg:min-h-[32rem]`}>
            <div className="shrink-0">
              <h2 className={FRANCHISE_SECTION_TITLE}>{title}</h2>
              <p className={`mt-2 ${FRANCHISE_SECTION_SUBTITLE}`}>
                {subtitleLead}
                <span className={`font-semibold ${TITLE_GRADIENT}`}>{subtitleAccent}</span>
                {subtitleTail}
              </p>
            </div>

            <div className="mt-5 grid min-h-0 flex-1 grid-rows-5 divide-y divide-slate-200 border-t border-slate-200">
              {franchiseFaqs.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={item.q} className="flex min-h-0 flex-col overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className={`${FAQ_ROW} h-full flex-1 transition-colors hover:bg-slate-50/80`}
                      aria-expanded={isOpen}
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-100">
                        <HelpCircle className="h-5 w-5 text-violet-600" strokeWidth={2} />
                      </span>
                      <span className={FRANCHISE_FAQ_QUESTION}>{item.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-violet-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p
                          className={`border-t border-slate-100 px-[2%] pb-3 pt-2 ${FRANCHISE_SECTION_SUBTITLE} text-slate-600`}
                        >
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06} className="flex h-full min-w-0">
          <FranchiseCtaBanner className="h-full min-h-[28rem] w-full lg:min-h-[32rem]" />
        </Reveal>
      </div>

      {/* Bottom features bar */}
      <Reveal delay={0.1} className="mt-[2%] w-full">
        <div className="grid w-full grid-cols-1 items-stretch rounded-xl border border-slate-200/90 bg-slate-50/50 shadow-[0_2px_14px_rgba(15,23,42,0.05)] sm:grid-cols-2 lg:grid-cols-5">
          {franchiseCtaFeatures.map((feature, i) => {
            const Icon = feature.icon as LucideIcon;
            return (
              <div
                key={feature.title}
                className={`flex min-h-[5.75rem] w-full items-center gap-2.5 p-[2%] ${
                  i > 0 ? "border-t border-slate-200 lg:border-l lg:border-t-0" : ""
                }`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-100">
                  <Icon className="h-4 w-4 text-violet-600" strokeWidth={2} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className={FRANCHISE_ITEM_TITLE}>{feature.title}</p>
                  <p className={FRANCHISE_ITEM_BODY}>{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

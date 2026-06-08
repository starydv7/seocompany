"use client";

import type { LucideIcon } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { AI_ACCENT_COLOR, AI_SECTION_TITLE } from "@/components/seo/ai-seo-styles";
import { FRANCHISE_CARD, FRANCHISE_SECTION, FRANCHISE_SECTION_SUBTITLE } from "@/components/seo/franchise-seo-styles";
import AiSeoWhatIsHub from "@/components/seo/AiSeoWhatIsHub";
import { aiSeoWhatIs, aiSeoWhyMatters } from "@/lib/seo/ai-seo-content";

export default function AiSeoWhatWhySection() {
  const { title: whatTitle, description: whatDesc } = aiSeoWhatIs;
  const { title: whyTitle, description: whyDesc, features, banner } = aiSeoWhyMatters;

  return (
    <section className={FRANCHISE_SECTION}>
      <div className="grid w-full grid-cols-1 items-stretch gap-[2%] lg:grid-cols-2">
        <Reveal className="h-full">
          <article className={`${FRANCHISE_CARD} flex h-full flex-col`}>
            <h2 className={`text-xl ${AI_SECTION_TITLE}`}>{whatTitle}</h2>
            <p className={`mt-3 ${FRANCHISE_SECTION_SUBTITLE} text-slate-600`}>{whatDesc}</p>
            <AiSeoWhatIsHub />
          </article>
        </Reveal>

        <Reveal delay={0.06} className="h-full">
          <article className={`${FRANCHISE_CARD} flex h-full flex-col`}>
            <h2 className={`text-xl ${AI_SECTION_TITLE}`}>{whyTitle}</h2>
            <p className={`mt-3 ${FRANCHISE_SECTION_SUBTITLE} text-slate-600`}>{whyDesc}</p>
            <div className="mt-6 grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => {
                const Icon = f.icon as LucideIcon;
                return (
                  <div
                    key={f.label}
                    className="flex min-h-[3.5rem] items-center gap-2.5 rounded-lg border border-slate-100 bg-white px-3 py-3 shadow-[0_2px_10px_rgba(15,23,42,0.04)]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100">
                      <Icon className="h-4 w-4 text-[#7c3aed]" strokeWidth={2} />
                    </span>
                    <span className="text-xs font-semibold text-[#1a1642]">{f.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 flex items-start gap-3 rounded-xl bg-violet-50/90 px-4 py-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-100">
                <ShieldCheck className="h-5 w-5 text-[#7c3aed]" strokeWidth={2} />
              </span>
              <p className={`text-sm font-bold leading-snug ${AI_ACCENT_COLOR}`}>{banner}</p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

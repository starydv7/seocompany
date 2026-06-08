import type { LucideIcon } from "lucide-react";
import { Circle } from "lucide-react";
import Reveal from "@/components/Reveal";
import { AI_CARD_TITLE, AI_LABEL_PURPLE, AI_SECTION_TITLE } from "@/components/seo/ai-seo-styles";
import { FRANCHISE_ITEM_BODY, FRANCHISE_SECTION } from "@/components/seo/franchise-seo-styles";
import { aiSeoServices } from "@/lib/seo/ai-seo-content";

export default function AiSeoServicesSection() {
  const { badge, title, items } = aiSeoServices;

  return (
    <section className={FRANCHISE_SECTION}>
      <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-[3%]">
        <Reveal className="lg:sticky lg:top-24">
          <p className={`inline-flex items-center gap-2 text-[10px] ${AI_LABEL_PURPLE}`}>
            <Circle className="h-3 w-3 fill-[#7c3aed] text-[#7c3aed]" strokeWidth={3} />
            {badge}
          </p>
          <h2 className={`mt-4 text-xl sm:text-2xl lg:text-[1.65rem] ${AI_SECTION_TITLE}`}>
            {title}
          </h2>
        </Reveal>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {items.map((item, i) => {
            const Icon = item.icon as LucideIcon;
            return (
              <Reveal key={item.title} delay={i * 0.03} className="h-full">
                <article className="flex h-full min-h-[11rem] flex-col rounded-xl border border-slate-100 bg-white p-[2%] shadow-[0_2px_16px_rgba(15,23,42,0.05)]">
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${item.gradient} shadow-sm`}
                    >
                      <Icon className="h-5 w-5 text-white" strokeWidth={2} />
                    </span>
                    <h3 className={`${AI_CARD_TITLE} leading-snug`}>{item.title}</h3>
                  </div>
                  <p className={`mt-3 flex-1 ${FRANCHISE_ITEM_BODY}`}>{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

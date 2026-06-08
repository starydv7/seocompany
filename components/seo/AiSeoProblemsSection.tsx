import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import { AI_CARD_TITLE, AI_LABEL_PURPLE } from "@/components/seo/ai-seo-styles";
import { FRANCHISE_ITEM_BODY, FRANCHISE_SECTION } from "@/components/seo/franchise-seo-styles";
import { aiSeoProblems } from "@/lib/seo/ai-seo-content";

export default function AiSeoProblemsSection() {
  const { title, items } = aiSeoProblems;

  return (
    <section className={FRANCHISE_SECTION}>
      <Reveal>
        <div className="w-full rounded-2xl border border-slate-200/90 bg-white p-[2%] shadow-[0_2px_20px_rgba(15,23,42,0.04)]">
          <h2 className={`text-sm ${AI_LABEL_PURPLE} tracking-wide`}>{title}</h2>
          <div className="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {items.map((item, i) => {
              const Icon = item.icon as LucideIcon;
              return (
                <article
                  key={item.title}
                  className="flex h-full min-h-[10.5rem] flex-col rounded-xl border border-slate-100 bg-white p-[2%] shadow-sm"
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.iconBg}`}
                  >
                    <Icon className={`h-5 w-5 ${item.iconColor}`} strokeWidth={2} />
                  </span>
                  <h3 className={`mt-4 ${AI_CARD_TITLE}`}>{item.title}</h3>
                  <p className={`mt-2 flex-1 ${FRANCHISE_ITEM_BODY}`}>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

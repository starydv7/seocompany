import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import { TECH_BODY, TECH_CARD, TECH_SECTION, TECH_SECTION_TITLE } from "@/components/seo/technical-seo-styles";
import { technicalWhyChoose } from "@/lib/seo/technical-seo-content";

export default function TechnicalWhyChooseSection() {
  const { title, items } = technicalWhyChoose;

  return (
    <section className={`${TECH_SECTION} bg-white`}>
      <Reveal className="text-center">
        <h2 className={TECH_SECTION_TITLE}>{title}</h2>
      </Reveal>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => {
          const Icon = item.icon as LucideIcon;
          return (
            <Reveal key={item.title} delay={i * 0.04}>
              <article className={`${TECH_CARD} h-full text-center sm:text-left`}>
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 sm:mx-0">
                  <Icon className="h-5 w-5 text-violet-600" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-sm font-bold text-slate-900">{item.title}</h3>
                <p className={`mt-2 ${TECH_BODY}`}>{item.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

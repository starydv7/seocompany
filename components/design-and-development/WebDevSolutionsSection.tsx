import type { LucideIcon } from "lucide-react";
import {
  WDM_CARD,
  WDM_FONT_BODY,
  WDM_FONT_CARD_TITLE,
  WDM_FONT_LEAD,
  WDM_FONT_SECTION,
  WDM_ICON_BOX,
  WDM_SECTION,
  WDM_SECTION_PY,
} from "@/components/design-and-development/web-dev-styles";
import { webDevSolutions } from "@/lib/design-and-development/web-dev-content";

export default function WebDevSolutionsSection() {
  return (
    <section className={`${WDM_SECTION} ${WDM_SECTION_PY} bg-[#FAFAF8]`}>
      <div className="mb-8 text-center sm:mb-10">
        <h2 className={WDM_FONT_SECTION}>{webDevSolutions.title}</h2>
        <p className={`mx-auto mt-3 max-w-2xl ${WDM_FONT_LEAD}`}>{webDevSolutions.subtitle}</p>
        <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#7c3aed]" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {webDevSolutions.items.map((item) => {
          const Icon = item.icon as LucideIcon;
          return (
            <article key={item.title} className={WDM_CARD}>
              <span className={`${WDM_ICON_BOX} ${item.color}`}>
                <Icon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" strokeWidth={1.75} />
              </span>
              <h3 className={WDM_FONT_CARD_TITLE}>{item.title}</h3>
              <p className={`mt-2 ${WDM_FONT_BODY}`}>{item.desc}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

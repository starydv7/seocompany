import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  EDM_SECTION,
  EDM_SECTION_PY,
  EDM_SECTION_TITLE,
} from "@/components/digital-marketing/enterprise-dm-styles";
import { enterpriseDmChallenges } from "@/lib/digital-marketing/enterprise-content";

export default function EnterpriseDmChallengesSection() {
  const { title, items } = enterpriseDmChallenges;

  return (
    <section className={`${EDM_SECTION} bg-white ${EDM_SECTION_PY}`}>
      <Reveal className="w-full text-center">
        <h2 className={EDM_SECTION_TITLE}>{title}</h2>
      </Reveal>

      <div className="mt-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {items.map((item, i) => {
          const Icon = item.icon as LucideIcon;
          return (
            <Reveal key={item.title} delay={i * 0.04} className="h-full">
              <article className="flex h-full flex-col rounded-xl bg-slate-50/80 p-5 sm:p-6">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: item.bg }}
                >
                  <Icon
                    className="h-5 w-5"
                    style={{ color: item.color }}
                    strokeWidth={2}
                  />
                </span>
                <h3 className="mt-4 text-sm font-bold leading-snug text-[#0f172a]">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

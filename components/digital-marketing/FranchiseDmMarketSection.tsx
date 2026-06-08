import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import FranchiseDmWorldMap from "@/components/digital-marketing/FranchiseDmWorldMap";
import {
  FDM_SECTION,
  FDM_SECTION_PY,
  FDM_SECTION_TITLE,
  FDM_TAG,
} from "@/components/digital-marketing/franchise-dm-styles";
import { franchiseDmMarket } from "@/lib/digital-marketing/franchise-dm-content";

export default function FranchiseDmMarketSection() {
  const { tag, title, subtitle, features, stats } = franchiseDmMarket;

  return (
    <section className={`${FDM_SECTION} bg-white ${FDM_SECTION_PY}`}>
      <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-[3%]">
        <Reveal className="flex flex-col justify-center">
          <p className={FDM_TAG}>{tag}</p>
          <h2 className={`mt-5 ${FDM_SECTION_TITLE}`}>{title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-[15px]">{subtitle}</p>

          <ul className="mt-8 space-y-6">
            {features.map((feature) => {
              const Icon = feature.icon as LucideIcon;
              return (
                <li key={feature.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50">
                    <Icon className="h-5 w-5 text-violet-600" strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-slate-900 sm:text-[15px]">{feature.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
                      {feature.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.06} className="w-full">
          <FranchiseDmWorldMap />
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-12 w-full lg:mt-14">
        <div className="grid w-full grid-cols-2 gap-6 rounded-2xl border border-slate-100 bg-slate-50/50 p-[2%] sm:grid-cols-3 lg:grid-cols-5 lg:gap-4 lg:divide-x lg:divide-slate-200/80">
          {stats.map((stat) => {
            const Icon = stat.icon as LucideIcon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center lg:px-[2%]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100/80">
                  <Icon className="h-[18px] w-[18px] text-violet-600" strokeWidth={2} />
                </span>
                <p className="mt-3 text-2xl font-bold leading-none text-slate-900 sm:text-[1.65rem]">
                  {stat.value}
                </p>
                <p className="mt-2 text-[11px] font-medium leading-snug text-slate-600 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

import Reveal from "@/components/Reveal";
import { FDM_SECTION } from "@/components/digital-marketing/franchise-dm-styles";
import { franchiseDmHero } from "@/lib/digital-marketing/franchise-dm-content";

export default function FranchiseDmStatsBar() {
  const { stats } = franchiseDmHero;

  return (
    <section className={`${FDM_SECTION} -mt-4 pb-12 sm:-mt-6 sm:pb-16`}>
      <Reveal>
        <div className="grid w-full grid-cols-2 gap-3 rounded-2xl border border-slate-100 bg-white p-[2%] shadow-[0_8px_40px_rgba(99,102,241,0.1)] sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-slate-100">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center px-2 text-center sm:px-6"
            >
              <span className="text-2xl font-bold text-violet-600 sm:text-[1.75rem]">
                {stat.value}
              </span>
              <span className="mt-1.5 text-[11px] font-medium leading-snug text-slate-500 sm:text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

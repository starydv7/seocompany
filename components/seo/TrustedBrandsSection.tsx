import { ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  FRANCHISE_INNER,
  FRANCHISE_ITEM_BODY,
  FRANCHISE_ITEM_TITLE,
  FRANCHISE_SECTION,
  FRANCHISE_SECTION_SUBTITLE,
  FRANCHISE_SECTION_TITLE,
} from "@/components/seo/franchise-seo-styles";
import { franchiseTrusted } from "@/lib/seo/franchise-content";

function WorldMapBg() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35]"
      viewBox="0 0 1200 400"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="map-dots" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#cbd5e1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#map-dots)" />
      <ellipse cx="280" cy="180" rx="120" ry="80" fill="#e2e8f0" opacity="0.5" />
      <ellipse cx="620" cy="160" rx="200" ry="100" fill="#e2e8f0" opacity="0.45" />
      <ellipse cx="920" cy="200" rx="140" ry="90" fill="#e2e8f0" opacity="0.4" />
      <circle cx="340" cy="140" r="6" fill="#a78bfa" opacity="0.5" />
      <circle cx="780" cy="120" r="5" fill="#f472b6" opacity="0.45" />
      <circle cx="950" cy="220" r="5" fill="#818cf8" opacity="0.4" />
    </svg>
  );
}

export default function TrustedBrandsSection() {
  const { badge, title, subtitle, industries, stats } = franchiseTrusted;

  return (
    <section className={`relative overflow-hidden ${FRANCHISE_SECTION}`}>
      <WorldMapBg />

      <div className={`relative ${FRANCHISE_INNER}`}>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-lg bg-violet-100/90 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-violet-700">
            <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2.5} />
            {badge}
          </p>
          <h2 className={`mt-5 ${FRANCHISE_SECTION_TITLE}`}>
            {title}
          </h2>
          <p className={`mx-auto mt-4 max-w-2xl ${FRANCHISE_SECTION_SUBTITLE}`}>
            {subtitle}
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 auto-rows-fr gap-4 sm:grid-cols-2 sm:items-stretch lg:mt-12 lg:grid-cols-3 xl:grid-cols-6 xl:gap-4">
          {industries.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.03} className="h-full">
                <article className="flex h-full min-h-[10.5rem] flex-col items-center rounded-2xl border border-slate-100 bg-white p-[2%] text-center shadow-[0_4px_24px_rgba(15,23,42,0.06)]">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${item.accent} shadow-md`}
                  >
                    <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                  </span>
                  <h3 className={`mt-4 ${FRANCHISE_ITEM_TITLE}`}>{item.title}</h3>
                  <span className={`mt-3 block h-1 w-10 rounded-full ${item.line}`} aria-hidden />
                  <p className={`mt-3 flex-1 ${FRANCHISE_ITEM_BODY}`}>
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.12} className="mt-6 lg:mt-8">
          <div className="grid grid-cols-2 gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-5 shadow-[0_4px_28px_rgba(15,23,42,0.07)] sm:grid-cols-3 lg:grid-cols-6 lg:gap-4 lg:px-6 lg:py-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-2.5 border-slate-100 sm:gap-3 [&:not(:last-child)]:lg:border-r [&:not(:last-child)]:lg:pr-4"
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10 ${stat.iconColor}`}
                  >
                    <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-lg font-bold leading-none text-slate-900">
                      {stat.value}
                    </p>
                    <p className={`mt-1 ${FRANCHISE_ITEM_BODY}`}>
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

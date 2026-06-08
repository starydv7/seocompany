import type { LucideIcon } from "lucide-react";
import { Check, Star, TrendingUp } from "lucide-react";
import Reveal from "@/components/Reveal";
import { whyLocalSeo } from "@/lib/seo/local-content";

function PurpleCheck() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-600 shadow-sm shadow-violet-200/80">
      <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
    </span>
  );
}

function StorefrontCenter() {
  return (
    <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-violet-100/80 shadow-[0_0_40px_rgba(139,92,246,0.2)] sm:h-32 sm:w-32">
      <svg viewBox="0 0 80 80" className="h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]" aria-hidden>
        <rect x="14" y="38" width="52" height="32" rx="4" fill="#3b82f6" />
        <rect x="22" y="46" width="14" height="16" rx="2" fill="#93c5fd" />
        <rect x="44" y="46" width="14" height="16" rx="2" fill="#93c5fd" />
        <path d="M10 38 L40 18 L70 38 Z" fill="#ef4444" />
        <path d="M10 38 L40 18 L70 38 L70 42 L10 42 Z" fill="#f87171" />
        {[18, 28, 38, 48, 58].map((x, i) => (
          <rect
            key={x}
            x={x}
            y={i % 2 === 0 ? 22 : 26}
            width="6"
            height="14"
            fill={i % 2 === 0 ? "#fff" : "#fecaca"}
            opacity={0.95}
          />
        ))}
      </svg>
    </div>
  );
}

function OrbitDiagram() {
  const { orbit } = whyLocalSeo;
  const radiusPct = 42;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[340px]">
      <svg
        aria-hidden
        className="absolute inset-[8%] h-[84%] w-[84%]"
        viewBox="0 0 200 200"
      >
        <circle
          cx="100"
          cy="100"
          r="78"
          fill="none"
          stroke="#ddd6fe"
          strokeWidth="1.5"
          strokeDasharray="4 8"
        />
      </svg>

      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <StorefrontCenter />
      </div>

      {orbit.map((item) => {
        const Icon = item.icon as LucideIcon;
        const rad = (item.angle * Math.PI) / 180;
        const x = 50 + radiusPct * Math.cos(rad);
        const y = 50 + radiusPct * Math.sin(rad);
        return (
          <div
            key={item.label}
            className="absolute z-[5] flex w-[4.5rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center sm:w-20"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-100 bg-white shadow-md sm:h-12 sm:w-12">
              <Icon className={`h-5 w-5 ${item.iconClass}`} strokeWidth={2} />
            </span>
            <p className="mt-1.5 max-w-[5.5rem] text-center text-[9px] font-semibold leading-tight text-slate-700 sm:text-[10px]">
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function GbpProfileCard() {
  const { gbp } = whyLocalSeo;

  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-[0_8px_32px_rgba(15,23,42,0.08)] sm:p-5">
      <div className="flex gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100">
          <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden>
            <rect x="6" y="18" width="28" height="18" rx="3" fill="#6366f1" />
            <path d="M4 18 L20 8 L36 18 Z" fill="#818cf8" />
            <rect x="12" y="24" width="8" height="8" rx="1" fill="#c7d2fe" />
            <rect x="24" y="24" width="6" height="8" rx="1" fill="#c7d2fe" />
          </svg>
        </span>
        <div className="min-w-0">
          <p className="text-base font-bold text-slate-900">{gbp.name}</p>
          <p className="mt-0.5 flex flex-wrap items-center gap-1 text-sm">
            <span className="font-bold text-slate-900">{gbp.rating}</span>
            <span className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            <span className="text-slate-500">({gbp.reviewCount})</span>
          </p>
          <p className="mt-0.5 text-xs text-slate-500">{gbp.category}</p>
        </div>
      </div>

      <div className="mt-4 flex gap-4 border-b border-slate-100 text-[10px] font-bold uppercase tracking-wide">
        {gbp.tabs.map((tab, i) => (
          <span
            key={tab}
            className={`pb-2 ${i === 0 ? "border-b-2 border-indigo-600 text-indigo-600" : "text-slate-400"}`}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {gbp.metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-lg border border-slate-100 bg-slate-50/50 px-2 py-2.5 text-center sm:px-2.5"
          >
            <p className="text-[9px] font-medium text-slate-500 sm:text-[10px]">{m.label}</p>
            <p className="mt-1 text-sm font-bold text-slate-900">{m.value}</p>
            <p className="mt-0.5 inline-flex items-center gap-0.5 text-[10px] font-semibold text-emerald-600">
              <TrendingUp className="h-3 w-3" />
              {m.delta}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-slate-100 bg-white p-3 sm:p-4">
        <p className="text-sm font-bold text-slate-900">Customer Reviews</p>
        <div className="mt-3 flex gap-4">
          <div className="shrink-0 text-center">
            <p className="text-3xl font-bold text-slate-900">{gbp.rating}</p>
            <span className="mt-1 flex justify-center text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
            </span>
            <p className="mt-1 text-[10px] text-slate-500">({gbp.reviewCount} reviews)</p>
          </div>
          <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
            {gbp.ratingBars.map((row) => (
              <div key={row.stars} className="flex items-center gap-2">
                <span className="w-3 text-[10px] text-slate-500">{row.stars}</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-orange-400"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WhyLocalSeoSection() {
  const { title, subtitle, factors } = whyLocalSeo;

  return (
    <section className="relative w-full px-[2%] py-14 sm:py-16 lg:py-20">
      <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_minmax(280px,340px)_minmax(300px,380px)] lg:gap-8 xl:gap-10">
        <Reveal className="min-w-0">
          <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-[2rem]">
            {title}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            {subtitle}
          </p>
          <ul className="mt-8 space-y-3.5">
            {factors.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-800">
                <PurpleCheck />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.06} className="flex justify-center">
          <OrbitDiagram />
        </Reveal>

        <Reveal delay={0.1}>
          <GbpProfileCard />
        </Reveal>
      </div>
    </section>
  );
}

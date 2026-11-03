import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import LuxCard from "@/components/lux/LuxCard";
import { withAlpha } from "@/components/lux/accents";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import { formatUsd, hasRealPrice, type PricingPlan } from "@/lib/pricing/pricing-content";

function PriceBlock({ plan }: { plan: PricingPlan }) {
  if (!hasRealPrice(plan)) {
    return (
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-stone-500">Investment</p>
        <p className="font-serif mt-1 text-[clamp(1.75rem,2.6vw,2.25rem)] italic leading-none text-stone-900">
          {plan.priceFallback}
        </p>
        {plan.terms ? <p className="mt-2 text-xs text-stone-500">{plan.terms}</p> : null}
      </div>
    );
  }

  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-stone-500">From</p>
      <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        {plan.price.map((part, i) => (
          <span key={i} className="flex items-baseline gap-1.5">
            {i > 0 ? <span className="text-lg text-stone-400">+</span> : null}
            <span className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] leading-none text-stone-900">
              {formatUsd(part.amount as number)}
            </span>
            {part.suffix ? <span className="text-sm text-stone-500">{part.suffix}</span> : null}
          </span>
        ))}
      </div>
      {plan.terms ? <p className="mt-2 text-xs text-stone-500">{plan.terms}</p> : null}
    </div>
  );
}

export default function PricingCard({ plan, featured = false }: { plan: PricingPlan; featured?: boolean }) {
  return (
    <LuxCard
      as="article"
      id={`plan-${plan.id}`}
      accent={plan.accent}
      featured={featured}
      className="flex h-full scroll-mt-28 flex-col overflow-hidden p-6 sm:p-8 lg:p-10"
    >
      <span
        aria-hidden
        className="lux-outline-numeral font-serif pointer-events-none absolute -right-2 -top-8 select-none text-[9rem] leading-none sm:text-[11rem]"
      >
        {plan.index}
      </span>

      <div className="flex items-center gap-3">
        <span className="font-mono text-xs tracking-[0.3em] text-stone-500">{plan.index}</span>
        <span className="h-px w-8 bg-white" aria-hidden />
        <span
          className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em]"
          style={{
            color: plan.accent.ink,
            background: `linear-gradient(135deg, ${withAlpha(plan.accent.glow, 0.16)}, transparent)`,
            boxShadow: `inset 0 0 0 1px ${withAlpha(plan.accent.glow, 0.5)}`,
          }}
        >
          {plan.tag}
        </span>
      </div>

      <h3 className="mt-6 max-w-[22ch] text-[clamp(1.5rem,2.3vw,2rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-stone-900">
        {plan.title}
      </h3>
      <p
        className="font-serif mt-3 max-w-[32ch] text-[clamp(1.2rem,1.7vw,1.5rem)] italic leading-snug"
        style={{ color: plan.accent.ink }}
      >
        {plan.headline}
      </p>

      <div className="mt-6 rounded-2xl bg-white px-4 py-3 ring-1 ring-inset ring-stone-200">
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-stone-400">Best for</p>
        <p className="mt-1 text-sm leading-relaxed text-stone-700">{plan.bestFor}</p>
      </div>

      <ul className="mt-7 flex-1 space-y-3.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-stone-700">
            <span className="lux-check mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
              <Check className="h-3 w-3 text-[#06070d]" strokeWidth={3.5} />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="lux-hairline my-8" aria-hidden />

      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <PriceBlock plan={plan} />
        <div className="flex flex-col items-start gap-3 sm:items-end">
          <a
            href={HUBSPOT_MEETING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="lux-cta inline-flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-3.5 text-sm font-semibold text-[#06070d]"
          >
            {plan.cta}
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
          {plan.learnMore ? (
            <Link
              href={plan.learnMore.href}
              className="group inline-flex items-center gap-1 text-xs font-medium text-stone-500 transition hover:text-stone-900"
            >
              Explore {plan.learnMore.label}
              <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          ) : null}
        </div>
      </div>
    </LuxCard>
  );
}

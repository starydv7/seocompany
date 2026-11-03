import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import Reveal from "@/components/Reveal";
import LocalHeroMapCard from "@/components/seo/LocalHeroMapCard";
import OffWhiteSparkleBg from "@/components/seo/OffWhiteSparkleBg";
import LocalProblemsSection from "@/components/seo/LocalProblemsSection";
import WhyLocalSeoSection from "@/components/seo/WhyLocalSeoSection";
import { localHero } from "@/lib/seo/local-content";

const CARD =
  "rounded-2xl border border-stone-200 bg-white shadow-[0_8px_32px_rgba(99,102,241,0.1)]";

function BenefitCheck() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500">
      <Check className="h-3 w-3 text-white" strokeWidth={3} />
    </span>
  );
}

/** Left column: 3 small stat cards (reference layout) */
function LeftStatCards() {
  const { statCards } = localHero;
  return (
    <div className="mt-auto grid grid-cols-1 gap-3 pt-6 sm:grid-cols-3">
      {statCards.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className={`${CARD} flex items-center gap-2.5 px-3 py-3.5 sm:flex-col sm:items-start sm:gap-2 sm:px-4 sm:py-4`}
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${stat.iconClass}`}
            >
              <Icon className="h-4 w-4" strokeWidth={2} />
            </span>
            <div>
              <p className="text-lg font-bold leading-none text-stone-900 sm:text-xl">{stat.value}</p>
              <p className="mt-1 text-[10px] font-medium leading-snug text-stone-500 sm:text-[11px]">
                {stat.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function LocalSeoLanding() {
  const {
    eyebrow,
    titleBefore,
    titleHighlightParts,
    titleMiddle,
    heroSubhead,
    benefits,
  } = localHero;

  return (
    <div className="relative min-h-screen text-stone-900">
      <OffWhiteSparkleBg />
      <div className="relative">
      <section className="relative w-full px-[var(--lux-gutter)] pb-16 pt-10 sm:pb-20 sm:pt-12">
        <div className="relative grid w-full grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-x-[5%] xl:gap-x-[6%]">
          <Reveal className="flex min-w-0 flex-col lg:pr-[1%]">
            <div className="flex flex-1 flex-col space-y-5 sm:space-y-6">
              <p className="inline-flex w-fit rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-indigo-700">
                {eyebrow}
              </p>
              <h1 className="text-[1.7rem] font-bold leading-[1.12] tracking-tight text-stone-900 sm:text-[2.35rem] lg:text-[2.45rem] xl:text-[2.6rem]">
                {titleBefore}
                <span className="text-indigo-700">{titleHighlightParts[0]} </span>
                <span className="text-indigo-700">{titleHighlightParts[1]} </span>
                {titleMiddle}{" "}
                <span className="text-indigo-700">{titleHighlightParts[2]}</span>
              </h1>
              <p className="max-w-[52ch] text-sm leading-relaxed text-stone-600 sm:text-[15px]">
                {heroSubhead}
              </p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 sm:gap-x-6">
                {benefits.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-semibold text-stone-900">
                    <BenefitCheck />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href={HUBSPOT_MEETING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold lux-cta text-lux-ink"
                >
                  Book a Free Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/seo"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold lux-ghost text-stone-900"
                >
                  Explore Our Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <LeftStatCards />
          </Reveal>

          <Reveal delay={0.05} className="flex min-w-0 flex-col">
            <LocalHeroMapCard />
          </Reveal>
        </div>
      </section>

      <WhyLocalSeoSection />

      <LocalProblemsSection />
      </div>
    </div>
  );
}

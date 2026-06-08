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
  "rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_32px_rgba(99,102,241,0.1)]";

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
              <p className="text-lg font-bold leading-none text-slate-900 sm:text-xl">{stat.value}</p>
              <p className="mt-1 text-[10px] font-medium leading-snug text-slate-500 sm:text-[11px]">
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
    <div className="relative min-h-screen text-slate-900">
      <OffWhiteSparkleBg />
      <div className="relative">
      <section className="relative w-full px-[2%] pb-16 pt-10 sm:pb-20 sm:pt-12">
        <div className="relative grid w-full grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-x-[5%] xl:gap-x-[6%]">
          <Reveal className="flex min-w-0 flex-col lg:pr-[1%]">
            <div className="flex flex-1 flex-col space-y-5 sm:space-y-6">
              <p className="inline-flex w-fit rounded-full border border-indigo-200/90 bg-indigo-50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-indigo-700">
                {eyebrow}
              </p>
              <h1 className="text-[1.7rem] font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-[2.35rem] lg:text-[2.45rem] xl:text-[2.6rem]">
                {titleBefore}
                <span className="text-indigo-600">{titleHighlightParts[0]} </span>
                <span className="text-indigo-600">{titleHighlightParts[1]} </span>
                {titleMiddle}{" "}
                <span className="text-indigo-600">{titleHighlightParts[2]}</span>
              </h1>
              <p className="max-w-[52ch] text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                {heroSubhead}
              </p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 sm:gap-x-6">
                {benefits.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-800">
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
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-300/35 transition hover:bg-indigo-700"
                >
                  Book a Free Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/seo"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-indigo-400 hover:text-indigo-700"
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

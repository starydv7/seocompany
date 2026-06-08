import type { LucideIcon } from "lucide-react";

import { Star, TrendingUp } from "lucide-react";

import Reveal from "@/components/Reveal";

import {

  FRANCHISE_BADGE,

  FRANCHISE_INNER,

  FRANCHISE_ITEM_BODY,

  FRANCHISE_ITEM_TITLE,

  FRANCHISE_SECTION,

  FRANCHISE_SECTION_SUBTITLE,

  FRANCHISE_SECTION_TITLE,

  TITLE_GRADIENT,

} from "@/components/seo/franchise-seo-styles";

import { whyChooseUs } from "@/lib/seo/franchise-content";



export default function FranchiseWhyChooseSection() {

  const { badge, titleBefore, titleAccent, titleAfter, subtitle, cards, highlight, stats } =

    whyChooseUs;



  return (

    <section className={FRANCHISE_SECTION}>

      <Reveal className={`${FRANCHISE_INNER} w-full text-center`}>

        <p className={FRANCHISE_BADGE}>

          <Star className="h-3 w-3 shrink-0 fill-violet-600 text-violet-600" />

          {badge}

        </p>

        <h2 className={`mt-4 ${FRANCHISE_SECTION_TITLE}`}>

          {titleBefore} <span className={TITLE_GRADIENT}>{titleAccent}</span> {titleAfter}

        </h2>

        <p className={`mt-3 ${FRANCHISE_SECTION_SUBTITLE}`}>{subtitle}</p>

      </Reveal>



      <div className="mt-[2%] grid w-full grid-cols-2 auto-rows-fr items-stretch gap-[2%] sm:grid-cols-3 lg:grid-cols-6">

        {cards.map((card, i) => {

          const Icon = card.icon as LucideIcon;

          return (

            <Reveal key={card.title} delay={i * 0.03} className="h-full w-full min-w-0">

              <article className="box-border flex h-full min-h-[9.5rem] w-full min-w-0 flex-col items-center rounded-xl border border-slate-200/90 bg-white p-[2%] text-center shadow-[0_2px_14px_rgba(15,23,42,0.04)]">

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-100">

                  <Icon className="h-5 w-5 text-violet-600" strokeWidth={2} />

                </span>

                <h3 className={`mt-3 ${FRANCHISE_ITEM_TITLE}`}>{card.title}</h3>

                <p className={`mt-2 min-h-[3.25rem] flex-1 ${FRANCHISE_ITEM_BODY}`}>{card.description}</p>

              </article>

            </Reveal>

          );

        })}

      </div>



      <Reveal delay={0.08} className="mt-[2%] w-full">

        <div className="box-border flex w-full items-start gap-3 rounded-xl border border-violet-100/90 bg-violet-50/80 p-[2%] sm:items-center sm:gap-4">

          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-100">

            <TrendingUp className="h-5 w-5 text-violet-600" strokeWidth={2} />

          </span>

          <p className={`min-w-0 flex-1 text-left ${FRANCHISE_ITEM_BODY} text-slate-700`}>

            {highlight.before}

            <span className="font-bold text-violet-700">{highlight.emphasis1}</span>

            {highlight.middle}

            <span className="font-bold text-violet-700">{highlight.emphasis2}</span>

          </p>

        </div>

      </Reveal>



      <Reveal delay={0.12} className="mt-[2%] w-full">

        <div className="grid w-full grid-cols-1 items-stretch divide-y divide-slate-200 rounded-xl border border-slate-200/90 bg-white sm:grid-cols-5 sm:divide-x sm:divide-y-0">

          {stats.map((stat, i) => {

            const Icon = stat.icon as LucideIcon;

            return (

              <div

                key={stat.label}

                className={`box-border flex min-h-[5rem] w-full min-w-0 items-center gap-2.5 p-[2%] sm:justify-center ${

                  i > 0 ? "border-t border-slate-200 sm:border-t-0" : ""

                }`}

              >

                <span

                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${stat.iconClass}`}

                >

                  <Icon className="h-4 w-4" strokeWidth={2} />

                </span>

                <div className="min-w-0 flex-1 text-left sm:text-center">

                  <p className="text-lg font-bold leading-none text-slate-900">{stat.value}</p>

                  <p className={`mt-0.5 ${FRANCHISE_ITEM_BODY}`}>{stat.label}</p>

                </div>

              </div>

            );

          })}

        </div>

      </Reveal>

    </section>

  );

}


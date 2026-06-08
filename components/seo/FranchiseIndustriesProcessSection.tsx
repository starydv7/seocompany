"use client";



import Link from "next/link";

import { useState } from "react";

import type { LucideIcon } from "lucide-react";

import { ArrowRight, Check, Star, Workflow } from "lucide-react";

import { HUBSPOT_MEETING_URL } from "@/lib/site";

import Reveal from "@/components/Reveal";

import FranchiseSeoDashboard from "@/components/seo/FranchiseSeoDashboard";

import {

  FRANCHISE_BADGE,

  FRANCHISE_BTN,

  FRANCHISE_CARD,

  FRANCHISE_CHECK_ICON,

  FRANCHISE_ITEM_BODY,

  FRANCHISE_ITEM_TITLE,

  FRANCHISE_SECTION,

  FRANCHISE_SECTION_SUBTITLE,

  FRANCHISE_SECTION_TITLE,

  FRANCHISE_STEP_BOX,

  FRANCHISE_STEP_NUM,

  FRANCHISE_STEP_TAGLINE,

  FRANCHISE_STEP_TITLE,

  FRANCHISE_TAB_LABEL,

  TITLE_GRADIENT,

} from "@/components/seo/franchise-seo-styles";

import { franchiseIndustries, franchiseProcessSection } from "@/lib/seo/franchise-content";



function CompactProcessStep({

  step,

  title,

  tagline,

  icon: Icon,

}: {

  step: string;

  title: string;

  tagline: string;

  icon: LucideIcon;

}) {

  return (

    <article className={FRANCHISE_STEP_BOX}>

      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-violet-100 bg-violet-50">

        <Icon className="h-4 w-4 text-violet-600" strokeWidth={2} />

      </span>

      <p className={`mt-2 ${FRANCHISE_STEP_NUM}`}>{step}</p>

      <h3 className={FRANCHISE_STEP_TITLE}>{title}</h3>

      <p className={FRANCHISE_STEP_TAGLINE}>{tagline}</p>

    </article>

  );

}



function BenefitRow({ title, description }: { title: string; description: string }) {

  return (

    <li className="flex w-full items-start gap-2.5">

      <span className={FRANCHISE_CHECK_ICON}>

        <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />

      </span>

      <div className="min-w-0 flex-1 text-left">

        <p className={FRANCHISE_ITEM_TITLE}>{title}</p>

        <p className={FRANCHISE_ITEM_BODY}>{description}</p>

      </div>

    </li>

  );

}



export default function FranchiseIndustriesProcessSection() {

  const { titlePrefix, titleAccent, tabs, panels, tabSubtitles, cta } = franchiseIndustries;

  const { badge, titlePrefix: processPrefix, titleAccent: processAccent, subtitle: processSubtitle, steps, features } =

    franchiseProcessSection;

  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("saas");

  const benefits = panels[active];

  const industrySubtitle = tabSubtitles[active];



  return (

    <section className={FRANCHISE_SECTION}>

      <div className="grid w-full grid-cols-1 items-stretch gap-[2%] lg:grid-cols-2">

        {/* Left: Every Industry */}

        <div className={`${FRANCHISE_CARD} flex h-full min-h-0 flex-col`}>

          <Reveal>

            <h2 className={`text-left ${FRANCHISE_SECTION_TITLE}`}>

              {titlePrefix} <span className={TITLE_GRADIENT}>{titleAccent}</span>

            </h2>

          </Reveal>



          <Reveal delay={0.04} className="mt-4">

            <div className="flex w-full border-b border-slate-200">

              {tabs.map((tab) => {

                const Icon = tab.icon as LucideIcon;

                const isActive = active === tab.id;

                return (

                  <button

                    key={tab.id}

                    type="button"

                    onClick={() => setActive(tab.id)}

                    className={`flex min-w-0 flex-1 items-center justify-center gap-1 border-b-2 pb-3 pt-0 transition ${

                      isActive

                        ? "border-violet-600 text-violet-700"

                        : "border-transparent text-slate-500 hover:text-slate-700"

                    }`}

                  >

                    <Icon

                      className={`h-3.5 w-3.5 shrink-0 ${isActive ? "text-violet-600" : "text-slate-400"}`}

                      strokeWidth={2}

                    />

                    <span className={`text-center ${FRANCHISE_TAB_LABEL}`}>{tab.label}</span>

                  </button>

                );

              })}

            </div>

            <p className={`mt-3 ${FRANCHISE_SECTION_SUBTITLE}`}>{industrySubtitle}</p>

          </Reveal>



          <Reveal delay={0.08} className="mt-5 flex-1">

            <div className="flex w-full flex-col gap-5 lg:flex-row lg:items-stretch lg:gap-4">

              <div className="flex w-full shrink-0 justify-center lg:w-[42%] lg:justify-start">

                <FranchiseSeoDashboard />

              </div>

              <ul className="flex min-w-0 w-full flex-1 flex-col justify-center gap-3.5">

                {benefits.map((item) => (

                  <BenefitRow key={item.title} title={item.title} description={item.description} />

                ))}

              </ul>

            </div>

          </Reveal>



          <Reveal delay={0.12} className="mt-5 shrink-0">

            <div className="flex w-full flex-col items-stretch justify-between gap-3 rounded-xl bg-slate-50/90 p-[2%] sm:flex-row sm:items-center">

              <div className="flex min-w-0 flex-1 items-start gap-2.5 sm:items-center">

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600">

                  <Star className="h-4 w-4 fill-white text-white" />

                </span>

                <div className="min-w-0 text-left">

                  <p className={`${FRANCHISE_ITEM_TITLE} text-violet-700`}>{cta.highlight}</p>

                  <p className={FRANCHISE_ITEM_BODY}>{cta.body}</p>

                </div>

              </div>

              <Link

                href={HUBSPOT_MEETING_URL}

                target="_blank"

                rel="noopener noreferrer"

                className={`${FRANCHISE_BTN} shrink-0`}

              >

                {cta.buttonLabel}

                <ArrowRight className="h-3.5 w-3.5" />

              </Link>

            </div>

          </Reveal>

        </div>



        {/* Right: SEO Process */}

        <div className={`${FRANCHISE_CARD} flex h-full min-h-0 flex-col`}>

          <Reveal delay={0.05}>

            <p className={FRANCHISE_BADGE}>

              <Workflow className="h-3 w-3 shrink-0" strokeWidth={2} />

              {badge}

            </p>

            <h2 className={`mt-3 text-left ${FRANCHISE_SECTION_TITLE}`}>

              {processPrefix} <span className={TITLE_GRADIENT}>{processAccent}</span>

            </h2>

            <p className={`mt-2 ${FRANCHISE_SECTION_SUBTITLE}`}>{processSubtitle}</p>

          </Reveal>



          <Reveal delay={0.08} className="mt-5 w-full flex-1">

            <div className="grid h-full w-full grid-cols-2 auto-rows-fr items-stretch gap-2.5 sm:grid-cols-3">

              {steps.map((step) => (

                <CompactProcessStep

                  key={step.title}

                  step={step.step}

                  title={step.title}

                  tagline={step.tagline}

                  icon={step.icon as LucideIcon}

                />

              ))}

            </div>

          </Reveal>



          <Reveal delay={0.12} className="mt-5 w-full shrink-0">

            <div className="flex w-full flex-col gap-3 rounded-xl border border-slate-200/80 bg-slate-50/80 p-[2%]">

              {features.map((feature) => (

                <BenefitRow key={feature.title} title={feature.title} description={feature.description} />

              ))}

            </div>

          </Reveal>

        </div>

      </div>

    </section>

  );

}


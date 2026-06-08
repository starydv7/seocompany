"use client";

import Link from "next/link";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check, Star } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import Reveal from "@/components/Reveal";
import FranchiseSeoDashboard from "@/components/seo/FranchiseSeoDashboard";
import { TITLE_GRADIENT } from "@/components/seo/franchise-seo-styles";
import { franchiseIndustries } from "@/lib/seo/franchise-content";

/** Standalone industries block (same left-column layout as combined section) */
export default function FranchiseIndustriesSection() {
  const { titlePrefix, titleAccent, tabs, panels, tabSubtitles, cta } = franchiseIndustries;
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("saas");
  const benefits = panels[active];
  const subtitle = tabSubtitles[active];

  return (
    <section className="w-full px-[2%] py-16 sm:py-20">
      <Reveal>
        <h2 className="text-center text-lg font-bold text-slate-900 sm:text-xl">
          {titlePrefix} <span className={TITLE_GRADIENT}>{titleAccent}</span>
        </h2>
      </Reveal>

      <Reveal delay={0.04} className="mx-auto mt-6 max-w-5xl">
        <div className="flex w-full border-b border-slate-200">
          {tabs.map((tab) => {
            const Icon = tab.icon as LucideIcon;
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={`flex min-w-0 flex-1 items-center justify-center gap-1 border-b-2 pb-3 transition ${
                  isActive
                    ? "border-violet-600 text-violet-700"
                    : "border-transparent text-slate-500 hover:text-slate-700"
                }`}
              >
                <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-violet-600" : "text-slate-400"}`} />
                <span className="text-[10px] font-semibold sm:text-xs">{tab.label}</span>
              </button>
            );
          })}
        </div>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-500">{subtitle}</p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-10 grid max-w-5xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <FranchiseSeoDashboard />
        <ul className="space-y-6">
          {benefits.map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-600">
                <Check className="h-4 w-4 text-white" strokeWidth={3} />
              </span>
              <div>
                <p className="font-bold text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm text-slate-500">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.12} className="mx-auto mt-10 flex max-w-5xl flex-col items-stretch justify-between gap-4 rounded-2xl bg-slate-50 px-5 py-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600">
            <Star className="h-5 w-5 fill-white text-white" />
          </span>
          <div>
            <p className="font-bold text-violet-700">{cta.highlight}</p>
            <p className="text-sm text-slate-500">{cta.body}</p>
          </div>
        </div>
        <Link
          href={HUBSPOT_MEETING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-violet-700"
        >
          {cta.buttonLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </section>
  );
}

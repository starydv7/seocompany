import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  Clock,
  GitBranch,
  MapPinOff,
  Search,
  Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  FRANCHISE_INNER,
  FRANCHISE_ITEM_BODY,
  FRANCHISE_ITEM_TITLE,
  FRANCHISE_SECTION,
  FRANCHISE_SECTION_SUBTITLE,
  FRANCHISE_SECTION_TITLE,
  GradientIconBox,
  PILLAR_ICON_BOX,
  TITLE_ACCENT_BLUE,
  TITLE_GRADIENT,
} from "@/components/seo/franchise-seo-styles";
import { whatIsFranchiseSeo, whyFranchiseSeo } from "@/lib/seo/franchise-content";

const WHY_ICONS: LucideIcon[] = [
  MapPinOff,
  GitBranch,
  Search,
  AlertTriangle,
  Users,
  Clock,
];

const PANEL =
  "flex min-h-0 min-w-0 flex-col rounded-2xl border border-slate-200/90 bg-white p-[2%] shadow-[0_4px_28px_rgba(15,23,42,0.06)]";

export default function WhatWhySection() {
  return (
    <section className={FRANCHISE_SECTION}>
      <div className={`grid w-full grid-cols-1 items-stretch gap-[2%] md:grid-cols-2`}>
        <article className={`${PANEL} flex h-full w-full flex-col`}>
          <Reveal>
            <h2 className={FRANCHISE_SECTION_TITLE}>
              {whatIsFranchiseSeo.titlePrefix}{" "}
              <span className={TITLE_ACCENT_BLUE}>{whatIsFranchiseSeo.titleAccent}</span>
            </h2>
          </Reveal>
          <Reveal className="mt-5 lg:mt-6">
            <div className={`space-y-4 ${FRANCHISE_SECTION_SUBTITLE} text-slate-600`}>
              {whatIsFranchiseSeo.body.map((p) => (
                <p key={p.slice(0, 36)}>{p}</p>
              ))}
            </div>
            <ul className="mt-6 grid grid-cols-1 gap-x-5 gap-y-3.5 sm:grid-cols-2">
              {whatIsFranchiseSeo.pillars.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-center gap-2.5">
                  <span className={PILLAR_ICON_BOX}>
                    <Icon className="h-4 w-4 text-indigo-500 sm:h-[18px] sm:w-[18px]" strokeWidth={2} />
                  </span>
                  <span className={`${FRANCHISE_ITEM_TITLE} font-medium`}>
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </article>

        <article className={`${PANEL} flex h-full w-full flex-col`}>
          <Reveal delay={0.08}>
            <h2 className={FRANCHISE_SECTION_TITLE}>
              {whyFranchiseSeo.titleLine1}{" "}
              <span className={TITLE_GRADIENT}>{whyFranchiseSeo.titleLine2}</span>
            </h2>
            <p className={`mt-4 ${FRANCHISE_SECTION_SUBTITLE} text-slate-600`}>
              {whyFranchiseSeo.lead}
            </p>
          </Reveal>

          <div className="mt-7 grid grid-cols-1 auto-rows-fr gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
            {whyFranchiseSeo.risks.map((risk, i) => {
              const Icon = WHY_ICONS[i] ?? AlertTriangle;
              return (
                <Reveal key={risk.title} delay={0.1 + i * 0.02} className="h-full min-w-0">
                  <div className="flex h-full min-h-[8rem] flex-col rounded-xl border border-slate-200/90 bg-slate-50/80 p-[2%]">
                    <GradientIconBox icon={Icon} />
                    <p className={`mt-3 flex-1 ${FRANCHISE_ITEM_BODY} text-slate-600`}>
                      <span className="font-semibold text-slate-800">{risk.title}</span>
                      {" — "}
                      {risk.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <p className={`mt-5 italic ${FRANCHISE_ITEM_BODY}`}>
            {whyFranchiseSeo.note}
          </p>
        </article>
      </div>
    </section>
  );
}

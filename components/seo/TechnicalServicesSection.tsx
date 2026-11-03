import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, ChevronRight, Lock, Sparkles, Target } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import Reveal from "@/components/Reveal";
import TechnicalServicesAuditGraphic from "@/components/seo/TechnicalServicesAuditGraphic";
import {
  TECH_BODY,
  TECH_GRADIENT,
  TECH_SECTION,
  TECH_SECTION_TITLE,
} from "@/components/seo/technical-seo-styles";
import { technicalServices } from "@/lib/seo/technical-seo-content";

export default function TechnicalServicesSection() {
  const { title, intro, items, sidebar } = technicalServices;

  return (
    <section id="technical-services" className={`${TECH_SECTION} bg-transparent py-10 sm:py-14`}>
      <Reveal className="text-center">
        <h2 className={TECH_SECTION_TITLE}>
          <span className={TECH_GRADIENT}>{title}</span>
        </h2>
        <p className={`mx-auto mt-3 max-w-2xl ${TECH_BODY}`}>{intro}</p>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-4 lg:items-stretch">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
          {items.map((service, i) => {
            const Icon = service.icon as LucideIcon;
            return (
              <Reveal key={service.title} delay={i * 0.02}>
                <article className="flex h-full min-h-[10.5rem] flex-col rounded-xl border border-stone-200 bg-white p-5 shadow-[0_2px_14px_rgba(15,23,42,0.05)]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50">
                    <Icon className="h-[18px] w-[18px] text-violet-700" strokeWidth={2} />
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-stone-900">{service.title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-stone-600">
                    {service.description}
                  </p>
                  <Link
                    href={HUBSPOT_MEETING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-700"
                  >
                    Learn more <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.08} className="h-full lg:col-span-1">
          <div className="relative flex h-full flex-col overflow-hidden rounded-2xl lux-banner px-5 py-6 shadow-[0_16px_48px_rgba(91,33,182,0.45)] sm:px-6 sm:py-7">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_15%,rgba(167,139,250,0.35),transparent_65%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_80%,rgba(59,130,246,0.15),transparent_60%)]"
            />

            <div className="relative">
              <TechnicalServicesAuditGraphic />
            </div>

            <div className="relative mt-2 flex flex-1 flex-col">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-300 bg-stone-900/5 backdrop-blur-sm">
                  <Target className="h-5 w-5 text-violet-700" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-base font-bold leading-snug text-stone-900 sm:text-[17px]">
                    {sidebar.titleBefore}
                    <span className="lux-gold-text">
                      {sidebar.titleAccent}
                    </span>
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-stone-700">{sidebar.text}</p>
                </div>
              </div>

              <ul className="mt-5 grid grid-cols-1 gap-3 border-y border-stone-200 py-4 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-stone-200">
                {sidebar.features.map((feature) => {
                  const Icon = feature.icon as LucideIcon;
                  return (
                    <li
                      key={feature.label}
                      className="flex flex-col items-center px-1 text-center sm:px-2"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/40">
                        <Icon className="h-3.5 w-3.5 text-stone-900" strokeWidth={2} />
                      </span>
                      <span className="mt-2 text-[10px] font-medium leading-snug text-stone-700 sm:text-[11px]">
                        {feature.label}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-full items-center justify-between gap-2 rounded-full bg-white py-2.5 pl-2 pr-4 shadow-[0_8px_28px_rgba(0,0,0,0.2)] transition hover:bg-violet-50"
              >
                <span className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600">
                    <Sparkles className="h-4 w-4 text-stone-900" strokeWidth={2} />
                  </span>
                  <span className="text-sm font-bold text-violet-700">{sidebar.cta}</span>
                </span>
                <ArrowRight className="h-4 w-4 text-violet-700" strokeWidth={2.5} />
              </Link>

              <p className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-stone-500">
                <Lock className="h-3 w-3" strokeWidth={2} />
                {sidebar.footer}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

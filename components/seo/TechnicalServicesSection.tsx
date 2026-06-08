import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
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
  const { title, intro, items, sidebarTitle, sidebarText, sidebarCta } = technicalServices;

  return (
    <section id="technical-services" className={`${TECH_SECTION} bg-white`}>
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
                <article className="flex h-full min-h-[10.5rem] flex-col rounded-xl border border-slate-200/90 bg-white p-5 shadow-[0_2px_14px_rgba(15,23,42,0.05)]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-100">
                    <Icon className="h-[18px] w-[18px] text-violet-600" strokeWidth={2} />
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  <Link
                    href={HUBSPOT_MEETING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800"
                  >
                    Learn more <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* CTA — 1 col, spans 3 rows */}
        <Reveal delay={0.08} className="h-full lg:col-span-1">
          <div className="flex h-full flex-col rounded-2xl bg-gradient-to-br from-[#6366f1] via-[#7c3aed] to-[#5b21b6] px-6 py-7 text-white shadow-[0_10px_40px_rgba(109,40,217,0.4)] sm:px-7 sm:py-8">
            <TechnicalServicesAuditGraphic />

            <div className="mt-auto flex flex-1 flex-col justify-end">
              <h3 className="text-base font-bold leading-snug sm:text-[17px]">
                {sidebarTitle}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-white/90">
                {sidebarText}
              </p>

              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-violet-700 shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition hover:bg-violet-50"
              >
                {sidebarCta}
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

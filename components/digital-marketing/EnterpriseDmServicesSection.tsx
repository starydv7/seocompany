import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import Reveal from "@/components/Reveal";
import {
  EDM_BODY,
  EDM_SECTION,
  EDM_SECTION_PY,
  EDM_SECTION_TITLE,
} from "@/components/digital-marketing/enterprise-dm-styles";
import { enterpriseDmServices } from "@/lib/digital-marketing/enterprise-content";

export default function EnterpriseDmServicesSection() {
  const { title, intro, items } = enterpriseDmServices;

  return (
    <section id="enterprise-services" className={`${EDM_SECTION} bg-[#f8fafc] ${EDM_SECTION_PY}`}>
      <Reveal className="w-full text-center">
        <h2 className={EDM_SECTION_TITLE}>{title}</h2>
        <p className={`mt-3 ${EDM_BODY} text-slate-500`}>{intro}</p>
      </Reveal>

      <div className="mt-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
        {items.map((service, i) => {
          const Icon = service.icon as LucideIcon;
          return (
            <Reveal key={service.title} delay={i * 0.03} className="h-full">
              <article className="flex h-full items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_14px_rgba(15,23,42,0.04)] transition hover:shadow-[0_8px_28px_rgba(15,23,42,0.08)]">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: service.bg }}
                >
                  <Icon
                    className="h-5 w-5"
                    style={{ color: service.color }}
                    strokeWidth={2}
                  />
                </span>

                <div className="flex min-w-0 flex-1 flex-col">
                  <h3 className="text-sm font-bold leading-snug text-[#0f172a]">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                    {service.description}
                  </p>
                  <Link
                    href={HUBSPOT_MEETING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                  >
                    Explore {service.shortName}
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </Link>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

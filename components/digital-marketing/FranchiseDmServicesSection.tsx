import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  FDM_CARD,
  FDM_SECTION,
  FDM_SECTION_PY,
  FDM_SECTION_TITLE,
  FDM_TAG,
} from "@/components/digital-marketing/franchise-dm-styles";
import { franchiseDmServices } from "@/lib/digital-marketing/franchise-dm-content";

export default function FranchiseDmServicesSection() {
  const { tag, title, description, viewAllLabel, items } = franchiseDmServices;

  return (
    <section id="franchise-services" className={`${FDM_SECTION} ${FDM_SECTION_PY}`}>
      <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_2fr] lg:gap-14 xl:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className={FDM_TAG}>{tag}</p>
          <h2 className={`mt-5 ${FDM_SECTION_TITLE}`}>{title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            {description}
          </p>
          <Link
            href="#franchise-services"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 transition hover:text-violet-800"
          >
            {viewAllLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {items.map((item, i) => {
            const Icon = item.icon as LucideIcon;
            return (
              <Reveal key={item.title} delay={i * 0.04}>
                <Link
                  href={item.href}
                  className={`group flex h-full flex-col ${FDM_CARD} p-6`}
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 transition group-hover:bg-violet-100">
                      <Icon className="h-5 w-5 text-violet-600" strokeWidth={2} />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-slate-300 transition group-hover:text-violet-500" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

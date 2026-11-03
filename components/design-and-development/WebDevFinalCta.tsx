import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import { WDM_SECTION, WDM_SECTION_PY } from "@/components/design-and-development/web-dev-styles";
import { webDevFinalCta } from "@/lib/design-and-development/web-dev-content";

export default function WebDevFinalCta() {
  return (
    <section className={`${WDM_SECTION} ${WDM_SECTION_PY} bg-transparent pb-14 sm:pb-16`}>
      <div className="relative overflow-hidden rounded-2xl lux-banner p-6 sm:rounded-3xl sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-8 top-0 h-40 w-40 rounded-full bg-stone-900/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-32 w-32 rounded-full bg-indigo-400/15 blur-2xl" />

        <div className="relative grid items-center gap-6 lg:grid-cols-[1fr_auto] lg:gap-10">
          <div className="space-y-2 text-center lg:text-left">
            <h2 className="text-xl font-bold leading-tight tracking-tight text-stone-900 sm:text-2xl lg:text-[1.75rem]">
              {webDevFinalCta.title}
            </h2>
            <p className="text-sm leading-relaxed text-violet-700 sm:text-base">{webDevFinalCta.subtitle}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-end">
            <Link
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold lux-cta text-lux-ink"
            >
              {webDevFinalCta.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold lux-ghost text-stone-900"
            >
              {webDevFinalCta.ctaSecondary}
              <Calendar className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

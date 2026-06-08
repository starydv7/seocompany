import Link from "next/link";
import { ArrowRight, Check, TrendingUp } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { EDM_SECTION, EDM_SECTION_PY } from "@/components/digital-marketing/enterprise-dm-styles";
import { enterpriseDmFinalCta } from "@/lib/digital-marketing/enterprise-content";

function CtaChart({ badge }: { badge: string }) {
  return (
    <div
      className="pointer-events-none absolute bottom-8 right-8 hidden h-[130px] w-[180px] items-end justify-end gap-2 sm:flex"
      aria-hidden
    >
      <div className="absolute -top-1 right-0 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-violet-700 shadow-lg">
        <TrendingUp className="h-3 w-3" />
        {badge}
      </div>
      {[32, 44, 56, 72, 96].map((h, i) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          className="w-5 rounded-t-md bg-white/25"
          style={{ height: `${h}px` }}
        />
      ))}
    </div>
  );
}

export default function EnterpriseDmFinalCtaSection() {
  const { title, subtitle, checklist, primaryLabel, revenueBadge } = enterpriseDmFinalCta;

  return (
    <section className={`${EDM_SECTION} bg-white pb-20 pt-4 sm:pb-24`}>
      <Reveal>
        <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#7c3aed] via-[#6d28d9] to-[#4338ca] px-8 py-10 shadow-[0_16px_48px_rgba(109,40,217,0.35)] sm:px-12 sm:py-14 lg:px-16">
          <div className="relative z-10 w-full">
            <h2 className="text-2xl font-bold leading-[1.15] tracking-tight text-white sm:text-[2rem] lg:text-[2.25rem]">
              {title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-[15px]">
              {subtitle}
            </p>

            <ul className="mt-7 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/95">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-9 pr-0 sm:pr-48 lg:pr-56">
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-violet-700 shadow-[0_8px_28px_rgba(0,0,0,0.2)] transition hover:bg-violet-50"
              >
                {primaryLabel}
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
          <CtaChart badge={revenueBadge} />
        </div>
      </Reveal>
    </section>
  );
}

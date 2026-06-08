import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import Reveal from "@/components/Reveal";
import VisibilityRing from "@/components/seo/VisibilityRing";
import { FRANCHISE_SECTION } from "@/components/seo/franchise-seo-styles";
import { aiSeoVisibility } from "@/lib/seo/ai-seo-content";

export default function AiSeoVisibilitySection() {
  const { title, subtitle, cta, metrics } = aiSeoVisibility;

  return (
    <section className={FRANCHISE_SECTION}>
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl bg-[#05071a] p-[2%] shadow-[0_24px_60px_rgba(5,7,26,0.45)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(99,102,241,0.15) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl"
          />

          <div className="relative flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="min-w-0 shrink-0 lg:max-w-[22rem]">
              <h2 className="text-2xl font-bold text-white sm:text-[1.75rem]">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{subtitle}</p>
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/40 transition hover:opacity-95"
              >
                {cta}
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>

            <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
              {metrics.map((m, i) => (
                <VisibilityRing
                  key={m.label}
                  id={`ai-ring-${i}`}
                  value={m.value}
                  label={m.label}
                  color={m.color}
                  track={m.track}
                  size={92}
                />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

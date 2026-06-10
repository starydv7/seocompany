import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import { softwareDevFinalCta } from "@/lib/design-and-development/software-dev-content";

export default function SoftwareDevFinalCta() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#7c3aed] via-[#6d28d9] to-[#4338ca] p-[2%] sm:rounded-3xl sm:p-8 lg:p-10">
      <div className="pointer-events-none absolute -right-8 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-32 w-32 rounded-full bg-indigo-400/15 blur-2xl" />

      <div className="relative grid items-center gap-6 lg:grid-cols-[1.1fr,auto,0.85fr] lg:gap-8">
        {/* Text */}
        <div className="space-y-2 text-center lg:text-left">
          <h2 className="text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl lg:text-[1.75rem]">
            {softwareDevFinalCta.title}
          </h2>
          <p className="text-[12px] leading-relaxed text-violet-100 sm:text-sm">
            {softwareDevFinalCta.subtitle}
          </p>
        </div>

        {/* Button — centered in mockup */}
        <div className="flex justify-center">
          <Link
            href={HUBSPOT_MEETING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-violet-700 shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition hover:bg-violet-50"
          >
            {softwareDevFinalCta.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Isometric blocks */}
        <div className="relative mx-auto hidden h-36 w-full max-w-[14rem] lg:block" aria-hidden>
          <div className="absolute bottom-2 right-2 h-16 w-20 -rotate-6 rounded-lg bg-[#5b21b6]/60 shadow-lg" />
          <div className="absolute bottom-6 right-10 h-14 w-16 rotate-3 rounded-lg bg-[#6d28d9]/50 shadow-md" />
          <div className="absolute bottom-10 right-16 flex h-20 w-24 items-center justify-center rounded-xl border border-white/20 bg-[#1e1b4b]/70 shadow-2xl backdrop-blur-sm">
            <span className="font-mono text-xl font-bold text-violet-300">&lt;/&gt;</span>
          </div>
          <div className="absolute bottom-0 right-24 h-10 w-12 rotate-12 rounded-md bg-violet-400/40" />
        </div>
      </div>
    </div>
  );
}

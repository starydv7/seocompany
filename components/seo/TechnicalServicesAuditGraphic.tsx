import { Check, Shield } from "lucide-react";
import { technicalServices } from "@/lib/seo/technical-seo-content";

export default function TechnicalServicesAuditGraphic() {
  const { stats } = technicalServices.sidebar;

  return (
    <div className="relative mx-auto mb-5 w-full" aria-hidden>
      {/* Concentric rings */}
      <svg
        className="pointer-events-none absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 opacity-40"
        viewBox="0 0 200 200"
      >
        {[90, 72, 54].map((r) => (
          <circle
            key={r}
            cx="100"
            cy="100"
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="0.75"
            strokeDasharray="4 5"
          />
        ))}
      </svg>

      <div className="relative flex min-h-[10.5rem] items-center justify-center px-2 pt-2">
        {/* Main glass dashboard */}
        <div className="relative z-10 ml-4 h-[6.5rem] w-[10.5rem] rounded-xl border border-white/20 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-md sm:h-[7rem] sm:w-[11.5rem]">
          <div className="flex items-center gap-1 px-2.5 pt-2">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400/90" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300/90" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/90" />
          </div>

          <div className="mt-2 space-y-1.5 px-2.5">
            <div className="h-1 w-[68%] rounded-full bg-white/25" />
            <div className="h-1 w-[48%] rounded-full bg-white/18" />
          </div>

          {/* Mini chart box */}
          <div className="absolute bottom-2 right-2 rounded-md border border-white/15 bg-white/10 px-1.5 py-1 backdrop-blur-sm">
            <div className="flex items-end gap-0.5">
              {[5, 8, 6, 11].map((h, i) => (
                <div
                  key={i}
                  className="w-1 rounded-t-sm bg-violet-300/80"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
          </div>

          {/* Line graph */}
          <svg
            viewBox="0 0 120 32"
            className="absolute bottom-3 left-2 right-2 h-8 w-[calc(100%-1rem)]"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="audit-line-glow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#c4b5fd" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            <path
              d="M0 24 Q20 20 35 18 T70 12 T120 6"
              fill="none"
              stroke="url(#audit-line-glow)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Magnifying glass */}
        <div className="absolute left-0 top-1/2 z-20 -translate-y-1/2">
          <div className="absolute -inset-3 rounded-full bg-violet-400/25 blur-lg" />
          <svg width="52" height="52" viewBox="0 0 56 56" className="relative">
            <circle cx="24" cy="24" r="13" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="3.5" />
            <circle cx="24" cy="24" r="9" fill="rgba(255,255,255,0.12)" />
            <line
              x1="33"
              y1="33"
              x2="46"
              y2="46"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Issues found — left */}
        <div className="absolute bottom-1 left-0 z-30 rounded-xl border border-white/15 bg-[#0f0a2e]/60 px-2.5 py-2 shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-1.5">
            <Shield className="h-3.5 w-3.5 text-violet-300" strokeWidth={2} />
            <span className="text-[8px] font-medium leading-tight text-white/70">
              {stats.issues.label}
            </span>
          </div>
          <p className="mt-0.5 text-lg font-bold leading-none text-amber-400">{stats.issues.value}</p>
        </div>

        {/* SEO score — top right */}
        <div className="absolute right-0 top-0 z-30 flex items-center gap-1.5 rounded-full border border-white/15 bg-[#0f0a2e]/55 px-2.5 py-1.5 shadow-lg backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
          <span className="text-[9px] font-semibold text-emerald-300">
            {stats.score.label} {stats.score.value}
          </span>
        </div>

        {/* Pages analyzed — bottom right */}
        <div className="absolute bottom-0 right-0 z-30 rounded-xl border border-white/15 bg-[#0f0a2e]/60 px-2.5 py-2 shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-1.5">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/90">
              <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
            </span>
            <span className="text-[8px] font-medium leading-tight text-white/70">
              {stats.pages.label}
            </span>
          </div>
          <p className="mt-0.5 text-lg font-bold leading-none text-emerald-400">{stats.pages.value}</p>
        </div>
      </div>
    </div>
  );
}

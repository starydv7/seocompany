import { SITE_NAME } from "@/lib/site";

const PARTNERS = ["Stripe", "Slack", "Google", "Notion", "Airbnb"];

function MiniLineChart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 32" className={className} aria-hidden>
      <polyline
        points="0,26 14,20 28,22 42,12 56,16 70,10 80,14"
        fill="none"
        stroke="#7c3aed"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SpeedRing() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14 sm:h-16 sm:w-16" aria-hidden>
      <circle cx="32" cy="32" r="24" fill="none" stroke="#ede9fe" strokeWidth="5" />
      <circle
        cx="32"
        cy="32"
        r="24"
        fill="none"
        stroke="#10b981"
        strokeWidth="5"
        strokeDasharray="120 151"
        transform="rotate(-90 32 32)"
      />
      <text x="32" y="36" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
        98
      </text>
    </svg>
  );
}

export default function WebDevHeroBrowser() {
  return (
    <div className="relative w-full" aria-hidden>
      <div
        className="pointer-events-none absolute -right-6 top-8 h-40 w-40 rounded-full bg-violet-200/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-4 bottom-12 h-32 w-32 rounded-full bg-blue-200/35 blur-3xl"
        aria-hidden
      />

      <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(79,70,229,0.12)]">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>

        {/* Site header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-2.5 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-[9px] font-bold text-white">
              BM
            </span>
            <span className="text-[11px] font-bold text-slate-900 sm:text-xs">{SITE_NAME}</span>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            {["Home", "About", "Services", "Portfolio", "Blog"].map((link) => (
              <span key={link} className="text-[10px] text-slate-500">
                {link}
              </span>
            ))}
          </div>
          <span className="rounded-md bg-[#7c3aed] px-2.5 py-1 text-[9px] font-semibold text-white sm:text-[10px]">
            Get in Touch
          </span>
        </div>

        {/* Main mockup body */}
        <div className="grid gap-4 p-4 sm:grid-cols-[1fr,1.05fr] sm:gap-5 sm:p-5">
          {/* Left — mini hero */}
          <div className="flex flex-col justify-center">
            <h3 className="text-sm font-bold leading-snug text-slate-900 sm:text-base">
              We Create Digital Experiences That{" "}
              <span className="text-[#7c3aed]">Drive Results</span>
            </h3>
            <p className="mt-1.5 text-[10px] leading-relaxed text-slate-500 sm:text-[11px]">
              Beautiful design. Fast performance. Scalable solutions.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-[#7c3aed] px-2.5 py-1 text-[9px] font-semibold text-white sm:text-[10px]">
                Explore Services &gt;
              </span>
              <span className="flex items-center gap-1 text-[9px] font-medium text-slate-600 sm:text-[10px]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-200 bg-white text-[8px]">
                  ▶
                </span>
                Watch Video
              </span>
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
            <div className="col-span-2 rounded-xl border border-slate-100 bg-white p-3 shadow-[0_4px_16px_rgba(15,23,42,0.06)]">
              <p className="text-[9px] font-medium text-slate-500 sm:text-[10px]">Total Visitors</p>
              <div className="mt-0.5 flex items-baseline justify-between gap-2">
                <p className="text-lg font-bold text-slate-900 sm:text-xl">24,580</p>
                <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-600">
                  + 18.6%
                </span>
              </div>
              <MiniLineChart className="mt-1 h-8 w-full" />
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-[0_4px_16px_rgba(15,23,42,0.06)]">
              <p className="text-[9px] font-medium text-slate-500 sm:text-[10px]">Page Speed</p>
              <p className="text-[9px] font-semibold text-emerald-600">Excellent</p>
              <div className="mt-1 flex items-center justify-between">
                <SpeedRing />
                <p className="text-[10px] text-slate-500">
                  98<span className="text-slate-400">/100</span>
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-[0_4px_16px_rgba(15,23,42,0.06)]">
              <p className="text-[9px] font-medium text-slate-500 sm:text-[10px]">Conversion Rate</p>
              <div className="mt-0.5 flex items-baseline justify-between gap-1">
                <p className="text-base font-bold text-slate-900 sm:text-lg">3.68%</p>
                <span className="text-[9px] font-semibold text-emerald-600">+ 12.4%</span>
              </div>
              <MiniLineChart className="mt-1 h-7 w-full" />
            </div>
          </div>
        </div>

        {/* Partner logos */}
        <div className="flex flex-wrap items-center justify-center gap-4 border-t border-slate-100 px-4 py-3 sm:gap-6 sm:px-5">
          {PARTNERS.map((name) => (
            <span key={name} className="text-[10px] font-semibold text-slate-400 sm:text-[11px]">
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

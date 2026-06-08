/** Overlapping SEO dashboard cards — matches enterprise industries reference */
export default function FranchiseSeoDashboard() {
  return (
    <div
      className="relative mx-auto h-[15rem] w-full max-w-[16.5rem] shrink-0 sm:h-[16rem] sm:max-w-[17.5rem] lg:mx-0"
      aria-hidden
    >
      {/* Main: SEO Performance */}
      <div className="absolute left-0 top-0 z-0 w-[11.5rem] overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-lg sm:w-[12.5rem]">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 px-2.5 py-1.5">
          <p className="text-[9px] font-bold text-white sm:text-[10px]">SEO Performance</p>
        </div>
        <div className="space-y-2 p-2 sm:p-2.5">
          <div>
            <p className="text-[8px] font-medium text-slate-500">Organic Sessions</p>
            <div className="mt-0.5 flex items-baseline gap-1.5">
              <span className="text-xs font-bold text-slate-900">78,540</span>
              <span className="text-[9px] font-semibold text-emerald-600">+34.6%</span>
            </div>
            <svg viewBox="0 0 120 32" className="mt-1 h-7 w-full">
              <path
                d="M0 28 L20 22 L40 24 L60 14 L80 18 L100 8 L120 4"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="2"
              />
              <path
                d="M0 28 L20 22 L40 24 L60 14 L80 18 L100 8 L120 4 L120 32 L0 32 Z"
                fill="url(#dash-line-fill)"
                opacity="0.15"
              />
              <defs>
                <linearGradient id="dash-line-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <p className="text-[8px] font-medium text-slate-500">Keyword Rankings</p>
            <div className="mt-1 flex items-center gap-2">
              <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0">
                <circle cx="18" cy="18" r="14" fill="#e0e7ff" />
                <path d="M18 18 L18 4 A14 14 0 0 1 32 18 Z" fill="#6366f1" />
                <path d="M18 18 L32 18 A14 14 0 0 1 18 32 Z" fill="#8b5cf6" />
                <path d="M18 18 L18 32 A14 14 0 0 1 4 18 Z" fill="#a5b4fc" />
              </svg>
              <ul className="space-y-0.5 text-[7px] text-slate-600">
                <li className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                  Top 3
                </li>
                <li className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                  Top 10
                </li>
                <li className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-300" />
                  Top 50
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Traffic Growth */}
      <div className="absolute bottom-2 left-1 z-[2] w-[6.75rem] rounded-lg border border-slate-200/90 bg-white p-2 shadow-xl sm:w-[7.25rem]">
        <p className="text-[8px] font-bold text-slate-800">Traffic Growth</p>
        <p className="mt-0.5 text-[10px] font-bold text-violet-600">+275%</p>
        <p className="text-[7px] text-slate-400">vs last 6 months</p>
        <div className="mt-1.5 flex h-10 items-end justify-between gap-0.5">
          {["J", "F", "M", "A", "M", "J"].map((m, i) => (
            <div key={m + i} className="flex flex-col items-center gap-0.5">
              <span
                className="w-1.5 rounded-sm bg-violet-500"
                style={{ height: `${8 + i * 3}px` }}
              />
              <span className="text-[6px] text-slate-400">{m}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Conversions */}
      <div className="absolute bottom-6 left-[5.5rem] z-[3] w-[6.25rem] rounded-lg border border-slate-200/90 bg-white p-2 shadow-xl sm:left-[6rem] sm:w-[6.75rem]">
        <p className="text-[8px] font-bold text-slate-800">Conversions</p>
        <p className="text-xs font-bold text-slate-900">2,340</p>
        <p className="text-[8px] font-semibold text-emerald-600">+42.8%</p>
        <svg viewBox="0 0 80 24" className="mt-1 h-5 w-full">
          <path
            d="M0 20 Q20 16 40 12 T80 4"
            fill="none"
            stroke="#7c3aed"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Top Keywords */}
      <div className="absolute right-0 top-8 z-[4] w-[7.5rem] rounded-lg border border-slate-200/90 bg-white p-2 shadow-2xl sm:w-32">
        <p className="text-[8px] font-bold text-slate-800">Top Keywords</p>
        <ul className="mt-1.5 space-y-1">
          {[
            "SaaS Platform",
            "Project Tool",
            "CRM Software",
            "Cloud Suite",
            "Team Hub",
          ].map((kw, i) => (
            <li key={kw} className="flex items-center gap-1">
              <span className="w-2 text-[6px] font-medium text-slate-400">{i + 1}</span>
              <span className="min-w-0 flex-1 truncate text-[7px] font-medium text-slate-700">{kw}</span>
              <svg viewBox="0 0 24 10" className="h-2 w-6 shrink-0">
                <path
                  d={`M0 8 L6 ${6 - i} L12 ${4 + i % 2} L18 ${2 + i} L24 1`}
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="1"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function GrowthChart() {
  const linePoints = "0,72 28,58 56,64 84,38 112,44 140,28 168,32 196,18 224,24 252,12";
  const fillPoints = `${linePoints} 252,90 0,90`;

  return (
    <svg viewBox="0 0 252 90" className="h-full w-full" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="web-dev-growth-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </linearGradient>
        <filter id="web-dev-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <polygon points={fillPoints} fill="url(#web-dev-growth-fill)" />
      <polyline
        points={linePoints}
        fill="none"
        stroke="#a78bfa"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#web-dev-glow)"
      />
      <polyline
        points={linePoints}
        fill="none"
        stroke="#7c3aed"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LaptopScreen() {
  return (
    <div className="relative flex aspect-[16/10] w-full flex-col overflow-hidden bg-[#0a0f1e]">
      {/* macOS traffic lights */}
      <div className="flex shrink-0 items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57] sm:h-2.5 sm:w-2.5" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e] sm:h-2.5 sm:w-2.5" />
        <span className="h-2 w-2 rounded-full bg-[#28c840] sm:h-2.5 sm:w-2.5" />
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-4 pb-4 pt-1 sm:px-5 sm:pb-5">
        <p className="text-[10px] font-semibold text-violet-400 sm:text-xs">AuraStudio</p>
        <h3 className="mt-1.5 max-w-[14rem] text-sm font-bold leading-snug tracking-tight text-white sm:mt-2 sm:max-w-none sm:text-base lg:text-lg">
          Digital Solutions That Drive Growth
        </h3>

        <div className="mt-3 flex min-h-0 flex-1 flex-col rounded-xl border border-slate-700/60 bg-[#111827]/90 p-3 sm:mt-4 sm:p-4">
          <p className="shrink-0 text-[9px] font-medium text-slate-400 sm:text-[10px]">Growth Overview</p>
          <div className="mt-2 min-h-[5rem] flex-1 sm:min-h-[6.5rem] lg:min-h-[7.5rem]">
            <GrowthChart />
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneScreen() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[1.1rem] bg-[#0a0f1e] p-2.5 sm:p-3">
      <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-slate-700" />
      <p className="text-[7px] font-semibold text-violet-400 sm:text-[8px]">AuraStudio</p>
      <p className="mt-1 text-[9px] font-bold leading-tight text-white sm:text-[10px]">Drive Growth</p>
      <div className="mt-2.5 h-9 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 sm:mt-3 sm:h-10" />
      <div className="mt-2 grid flex-1 grid-cols-2 gap-1.5">
        <div className="rounded-md bg-slate-800/90" />
        <div className="rounded-md bg-slate-800/90" />
      </div>
    </div>
  );
}

export default function WebDevDeviceMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-[28rem]">
      {/* Laptop */}
      <div className="relative z-10">
        {/* Lid / screen bezel */}
        <div className="rounded-t-[1.1rem] border border-slate-300/90 bg-gradient-to-b from-slate-200 to-slate-300 p-2 shadow-[0_24px_60px_rgba(15,23,42,0.18)] sm:rounded-t-[1.25rem] sm:p-2.5">
          <div className="overflow-hidden rounded-t-lg border border-slate-900/80 shadow-inner">
            <LaptopScreen />
          </div>
        </div>

        {/* Hinge */}
        <div className="h-1.5 bg-gradient-to-b from-slate-400 to-slate-500 sm:h-2" />

        {/* Keyboard base */}
        <div className="relative mx-auto w-[104%] -translate-x-[2%] rounded-b-xl border border-slate-300/80 bg-gradient-to-b from-slate-300 via-slate-200 to-slate-300 px-4 pb-3 pt-2 shadow-[0_12px_32px_rgba(15,23,42,0.12)] sm:rounded-b-2xl sm:pb-4">
          <div className="mx-auto h-1 w-[55%] rounded-full bg-slate-400/50" />
          <div className="mt-2 grid grid-cols-12 gap-0.5 opacity-40">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="h-1 rounded-sm bg-slate-500/60 sm:h-1.5" />
            ))}
          </div>
        </div>
      </div>

      {/* Phone — overlaps laptop bottom-right */}
      <div className="absolute -bottom-2 right-[-4%] z-20 w-[28%] min-w-[4.5rem] max-w-[5.75rem] sm:-bottom-3 sm:right-[-2%] sm:max-w-[6.5rem]">
        <div className="rounded-[1.35rem] border-[3px] border-slate-800 bg-slate-900 p-0.5 shadow-[0_16px_40px_rgba(15,23,42,0.35)] sm:border-4">
          <div className="aspect-[9/16] w-full">
            <PhoneScreen />
          </div>
        </div>
      </div>
    </div>
  );
}

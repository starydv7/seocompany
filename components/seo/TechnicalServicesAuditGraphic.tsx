/** Browser + magnifying glass — services CTA card top graphic */
export default function TechnicalServicesAuditGraphic() {
  return (
    <div className="relative mx-auto mb-6 flex h-[7.5rem] w-full max-w-[11rem] items-center justify-center" aria-hidden>
      {/* Browser window */}
      <div className="relative z-10 ml-6 h-[5.5rem] w-[8.5rem] rounded-xl border border-white/25 bg-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-sm">
        {/* macOS dots */}
        <div className="flex items-center gap-1 px-2.5 pt-2">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-400/90" />
          <span className="h-1.5 w-1.5 rounded-full bg-amber-300/90" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/90" />
        </div>
        {/* Dashboard lines */}
        <div className="mt-2 space-y-1.5 px-2.5">
          <div className="h-1 w-[70%] rounded-full bg-white/30" />
          <div className="h-1 w-[55%] rounded-full bg-white/20" />
          <div className="h-1 w-[80%] rounded-full bg-white/25" />
        </div>
        {/* Mini bar chart bottom-right */}
        <div className="absolute bottom-2 right-2 flex items-end gap-0.5">
          {[6, 10, 8, 14].map((h, i) => (
            <div
              key={i}
              className="w-1.5 rounded-t-sm bg-violet-300/70"
              style={{ height: `${h}px` }}
            />
          ))}
        </div>
      </div>

      {/* Magnifying glass — overlaps left */}
      <div className="absolute left-0 top-1/2 z-20 -translate-y-1/2">
        <div className="relative">
          <div className="absolute -inset-2 rounded-full bg-violet-400/20 blur-md" />
          <svg width="56" height="56" viewBox="0 0 56 56" className="relative">
            <circle
              cx="24"
              cy="24"
              r="14"
              fill="none"
              stroke="#c4b5fd"
              strokeWidth="4"
            />
            <circle cx="24" cy="24" r="10" fill="rgba(255,255,255,0.08)" />
            <line
              x1="34"
              y1="34"
              x2="48"
              y2="48"
              stroke="#a78bfa"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

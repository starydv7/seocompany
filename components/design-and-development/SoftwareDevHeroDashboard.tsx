import type { LucideIcon } from "lucide-react";
import { softwareDevHero } from "@/lib/design-and-development/software-dev-content";

const CODE_BARS: { width: string; color: string }[][] = [
  [{ width: "42%", color: "#f472b6" }, { width: "28%", color: "#a78bfa" }],
  [{ width: "22%", color: "#a78bfa" }, { width: "35%", color: "#60a5fa" }],
  [{ width: "18%", color: "#a78bfa" }],
  [{ width: "30%", color: "#fb923c" }, { width: "24%", color: "#f472b6" }],
  [{ width: "38%", color: "#a78bfa" }, { width: "20%", color: "#4ade80" }],
  [{ width: "16%", color: "#a78bfa" }],
  [{ width: "28%", color: "#60a5fa" }, { width: "32%", color: "#f472b6" }],
  [{ width: "24%", color: "#a78bfa" }, { width: "18%", color: "#fb923c" }],
  [{ width: "40%", color: "#4ade80" }],
  [{ width: "20%", color: "#a78bfa" }, { width: "30%", color: "#60a5fa" }],
  [{ width: "26%", color: "#f472b6" }],
  [{ width: "34%", color: "#a78bfa" }, { width: "22%", color: "#fb923c" }],
  [{ width: "18%", color: "#60a5fa" }],
  [{ width: "36%", color: "#a78bfa" }, { width: "24%", color: "#4ade80" }],
  [{ width: "28%", color: "#f472b6" }, { width: "16%", color: "#a78bfa" }],
  [{ width: "32%", color: "#60a5fa" }],
];

const STACK_ICON_STYLES = [
  "bg-violet-50 text-violet-600",
  "bg-violet-50 text-violet-600",
  "bg-sky-50 text-sky-600",
  "bg-emerald-50 text-emerald-600",
  "bg-indigo-50 text-indigo-600",
];

function StackCard({
  label,
  icon: Icon,
  iconClass,
}: {
  label: string;
  icon: LucideIcon;
  iconClass: string;
}) {
  return (
    <div className="flex w-full items-center gap-2 rounded-xl border border-violet-100 bg-white px-2.5 py-2 shadow-[0_2px_12px_rgba(99,102,241,0.08)] sm:gap-3 sm:px-3 sm:py-2.5">
      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${iconClass}`}>
        <Icon className="h-4 w-4" strokeWidth={2} />
      </span>
      <span className="text-[11px] font-semibold text-slate-800 sm:text-xs">{label}</span>
    </div>
  );
}

export default function SoftwareDevHeroDashboard() {
  const { stack } = softwareDevHero;

  return (
    <div className="w-full" aria-hidden>
      <div className="flex items-stretch gap-4 sm:gap-5 lg:gap-6">
        {/* Stack — left column, NO overlap with editor */}
        <div className="relative w-[7.25rem] shrink-0 sm:w-[8rem]">
          <div
            className="pointer-events-none absolute left-[1.15rem] top-3 bottom-3 border-l-2 border-dashed border-violet-300/80 sm:left-[1.3rem]"
            aria-hidden
          />
          <div className="relative flex h-full flex-col justify-center gap-2.5 sm:gap-3">
            {stack.map((item, i) => {
              const Icon = item.icon as LucideIcon;
              return (
                <StackCard
                  key={item.label}
                  label={item.label}
                  icon={Icon}
                  iconClass={STACK_ICON_STYLES[i] ?? STACK_ICON_STYLES[0]}
                />
              );
            })}
          </div>
        </div>

        {/* Editor — tall, full height, gap separated */}
        <div className="relative min-h-[20rem] min-w-0 flex-1 sm:min-h-[22rem] lg:min-h-[24rem]">
          <div
            className="pointer-events-none absolute -right-2 top-2 h-[40%] w-[45%] opacity-45"
            style={{
              backgroundImage: "radial-gradient(circle, #c4b5fd 1.2px, transparent 1.2px)",
              backgroundSize: "11px 11px",
            }}
          />
          <div
            className="pointer-events-none absolute right-[10%] top-[45%] h-[30%] w-[35%] opacity-35"
            style={{
              backgroundImage: "radial-gradient(circle, #c4b5fd 1.2px, transparent 1.2px)",
              backgroundSize: "11px 11px",
            }}
          />

          <div className="relative z-10 flex h-full min-h-[inherit] flex-col overflow-hidden rounded-2xl bg-[#0b0a18] shadow-[0_28px_60px_rgba(79,70,229,0.25)]">
            <div className="flex items-center gap-1.5 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex flex-1 gap-4 px-4 pb-5 sm:gap-5 sm:px-5 sm:pb-6">
              <div className="space-y-[7px] font-mono text-[9px] leading-none text-slate-600 sm:space-y-2 sm:text-[10px]">
                {CODE_BARS.map((_, i) => (
                  <p key={i} className="h-[7px] sm:h-2">
                    {i + 1}
                  </p>
                ))}
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center space-y-[7px] sm:space-y-2">
                {CODE_BARS.map((segments, row) => (
                  <div key={row} className="flex h-[7px] items-center gap-1.5 sm:h-2">
                    {segments.map((seg, j) => (
                      <div
                        key={j}
                        className="h-full rounded-[2px]"
                        style={{ width: seg.width, backgroundColor: seg.color, opacity: 0.92 }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floats — only on editor right edge */}
          <div className="absolute -right-2 -top-2 z-30 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#6d28d9] to-[#4f46e5] shadow-lg">
            <span className="font-mono text-xs font-bold text-white">&lt;/&gt;</span>
          </div>
          <div className="absolute -right-5 top-[34%] z-30 w-[6.5rem] rounded-xl border border-slate-100 bg-white p-2.5 shadow-[0_12px_32px_rgba(15,23,42,0.14)]">
            <svg viewBox="0 0 88 48" className="h-11 w-full">
              <polyline points="4,36 18,28 32,32 46,18 60,24 74,14 84,20" fill="none" stroke="#7c3aed" strokeWidth="2" />
              <polyline points="4,40 20,34 36,36 52,26 68,30 84,22" fill="none" stroke="#38bdf8" strokeWidth="1.5" opacity="0.85" />
            </svg>
          </div>
          <div className="absolute -bottom-3 -right-4 z-30 flex items-center gap-2.5 rounded-xl border border-slate-100 bg-white p-3 shadow-[0_12px_32px_rgba(15,23,42,0.14)]">
            <svg viewBox="0 0 52 52" className="h-12 w-12 shrink-0">
              <circle cx="26" cy="26" r="18" fill="none" stroke="#f3f4f6" strokeWidth="6" />
              <circle cx="26" cy="26" r="18" fill="none" stroke="#7c3aed" strokeWidth="6" strokeDasharray="58 113" transform="rotate(-90 26 26)" />
              <circle cx="26" cy="26" r="18" fill="none" stroke="#6366f1" strokeWidth="6" strokeDasharray="28 143" strokeDashoffset="-58" transform="rotate(-90 26 26)" />
            </svg>
            <div className="space-y-1.5">
              <div className="h-1.5 w-12 rounded-full bg-slate-200" />
              <div className="h-1.5 w-10 rounded-full bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ChevronRight, Rocket } from "lucide-react";
import { softwareDevProcess, type ServiceGraphicType } from "@/lib/design-and-development/software-dev-content";

const ROOT = "relative h-[16rem] w-full sm:h-[18rem] lg:h-[20rem]";

function ScoreRing({ score, label, color }: { score: number; label: string; color: string }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-white p-2 shadow-[0_8px_24px_rgba(15,23,42,0.1)]">
      <svg viewBox="0 0 56 56" className="mx-auto h-12 w-12 sm:h-14 sm:w-14">
        <circle cx="28" cy="28" r="22" fill="none" stroke="#ecfdf5" strokeWidth="5" />
        <circle
          cx="28"
          cy="28"
          r="22"
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeDasharray={`${(score / 100) * 138} 138`}
          transform="rotate(-90 28 28)"
        />
        <text x="28" y="32" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>
          {score}
        </text>
      </svg>
      <p className="mt-0.5 text-center text-[9px] font-semibold text-slate-500 sm:text-[10px]">{label}</p>
    </div>
  );
}

function WebGraphic() {
  return (
    <div className={ROOT} aria-hidden>
      {/* Main browser window — back layer, right */}
      <div className="absolute right-0 top-1 z-[5] w-[78%] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.12)]">
        <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-rose-400" />
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="ml-2 h-2 w-16 rounded bg-slate-200" />
        </div>
        <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 py-6 sm:px-5 sm:py-7">
          <p className="text-xs font-bold leading-snug text-slate-900 sm:text-sm">
            Build Your Business Online
          </p>
          <button
            type="button"
            className="mt-3 rounded-md bg-blue-600 px-3.5 py-1.5 text-[10px] font-semibold text-white shadow-sm sm:text-[11px]"
          >
            Get Started
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 border-t border-slate-100 bg-white p-2.5">
          <div className="h-9 rounded-lg bg-slate-100" />
          <div className="h-9 rounded-lg bg-blue-50" />
          <div className="h-9 rounded-lg bg-violet-50" />
        </div>
      </div>

      {/* Performance score — floats left, overlaps browser */}
      <div className="absolute left-0 top-6 z-20">
        <ScoreRing score={98} label="Performance Score" color="#10b981" />
      </div>

      {/* Dark analytics chart — middle layer */}
      <div className="absolute bottom-[26%] left-[6%] z-[15] w-[62%] overflow-hidden rounded-lg bg-[#0f172a] px-3 py-2.5 shadow-[0_10px_28px_rgba(15,23,42,0.25)]">
        <svg viewBox="0 0 120 40" className="h-10 w-full sm:h-11">
          <polyline
            points="0,32 20,26 40,28 60,16 80,20 100,10 120,14"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Analytics overview — front layer, bottom right */}
      <div className="absolute bottom-0 right-0 z-20 min-w-[7rem] rounded-xl border border-slate-100 bg-white p-3 shadow-[0_12px_32px_rgba(15,23,42,0.14)] sm:min-w-[7.5rem]">
        <p className="text-[10px] font-medium text-slate-500">Analytics Overview</p>
        <p className="text-lg font-bold leading-tight text-slate-900">24.8K</p>
        <svg viewBox="0 0 72 24" className="mt-1 h-5 w-full">
          <polyline
            points="0,18 12,14 24,16 36,10 48,12 60,8 72,10"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

function PhoneShell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[16px] border-[2.5px] border-slate-800 bg-slate-900 shadow-[0_12px_32px_rgba(15,23,42,0.2)] ${className ?? ""}`}>
      <div className="mx-auto mt-1 h-0.5 w-8 rounded-full bg-slate-600" />
      <div className="bg-white">{children}</div>
    </div>
  );
}

function MobileGraphic() {
  return (
    <div className={ROOT} aria-hidden>
      {/* Main phone — dark dashboard, tilted right */}
      <PhoneShell className="absolute right-0 top-0 z-10 w-[50%] rotate-[5deg] sm:w-[48%]">
        <div className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] p-3 sm:p-3.5">
          <p className="text-[9px] text-slate-400 sm:text-[10px]">Total Revenue</p>
          <p className="text-base font-bold leading-tight text-white sm:text-lg">$24,568.00</p>
          <svg viewBox="0 0 100 36" className="my-2 h-10 w-full sm:h-11">
            <polyline
              points="0,30 18,24 36,26 54,14 72,18 90,10 100,12"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <div className="grid grid-cols-4 gap-1 border-t border-white/10 pt-2">
            {["Home", "Orders", "Stats", "Profile"].map((tab) => (
              <div key={tab} className="text-center">
                <div className="mx-auto mb-0.5 h-4 w-4 rounded-md bg-blue-500/30" />
                <span className="text-[6px] text-slate-500 sm:text-[7px]">{tab}</span>
              </div>
            ))}
          </div>
        </div>
      </PhoneShell>

      {/* Bar chart card — floats left, tilted */}
      <div className="absolute left-0 top-8 z-20 w-[44%] -rotate-[5deg] rounded-xl border border-slate-100 bg-white p-3 shadow-[0_12px_32px_rgba(15,23,42,0.14)] sm:top-10">
        <div className="flex h-14 items-end gap-1 sm:h-16">
          {[45, 70, 55, 85, 60].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-blue-500" style={{ height: `${h}%` }} />
          ))}
        </div>
        <svg viewBox="0 0 80 20" className="mt-1.5 h-4 w-full">
          <polyline points="0,14 20,10 40,12 60,6 80,8" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
        </svg>
        <p className="mt-1 text-[11px] font-bold text-emerald-600 sm:text-xs">+18.3%</p>
      </div>

      {/* Stat card — bottom center */}
      <div className="absolute bottom-2 left-[18%] z-30 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-[0_10px_28px_rgba(15,23,42,0.12)] sm:bottom-4">
        <p className="text-sm font-bold text-slate-900">8,450</p>
        <p className="text-[11px] font-semibold text-emerald-600 sm:text-xs">+12.4%</p>
      </div>
    </div>
  );
}

function FrontendGraphic() {
  const codeLines = [
    { parts: [{ t: "const ", c: "text-violet-400" }, { t: "Hero", c: "text-pink-400" }, { t: " = () => {", c: "text-violet-400" }] },
    { parts: [{ t: "  return (", c: "text-sky-400" }] },
    { parts: [{ t: "    <section>", c: "text-amber-300" }] },
    { parts: [{ t: "      <h1 />", c: "text-emerald-400" }] },
    { parts: [{ t: "    </section>", c: "text-amber-300" }] },
    { parts: [{ t: "  );", c: "text-sky-400" }] },
    { parts: [{ t: "};", c: "text-violet-400" }] },
  ];

  return (
    <div className={`${ROOT} flex items-stretch gap-3 sm:gap-4`} aria-hidden>
      {/* Code editor — left */}
      <div className="relative flex min-w-0 flex-1 flex-col overflow-hidden rounded-xl bg-[#0b0a18] shadow-[0_12px_32px_rgba(15,23,42,0.2)]">
        <div className="flex items-center gap-1 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex flex-1 flex-col justify-center px-3 pb-4 font-mono text-[8px] leading-relaxed sm:text-[9px]">
          {codeLines.map((line, i) => (
            <p key={i}>
              {line.parts.map((p, j) => (
                <span key={j} className={p.c}>{p.t}</span>
              ))}
            </p>
          ))}
        </div>
        <div className="absolute -bottom-2 -right-2 z-10 scale-[0.75] sm:scale-90">
          <ScoreRing score={98} label="Lighthouse" color="#10b981" />
        </div>
      </div>

      {/* Dashboard — right, gap separated */}
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
        <div className="flex items-center gap-1 border-b border-slate-100 bg-slate-50 px-2.5 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex flex-1 gap-2 p-2.5">
          <div className="w-6 shrink-0 space-y-1 rounded bg-slate-100 p-1">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="h-1.5 rounded bg-slate-200" />
            ))}
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <div className="grid grid-cols-3 gap-1.5">
              <div className="h-8 rounded-lg bg-blue-50" />
              <div className="h-8 rounded-lg bg-violet-50" />
              <div className="h-8 rounded-lg bg-emerald-50" />
            </div>
            <div className="flex flex-1 items-end gap-1">
              {[45, 70, 55, 85, 60, 75, 50].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-blue-500/80" style={{ height: `${h}%` }} />
              ))}
            </div>
            <svg viewBox="0 0 100 32" className="h-8 w-full">
              <polyline points="0,24 16,18 32,20 48,10 64,14 80,8 100,12" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackendGraphic() {
  return (
    <div className={`${ROOT} flex items-stretch gap-3 sm:gap-4`} aria-hidden>
      <div className="flex min-w-0 flex-1 flex-col items-center justify-center rounded-xl bg-[#0b0a18] p-3 shadow-[0_8px_24px_rgba(15,23,42,0.18)]">
        <div className="w-full rounded-lg border border-slate-600 bg-slate-800 px-2 py-1.5 text-center text-[8px] font-semibold text-white sm:text-[9px]">Frontend</div>
        <div className="my-1.5 h-5 w-px border-l border-dashed border-slate-500" />
        <div className="w-full rounded-lg bg-orange-600 px-2 py-1.5 text-center text-[8px] font-semibold text-white sm:text-[9px]">API Gateway</div>
        <div className="my-1.5 flex w-full gap-1.5">
          {["Auth", "User", "Data"].map((s) => (
            <div key={s} className="flex-1 rounded border border-slate-600 bg-slate-800 py-1 text-center text-[7px] text-slate-300 sm:text-[8px]">{s}</div>
          ))}
        </div>
        <div className="my-1.5 h-5 w-px border-l border-dashed border-slate-500" />
        <div className="w-full rounded-lg border border-slate-600 bg-slate-800 px-2 py-1.5 text-center text-[8px] font-semibold text-white sm:text-[9px]">Database</div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex flex-1 flex-col justify-center rounded-xl bg-[#1e293b] p-3 font-mono text-[8px] leading-relaxed shadow-[0_8px_24px_rgba(15,23,42,0.18)] sm:text-[9px]">
          <p className="text-[9px] font-semibold text-slate-400 sm:text-[10px]">Response</p>
          <p className="text-emerald-400">GET /api/users</p>
          <p className="text-sky-400">200 OK</p>
          <p className="mt-1 text-slate-500">{"{"}</p>
          <p className="pl-2 text-violet-300">&quot;users&quot;: 1240,</p>
          <p className="pl-2 text-violet-300">&quot;status&quot;: &quot;success&quot;</p>
          <p className="text-slate-500">{"}"}</p>
        </div>
        <div className="flex items-center justify-center gap-1.5 self-center rounded-full border border-emerald-200 bg-white px-3 py-1 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-[9px] font-semibold text-slate-700 sm:text-[10px]">Server Healthy</span>
        </div>
      </div>
    </div>
  );
}

function UiuxGraphic() {
  return (
    <div className={ROOT} aria-hidden>
      <div className="flex h-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
        <div className="flex w-8 shrink-0 flex-col gap-1 border-r border-slate-200 bg-white p-1.5">
          {["↖", "✎", "T", "□", "○"].map((t) => (
            <div key={t} className="flex h-5 w-5 items-center justify-center rounded bg-slate-50 text-[8px] text-slate-500">{t}</div>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-center gap-2 p-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-[28%] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <div className={`h-10 ${i === 1 ? "bg-pink-100" : "bg-violet-50"}`} />
              <div className="space-y-1 p-1.5">
                <div className="h-1 rounded bg-slate-200" />
                <div className="h-1 w-3/4 rounded bg-slate-100" />
                <div className="h-1 w-1/2 rounded bg-slate-100" />
              </div>
            </div>
          ))}
        </div>
        <div className="w-[22%] shrink-0 border-l border-slate-200 bg-white p-2">
          <p className="text-[7px] font-semibold text-slate-600">Properties</p>
          <div className="mt-2 space-y-1.5">
            <div className="h-1.5 rounded bg-slate-200" />
            <div className="h-1.5 w-3/4 rounded bg-slate-100" />
            <div className="h-1.5 rounded bg-slate-200" />
          </div>
          <div className="mt-3 flex gap-0.5">
            {["A", "B", "C"].map((l) => (
              <div key={l} className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-pink-300 to-violet-400 text-[6px] font-bold text-white">{l}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductGraphic() {
  const phases = [
    { name: "Plan", color: "bg-violet-500", w: "85%" },
    { name: "Design", color: "bg-indigo-500", w: "70%" },
    { name: "Develop", color: "bg-blue-500", w: "55%" },
    { name: "Test", color: "bg-sky-500", w: "40%" },
    { name: "Launch", color: "bg-emerald-500", w: "25%" },
  ];
  return (
    <div className={`${ROOT} flex flex-col justify-center`} aria-hidden>
      <p className="mb-3 text-[10px] font-bold text-slate-700 sm:text-xs">Product Roadmap</p>
      <div className="space-y-2.5">
        {phases.map((p, i) => (
          <div key={p.name} className="flex items-center gap-2">
            <span className="w-14 shrink-0 text-[9px] font-semibold text-slate-600 sm:text-[10px]">{p.name}</span>
            <div className="h-2 flex-1 rounded-full bg-slate-100">
              <div className={`h-full rounded-full ${p.color}`} style={{ width: p.w }} />
            </div>
            <span className="text-[8px] font-bold text-slate-400">{i + 1}</span>
          </div>
        ))}
      </div>
      <div className="absolute right-4 top-4">
        <Rocket className="h-8 w-8 text-violet-400" strokeWidth={1.5} />
      </div>
    </div>
  );
}

function BusinessGraphic() {
  const metrics = [
    { label: "Revenue", value: "$78,250" },
    { label: "Orders", value: "1,458" },
    { label: "Customers", value: "2,350" },
  ];
  return (
    <div className={ROOT} aria-hidden>
      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-[0_8px_24px_rgba(15,23,42,0.08)] sm:p-4">
        <p className="text-[10px] font-bold text-slate-700 sm:text-xs">Business Overview</p>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-lg border border-slate-100 bg-slate-50 p-2">
              <p className="text-[8px] text-slate-500 sm:text-[9px]">{m.label}</p>
              <p className="text-[11px] font-bold text-slate-900 sm:text-xs">{m.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-auto flex items-end gap-3 pt-3">
          <div className="flex flex-1 items-end gap-1">
            {[45, 70, 55, 85, 60, 75, 50, 80].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-blue-500" style={{ height: `${h * 0.35}px` }} />
            ))}
          </div>
          <svg viewBox="0 0 40 40" className="h-12 w-12 shrink-0">
            <circle cx="20" cy="20" r="14" fill="none" stroke="#ede9fe" strokeWidth="5" />
            <circle cx="20" cy="20" r="14" fill="none" stroke="#7c3aed" strokeWidth="5" strokeDasharray="44 88" transform="rotate(-90 20 20)" />
            <circle cx="20" cy="20" r="14" fill="none" stroke="#6366f1" strokeWidth="5" strokeDasharray="22 110" strokeDashoffset="-44" transform="rotate(-90 20 20)" />
          </svg>
        </div>
        <svg viewBox="0 0 200 40" className="mt-2 h-8 w-full">
          <polyline points="0,32 25,24 50,28 75,16 100,20 125,12 150,16 175,8 200,14" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

function ProcessGraphic() {
  return (
    <div className="relative w-full overflow-x-auto pt-4 sm:pt-6">
      <div className="flex min-w-[48rem] items-start sm:min-w-0">
        {softwareDevProcess.steps.map((step, i) => {
          const Icon = step.icon as LucideIcon;
          return (
            <div key={step.title} className="flex flex-1 items-start">
              <div className="flex flex-1 flex-col items-center px-0.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.08)] sm:h-14 sm:w-14">
                  <Icon className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" strokeWidth={2} />
                </div>
                <p className="mt-3 max-w-[6.5rem] text-center text-sm font-semibold leading-snug text-slate-700 sm:max-w-[8rem] sm:text-[15px]">
                  {step.title}
                </p>
              </div>
              {i < softwareDevProcess.steps.length - 1 && (
                <ChevronRight
                  className="mx-0.5 mt-4 h-5 w-5 shrink-0 text-amber-400 sm:mx-1 sm:mt-5 sm:h-6 sm:w-6"
                  strokeWidth={2.5}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function SoftwareDevServiceGraphic({ type }: { type: ServiceGraphicType }) {
  switch (type) {
    case "web":
      return <WebGraphic />;
    case "mobile":
      return <MobileGraphic />;
    case "frontend":
      return <FrontendGraphic />;
    case "backend":
      return <BackendGraphic />;
    case "uiux":
      return <UiuxGraphic />;
    case "product":
      return <ProductGraphic />;
    case "business":
      return <BusinessGraphic />;
    case "process":
      return <ProcessGraphic />;
    default:
      return null;
  }
}

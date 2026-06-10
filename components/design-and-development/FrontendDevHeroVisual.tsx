import type { ReactNode } from "react";
import { frontendDevHero } from "@/lib/design-and-development/frontend-dev-content";
import { FRONTEND_TECH_ICONS } from "@/components/design-and-development/FrontendTechIcons";

const PHONE_W = "w-[48%] sm:w-[46%]";
const SCREEN_H = "min-h-[22rem] sm:min-h-[25rem]";

function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-[28px] border-[3.5px] border-slate-800 bg-slate-900 shadow-[0_28px_60px_rgba(15,23,42,0.28)] ${PHONE_W} ${className ?? ""}`}
    >
      <div className="mx-auto mt-2 h-1.5 w-14 rounded-full bg-slate-600" />
      <div className={`bg-white ${SCREEN_H}`}>{children}</div>
      <div className="mx-auto mb-1.5 mt-1 h-1 w-10 rounded-full bg-slate-700" />
    </div>
  );
}

function AnalyticsPhone() {
  const products = [
    { name: "UI Kits", price: "$2,400", pct: "+24%" },
    { name: "Templates", price: "$1,850", pct: "+18%" },
    { name: "Icons", price: "$980", pct: "+12%" },
  ];

  return (
    <PhoneFrame className="absolute right-0 top-0 z-[1] -rotate-[6deg]">
      <div className="flex h-full flex-col bg-slate-50 p-3.5 sm:p-4">
        <p className="text-[11px] font-bold text-slate-900 sm:text-xs">Analytics Overview</p>
        <div className="mt-2 flex items-start justify-between rounded-xl bg-white p-3 shadow-sm">
          <div>
            <p className="text-[10px] font-medium text-slate-500">Revenue</p>
            <p className="text-lg font-bold text-slate-900 sm:text-xl">$8,420.75</p>
          </div>
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
            ↑ 14.2%
          </span>
        </div>
        <div className="mt-3 flex-1 rounded-xl bg-white p-3 shadow-sm">
          <svg viewBox="0 0 120 48" className="h-12 w-full sm:h-14">
            <polyline
              points="0,38 18,30 36,32 54,18 72,22 90,12 108,16 120,10"
              fill="none"
              stroke="#14b8a6"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className="mt-3 text-[10px] font-semibold text-slate-700 sm:text-[11px]">Top Products</p>
        <div className="mt-2 space-y-2">
          {products.map((p) => (
            <div key={p.name} className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-sm">
              <span className="text-[10px] font-medium text-slate-700 sm:text-[11px]">{p.name}</span>
              <div className="text-right">
                <span className="text-[10px] font-semibold text-slate-800 sm:text-[11px]">{p.price}</span>
                <span className="ml-1.5 text-[9px] font-semibold text-emerald-600 sm:text-[10px]">{p.pct}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

function PerformancePhone() {
  const metrics = [
    { label: "Load Time", value: "1.2s" },
    { label: "Best Practice", value: "100%" },
    { label: "SEO Score", value: "100%" },
  ];

  return (
    <PhoneFrame className="absolute bottom-0 right-0 z-[1] rotate-[6deg]">
      <div className="flex h-full flex-col bg-slate-50 p-3.5 sm:p-4">
        <p className="text-[11px] font-bold text-slate-900 sm:text-xs">Performance</p>
        <div className="mt-3 flex flex-1 flex-col items-center justify-center rounded-xl bg-white p-4 shadow-sm">
          <svg viewBox="0 0 80 80" className="h-20 w-20 sm:h-24 sm:w-24">
            <circle cx="40" cy="40" r="30" fill="none" stroke="#ecfdf5" strokeWidth="6" />
            <circle
              cx="40"
              cy="40"
              r="30"
              fill="none"
              stroke="#14b8a6"
              strokeWidth="6"
              strokeDasharray="170 188"
              transform="rotate(-90 40 40)"
            />
            <text x="40" y="46" textAnchor="middle" fontSize="18" fontWeight="700" fill="#0f172a">
              98
            </text>
          </svg>
          <p className="mt-2 text-[10px] font-medium text-slate-500 sm:text-[11px]">Performance Score</p>
          <p className="text-[11px] font-semibold text-emerald-600 sm:text-xs">Excellent</p>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-xl bg-white px-2 py-2.5 text-center shadow-sm">
              <p className="text-[8px] text-slate-500 sm:text-[9px]">{m.label}</p>
              <p className="text-[10px] font-bold text-slate-900 sm:text-[11px]">{m.value}</p>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

function MainPhone() {
  const categories = [
    { name: "Design", color: "bg-pink-100 text-pink-600" },
    { name: "Dev", color: "bg-blue-100 text-blue-600" },
    { name: "Marketing", color: "bg-violet-100 text-violet-600" },
    { name: "Analytics", color: "bg-teal-100 text-teal-600" },
  ];
  const activity = [
    { name: "Dribbble Pro", amt: "-$45.00", letter: "D", color: "bg-pink-100 text-pink-600", time: "2h ago" },
    { name: "Upwork", amt: "+$120.00", letter: "U", color: "bg-emerald-100 text-emerald-600", time: "5h ago" },
    { name: "Figma", amt: "-$15.00", letter: "F", color: "bg-violet-100 text-violet-600", time: "1d ago" },
  ];

  return (
    <PhoneFrame className="absolute left-[2%] top-1/2 z-10 -translate-y-1/2 rotate-[3deg] sm:left-[4%]">
      <div className="flex h-full flex-col bg-slate-50 p-3.5 sm:p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] text-slate-500">Hello, Alex</p>
            <p className="text-xs font-bold leading-snug text-slate-900 sm:text-sm">
              Discover &amp; Enjoy Amazing Experiences
            </p>
          </div>
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-teal-300 to-emerald-400 sm:h-10 sm:w-10" />
        </div>
        <div className="mt-2.5 flex h-9 items-center rounded-xl bg-white px-3 shadow-sm">
          <span className="text-[10px] text-slate-400 sm:text-[11px]">Search anything...</span>
        </div>
        <div className="mt-3 rounded-2xl bg-gradient-to-br from-teal-600 to-emerald-600 p-3.5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] text-teal-100 sm:text-[11px]">Total Balance</p>
              <p className="text-base font-bold text-white sm:text-lg">$24,680.50</p>
            </div>
            <span className="rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-semibold text-white sm:text-[10px]">
              +12.5%
            </span>
          </div>
          <svg viewBox="0 0 100 28" className="mt-2 h-8 w-full">
            <polyline
              points="0,22 16,18 32,20 48,12 64,14 80,10 100,12"
              fill="none"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-[10px] font-semibold text-slate-700 sm:text-[11px]">Categories</p>
          <span className="text-[9px] font-medium text-teal-600 sm:text-[10px]">View All</span>
        </div>
        <div className="mt-1.5 grid grid-cols-4 gap-1.5">
          {categories.map((c) => (
            <div key={c.name} className="text-center">
              <div className={`mx-auto flex h-8 w-8 items-center justify-center rounded-xl text-[8px] font-bold sm:h-9 sm:w-9 sm:text-[9px] ${c.color}`}>
                {c.name[0]}
              </div>
              <span className="mt-0.5 block text-[7px] text-slate-600 sm:text-[8px]">{c.name}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[10px] font-semibold text-slate-700 sm:text-[11px]">Recent Activity</p>
        <div className="mt-1.5 flex-1 space-y-2">
          {activity.map((a) => (
            <div key={a.name} className="flex items-center justify-between rounded-xl bg-white px-2.5 py-2 shadow-sm">
              <div className="flex items-center gap-2">
                <span className={`flex h-7 w-7 items-center justify-center rounded-lg text-[9px] font-bold ${a.color}`}>
                  {a.letter}
                </span>
                <div>
                  <p className="text-[9px] font-medium text-slate-800 sm:text-[10px]">{a.name}</p>
                  <p className="text-[8px] text-slate-400">{a.time}</p>
                </div>
              </div>
              <span className={`text-[9px] font-semibold sm:text-[10px] ${a.amt.startsWith("+") ? "text-emerald-600" : "text-slate-800"}`}>
                {a.amt}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-around border-t border-slate-200 pt-2.5">
          {["Home", "Explore", "", "Activity", "Profile"].map((tab, i) =>
            i === 2 ? (
              <span
                key="add"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-600 text-base font-bold text-white shadow-md"
              >
                +
              </span>
            ) : (
              <div key={tab} className="text-center">
                <div className="mx-auto h-4 w-4 rounded bg-slate-200" />
                <span className="text-[7px] text-slate-500 sm:text-[8px]">{tab}</span>
              </div>
            )
          )}
        </div>
      </div>
    </PhoneFrame>
  );
}

export default function FrontendDevHeroVisual() {
  return (
    <div className="relative w-full" aria-hidden>
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-200/30 blur-3xl sm:h-72 sm:w-72" />
      <div className="relative mx-auto min-h-[28rem] w-full max-w-xl sm:min-h-[32rem] lg:min-h-[34rem]">
        <AnalyticsPhone />
        <MainPhone />
        <PerformancePhone />
      </div>
      <div className="relative mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 rounded-xl border border-slate-100 bg-white px-4 py-4 shadow-[0_8px_24px_rgba(15,23,42,0.08)] sm:gap-x-5 sm:px-6">
        <span className="w-full text-center text-xs font-bold text-slate-900 sm:w-auto sm:text-sm">Built With</span>
        {frontendDevHero.builtWith.map((tech) => {
          const Icon = FRONTEND_TECH_ICONS[tech as keyof typeof FRONTEND_TECH_ICONS];
          return (
            <div key={tech} className="flex items-center gap-1.5">
              {Icon ? <Icon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" /> : null}
              <span className="text-[10px] font-semibold text-slate-600 sm:text-xs">{tech}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import type { ReactNode } from "react";
import { mobileDevHero } from "@/lib/design-and-development/mobile-dev-content";

function PhoneFrame({
  children,
  className,
  screenMinH = "min-h-[17.5rem] sm:min-h-[20rem]",
}: {
  children: ReactNode;
  className?: string;
  screenMinH?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[26px] border-[3.5px] border-slate-800 bg-slate-900 shadow-[0_24px_56px_rgba(15,23,42,0.24)] ${className ?? ""}`}
    >
      <div className="mx-auto mt-2 h-1.5 w-14 rounded-full bg-slate-600" />
      <div className={`bg-white ${screenMinH}`}>{children}</div>
      <div className="mx-auto mb-1.5 mt-1 h-1 w-10 rounded-full bg-slate-700" />
    </div>
  );
}

function AnalyticsPhone() {
  const categories = [
    { label: "Food", color: "#7c3aed", pct: "32%" },
    { label: "Travel", color: "#6366f1", pct: "24%" },
    { label: "Bills", color: "#38bdf8", pct: "18%" },
  ];

  return (
    <PhoneFrame
      className="absolute left-0 top-6 z-[1] w-[42%] -rotate-[9deg] sm:top-8"
      screenMinH="min-h-[18rem] sm:min-h-[21rem]"
    >
      <div className="flex h-full flex-col bg-slate-50 p-3 sm:p-3.5">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold text-slate-900 sm:text-[11px]">Analytics</p>
          <span className="text-[8px] text-slate-400 sm:text-[9px]">This Month</span>
        </div>
        <div className="mt-2 rounded-xl bg-white p-2 shadow-sm">
          <svg viewBox="0 0 120 44" className="h-11 w-full sm:h-12">
            <polyline
              points="0,36 18,28 36,30 54,18 72,22 90,12 108,16 120,10"
              fill="none"
              stroke="#7c3aed"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="mt-2 flex flex-1 gap-2">
          <div className="flex w-[42%] flex-col items-center justify-center rounded-xl bg-white p-2 shadow-sm">
            <svg viewBox="0 0 40 40" className="h-12 w-12 sm:h-14 sm:w-14">
              <circle cx="20" cy="20" r="14" fill="none" stroke="#ede9fe" strokeWidth="5" />
              <circle cx="20" cy="20" r="14" fill="none" stroke="#7c3aed" strokeWidth="5" strokeDasharray="28 88" transform="rotate(-90 20 20)" />
              <circle cx="20" cy="20" r="14" fill="none" stroke="#6366f1" strokeWidth="5" strokeDasharray="18 98" strokeDashoffset="-28" transform="rotate(-90 20 20)" />
              <circle cx="20" cy="20" r="14" fill="none" stroke="#38bdf8" strokeWidth="5" strokeDasharray="12 104" strokeDashoffset="-46" transform="rotate(-90 20 20)" />
            </svg>
            <p className="mt-1 text-[8px] font-semibold text-slate-600">Spending</p>
          </div>
          <div className="flex flex-1 flex-col justify-end gap-1 rounded-xl bg-white p-2 shadow-sm">
            <p className="text-[8px] font-semibold text-slate-600 sm:text-[9px]">Monthly</p>
            <div className="flex h-16 items-end gap-1 sm:h-[4.5rem]">
              {[45, 70, 55, 85, 60, 75].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-violet-600 to-violet-400"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-2 space-y-1">
          {categories.map((c) => (
            <div key={c.label} className="flex items-center justify-between rounded-lg bg-white px-2 py-1 shadow-sm">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: c.color }} />
                <span className="text-[8px] text-slate-700 sm:text-[9px]">{c.label}</span>
              </div>
              <span className="text-[8px] font-semibold text-slate-800 sm:text-[9px]">{c.pct}</span>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

function DiscoverPhone() {
  const services = [
    { name: "Food Delivery", letter: "F", color: "bg-orange-100 text-orange-600" },
    { name: "Travel", letter: "T", color: "bg-sky-100 text-sky-600" },
    { name: "Shopping", letter: "S", color: "bg-pink-100 text-pink-600" },
  ];
  const apps = ["Headspace", "Notion", "Spotify"];

  return (
    <PhoneFrame
      className="absolute right-0 top-4 z-[1] w-[42%] rotate-[8deg] sm:top-6"
      screenMinH="min-h-[18rem] sm:min-h-[21rem]"
    >
      <div className="flex h-full flex-col p-3 sm:p-3.5">
        <p className="text-[10px] font-bold text-slate-900 sm:text-[11px]">Discover</p>
        <div className="mt-2 flex h-7 items-center rounded-lg bg-slate-100 px-2 sm:h-8">
          <span className="text-[8px] text-slate-400 sm:text-[9px]">Search services...</span>
        </div>
        <div className="mt-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 p-2.5 sm:p-3">
          <p className="text-[9px] font-bold text-white sm:text-[10px]">50% OFF</p>
          <p className="text-[7px] text-violet-200 sm:text-[8px]">Limited time offer</p>
        </div>
        <p className="mt-2.5 text-[8px] font-semibold text-slate-700 sm:text-[9px]">Popular Services</p>
        <div className="mt-1 space-y-1.5">
          {services.map((s) => (
            <div key={s.name} className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-2 py-1.5">
              <span className={`flex h-6 w-6 items-center justify-center rounded-lg text-[8px] font-bold ${s.color}`}>
                {s.letter}
              </span>
              <span className="text-[8px] font-medium text-slate-700 sm:text-[9px]">{s.name}</span>
            </div>
          ))}
        </div>
        <p className="mt-2 text-[8px] font-semibold text-slate-700 sm:text-[9px]">Recommended</p>
        <div className="mt-1 grid grid-cols-3 gap-1.5">
          {apps.map((app) => (
            <div key={app} className="rounded-lg bg-slate-50 p-1.5 text-center">
              <div className="mx-auto mb-1 h-6 w-6 rounded-lg bg-gradient-to-br from-violet-400 to-indigo-500" />
              <span className="text-[6px] font-medium text-slate-600 sm:text-[7px]">{app}</span>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

function MainPhone() {
  const txns = [
    { name: "Dribbble", amt: "-$45.00", color: "bg-pink-100 text-pink-600" },
    { name: "Spotify", amt: "-$12.99", color: "bg-emerald-100 text-emerald-600" },
    { name: "Uber", amt: "-$18.50", color: "bg-slate-100 text-slate-600" },
    { name: "Salary", amt: "+$4,200", color: "bg-blue-100 text-blue-600" },
  ];

  return (
    <PhoneFrame
      className="relative z-10 mx-auto w-[48%] sm:w-[46%]"
      screenMinH="min-h-[20rem] sm:min-h-[23rem]"
    >
      <div className="flex h-full flex-col bg-slate-50 p-3 sm:p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-300 to-indigo-400 sm:h-9 sm:w-9" />
          <div>
            <p className="text-[9px] text-slate-500 sm:text-[10px]">Good Morning</p>
            <p className="text-[11px] font-bold text-slate-900 sm:text-xs">Emma</p>
          </div>
        </div>
        <div className="mt-3 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 p-3 sm:p-3.5">
          <p className="text-[9px] text-violet-200 sm:text-[10px]">Total Balance</p>
          <p className="text-base font-bold text-white sm:text-lg">$24,680.50</p>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-1.5">
          {["Send", "Receive", "Top Up", "More"].map((a) => (
            <div key={a} className="rounded-xl bg-white py-1.5 text-center shadow-sm">
              <div className="mx-auto mb-1 h-5 w-5 rounded-full bg-violet-100 sm:h-6 sm:w-6" />
              <span className="text-[7px] font-medium text-slate-600 sm:text-[8px]">{a}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[9px] font-semibold text-slate-800 sm:text-[10px]">Recent Transactions</p>
        <div className="mt-1.5 flex-1 space-y-1.5">
          {txns.map((t) => (
            <div
              key={t.name}
              className="flex items-center justify-between rounded-xl bg-white px-2 py-1.5 shadow-sm sm:px-2.5 sm:py-2"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full text-[7px] font-bold sm:h-6 sm:w-6 sm:text-[8px] ${t.color}`}
                >
                  {t.name[0]}
                </span>
                <span className="text-[8px] font-medium text-slate-700 sm:text-[9px]">{t.name}</span>
              </div>
              <span className="text-[8px] font-semibold text-slate-900 sm:text-[9px]">{t.amt}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-around border-t border-slate-200 pt-2">
          {["Home", "Stats", "", "Wallet", "Profile"].map((tab, i) =>
            i === 2 ? (
              <span
                key="add"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-base font-bold text-white shadow-md sm:h-9 sm:w-9"
              >
                +
              </span>
            ) : (
              <div key={tab} className="text-center">
                <div className="mx-auto h-3.5 w-3.5 rounded bg-slate-200 sm:h-4 sm:w-4" />
                <span className="text-[6px] text-slate-500 sm:text-[7px]">{tab}</span>
              </div>
            )
          )}
        </div>
      </div>
    </PhoneFrame>
  );
}

export default function MobileDevHeroPhones() {
  return (
    <div className="relative w-full" aria-hidden>
      <div
        className="pointer-events-none absolute -right-4 top-8 h-40 w-40 rounded-full bg-violet-200/35 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto min-h-[22rem] w-full max-w-lg sm:min-h-[26rem] lg:min-h-[28rem]">
        <AnalyticsPhone />
        <MainPhone />
        <DiscoverPhone />
      </div>

      <div className="relative mt-5 flex flex-wrap items-center justify-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3.5 shadow-[0_8px_24px_rgba(15,23,42,0.08)] sm:mt-6 sm:gap-5 sm:px-6">
        <span className="text-xs font-bold text-slate-900 sm:text-sm">Built With</span>
        {mobileDevHero.builtWith.map((tech) => (
          <span key={tech} className="text-[10px] font-semibold text-slate-500 sm:text-xs">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

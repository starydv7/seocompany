import { Check, MapPin } from "lucide-react";
import {
  dmHubEnterprise,
  dmHubFranchise,
} from "@/lib/digital-marketing/hub-dm-content";
import {
  HUB_CARD,
  HUB_CHECK,
  HUB_SECTION_TITLE_LEFT,
  HUB_TAG,
} from "@/components/digital-marketing/hub-dm-styles";

function FranchiseMapVisual() {
  const pins = [
    { cx: 120, cy: 95 },
    { cx: 200, cy: 70 },
    { cx: 280, cy: 110 },
    { cx: 340, cy: 85 },
    { cx: 160, cy: 150 },
    { cx: 250, cy: 140 },
    { cx: 320, cy: 165 },
  ];

  return (
    <div className={`${HUB_CARD} overflow-hidden p-0`}>
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_42%]">
        <div className="relative min-h-[10rem] bg-slate-50 p-3 sm:min-h-[12rem]">
          <svg viewBox="0 0 400 200" className="h-full w-full" aria-hidden>
            <defs>
              <pattern id="dm-hub-dots" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="#cbd5e1" />
              </pattern>
            </defs>
            <rect width="400" height="200" fill="url(#dm-hub-dots)" opacity="0.5" />
            {pins.map((p, i) => (
              <g key={i}>
                <circle cx={p.cx} cy={p.cy} r="10" fill="#7c3aed" opacity="0.15" />
                <circle cx={p.cx} cy={p.cy} r="5" fill="#7c3aed" />
                <circle cx={p.cx} cy={p.cy - 8} r="3" fill="#7c3aed" />
              </g>
            ))}
          </svg>
        </div>
        <div className="border-t border-slate-100 p-3 sm:border-l sm:border-t-0 sm:p-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500 sm:text-[11px]">
            All Locations
          </p>
          <ul className="mt-2 space-y-2">
            {dmHubFranchise.locations.map((loc) => (
              <li key={loc.name} className="flex items-center justify-between gap-2">
                <span className="flex min-w-0 items-center gap-1.5 text-[10px] text-slate-700 sm:text-[11px]">
                  <MapPin className="h-3 w-3 shrink-0 text-violet-500" strokeWidth={2} />
                  <span className="truncate">{loc.name}</span>
                </span>
                <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-700">
                  {loc.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function EnterpriseWorkflowVisual() {
  const { workflowTitle, workflowSteps } = dmHubEnterprise;

  return (
    <div className={`${HUB_CARD} p-4 sm:p-5`}>
      <p className="text-sm font-bold text-slate-900">{workflowTitle}</p>
      <div className="relative mt-4 space-y-0">
        {workflowSteps.map((step, i) => (
          <div key={step} className="relative flex gap-3 pb-4 last:pb-0">
            {i < workflowSteps.length - 1 ? (
              <div className="absolute left-[11px] top-6 h-[calc(100%-8px)] w-px bg-violet-200" aria-hidden />
            ) : null}
            <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-600 text-[9px] font-bold text-white">
              {i + 1}
            </span>
            <div className="min-w-0 pt-0.5">
              <p className="text-xs font-bold text-slate-800 sm:text-sm">{step}</p>
              <p className="mt-0.5 text-[10px] text-slate-500 sm:text-[11px]">
                {i === 0 && "Align goals, budgets, and KPIs across teams."}
                {i === 1 && "Coordinate campaigns across brands and regions."}
                {i === 2 && "Centralize data for unified reporting."}
                {i === 3 && "Continuously improve performance at scale."}
                {i === 4 && "Executive-ready insights and transparency."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
          <span className={HUB_CHECK}>
            <Check className="h-3 w-3 text-white" strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function DmHubFranchiseEnterpriseSection() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start">
      <div>
        <span className={HUB_TAG}>{dmHubFranchise.badge}</span>
        <h2 className={`mt-4 ${HUB_SECTION_TITLE_LEFT}`}>{dmHubFranchise.title}</h2>
        <CheckList items={dmHubFranchise.items} />
        <div className="mt-6">
          <FranchiseMapVisual />
        </div>
      </div>
      <div>
        <span className={HUB_TAG}>{dmHubEnterprise.badge}</span>
        <h2 className={`mt-4 ${HUB_SECTION_TITLE_LEFT}`}>{dmHubEnterprise.title}</h2>
        <CheckList items={dmHubEnterprise.items} />
        <div className="mt-6">
          <EnterpriseWorkflowVisual />
        </div>
      </div>
    </div>
  );
}

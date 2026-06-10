import type { LucideIcon } from "lucide-react";
import { productEngineeringHero } from "@/lib/design-and-development/product-engineering-content";

/** Curved dashed connectors from spoke cards → lifecycle spine (mockup positions) */
const CONNECTORS: { from: string; toY: number }[] = [
  { from: "top-left", toY: 0.22 },
  { from: "top-right", toY: 0.36 },
  { from: "bottom-left", toY: 0.62 },
  { from: "bottom-right", toY: 0.76 },
];

const SPOKE_LAYOUT: Record<string, string> = {
  "top-left": "left-[3%] top-[5%] w-[30%] max-w-[8.5rem] sm:left-[5%] sm:top-[7%] sm:max-w-[9.5rem]",
  "top-right": "right-[3%] top-[5%] w-[30%] max-w-[8.5rem] sm:right-[5%] sm:top-[7%] sm:max-w-[9.5rem]",
  "bottom-left": "bottom-[5%] left-[3%] w-[30%] max-w-[8.5rem] sm:bottom-[7%] sm:left-[5%] sm:max-w-[9.5rem]",
  "bottom-right": "bottom-[5%] right-[3%] w-[30%] max-w-[8.5rem] sm:bottom-[7%] sm:right-[5%] sm:max-w-[9.5rem]",
};

const CONNECTOR_FROM: Record<string, { x: number; y: number }> = {
  "top-left": { x: 0.78, y: 0.18 },
  "top-right": { x: 0.22, y: 0.18 },
  "bottom-left": { x: 0.78, y: 0.82 },
  "bottom-right": { x: 0.22, y: 0.82 },
};

function ConnectorPaths() {
  const centerX = 0.5;
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      {CONNECTORS.map(({ from, toY }) => {
        const start = CONNECTOR_FROM[from];
        const endX = centerX;
        const endY = toY * 100;
        const startX = start.x * 100;
        const startY = start.y * 100;
        const c1x = startX + (endX - startX) * 0.45;
        const c1y = startY;
        const c2x = endX + (startX - endX) * 0.25;
        const c2y = endY;
        return (
          <g key={from}>
            <path
              d={`M ${startX} ${startY} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${endX} ${endY}`}
              fill="none"
              stroke="#93c5fd"
              strokeWidth="0.35"
              strokeDasharray="1.2 1"
              vectorEffect="non-scaling-stroke"
            />
            <circle cx={endX} cy={endY} r="0.9" fill="#7c3aed" opacity="0.55" />
          </g>
        );
      })}
    </svg>
  );
}

function SpokeCard({
  title,
  desc,
  icon: Icon,
  position,
}: {
  title: string;
  desc: string;
  icon: LucideIcon;
  position: string;
}) {
  return (
    <div className={`absolute z-10 ${SPOKE_LAYOUT[position]}`}>
      <div className="rounded-xl border border-slate-100/90 bg-white p-2.5 shadow-[0_6px_24px_rgba(15,23,42,0.07)] sm:p-3">
        <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 sm:h-9 sm:w-9">
          <Icon className="h-4 w-4 text-violet-600 sm:h-[18px] sm:w-[18px]" strokeWidth={2} />
        </div>
        <p className="text-[10px] font-bold leading-tight text-slate-800 sm:text-[11px]">{title}</p>
        <p className="mt-1 text-[8px] leading-snug text-slate-500 sm:text-[9px]">{desc}</p>
      </div>
    </div>
  );
}

function LifecyclePill({
  num,
  label,
  icon: Icon,
}: {
  num: string;
  label: string;
  icon: LucideIcon;
}) {
  return (
    <div className="relative z-10 flex w-full items-center gap-2 rounded-full border border-slate-100 bg-white px-2.5 py-1.5 shadow-[0_4px_16px_rgba(15,23,42,0.06)] sm:gap-2.5 sm:px-3 sm:py-2">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-50 sm:h-8 sm:w-8">
        <Icon className="h-3.5 w-3.5 text-violet-600 sm:h-4 sm:w-4" strokeWidth={2} />
      </span>
      <span className="text-[9px] font-bold tracking-wide text-slate-800 sm:text-[10px]">
        <span className="text-violet-600">{num}</span> {label}
      </span>
    </div>
  );
}

function LifecycleStack() {
  return (
    <div className="relative flex w-[7.5rem] flex-col items-center sm:w-[8.75rem]">
      <div
        className="absolute left-1/2 top-[6%] z-0 h-[88%] w-px -translate-x-1/2 border-l border-dashed border-blue-300/90"
        aria-hidden
      />
      <div className="relative z-10 flex w-full flex-col gap-1.5 sm:gap-2">
        {productEngineeringHero.lifecycle.map((step) => {
          const Icon = step.icon as LucideIcon;
          return (
            <LifecyclePill key={step.label} num={step.num} label={step.label} icon={Icon} />
          );
        })}
      </div>
    </div>
  );
}

export default function ProductEngineeringHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[1.25rem] border border-slate-100/80 bg-gradient-to-br from-[#f8f7ff] via-[#f4f6fb] to-[#eef2ff] p-4 shadow-[0_12px_40px_rgba(15,23,42,0.09)] sm:rounded-[1.5rem] sm:p-5 lg:p-6">
      <div
        className="pointer-events-none absolute right-[4%] top-[5%] h-[38%] w-[32%] opacity-[0.22]"
        style={{
          backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
        aria-hidden
      />

      <div className="relative min-h-[24rem] sm:min-h-[27rem] lg:min-h-[29rem]">
        <ConnectorPaths />

        {productEngineeringHero.spokes.map((spoke) => {
          const Icon = spoke.icon as LucideIcon;
          return (
            <SpokeCard
              key={spoke.title}
              title={spoke.title}
              desc={spoke.desc}
              icon={Icon}
              position={spoke.position}
            />
          );
        })}

        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <LifecycleStack />
        </div>
      </div>
    </div>
  );
}

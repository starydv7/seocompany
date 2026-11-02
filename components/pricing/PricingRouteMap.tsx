import { PRICING_PLANS, type PlanId } from "@/lib/pricing/pricing-content";

const VIEW_W = 400;
const VIEW_H = 340;

const NODES: Record<PlanId, { x: number; y: number; label: "above" | "below" }> = {
  audit: { x: 60, y: 170, label: "below" },
  sprint: { x: 330, y: 60, label: "above" },
  automation: { x: 330, y: 170, label: "above" },
  website: { x: 330, y: 280, label: "below" },
};

const PATHS: { to: PlanId; d: string }[] = [
  { to: "sprint", d: "M60 170 C 190 170, 200 60, 330 60" },
  { to: "automation", d: "M60 170 L 330 170" },
  { to: "website", d: "M60 170 C 190 170, 200 280, 330 280" },
];

export default function PricingRouteMap() {
  return (
    <div className="relative mx-auto aspect-[400/340] w-full max-w-[460px]">
      <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          {PATHS.map(({ to }) => {
            const plan = PRICING_PLANS.find((p) => p.id === to)!;
            return (
              <linearGradient
                key={to}
                id={`route-${to}`}
                gradientUnits="userSpaceOnUse"
                x1={NODES.audit.x}
                x2={NODES[to].x}
                y1={0}
                y2={0}
              >
                <stop offset="0%" stopColor="#ddbf5d" />
                <stop offset="100%" stopColor={plan.accent.to} />
              </linearGradient>
            );
          })}
        </defs>

        {PATHS.map(({ to, d }) => (
          <g key={to}>
            <path d={d} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={6} strokeLinecap="round" />
            <path
              d={d}
              fill="none"
              stroke={`url(#route-${to})`}
              strokeWidth={2}
              strokeLinecap="round"
              className="lux-route-flow"
            />
          </g>
        ))}

        {PRICING_PLANS.map((plan) => {
          const node = NODES[plan.id];
          const isStart = plan.id === "audit";
          return (
            <g key={plan.id}>
              <circle cx={node.x} cy={node.y} r={isStart ? 14 : 10} fill={plan.accent.to} className="lux-pulse" />
              <circle
                cx={node.x}
                cy={node.y}
                r={isStart ? 14 : 10}
                fill="#06070d"
                stroke={plan.accent.to}
                strokeWidth={2}
              />
              <circle cx={node.x} cy={node.y} r={isStart ? 6 : 4} fill={plan.accent.from} />
            </g>
          );
        })}
      </svg>

      {PRICING_PLANS.map((plan) => {
        const node = NODES[plan.id];
        const left = `${(node.x / VIEW_W) * 100}%`;
        const top = `${(node.y / VIEW_H) * 100}%`;
        return (
          <a
            key={plan.id}
            href={`#plan-${plan.id}`}
            className={`lux-route-node absolute flex -translate-x-1/2 flex-col items-center text-center ${
              node.label === "above" ? "-translate-y-[calc(100%+22px)]" : "translate-y-[22px]"
            }`}
            style={{ left, top }}
            aria-label={`Jump to ${plan.title}`}
          >
            <span className="font-mono text-[10px] tracking-[0.28em] text-white/45">{plan.index}</span>
            <span className="whitespace-nowrap text-[13px] font-semibold text-white">{plan.tag}</span>
          </a>
        );
      })}
    </div>
  );
}

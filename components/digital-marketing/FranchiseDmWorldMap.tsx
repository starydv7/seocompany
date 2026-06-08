import { franchiseDmMarket } from "@/lib/digital-marketing/franchise-dm-content";

function PinCheck({ cx, cy }: { cx: number; cy: number }) {
  return (
    <path
      d={`M ${cx - 3.5} ${cy} L ${cx - 0.5} ${cy + 3} L ${cx + 4} ${cy - 3}`}
      fill="none"
      stroke="white"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

const HUB = { x: 318, y: 142 };

/** Dot positions approximating world continents */
const WORLD_DOTS: [number, number][] = [
  [72, 88], [88, 72], [104, 95], [118, 110], [95, 125], [78, 142], [110, 148],
  [128, 118], [145, 95], [155, 128], [142, 168], [118, 188], [135, 205], [158, 218],
  [175, 195], [168, 168], [188, 148], [205, 125], [218, 98], [235, 82], [248, 95],
  [258, 118], [242, 135], [228, 155], [248, 168], [265, 148], [278, 128], [292, 108],
  [305, 95], [318, 88], [332, 102], [348, 118], [362, 135], [378, 125], [395, 108],
  [412, 95], [428, 112], [445, 128], [458, 148], [448, 168], [432, 185], [418, 205],
  [438, 218], [455, 235], [468, 218], [452, 198], [398, 178], [385, 195], [368, 212],
  [352, 228], [335, 245], [318, 232], [298, 218], [285, 235], [268, 248], [252, 232],
  [238, 215], [222, 232], [205, 248], [188, 232], [172, 218], [155, 235], [142, 248],
  [125, 232], [108, 218], [92, 205], [105, 188], [122, 172], [138, 155], [155, 142],
  [172, 128], [188, 115], [205, 102], [222, 88], [238, 102], [255, 88], [272, 102],
  [288, 118], [305, 135], [322, 155], [338, 172], [355, 155], [372, 138], [388, 122],
  [405, 138], [422, 155], [438, 172], [455, 155], [472, 138], [485, 122],
  [65, 102], [82, 118], [98, 135], [115, 152], [132, 168], [148, 185],
  [165, 202], [182, 185], [198, 168], [215, 152], [232, 135], [248, 118],
  [265, 102], [282, 88], [298, 72], [315, 58], [332, 72], [348, 88],
  [365, 102], [382, 118], [398, 135], [415, 152], [432, 168], [448, 185],
  [465, 202], [478, 185], [462, 168], [445, 152], [428, 135], [412, 118],
  [395, 102], [378, 88], [362, 72], [345, 58], [328, 72], [312, 88],
  [295, 102], [278, 118], [262, 135], [245, 152], [228, 168], [212, 185],
  [195, 202], [178, 218], [162, 235], [145, 252], [128, 268], [112, 252],
  [95, 235], [78, 218], [62, 202], [48, 185], [55, 168], [72, 152],
  [88, 168], [105, 185], [122, 202], [138, 218], [155, 235], [172, 252],
  [188, 268], [205, 252], [222, 235], [238, 218], [255, 202], [272, 185],
  [288, 168], [305, 152], [322, 135], [338, 118], [355, 102], [372, 88],
  [388, 72], [405, 88], [422, 102], [438, 118], [455, 135], [472, 152],
  [488, 168], [502, 185], [495, 202], [478, 218], [462, 235], [445, 252],
  [428, 268], [412, 252], [395, 235], [378, 218], [362, 202], [345, 185],
  [328, 168], [312, 152], [295, 135], [278, 118], [262, 102], [245, 88],
  [228, 72], [212, 58], [195, 72], [178, 88], [162, 102], [145, 118],
  [128, 102], [112, 88], [95, 72], [78, 58], [62, 72], [48, 88],
];

function arcPath(hx: number, hy: number, tx: number, ty: number) {
  const mx = (hx + tx) / 2;
  const my = (hy + ty) / 2 - Math.abs(tx - hx) * 0.12 - 18;
  return `M ${hx} ${hy} Q ${mx} ${my} ${tx} ${ty}`;
}

export default function FranchiseDmWorldMap() {
  const { hub, destinations } = franchiseDmMarket;

  return (
    <div
      className="relative w-full overflow-hidden rounded-3xl border border-slate-100 bg-white p-[2%] shadow-[0_8px_40px_rgba(99,102,241,0.08)]"
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_55%_45%,rgba(167,139,250,0.1),transparent_70%)]" />

      <svg
        viewBox="0 0 520 280"
        className="relative w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="fdm-hub-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="fdm-pin-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {WORLD_DOTS.map(([cx, cy], i) => (
          <circle key={`dot-${i}`} cx={cx} cy={cy} r="2.2" fill="#cbd5e1" opacity="0.55" />
        ))}

        {/* India hub highlight */}
        <ellipse cx={HUB.x} cy={HUB.y} rx="22" ry="18" fill="#7c3aed" opacity="0.95" />
        <ellipse
          cx={HUB.x}
          cy={HUB.y}
          rx="32"
          ry="26"
          fill="#a78bfa"
          opacity="0.25"
          filter="url(#fdm-hub-glow)"
        />

        {destinations.map((dest) => (
          <path
            key={`arc-${dest.name}`}
            d={arcPath(HUB.x, HUB.y, dest.x, dest.y)}
            fill="none"
            stroke="#94a3b8"
            strokeWidth="1.25"
            opacity="0.45"
          />
        ))}

        {destinations.map((dest) => (
          <g key={`pin-${dest.name}`}>
            <circle cx={dest.x} cy={dest.y} r="14" fill="#a78bfa" opacity="0.2" />
            <circle
              cx={dest.x}
              cy={dest.y}
              r="9"
              fill="#7c3aed"
              filter="url(#fdm-pin-glow)"
            />
            <circle cx={dest.x} cy={dest.y} r="9" fill="#7c3aed" />
            <PinCheck cx={dest.x} cy={dest.y} />
          </g>
        ))}

        {/* Hub marker */}
        <circle cx={HUB.x} cy={HUB.y} r="10" fill="#6d28d9" stroke="white" strokeWidth="2" />
      </svg>

      {/* Country label cards */}
      <div className="pointer-events-none absolute inset-0">
        {destinations.map((dest) => (
          <div
            key={`label-${dest.name}`}
            className="absolute flex items-center gap-1.5 rounded-lg border border-slate-100 bg-white px-2 py-1 shadow-[0_4px_14px_rgba(15,23,42,0.08)]"
            style={{
              left: `${dest.labelX}%`,
              top: `${dest.labelY}%`,
            }}
          >
            <span className="text-sm leading-none">{dest.flag}</span>
            <span className="whitespace-nowrap text-[10px] font-semibold text-slate-700 sm:text-[11px]">
              {dest.name}
            </span>
          </div>
        ))}

        <div
          className="absolute flex items-center gap-1.5 rounded-lg border border-violet-200 bg-violet-50 px-2.5 py-1.5 shadow-[0_4px_14px_rgba(124,58,237,0.15)]"
          style={{ left: "52%", top: "38%" }}
        >
          <span className="text-sm leading-none">{hub.flag}</span>
          <span className="whitespace-nowrap text-[10px] font-bold text-violet-700 sm:text-[11px]">
            {hub.name}
          </span>
        </div>
      </div>
    </div>
  );
}

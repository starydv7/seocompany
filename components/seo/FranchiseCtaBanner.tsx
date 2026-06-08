import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Calendar, FileText } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import {
  FRANCHISE_ITEM_TITLE,
  FRANCHISE_SECTION_SUBTITLE,
} from "@/components/seo/franchise-seo-styles";
import { franchiseFinalCta } from "@/lib/seo/franchise-content";

function GlassBar({
  x,
  y,
  w,
  h,
  id,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  id: string;
}) {
  const depth = 8;
  return (
    <g>
      <rect
        x={x + depth}
        y={y - depth * 0.35}
        width={w}
        height={h}
        rx={5}
        fill={`url(#${id}-side)`}
        opacity={0.55}
      />
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={5}
        fill={`url(#${id}-face)`}
        stroke="rgba(255,255,255,0.35)"
        strokeWidth={1}
      />
      <rect
        x={x + 2}
        y={y + 2}
        width={w - 4}
        height={Math.min(14, h * 0.12)}
        rx={3}
        fill="rgba(255,255,255,0.22)"
      />
    </g>
  );
}

function CtaGrowthGraphic() {
  return (
    <div
      className="relative flex h-[9.5rem] w-full max-w-[14rem] shrink-0 items-end justify-center sm:h-[11rem] sm:max-w-[16rem] lg:h-[12rem] lg:max-w-[17rem]"
      aria-hidden
    >
      <svg viewBox="0 0 240 200" className="h-full w-full overflow-visible">
        <defs>
          <linearGradient id="bar-face" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
            <stop offset="55%" stopColor="#8b5cf6" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="bar-side" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4338ca" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="bar-face-2" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#ddd6fe" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="bar-side-2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3730a3" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.3" />
          </linearGradient>
          <filter id="cta-soft-glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <GlassBar x={18} y={118} w={24} h={58} id="bar" />
        <GlassBar x={50} y={102} w={24} h={74} id="bar-2" />
        <GlassBar x={82} y={84} w={24} h={92} id="bar-2" />
        <GlassBar x={114} y={62} w={24} h={114} id="bar-2" />
        <GlassBar x={146} y={38} w={24} h={138} id="bar-2" />

        <path
          d="M12 132 C42 112, 68 92, 96 72 C124 50, 152 30, 188 12"
          stroke="#faf5ff"
          strokeWidth="2.75"
          fill="none"
          strokeLinecap="round"
          filter="url(#cta-soft-glow)"
        />
        <circle cx="44" cy="108" r="5.5" fill="#f5f3ff" stroke="#ddd6fe" strokeWidth="1.5" />
        <circle cx="82" cy="84" r="5.5" fill="#f5f3ff" stroke="#ddd6fe" strokeWidth="1.5" />
        <circle cx="118" cy="62" r="5.5" fill="#f5f3ff" stroke="#e9d5ff" strokeWidth="1.5" />
        <circle cx="152" cy="38" r="6" fill="#ffffff" stroke="#ede9fe" strokeWidth="1.5" />

        <path
          d="M28 158 L52 132 L44 132 L44 108 L60 108 L60 132 L52 132 Z"
          fill="rgba(221,214,254,0.55)"
        />
        <path
          d="M32 154 L48 138 L42 138 L42 114 L54 114 L54 138 L48 138 Z"
          fill="#f5f3ff"
          filter="url(#cta-soft-glow)"
        />

        <circle cx="198" cy="48" r="2.5" fill="#c4b5fd" opacity={0.85} />
        <circle cx="206" cy="72" r="1.5" fill="#a78bfa" opacity={0.7} />
        <circle cx="24" cy={68} r={2} fill="#a78bfa" opacity={0.55} />
        <ellipse
          cx="200"
          cy="28"
          rx="14"
          ry="5"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.25"
        />
      </svg>
    </div>
  );
}

type FranchiseCtaBannerProps = {
  className?: string;
};

export default function FranchiseCtaBanner({ className = "" }: FranchiseCtaBannerProps) {
  const {
    titleLead,
    titleAccent,
    subtitle,
    primaryLabel,
    secondaryLabel,
    secondaryHref,
    trustItems,
  } = franchiseFinalCta;

  return (
    <div
      className={`relative box-border flex w-full min-w-0 flex-col overflow-hidden rounded-2xl bg-gradient-to-r from-[#5b21b6] via-[#4f46e5] to-[#3b82f6] p-[2%] shadow-[0_24px_56px_rgba(79,70,229,0.35)] ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-4 top-0 h-48 w-48 rounded-full bg-blue-400/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-violet-600/25 blur-2xl"
      />

      <div className="relative flex min-h-0 flex-1 flex-col justify-between gap-4">
        <div className="flex min-h-0 flex-1 flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
          <div className="flex min-w-0 flex-1 flex-col justify-center">
            <h2 className="text-xl font-bold leading-snug tracking-tight text-white">
              {titleLead}
              <span className="bg-gradient-to-r from-violet-200 via-fuchsia-200 to-purple-200 bg-clip-text text-transparent">
                {titleAccent}
              </span>
            </h2>
            <p className={`mt-3 text-white/95 ${FRANCHISE_SECTION_SUBTITLE}`}>{subtitle}</p>
            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-violet-800 shadow-md transition hover:bg-violet-50"
              >
                <Calendar className="h-4 w-4 shrink-0 text-violet-700" strokeWidth={2} />
                {primaryLabel}
                <ArrowRight className="h-4 w-4 shrink-0 text-violet-700" strokeWidth={2.5} />
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/90 bg-transparent px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/10"
              >
                <FileText className="h-4 w-4 shrink-0" strokeWidth={2} />
                {secondaryLabel}
              </Link>
            </div>
          </div>

          <div className="flex shrink-0 items-center justify-center lg:w-[42%] lg:justify-end">
            <CtaGrowthGraphic />
          </div>
        </div>

        <div className="relative w-full shrink-0 border-t border-white/25 pt-[2%]">
          <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-2">
            {trustItems.map((item) => {
              const Icon = item.icon as LucideIcon;
              return (
                <li key={item.label} className="flex min-w-0 items-center gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600/80 ring-1 ring-white/20">
                    <Icon className="h-3.5 w-3.5 text-white" strokeWidth={2.25} />
                  </span>
                  <span className={`${FRANCHISE_ITEM_TITLE} text-white`}>{item.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

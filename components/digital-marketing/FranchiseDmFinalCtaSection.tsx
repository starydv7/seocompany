"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { FDM_BTN_PRIMARY, FDM_SECTION } from "@/components/digital-marketing/franchise-dm-styles";
import { franchiseDmFinalCta } from "@/lib/digital-marketing/franchise-dm-content";

function GrowthChart() {
  const { milestones } = franchiseDmFinalCta;

  const chartLeft = 48;
  const chartRight = 352;
  const chartBottom = 158;
  const chartTop = 32;
  const chartSpan = chartRight - chartLeft;
  const chartHeight = chartBottom - chartTop;

  function pointX(percent: number) {
    return chartLeft + (percent / 100) * chartSpan;
  }

  function pointY(percent: number) {
    return chartBottom - (percent / 100) * chartHeight;
  }

  function labelAnchor(percent: number): "start" | "middle" | "end" {
    if (percent <= 5) return "start";
    if (percent >= 95) return "end";
    return "middle";
  }

  return (
    <div className="relative h-full min-h-[200px] w-full px-[2%] py-[2%]" aria-hidden>
      <svg
        viewBox="0 0 400 210"
        className="h-full w-full overflow-visible"
        preserveAspectRatio="xMidYMid meet"
        overflow="visible"
      >
        <defs>
          <linearGradient id="fdm-growth-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="50%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#c4b5fd" />
          </linearGradient>
          <filter id="fdm-node-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d={`M ${pointX(0)} ${pointY(0)} C ${pointX(22)} ${pointY(30)}, ${pointX(42)} ${pointY(48)}, ${pointX(55)} ${pointY(55)} S ${pointX(82)} ${pointY(82)}, ${pointX(100)} ${pointY(100)}`}
          fill="none"
          stroke="url(#fdm-growth-line)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {milestones.map((m) => {
          const x = pointX(m.x);
          const y = pointY(m.x);
          const anchor = labelAnchor(m.x);

          return (
            <g key={m.label}>
              <circle
                cx={x}
                cy={y}
                r="8"
                fill="#a78bfa"
                filter="url(#fdm-node-glow)"
                opacity={0.9}
              />
              <circle cx={x} cy={y} r="4" fill="white" />
              <text
                x={x}
                y={y + 24}
                textAnchor={anchor}
                fill="rgba(255,255,255,0.75)"
                fontSize="10"
                fontWeight="500"
              >
                {m.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function FranchiseDmFinalCtaSection() {
  const { title, subtitle, primaryLabel } = franchiseDmFinalCta;

  return (
    <section className={`${FDM_SECTION} pb-16 pt-4 sm:pb-20`}>
      <Reveal>
        <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c1a3a] via-[#1e1b4b] to-[#0f172a] p-[2%]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_50%,rgba(124,58,237,0.2),transparent_70%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDQwIDgwIiBwcmVzZXJ2ZUFzcGVjdD0ibm9uZSI+PHBhdGggZD0iTTAgODBMNDggNjkuN0MxMTIgNDMuNyAyMDggMjcgMzYwIDI3QzYxMiAyNyA3MjggNDguNyA5NjAgODBMMTQ0MCA4MFY4MEgwWiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvc3ZnPg==')] bg-cover bg-bottom opacity-60"
          />

          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-[2.25rem]">
                {title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-[15px]">
                {subtitle}
              </p>
              <div className="mt-8">
                <Link
                  href={HUBSPOT_MEETING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={FDM_BTN_PRIMARY}
                >
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </Link>
              </div>
            </div>

            <div className="hidden min-w-0 sm:block">
              <GrowthChart />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

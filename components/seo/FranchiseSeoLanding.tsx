import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import Reveal from "@/components/Reveal";
import CircularScore from "@/components/seo/CircularScore";
import ChallengesSection from "@/components/seo/ChallengesSection";
import TrustedBrandsSection from "@/components/seo/TrustedBrandsSection";
import OffWhiteSparkleBg from "@/components/seo/OffWhiteSparkleBg";
import { FRANCHISE_SECTION, GradientDefs } from "@/components/seo/franchise-seo-styles";
import FranchiseFaqCtaSection from "@/components/seo/FranchiseFaqCtaSection";
import FranchiseIndustriesProcessSection from "@/components/seo/FranchiseIndustriesProcessSection";
import FranchiseProblemsSection from "@/components/seo/FranchiseProblemsSection";
import FranchiseResultsSection from "@/components/seo/FranchiseResultsSection";
import FranchiseServicesSection from "@/components/seo/FranchiseServicesSection";
import WhatWhySection from "@/components/seo/WhatWhySection";
import { franchiseHero } from "@/lib/seo/franchise-content";
import FranchiseWhyChooseSection from "@/components/seo/FranchiseWhyChooseSection";

const TECH_CHECKLIST_LEFT = [
  "Crawlability",
  "Indexability",
  "Core Web Vitals",
  "Site performance",
];
const TECH_CHECKLIST_RIGHT = [
  "Mobile usability",
  "HTTPS & security",
  "Schema implementation",
  "Internal linking",
];

const HERO_METRICS = [
  { label: "Local Traffic", value: "1.2M+", delta: "+142%", spark: "#6366f1" },
  { label: "Map Rankings", value: "245K+", delta: "+96%", spark: "#8b5cf6" },
  { label: "Lead Volume", value: "$8.4M+", delta: "+78%", spark: "#0ea5e9" },
];

const CARD =
  "rounded-2xl border border-slate-200/90 bg-white shadow-[0_10px_40px_rgba(99,102,241,0.08)]";

function PerformanceChart() {
  const w = 360;
  const h = 110;
  const ptsA = "8,88 38,74 68,66 98,52 128,44 158,34 188,26 218,18 248,12 278,8 308,6";
  const ptsB = "8,92 38,84 68,76 98,64 128,58 158,48 188,40 218,32 248,26 278,20 308,14";

  return (
    <div>
      <svg viewBox={`0 0 ${w} ${h}`} className="h-[7.5rem] w-full sm:h-32" preserveAspectRatio="none">
        <defs>
          <linearGradient id="franchiseLineA" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="franchiseLineB" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>
        {[22, 44, 66, 88].map((y) => (
          <line key={y} x1="0" y1={y} x2={w} y2={y} stroke="#f1f5f9" strokeWidth="1" />
        ))}
        <polyline fill="none" stroke="url(#franchiseLineB)" strokeWidth="2.5" points={ptsB} />
        <polyline fill="none" stroke="url(#franchiseLineA)" strokeWidth="2.5" points={ptsA} />
      </svg>
      <div className="mt-1 flex justify-between px-0.5 text-[9px] font-medium text-slate-400">
        {["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  );
}

function MiniSparkline({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 100 28" className="mt-3 h-7 w-full" aria-hidden>
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        points="0,22 18,18 36,20 54,12 72,14 100,6"
      />
    </svg>
  );
}

function HeroCheckIcon() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 shadow-sm shadow-indigo-200">
      <Check className="h-3 w-3 text-white" strokeWidth={3} />
    </span>
  );
}

function TechCheckItem({ label }: { label: string }) {
  return (
    <li className="flex items-center gap-2 text-[11px] font-medium text-slate-700 sm:text-xs">
      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500">
        <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
      </span>
      {label}
    </li>
  );
}

function HeroPerformanceCard() {
  return (
    <div className={`${CARD} p-4 sm:p-5`}>
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
            Local Performance
          </p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Local Traffic
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              Map Visibility
            </span>
          </div>
        </div>
        <span className="shrink-0 rounded-full bg-emerald-500 px-2.5 py-0.5 text-[11px] font-bold text-white">
          +185%
        </span>
      </div>
      <div className="mt-3">
        <PerformanceChart />
      </div>
    </div>
  );
}

function HeroMetricsRow() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {HERO_METRICS.map((m) => (
        <div key={m.label} className={`${CARD} flex flex-col p-3 sm:p-4`}>
          <p className="text-[10px] font-semibold text-slate-500">{m.label}</p>
          <p className="mt-1 text-base font-bold text-slate-900 sm:text-lg">{m.value}</p>
          <p className="mt-0.5 text-[11px] font-bold text-emerald-600">{m.delta}</p>
          <MiniSparkline color={m.spark} />
        </div>
      ))}
    </div>
  );
}

function HeroTechnicalHealthCard() {
  return (
    <div className={`${CARD} w-full p-4 sm:p-5`}>
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
        Franchise Technical Health Score
      </p>
      <div className="mt-4 flex w-full items-center gap-4 sm:gap-6">
        <CircularScore score={94} size={112} gradientId="franchiseScoreGrad" />
        <ul className="grid min-w-0 flex-1 grid-cols-2 gap-x-3 gap-y-2.5 sm:gap-y-3">
          {TECH_CHECKLIST_LEFT.map((item) => (
            <TechCheckItem key={item} label={item} />
          ))}
          {TECH_CHECKLIST_RIGHT.map((item) => (
            <TechCheckItem key={item} label={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function HeroDashboardStack() {
  return (
    <div className="flex w-full min-w-0 flex-col gap-3">
      <HeroPerformanceCard />
      <HeroMetricsRow />
      <HeroTechnicalHealthCard />
    </div>
  );
}

export default function FranchiseSeoLanding() {
  return (
    <div className="relative min-h-screen text-slate-900">
      <OffWhiteSparkleBg />
      <GradientDefs />
      <div className="relative">
      {/* Hero */}
      <section className={`relative ${FRANCHISE_SECTION}`}>
        <div className="relative grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-[5%] xl:gap-[6%]">
          {/* Left: continuous stack — nothing orphaned below buttons */}
          <Reveal className="min-w-0 space-y-6 lg:space-y-7 lg:pr-[2%]">
            <p className="inline-flex rounded-full border border-indigo-200/80 bg-indigo-50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-indigo-700">
              {franchiseHero.eyebrow}
            </p>
            <h1 className="text-[1.65rem] font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.55rem] xl:text-[2.65rem]">
              Franchise SEO Services for{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-500 bg-clip-text text-transparent">
                Multi-Location Business Growth
              </span>
            </h1>
            <p className="max-w-[52ch] text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              {franchiseHero.tagline}
            </p>
            <ul className="grid w-full gap-x-8 gap-y-3 sm:grid-cols-2">
              {franchiseHero.checklist.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <HeroCheckIcon />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-300/40 transition hover:bg-indigo-700"
              >
                Book a Strategy Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/seo"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-indigo-400 hover:text-indigo-700"
              >
                Explore Our SEO Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          {/* Right: full column width, three cards */}
          <Reveal delay={0.06} className="w-full min-w-0 lg:pl-0">
            <HeroDashboardStack />
          </Reveal>
        </div>
      </section>

      <ChallengesSection />

      <TrustedBrandsSection />

      <WhatWhySection />

      <FranchiseServicesSection />

      <FranchiseProblemsSection />

      <FranchiseIndustriesProcessSection />

      <FranchiseResultsSection />

      <FranchiseWhyChooseSection />

      <FranchiseFaqCtaSection />
      </div>
    </div>
  );
}

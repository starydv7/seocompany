"use client";

import { useEffect, useRef } from "react";
import type { LucideIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { DPM_GLASS_CARD } from "@/components/design-and-development/development-process-styles";
import { developmentProcessHero } from "@/lib/design-and-development/development-process-content";

function StageConnector() {
  return (
    <div className="process-connector flex flex-col items-center py-0.5 sm:py-1">
      <div className="h-3 w-px bg-gradient-to-b from-violet-300 to-violet-500 sm:h-4" />
      <ChevronDown className="h-3.5 w-3.5 text-violet-500 sm:h-4 sm:w-4" strokeWidth={2.5} />
    </div>
  );
}

function StageCard({
  step,
  title,
  icon: Icon,
}: {
  step: string;
  title: string;
  icon: LucideIcon;
}) {
  return (
    <div className={`process-stage ${DPM_GLASS_CARD} flex w-full items-center gap-2.5 px-3 py-2 sm:gap-3 sm:px-3.5 sm:py-2.5`}>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-50 sm:h-9 sm:w-9">
        <Icon className="h-4 w-4 text-violet-600" strokeWidth={2} />
      </span>
      <div className="min-w-0 flex-1">
        <span className="text-[9px] font-bold text-violet-600 sm:text-[10px]">{step}</span>
        <p className="text-[11px] font-bold leading-tight text-slate-800 sm:text-xs">{title}</p>
      </div>
    </div>
  );
}

export default function DevelopmentProcessHeroVisual() {
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const board = boardRef.current;
    if (!board) return;

    const ctx = gsap.context(() => {
      gsap.from(".process-board-inner", {
        opacity: 0,
        rotateX: 8,
        y: 28,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".process-stage", {
        opacity: 0,
        x: 20,
        duration: 0.55,
        stagger: 0.09,
        ease: "power2.out",
        delay: 0.15,
      });

      gsap.from(".process-connector", {
        opacity: 0,
        scaleY: 0,
        duration: 0.35,
        stagger: 0.07,
        ease: "power2.out",
        delay: 0.35,
        transformOrigin: "top center",
      });

      gsap.from(".process-float-label", {
        opacity: 0,
        scale: 0.85,
        duration: 0.5,
        stagger: 0.12,
        ease: "back.out(1.6)",
        delay: 0.5,
      });

      gsap.to(".process-float-label", {
        y: -5,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.35, from: "random" },
      });
    }, board);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={boardRef} className="relative mx-auto w-full max-w-md perspective-[1400px] sm:max-w-lg">
      <div
        className="process-board-inner relative rotate-[-2deg] rounded-[1.25rem] border border-violet-100/80 bg-gradient-to-br from-white/90 via-[#FAFAF8] to-violet-50/40 p-4 shadow-[0_20px_60px_rgba(124,58,237,0.12)] backdrop-blur-sm sm:rotate-[-3deg] sm:rounded-[1.5rem] sm:p-5"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="pointer-events-none absolute right-[6%] top-[5%] h-[35%] w-[40%] opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, #a78bfa 1.2px, transparent 1.2px)",
            backgroundSize: "14px 14px",
          }}
          aria-hidden
        />

        {developmentProcessHero.floatLabels.map((label) => (
          <span
            key={label.text}
            className={`process-float-label absolute z-20 rounded-full border border-violet-200/60 bg-white/75 px-2.5 py-1 text-[9px] font-semibold text-violet-700 shadow-sm backdrop-blur-md sm:px-3 sm:text-[10px] ${label.position}`}
          >
            {label.text}
          </span>
        ))}

        <div className="relative z-10 flex flex-col items-stretch">
          {developmentProcessHero.stages.map((stage, i) => {
            const Icon = stage.icon as LucideIcon;
            return (
              <div key={stage.title} className="flex flex-col items-stretch">
                <StageCard step={stage.step} title={stage.title} icon={Icon} />
                {i < developmentProcessHero.stages.length - 1 && <StageConnector />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

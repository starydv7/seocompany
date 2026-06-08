import { Rocket, Sparkles } from "lucide-react";
import { aiSeoHero } from "@/lib/seo/ai-seo-content";

const CARD =
  "absolute z-10 flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-[0_8px_28px_rgba(99,102,241,0.14)] sm:gap-2.5 sm:px-3.5 sm:py-2.5";

const POSITION: Record<string, string> = {
  top: "left-1/2 top-[4%] -translate-x-1/2",
  "top-left": "left-[2%] top-[18%]",
  "top-right": "right-[2%] top-[18%]",
  "bottom-left": "left-[6%] top-[52%]",
  "bottom-right": "right-[6%] top-[52%]",
};

function ChatGptIcon() {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#10a37f]">
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" aria-hidden>
        <path
          fill="currentColor"
          d="M12 2a6.5 6.5 0 0 0-5.2 10.4L4 18l5.6-2.8A6.5 6.5 0 1 0 12 2zm0 10.5a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
        />
      </svg>
    </span>
  );
}

function ClaudeIcon() {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#d97757] text-[10px] font-bold text-white">
      A|
    </span>
  );
}

function PerplexityIcon() {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#20b2aa]">
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" aria-hidden>
        <path
          fill="currentColor"
          d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zm0 2.2L6.5 8.2v7.6L12 18.8l5.5-3.2V8.2L12 5.2z"
        />
      </svg>
    </span>
  );
}

function PlatformIcon({ id }: { id: string }) {
  if (id === "chatgpt") return <ChatGptIcon />;
  if (id === "claude") return <ClaudeIcon />;
  if (id === "perplexity") return <PerplexityIcon />;
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-violet-100">
      <Sparkles className="h-4 w-4 text-violet-600" strokeWidth={2} />
    </span>
  );
}

function PlatformCard({
  id,
  label,
  position,
}: {
  id: string;
  label: string;
  position: string;
}) {
  return (
    <div className={`${CARD} ${POSITION[position]}`}>
      <PlatformIcon id={id} />
      <span className="whitespace-nowrap text-xs font-semibold text-[#1a1642]">{label}</span>
    </div>
  );
}

export default function AiSeoHeroDiagram() {
  const { hubLabel, platforms, calloutTitle, calloutBody } = aiSeoHero;

  return (
    <div className="relative w-full max-w-[30rem] lg:max-w-[32rem]">
      {/* Orbit — clipped, fixed height */}
      <div className="relative mx-auto aspect-square w-full max-w-[24rem] overflow-hidden sm:max-w-[26rem] lg:max-w-[28rem]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[44%] h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200/35 blur-3xl"
        />

        <svg
          className="pointer-events-none absolute inset-[8%] h-[84%] w-[84%]"
          viewBox="0 0 400 400"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="#ddd6fe"
            strokeWidth="1.25"
            strokeDasharray="5 9"
            opacity="0.75"
          />
          {[
            [200, 50],
            [70, 130],
            [330, 130],
            [95, 280],
            [305, 280],
          ].map(([x, y], i) => (
            <line
              key={i}
              x1="200"
              y1="200"
              x2={x}
              y2={y}
              stroke="#c4b5fd"
              strokeWidth="1"
              strokeDasharray="4 6"
              opacity="0.5"
            />
          ))}
        </svg>

        <div className="absolute left-1/2 top-[44%] z-20 flex h-[6.5rem] w-[6.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-[7.5rem] sm:w-[7.5rem]">
          <div
            aria-hidden
            className="absolute inset-[-10%] rounded-full bg-violet-500/20 blur-2xl"
          />
          <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#4f46e5] via-[#6366f1] to-[#7c3aed] shadow-[0_0_48px_rgba(99,102,241,0.45)] ring-[3px] ring-violet-300/50">
            <span className="px-2 text-center text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
              {hubLabel}
            </span>
          </div>
        </div>

        <div className="absolute inset-0">
          {platforms.map((p) => (
            <PlatformCard key={p.id} id={p.id} label={p.label} position={p.position} />
          ))}
        </div>
      </div>

      {/* Callout — in document flow, slight overlap up but reserves space below */}
      <div className="relative z-20 mx-auto -mt-10 w-full max-w-[26rem] sm:-mt-12 sm:max-w-[28rem]">
        <div className="flex items-center gap-3 rounded-xl border border-violet-100 bg-violet-50 px-4 py-3 shadow-[0_8px_24px_rgba(99,102,241,0.12)] sm:px-5 sm:py-3.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
            <Rocket className="h-5 w-5 text-violet-600" strokeWidth={2} />
          </span>
          <div className="min-w-0 text-left">
            <p className="text-sm font-bold text-[#1a1642]">{calloutTitle}</p>
            <p className="text-xs leading-relaxed text-slate-600">{calloutBody}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

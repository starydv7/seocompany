import { LUX_ACCENTS, withAlpha } from "@/components/lux/accents";
import { DM_HUB_CHANNELS } from "@/lib/digital-marketing/hub-elite-content";

const RADIUS = 39;

const NODES = DM_HUB_CHANNELS.map((channel, i) => {
  const angle = (-90 + (i * 360) / DM_HUB_CHANNELS.length) * (Math.PI / 180);
  return {
    ...channel,
    x: Math.round((50 + RADIUS * Math.cos(angle)) * 100) / 100,
    y: Math.round((50 + RADIUS * Math.sin(angle)) * 100) / 100,
  };
});

/** Every channel orbiting one growth engine; a card grid replaces the orbit on small screens. */
export default function DmEcosystemOrbit() {
  return (
    <>
      <div className="relative mx-auto hidden aspect-square w-full max-w-[38rem] md:block">
        <div aria-hidden className="absolute inset-[3%] rounded-full border border-stone-200/80" />
        <div aria-hidden className="lux-ring-spin absolute inset-[11%] rounded-full border border-dashed border-lux-gold/50" />
        <div aria-hidden className="lux-ring-spin-rev absolute inset-[26%] rounded-full border border-dashed border-lux-emerald/30" />
        <div
          aria-hidden
          className="absolute inset-[18%] rounded-full opacity-60 blur-2xl"
          style={{ background: "radial-gradient(circle, rgba(221,191,93,0.35), transparent 65%)" }}
        />

        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
          {NODES.map((node) => (
            <line
              key={node.label}
              x1="50"
              y1="50"
              x2={node.x}
              y2={node.y}
              stroke="rgba(143,108,29,0.5)"
              strokeWidth="0.35"
              strokeLinecap="round"
              className="lux-signal"
            />
          ))}
        </svg>

        <div className="lux-node absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-gradient-to-br from-white via-[#fbf3dc] to-[#f1e3b5] text-center shadow-[0_0_80px_-10px_rgba(221,191,93,0.8)] ring-1 ring-lux-gold/60">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-lux-bronze">Your brand</span>
          <span className="mt-1 font-serif text-2xl leading-tight text-stone-900">
            Growth
            <br />
            <span className="lux-gold-text italic">Engine</span>
          </span>
        </div>

        {NODES.map((node) => {
          const tone = LUX_ACCENTS[node.accent];
          return (
            <div
              key={node.label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <div className="lux-tile flex items-center gap-3 rounded-2xl bg-white/95 py-2.5 pl-2.5 pr-4 shadow-[0_18px_40px_-24px_rgba(80,60,20,0.5)] ring-1 ring-inset ring-stone-200">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: `linear-gradient(135deg, ${tone.from}, ${tone.to})`, boxShadow: `0 0 18px -4px ${tone.glow}` }}
                >
                  <node.icon className="h-[18px] w-[18px] text-lux-ink" strokeWidth={2.25} />
                </span>
                <span className="whitespace-nowrap text-sm font-semibold text-stone-900">{node.label}</span>
              </div>
            </div>
          );
        })}
      </div>

      <ul className="grid grid-cols-2 gap-3 md:hidden">
        {DM_HUB_CHANNELS.map((channel) => {
          const tone = LUX_ACCENTS[channel.accent];
          return (
            <li key={channel.label} className="rounded-2xl bg-white/80 p-4 ring-1 ring-inset ring-stone-200">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: `linear-gradient(135deg, ${tone.from}, ${tone.to})`, boxShadow: `0 0 18px -4px ${withAlpha(tone.glow, 0.5)}` }}
              >
                <channel.icon className="h-[18px] w-[18px] text-lux-ink" strokeWidth={2.25} />
              </span>
              <p className="mt-3 text-sm font-semibold text-stone-900">{channel.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-stone-500">{channel.desc}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

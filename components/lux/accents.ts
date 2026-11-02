export type LuxAccent = { from: string; to: string; glow: string };

export const LUX_ACCENTS = {
  gold: { from: "#f3e3a6", to: "#ddbf5d", glow: "rgba(221,191,93,0.45)" },
  emerald: { from: "#7ee8c7", to: "#50b444", glow: "rgba(80,180,68,0.42)" },
  violet: { from: "#b9a6ff", to: "#6c47ff", glow: "rgba(108,71,255,0.45)" },
  sky: { from: "#9be7ff", to: "#2096ff", glow: "rgba(32,150,255,0.45)" },
  rose: { from: "#ffc2d6", to: "#ef5f9d", glow: "rgba(239,95,157,0.42)" },
} satisfies Record<string, LuxAccent>;

export function withAlpha(rgba: string, alpha: number) {
  return rgba.replace(/[\d.]+\)$/, `${alpha})`);
}

/** `ink` is the readable text shade of the accent on the cream background. */
export type LuxAccent = { from: string; to: string; glow: string; ink: string };

export const LUX_ACCENTS = {
  gold: { from: "#f3e3a6", to: "#ddbf5d", glow: "rgba(221,191,93,0.45)", ink: "#8f6c1d" },
  emerald: { from: "#7ee8c7", to: "#50b444", glow: "rgba(80,180,68,0.42)", ink: "#2f7d27" },
  violet: { from: "#b9a6ff", to: "#6c47ff", glow: "rgba(108,71,255,0.45)", ink: "#5534d4" },
  sky: { from: "#9be7ff", to: "#2096ff", glow: "rgba(32,150,255,0.45)", ink: "#0b6cc0" },
  rose: { from: "#ffc2d6", to: "#ef5f9d", glow: "rgba(239,95,157,0.42)", ink: "#c2366f" },
} satisfies Record<string, LuxAccent>;

export type LuxAccentName = keyof typeof LUX_ACCENTS;

export function withAlpha(rgba: string, alpha: number) {
  return rgba.replace(/[\d.]+\)$/, `${alpha})`);
}

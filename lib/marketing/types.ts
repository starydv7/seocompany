import type { LucideIcon } from "lucide-react";
import type { LuxAccentName } from "@/components/lux/accents";
import type {
  EliteBenefit,
  EliteFaq,
  EliteHeading,
  EliteOffering,
  EliteStep,
} from "@/lib/design-and-development/elite-content";

export type MarketingConsoleData = {
  eyebrow: string;
  title: string;
  /** Exactly four KPI tiles; `points` is a polyline in a 100x30 box (lower y = higher value). */
  metrics: { label: string; value: string; points: string }[];
  barsLabel: string;
  bars: number[];
  mixLabel: string;
  mix: { label: string; pct: number }[];
  floatA: { icon: LucideIcon; label: string; value: string };
  floatB: { icon: LucideIcon; label: string; value: string };
};

export type MarketingCard = {
  icon: LucideIcon;
  title: string;
  kicker: string;
  description: string;
  accent: LuxAccentName;
  items: string[];
  href?: string;
  /** In-page anchor id, e.g. for links like /hire-developers#app-developers. */
  anchor?: string;
};

export type MarketingPanel = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  tiles: { title: string; body?: string }[];
  tint: LuxAccentName;
  href?: string;
  linkLabel?: string;
};

export type MarketingPage = {
  route: string;
  name: string;
  accent: LuxAccentName;
  hero: {
    pill: string;
    title: string;
    accent: string;
    pillars: string[];
    intro: string;
    cta: string;
    secondaryCta?: string;
    highlights: { icon: LucideIcon; title: string; caption: string }[];
  };
  console: MarketingConsoleData;
  ticker: string[];
  services: EliteHeading & { aside: string; items: MarketingCard[] };
  orbit: EliteHeading & {
    points: string[];
    center: { eyebrow: string; title: string; accent: string };
    nodes: { label: string; icon: LucideIcon; accent: LuxAccentName }[];
  };
  systems: EliteHeading & { items: EliteOffering[] };
  split?: EliteHeading & { panels: [MarketingPanel, MarketingPanel] };
  process: EliteHeading & { steps: EliteStep[] };
  stack?: EliteHeading & { groups: { title: string; items: string[] }[] };
  /** Role anchor on /hire-developers. */
  hire?: { roleId: string; title: string; body: string };
  statement: EliteHeading & { quote: string; benefits: EliteBenefit[] };
  industries: EliteHeading & { items: string[] };
  faqs: EliteFaq[];
  related: string[];
  cta: EliteHeading;
};

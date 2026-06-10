import {
  BarChart3,
  Compass,
  LineChart,
  MapPin,
  PieChart,
  Search,
  Target,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

export const strategyHero = {
  badge: "DIGITAL MARKETING STRATEGY",
  titleBefore: "Build a Strong Strategy. Drive Real",
  titleAccent: "Growth.",
  subtitle:
    "A strong digital marketing strategy is the foundation of every successful campaign. We help you connect your brand with the right audience through the right channels — with clarity, focus, and measurable outcomes.",
  cta: "Start Your Strategy",
  spokes: [
    { label: "Audience", desc: "Understand the right people", icon: Users, position: "top" as const },
    { label: "Channels", desc: "Choose the right places", icon: MapPin, position: "right" as const },
    { label: "Results", desc: "Drive measurable growth", icon: TrendingUp, position: "bottom" as const },
    { label: "Strategy", desc: "Build the right plan", icon: Compass, position: "left" as const },
  ],
} as const;

export const strategyProcess = {
  title: "Our Strategic Process",
  steps: [
    {
      num: "1",
      title: "Market & Competitor Research",
      desc: "Researching market trends and opportunities.",
      icon: Search,
    },
    {
      num: "2",
      title: "Audience Analysis",
      desc: "Understanding behavior, pain points, and intent.",
      icon: Users,
    },
    {
      num: "3",
      title: "Strategy Planning",
      desc: "Building a custom strategy aligned with goals.",
      icon: Target,
    },
    {
      num: "4",
      title: "Channel Strategy",
      desc: "Selecting and prioritizing the most effective channels.",
      icon: MapPin,
    },
    {
      num: "5",
      title: "Performance Roadmap",
      desc: "Creating a clear roadmap with measurable KPIs.",
      icon: LineChart,
    },
  ],
} as const;

export const strategyFocus = {
  title: "Key Areas We Focus On",
  items: [
    {
      title: "Goal Setting",
      description: "Defining clear, measurable goals.",
      icon: Target,
    },
    {
      title: "Market Positioning",
      description: "Identifying unique value and brand position.",
      icon: Compass,
    },
    {
      title: "Audience Segmentation",
      description: "Segmenting the audience for the right message.",
      icon: Users,
    },
    {
      title: "Channel Planning",
      description: "Planning the right mix of channels.",
      icon: MapPin,
    },
    {
      title: "Budget Allocation",
      description: "Allocating budgets to maximize ROI.",
      icon: Wallet,
    },
    {
      title: "Performance Measurement",
      description: "Defining KPIs and tracking systems.",
      icon: BarChart3,
    },
  ],
} as const;

export const strategyWhy = {
  title: "Why Strategy Matters",
  points: [
    "It helps you reach the right audience",
    "It ensures the right message on the right channel",
    "It improves ROI and reduces wasted spend",
    "It creates a clear path for long-term growth",
  ],
  chartTitle: "Strategy Overview",
} as const;

export const strategyFinalCta = {
  title: "Ready to Build a Winning Digital Marketing Strategy?",
  subtitle:
    "Partner with strategists who turn data into direction — and direction into measurable growth for your brand.",
  cta: "Get Started Now",
} as const;

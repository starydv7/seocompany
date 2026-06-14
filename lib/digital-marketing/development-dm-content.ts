import {
  BarChart3,
  Code2,
  Filter,
  LayoutDashboard,
  LineChart,
  Settings,
  Target,
  Users,
  Workflow,
} from "lucide-react";

export const developmentDmHero = {
  badge: "DIGITAL MARKETING DEVELOPMENT",
  title: "We Build The Systems Behind Your Marketing",
  subtitle:
    "We don't just run campaigns. We build the systems, processes, tracking, automation and reporting required to scale marketing.",
  ctaPrimary: "Start Strategy Session",
  ctaSecondary: "Talk To Our Team",
  items: [
    "Tracking & Analytics Setup",
    "Marketing Automation",
    "Lead Funnel Development",
    "Conversion Tracking",
    "Custom Reporting Dashboards",
    "CRM & Platform Integration",
  ],
  dashboard: {
    title: "Marketing Overview",
    sidebar: ["Channels", "SEO", "Paid Ads", "Social Media", "Email Marketing", "Content Marketing"],
    metrics: [
      { label: "Audience Reach", value: "86k", color: "#7c3aed", points: "0,22 20,18 40,20 60,14 80,16 100,8" },
      { label: "Total Clicks", value: "12.4k", color: "#3b82f6", points: "0,24 25,20 50,22 75,12 100,10" },
      { label: "Conversions", value: "1.2k", color: "#10b981", points: "0,26 30,22 60,18 90,14 100,6" },
      { label: "Leads Generated", value: "450", color: "#f59e0b", points: "0,20 35,16 70,18 100,8" },
    ],
    channels: [
      { label: "Paid Ads", pct: 45, color: "#7c3aed" },
      { label: "SEO", pct: 30, color: "#3b82f6" },
      { label: "Email Marketing", pct: 15, color: "#10b981" },
      { label: "Social Media", pct: 10, color: "#f59e0b" },
    ],
    phone: {
      title: "Campaign Performance",
      metrics: [
        { label: "Reach", value: "25,140", color: "#3b82f6" },
        { label: "Engagement", value: "12,800", color: "#10b981" },
        { label: "Conversions", value: "2,450", color: "#ef4444" },
      ],
    },
  },
} as const;

export const developmentDmServices = {
  title: "Marketing Systems We Build",
  items: [
    {
      title: "Tracking Setup",
      desc: "Implement tracking for accurate data collection.",
      icon: Code2,
      color: "bg-violet-50 text-violet-600",
    },
    {
      title: "Analytics",
      desc: "Set up analytics to measure what matters.",
      icon: BarChart3,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Automation",
      desc: "Automate workflows to save time and nurture leads.",
      icon: Settings,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Lead Funnels",
      desc: "Build funnels that attract and convert quality leads.",
      icon: Filter,
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Conversion Tracking",
      desc: "Track conversions across channels and touchpoints.",
      icon: Target,
      color: "bg-pink-50 text-pink-600",
    },
    {
      title: "Reporting Dashboards",
      desc: "Custom dashboards for transparent reporting.",
      icon: LayoutDashboard,
      color: "bg-indigo-50 text-indigo-600",
    },
  ],
} as const;

export const developmentDmProcess = {
  title: "Our Digital Marketing Process",
  subtitle: "A proven framework from research to reporting.",
  steps: [
    { num: "01", title: "Research", color: "#7c3aed" },
    { num: "02", title: "Strategy", color: "#ec4899" },
    { num: "03", title: "Planning", color: "#f97316" },
    { num: "04", title: "Execution", color: "#10b981" },
    { num: "05", title: "Optimization", color: "#06b6d4" },
    { num: "06", title: "Reporting", color: "#6366f1" },
  ],
} as const;

export const developmentDmFoundations = {
  title: "Marketing Foundations",
  items: [
    { title: "Audience Research", desc: "Deep insights into your ideal customers.", icon: Users },
    { title: "Channel Planning", desc: "Right channels for maximum ROI.", icon: Workflow },
    { title: "Content Strategy", desc: "Content that attracts and converts.", icon: LineChart },
    { title: "Campaign Execution", desc: "Flawless launch across all channels.", icon: Target },
    { title: "Performance Tracking", desc: "Real-time metrics and KPI monitoring.", icon: BarChart3 },
    { title: "Continuous Optimization", desc: "Iterate and improve every campaign.", icon: Settings },
  ],
} as const;

export const developmentDmFinalCta = {
  title: "Build A Marketing System That Scales With Your Business",
  subtitle:
    "From tracking setup to custom dashboards — we build the infrastructure your marketing team needs to grow.",
  ctaPrimary: "Start Strategy Session",
  ctaSecondary: "Talk To Our Team",
} as const;

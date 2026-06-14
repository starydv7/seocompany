import {
  BarChart3,
  Building2,
  Car,
  Code2,
  Filter,
  GraduationCap,
  Heart,
  LayoutDashboard,
  LineChart,
  Mail,
  Megaphone,
  PenTool,
  Search,
  Settings,
  Share2,
  ShoppingBag,
  Stethoscope,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

export const dmHubHero = {
  badge: "DIGITAL MARKETING SERVICES",
  titleBefore: "Digital Marketing That Creates",
  titleAccent: "Predictable Growth",
  tagline: [
    { word: "Strategy.", color: "#7c3aed" },
    { word: "Execution.", color: "#14b8a6" },
    { word: "Optimization.", color: "#22c55e" },
  ],
  subtitle:
    "We build data-driven marketing systems that attract qualified traffic, convert leads, and scale revenue — with strategy, execution, and optimization working together.",
  items: [
    "Digital Marketing Strategy",
    "Digital Marketing Development",
    "Franchise Digital Marketing",
    "Enterprise Digital Marketing",
  ],
  ctaPrimary: "Start Strategy Session",
  ctaSecondary: "Explore Our Services",
  dashboard: {
    title: "Marketing Overview",
    sidebar: ["Channels", "SEO", "Paid Ads", "Social Media", "Email Marketing", "Content Marketing"],
    metrics: [
      { label: "Audience Reach", value: "86k", color: "#7c3aed", points: "0,22 20,18 40,20 60,14 80,16 100,8" },
      { label: "Total Clicks", value: "12.4k", color: "#3b82f6", points: "0,24 25,20 50,22 75,12 100,10" },
      { label: "Conversions", value: "1.2k", color: "#10b981", points: "0,26 30,22 60,18 90,14 100,6" },
      { label: "Leads Generated", value: "450", color: "#f59e0b", points: "0,20 35,16 70,18 100,8" },
    ],
    barHeights: [42, 58, 48, 72, 55, 68, 78, 62],
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

export const dmHubEcosystem = {
  title: "Complete Digital Marketing Ecosystem",
  subtitle: "Every channel connected to one growth engine — built to work together, not in silos.",
  hubLabel: "Digital Marketing",
  spokes: [
    { label: "SEO", desc: "Organic visibility that compounds over time.", icon: Search, color: "text-emerald-600 bg-emerald-50", position: "leftTop" as const },
    { label: "Paid Advertising", desc: "High-intent traffic on demand.", icon: Megaphone, color: "text-blue-600 bg-blue-50", position: "rightTop" as const },
    { label: "Content Marketing", desc: "Authority content that converts.", icon: PenTool, color: "text-orange-600 bg-orange-50", position: "leftMid" as const },
    { label: "Email Marketing", desc: "Nurture leads into customers.", icon: Mail, color: "text-teal-600 bg-teal-50", position: "rightMid" as const },
    { label: "Social Media", desc: "Engage audiences where they are.", icon: Share2, color: "text-pink-600 bg-pink-50", position: "leftBot" as const },
    { label: "Conversion Optimization", desc: "Turn more visitors into buyers.", icon: Target, color: "text-amber-600 bg-amber-50", position: "rightBot" as const },
    { label: "Analytics", desc: "Measure what matters and optimize.", icon: BarChart3, color: "text-indigo-600 bg-indigo-50", position: "bottom" as const },
  ],
} as const;

export const dmHubStrategy = {
  badge: "DIGITAL MARKETING STRATEGY",
  title: "Strategy That Aligns With Your Business Goals",
  subtitle: "A proven framework from research to optimization — tailored to your market, audience, and growth targets.",
  steps: [
    { title: "Research", desc: "Understand your market, competitors, and opportunities.", icon: Search },
    { title: "Audience", desc: "Define ideal customers and buying journeys.", icon: Users },
    { title: "Channels", desc: "Select the right mix of channels for ROI.", icon: Workflow },
    { title: "Content", desc: "Plan content that attracts and converts.", icon: PenTool },
    { title: "Execution", desc: "Launch campaigns with precision and speed.", icon: Zap },
    { title: "Optimization", desc: "Iterate based on real performance data.", icon: TrendingUp },
  ],
} as const;

export const dmHubDevelopment = {
  badge: "DIGITAL MARKETING DEVELOPMENT",
  title: "We Build The Systems Behind Your Marketing",
  subtitle:
    "We don't just run campaigns. We build the tracking, automation, funnels, and reporting infrastructure required to scale marketing with confidence.",
  items: [
    { title: "Tracking Setup", desc: "Implement tracking for accurate data collection across every touchpoint.", icon: Code2 },
    { title: "Analytics", desc: "Set up analytics to measure what matters and surface actionable insights.", icon: BarChart3 },
    { title: "Automation", desc: "Automate workflows to save time and nurture leads at scale.", icon: Settings },
    { title: "Lead Funnels", desc: "Build funnels that attract and convert quality leads consistently.", icon: Filter },
    { title: "Conversion Tracking", desc: "Track conversions across channels and attribute revenue correctly.", icon: Target },
    { title: "Reporting Dashboards", desc: "Custom dashboards for transparent, real-time reporting.", icon: LayoutDashboard },
  ],
} as const;

export const dmHubFranchise = {
  badge: "FRANCHISE DIGITAL MARKETING",
  title: "Marketing That Drives Growth Across All Locations",
  items: [
    "Centralized brand control with local flexibility",
    "Location-specific SEO and paid campaigns",
    "Multi-location reporting and performance tracking",
    "Scalable systems for franchise expansion",
  ],
  locations: [
    { name: "Location 01 — Austin, TX", status: "Active" },
    { name: "Location 02 — Denver, CO", status: "Active" },
    { name: "Location 03 — Phoenix, AZ", status: "Active" },
    { name: "Location 04 — Nashville, TN", status: "Active" },
  ],
} as const;

export const dmHubEnterprise = {
  badge: "ENTERPRISE DIGITAL MARKETING",
  title: "Enterprise Solutions For Large Scale Marketing",
  items: [
    "Cross-department marketing alignment",
    "Enterprise-grade tracking and attribution",
    "Multi-brand campaign management",
    "Advanced analytics and BI integration",
    "Dedicated account and strategy team",
  ],
  workflowTitle: "Enterprise Marketing Workflow",
  workflowSteps: ["Strategy", "Management", "Data", "Optimization", "Reporting"],
} as const;

export const dmHubProcess = {
  title: "Our Digital Marketing Process",
  subtitle: "A proven framework from research to reporting — built for predictable, compounding growth.",
  steps: [
    { num: "01", title: "Research", desc: "Understand your business, market, and competitive landscape.", color: "#7c3aed" },
    { num: "02", title: "Strategy", desc: "Build a data-driven marketing strategy aligned to goals.", color: "#ec4899" },
    { num: "03", title: "Planning", desc: "Map channels, content, budgets, and timelines.", color: "#f97316" },
    { num: "04", title: "Execution", desc: "Implement SEO, PPC, content, and automation.", color: "#10b981" },
    { num: "05", title: "Optimization", desc: "Analyze data and optimize for better performance.", color: "#06b6d4" },
    { num: "06", title: "Reporting", desc: "Transparent reporting and actionable insights.", color: "#6366f1" },
  ],
} as const;

export const dmHubFoundations = {
  title: "Marketing Foundations We Focus On",
  items: [
    { title: "Audience Research", desc: "Deep insights into your ideal customers and buying behavior.", icon: Users },
    { title: "Channel Planning", desc: "Right channels selected for maximum ROI and reach.", icon: Workflow },
    { title: "Content Strategy", desc: "Content that attracts, educates, and converts.", icon: LineChart },
    { title: "Performance Tracking", desc: "Real-time metrics and KPI monitoring across campaigns.", icon: BarChart3 },
    { title: "Conversion Optimization", desc: "Improve conversion rates at every funnel stage.", icon: Target },
    { title: "Growth Planning", desc: "Long-term roadmaps for sustainable, scalable growth.", icon: TrendingUp },
  ],
} as const;

export const dmHubWhyChoose = {
  title: "Why Businesses Choose Our Digital Marketing Services",
  items: [
    { title: "Strategic Planning", desc: "Every campaign starts with clear goals and a data-backed plan.", icon: Target },
    { title: "Transparent Reporting", desc: "Real-time dashboards so you always know what's working.", icon: BarChart3 },
    { title: "Scalable Systems", desc: "Infrastructure that grows with your business.", icon: Settings },
    { title: "Data-Driven Decisions", desc: "Optimize based on metrics, not assumptions.", icon: LineChart },
    { title: "Long-Term Growth", desc: "Strategies built for compounding results over time.", icon: TrendingUp },
    { title: "Continuous Optimization", desc: "We iterate and improve every campaign continuously.", icon: Zap },
  ],
} as const;

export const dmHubIndustries = {
  title: "Industries We Support",
  items: [
    { label: "Healthcare", icon: Stethoscope },
    { label: "Education", icon: GraduationCap },
    { label: "Finance", icon: Building2 },
    { label: "Retail", icon: ShoppingBag },
    { label: "Technology", icon: Code2 },
    { label: "Professional Services", icon: Users },
    { label: "Real Estate", icon: Building2 },
    { label: "Franchise Businesses", icon: Car },
  ],
} as const;

export const dmHubFinalCta = {
  title: "Build A Marketing System That Scales With Your Business",
  subtitle:
    "From strategy to systems to execution — we help you attract more customers, convert more leads, and grow revenue predictably.",
  ctaPrimary: "Start Strategy Session",
  ctaSecondary: "Talk To Our Team",
} as const;

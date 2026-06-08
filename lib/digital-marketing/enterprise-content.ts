import {
  BarChart3,
  Building2,
  Database,
  DollarSign,
  FileText,
  Globe,
  Heart,
  Layers,
  MapPin,
  Monitor,
  MousePointerClick,
  Network,
  PieChart,
  Rocket,
  Search,
  Settings,
  Share2,
  ShoppingBag,
  ShoppingCart,
  Target,
  TrendingUp,
  Users,
  UtensilsCrossed,
  Zap,
} from "lucide-react";

export const enterpriseDmHero = {
  badge: "ENTERPRISE DIGITAL MARKETING",
  titleLine1: "Enterprise Digital Marketing Services for",
  titleAccent: "Scalable Business Growth",
  subtitle:
    "We help enterprise organizations build data-driven marketing systems that scale across teams, regions, and channels — driving measurable revenue growth and long-term market dominance.",
  features: [
    { label: "Data-Driven Strategies", icon: BarChart3 },
    { label: "Scalable Execution", icon: Rocket },
    { label: "Global Performance", icon: Globe },
    { label: "Measurable Growth", icon: TrendingUp },
  ],
  primaryCta: "Book a Free Strategy Call",
  secondaryCta: "Explore Our Services",
  secondaryHref: "#enterprise-services",
  metrics: [
    { label: "SEO Visibility", delta: "+184%", sub: "vs last 30 days", lineColor: "#a78bfa" },
    { label: "PPC Conversions", delta: "+126%", sub: "vs last 30 days", lineColor: "#60a5fa" },
    { label: "Leads Generated", delta: "+245%", sub: "vs last 30 days", lineColor: "#4ade80" },
  ],
  revenue: {
    center: "$24.8M",
    centerLabel: "Total Revenue",
    segments: [
      { label: "Organic Search", pct: 35, color: "#8b5cf6" },
      { label: "Paid Search", pct: 28, color: "#3b82f6" },
      { label: "Social Media", pct: 18, color: "#22c55e" },
      { label: "Email", pct: 12, color: "#f59e0b" },
      { label: "Other", pct: 7, color: "#eab308" },
    ],
  },
  channels: [
    { label: "Organic Search", pct: 72, color: "#8b5cf6" },
    { label: "Paid Search", pct: 58, color: "#3b82f6" },
    { label: "Social Media", pct: 45, color: "#22c55e" },
    { label: "Email Marketing", pct: 38, color: "#f59e0b" },
    { label: "Display Ads", pct: 32, color: "#ec4899" },
  ],
  journey: [
    { step: "Awareness", value: "2.4M", color: "#22c55e" },
    { step: "Visit", value: "320K", color: "#3b82f6" },
    { step: "Engagement", value: "78K", color: "#8b5cf6" },
    { step: "Conversion", value: "16K", color: "#ec4899" },
  ],
} as const;

export const enterpriseDmWhy = {
  titleBefore: "Why Enterprise Digital Marketing Requires a ",
  titleAccent: "Different Approach",
  lead:
    "Enterprise digital marketing is not simply scaling up traditional campaigns. Large organizations require integrated systems, governance, and data-driven execution across every channel and market.",
  checklist: [
    "Operational Scalability",
    "Centralized Governance",
    "Advanced Analytics",
    "Automation Systems",
    "Multi-Market Targeting",
    "Cross-Channel Coordination",
    "Revenue Accountability",
  ],
  hubSpokes: [
    { label: "Global Markets", icon: Globe, position: "top-center" as const },
    { label: "Global Audiences", icon: Users, position: "mid-right" as const },
    { label: "Analytics & Automation", icon: BarChart3, position: "bottom-center" as const },
    { label: "Multiple Departments", icon: Network, position: "mid-left" as const },
  ],
  challengesTitle: "Enterprise Challenges",
  challenges: [
    "Disconnected Teams",
    "Inconsistent Branding",
    "Slow Campaign Deployment",
    "Duplicate Marketing Efforts",
    "Weak Attribution Models",
    "Poor Data Visibility",
    "Siloed Reporting Systems",
    "Limited Executive Visibility",
  ],
} as const;

export const enterpriseDmServices = {
  title: "Our Enterprise Digital Marketing Services",
  intro:
    "Integrated solutions designed to drive growth across every channel and every market.",
  items: [
    {
      title: "Enterprise SEO Services",
      shortName: "SEO",
      description:
        "Scale organic growth with technical SEO, content strategy, and authority building.",
      icon: Search,
      color: "#8b5cf6",
      bg: "#f5f3ff",
    },
    {
      title: "Enterprise Local SEO",
      shortName: "Local SEO",
      description:
        "Dominate local search across multiple locations, regions, and markets.",
      icon: MapPin,
      color: "#22c55e",
      bg: "#f0fdf4",
    },
    {
      title: "Enterprise PPC Management",
      shortName: "PPC",
      description:
        "High-performing ad campaigns that drive quality leads and revenue.",
      icon: MousePointerClick,
      color: "#3b82f6",
      bg: "#eff6ff",
    },
    {
      title: "Enterprise Content Marketing",
      shortName: "Content",
      description:
        "Strategic content that builds authority, engages audiences, and drives results.",
      icon: FileText,
      color: "#f59e0b",
      bg: "#fffbeb",
    },
    {
      title: "Enterprise Web Design & Development",
      shortName: "Web Design",
      description:
        "High-performance websites built for scale, speed, and conversions.",
      icon: Monitor,
      color: "#6366f1",
      bg: "#eef2ff",
    },
    {
      title: "Enterprise Marketing Automation",
      shortName: "Automation",
      description:
        "Automate workflows, nurture leads, and personalize at enterprise scale.",
      icon: Settings,
      color: "#10b981",
      bg: "#ecfdf5",
    },
    {
      title: "Enterprise Analytics & Reporting",
      shortName: "Analytics",
      description:
        "Advanced analytics, attribution, and reporting for data-driven decisions.",
      icon: PieChart,
      color: "#14b8a6",
      bg: "#f0fdfa",
    },
    {
      title: "Omnichannel Marketing",
      shortName: "Omnichannel",
      description:
        "Integrated campaigns across all channels for a seamless customer experience.",
      icon: Share2,
      color: "#ec4899",
      bg: "#fdf2f8",
    },
  ],
} as const;

export const enterpriseDmChallenges = {
  title: "Common Enterprise Marketing Challenges We Solve",
  items: [
    {
      title: "Disconnected Customer Experience",
      description:
        "Fragmented touchpoints across channels create inconsistent journeys that erode trust and reduce conversions.",
      icon: Users,
      color: "#8b5cf6",
      bg: "#f5f3ff",
    },
    {
      title: "Slow Campaign Execution",
      description:
        "Complex approval workflows and siloed teams delay launches, missing critical market windows.",
      icon: Zap,
      color: "#f59e0b",
      bg: "#fffbeb",
    },
    {
      title: "Poor Attribution",
      description:
        "Inability to connect marketing spend to revenue makes budget decisions guesswork at scale.",
      icon: Target,
      color: "#3b82f6",
      bg: "#eff6ff",
    },
    {
      title: "SEO Scalability",
      description:
        "Enterprise sites with thousands of pages need systematic SEO governance, not one-off fixes.",
      icon: Search,
      color: "#22c55e",
      bg: "#f0fdf4",
    },
    {
      title: "Data Silos",
      description:
        "Disconnected analytics, CRM, and ad platforms prevent a unified view of performance.",
      icon: Database,
      color: "#14b8a6",
      bg: "#f0fdfa",
    },
    {
      title: "Wasted Ad Spend",
      description:
        "Poor targeting, overlap, and lack of optimization drain budgets without measurable ROI.",
      icon: DollarSign,
      color: "#ec4899",
      bg: "#fdf2f8",
    },
  ],
} as const;

export const enterpriseDmIndustries = {
  title: "Industries We Serve",
  intro:
    "Tailored enterprise marketing strategies for organizations across every major vertical.",
  items: [
    { label: "Healthcare", icon: Heart },
    { label: "SaaS & Technology", icon: Layers },
    { label: "eCommerce", icon: ShoppingCart },
    { label: "Finance", icon: Building2 },
    { label: "Manufacturing", icon: Settings },
    { label: "Retail", icon: ShoppingBag },
    { label: "Hospitality", icon: UtensilsCrossed },
    { label: "...& More", icon: Globe },
  ],
} as const;

export const enterpriseDmProcess = {
  title: "Our Enterprise Marketing Process",
  steps: [
    {
      num: "01",
      title: "Audit & Discovery",
      desc: "Comprehensive analysis of your current marketing systems, data, and performance gaps.",
    },
    {
      num: "02",
      title: "Strategy & Planning",
      desc: "Custom roadmap aligned with business goals, markets, and cross-channel priorities.",
    },
    {
      num: "03",
      title: "Execution & Deployment",
      desc: "Coordinated deployment across SEO, paid, content, and automation at enterprise scale.",
    },
    {
      num: "04",
      title: "Optimization & Growth",
      desc: "Continuous testing, attribution refinement, and performance improvement cycles.",
    },
  ],
} as const;

export const enterpriseDmAnalytics = {
  title: "Data-Driven Attribution & Analytics",
  intro:
    "Connect every touchpoint to revenue with enterprise-grade attribution, real-time dashboards, and actionable insights.",
  flow: [
    { label: "Ad Click", icon: MousePointerClick },
    { label: "Website Visit", icon: Monitor },
    { label: "Engagement", icon: Users },
    { label: "Conversion", icon: Target },
    { label: "Revenue", icon: DollarSign },
  ],
  features: [
    { label: "Multi-Touch Attribution", icon: Network },
    { label: "Real-Time Dashboards", icon: BarChart3 },
    { label: "ROI Tracking", icon: TrendingUp },
    { label: "Customer Insights", icon: PieChart },
  ],
} as const;

export const enterpriseDmFaqs = [
  {
    q: "What makes enterprise digital marketing different?",
    a: "Enterprise marketing requires integrated systems across teams, regions, and channels — with governance, attribution, and scalability that traditional agency models cannot deliver.",
  },
  {
    q: "How long does it take to see results?",
    a: "Paid channels can show impact within weeks. SEO and content strategies typically build measurable traction over 3–6 months, with compounding returns at enterprise scale.",
  },
  {
    q: "Do you work with global organizations?",
    a: "Yes. We support multi-market campaigns, localized content, regional SEO, and unified reporting across international operations.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We serve healthcare, SaaS, eCommerce, finance, manufacturing, retail, hospitality, and other enterprise verticals with tailored strategies.",
  },
  {
    q: "How do you measure marketing ROI?",
    a: "We implement multi-touch attribution, real-time dashboards, and revenue-connected reporting so every channel's contribution is visible and actionable.",
  },
] as const;

export const enterpriseDmFinalCta = {
  title: "Ready to Scale Your Enterprise Growth?",
  subtitle:
    "Partner with a team that understands enterprise complexity and delivers measurable results.",
  checklist: [
    "Custom Strategy",
    "Scalable Solutions",
    "Proven Results",
  ],
  primaryLabel: "Book a Free Strategy Call",
  revenueBadge: "Revenue Growth +245%",
} as const;

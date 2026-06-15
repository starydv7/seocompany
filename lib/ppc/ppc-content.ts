import {
  BarChart3,
  Building2,
  Car,
  Compass,
  Cpu,
  GraduationCap,
  HeartPulse,
  Home,
  LineChart,
  MousePointerClick,
  PenLine,
  Search,
  Settings,
  Shield,
  ShoppingCart,
  Target,
  TrendingUp,
  Users,
  Video,
  Zap,
} from "lucide-react";

export const ppcHero = {
  badge: "PAY PER CLICK (PPC) MARKETING",
  titleBefore: "PPC Marketing That Drives Qualified Traffic &",
  titleAccent: "Maximum ROI",
  subtitle:
    "Data-driven PPC campaigns that deliver the right clicks, at the right time, at the right cost.",
  ctaPrimary: "Start Your Project",
  ctaSecondary: "Explore Our Services",
  items: [
    "Search Engine Marketing (SEM)",
    "Google Ads Management",
    "YouTube Ads Management",
    "Programmatic Advertising",
    "Lead Generation Services",
    "Franchise PPC",
    "Enterprise PPC",
  ],
  dashboard: {
    nav: ["Overview", "Campaigns", "Keywords", "Audiences", "Reports"],
    metrics: [
      { label: "Clicks", value: "24,580", change: "18.6%" },
      { label: "Impressions", value: "1.2M", change: "12.4%" },
      { label: "Conversions", value: "1,345", change: "24.7%" },
      { label: "Cost / Conv.", value: "$18.24", change: "8.2%", down: true },
    ],
    campaigns: [
      { label: "Brand Search", pct: 42 },
      { label: "Shopping Ads", pct: 28 },
      { label: "Display Retargeting", pct: 18 },
      { label: "YouTube Video", pct: 12 },
    ],
  },
} as const;

export const ppcServices = {
  title: "Our PPC Marketing Services",
  subtitle: "End-to-end paid advertising solutions built to maximize your return on ad spend.",
  items: [
    {
      title: "Search Engine Marketing (SEM)",
      desc: "Capture high-intent search traffic with precision-targeted campaigns.",
      icon: Search,
      bullets: [
        "Keyword research & strategy",
        "Search ad copywriting",
        "Bid management & optimization",
        "Quality score improvement",
      ],
    },
    {
      title: "Google Ads Management",
      desc: "Full-service Google Ads management to drive qualified leads and sales.",
      icon: MousePointerClick,
      bullets: [
        "Search, Display & Shopping ads",
        "Campaign structure & setup",
        "A/B testing & optimization",
        "Conversion tracking setup",
      ],
    },
    {
      title: "YouTube Ads Management",
      desc: "Engage your audience with compelling video ad campaigns on YouTube.",
      icon: Video,
      bullets: [
        "In-stream & discovery ads",
        "Video campaign strategy",
        "Audience targeting",
        "Performance analytics",
      ],
    },
    {
      title: "Programmatic Advertising",
      desc: "Automated, data-driven ad buying across premium display networks.",
      icon: Zap,
      bullets: [
        "Real-time bidding (RTB)",
        "Audience segmentation",
        "Cross-channel retargeting",
        "Brand safety controls",
      ],
    },
    {
      title: "Lead Generation Services",
      desc: "Paid campaigns engineered to deliver a steady flow of qualified leads.",
      icon: Target,
      bullets: [
        "Landing page optimization",
        "Lead form campaigns",
        "CRM integration",
        "Cost-per-lead optimization",
      ],
    },
    {
      title: "Franchise PPC",
      desc: "Localized PPC strategies to grow every franchise location profitably.",
      icon: Building2,
      bullets: [
        "Local campaign management",
        "Geo-targeted ad groups",
        "Brand compliance",
        "Multi-location reporting",
      ],
    },
    {
      title: "Enterprise PPC",
      desc: "Scalable paid media programs for large organizations and brands.",
      icon: Users,
      bullets: [
        "Multi-platform strategy",
        "Advanced attribution modeling",
        "Team collaboration tools",
        "Executive-level reporting",
      ],
    },
  ],
} as const;

export const ppcProcess = {
  title: "Our Proven PPC Process",
  subtitle: "A systematic approach to building, optimizing, and scaling your paid campaigns.",
  steps: [
    { num: "01", title: "Research & Analysis", desc: "Understand your market, competitors & audience.", icon: Search },
    { num: "02", title: "Strategy Development", desc: "Build a data-driven PPC strategy.", icon: Compass },
    { num: "03", title: "Campaign Setup", desc: "Structure campaigns, ad groups & targeting.", icon: Settings },
    { num: "04", title: "Optimization", desc: "Continuously test and improve performance.", icon: TrendingUp },
    { num: "05", title: "Reporting", desc: "Transparent insights on what drives results.", icon: BarChart3 },
    { num: "06", title: "Growth", desc: "Scale winning campaigns for long-term ROI.", icon: LineChart },
  ],
} as const;

export const ppcWhyChoose = {
  title: "Why Choose Our PPC Marketing Services?",
  items: [
    { label: "Data-Driven Strategies", desc: "Every decision backed by analytics and performance data.", icon: BarChart3 },
    { label: "ROI Focused", desc: "We optimize for conversions and revenue, not just clicks.", icon: Target },
    { label: "Transparent Reporting", desc: "Clear, actionable reports you can trust.", icon: LineChart },
    { label: "Certified Experts", desc: "Google Ads certified specialists managing your campaigns.", icon: Shield },
    { label: "Custom Strategies", desc: "Tailored plans built around your unique business goals.", icon: PenLine },
    { label: "Dedicated Account Manager", desc: "A single point of contact who knows your account inside out.", icon: Users },
  ],
} as const;

export const ppcPlatforms = {
  title: "Platforms We Work With",
  platforms: [
    "Google Ads",
    "YouTube",
    "Google Analytics",
    "Display & Video 360",
    "Google Tag Manager",
    "Search Ads 360",
    "Microsoft Advertising",
    "LinkedIn Ads",
  ],
} as const;

export const ppcIndustries = {
  title: "Industries We Serve",
  items: [
    { label: "E-commerce", icon: ShoppingCart },
    { label: "Healthcare", icon: HeartPulse },
    { label: "Education", icon: GraduationCap },
    { label: "Real Estate", icon: Home },
    { label: "Finance", icon: Shield },
    { label: "Technology", icon: Cpu },
    { label: "Automotive", icon: Car },
    { label: "Professional Services", icon: Users },
  ],
} as const;

export const ppcFaq = {
  title: "Frequently Asked Questions",
  items: [
    {
      q: "How much should I spend on PPC?",
      a: "Budget depends on your industry, goals, and competition. We recommend a starting budget that allows meaningful data collection, then scale based on ROAS performance.",
    },
    {
      q: "How quickly will I see results?",
      a: "PPC can drive traffic within hours of launch. Meaningful conversion data typically accumulates within 2–4 weeks as campaigns optimize.",
    },
    {
      q: "Which platforms are best for my business?",
      a: "Google Ads works for most businesses. We also leverage YouTube, Microsoft Advertising, and LinkedIn based on where your audience converts best.",
    },
    {
      q: "Do you manage landing pages?",
      a: "Yes. We optimize landing pages for conversion rate, ensuring your ad spend translates into leads and sales.",
    },
    {
      q: "How do you track conversions?",
      a: "We set up Google Tag Manager, conversion pixels, and GA4 event tracking to measure every lead, sale, and micro-conversion accurately.",
    },
  ],
} as const;

export const ppcFinalCta = {
  title: "Ready to Get More Traffic, Leads & Sales with PPC?",
  subtitle:
    "Let's build a PPC strategy that drives qualified traffic, lowers your cost per acquisition, and maximizes your return on ad spend.",
  ctaPrimary: "Start Your Project",
  ctaSecondary: "Book a Free Consultation",
} as const;

import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Building2,
  Code2,
  Compass,
  Filter,
  Gauge,
  LayoutDashboard,
  LineChart,
  Mail,
  MapPin,
  Megaphone,
  PenTool,
  Search,
  Settings,
  Share2,
  ShoppingBag,
  Store,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";
import type { LuxAccentName } from "@/components/lux/accents";
import type { EliteBenefit, EliteFaq, EliteOffering, EliteStep } from "@/lib/design-and-development/elite-content";
import {
  DM_DEVELOPMENT_ROUTE,
  DM_ECOMMERCE_ROUTE,
  DM_ENTERPRISE_ROUTE,
  DM_FRANCHISE_ROUTE,
  DM_MARKETPLACE_ROUTE,
  DM_PPC_ROUTE,
  DM_STRATEGY_ROUTE,
} from "@/lib/digital-marketing/service-routes";

export type DmService = {
  href: string;
  title: string;
  kicker: string;
  description: string;
  icon: LucideIcon;
  accent: LuxAccentName;
  items: string[];
};

export const DM_HUB_TICKER = [
  "SEO",
  "Google Ads",
  "Meta Ads",
  "Content marketing",
  "Email automation",
  "Conversion optimisation",
  "Analytics & attribution",
  "Social media",
  "Local SEO",
  "Marketplace growth",
];

export const DM_HUB_SERVICES: DmService[] = [
  {
    href: DM_STRATEGY_ROUTE,
    title: "Digital Marketing Strategy",
    kicker: "The plan before the spend.",
    description: "Market research, audience mapping and a channel plan tied to revenue targets, so every spend has a purpose.",
    icon: Compass,
    accent: "gold",
    items: ["Market research", "Channel mix", "Budget planning", "KPI framework"],
  },
  {
    href: "/seo",
    title: "Search Engine Optimisation",
    kicker: "Rankings that compound.",
    description: "Technical, on-page, local and AI-search SEO that grows qualified organic traffic month after month.",
    icon: Search,
    accent: "emerald",
    items: ["Technical SEO", "Local SEO", "Content SEO", "AI search"],
  },
  {
    href: DM_PPC_ROUTE,
    title: "PPC & Paid Advertising",
    kicker: "High-intent traffic, on demand.",
    description: "Google, Meta and LinkedIn campaigns engineered around cost per lead and return on ad spend.",
    icon: Megaphone,
    accent: "sky",
    items: ["Google Ads", "Meta Ads", "Retargeting", "Landing pages"],
  },
  {
    href: "/social-media",
    title: "Social Media Marketing",
    kicker: "Attention that turns into demand.",
    description: "Content, community and paid social that build a brand people follow and buy from.",
    icon: Share2,
    accent: "rose",
    items: ["Content calendars", "Reels & video", "Community", "Paid social"],
  },
  {
    href: DM_ECOMMERCE_ROUTE,
    title: "eCommerce Marketing",
    kicker: "More orders, better margins.",
    description: "Shopping ads, product SEO, email flows and conversion work that lift revenue per visitor.",
    icon: ShoppingBag,
    accent: "violet",
    items: ["Shopping ads", "Product SEO", "Email flows", "CRO"],
  },
  {
    href: DM_MARKETPLACE_ROUTE,
    title: "Marketplace Marketing",
    kicker: "Win the buy box.",
    description: "Amazon, Flipkart and marketplace listings, ads and reviews optimised to rank and convert.",
    icon: Store,
    accent: "gold",
    items: ["Listing optimisation", "Sponsored ads", "A+ content", "Reviews"],
  },
  {
    href: DM_FRANCHISE_ROUTE,
    title: "Franchise Marketing",
    kicker: "One brand, every location.",
    description: "Central brand control with local SEO and campaigns for each franchise location.",
    icon: MapPin,
    accent: "emerald",
    items: ["Location pages", "Local campaigns", "Brand governance", "Roll-up reporting"],
  },
  {
    href: DM_ENTERPRISE_ROUTE,
    title: "Enterprise Marketing",
    kicker: "Scale without the chaos.",
    description: "Multi-brand, multi-region programmes with enterprise attribution and a dedicated strategy team.",
    icon: Building2,
    accent: "sky",
    items: ["Multi-brand", "Attribution", "BI integration", "Dedicated team"],
  },
  {
    href: DM_DEVELOPMENT_ROUTE,
    title: "Marketing Development",
    kicker: "The systems behind growth.",
    description: "Tracking, automation, funnels and dashboards that make marketing measurable and scalable.",
    icon: Code2,
    accent: "violet",
    items: ["Tracking setup", "Automation", "Funnels", "Dashboards"],
  },
];

export const DM_HUB_CHANNELS: { label: string; desc: string; icon: LucideIcon; accent: LuxAccentName }[] = [
  { label: "SEO", desc: "Organic visibility that compounds.", icon: Search, accent: "emerald" },
  { label: "Paid Ads", desc: "High-intent traffic on demand.", icon: Megaphone, accent: "sky" },
  { label: "Content", desc: "Authority content that converts.", icon: PenTool, accent: "gold" },
  { label: "Email", desc: "Nurture leads into customers.", icon: Mail, accent: "emerald" },
  { label: "Social", desc: "Engage audiences where they are.", icon: Share2, accent: "rose" },
  { label: "CRO", desc: "Turn more visitors into buyers.", icon: Target, accent: "gold" },
  { label: "Analytics", desc: "Measure what matters, then optimise.", icon: BarChart3, accent: "violet" },
];

export const DM_HUB_SYSTEMS: EliteOffering[] = [
  {
    icon: Code2,
    title: "Tracking Setup",
    body: "Clean, consented tracking across every page, form, call and checkout.",
    points: ["GA4 & Tag Manager", "Server-side tagging", "Call & form tracking"],
  },
  {
    icon: BarChart3,
    title: "Analytics",
    body: "Analytics configured around business outcomes, not vanity metrics.",
    points: ["Goal & event design", "Audience segments", "Cohort analysis"],
  },
  {
    icon: Settings,
    title: "Marketing Automation",
    body: "Workflows that score, nurture and route leads while your team sleeps.",
    points: ["Email & WhatsApp flows", "Lead scoring", "CRM sync"],
  },
  {
    icon: Filter,
    title: "Lead Funnels",
    body: "Landing pages and offers built to turn clicks into qualified pipeline.",
    points: ["High-converting pages", "A/B testing", "Lead magnets"],
  },
  {
    icon: Target,
    title: "Conversion Tracking",
    body: "Every conversion attributed to the campaign, keyword and creative that earned it.",
    points: ["Offline conversions", "Multi-touch attribution", "Ad platform feeds"],
  },
  {
    icon: LayoutDashboard,
    title: "Reporting Dashboards",
    body: "Live dashboards that show spend, leads and revenue in one place.",
    points: ["Looker Studio", "Executive summaries", "Weekly insights"],
  },
];

export const DM_HUB_FRANCHISE = {
  title: "Growth Across Every Location",
  body: "Centralised brand control with the local flexibility each franchise needs to win its neighbourhood.",
  points: [
    "Location-specific SEO and Google Business Profiles",
    "Local paid campaigns with shared creative",
    "Multi-location reporting in one dashboard",
    "Systems that scale as you open new units",
  ],
  locations: ["Flagship location", "City centre", "Suburban outlet", "New opening"],
};

export const DM_HUB_ENTERPRISE = {
  title: "Marketing at Enterprise Scale",
  body: "Programmes for multi-brand, multi-region organisations that need governance, data and speed.",
  points: [
    "Cross-department marketing alignment",
    "Enterprise-grade tracking and attribution",
    "Advanced analytics and BI integration",
    "A dedicated account and strategy team",
  ],
  workflow: [
    { title: "Strategy", body: "Goals, budgets and KPIs aligned across teams." },
    { title: "Management", body: "Campaigns coordinated across brands and regions." },
    { title: "Data", body: "One source of truth for every channel." },
    { title: "Reporting", body: "Executive-ready insight, every week." },
  ],
};

export const DM_HUB_PROCESS: EliteStep[] = [
  { title: "Research", body: "Your business, market, competitors and customers, understood in depth.", deliverable: "Market audit" },
  { title: "Strategy", body: "A data-driven plan that ties every channel to a business goal.", deliverable: "Growth strategy" },
  { title: "Planning", body: "Channels, content, budgets and timelines mapped out.", deliverable: "90-day roadmap" },
  { title: "Execution", body: "SEO, ads, content and automation launched with precision.", deliverable: "Live campaigns" },
  { title: "Optimisation", body: "Weekly testing and tuning based on real performance data.", deliverable: "Test log" },
  { title: "Reporting", body: "Transparent reports with clear next steps.", deliverable: "Monthly report" },
];

export const DM_HUB_BENEFITS: EliteBenefit[] = [
  { icon: Workflow, title: "Strategy first", body: "Every campaign starts with clear goals and a data-backed plan." },
  { icon: Gauge, title: "Transparent reporting", body: "Live dashboards so you always know what is working and why." },
  { icon: LineChart, title: "Data-driven decisions", body: "We optimise on metrics, never on assumptions." },
  { icon: TrendingUp, title: "Compounding growth", body: "SEO, content and automation that keep paying back over time." },
];

export const DM_HUB_INDUSTRIES = [
  "Healthcare",
  "Education",
  "Finance",
  "Retail",
  "Technology",
  "Professional Services",
  "Real Estate",
  "Franchises",
];

export const DM_HUB_FAQS: EliteFaq[] = [
  {
    q: "What digital marketing services do you offer?",
    a: "Digital marketing strategy, SEO, PPC and paid advertising, social media marketing, eCommerce and marketplace marketing, franchise and enterprise marketing, and the tracking, automation and reporting systems behind them.",
  },
  {
    q: "How long does it take to see results from digital marketing?",
    a: "Paid advertising can generate leads within days of launch. SEO and content usually show meaningful growth in three to six months and keep compounding after that.",
  },
  {
    q: "How do you measure success?",
    a: "We agree KPIs up front, usually qualified leads, cost per lead, revenue and return on ad spend, and track them in a live dashboard you can open any time.",
  },
  {
    q: "Do you work with small businesses as well as enterprises?",
    a: "Yes. We work with startups, local businesses, franchises and enterprises, and scale the strategy, channels and budget to fit each one.",
  },
  {
    q: "Can you also build our website and landing pages?",
    a: "Yes. Our in-house design and development team builds fast, SEO-ready websites and landing pages, so marketing and development work as one.",
  },
  {
    q: "How do we get started?",
    a: "Book a free strategy session. We review your current marketing, identify the biggest opportunities and share a clear plan with recommended next steps.",
  },
];

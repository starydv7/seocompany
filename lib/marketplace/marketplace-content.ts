import {
  BarChart3,
  Cpu,
  LineChart,
  Megaphone,
  Palette,
  PenLine,
  Radio,
  Search,
  Settings,
  Shield,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

export const marketplaceHero = {
  badge: "ONLINE MARKETPLACE MARKETING",
  titleBefore: "Online Marketplace Marketing That Drives",
  titleAccent: "Visibility, Sales & Growth",
  subtitle:
    "End-to-end marketplace marketing solutions that help your brand stand out, rank higher, and sell more on Amazon and leading online marketplaces.",
  ctaPrimary: "Start Your Project",
  ctaSecondary: "Explore Our Services",
  items: [
    "Amazon Marketing Services",
    "Amazon SEO",
    "Amazon Advertising / PPC",
    "Amazon Storefront & Branding",
    "Amazon Seller Consulting",
    "Amazon Posts Management",
    "Amazon DSP Advertising Management",
    "Target Plus Marketplace",
  ],
  dashboard: {
    nav: ["Overview", "Listings", "Advertising", "Inventory", "Reports"],
    metrics: [
      { label: "Total Sales", value: "$84.2K", change: "22.4%" },
      { label: "Orders", value: "1,842", change: "18.6%" },
      { label: "ACOS", value: "18.2%", change: "4.1%", down: true },
      { label: "Impressions", value: "2.4M", change: "31.2%" },
    ],
    categories: [
      { label: "Electronics", pct: 34 },
      { label: "Home & Kitchen", pct: 24 },
      { label: "Health & Beauty", pct: 18 },
      { label: "Sports", pct: 14 },
      { label: "Other", pct: 10 },
    ],
  },
} as const;

export const marketplaceServices = {
  title: "Our Online Marketplace Marketing Services",
  subtitle: "Comprehensive marketplace solutions to grow your brand and maximize sales.",
  items: [
    {
      title: "Amazon Marketing Services",
      desc: "Full-service Amazon marketing to grow your brand and revenue.",
      icon: Store,
      bullets: ["Account setup & optimization", "Listing management", "Brand registry", "Competitive analysis", "Growth strategy"],
    },
    {
      title: "Amazon SEO",
      desc: "Optimize listings to rank higher in Amazon search results.",
      icon: Search,
      bullets: ["Keyword research", "Title & bullet optimization", "Backend search terms", "A+ Content", "Category ranking"],
    },
    {
      title: "Amazon Advertising / PPC",
      desc: "Data-driven Amazon PPC campaigns that maximize ROAS.",
      icon: Megaphone,
      bullets: ["Sponsored Products", "Sponsored Brands", "Sponsored Display", "Bid optimization", "ACOS management"],
    },
    {
      title: "Amazon Storefront & Branding",
      desc: "Build a premium Amazon brand store that converts visitors.",
      icon: Palette,
      bullets: ["Brand Store design", "A+ Content creation", "Brand story pages", "Store analytics", "Seasonal updates"],
    },
    {
      title: "Amazon Seller Consulting",
      desc: "Expert guidance to scale your Amazon business profitably.",
      icon: Users,
      bullets: ["Account audits", "Growth roadmaps", "Pricing strategy", "Inventory planning", "Policy compliance"],
    },
    {
      title: "Amazon Posts Management",
      desc: "Engage shoppers with branded Amazon Posts content.",
      icon: PenLine,
      bullets: ["Content calendar", "Post creation", "Brand storytelling", "Engagement tracking", "Cross-promotion"],
    },
    {
      title: "Amazon DSP Advertising Management",
      desc: "Programmatic display ads to reach shoppers on and off Amazon.",
      icon: Radio,
      bullets: ["Audience targeting", "Retargeting campaigns", "Brand awareness", "Creative development", "Performance reporting"],
    },
    {
      title: "Target Plus Marketplace",
      desc: "Expand to Target Plus with optimized listings and strategy.",
      icon: ShoppingBag,
      bullets: ["Seller onboarding", "Listing optimization", "Catalog management", "Promotional strategy", "Performance tracking"],
    },
  ],
} as const;

export const marketplaceProcess = {
  title: "Our Marketplace Marketing Process",
  subtitle: "A proven framework for growing your presence on online marketplaces.",
  steps: [
    { num: "01", title: "Research & Analysis", desc: "Understand your market, competitors & opportunities.", icon: Search, color: "#7c3aed" },
    { num: "02", title: "Strategy Planning", desc: "Build a data-driven marketplace growth plan.", icon: Settings, color: "#ec4899" },
    { num: "03", title: "Listing Optimization", desc: "Optimize product listings for search & conversion.", icon: PenLine, color: "#f97316" },
    { num: "04", title: "Advertising Launch", desc: "Launch and manage paid campaigns.", icon: Megaphone, color: "#22c55e" },
    { num: "05", title: "Optimization", desc: "Continuously improve performance & ROAS.", icon: TrendingUp, color: "#3b82f6" },
    { num: "06", title: "Scaling & Growth", desc: "Scale winning strategies for long-term growth.", icon: BarChart3, color: "#7c3aed" },
  ],
} as const;

export const marketplaceWhyChoose = {
  title: "Why Choose Our Marketplace Marketing?",
  items: [
    { label: "Data-Driven Strategies", desc: "Every decision backed by marketplace analytics.", icon: BarChart3 },
    { label: "ROI Focused", desc: "We optimize for sales and profit, not just visibility.", icon: Target },
    { label: "Platform Expertise", desc: "Deep knowledge of Amazon and marketplace algorithms.", icon: Cpu },
    { label: "Transparent Reporting", desc: "Clear insights on sales, ACOS, and growth metrics.", icon: LineChart },
    { label: "Custom Solutions", desc: "Strategies tailored to your products and goals.", icon: Sparkles },
    { label: "Dedicated Support", desc: "A team committed to your marketplace success.", icon: Users },
  ],
} as const;

export const marketplacePlatforms = {
  title: "Marketplaces We Work On",
  platforms: ["Amazon", "Flipkart", "Meesho", "Myntra", "Ajio", "Nykaa"],
} as const;

export const marketplaceIndustries = {
  title: "Industries We Serve",
  items: [
    { label: "E-commerce", icon: ShoppingCart },
    { label: "Consumer Goods", icon: ShoppingBag },
    { label: "Electronics", icon: Cpu },
    { label: "Health & Beauty", icon: Sparkles },
    { label: "Home & Kitchen", icon: Store },
    { label: "Fashion & Apparel", icon: ShoppingBag },
    { label: "Sports & Outdoors", icon: Target },
    { label: "Baby & Kids", icon: Users },
  ],
} as const;

export const marketplaceFaq = {
  title: "Frequently Asked Questions",
  items: [
    {
      q: "Which marketplaces do you specialize in?",
      a: "We specialize in Amazon, Flipkart, Meesho, Myntra, Ajio, Nykaa, and Target Plus — with deep expertise in Amazon marketing.",
    },
    {
      q: "How long before I see sales growth?",
      a: "Most sellers see measurable improvements within 30–60 days. PPC campaigns can drive results within the first week of launch.",
    },
    {
      q: "Do you manage Amazon PPC campaigns?",
      a: "Yes. We manage Sponsored Products, Sponsored Brands, Sponsored Display, and Amazon DSP campaigns with continuous optimization.",
    },
    {
      q: "Can you optimize my existing listings?",
      a: "Absolutely. We audit and optimize titles, bullets, images, A+ Content, and backend keywords to improve rankings and conversions.",
    },
    {
      q: "What is a good ACOS for Amazon ads?",
      a: "A healthy ACOS depends on your margins — typically 15–25% for established products. We optimize continuously to improve ROAS.",
    },
    {
      q: "Do you help with brand registry?",
      a: "Yes. We assist with Amazon Brand Registry, Brand Store setup, and protecting your brand on the platform.",
    },
    {
      q: "Can you manage multiple marketplaces?",
      a: "Yes. We manage multi-marketplace strategies across Amazon, Flipkart, Meesho, and other platforms from a single team.",
    },
    {
      q: "What reporting do you provide?",
      a: "Monthly reports cover sales, orders, ACOS, impressions, top-performing SKUs, and strategic recommendations.",
    },
  ],
} as const;

export const marketplaceFinalCta = {
  title: "Ready to Grow Your Sales on Marketplaces?",
  subtitle:
    "Let's build a powerful strategy that increases visibility, drives sales, and grows your brand on Amazon and beyond.",
  ctaPrimary: "Start Your Project",
  ctaSecondary: "Book a Free Consultation",
} as const;

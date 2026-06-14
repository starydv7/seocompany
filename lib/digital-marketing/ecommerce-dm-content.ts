import {
  BarChart3,
  LineChart,
  Megaphone,
  Palette,
  Search,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Store,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export const ecommerceDmHero = {
  badge: "ECOMMERCE MARKETING SERVICES",
  titleBefore: "eCommerce Marketing That Drives Traffic, Sales & Long-Term",
  titleAccent: "Growth",
  subtitle:
    "We help online stores attract the right audience, convert visitors into customers, and scale revenue with data-driven eCommerce marketing strategies.",
  ctaPrimary: "Start Your Project",
  ctaSecondary: "Explore Services",
  items: [
    "eCommerce SEO",
    "eCommerce PPC",
    "eCommerce Optimization",
    "Shopify SEO",
    "Shopify Web Design",
    "eCommerce Web Design",
  ],
  dashboard: {
    nav: ["Dashboard", "Orders", "Products", "Customers", "Analytics", "Marketing", "Reports", "Settings"],
    metrics: [
      { label: "Total Revenue", value: "$24,560" },
      { label: "Sessions", value: "45,780" },
      { label: "Orders", value: "1,345" },
      { label: "Conversion Rate", value: "2.95%" },
    ],
    channels: [
      { label: "Organic Search", pct: 42 },
      { label: "Paid Search", pct: 28 },
      { label: "Direct", pct: 18 },
      { label: "Social Media", pct: 7 },
      { label: "Others", pct: 5 },
    ],
    phone: {
      title: "Sales Overview",
      products: ["Wireless Headphones", "Smart Watch", "Travel Backpack"],
    },
  },
} as const;

export const ecommerceDmServices = {
  title: "Our eCommerce Marketing Services",
  subtitle: "End-to-end marketing solutions built to grow your online store.",
  items: [
    {
      title: "eCommerce SEO",
      desc: "Rank higher and drive organic traffic that converts into sales.",
      icon: Search,
      bullets: [
        "Product page optimization",
        "Category SEO strategy",
        "Technical SEO audits",
        "Content marketing",
        "Link building",
      ],
    },
    {
      title: "eCommerce PPC",
      desc: "Targeted paid campaigns that maximize ROAS and scale profitably.",
      icon: Megaphone,
      bullets: [
        "Google Shopping ads",
        "Search & display campaigns",
        "Retargeting strategies",
        "Bid management",
        "Conversion tracking",
      ],
    },
    {
      title: "eCommerce Optimization",
      desc: "Improve conversion rates and average order value across your store.",
      icon: TrendingUp,
      bullets: [
        "CRO audits & testing",
        "Checkout optimization",
        "Cart abandonment recovery",
        "UX improvements",
        "A/B testing",
      ],
    },
    {
      title: "Shopify SEO",
      desc: "Specialized SEO for Shopify stores to dominate search results.",
      icon: Store,
      bullets: [
        "Shopify technical SEO",
        "App & theme optimization",
        "Collection page SEO",
        "Blog content strategy",
        "Schema markup",
      ],
    },
    {
      title: "Shopify Web Design",
      desc: "Beautiful, conversion-focused Shopify stores that sell.",
      icon: Palette,
      bullets: [
        "Custom theme design",
        "Mobile-first layouts",
        "Brand identity integration",
        "Product page design",
        "Speed optimization",
      ],
    },
    {
      title: "eCommerce Web Design",
      desc: "Stunning online stores built for performance and conversions.",
      icon: ShoppingCart,
      bullets: [
        "Custom store development",
        "Responsive design",
        "Payment integration",
        "Inventory management",
        "Multi-channel selling",
      ],
    },
  ],
} as const;

export const ecommerceDmProcess = {
  title: "Our Proven eCommerce Marketing Process",
  subtitle: "A systematic approach to growing your online store.",
  steps: [
    { num: "01", title: "Research", desc: "Understand your business, audience & competitors", color: "#22c55e" },
    { num: "02", title: "Strategy", desc: "Build a data-driven marketing strategy", color: "#10b981" },
    { num: "03", title: "Execution", desc: "Implement SEO, PPC & optimization tactics", color: "#14b8a6" },
    { num: "04", title: "Optimization", desc: "Analyze data and optimize campaigns", color: "#06b6d4" },
    { num: "05", title: "Growth", desc: "Scale strategies that drive sustainable growth", color: "#3b82f6" },
    { num: "06", title: "Reporting", desc: "Transparent reporting and actionable insights", color: "#6366f1" },
  ],
} as const;

export const ecommerceDmWhyChoose = {
  title: "Why Choose Our eCommerce Marketing Services?",
  items: [
    { label: "Data-Driven Strategies", icon: BarChart3 },
    { label: "ROI Focused", icon: Target },
    { label: "Transparent Reporting", icon: LineChart },
    { label: "Experienced Team", icon: Users },
    { label: "Tailored Solutions", icon: Settings },
    { label: "Long-Term Growth", icon: TrendingUp },
  ],
} as const;

export const ecommerceDmPlatforms = {
  title: "Platforms We Work With",
  platforms: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Wix", "Squarespace", "OpenCart", "PrestaShop"],
} as const;

export const ecommerceDmIndustries = {
  title: "Industries We Serve",
  items: [
    { label: "Fashion", icon: ShoppingBag },
    { label: "Electronics", icon: Zap },
    { label: "Health & Beauty", icon: Target },
    { label: "Home & Living", icon: Store },
    { label: "Food & Beverage", icon: ShoppingCart },
    { label: "Automotive", icon: Settings },
  ],
} as const;

export const ecommerceDmFaq = {
  title: "Frequently Asked Questions",
  items: [
    {
      q: "How long does it take to see results from eCommerce SEO?",
      a: "Most stores see measurable traffic improvements within 3–6 months. Competitive niches may take longer, but we focus on quick wins alongside long-term growth.",
    },
    {
      q: "Do you work with Shopify and WooCommerce?",
      a: "Yes. We specialize in Shopify, WooCommerce, Magento, BigCommerce, and custom eCommerce platforms.",
    },
    {
      q: "What is a good ROAS for eCommerce PPC?",
      a: "A healthy ROAS depends on your margins — typically 3:1 to 5:1. We optimize campaigns continuously to improve return on ad spend.",
    },
    {
      q: "Can you redesign my existing online store?",
      a: "Absolutely. We handle full store redesigns, migrations, and CRO improvements while preserving SEO equity and sales data.",
    },
  ],
} as const;

export const ecommerceDmFinalCta = {
  title: "Ready to Grow Your eCommerce Business?",
  subtitle: "Let's build a marketing strategy that drives traffic, conversions, and sustainable revenue growth.",
  ctaPrimary: "Start Your Project",
  ctaSecondary: "Book a Free Consultation",
} as const;

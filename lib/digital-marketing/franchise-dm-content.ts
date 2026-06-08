import {
  Award,
  BarChart3,
  Building2,
  Globe,
  Shield,
  Star,
  Car,
  CircleDollarSign,
  Copy,
  Dumbbell,
  Eye,
  EyeOff,
  FileCheck,
  FileText,
  GraduationCap,
  Heart,
  Layout,
  LayoutDashboard,
  MapPin,
  MousePointerClick,
  Palette,
  Rocket,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  UtensilsCrossed,
  Wrench,
} from "lucide-react";

export const franchiseDmHero = {
  badge: "FRANCHISE DIGITAL MARKETING EXPERTS",
  titleLine1: "Franchise Digital Marketing Services",
  titleAccent: "For Multi-Location Growth",
  subtitle:
    "We help franchise brands dominate local markets with data-driven strategies that scale across every location — boosting visibility, leads, and revenue nationwide.",
  features: [
    { label: "Centralized Control", icon: Building2 },
    { label: "Local Market Visibility", icon: MapPin },
    { label: "Scalable Growth", icon: TrendingUp },
    { label: "Stronger Brand Consistency", icon: Target },
  ],
  primaryCta: "Book a Free Strategy Call",
  secondaryCta: "Explore Our Services",
  secondaryHref: "#franchise-services",
  stats: [
    { value: "50+", label: "Locations Managed" },
    { value: "100+", label: "Markets Covered" },
    { value: "500K+", label: "Monthly Searches" },
    { value: "2X–5X", label: "Average ROI Growth" },
  ],
  cities: [
    { name: "Dallas", lift: 8 },
    { name: "Chicago", lift: 14 },
    { name: "Miami", lift: 10 },
    { name: "Phoenix", lift: 6 },
    { name: "Austin", lift: 4 },
  ],
} as const;

export const franchiseDmServices = {
  tag: "OUR SERVICES",
  title: "Complete Digital Marketing Solutions For Franchises",
  description:
    "From local SEO to paid media, we deliver integrated marketing systems built specifically for multi-location franchise growth.",
  viewAllLabel: "View All Services",
  items: [
    {
      title: "Franchise SEO",
      description: "Dominate national and local search with scalable SEO built for franchise networks.",
      icon: Search,
      href: "/seo/franchise",
    },
    {
      title: "Local SEO",
      description: "Rank in Google Maps and the local pack across every franchise territory.",
      icon: MapPin,
      href: "/seo/local",
    },
    {
      title: "PPC Management",
      description: "High-intent paid campaigns that drive qualified leads at the location level.",
      icon: MousePointerClick,
      href: "#",
    },
    {
      title: "GBP Optimization",
      description: "Optimize Google Business Profiles for maximum local visibility and engagement.",
      icon: Building2,
      href: "#",
    },
    {
      title: "Content Marketing",
      description: "Localized content that builds authority without duplicate content penalties.",
      icon: FileText,
      href: "#",
    },
    {
      title: "Web Design & CRO",
      description: "Conversion-focused websites built for franchise scale, speed, and performance.",
      icon: Layout,
      href: "#",
    },
  ],
} as const;

export const franchiseDmMarket = {
  tag: "DOMINATE EVERY MARKET",
  title: "Your Brand. Everywhere It Matters.",
  subtitle:
    "Expand your franchise footprint with localized strategies that put your brand in front of customers in every market that matters.",
  features: [
    {
      title: "Higher Local Rankings",
      description: "Rank higher in local search across every market.",
      icon: BarChart3,
    },
    {
      title: "Consistent Brand Experience",
      description: "Unified messaging that builds trust at every touchpoint.",
      icon: Star,
    },
    {
      title: "Location-Level Lead Tracking",
      description: "Know exactly which locations drive your best leads.",
      icon: Eye,
    },
    {
      title: "Multi-Market Campaign Control",
      description: "Manage campaigns across regions from one dashboard.",
      icon: Globe,
    },
    {
      title: "Scalable Growth Framework",
      description: "Systems built to grow from 10 to 500+ locations.",
      icon: Shield,
    },
  ],
  hub: { name: "India", flag: "🇮🇳" },
  destinations: [
    { name: "United States", flag: "🇺🇸", x: 88, y: 108, labelX: 4, labelY: 8 },
    { name: "Brazil", flag: "🇧🇷", x: 142, y: 210, labelX: 2, labelY: 72 },
    { name: "United Kingdom", flag: "🇬🇧", x: 218, y: 82, labelX: 18, labelY: 2 },
    { name: "UAE", flag: "🇦🇪", x: 348, y: 128, labelX: 72, labelY: 12 },
    { name: "South Africa", flag: "🇿🇦", x: 278, y: 228, labelX: 38, labelY: 78 },
    { name: "China", flag: "🇨🇳", x: 418, y: 108, labelX: 82, labelY: 6 },
    { name: "Singapore", flag: "🇸🇬", x: 392, y: 178, labelX: 78, labelY: 48 },
    { name: "Australia", flag: "🇦🇺", x: 448, y: 238, labelX: 84, labelY: 82 },
  ],
  stats: [
    { value: "50+", label: "Countries Served", icon: Globe },
    { value: "1000+", label: "Locations Optimized", icon: MapPin },
    { value: "250M+", label: "Local Searches Captured", icon: Search },
    { value: "90%", label: "Client Retention Rate", icon: Award },
    { value: "2X", label: "Average ROI Growth", icon: TrendingUp },
  ],
} as const;

export const franchiseDmVs = {
  tag: "THE DIFFERENCE A STRUCTURED FRANCHISE MARKETING SYSTEM MAKES",
  title: "From Disconnected to Dominant",
  subtitle:
    "See how our structured system transforms your franchise digital presence and drives measurable growth across every location.",
  withoutTitle: "Without A Structured System",
  withTitle: "With Our Franchise System",
  without: [
    {
      title: "Duplicate location pages",
      description: "Search engines get confused and rankings suffer.",
      icon: Copy,
    },
    {
      title: "Inconsistent branding",
      description: "Different messaging creates a weak, fragmented brand.",
      icon: Palette,
    },
    {
      title: "Poor local visibility",
      description: "Locations don't show up where customers are searching.",
      icon: EyeOff,
    },
    {
      title: "Wasted ad spend",
      description: "Unoptimized campaigns lead to low ROI and high costs.",
      icon: CircleDollarSign,
    },
    {
      title: "No centralized reporting",
      description: "Scattered data makes it impossible to measure growth.",
      icon: BarChart3,
    },
  ],
  with: [
    {
      title: "Unique, optimized location pages",
      description: "Every location ranks higher with tailored, SEO-optimized pages.",
      icon: FileCheck,
    },
    {
      title: "Consistent brand messaging",
      description: "Unified brand voice builds trust and strengthens recognition.",
      icon: Award,
    },
    {
      title: "Enhanced local presence",
      description: "Show up in local searches, maps, and the moments that matter.",
      icon: Eye,
    },
    {
      title: "Higher ROI & sustainable growth",
      description: "Data-driven campaigns that deliver qualified leads and real results.",
      icon: TrendingUp,
    },
    {
      title: "Unified analytics dashboard",
      description: "Real-time insights across all locations in one place.",
      icon: LayoutDashboard,
    },
  ],
  bottomLine: {
    label: "The Bottom Line",
    textBefore: "A structured franchise marketing system doesn't just improve visibility—it drives",
    highlight: "predictable, measurable growth",
    textAfter: "for your brand across every location.",
  },
} as const;

export const franchiseDmProcess = {
  tag: "OUR PROVEN PROCESS",
  title: "A Simple, Proven Process That Drives Results",
  steps: [
    {
      num: "01",
      title: "Audit & Research",
      desc: "Deep dive into your franchise structure, markets, and current digital performance.",
      icon: BarChart3,
    },
    {
      num: "02",
      title: "Strategy & Planning",
      desc: "Custom roadmap balancing corporate brand goals with local market growth.",
      icon: Target,
    },
    {
      num: "03",
      title: "Execution",
      desc: "Coordinated rollout across SEO, paid media, content, and local channels.",
      icon: Rocket,
    },
    {
      num: "04",
      title: "Optimize & Scale",
      desc: "Continuous testing, reporting, and refinement at every location.",
      icon: TrendingUp,
    },
  ],
} as const;

export const franchiseDmFinalCta = {
  title: "Ready To Grow Your Franchise?",
  subtitle:
    "Partner with experts who understand multi-location complexity and deliver measurable local growth across every market.",
  primaryLabel: "Book a Free Strategy Call",
  milestones: [
    { label: "1 Location", x: 0 },
    { label: "10 Locations", x: 25 },
    { label: "50 Locations", x: 50 },
    { label: "100+ Locations", x: 75 },
    { label: "500+ Locations", x: 100 },
  ],
} as const;

export const franchiseDmFaqs = [
  {
    q: "How is franchise digital marketing different from standard marketing?",
    a: "Franchise marketing must balance corporate brand control with local market execution — requiring centralized systems, location-level optimization, and scalable reporting.",
  },
  {
    q: "Can you manage marketing for hundreds of locations?",
    a: "Yes. We build scalable frameworks for SEO, paid media, content, and analytics that work across dozens or hundreds of franchise territories.",
  },
  {
    q: "Do you work with both franchisors and franchisees?",
    a: "We support corporate teams needing brand consistency and franchise owners needing local visibility, leads, and promotional flexibility.",
  },
  {
    q: "How do you prevent duplicate content issues?",
    a: "We implement location-specific content strategies, proper site architecture, and canonical structures that protect SEO at scale.",
  },
] as const;

export const franchiseDmIndustries = {
  title: "Industries We Serve",
  items: [
    { label: "Healthcare", icon: Heart },
    { label: "Fitness", icon: Dumbbell },
    { label: "Restaurants", icon: UtensilsCrossed },
    { label: "Home Services", icon: Wrench },
    { label: "Education", icon: GraduationCap },
    { label: "Automotive", icon: Car },
    { label: "Beauty", icon: Sparkles },
  ],
} as const;

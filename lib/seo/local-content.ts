import {
  FileText,
  MapPin,
  Megaphone,
  Phone,
  Radio,
  Search,
  Shield,
  Star,
  Store,
  Users,
} from "lucide-react";

export const whyLocalSeo = {
  title: "Why Local SEO Matters More Than Ever",
  subtitle:
    "Customers search locally with high intent. If your business isn't visible, your competitors are getting the calls.",
  factors: [
    "Stronger local relevance",
    "Optimized Google Business Profile",
    "Consistent business information",
    "High-quality reviews",
    "Active engagement signals",
    "Trustworthy local authority",
  ],
  orbit: [
    { label: "Reviews", icon: Star, iconClass: "text-amber-500", angle: -90 },
    { label: "Local Citations", icon: FileText, iconClass: "text-emerald-600", angle: -18 },
    { label: "Customer Trust", icon: Users, iconClass: "text-violet-600", angle: 54 },
    { label: "Local Authority", icon: Shield, iconClass: "text-blue-600", angle: 126 },
    { label: "Google Business Profile", icon: Store, iconClass: "text-indigo-600", angle: 198 },
  ] as const,
  gbp: {
    name: "Your Business",
    rating: "4.9",
    reviewCount: "1,250",
    category: "Plumber in New York, NY",
    tabs: ["Overview", "Reviews", "Photos", "About"] as const,
    metrics: [
      { label: "Calls", value: "+320", delta: "+ 48%", icon: Phone },
      { label: "Website Clicks", value: "+1.2K", delta: "+ 36%" },
      { label: "Direction Requests", value: "+850", delta: "+ 32%" },
    ],
    ratingBars: [
      { stars: 5, pct: 88 },
      { stars: 4, pct: 8 },
      { stars: 3, pct: 2 },
      { stars: 2, pct: 1 },
      { stars: 1, pct: 1 },
    ],
  },
} as const;

export const localHero = {
  eyebrow: "Local SEO Services",
  titleBefore: "Local SEO Services That Drive ",
  titleHighlightParts: ["Calls,", "Traffic", "Local Customers"],
  titleMiddle: "& Real",
  heroSubhead:
    "We help local businesses rank higher in Google Maps and local search results so you can attract more nearby customers who are ready to call, visit, and buy.",
  intro: [
    "Most businesses do not have a traffic problem. They have a visibility problem.",
    "When customers search for services nearby, they usually choose businesses that appear in Google Maps, local search results, “near me” searches, and Google Business Profiles with strong reviews.",
    "If your business is not showing up consistently in local search, you are losing high-intent customers to competitors every single day.",
    "Our local SEO services help businesses improve local visibility, generate qualified leads, increase phone calls, and attract nearby customers actively searching for their products or services.",
    "Whether you operate a single location or multiple branches, local SEO helps your business become more visible where purchase intent is highest.",
  ],
  benefits: ["More Calls", "More Traffic", "More Customers", "More Revenue"],
  mapSearchQuery: "Plumber near me",
  businessRating: "4.9",
  flowSteps: [
    { title: "Customer Search", desc: "Searches for services nearby", icon: Search, color: "text-violet-600 bg-violet-50" },
    { title: "Google Maps", desc: "Finds local businesses", icon: MapPin, color: "text-violet-600 bg-violet-50" },
    { title: "Your Business", desc: "Gets discovered", icon: Radio, color: "text-fuchsia-600 bg-fuchsia-50" },
    { title: "Phone Call", desc: "You get the customer", icon: Phone, color: "text-teal-600 bg-teal-50" },
  ],
  statCards: [
    { value: "+312%", label: "Increase in Calls", icon: Phone, iconClass: "text-indigo-600 bg-indigo-50" },
    { value: "+185%", label: "Maps Visibility", icon: MapPin, iconClass: "text-emerald-600 bg-emerald-50" },
    { value: "+247%", label: "Local Leads", icon: Megaphone, iconClass: "text-amber-600 bg-amber-50" },
  ],
  performanceMetrics: [
    { label: "Views", value: "12.5K", delta: "+28%", spark: "#6366f1" },
    { label: "Clicks", value: "3.2K", delta: "+31%", spark: "#8b5cf6" },
    { label: "Calls", value: "842", delta: "+45%", spark: "#0ea5e9" },
    { label: "Direction Requests", value: "1.1K", delta: "+27%", spark: "#10b981" },
  ],
} as const;

export const localProblemsSection = {
  title: "Common Local SEO Problems We Solve",
  subtitle:
    "We fix the issues that are holding your business back from ranking locally.",
  problems: [
    {
      title: "Low Google Maps Visibility",
      subtitle: "You're not showing up in the local pack or Maps results.",
      visual: "maps" as const,
    },
    {
      title: "Inconsistent Business Info",
      subtitle: "Different NAP details confuse Google and customers.",
      visual: "nap" as const,
    },
    {
      title: "Weak Local Landing Pages",
      subtitle: "Generic pages don't rank for local searches.",
      visual: "pages" as const,
    },
    {
      title: "Poor Reviews & Reputation",
      subtitle: "Low ratings drive customers away and hurt rankings.",
      visual: "reviews" as const,
    },
    {
      title: "Weak Local Authority",
      subtitle: "Low trust signals = low rankings and visibility.",
      visual: "authority" as const,
    },
  ],
} as const;

export const localTrustBrands = [
  "Dental Care",
  "Fitness Zone",
  "HomeFix",
  "Cafe Aroma",
  "LegalFirst",
  "HealthPlus",
] as const;

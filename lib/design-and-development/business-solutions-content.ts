import {
  Building2,
  Cloud,
  Factory,
  GraduationCap,
  Heart,
  Landmark,
  Plane,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react";

export const businessSolutionsHero = {
  badge: "BUSINESS SOLUTIONS",
  titleBefore: "Business Solutions That Drive Real Impact",
  titleBlue: "Solve Challenges. Unlock Growth.",
  subtitle:
    "We design and build tailored digital solutions that streamline operations, enhance customer experiences, and drive efficiency across your organization.",
  ctaPrimary: "Get a Custom Solution",
  ctaSecondary: "Talk to an Expert",
  items: [
    "Custom Business Solutions",
    "Process Automation",
    "Data-Driven Insights",
    "System Integration",
    "Scalable & Flexible Architecture",
    "Enhanced Customer Experience",
    "Cost Optimization",
    "Ongoing Support & Maintenance",
  ],
  dashboard: {
    productName: "Your Business Ecosystem",
    nav: ["Overview", "Operations", "Customers", "Analytics", "Integrations", "Reports", "Settings"],
    performance: { label: "Revenue Growth", value: "+24.5%" },
    efficiency: { label: "Operational Efficiency", value: "82%", change: "+18.9%" },
    automation: { label: "Automated Workflows", value: "156", change: "+32%" },
    satisfaction: { label: "Customer Satisfaction", value: "4.8/5" },
    integrations: ["Salesforce", "HubSpot", "Slack", "Google Workspace"],
    architecture: ["Data Sources", "Business Logic", "Automation", "Analytics", "User Experience"],
  },
  serviceCards: [
    {
      title: "Enterprise Solutions",
      desc: "Streamline operations and accelerate digital transformation across your organization.",
      icon: Building2,
      accent: "purple",
    },
    {
      title: "E-Commerce Solutions",
      desc: "Create seamless shopping experiences that drive sales and grow your online business.",
      icon: ShoppingCart,
      accent: "green",
    },
    {
      title: "Customer Experience",
      desc: "Deliver personalized experiences that engage customers across every touchpoint.",
      icon: Users,
      accent: "orange",
    },
    {
      title: "Cloud Solutions",
      desc: "Build secure, scalable, and cost-effective cloud infrastructure for your business.",
      icon: Cloud,
      accent: "blue",
    },
    {
      title: "Data & Analytics",
      desc: "Turn raw data into actionable insights that power smarter business decisions.",
      icon: ShieldCheck,
      accent: "pink",
    },
  ],
  industries: [
    { label: "Healthcare", icon: Heart },
    { label: "FinTech", icon: Landmark },
    { label: "Retail", icon: ShoppingCart },
    { label: "Education", icon: GraduationCap },
    { label: "Real Estate", icon: Building2 },
    { label: "Logistics", icon: Truck },
    { label: "Manufacturing", icon: Factory },
    { label: "Travel", icon: Plane },
  ],
} as const;

export const BUSINESS_CARD_ACCENT: Record<
  string,
  { border: string; iconBg: string; iconColor: string; link: string }
> = {
  purple: {
    border: "border-t-violet-500",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    link: "text-violet-600",
  },
  green: {
    border: "border-t-emerald-500",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    link: "text-emerald-600",
  },
  orange: {
    border: "border-t-orange-500",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    link: "text-orange-600",
  },
  blue: {
    border: "border-t-blue-500",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    link: "text-blue-600",
  },
  pink: {
    border: "border-t-pink-500",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
    link: "text-pink-600",
  },
};

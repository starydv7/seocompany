import { BarChart3, Globe, Smartphone, Target, Zap } from "lucide-react";

export const webDevHero = {
  badge: "WEB DEVELOPMENT SERVICES",
  titleBefore: "Web Development That Builds Brands &",
  titleAccent: "Drives Results",
  subtitle:
    "High-performance websites and web applications that drive traffic, engage users, and generate business results.",
  ctaPrimary: "Start Your Project",
  ctaSecondary: "View Our Work",
  items: [
    "Corporate Websites",
    "Business Websites",
    "Portfolio Websites",
    "Landing Pages",
    "Admin Dashboards",
    "CRM & ERP Systems",
    "Analytics Platforms",
    "E-commerce Platforms",
    "Booking & Management Systems",
  ],
  features: [
    { label: "Lightning Fast", icon: Zap },
    { label: "SEO Optimized", icon: BarChart3 },
    { label: "Mobile Responsive", icon: Smartphone },
    { label: "Conversion Focused", icon: Target },
  ],
} as const;

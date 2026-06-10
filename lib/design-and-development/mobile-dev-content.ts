import { BarChart3, Shield, Smartphone, Zap } from "lucide-react";

export const mobileDevHero = {
  badge: "MOBILE APP DEVELOPMENT SERVICES",
  titleBefore: "Mobile App Development That Drives Engagement &",
  titleAccent: "Delivers Real Impact",
  subtitle:
    "We build high-performance mobile applications that delight users, drive engagement, and accelerate business growth.",
  ctaPrimary: "Start Your App Project",
  ctaSecondary: "View Our Work",
  items: [
    "iOS App Development",
    "Android App Development",
    "React Native Applications",
    "Cross-Platform Solutions",
    "UI/UX for Mobile Apps",
    "Real-Time Applications",
    "API Integration",
    "Push Notifications",
    "App Maintenance",
    "App Modernization",
  ],
  features: [
    { label: "High Performance", icon: Zap },
    { label: "Secure & Scalable", icon: Shield },
    { label: "Cross-Platform", icon: Smartphone },
    { label: "Analytics Ready", icon: BarChart3 },
  ],
  builtWith: ["React Native", "Swift", "Kotlin", "Firebase", "Node.js"],
} as const;

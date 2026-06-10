import { Accessibility, Gauge, MonitorSmartphone, Sparkles } from "lucide-react";

export const frontendDevHero = {
  badge: "FRONTEND DEVELOPMENT SERVICES",
  titleBefore: "Frontend Development That Creates Beautiful",
  titleTeal: "Experiences",
  titleGradient: "Users Love",
  subtitle:
    "We build fast, responsive, and interactive frontends that look stunning on every device and deliver exceptional user experiences.",
  ctaPrimary: "Start Your Frontend Project",
  ctaSecondary: "View Our Work",
  items: [
    "React.js Development",
    "Next.js Development",
    "TypeScript Applications",
    "Responsive Web Design",
    "Tailwind CSS Development",
    "Modern UI Development",
    "Component-Based Architecture",
    "Cross-Browser Compatibility",
    "Performance Optimization",
    "Accessibility & Usability",
  ],
  features: [
    { label: "Pixel Perfect", icon: Sparkles },
    { label: "Blazing Fast", icon: Gauge },
    { label: "Fully Responsive", icon: MonitorSmartphone },
    { label: "Accessible", icon: Accessibility },
  ],
  builtWith: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Sass", "HTML5", "CSS3"],
} as const;

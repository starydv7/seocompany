import {
  Eye,
  MonitorSmartphone,
  Palette,
  Search,
  Target,
  TestTube2,
  Users,
} from "lucide-react";

export const uiuxDevHero = {
  badge: "UI/UX DESIGN SERVICES",
  titleBefore: "UI/UX Design That Creates Meaningful",
  titleAccent: "Experiences Users Love",
  subtitle:
    "User-centered design from research to high-fidelity prototypes that delight users, drive engagement, and convert visitors into customers.",
  ctaPrimary: "Start Your UI/UX Project",
  ctaSecondary: "View Our Work",
  items: [
    "User Research & Analysis",
    "Wireframing & Prototyping",
    "Interaction Design",
    "Visual Design",
    "Mobile App UI Design",
    "Dashboard Design",
    "Design Systems",
    "Usability Testing",
    "User Journey Mapping",
    "Conversion Optimization",
  ],
  features: [
    { label: "User Centered", sub: "Design Approach", icon: Users },
    { label: "Pixel Perfect", sub: "Visual Quality", icon: Eye },
    { label: "Fully Responsive", sub: "All Devices", icon: MonitorSmartphone },
    { label: "Goal Oriented", sub: "Business Results", icon: Target },
  ],
  process: [
    { step: "1", title: "Discover", desc: "Understand users & business goals", icon: Search },
    { step: "2", title: "Define", desc: "Research & analyze user needs", icon: Target },
    { step: "3", title: "Design", desc: "Create wireframes & UI concepts", icon: Palette },
    { step: "4", title: "Prototype", desc: "Build interactive prototypes", icon: MonitorSmartphone },
    { step: "5", title: "Test & Refine", desc: "Test with users & improve", icon: TestTube2 },
  ],
  research: {
    total: "1,248",
    segments: [
      { label: "New Users", pct: 35, color: "#7c3aed" },
      { label: "Returning", pct: 45, color: "#ec4899" },
      { label: "Frequent", pct: 20, color: "#3b82f6" },
    ],
    goals: ["Find Products", "Easy Checkout", "Track Orders", "Get Support"],
  },
  usability: {
    successRate: 92,
    improvement: "+24%",
    metrics: [
      { label: "Easy Navigation", pct: 92 },
      { label: "Find Products Easily", pct: 86 },
      { label: "Fast Checkout", pct: 78 },
      { label: "Satisfaction Score", pct: 96, display: "4.8/5" },
    ],
  },
  designSystem: {
    colors: ["#7c3aed", "#ec4899", "#3b82f6", "#14b8a6", "#64748b", "#f8fafc"],
    tools: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Photoshop",
      "Illustrator",
      "InVision",
      "Maze",
      "Zeplin",
      "Notion",
    ],
  },
} as const;

import {
  Building2,
  Cloud,
  Code2,
  Globe,
  Layers,
  Link2,
  MonitorSmartphone,
  Palette,
  Rocket,
  Server,
  Smartphone,
  Briefcase,
  FileSearch,
  LayoutList,
  Paintbrush,
  TestTube2,
  UploadCloud,
  Wrench,
  PenTool,
  ShieldCheck,
} from "lucide-react";

export const softwareDevHero = {
  badge: "SOFTWARE DEVELOPMENT SERVICES",
  titleLines: [
    { text: "Software Development Services", accent: false },
    { text: "Built For Scale,", accent: false },
    { text: "Performance, And Long-Term Growth", accent: true },
  ],
  subtitle:
    "Custom software solutions tailored to your business needs, from startup MVPs to enterprise platforms.",
  ctaPrimary: "Start Your Project",
  ctaSecondary: "Book Consultation",
  stack: [
    { label: "Frontend", icon: MonitorSmartphone },
    { label: "Backend", icon: Server },
    { label: "Database", icon: Layers },
    { label: "API", icon: Link2 },
    { label: "Deployment", icon: Cloud },
  ],
} as const;

export const softwareDevCapabilities = {
  title: "Software Development Capabilities",
  items: [
    { title: "Custom Software Development", icon: Code2 },
    { title: "Full Stack Web Development", icon: Globe },
    { title: "Enterprise Application Development", icon: Building2 },
    { title: "SaaS Product Development", icon: Cloud },
    { title: "Startup MVP Development", icon: Rocket },
    { title: "API Development & Integration", icon: Link2 },
    { title: "Cloud-Based Applications", icon: Cloud },
  ],
} as const;

export type ServiceAccent = "blue" | "green" | "orange" | "pink" | "purple";

export type ServiceGraphicType =
  | "web"
  | "mobile"
  | "frontend"
  | "backend"
  | "uiux"
  | "product"
  | "business"
  | "process";

export type ServiceCardData = {
  id: string;
  title: string;
  icon: typeof Globe;
  description: string;
  accent: ServiceAccent;
  items: readonly string[];
  graphic: ServiceGraphicType;
};

const accentStyles: Record<
  ServiceAccent,
  { tint: string; iconBg: string; iconColor: string; checkBg: string; checkColor: string }
> = {
  blue: {
    tint: "bg-gradient-to-br from-blue-400/10 via-white/[0.03] to-indigo-400/10",
    iconBg: "bg-blue-400/10",
    iconColor: "text-blue-300",
    checkBg: "bg-blue-400/10",
    checkColor: "text-blue-300",
  },
  green: {
    tint: "bg-gradient-to-br from-emerald-400/10 via-white/[0.03] to-teal-400/10",
    iconBg: "bg-emerald-400/10",
    iconColor: "text-emerald-300",
    checkBg: "bg-emerald-400/10",
    checkColor: "text-emerald-300",
  },
  orange: {
    tint: "bg-gradient-to-br from-orange-400/10 via-white/[0.03] to-amber-400/10",
    iconBg: "bg-orange-400/10",
    iconColor: "text-orange-300",
    checkBg: "bg-orange-400/10",
    checkColor: "text-orange-300",
  },
  pink: {
    tint: "bg-gradient-to-br from-pink-400/10 via-white/[0.03] to-rose-400/10",
    iconBg: "bg-pink-400/10",
    iconColor: "text-pink-300",
    checkBg: "bg-pink-400/10",
    checkColor: "text-pink-300",
  },
  purple: {
    tint: "bg-gradient-to-br from-violet-400/10 via-white/[0.03] to-purple-400/10",
    iconBg: "bg-violet-400/10",
    iconColor: "text-violet-300",
    checkBg: "bg-violet-400/10",
    checkColor: "text-violet-300",
  },
};

export function getServiceAccentStyles(accent: ServiceAccent) {
  return accentStyles[accent];
}

export const softwareDevServiceCards: ServiceCardData[] = [
  {
    id: "web",
    title: "Web Development",
    icon: Globe,
    description:
      "High-performance websites and web applications built with modern frameworks, optimized for speed, SEO, and conversions.",
    accent: "blue",
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
    graphic: "web",
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    icon: Smartphone,
    description:
      "Native and cross-platform mobile apps with intuitive UX, real-time features, and scalable architecture.",
    accent: "blue",
    items: [
      "Android App Development",
      "React Native Applications",
      "Cross-Platform Mobile Apps",
      "Business Mobile Applications",
      "Real-Time Applications",
    ],
    graphic: "mobile",
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: MonitorSmartphone,
    description:
      "Pixel-perfect, responsive interfaces using React, TypeScript, and modern CSS for blazing-fast user experiences.",
    accent: "green",
    items: [
      "React.js Development",
      "TypeScript Applications",
      "Modern UI Development",
      "Responsive Web Interfaces",
      "Interactive User Experiences",
      "Tailwind CSS Development",
    ],
    graphic: "frontend",
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: Server,
    description:
      "Robust APIs, databases, and server infrastructure designed for security, scalability, and high availability.",
    accent: "orange",
    items: [
      "Node.js & Express.js Development",
      "REST API Development",
      "Authentication Systems",
      "Database Architecture",
      "Firebase Integration",
      "Scalable Backend Systems",
    ],
    graphic: "backend",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    icon: Palette,
    description:
      "User-centered design from wireframes to high-fidelity prototypes that delight users and drive engagement.",
    accent: "pink",
    items: [
      "Website UI Design",
      "Mobile App UI Design",
      "Dashboard Design",
      "SaaS Product Design",
      "Wireframing & Prototyping",
      "Responsive UI/UX",
      "Premium Modern Interfaces",
    ],
    graphic: "uiux",
  },
  {
    id: "product",
    title: "Product Engineering",
    icon: Layers,
    description:
      "End-to-end product development from ideation to launch, with continuous iteration and performance optimization.",
    accent: "purple",
    items: [
      "End-to-End Product Development",
      "Product Planning & Architecture",
      "Feature Development",
      "Performance Optimization",
      "System Integration",
      "Product Maintenance & Support",
    ],
    graphic: "product",
  },
  {
    id: "business",
    title: "Business Solutions",
    icon: Briefcase,
    description:
      "Custom business software that automates workflows, centralizes data, and delivers actionable insights.",
    accent: "blue",
    items: [
      "Inventory Management Systems",
      "Employee Management Systems",
      "Customer Management Platforms",
      "Billing Systems",
      "Workflow Automation",
      "Reporting & Analytics Systems",
    ],
    graphic: "business",
  },
  {
    id: "process",
    title: "Development Process",
    icon: PenTool,
    description:
      "A proven, transparent workflow that keeps your project on track from discovery through launch and beyond.",
    accent: "blue",
    items: [],
    graphic: "process",
  },
];

export const softwareDevProcess = {
  title: "Development Process",
  icon: PenTool,
  description:
    "A proven, transparent workflow that keeps your project on track from discovery through launch and beyond.",
  steps: [
    { title: "Requirement Analysis", icon: FileSearch },
    { title: "Product Planning", icon: LayoutList },
    { title: "UI/UX Design", icon: Paintbrush },
    { title: "Development", icon: Code2 },
    { title: "Testing", icon: ShieldCheck },
    { title: "Deployment", icon: UploadCloud },
    { title: "Maintenance & Support", icon: Wrench },
  ],
} as const;

export const softwareDevFinalCta = {
  title: "Ready To Build Your Software Product?",
  subtitle:
    "From MVPs to enterprise systems, we build scalable software solutions that grow with your business.",
  cta: "Get Started Now",
} as const;

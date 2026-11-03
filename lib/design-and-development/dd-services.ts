import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Code2,
  Cpu,
  Globe,
  MonitorSmartphone,
  Palette,
  Server,
  Smartphone,
  Workflow,
} from "lucide-react";
import type { LuxAccentName } from "@/components/lux/accents";
import {
  BACKEND_DEVELOPMENT_ROUTE,
  BUSINESS_SOLUTIONS_ROUTE,
  DEVELOPMENT_PROCESS_ROUTE,
  FRONTEND_DEVELOPMENT_ROUTE,
  MOBILE_APP_DEVELOPMENT_ROUTE,
  PRODUCT_ENGINEERING_ROUTE,
  SOFTWARE_DEVELOPMENT_ROUTE,
  UI_UX_DESIGN_ROUTE,
  WEB_DEVELOPMENT_ROUTE,
} from "@/lib/design-and-development/service-routes";

export type DdServiceSummary = {
  href: string;
  title: string;
  kicker: string;
  description: string;
  icon: LucideIcon;
  accent: LuxAccentName;
  items: string[];
};

/** Every Design & Development service, in menu order. */
export const DD_SERVICES: DdServiceSummary[] = [
  {
    href: SOFTWARE_DEVELOPMENT_ROUTE,
    title: "Software Development",
    kicker: "Custom systems, built to scale.",
    description: "SaaS products, enterprise platforms and custom software designed, built and shipped by one senior team.",
    icon: Code2,
    accent: "violet",
    items: ["Custom Software", "SaaS Products", "Startup MVPs", "API & Integrations", "Cloud Applications"],
  },
  {
    href: WEB_DEVELOPMENT_ROUTE,
    title: "Web Development",
    kicker: "Websites that perform.",
    description: "Corporate sites, web apps, dashboards and eCommerce, fast, accessible and SEO-ready from day one.",
    icon: Globe,
    accent: "sky",
    items: ["Business Websites", "Web Applications", "Admin Dashboards", "eCommerce Platforms", "Landing Pages"],
  },
  {
    href: MOBILE_APP_DEVELOPMENT_ROUTE,
    title: "Mobile App Development",
    kicker: "Native feel, cross-platform reach.",
    description: "iOS, Android and cross-platform apps engineered for speed, offline support and real-time experiences.",
    icon: Smartphone,
    accent: "rose",
    items: ["iOS & Android Apps", "React Native", "Flutter", "Business Apps", "Real-Time Apps"],
  },
  {
    href: FRONTEND_DEVELOPMENT_ROUTE,
    title: "Frontend Development",
    kicker: "Interfaces that convert.",
    description: "React, Next.js and TypeScript frontends with pixel-perfect UI, motion and flawless responsiveness.",
    icon: MonitorSmartphone,
    accent: "sky",
    items: ["React.js", "Next.js", "TypeScript", "Design Systems", "Core Web Vitals"],
  },
  {
    href: BACKEND_DEVELOPMENT_ROUTE,
    title: "Backend Development",
    kicker: "APIs, data and scale.",
    description: "Secure APIs, databases, authentication and integrations that stay reliable under real traffic.",
    icon: Server,
    accent: "emerald",
    items: ["Node.js & Express", "REST & GraphQL APIs", "Databases", "Authentication", "Cloud Infrastructure"],
  },
  {
    href: UI_UX_DESIGN_ROUTE,
    title: "UI/UX Design",
    kicker: "Design that ships.",
    description: "Research, wireframes, prototypes and high-fidelity UI for websites, mobile apps and SaaS products.",
    icon: Palette,
    accent: "rose",
    items: ["UX Research", "Wireframes", "Prototypes", "Design Systems", "Usability Testing"],
  },
  {
    href: PRODUCT_ENGINEERING_ROUTE,
    title: "Product Engineering",
    kicker: "From idea to live product.",
    description: "End-to-end product teams covering strategy, architecture, feature delivery and long-term support.",
    icon: Cpu,
    accent: "gold",
    items: ["Product Strategy", "Architecture", "MVP to Scale", "Performance", "Maintenance"],
  },
  {
    href: BUSINESS_SOLUTIONS_ROUTE,
    title: "Business Solutions",
    kicker: "Internal tools that pay back.",
    description: "Custom platforms for inventory, people, customers, billing and reporting, built around your workflow.",
    icon: Briefcase,
    accent: "gold",
    items: ["Inventory Systems", "CRM Platforms", "HR & Payroll", "Billing", "Workflow Automation"],
  },
  {
    href: DEVELOPMENT_PROCESS_ROUTE,
    title: "Development Process",
    kicker: "Predictable delivery.",
    description: "A transparent, agile process from requirement analysis to deployment and post-launch support.",
    icon: Workflow,
    accent: "emerald",
    items: ["Discovery", "Planning", "Agile Sprints", "QA & Testing", "Launch & Support"],
  },
];

export function ddService(href: string) {
  return DD_SERVICES.find((s) => s.href === href);
}

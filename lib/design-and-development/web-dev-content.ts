import {
  BarChart3,
  Building2,
  Calendar,
  Code2,
  CreditCard,
  FileText,
  Gauge,
  Globe,
  GraduationCap,
  Heart,
  Landmark,
  LayoutDashboard,
  LayoutTemplate,
  Lock,
  MonitorSmartphone,
  Paintbrush,
  Rocket,
  Search,
  ShoppingBag,
  Smartphone,
  Target,
  TestTube2,
  Truck,
  UploadCloud,
  Wrench,
  Zap,
} from "lucide-react";

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

export const webDevSolutions = {
  title: "Complete Web Solutions",
  subtitle: "From corporate sites to complex platforms — we build every type of web product your business needs.",
  items: [
    {
      title: "Corporate Websites",
      desc: "Professional websites that establish credibility and showcase your brand.",
      icon: Building2,
      color: "bg-violet-50 text-violet-600",
    },
    {
      title: "Business Websites",
      desc: "Conversion-focused sites designed to generate leads and grow revenue.",
      icon: Globe,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Portfolio Websites",
      desc: "Stunning showcases that highlight your work and attract new clients.",
      icon: LayoutTemplate,
      color: "bg-pink-50 text-pink-600",
    },
    {
      title: "Landing Pages",
      desc: "High-converting pages built for campaigns, launches, and promotions.",
      icon: Rocket,
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Admin Dashboards",
      desc: "Powerful control panels to manage data, users, and operations.",
      icon: LayoutDashboard,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "CRM & ERP Systems",
      desc: "Custom business systems that streamline workflows and centralize data.",
      icon: FileText,
      color: "bg-teal-50 text-teal-600",
    },
    {
      title: "Analytics Platforms",
      desc: "Data-rich dashboards that turn metrics into actionable insights.",
      icon: BarChart3,
      color: "bg-cyan-50 text-cyan-600",
    },
    {
      title: "E-commerce Platforms",
      desc: "Online stores with seamless checkout and inventory management.",
      icon: ShoppingBag,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Booking & Management Systems",
      desc: "Scheduling and reservation platforms that simplify operations.",
      icon: Calendar,
      color: "bg-amber-50 text-amber-600",
    },
  ],
} as const;

export const webDevWhyChoose = {
  title: "Why Businesses Choose Our Web Development Services",
  items: [
    {
      title: "Responsive Design",
      desc: "Flawless experiences across desktop, tablet, and mobile devices.",
      icon: MonitorSmartphone,
    },
    {
      title: "Fast Loading Experience",
      desc: "Optimized performance that keeps users engaged and reduces bounce rates.",
      icon: Gauge,
    },
    {
      title: "Secure Development",
      desc: "Industry best practices to protect your data and your users.",
      icon: Lock,
    },
    {
      title: "SEO-Friendly Structure",
      desc: "Clean code and semantic markup that search engines love.",
      icon: Search,
    },
    {
      title: "Scalable Architecture",
      desc: "Built to grow with your business without costly rebuilds.",
      icon: Code2,
    },
    {
      title: "Mobile Optimization",
      desc: "Touch-friendly interfaces designed for on-the-go users.",
      icon: Smartphone,
    },
  ],
} as const;

export const webDevApproach = {
  title: "Our Development Approach",
  subtitle: "A proven, transparent process from discovery to launch and beyond.",
  steps: [
    { num: "01", title: "Discovery", desc: "Understand goals, users & requirements", icon: Search, color: "#7c3aed" },
    { num: "02", title: "Planning", desc: "Define scope, timeline & architecture", icon: FileText, color: "#ec4899" },
    { num: "03", title: "UI/UX Design", desc: "Wireframes, prototypes & visual design", icon: Paintbrush, color: "#f97316" },
    { num: "04", title: "Development", desc: "Clean, efficient & scalable code", icon: Code2, color: "#10b981" },
    { num: "05", title: "Testing", desc: "Quality assurance across all devices", icon: TestTube2, color: "#06b6d4" },
    { num: "06", title: "Launch", desc: "Deploy, monitor & optimize performance", icon: UploadCloud, color: "#3b82f6" },
    { num: "07", title: "Support", desc: "Ongoing maintenance & improvements", icon: Wrench, color: "#6366f1" },
  ],
} as const;

export const webDevTechnologies = [
  "HTML5",
  "CSS3",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Sass",
  "AWS",
  "Docker",
  "Figma",
] as const;

export const webDevIndustries = [
  { label: "Healthcare", icon: Heart },
  { label: "Finance", icon: Landmark },
  { label: "Real Estate", icon: Building2 },
  { label: "Retail", icon: ShoppingBag },
  { label: "Education", icon: GraduationCap },
  { label: "SaaS & Tech", icon: Code2 },
  { label: "Hospitality", icon: CreditCard },
  { label: "Logistics", icon: Truck },
] as const;

export const webDevFaq = {
  title: "Frequently Asked Questions",
  items: [
    {
      q: "How long does it take to build a website?",
      a: "Timeline depends on scope. A landing page may take 2–4 weeks, while a custom web application can take 8–16 weeks. We provide a detailed timeline during the discovery phase.",
    },
    {
      q: "Do you provide ongoing maintenance?",
      a: "Yes. We offer maintenance and support packages covering updates, security patches, performance monitoring, and feature enhancements.",
    },
    {
      q: "What technologies do you use?",
      a: "We use modern stacks including React, Next.js, TypeScript, Node.js, and PostgreSQL — chosen based on your project requirements and scalability needs.",
    },
    {
      q: "Can you redesign an existing website?",
      a: "Absolutely. We handle full redesigns, migrations, and performance upgrades while preserving your SEO equity and business data.",
    },
    {
      q: "Do you build e-commerce websites?",
      a: "Yes. We build custom e-commerce platforms and integrate with Shopify, WooCommerce, and headless commerce solutions.",
    },
    {
      q: "Is SEO included in web development?",
      a: "Every site we build follows SEO best practices — semantic HTML, fast load times, mobile responsiveness, and clean URL structures.",
    },
  ],
} as const;

export const webDevFinalCta = {
  title: "Ready To Build Your Next Website?",
  subtitle:
    "Let's create a high-performance website that drives traffic, engages users, and grows your business.",
  ctaPrimary: "Start Your Project",
  ctaSecondary: "Schedule Consultation",
} as const;

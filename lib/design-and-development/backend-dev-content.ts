import { Cloud, Database, Rocket, Shield } from "lucide-react";

export const backendDevHero = {
  badge: "BACKEND DEVELOPMENT SERVICES",
  titleBefore: "Backend Development That Powers",
  titleAccent: "Scalable & High-Performance Apps",
  subtitle:
    "We build secure, robust, and scalable backend systems that handle complex logic, manage data, and power your applications seamlessly.",
  ctaPrimary: "Start Your Backend Project",
  ctaSecondary: "View Our Work",
  items: [
    "API Development",
    "Database Design & Optimization",
    "Server-Side Development",
    "Microservices Architecture",
    "Authentication & Authorization",
    "Cloud & DevOps Integration",
    "Real-Time Data Processing",
    "Third-Party Integrations",
    "Scalable Backend Solutions",
    "Caching & Performance Tuning",
    "Secure & Reliable Systems",
    "Maintenance & Support",
  ],
  features: [
    { label: "Secure", icon: Shield },
    { label: "Scalable", icon: Database },
    { label: "Reliable", icon: Cloud },
    { label: "High Performance", icon: Rocket },
  ],
  builtWith: ["Node.js", "Express.js", "PostgreSQL", "Redis", "Docker", "AWS"],
  dashboard: {
    productName: "ServerFlow",
  },
} as const;

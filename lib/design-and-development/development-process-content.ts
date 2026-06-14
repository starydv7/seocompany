import {
  ClipboardList,
  Code2,
  FileSearch,
  Map,
  Paintbrush,
  Route,
  ShieldCheck,
  UploadCloud,
  Wrench,
} from "lucide-react";

export const developmentProcessHero = {
  badge: "DEVELOPMENT PROCESS",
  titleBefore: "From Idea To Launch",
  gradientLines: ["Structured.", "Transparent.", "Scalable."],
  subtitle:
    "Every successful product follows a proven process. From requirement analysis and planning to development, testing, deployment, and long-term support, we ensure every project moves efficiently from concept to launch.",
  ctaPrimary: "Start Your Project",
  ctaSecondary: "View Process",
  items: [
    "Requirement Analysis",
    "Product Planning",
    "UI/UX Design",
    "Development",
    "Testing",
    "Deployment",
    "Maintenance & Support",
  ],
  trust: [
    { label: "Clear Roadmap", sub: "Every phase defined", icon: Map },
    { label: "Transparent Workflow", sub: "Full visibility", icon: Route },
    { label: "Quality Assurance", sub: "Rigorous testing", icon: ShieldCheck },
    { label: "Continuous Support", sub: "Long-term care", icon: Wrench },
  ],
  stages: [
    { step: "01", title: "Requirement Analysis", icon: FileSearch },
    { step: "02", title: "Product Planning", icon: ClipboardList },
    { step: "03", title: "UI/UX Design", icon: Paintbrush },
    { step: "04", title: "Development", icon: Code2 },
    { step: "05", title: "Testing", icon: ShieldCheck },
    { step: "06", title: "Deployment", icon: UploadCloud },
    { step: "07", title: "Maintenance & Support", icon: Wrench },
  ],
  floatLabels: [
    { text: "Roadmap", position: "top-[6%] left-[4%] sm:left-[6%]" },
    { text: "Sprint Planning", position: "top-[32%] right-[2%] sm:right-[4%]" },
    { text: "QA Testing", position: "bottom-[28%] left-[2%] sm:left-[4%]" },
    { text: "Launch", position: "bottom-[8%] right-[6%] sm:right-[8%]" },
  ],
} as const;

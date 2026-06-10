/** Full technology stack used across Design & Development services */

export type TechCategory = {
  id: string;
  title: string;
  technologies: readonly string[];
};

export const TECH_STACK_CATEGORIES: readonly TechCategory[] = [
  {
    id: "frontend",
    title: "Frontend & Web",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Sass",
      "HTML5",
      "CSS3",
      "Vue.js",
      "Angular",
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    technologies: [
      "Node.js",
      "Express.js",
      "Python",
      "GraphQL",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    technologies: ["React Native", "Swift", "Kotlin", "Flutter", "Firebase"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    id: "design",
    title: "Design & Collaboration",
    technologies: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Photoshop",
      "Illustrator",
      "InVision",
      "Zeplin",
      "Notion",
    ],
  },
  {
    id: "integrations",
    title: "Integrations & Platforms",
    technologies: ["Salesforce", "HubSpot", "Stripe", "Slack", "Google Workspace"],
  },
] as const;

export const ALL_TECHNOLOGIES = TECH_STACK_CATEGORIES.flatMap((c) => c.technologies);

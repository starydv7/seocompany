import {
  BACKEND_DEVELOPMENT_ROUTE,
  FRONTEND_DEVELOPMENT_ROUTE,
  MOBILE_APP_DEVELOPMENT_ROUTE,
  SOFTWARE_DEVELOPMENT_ROUTE,
  UI_UX_DESIGN_ROUTE,
  WEB_DEVELOPMENT_ROUTE,
} from "@/lib/design-and-development/service-routes";

export const HIRE_DEVELOPERS_ROUTE = "/hire-developers";

export type HireRole = {
  id: string;
  /** Mega-menu / quick-link label. */
  label: string;
  title: string;
  body: string;
  skills: string[];
  goodFor: string;
  serviceHref: string;
  serviceLabel: string;
};

export const HIRE_ROLES: HireRole[] = [
  {
    id: "web-developers",
    label: "Hire Web Developers",
    title: "Hire Web Developers",
    body: "Web developers who build fast, SEO-ready websites, web apps, admin dashboards and eCommerce stores that load quickly and convert visitors into customers.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"],
    goodFor: "Business websites, web apps, dashboards, eCommerce",
    serviceHref: WEB_DEVELOPMENT_ROUTE,
    serviceLabel: "Web development services",
  },
  {
    id: "app-developers",
    label: "Hire App Developers",
    title: "Hire Mobile App Developers",
    body: "iOS, Android and cross-platform app developers who take your idea from wireframe to the App Store and Google Play, then keep it fast and stable as you grow.",
    skills: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    goodFor: "Consumer apps, business apps, real-time apps",
    serviceHref: MOBILE_APP_DEVELOPMENT_ROUTE,
    serviceLabel: "Mobile app development services",
  },
  {
    id: "react-developers",
    label: "Hire React & Next.js Developers",
    title: "Hire React & Next.js Developers",
    body: "Frontend engineers who craft pixel-perfect, accessible interfaces with React and Next.js, with Core Web Vitals and search visibility built in from day one.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Sass"],
    goodFor: "SaaS frontends, marketing sites, design systems",
    serviceHref: FRONTEND_DEVELOPMENT_ROUTE,
    serviceLabel: "Frontend development services",
  },
  {
    id: "backend-developers",
    label: "Hire Node.js & Backend Developers",
    title: "Hire Node.js & Backend Developers",
    body: "Backend developers who design secure APIs, databases and integrations that stay reliable under real traffic and scale with your business.",
    skills: ["Node.js", "Express.js", "Python", "GraphQL", "PostgreSQL", "MongoDB"],
    goodFor: "APIs, integrations, authentication, data platforms",
    serviceHref: BACKEND_DEVELOPMENT_ROUTE,
    serviceLabel: "Backend development services",
  },
  {
    id: "full-stack-developers",
    label: "Hire Full-Stack Developers",
    title: "Hire Full-Stack Developers",
    body: "Full-stack developers who own features end to end, from database and API to interface and cloud deployment, so you ship faster with fewer handoffs.",
    skills: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
    goodFor: "MVPs, SaaS products, internal tools",
    serviceHref: SOFTWARE_DEVELOPMENT_ROUTE,
    serviceLabel: "Software development services",
  },
  {
    id: "ui-ux-designers",
    label: "Hire UI/UX Designers",
    title: "Hire UI/UX Designers",
    body: "Product designers who turn research into wireframes, prototypes and design systems that make your website or app effortless to use.",
    skills: ["Figma", "Adobe XD", "Prototyping", "Design systems", "User research"],
    goodFor: "New products, redesigns, conversion-focused UX",
    serviceHref: UI_UX_DESIGN_ROUTE,
    serviceLabel: "UI/UX design services",
  },
];

export const HIRING_MODELS = [
  {
    title: "Dedicated Developers",
    body: "Full-time developers who work only on your product, join your stand-ups and grow with your roadmap.",
    bestFor: "Long-term products and growing teams",
  },
  {
    title: "Part-Time & Hourly",
    body: "Flexible hours for maintenance, bug fixes, performance work and smaller features, billed for the time you use.",
    bestFor: "Ongoing support and smaller backlogs",
  },
  {
    title: "Fixed-Scope Projects",
    body: "A defined scope, timeline and price for a complete build, managed by us from discovery to launch.",
    bestFor: "MVPs, websites and well-defined builds",
  },
] as const;

export const HIRING_STEPS = [
  { title: "Share Requirements", body: "Tell us about your product, the skills you need and how you like to work in a free consultation." },
  { title: "Meet Developers", body: "We match developers to your stack and goals, and you interview them before deciding." },
  { title: "Kick Off", body: "Developers join your tools and rituals, with a clear plan for the first sprint and regular updates." },
  { title: "Scale Freely", body: "Add developers, change skills or pause as your roadmap changes, without long hiring cycles." },
] as const;

export const WHY_HIRE_US = [
  {
    title: "Development + SEO Under One Roof",
    body: "We are an SEO agency as well as a development company, so every build ships with clean code, fast load times and search-ready structure.",
  },
  {
    title: "Senior, Hands-On Engineers",
    body: "You work with experienced developers who make good technical decisions, not juniors learning on your budget.",
  },
  {
    title: "Works Inside Your Tools",
    body: "Your repository, your project board, your chat. Developers plug into GitHub, Jira, Slack or whatever your team already uses.",
  },
  {
    title: "Transparent Communication",
    body: "Regular progress updates, demos of working software and a single point of contact who answers quickly.",
  },
  {
    title: "Flexible Engagements",
    body: "Start with one developer or a full team, switch between dedicated, hourly and fixed-scope work as your needs change.",
  },
  {
    title: "Design to Deployment",
    body: "UI/UX, frontend, backend, mobile and cloud skills in one team, so nothing gets lost between agencies.",
  },
] as const;

export const HIRE_FAQS: { q: string; a: string }[] = [
  {
    q: "How do I hire a developer from BrandMarketing?",
    a: "Book a free consultation and tell us about your product, tech stack and timeline. We match developers to your requirements, you interview them, and once you are happy they join your team and tools to start the first sprint.",
  },
  {
    q: "How much does it cost to hire a developer?",
    a: "Cost depends on the role, seniority, engagement model (dedicated, hourly or fixed-scope) and how long you need the developer. After the consultation we share a clear quote with no hidden fees. You can also see starting prices on our pricing page.",
  },
  {
    q: "Can I interview developers before hiring them?",
    a: "Yes. You meet and interview the developers we match to your project, and you decide who joins your team.",
  },
  {
    q: "Can I hire developers part-time or by the hour?",
    a: "Yes. Alongside dedicated full-time developers, we offer part-time and hourly engagements for maintenance, bug fixes and smaller features, plus fixed-scope projects for complete builds.",
  },
  {
    q: "Which technologies do your developers work with?",
    a: "React, Next.js, TypeScript, Vue.js and Angular on the frontend; Node.js, Express.js, Python, GraphQL, PostgreSQL and MongoDB on the backend; React Native, Flutter, Swift and Kotlin for mobile; and AWS, Google Cloud, Azure and Docker for cloud and DevOps.",
  },
  {
    q: "Will you sign an NDA before we share project details?",
    a: "Yes. We are happy to sign a non-disclosure agreement before you share any confidential information about your product.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. Our team is based in Kolkata, India, and works with clients worldwide. We agree on overlapping working hours for meetings, reviews and quick communication in your time zone.",
  },
  {
    q: "Should I hire a dedicated developer or outsource the whole project?",
    a: "Hire dedicated developers when you have an ongoing roadmap and want to direct the work yourself. Choose a fixed-scope project when the requirements are clear and you want us to manage delivery end to end. We will recommend the best fit during the consultation.",
  },
  {
    q: "Do your developers build SEO-friendly websites?",
    a: "Yes. Because we are also an SEO agency, our developers build with Core Web Vitals, crawlable architecture, structured data and technical SEO best practices from the start, so your site is ready to rank.",
  },
];

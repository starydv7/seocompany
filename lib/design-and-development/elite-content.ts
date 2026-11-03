import type { LucideIcon } from "lucide-react";
import {
  Accessibility,
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Boxes,
  BrainCircuit,
  CalendarCheck,
  ClipboardList,
  Cloud,
  CloudCog,
  Component,
  CreditCard,
  Database,
  FileSearch,
  Gauge,
  GitBranch,
  Layers,
  LayoutDashboard,
  LifeBuoy,
  Lock,
  MousePointerClick,
  Network,
  PackageCheck,
  PenTool,
  Plug,
  Repeat,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TabletSmartphone,
  Target,
  TestTube2,
  TrendingUp,
  Users,
  Wand2,
  Wifi,
  Workflow,
  Zap,
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

export type EliteHeading = { eyebrow: string; title: string; accent: string; body?: string };
export type EliteOffering = { icon: LucideIcon; title: string; body: string; points: string[] };
export type EliteBenefit = { icon: LucideIcon; title: string; body: string };
export type EliteStep = { title: string; body: string; deliverable: string };
export type EliteFaq = { q: string; a: string };

export type EliteService = {
  route: string;
  name: string;
  accent: LuxAccentName;
  ticker: string[];
  offerings: EliteHeading & { items: EliteOffering[] };
  statement: EliteHeading & { quote: string; benefits: EliteBenefit[] };
  process: EliteHeading & { steps: EliteStep[] };
  stack: EliteHeading & { groups: { title: string; items: string[] }[] };
  industries: EliteHeading & { items: string[] };
  /** Anchor id on /hire-developers. */
  hire?: { roleId: string; title: string; body: string };
  faqs: EliteFaq[];
  related: string[];
  cta: EliteHeading;
};

export const MOBILE_ELITE: EliteService = {
  route: MOBILE_APP_DEVELOPMENT_ROUTE,
  name: "Mobile App Development",
  accent: "violet",
  ticker: ["iOS Apps", "Android Apps", "React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Push Notifications", "Offline-First", "App Store Launch", "In-App Payments", "Real-Time Sync"],
  offerings: {
    eyebrow: "What we build",
    title: "Mobile Apps Engineered",
    accent: "to Be Loved",
    body: "From first prototype to millions of taps, we build apps that feel native, load instantly and keep users coming back.",
    items: [
      { icon: Smartphone, title: "iOS App Development", body: "Native Swift apps that follow Apple's Human Interface Guidelines and feel at home on every iPhone and iPad.", points: ["SwiftUI interfaces", "Apple Pay & HealthKit", "App Store optimisation"] },
      { icon: TabletSmartphone, title: "Android App Development", body: "Kotlin apps built for the full range of Android devices, screen sizes and OS versions.", points: ["Material Design 3", "Google Play billing", "Device-wide testing"] },
      { icon: Layers, title: "Cross-Platform Apps", body: "One codebase, two stores. React Native and Flutter apps that cut cost without cutting quality.", points: ["Shared business logic", "Native modules", "Faster releases"] },
      { icon: Wifi, title: "Real-Time & Offline Apps", body: "Chat, tracking and collaboration features that sync instantly and keep working without a signal.", points: ["WebSockets & Firebase", "Local-first storage", "Conflict-free sync"] },
      { icon: CreditCard, title: "Commerce & Payments", body: "Secure checkout, subscriptions and wallets that turn engaged users into paying customers.", points: ["Stripe & Razorpay", "Subscriptions", "PCI-aware flows"] },
      { icon: LifeBuoy, title: "App Maintenance & Growth", body: "OS updates, crash monitoring, analytics and continuous improvements after launch.", points: ["Crash-free monitoring", "OS upgrade readiness", "Feature roadmaps"] },
    ],
  },
  statement: {
    eyebrow: "Why our apps win",
    title: "Built for Retention,",
    accent: "Not Just Downloads",
    quote: "Anyone can ship an app. We engineer the first five seconds, the hundredth session and every update in between.",
    benefits: [
      { icon: Zap, title: "Native-grade performance", body: "Smooth 60fps animations, fast cold starts and lean bundles on real-world devices." },
      { icon: ShieldCheck, title: "Security by default", body: "Encrypted storage, secure authentication and API hardening baked into every release." },
      { icon: BarChart3, title: "Analytics from day one", body: "Event tracking and funnels so every feature decision is backed by real usage data." },
      { icon: Rocket, title: "Store launch handled", body: "Listings, screenshots, review guidelines and release management for both stores." },
    ],
  },
  process: {
    eyebrow: "How we deliver",
    title: "From Idea to",
    accent: "App Store",
    steps: [
      { title: "Discover", body: "Goals, users, competitors and the features that matter most for launch.", deliverable: "Product brief & feature map" },
      { title: "Design", body: "Wireframes and interactive prototypes tested with real users before code.", deliverable: "Clickable prototype" },
      { title: "Build", body: "Two-week sprints with working builds on your phone after every sprint.", deliverable: "TestFlight & beta builds" },
      { title: "Test", body: "Automated and manual QA across devices, OS versions and network conditions.", deliverable: "Release-ready build" },
      { title: "Launch & Grow", body: "Store submission, monitoring and a data-driven roadmap for version two.", deliverable: "Live app & growth plan" },
    ],
  },
  stack: {
    eyebrow: "Technology",
    title: "A Modern",
    accent: "Mobile Stack",
    groups: [
      { title: "Cross-Platform", items: ["React Native", "Flutter", "Expo", "TypeScript", "Dart"] },
      { title: "Native", items: ["Swift", "SwiftUI", "Kotlin", "Jetpack Compose"] },
      { title: "Backend & Cloud", items: ["Firebase", "Node.js", "GraphQL", "AWS Amplify", "Supabase"] },
      { title: "Quality & Release", items: ["Detox", "Jest", "Fastlane", "Crashlytics", "App Store Connect"] },
    ],
  },
  industries: {
    eyebrow: "Industries",
    title: "Apps for",
    accent: "Every Industry",
    items: ["Healthcare", "Fintech", "eCommerce", "Education", "Logistics", "Travel", "Real Estate", "Startups"],
  },
  hire: { roleId: "app-developers", title: "Need mobile developers on your team?", body: "Hire dedicated iOS, Android, React Native and Flutter developers who plug into your workflow." },
  faqs: [
    { q: "How long does it take to build a mobile app?", a: "A focused MVP typically takes 8 to 14 weeks, while feature-rich apps with complex integrations take longer. After discovery we share a sprint-by-sprint timeline so you always know what ships when." },
    { q: "Should I build a native or cross-platform app?", a: "Cross-platform (React Native or Flutter) is ideal for most business apps because one codebase serves iOS and Android. Native Swift or Kotlin is best when you need deep hardware access or platform-specific performance. We recommend the right fit during discovery." },
    { q: "Do you publish the app to the App Store and Google Play?", a: "Yes. We prepare store listings, screenshots and privacy details, handle review guidelines and manage the submission and release process for both stores." },
    { q: "Can you add features to an existing app?", a: "Yes. We audit your current codebase, fix critical issues and then extend it with new features, or plan a rebuild if that is the better long-term investment." },
    { q: "How much does mobile app development cost?", a: "Cost depends on platforms, features, integrations and design complexity. We provide a clear estimate after a free consultation, and you can also see starting prices on our pricing page." },
    { q: "Do you provide support after launch?", a: "Yes. We offer maintenance plans covering OS updates, crash monitoring, security patches, performance tuning and new feature development." },
  ],
  related: [UI_UX_DESIGN_ROUTE, BACKEND_DEVELOPMENT_ROUTE, PRODUCT_ENGINEERING_ROUTE],
  cta: { eyebrow: "Start your app", title: "Let's Build an App", accent: "People Love", body: "Share your idea and we will map the fastest route from concept to the App Store and Google Play." },
};

export const FRONTEND_ELITE: EliteService = {
  route: FRONTEND_DEVELOPMENT_ROUTE,
  name: "Frontend Development",
  accent: "sky",
  ticker: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Design Systems", "Core Web Vitals", "Accessibility", "SSR & SSG", "Headless CMS", "Micro-Interactions", "Pixel Perfect"],
  offerings: {
    eyebrow: "What we build",
    title: "Frontends That",
    accent: "Feel Effortless",
    body: "Interfaces your users trust at first glance, engineered for speed, accessibility and conversion.",
    items: [
      { icon: Blocks, title: "React & Next.js Apps", body: "Server-rendered, SEO-friendly applications with instant navigation and rock-solid state management.", points: ["App Router & SSR", "Edge rendering", "Type-safe data"] },
      { icon: Component, title: "Design Systems", body: "Reusable component libraries that keep every screen consistent and every release faster.", points: ["Tokens & theming", "Storybook docs", "Accessible components"] },
      { icon: Gauge, title: "Performance Engineering", body: "Core Web Vitals tuning that improves rankings, conversion and user satisfaction.", points: ["LCP & INP fixes", "Image optimisation", "Bundle splitting"] },
      { icon: Wand2, title: "Motion & Interaction", body: "Purposeful animation and micro-interactions that make products feel premium.", points: ["Framer Motion", "Scroll experiences", "Reduced-motion aware"] },
      { icon: Accessibility, title: "Accessibility (WCAG)", body: "Inclusive interfaces that work with keyboards, screen readers and every ability.", points: ["WCAG 2.2 AA", "Semantic HTML", "Audit & remediation"] },
      { icon: Repeat, title: "Legacy Frontend Modernisation", body: "Migrate jQuery, AngularJS or old React code to a modern, maintainable stack without downtime.", points: ["Incremental migration", "TypeScript adoption", "Test coverage"] },
    ],
  },
  statement: {
    eyebrow: "Why it matters",
    title: "Your Frontend Is",
    accent: "Your First Impression",
    quote: "Users judge a product in milliseconds. We make sure those milliseconds are fast, beautiful and unmistakably yours.",
    benefits: [
      { icon: Zap, title: "Speed that ranks", body: "Fast, stable pages that pass Core Web Vitals and give search engines what they reward." },
      { icon: Target, title: "Designed to convert", body: "Clear hierarchy, frictionless forms and persuasive layouts that turn visits into leads." },
      { icon: Component, title: "Built to scale", body: "Typed, tested component architecture your team can extend for years." },
      { icon: Search, title: "SEO-ready markup", body: "Semantic structure, metadata and structured data from an agency that does SEO every day." },
    ],
  },
  process: {
    eyebrow: "How we deliver",
    title: "From Figma to",
    accent: "Flawless UI",
    steps: [
      { title: "Audit", body: "Review designs, existing code, performance and accessibility baselines.", deliverable: "Frontend audit" },
      { title: "Architect", body: "Choose rendering strategy, component structure and data flow.", deliverable: "Technical blueprint" },
      { title: "Build", body: "Component-first development with previews for every pull request.", deliverable: "Preview deployments" },
      { title: "Optimise", body: "Performance, accessibility and cross-browser polish before launch.", deliverable: "Lighthouse & a11y report" },
      { title: "Launch & Iterate", body: "Monitored release, analytics and continuous UI improvements.", deliverable: "Live product" },
    ],
  },
  stack: {
    eyebrow: "Technology",
    title: "Frontend",
    accent: "Stack",
    groups: [
      { title: "Frameworks", items: ["React", "Next.js", "Vue.js", "Angular", "Astro"] },
      { title: "Styling & Motion", items: ["Tailwind CSS", "Sass", "CSS Modules", "Framer Motion", "GSAP"] },
      { title: "Data & State", items: ["TypeScript", "React Query", "Redux Toolkit", "Zustand", "GraphQL"] },
      { title: "Quality", items: ["Jest", "Playwright", "Storybook", "Lighthouse CI", "axe"] },
    ],
  },
  industries: {
    eyebrow: "Industries",
    title: "Interfaces for",
    accent: "Every Audience",
    items: ["SaaS", "eCommerce", "Fintech", "Healthcare", "Education", "Media", "Real Estate", "Startups"],
  },
  hire: { roleId: "react-developers", title: "Need React or Next.js developers?", body: "Hire senior frontend engineers who ship pixel-perfect, high-performance interfaces." },
  faqs: [
    { q: "Which frontend frameworks do you work with?", a: "We specialise in React and Next.js with TypeScript, and also build with Vue.js, Angular and Astro when they fit the project better." },
    { q: "Can you turn our Figma designs into code?", a: "Yes. We convert Figma designs into pixel-perfect, responsive and accessible components, and flag UX improvements along the way." },
    { q: "Will our site pass Core Web Vitals?", a: "Performance is part of our definition of done. We optimise images, fonts, scripts and rendering so pages are fast and stable, and we share Lighthouse reports before launch." },
    { q: "Do you make websites accessible?", a: "Yes. We build to WCAG 2.2 AA guidelines with semantic HTML, keyboard support, proper contrast and screen-reader testing." },
    { q: "Can you modernise our existing frontend?", a: "Yes. We migrate legacy frontends to modern React or Next.js incrementally, so your product keeps running while it improves." },
    { q: "Do you work with our backend team?", a: "Absolutely. We integrate with existing REST or GraphQL APIs, or our backend team can build the APIs you need." },
  ],
  related: [UI_UX_DESIGN_ROUTE, WEB_DEVELOPMENT_ROUTE, BACKEND_DEVELOPMENT_ROUTE],
  cta: { eyebrow: "Upgrade your frontend", title: "Make Every Screen", accent: "Unforgettable", body: "Tell us about your product and we will show you how a faster, sharper frontend lifts conversions." },
};

export const BACKEND_ELITE: EliteService = {
  route: BACKEND_DEVELOPMENT_ROUTE,
  name: "Backend Development",
  accent: "emerald",
  ticker: ["Node.js", "Express.js", "Python", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB", "Redis", "Microservices", "Docker", "AWS", "Authentication"],
  offerings: {
    eyebrow: "What we build",
    title: "Backends That",
    accent: "Never Blink",
    body: "The invisible engine behind great products: secure, observable and ready for your next growth spike.",
    items: [
      { icon: Plug, title: "API Development", body: "Well-documented REST and GraphQL APIs that power web, mobile and partner integrations.", points: ["OpenAPI docs", "Versioning", "Rate limiting"] },
      { icon: Database, title: "Database Architecture", body: "Data models designed for integrity, speed and the queries your product actually runs.", points: ["PostgreSQL & MongoDB", "Indexing & tuning", "Safe migrations"] },
      { icon: Lock, title: "Authentication & Security", body: "Login, roles and permissions done right, with security reviewed at every layer.", points: ["OAuth & SSO", "Role-based access", "OWASP practices"] },
      { icon: Network, title: "Microservices & Integrations", body: "Connect payments, CRMs, ERPs and third-party services through reliable, event-driven pipelines.", points: ["Queues & webhooks", "Stripe, HubSpot, Salesforce", "Retry & idempotency"] },
      { icon: CloudCog, title: "Cloud & DevOps", body: "Containerised infrastructure with automated deployments, monitoring and backups.", points: ["Docker & Kubernetes", "CI/CD pipelines", "Infrastructure as code"] },
      { icon: Gauge, title: "Performance & Scaling", body: "Caching, load balancing and query optimisation so response times stay low as traffic grows.", points: ["Redis caching", "Load testing", "Horizontal scaling"] },
    ],
  },
  statement: {
    eyebrow: "Engineering principles",
    title: "Reliability You",
    accent: "Never Notice",
    quote: "The best backend is the one nobody talks about, because it simply works, every request, every day.",
    benefits: [
      { icon: ShieldCheck, title: "Secure by design", body: "Encryption, least-privilege access and dependency scanning from the first commit." },
      { icon: Activity, title: "Fully observable", body: "Logs, metrics and alerts so issues are found before your customers notice." },
      { icon: TrendingUp, title: "Ready to scale", body: "Stateless services and smart caching that grow with demand instead of breaking under it." },
      { icon: ClipboardList, title: "Documented & tested", body: "Automated tests and clear API docs that make onboarding new developers painless." },
    ],
  },
  process: {
    eyebrow: "How we deliver",
    title: "Architecture to",
    accent: "Production",
    steps: [
      { title: "Requirements", body: "Map data, integrations, traffic expectations and compliance needs.", deliverable: "System requirements" },
      { title: "Architecture", body: "Design services, data models and infrastructure for today and tomorrow.", deliverable: "Architecture diagram" },
      { title: "Development", body: "Test-driven API development with code review on every change.", deliverable: "Versioned APIs & docs" },
      { title: "Hardening", body: "Security review, load testing and observability setup.", deliverable: "Security & load report" },
      { title: "Deploy & Operate", body: "Automated deployments, monitoring and ongoing optimisation.", deliverable: "Production environment" },
    ],
  },
  stack: {
    eyebrow: "Technology",
    title: "Backend",
    accent: "Stack",
    groups: [
      { title: "Languages & Frameworks", items: ["Node.js", "Express.js", "NestJS", "Python", "Django"] },
      { title: "APIs", items: ["REST", "GraphQL", "WebSockets", "gRPC", "OpenAPI"] },
      { title: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch"] },
      { title: "Cloud & DevOps", items: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"] },
    ],
  },
  industries: {
    eyebrow: "Industries",
    title: "Systems for",
    accent: "Demanding Domains",
    items: ["Fintech", "Healthcare", "SaaS", "eCommerce", "Logistics", "Education", "Media", "Enterprise"],
  },
  hire: { roleId: "backend-developers", title: "Need Node.js or backend developers?", body: "Hire backend engineers who design secure APIs and data platforms that scale." },
  faqs: [
    { q: "Which backend technologies do you use?", a: "Our core stack is Node.js with Express or NestJS and Python with Django, backed by PostgreSQL, MongoDB and Redis, deployed on AWS, Google Cloud or Azure." },
    { q: "Can you build APIs for our mobile and web apps?", a: "Yes. We design REST and GraphQL APIs that serve web, mobile and partner integrations, complete with documentation and versioning." },
    { q: "How do you keep backend systems secure?", a: "We follow OWASP practices, encrypt sensitive data, enforce role-based access, scan dependencies and review security before every major release." },
    { q: "Can you integrate third-party services like payments or CRMs?", a: "Yes. We regularly integrate Stripe, Razorpay, HubSpot, Salesforce, Slack and Google Workspace, using queues and webhooks for reliability." },
    { q: "Will the backend handle growth in traffic?", a: "We design for scale with caching, stateless services, load testing and auto-scaling infrastructure, so performance holds as your user base grows." },
    { q: "Do you maintain backends after launch?", a: "Yes. We provide monitoring, updates, performance tuning and feature development as an ongoing engagement." },
  ],
  related: [FRONTEND_DEVELOPMENT_ROUTE, SOFTWARE_DEVELOPMENT_ROUTE, BUSINESS_SOLUTIONS_ROUTE],
  cta: { eyebrow: "Build your backend", title: "Infrastructure That", accent: "Scales With You", body: "Tell us about your product and data, and we will design a backend that stays fast, secure and reliable." },
};

export const UIUX_ELITE: EliteService = {
  route: UI_UX_DESIGN_ROUTE,
  name: "UI/UX Design",
  accent: "rose",
  ticker: ["User Research", "Personas", "User Journeys", "Wireframes", "Prototypes", "Design Systems", "Usability Testing", "Figma", "Micro-Interactions", "Accessibility", "Mobile UI", "SaaS Dashboards"],
  offerings: {
    eyebrow: "What we design",
    title: "Experiences That",
    accent: "Feel Inevitable",
    body: "Design grounded in research and polished to perfection, so users always know what to do next.",
    items: [
      { icon: FileSearch, title: "UX Research & Strategy", body: "Interviews, analytics and competitor reviews that reveal what users really need.", points: ["User interviews", "Personas & journeys", "Heuristic audits"] },
      { icon: PenTool, title: "Wireframes & Information Architecture", body: "Clear structure and user flows before a single pixel is polished.", points: ["Sitemaps", "User flows", "Low-fidelity wireframes"] },
      { icon: MousePointerClick, title: "Interactive Prototypes", body: "Clickable prototypes that validate ideas with real users before development.", points: ["Figma prototypes", "Usability testing", "Rapid iteration"] },
      { icon: Sparkles, title: "High-Fidelity UI Design", body: "Premium visual design that expresses your brand across web and mobile.", points: ["Visual language", "Responsive layouts", "Motion specs"] },
      { icon: Component, title: "Design Systems", body: "Scalable component libraries and guidelines that keep products consistent.", points: ["Tokens & components", "Documentation", "Dev handoff"] },
      { icon: LayoutDashboard, title: "SaaS & Dashboard Design", body: "Complex data made simple through thoughtful hierarchy and interaction.", points: ["Data visualisation", "Onboarding flows", "Empty & error states"] },
    ],
  },
  statement: {
    eyebrow: "Our design philosophy",
    title: "Beautiful Is Good.",
    accent: "Useful Is Better.",
    quote: "We design for the moment a user hesitates, and remove the reason they hesitated.",
    benefits: [
      { icon: Users, title: "Research-led decisions", body: "Every layout is backed by user insight, not personal taste." },
      { icon: Target, title: "Conversion-focused", body: "Journeys designed around your business goals and your users' intent." },
      { icon: Accessibility, title: "Inclusive by default", body: "Contrast, type and interaction patterns that work for everyone." },
      { icon: Blocks, title: "Developer-ready handoff", body: "Specs, tokens and components that engineers can build exactly as designed." },
    ],
  },
  process: {
    eyebrow: "How we design",
    title: "From Insight to",
    accent: "Interface",
    steps: [
      { title: "Research", body: "Understand users, goals and the competitive landscape.", deliverable: "Research insights" },
      { title: "Define", body: "Personas, journeys and the problems worth solving first.", deliverable: "UX strategy" },
      { title: "Wireframe", body: "Structure, flows and content hierarchy in low fidelity.", deliverable: "Wireframes & flows" },
      { title: "Design & Prototype", body: "High-fidelity UI and clickable prototypes tested with users.", deliverable: "Figma prototype" },
      { title: "Handoff & Support", body: "Design system, specs and support through development.", deliverable: "Dev-ready design system" },
    ],
  },
  stack: {
    eyebrow: "Toolkit",
    title: "Design",
    accent: "Toolkit",
    groups: [
      { title: "Design & Prototyping", items: ["Figma", "FigJam", "Adobe XD", "Sketch", "Framer"] },
      { title: "Research & Testing", items: ["Maze", "Hotjar", "Google Analytics", "UserTesting", "Lookback"] },
      { title: "Visual & Motion", items: ["Illustrator", "Photoshop", "After Effects", "Lottie", "Spline"] },
      { title: "Collaboration", items: ["Notion", "Zeplin", "Jira", "Slack", "Storybook"] },
    ],
  },
  industries: {
    eyebrow: "Industries",
    title: "Design for",
    accent: "Every Context",
    items: ["SaaS", "Fintech", "Healthcare", "eCommerce", "Education", "Travel", "Real Estate", "Startups"],
  },
  hire: { roleId: "ui-ux-designers", title: "Need a UI/UX designer on your team?", body: "Hire product designers who turn research into interfaces users love." },
  faqs: [
    { q: "What is included in your UI/UX design service?", a: "Research, user journeys, wireframes, interactive prototypes, high-fidelity UI and a design system with developer handoff. You can engage us for the full process or a single phase." },
    { q: "Do you design for both web and mobile?", a: "Yes. We design responsive websites, web applications, SaaS dashboards and native or cross-platform mobile apps." },
    { q: "Can you redesign our existing product?", a: "Yes. We start with a UX audit and analytics review to find friction points, then redesign the experience while respecting what already works." },
    { q: "Which design tools do you use?", a: "Figma is our primary tool for design, prototyping and design systems, supported by research and testing tools like Maze and Hotjar." },
    { q: "Do you test designs with real users?", a: "Yes. We run usability tests on prototypes to validate flows before development, which saves time and cost later." },
    { q: "Can your team also build the design?", a: "Yes. Our frontend and mobile developers build designs exactly as specified, so nothing gets lost between design and development." },
  ],
  related: [FRONTEND_DEVELOPMENT_ROUTE, MOBILE_APP_DEVELOPMENT_ROUTE, PRODUCT_ENGINEERING_ROUTE],
  cta: { eyebrow: "Design with us", title: "Design an Experience", accent: "Users Remember", body: "Share your product goals and we will show you where design can unlock growth." },
};

export const PRODUCT_ELITE: EliteService = {
  route: PRODUCT_ENGINEERING_ROUTE,
  name: "Product Engineering",
  accent: "gold",
  ticker: ["Product Strategy", "MVP Development", "SaaS Platforms", "System Architecture", "Cloud Native", "Feature Development", "Performance", "Analytics", "AI Integration", "Scalability", "Maintenance", "Roadmapping"],
  offerings: {
    eyebrow: "What we deliver",
    title: "Products Engineered",
    accent: "End to End",
    body: "One accountable team from first idea to scaled product, so strategy, design and engineering never drift apart.",
    items: [
      { icon: Target, title: "Product Strategy & Discovery", body: "Validate the problem, define the audience and prioritise the features that matter.", points: ["Market validation", "Feature prioritisation", "Success metrics"] },
      { icon: Rocket, title: "MVP Development", body: "Launch a focused first version fast, then learn from real users.", points: ["Lean scope", "Rapid sprints", "Launch analytics"] },
      { icon: Boxes, title: "SaaS Platform Engineering", body: "Multi-tenant platforms with billing, roles and admin tooling built in.", points: ["Multi-tenancy", "Subscription billing", "Admin consoles"] },
      { icon: Network, title: "Architecture & Scalability", body: "Cloud-native architecture designed to grow from hundreds to millions of users.", points: ["Cloud-native design", "Microservices", "Cost optimisation"] },
      { icon: BrainCircuit, title: "AI & Automation Features", body: "Practical AI features such as search, recommendations and assistants that add real value.", points: ["LLM integrations", "Smart search", "Workflow automation"] },
      { icon: LifeBuoy, title: "Maintenance & Evolution", body: "Long-term support, monitoring and continuous delivery of new features.", points: ["SLAs & monitoring", "Tech debt reduction", "Feature roadmap"] },
    ],
  },
  statement: {
    eyebrow: "The product mindset",
    title: "We Ship Outcomes,",
    accent: "Not Just Code",
    quote: "Features are easy to build. Building the right features, at the right time, for the right users is the craft.",
    benefits: [
      { icon: Users, title: "One accountable team", body: "Strategy, design, engineering and QA under one roof with a single point of contact." },
      { icon: BarChart3, title: "Data-driven roadmap", body: "Analytics and user feedback decide what ships next." },
      { icon: GitBranch, title: "Continuous delivery", body: "Small, frequent releases that reduce risk and speed up learning." },
      { icon: TrendingUp, title: "Built to scale", body: "Architecture choices that keep costs predictable as you grow." },
    ],
  },
  process: {
    eyebrow: "Product lifecycle",
    title: "From Concept to",
    accent: "Scale",
    steps: [
      { title: "Discover", body: "Problem validation, user research and product vision.", deliverable: "Product vision & roadmap" },
      { title: "Design", body: "UX flows, prototypes and technical architecture.", deliverable: "Prototype & architecture" },
      { title: "Build MVP", body: "Lean, high-quality first release in focused sprints.", deliverable: "Launch-ready MVP" },
      { title: "Launch & Learn", body: "Release, measure adoption and gather feedback.", deliverable: "Analytics & insights" },
      { title: "Scale", body: "Iterate on what works, harden infrastructure and grow.", deliverable: "Scaled platform" },
    ],
  },
  stack: {
    eyebrow: "Technology",
    title: "Product",
    accent: "Stack",
    groups: [
      { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      { title: "Backend", items: ["Node.js", "Python", "GraphQL", "PostgreSQL", "Redis"] },
      { title: "Cloud & DevOps", items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD"] },
      { title: "Product & Analytics", items: ["Mixpanel", "Google Analytics", "Stripe", "OpenAI", "Sentry"] },
    ],
  },
  industries: {
    eyebrow: "Industries",
    title: "Products for",
    accent: "Ambitious Teams",
    items: ["SaaS", "Startups", "Fintech", "Healthcare", "Education", "Marketplaces", "Logistics", "Enterprise"],
  },
  hire: { roleId: "full-stack-developers", title: "Need a product team, fast?", body: "Hire full-stack developers who own features end to end, from database to interface." },
  faqs: [
    { q: "What is product engineering?", a: "Product engineering covers the full lifecycle of a digital product: strategy, design, development, testing, launch and ongoing improvement, delivered by one accountable team." },
    { q: "Can you build an MVP for my startup?", a: "Yes. We help you define a lean scope, build a high-quality MVP in focused sprints and launch with analytics so you can learn from real users quickly." },
    { q: "Do you work with existing products?", a: "Yes. We can take over an existing product, stabilise it, reduce technical debt and continue delivering new features." },
    { q: "How do you decide which features to build?", a: "We prioritise based on user research, business goals and analytics, so engineering effort always goes to the features with the biggest impact." },
    { q: "Can you add AI features to our product?", a: "Yes. We integrate practical AI features such as smart search, recommendations, summarisation and assistants using leading LLM providers." },
    { q: "Do you offer long-term support?", a: "Yes. Many clients keep us as their ongoing product team, with monitoring, maintenance and a continuous feature roadmap." },
  ],
  related: [SOFTWARE_DEVELOPMENT_ROUTE, UI_UX_DESIGN_ROUTE, DEVELOPMENT_PROCESS_ROUTE],
  cta: { eyebrow: "Build your product", title: "Turn Your Idea Into a", accent: "Product That Lasts", body: "Tell us where you are today and we will plan the path from concept to a scalable product." },
};

export const BUSINESS_ELITE: EliteService = {
  route: BUSINESS_SOLUTIONS_ROUTE,
  name: "Business Solutions",
  accent: "gold",
  ticker: ["CRM Systems", "ERP Solutions", "Inventory Management", "HR & Payroll", "Billing & Invoicing", "Workflow Automation", "Reporting Dashboards", "Customer Portals", "Booking Systems", "Integrations", "Role-Based Access", "Cloud Hosting"],
  offerings: {
    eyebrow: "What we build",
    title: "Software That Runs",
    accent: "Your Business Better",
    body: "Custom internal tools that replace spreadsheets, connect your teams and give leaders real-time clarity.",
    items: [
      { icon: Users, title: "CRM & Customer Platforms", body: "Track leads, customers and conversations in a CRM shaped around your sales process.", points: ["Pipeline management", "Customer portals", "Email & WhatsApp sync"] },
      { icon: PackageCheck, title: "Inventory & Supply Chain", body: "Real-time stock, purchase orders and warehouse workflows across locations.", points: ["Multi-location stock", "Barcode & QR", "Reorder alerts"] },
      { icon: ClipboardList, title: "HR & Employee Management", body: "Attendance, leave, payroll and performance in one secure system.", points: ["Attendance & leave", "Payroll workflows", "Employee self-service"] },
      { icon: CreditCard, title: "Billing & Invoicing", body: "Automated invoices, GST-ready billing, payments and reminders.", points: ["Recurring billing", "Payment gateways", "Tax-ready invoices"] },
      { icon: Workflow, title: "Workflow Automation", body: "Approvals, notifications and repetitive tasks handled automatically.", points: ["Approval chains", "Automated alerts", "Third-party integrations"] },
      { icon: BarChart3, title: "Reporting & Analytics", body: "Live dashboards that turn operational data into decisions.", points: ["KPI dashboards", "Scheduled reports", "Data exports"] },
    ],
  },
  statement: {
    eyebrow: "Why custom",
    title: "Stop Adapting to Software.",
    accent: "Make It Adapt to You.",
    quote: "Off-the-shelf tools force your team into someone else's process. Custom software encodes the way you actually win.",
    benefits: [
      { icon: Zap, title: "Hours saved every week", body: "Automate manual data entry, approvals and reporting that slow your team down." },
      { icon: Lock, title: "Secure & role-based", body: "Granular permissions, audit trails and encrypted data for peace of mind." },
      { icon: Plug, title: "Connected systems", body: "Integrate accounting, payments, CRM and communication tools you already use." },
      { icon: TrendingUp, title: "Grows with you", body: "Add modules, users and locations without per-seat licence surprises." },
    ],
  },
  process: {
    eyebrow: "How we deliver",
    title: "From Workflow to",
    accent: "Working Software",
    steps: [
      { title: "Process Mapping", body: "Shadow your teams and map current workflows, pain points and goals.", deliverable: "Process map" },
      { title: "Solution Design", body: "Modules, data model, roles and integrations designed around your process.", deliverable: "Solution blueprint" },
      { title: "Build in Phases", body: "Launch the highest-impact module first, then expand.", deliverable: "Working modules" },
      { title: "Migrate & Train", body: "Move existing data safely and train your team for adoption.", deliverable: "Data migration & training" },
      { title: "Support & Evolve", body: "Ongoing support, improvements and new modules as you grow.", deliverable: "Support plan" },
    ],
  },
  stack: {
    eyebrow: "Technology",
    title: "Built on a",
    accent: "Proven Stack",
    groups: [
      { title: "Application", items: ["React", "Next.js", "Node.js", "Python", "TypeScript"] },
      { title: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
      { title: "Integrations", items: ["Stripe", "Razorpay", "HubSpot", "Salesforce", "Tally", "Google Workspace"] },
      { title: "Cloud", items: ["AWS", "Azure", "Google Cloud", "Docker"] },
    ],
  },
  industries: {
    eyebrow: "Industries",
    title: "Solutions for",
    accent: "Real Operations",
    items: ["Manufacturing", "Retail", "Logistics", "Healthcare", "Education", "Hospitality", "Real Estate", "Professional Services"],
  },
  hire: { roleId: "full-stack-developers", title: "Want a dedicated team for your internal tools?", body: "Hire full-stack developers who understand business workflows and ship reliable systems." },
  faqs: [
    { q: "What kind of business software do you build?", a: "CRMs, ERPs, inventory and supply-chain systems, HR and payroll platforms, billing and invoicing tools, booking systems, customer portals and reporting dashboards." },
    { q: "Why choose custom software over off-the-shelf tools?", a: "Custom software fits your exact workflow, integrates with your existing tools, avoids per-seat licence costs and grows as your business changes." },
    { q: "Can you migrate data from spreadsheets or old systems?", a: "Yes. We plan and execute safe data migrations from spreadsheets, legacy software and third-party tools, with validation at every step." },
    { q: "Can the software integrate with our accounting and payment tools?", a: "Yes. We integrate with payment gateways, accounting software, CRMs, email, WhatsApp and Google Workspace." },
    { q: "Is the software secure?", a: "We implement role-based access control, audit logs, encrypted data, regular backups and secure cloud hosting." },
    { q: "Do you provide training and support?", a: "Yes. We train your team during rollout and offer ongoing support, maintenance and new module development." },
  ],
  related: [SOFTWARE_DEVELOPMENT_ROUTE, BACKEND_DEVELOPMENT_ROUTE, WEB_DEVELOPMENT_ROUTE],
  cta: { eyebrow: "Streamline operations", title: "Build the System Your", accent: "Business Deserves", body: "Walk us through your workflow and we will show you what to automate first." },
};

export const PROCESS_ELITE: EliteService = {
  route: DEVELOPMENT_PROCESS_ROUTE,
  name: "Development Process",
  accent: "emerald",
  ticker: ["Discovery", "Requirement Analysis", "Product Planning", "UI/UX Design", "Agile Sprints", "Code Review", "Automated Testing", "CI/CD", "Deployment", "Monitoring", "Maintenance", "Continuous Improvement"],
  offerings: {
    eyebrow: "What you get",
    title: "A Process Built for",
    accent: "Predictable Delivery",
    body: "Clear plans, visible progress and quality gates at every stage, so there are no surprises on launch day.",
    items: [
      { icon: FileSearch, title: "Discovery & Requirements", body: "Workshops that turn ideas into clear, prioritised requirements and acceptance criteria.", points: ["Stakeholder workshops", "User stories", "Scope & estimates"] },
      { icon: CalendarCheck, title: "Sprint Planning", body: "Two-week sprints with clear goals, owners and demo-ready outcomes.", points: ["Prioritised backlog", "Sprint goals", "Velocity tracking"] },
      { icon: GitBranch, title: "Engineering Best Practices", body: "Code review, branching strategy and documentation on every change.", points: ["Peer code review", "Git workflows", "Living documentation"] },
      { icon: TestTube2, title: "Quality Assurance", body: "Automated and manual testing that catches issues before your users do.", points: ["Unit & E2E tests", "Regression suites", "Device testing"] },
      { icon: Cloud, title: "CI/CD & Deployment", body: "Automated pipelines for safe, repeatable releases with instant rollback.", points: ["Preview environments", "Zero-downtime deploys", "Rollback plans"] },
      { icon: Bell, title: "Monitoring & Support", body: "Post-launch monitoring, incident response and continuous improvement.", points: ["Uptime monitoring", "Error tracking", "Support SLAs"] },
    ],
  },
  statement: {
    eyebrow: "Our promise",
    title: "Transparency at",
    accent: "Every Step",
    quote: "You should never have to ask what your development team is doing. With us, you will always know.",
    benefits: [
      { icon: CalendarCheck, title: "Regular demos", body: "See working software at the end of every sprint, not just status reports." },
      { icon: ClipboardList, title: "Shared visibility", body: "Access to the backlog, board and progress in the tools you prefer." },
      { icon: ShieldCheck, title: "Quality gates", body: "Code review, automated tests and QA sign-off before anything reaches production." },
      { icon: Repeat, title: "Adapts to change", body: "Agile planning lets priorities shift without derailing delivery." },
    ],
  },
  process: {
    eyebrow: "The lifecycle",
    title: "Five Stages,",
    accent: "Zero Guesswork",
    steps: [
      { title: "Requirement Analysis", body: "Goals, users, constraints and success metrics documented and agreed.", deliverable: "Requirements document" },
      { title: "Planning & Design", body: "Architecture, UX flows, prototypes and a sprint roadmap.", deliverable: "Roadmap & prototype" },
      { title: "Development", body: "Agile sprints with code review and demos every two weeks.", deliverable: "Working increments" },
      { title: "Testing & Launch", body: "QA, user acceptance testing and a monitored production release.", deliverable: "Production release" },
      { title: "Maintain & Improve", body: "Monitoring, support and continuous improvement after launch.", deliverable: "Support & roadmap" },
    ],
  },
  stack: {
    eyebrow: "Tooling",
    title: "Tools That Keep",
    accent: "Delivery Visible",
    groups: [
      { title: "Planning", items: ["Jira", "Linear", "Notion", "Confluence", "FigJam"] },
      { title: "Engineering", items: ["GitHub", "GitLab", "Docker", "VS Code", "Postman"] },
      { title: "Quality", items: ["Jest", "Playwright", "Cypress", "SonarQube", "BrowserStack"] },
      { title: "Release & Monitoring", items: ["GitHub Actions", "Vercel", "AWS", "Sentry", "Grafana"] },
    ],
  },
  industries: {
    eyebrow: "Applied everywhere",
    title: "Proven Across",
    accent: "Industries",
    items: ["SaaS", "Fintech", "Healthcare", "eCommerce", "Education", "Logistics", "Startups", "Enterprise"],
  },
  hire: { roleId: "full-stack-developers", title: "Want this process on your project?", body: "Hire a dedicated development team that works the way we describe here, inside your tools." },
  faqs: [
    { q: "What development methodology do you follow?", a: "We use an agile, sprint-based process with two-week sprints, regular demos, prioritised backlogs and continuous integration, adapted to your team's way of working." },
    { q: "How do you estimate timelines and cost?", a: "After discovery we break the scope into user stories, estimate them with the delivery team and share a sprint-by-sprint roadmap with cost ranges." },
    { q: "How will I track progress?", a: "You get access to the project board, regular demos of working software, progress updates and a single point of contact for questions." },
    { q: "How do you ensure quality?", a: "Every change goes through peer code review, automated tests and QA before release, with user acceptance testing before major launches." },
    { q: "What happens if requirements change mid-project?", a: "Agile planning lets us reprioritise the backlog each sprint, so changes are absorbed transparently with clear impact on timeline and budget." },
    { q: "Do you support the product after launch?", a: "Yes. We offer monitoring, maintenance, bug fixes and continuous feature development after launch." },
  ],
  related: [PRODUCT_ENGINEERING_ROUTE, SOFTWARE_DEVELOPMENT_ROUTE, UI_UX_DESIGN_ROUTE],
  cta: { eyebrow: "Work with us", title: "Experience Delivery", accent: "Without Surprises", body: "Tell us about your project and we will walk you through exactly how we would deliver it." },
};

export const ELITE_BY_ROUTE: Record<string, EliteService> = Object.fromEntries(
  [MOBILE_ELITE, FRONTEND_ELITE, BACKEND_ELITE, UIUX_ELITE, PRODUCT_ELITE, BUSINESS_ELITE, PROCESS_ELITE].map((s) => [s.route, s]),
);

export const SOFTWARE_DEV_FAQS: EliteFaq[] = [
  { q: "What types of software do you develop?", a: "Custom web applications, SaaS platforms, mobile apps, enterprise systems, internal business tools, APIs and integrations, from startup MVPs to large-scale platforms." },
  { q: "How long does custom software development take?", a: "An MVP usually takes 8 to 16 weeks, while larger platforms are delivered in phases. After discovery we share a detailed, sprint-by-sprint roadmap." },
  { q: "Which technologies do you use?", a: "React, Next.js and TypeScript on the frontend; Node.js and Python on the backend; PostgreSQL, MongoDB and Redis for data; and AWS, Google Cloud or Azure for hosting." },
  { q: "Do I own the source code?", a: "Ownership terms are agreed in your contract before work begins, and we deliver code into repositories you control." },
  { q: "Can you work with our in-house team?", a: "Yes. We can augment your team with dedicated developers or take full ownership of delivery, whichever fits best." },
  { q: "Do you provide maintenance after launch?", a: "Yes. We offer ongoing maintenance, monitoring, security updates and feature development." },
];

export const HUB_FAQS: EliteFaq[] = [
  { q: "What design and development services do you offer?", a: "Software development, web development, mobile app development, frontend and backend development, UI/UX design, product engineering, custom business solutions and a transparent end-to-end development process." },
  { q: "Can one team handle design, development and launch?", a: "Yes. Our designers, frontend, backend and mobile engineers work as one team, so your product moves from idea to launch without handoffs between agencies." },
  { q: "Do you build SEO-friendly websites and apps?", a: "Yes. Because we are also an SEO agency, every website we build ships with fast performance, clean structure and technical SEO best practices." },
  { q: "Can I hire dedicated developers instead of a project?", a: "Yes. You can hire dedicated web, app, React, Node.js and full-stack developers or UI/UX designers who join your team and tools." },
  { q: "How do projects start?", a: "Book a free consultation. We discuss your goals, recommend an approach and share a clear scope, timeline and estimate." },
  { q: "Do you work with clients outside India?", a: "Yes. Our team is based in Kolkata, India, and works with clients worldwide with overlapping hours for meetings and updates." },
];

import {
  Activity,
  ArrowRightLeft,
  BarChart3,
  AlertTriangle,
  ArrowDownRight,
  ArrowUpRight,
  BadgeDollarSign,
  ClipboardList,
  Code2,
  Copy,
  Database,
  FileSearch,
  Gauge,
  GitBranch,
  Globe,
  Layers,
  Link2,
  Monitor,
  Percent,
  ScanSearch,
  Search,
  Shield,
  Sparkles,
  Lock,
  Server,
  ShoppingCart,
  Smartphone,
  Star,
  Target,
  Trophy,
  Users,
  TrendingDown,
  TrendingUp,
  Wrench,
  Zap,
} from "lucide-react";

export const technicalHero = {
  eyebrow: "TECHNICAL SEO SERVICES",
  titleLine1: "Technical SEO Services That Build A Strong",
  titleLine2: "Search Foundation",
  paragraph1:
    "Technical SEO is the foundation of every successful SEO campaign. You can publish great content, build backlinks, and invest heavily in marketing — but if search engines cannot properly crawl, index, and understand your website, your rankings will eventually suffer.",
  paragraph2:
    "Our technical SEO services help businesses identify and fix the backend issues preventing websites from reaching their full organic search potential.",
  features: [
    { label: "Improve Crawlability", icon: Search },
    { label: "Boost Rankings", icon: TrendingUp },
    { label: "Increase Conversions", icon: Target },
    { label: "Drive Organic Growth", icon: Zap },
  ],
  primaryCta: "Get Your Technical SEO Audit",
  secondaryCta: "View Our Services",
  secondaryHref: "#technical-services",
  score: 92,
  scoreMax: 100,
  scoreLabel: "Excellent",
  scoreDelta: "+22% vs last 30 days",
  healthTitle: "Website Technical Health",
  bars: [
    { label: "Crawlability", pct: 85 },
    { label: "Index Coverage", pct: 90 },
    { label: "Site Speed", pct: 97 },
    { label: "Core Web Vitals", pct: 80 },
  ],
  crawlErrors: {
    label: "Crawl Errors",
    value: "12",
    delta: "-38% vs last 30 days",
  },
  pagesIndexed: {
    label: "Pages Indexed",
    value: "8,428",
    delta: "+16%",
  },
} as const;

export const technicalIssues = {
  titleBefore: "Technical Issues Are Silently ",
  titleAccent: "Killing Rankings",
  subtitle:
    "Hidden technical problems prevent search engines from crawling, indexing, and understanding your website — costing you traffic, rankings, and revenue.",
  hubLabel: "YOUR WEBSITE",
  spokes: [
    {
      title: "Crawl Errors",
      description: "Search engines can't access important pages",
      icon: AlertTriangle,
      position: "top-center" as const,
    },
    {
      title: "Slow Page Speed",
      description: "Slow websites frustrate users and hurt your search rankings",
      icon: Gauge,
      position: "top-right" as const,
    },
    {
      title: "Indexing Issues",
      description: "Important pages may not get indexed and remain invisible in search",
      icon: Database,
      position: "mid-right" as const,
    },
    {
      title: "Redirect Problems",
      description: "Incorrect redirects waste crawl budget and lose link equity",
      icon: ArrowRightLeft,
      position: "bottom-right" as const,
    },
    {
      title: "Mobile Usability",
      description: "Poor mobile experience leads to lower rankings and engagement",
      icon: Smartphone,
      position: "bottom-center" as const,
    },
    {
      title: "Duplicate Content",
      description: "Duplicate pages confuse search engines and dilute your rankings",
      icon: Copy,
      position: "mid-left" as const,
    },
    {
      title: "Broken Internal Links",
      description: "Broken links stop crawlers and users from finding your content",
      icon: Link2,
      position: "top-left" as const,
    },
  ],
  without: {
    title: "Without Technical SEO",
    items: [
      { label: "Traffic Decreases", icon: BarChart3 },
      { label: "Rankings Drop", icon: TrendingDown },
      { label: "Conversions Decline", icon: Percent },
    ],
  },
  with: {
    title: "With Technical SEO",
    items: [
      { label: "Traffic Increases", icon: BarChart3 },
      { label: "Rankings Improve", icon: BadgeDollarSign },
      { label: "Conversions Grow", icon: TrendingUp },
    ],
  },
} as const;

export const whatIsTechnicalSeo = {
  titleBefore: "What Is ",
  titleAccent: "Technical SEO?",
  body: "Technical SEO is the process of optimizing a website's technical infrastructure so search engines can efficiently:",
  checklist: [
    "Crawl pages",
    "Index content",
    "Understand site structure",
    "Render pages correctly",
    "Evaluate user experience signals",
  ],
  hubLabel: "Technical SEO",
  hubSpokes: [
    { label: "Core Web Vitals", icon: Activity, position: "top-center" as const },
    { label: "Crawlability", icon: ScanSearch, position: "top-right" as const },
    { label: "XML Sitemaps", icon: Layers, position: "mid-right" as const },
    { label: "Structured Data", icon: Code2, position: "bottom-right" as const },
    { label: "Mobile Usability", icon: Smartphone, position: "bottom-center" as const },
    { label: "Site Speed", icon: Gauge, position: "mid-left" as const },
    { label: "HTTPS Security", icon: Shield, position: "top-left" as const },
  ],
} as const;

export const whyTechnicalSeo = {
  titleBefore: "Why Technical SEO ",
  titleAccent: "Matters",
  lead: "Many websites struggle to rank not because of poor content, but because search engines encounter technical barriers that prevent crawling, indexing, and performance at scale.",
  withoutTitle: "Without Technical SEO",
  without: [
    "Pages blocked from indexing",
    "Slow loading pages",
    "Poor crawl efficiency",
    "Bad user experience",
    "Low conversions & traffic",
  ],
  withTitle: "With Technical SEO",
  with: [
    "Pages easily indexed",
    "Fast loading pages",
    "Efficient crawling",
    "Great user experience",
    "Higher conversions & traffic",
  ],
  impactTitle: "Even small technical problems can affect:",
  impacts: [
    { label: "Rankings", icon: Trophy },
    { label: "Crawl Efficiency", icon: ScanSearch },
    { label: "User Experience", icon: Target },
    { label: "Conversions", icon: BadgeDollarSign },
    { label: "Organic Traffic", icon: Users },
  ],
  bannerBefore:
    "As many enterprise SEO professionals discuss, technical SEO becomes even more critical for larger websites where developer changes, migrations, and indexing issues can quickly affect ",
  bannerAccent: "thousands of pages.",
} as const;

export const technicalServices = {
  title: "Our Technical SEO Services",
  intro: "Comprehensive technical optimization—from audits and crawl fixes to migrations and enterprise-scale monitoring.",
  sidebar: {
    titleBefore: "Not sure where to ",
    titleAccent: "start?",
    text: "Get a detailed audit and a custom roadmap for your website.",
    features: [
      { label: "Find hidden technical issues", icon: Search },
      { label: "Improve rankings and performance", icon: TrendingUp },
      { label: "Build a strong SEO foundation", icon: Shield },
    ],
    cta: "Get Free Audit",
    footer: "No obligation. 100% free.",
    stats: {
      issues: { label: "Technical Issues Found", value: "24" },
      score: { label: "SEO Score", value: "92/100" },
      pages: { label: "Pages Analyzed", value: "1,248" },
    },
  },
  items: [
    {
      title: "Technical SEO Audit",
      description: "Deep crawl analysis, issue prioritization, and executive-ready reporting.",
      icon: FileSearch,
    },
    {
      title: "Crawl & Indexation Optimization",
      description: "Robots.txt, sitemaps, canonicals, and crawl budget efficiency.",
      icon: Server,
    },
    {
      title: "Site Speed Optimization",
      description: "Template-level performance fixes for faster load and better UX.",
      icon: Zap,
    },
    {
      title: "Core Web Vitals Optimization",
      description: "LCP, INP, and CLS improvements tracked in lab and field data.",
      icon: Activity,
    },
    {
      title: "Mobile SEO Optimization",
      description: "Mobile usability, responsive design signals, and mobile-first indexing.",
      icon: Smartphone,
    },
    {
      title: "Structured Data & Schema Markup",
      description: "Valid schema for rich results, entities, and answer surfaces.",
      icon: Code2,
    },
    {
      title: "XML Sitemap & Robots.txt",
      description: "Clean discovery files aligned with your indexation strategy.",
      icon: Layers,
    },
    {
      title: "eCommerce SEO Optimization",
      description: "Faceted navigation, product URLs, and category architecture at scale.",
      icon: ShoppingCart,
    },
    {
      title: "Website Migration SEO",
      description: "Pre/post-migration audits, redirects, and traffic protection.",
      icon: Globe,
    },
  ],
} as const;

export const technicalProblemsRow = {
  title: "Common Technical SEO Problems We Solve",
  items: [
    {
      label: "Slow Website Performance",
      description: "Core Web Vitals and load-time issues hurting rankings and UX.",
      icon: Gauge,
      color: "#f59e0b",
      bg: "#fffbeb",
    },
    {
      label: "Indexing Issues",
      description: "Important pages blocked, orphaned, or stuck in crawl queues.",
      icon: Search,
      color: "#3b82f6",
      bg: "#eff6ff",
    },
    {
      label: "Broken Internal Linking",
      description: "Dead links and weak architecture wasting crawl budget.",
      icon: Link2,
      color: "#ef4444",
      bg: "#fef2f2",
    },
    {
      label: "Duplicate Content & URLs",
      description: "Canonical conflicts and parameter URLs diluting visibility.",
      icon: Copy,
      color: "#8b5cf6",
      bg: "#f5f3ff",
    },
    {
      label: "JavaScript SEO Problems",
      description: "Rendering gaps preventing search engines from seeing content.",
      icon: Code2,
      color: "#06b6d4",
      bg: "#ecfeff",
    },
    {
      label: "Redirect & Canonical Problems",
      description: "Chains, loops, and misconfigured redirects losing equity.",
      icon: ArrowRightLeft,
      color: "#ec4899",
      bg: "#fdf2f8",
    },
    {
      label: "Poor Mobile Experience",
      description: "Mobile usability failures and layout issues on key templates.",
      icon: Monitor,
      color: "#22c55e",
      bg: "#f0fdf4",
    },
  ],
} as const;

export const technicalEnterprise = {
  title: "Enterprise Technical SEO",
  description:
    "Large websites require advanced technical SEO strategies to manage scale, crawl budget, and indexation efficiency.",
  features: [
    { label: "Crawl Budget Management", icon: ClipboardList },
    { label: "Log File Analysis", icon: FileSearch },
    { label: "Indexation Management", icon: Monitor },
    { label: "Internal Linking at Scale", icon: Link2 },
    { label: "Scalable Technical Solutions", icon: Wrench },
  ],
} as const;

export const technicalProcess = {
  title: "Our Technical SEO Process",
  steps: [
    {
      num: "01",
      title: "Audit & Analysis",
      desc: "We identify technical issues and opportunities.",
    },
    {
      num: "02",
      title: "Strategy & Roadmap",
      desc: "We create a prioritized technical SEO plan.",
    },
    {
      num: "03",
      title: "Implementation",
      desc: "We fix issues and implement solutions.",
    },
    {
      num: "04",
      title: "Monitoring & Growth",
      desc: "We monitor, optimize, and drive continuous growth.",
    },
  ],
} as const;

export const technicalWhyChoose = {
  title: "Why Choose Us for Technical SEO?",
  items: [
    {
      title: "Technical Experts",
      description: "Specialists in crawlability, performance, schema, and large-site architecture.",
      icon: Wrench,
    },
    {
      title: "Data-Driven Approach",
      description: "Every recommendation tied to crawl data, CWV, and measurable business impact.",
      icon: BarChart3,
    },
    {
      title: "Developer Collaboration",
      description: "We work directly with your engineering team—not just marketing.",
      icon: Users,
    },
    {
      title: "Results That Matter",
      description: "Indexation, speed, and rankings improvements you can track and report.",
      icon: TrendingUp,
    },
  ],
} as const;

export const technicalFaqs = [
  {
    q: "What is technical SEO?",
    a: "Technical SEO optimizes site infrastructure—crawlability, speed, mobile usability, indexation, schema, and architecture—so search engines can access and rank your content.",
  },
  {
    q: "How is technical SEO different from on-page SEO?",
    a: "On-page SEO focuses on content and keywords on individual pages. Technical SEO fixes the underlying systems that allow those pages to be crawled, indexed, and served quickly.",
  },
  {
    q: "How long does a technical SEO audit take?",
    a: "Most audits are delivered within 1–2 weeks depending on site size. Enterprise sites may include phased discovery and log analysis.",
  },
  {
    q: "Do you help implement fixes?",
    a: "Yes. We provide developer-ready documentation, acceptance criteria, and QA support through implementation.",
  },
  {
    q: "Can you help with site migrations?",
    a: "Absolutely. We manage redirect mapping, staging reviews, pre-launch checks, and post-migration monitoring.",
  },
] as const;

export const technicalFinalCta = {
  title: "Ready to Fix The Technical Issues Holding Back Your Rankings?",
  subtitle: "Get a free technical SEO audit and a clear plan to recover crawl efficiency, speed, and index coverage.",
  checklist: [
    "Comprehensive technical audit",
    "Prioritized fix roadmap",
    "Developer-ready documentation",
    "Ongoing monitoring support",
  ],
  primaryLabel: "Get Your Free Audit",
} as const;

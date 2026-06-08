import {
  Brain,
  BrainCircuit,
  Building2,
  FileSearch,
  FileStack,
  FileText,
  Gem,
  Network,
  Link2,
  Link as LinkIcon,
  List,
  ListOrdered,
  MessageCircle,
  Search,
  Shield,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  Target,
  TrendingUp,
} from "lucide-react";

export const aiSeoHero = {
  badge: "AI-FIRST SEO STRATEGIES",
  title:
    "AI SEO Services for Visibility in AI Search, ChatGPT & Generative Engines",
  subtitle:
    "We help brands become the source AI engines trust, cite, and recommend in answers across ChatGPT, Google AI Overviews, Gemini, Perplexity and more.",
  primaryCta: "Book a Strategy Call",
  secondaryCta: "View Case Studies",
  secondaryHref: "/seo",
  trustLabel: "Trusted by forward-thinking brands worldwide",
  brands: ["HubSpot", "Adobe", "Canva", "zendesk", "Intuit", "SIEMENS"],
  calloutTitle: "AI is changing search.",
  calloutBody: "We make sure AI recommends you.",
  hubLabel: "YOUR BRAND",
  platforms: [
    { id: "chatgpt", label: "ChatGPT", position: "top" as const },
    { id: "google-ai", label: "Google AI Overviews", position: "top-left" as const },
    { id: "gemini", label: "Gemini", position: "top-right" as const },
    { id: "claude", label: "Claude", position: "bottom-left" as const },
    { id: "perplexity", label: "Perplexity", position: "bottom-right" as const },
  ],
} as const;

export const aiSeoEvolution = {
  badge: "SEARCH IS EVOLVING",
  titleBefore: "From Links to",
  titleAccent: "AI Answers",
  subtitle:
    "Search behavior is shifting from browsing multiple websites to getting instant, AI-generated answers.",
  steps: [
    {
      year: "2018",
      label: "Links",
      description: "Users relied on blue links to find information.",
      icon: LinkIcon,
      highlight: false,
    },
    {
      year: "2022",
      label: "Featured Snippets",
      description: "Answers started appearing at the top of search.",
      icon: ListOrdered,
      highlight: false,
    },
    {
      year: "2025",
      label: "AI Answers",
      description: "AI summarizes information and delivers instant answers.",
      icon: Sparkles,
      highlight: true,
      hereBadge: "WE ARE HERE",
    },
    {
      year: "2026+",
      label: "Conversational Search",
      description: "AI understands context and delivers personalized responses.",
      icon: MessageCircle,
      highlight: false,
    },
  ],
  footerBefore: "The future of search is here. Make sure your brand is ",
  footerAccent: "part of the answer.",
} as const;

export const aiSeoWhatIs = {
  title: "What Is AI SEO?",
  description:
    "AI SEO is the process of optimizing your digital presence so AI systems can understand, trust, retrieve, and recommend your content in generated answers.",
  hubLabel: "AI SEO",
  spokes: [
    {
      label: "Traditional SEO",
      side: "left" as const,
      icon: TrendingUp,
      color: "text-violet-600 bg-violet-50",
    },
    {
      label: "Entity Optimization",
      side: "left" as const,
      icon: ShieldCheck,
      color: "text-violet-600 bg-violet-50",
    },
    {
      label: "Structured Content",
      side: "left" as const,
      icon: Network,
      color: "text-violet-600 bg-violet-50",
    },
    {
      label: "Semantic Search Optimization",
      side: "right" as const,
      icon: Target,
      color: "text-rose-500 bg-rose-50",
    },
    {
      label: "Answer Engine Optimization (AEO)",
      side: "right" as const,
      icon: Brain,
      color: "text-orange-500 bg-orange-50",
    },
    {
      label: "Generative Engine Optimization (GEO)",
      side: "right" as const,
      icon: Gem,
      color: "text-fuchsia-500 bg-fuchsia-50",
    },
    {
      label: "LLM Visibility Strategies",
      side: "bottom" as const,
      icon: FileSearch,
      color: "text-emerald-600 bg-emerald-50",
    },
  ],
} as const;

export const aiSeoWhyMatters = {
  title: "Why AI SEO Matters Now",
  description:
    "AI systems summarize information directly in search results. If you're not optimized for AI, you're invisible.",
  features: [
    { label: "Trusted Sources", icon: Star },
    { label: "Structured Content", icon: FileStack },
    { label: "Topical Authority", icon: Network },
    { label: "Semantic Clarity", icon: Brain },
    { label: "Entity Relationships", icon: Link2 },
    { label: "Factual Accuracy", icon: ShieldCheck },
  ],
  banner:
    "Becoming a trusted source of truth is more important than ever before.",
} as const;

export const aiSeoVisibility = {
  title: "Your AI Visibility Score",
  subtitle:
    "We analyze how visible your brand is across AI search engines and generative platforms.",
  cta: "Run Your AI Visibility Audit",
  metrics: [
    { value: 72, label: "ChatGPT Visibility", color: "#8b5cf6", track: "rgba(139,92,246,0.2)" },
    { value: 64, label: "Gemini Visibility", color: "#3b82f6", track: "rgba(59,130,246,0.2)" },
    { value: 88, label: "Perplexity Presence", color: "#2dd4bf", track: "rgba(45,212,191,0.2)" },
    { value: 91, label: "Entity Strength", color: "#f97316", track: "rgba(249,115,22,0.2)" },
    { value: 79, label: "Citation Score", color: "#ec4899", track: "rgba(236,72,153,0.2)" },
  ],
} as const;

export const aiSeoServices = {
  badge: "OUR AI SEO SERVICES",
  title: "Complete AI SEO Solutions for Maximum Visibility",
  items: [
    {
      title: "Generative Engine Optimization (GEO)",
      description:
        "Increase your visibility in AI-generated answers across ChatGPT, Gemini, Perplexity, Claude & more.",
      gradient: "from-violet-500 to-purple-600",
      icon: Sparkles,
    },
    {
      title: "Answer Engine Optimization (AEO)",
      description:
        "Optimize content to directly answer user intent and appear in AI summaries, answer boxes & voice search.",
      gradient: "from-blue-500 to-indigo-600",
      icon: MessageCircle,
    },
    {
      title: "LLM Optimization Services",
      description:
        "Improve how LLMs understand, interpret and cite your content with semantic & structural optimization.",
      gradient: "from-teal-500 to-emerald-600",
      icon: BrainCircuit,
    },
    {
      title: "AI Content Optimization",
      description:
        "Create and optimize content that is trusted, structured, and easily retrieved by AI systems.",
      gradient: "from-orange-500 to-amber-600",
      icon: FileText,
    },
    {
      title: "Entity SEO & Semantic Search Optimization",
      description:
        "Strengthen entity recognition, topical associations and knowledge graph relevance.",
      gradient: "from-indigo-500 to-violet-600",
      icon: Network,
    },
    {
      title: "AI Visibility Audits",
      description:
        "Comprehensive audits to measure your AI visibility, citations, entity presence and optimization gaps.",
      gradient: "from-pink-500 to-rose-600",
      icon: Search,
    },
    {
      title: "Technical AI SEO",
      description:
        "Optimize crawlability, schema, llms.txt, site speed, internal linking and more for AI systems.",
      gradient: "from-orange-600 to-red-600",
      icon: SlidersHorizontal,
    },
    {
      title: "AI SEO for Enterprise Brands",
      description:
        "Scalable AI SEO systems for large brands with multiple domains, locations & content ecosystems.",
      gradient: "from-blue-600 to-cyan-600",
      icon: Building2,
    },
  ],
} as const;

export const aiSeoProblems = {
  title: "COMMON AI SEO PROBLEMS WE SOLVE",
  items: [
    {
      title: "Strong Rankings but Weak AI Visibility",
      description: "We optimize for AI retrieval and citation, not just traditional rankings.",
      icon: Search,
      iconBg: "bg-rose-50",
      iconColor: "text-rose-500",
    },
    {
      title: "Generic AI Content Issues",
      description: "We create original, expert-led content that AI systems trust and prefer.",
      icon: Brain,
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
    },
    {
      title: "Weak Entities & Brand Recognition",
      description: "We build strong entity signals so AI understands and trusts your brand.",
      icon: Link2,
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
    },
    {
      title: "Poor Content Structure",
      description: "We structure content for AI readability, extraction and understanding.",
      icon: List,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Low Citations Across AI Platforms",
      description: "We increase your presence across multiple AI engines and answer systems.",
      icon: Shield,
      iconBg: "bg-slate-100",
      iconColor: "text-slate-600",
    },
    {
      title: "Outdated SEO Strategies",
      description: "We use modern AI SEO frameworks built for how search works today.",
      icon: SlidersHorizontal,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
  ],
} as const;

export const aiSeoFaqs = [
  {
    q: "What is the difference between enterprise SEO and regular SEO?",
    a: "Enterprise SEO focuses on large-scale websites with complex architectures, multiple stakeholders, and advanced technical requirements—going far beyond basic keyword optimization.",
  },
  {
    q: "How long does it take to see results from enterprise SEO?",
    a: "Most enterprise clients see meaningful improvements within 3–6 months, with compounding gains as technical fixes, content, and authority build over time.",
  },
  {
    q: "Do you work with international websites?",
    a: "Yes. We support multi-region and multilingual SEO, including hreflang, market-specific content, and localized performance tracking.",
  },
  {
    q: "How do you handle SEO for large eCommerce websites?",
    a: "We optimize category architecture, faceted navigation, product templates, crawl budget, and internal linking at scale for high-inventory stores.",
  },
  {
    q: "What tools and technologies do you use?",
    a: "We use enterprise-grade analytics, rank tracking, technical crawlers, and custom dashboards aligned with your stack and reporting needs.",
  },
] as const;

export const aiSeoFinalCta = {
  badge: "NEXT-GEN VISIBILITY",
  title: "Ready to Scale Your Organic Visibility in AI Search?",
  subtitle:
    "Let's build a scalable AI SEO strategy that drives measurable results for your business.",
  primaryLabel: "Book a Strategy Call",
  secondaryLabel: "View Case Studies",
  secondaryHref: "/seo",
} as const;

import {
  BarChart3,
  BookOpen,
  Building2,
  Car,
  Compass,
  Cpu,
  FileText,
  GraduationCap,
  HeartPulse,
  Home,
  LineChart,
  Link2,
  Megaphone,
  Newspaper,
  PenLine,
  Scale,
  Search,
  Send,
  Shield,
  ShoppingCart,
  Sparkles,
  Target,
  Users,
  Wrench,
} from "lucide-react";

export const linkBuildingHero = {
  badge: "LINK BUILDING SERVICES",
  titleBefore: "Link Building That Strengthens Authority &",
  titleAccent: "Drives Rankings",
  subtitle:
    "We build high-quality backlinks that improve your domain authority, strengthen search rankings, and drive sustainable organic traffic growth.",
  ctaPrimary: "Start Your Project",
  ctaSecondary: "Explore Our Services",
  items: ["Link Building", "Digital PR Outreach"],
  dashboard: {
    nav: ["Overview", "Backlinks", "Referring Domains", "Anchor Text", "Reports"],
    metrics: [
      { label: "Referring Domains", value: "542", change: "18.6%" },
      { label: "Backlinks", value: "2.8K", change: "24.2%" },
      { label: "Domain Authority", value: "42", change: "12.4%" },
      { label: "Organic Traffic", value: "4.6K", change: "31.7%" },
    ],
    linkedPages: [
      { label: "/services/seo", pct: 38 },
      { label: "/blog/link-building", pct: 26 },
      { label: "/resources/guides", pct: 18 },
      { label: "/case-studies", pct: 12 },
      { label: "/about", pct: 6 },
    ],
  },
} as const;

export const linkBuildingServices = {
  title: "Our Link Building Services",
  subtitle: "Strategic link acquisition and digital PR to grow your authority and rankings.",
  items: [
    {
      title: "Link Building",
      desc: "White-hat link building strategies that earn authoritative, relevant backlinks.",
      icon: Link2,
      bullets: [
        "Guest Posting",
        "Niche Edits",
        "Broken Link Building",
        "Resource Link Building",
        "Competitor Backlink Analysis",
        "Authority Outreach",
        "Link Reclamation",
        "Content-Driven Link Building",
      ],
    },
    {
      title: "Digital PR Outreach",
      desc: "Earn media coverage and high-authority links through strategic digital PR.",
      icon: Megaphone,
      bullets: [
        "Media Outreach",
        "Press Release Distribution",
        "Journalist Outreach",
        "Brand Mentions",
        "Influencer Collaborations",
        "Newsjacking",
        "HARO Responses",
        "Podcast Outreach",
      ],
    },
  ],
} as const;

export const linkBuildingProcess = {
  title: "Our Link Building Process",
  subtitle: "A proven, transparent process for earning links that move the needle.",
  steps: [
    { num: "01", title: "Research & Analysis", desc: "Audit your backlink profile and competitors.", icon: Search },
    { num: "02", title: "Strategy Planning", desc: "Build a custom link acquisition plan.", icon: Compass },
    { num: "03", title: "Content Creation", desc: "Create link-worthy assets and outreach copy.", icon: PenLine },
    { num: "04", title: "Outreach", desc: "Connect with publishers and journalists.", icon: Send },
    { num: "05", title: "Link Acquisition", desc: "Secure high-quality, relevant placements.", icon: Link2 },
    { num: "06", title: "Reporting & Analysis", desc: "Track links earned and impact on rankings.", icon: BarChart3 },
  ],
} as const;

export const linkBuildingApproaches = {
  title: "Our Link Building Approaches",
  subtitle: "Multiple proven tactics tailored to your niche and goals.",
  items: [
    { label: "Guest Posting", icon: FileText },
    { label: "Resource Pages", icon: BookOpen },
    { label: "Digital PR", icon: Newspaper },
    { label: "Broken Link Building", icon: Wrench },
    { label: "Niche Edits", icon: PenLine },
    { label: "Content Marketing", icon: Sparkles },
  ],
} as const;

export const linkBuildingWhyChoose = {
  title: "Why Choose Our Link Building Services?",
  items: [
    { label: "Improves Search Rankings", desc: "Earn links that directly boost your SERP positions.", icon: Target },
    { label: "Builds Domain Authority", desc: "Strengthen your site's trust and credibility over time.", icon: Shield },
    { label: "White-Hat Practices", desc: "100% Google-compliant strategies — no shortcuts.", icon: Scale },
    { label: "Detailed Reporting", desc: "Full transparency on every link earned and its impact.", icon: LineChart },
    { label: "Custom Strategies", desc: "Plans built around your industry, goals, and budget.", icon: Compass },
    { label: "Dedicated Team", desc: "Specialists who manage outreach and relationships daily.", icon: Users },
  ],
} as const;

export const linkBuildingIndustries = {
  title: "Industries We Serve",
  subtitle: "We help businesses across industries build authority through strategic link building.",
  items: [
    { label: "E-commerce", icon: ShoppingCart },
    { label: "Healthcare", icon: HeartPulse },
    { label: "SaaS", icon: Cpu },
    { label: "Legal", icon: Scale },
    { label: "Education", icon: GraduationCap },
    { label: "Real Estate", icon: Home },
    { label: "Finance", icon: Shield },
    { label: "Technology", icon: Cpu },
    { label: "Professional Services", icon: Users },
    { label: "Automotive", icon: Car },
  ],
} as const;

export const linkBuildingFaq = {
  title: "Frequently Asked Questions",
  items: [
    {
      q: "What is link building?",
      a: "Link building is the process of earning hyperlinks from other websites to your own. Quality backlinks signal trust to search engines and help improve rankings.",
    },
    {
      q: "How long does it take to see results?",
      a: "Most clients see measurable improvements in domain authority within 2–3 months. Ranking improvements typically follow within 3–6 months depending on competition.",
    },
    {
      q: "Are your link building practices safe?",
      a: "Yes. We use only white-hat, Google-compliant tactics — no paid link schemes, PBNs, or spammy directories.",
    },
    {
      q: "What types of websites do you target?",
      a: "We target relevant, authoritative sites in your niche — industry blogs, news publications, resource pages, and high-DA domains that align with your brand.",
    },
    {
      q: "How do you measure success?",
      a: "We track referring domains, domain authority, anchor text distribution, organic traffic growth, and keyword ranking improvements.",
    },
    {
      q: "Do you offer digital PR services?",
      a: "Yes. Our digital PR outreach includes media placements, press releases, journalist outreach, HARO responses, and influencer collaborations.",
    },
  ],
} as const;

export const linkBuildingFinalCta = {
  title: "Ready to Build Strong Backlinks & Improve Your Rankings?",
  subtitle:
    "Let's create a link building strategy that strengthens your authority, earns quality backlinks, and drives sustainable organic growth.",
  ctaPrimary: "Start Your Project",
  ctaSecondary: "Book a Free Consultation",
} as const;

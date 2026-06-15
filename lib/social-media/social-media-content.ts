import {
  BarChart3,
  Building2,
  Car,
  Compass,
  Cpu,
  GraduationCap,
  HeartPulse,
  Home,
  LineChart,
  Megaphone,
  PenLine,
  Search,
  Send,
  Shield,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Tag,
  Target,
  Users,
  UtensilsCrossed,
} from "lucide-react";

export const socialMediaHero = {
  badge: "SOCIAL MEDIA MARKETING",
  titleBefore: "Social Media Marketing That Builds Brands &",
  titleAccent: "Drives Real Engagement",
  subtitle:
    "We help businesses connect with the right audience, build stronger relationships, and grow their brand presence across social media platforms.",
  ctaPrimary: "Start Your Project",
  ctaSecondary: "Explore Our Services",
  items: [
    "Social Media Management",
    "Social Media Brand Management",
    "Franchise Social Media",
    "Enterprise Social Media",
  ],
  dashboard: {
    nav: ["Overview", "Audience", "Content", "Engagement", "Campaign", "Reports"],
    metrics: [
      { label: "Total Reach", value: "125.7K", change: "18.6%" },
      { label: "Engagements", value: "18.6K", change: "21.4%" },
      { label: "Profile Visits", value: "8.3K", change: "16.2%" },
      { label: "Link Clicks", value: "2.9K", change: "24.7%" },
    ],
    platforms: [
      { label: "Instagram", pct: 42 },
      { label: "Facebook", pct: 28 },
      { label: "LinkedIn", pct: 16 },
      { label: "Twitter", pct: 8 },
      { label: "YouTube", pct: 6 },
    ],
    phone: {
      title: "Top Post Performance",
      stats: [
        { label: "Reach", value: "25.4K", change: "+18%" },
        { label: "Engagement", value: "3.2K", change: "+31%" },
        { label: "Link Clicks", value: "512", change: "+14.2%" },
        { label: "Unit Sales", value: "512", change: "+24%" },
      ],
    },
  },
} as const;

export const socialMediaServices = {
  title: "Our Social Media Marketing Services",
  subtitle: "End-to-end social media solutions to grow your brand and engage your audience.",
  items: [
    {
      title: "Social Media Management",
      desc: "We handle your social presence so you can focus on your business.",
      icon: Users,
      bullets: [
        "Profile Creation & Optimization",
        "Content Planning & Scheduling",
        "Daily Management & Engagement",
        "Performance Monitoring & Reporting",
      ],
    },
    {
      title: "Social Media Brand Management",
      desc: "Build a strong, consistent brand identity across all social platforms.",
      icon: Tag,
      bullets: [
        "Brand Voice & Messaging",
        "Visual Identity & Consistency",
        "Reputation Management",
        "Community Building",
      ],
    },
    {
      title: "Franchise Social Media",
      desc: "Localized social media strategies to grow your franchise network.",
      icon: Building2,
      bullets: [
        "Local Page Management",
        "Location-Based Content",
        "Brand Consistency",
        "Local Engagement Growth",
      ],
    },
    {
      title: "Enterprise Social Media",
      desc: "Scalable social media solutions for large brands and enterprises.",
      icon: Building2,
      bullets: [
        "Multi-Platform Strategy",
        "Advanced Analytics & Reporting",
        "Team Collaboration",
        "Enterprise-Level Support",
      ],
    },
  ],
} as const;

export const socialMediaProcess = {
  title: "Our Social Media Marketing Process",
  subtitle: "A clear and proven process that ensures consistent growth.",
  steps: [
    { num: "01", title: "Research & Analysis", desc: "Understand your brand, audience, and competitors.", icon: Search },
    { num: "02", title: "Strategy Planning", desc: "Create a data-driven social media strategy.", icon: Compass },
    { num: "03", title: "Content Creation", desc: "Design engaging content that connects.", icon: PenLine },
    { num: "04", title: "Publishing & Engagement", desc: "Post consistently and engage with your audience.", icon: Send },
    { num: "05", title: "Advertising", desc: "Run targeted ad campaigns to boost growth.", icon: Megaphone },
    { num: "06", title: "Analysis & Reporting", desc: "Track performance and optimize for better results.", icon: BarChart3 },
  ],
} as const;

export const socialMediaPlatforms = {
  title: "Platforms We Work On",
  platforms: ["Instagram", "Facebook", "LinkedIn", "Twitter / X", "YouTube", "Pinterest", "TikTok"],
} as const;

export const socialMediaWhyChoose = {
  title: "Why Choose Our Social Media Marketing?",
  items: [
    { label: "Strategic Approach", desc: "Strategies aligned with your business goals.", icon: Compass },
    { label: "Creative & Engaging Content", desc: "Content that connects, engages, and converts.", icon: Sparkles },
    { label: "Data-Driven Decisions", desc: "We analyze data to maximize performance.", icon: BarChart3 },
    { label: "Transparent Reporting", desc: "Clear insights on what matters most.", icon: LineChart },
    { label: "Targeted Growth", desc: "We focus on the right audience for your business.", icon: Target },
    { label: "Consistent Support", desc: "Dedicated support to help you grow continuously.", icon: Users },
  ],
} as const;

export const socialMediaIndustries = {
  title: "Industries We Serve",
  subtitle: "We help businesses from various industries grow on social media.",
  items: [
    { label: "E-commerce", icon: ShoppingCart },
    { label: "Healthcare", icon: HeartPulse },
    { label: "Education", icon: GraduationCap },
    { label: "Real Estate", icon: Home },
    { label: "Finance", icon: Shield },
    { label: "Retail", icon: ShoppingBag },
    { label: "Hospitality", icon: UtensilsCrossed },
    { label: "Technology", icon: Cpu },
    { label: "Professional Services", icon: Users },
    { label: "Automotive", icon: Car },
  ],
} as const;

export const socialMediaFaq = {
  title: "Frequently Asked Questions",
  items: [
    {
      q: "Which social media platforms should my business be on?",
      a: "It depends on your audience and goals. We analyze where your customers spend time and recommend the platforms that deliver the best ROI for your brand.",
    },
    {
      q: "How do you create content for my brand?",
      a: "We develop on-brand graphics, copy, and video based on your voice, visual identity, and campaign objectives — or adapt assets you already have.",
    },
    {
      q: "How often will you post on my social media?",
      a: "Posting frequency is tailored to each platform and your goals. We build a content calendar that keeps your brand active without overwhelming your audience.",
    },
    {
      q: "Do you run paid advertising campaigns?",
      a: "Yes. We plan, launch, and optimize paid campaigns across Facebook, Instagram, LinkedIn, and other platforms to maximize reach and conversions.",
    },
    {
      q: "How do you measure social media success?",
      a: "We track reach, engagement, follower growth, click-through rates, conversions, and ROI — tying every metric back to your business goals.",
    },
    {
      q: "Can you work with our in-house team?",
      a: "Absolutely. We collaborate with internal marketing teams, providing strategy, content, and execution support that complements your existing efforts.",
    },
    {
      q: "How long does it take to see results?",
      a: "Organic growth typically shows momentum within 60–90 days. Paid campaigns can deliver measurable results within the first few weeks.",
    },
    {
      q: "What kind of reports will I receive?",
      a: "Monthly reports cover audience growth, top-performing content, engagement metrics, ad performance, and strategic recommendations for the next period.",
    },
  ],
} as const;

export const socialMediaFinalCta = {
  title: "Ready to Grow Your Brand with Social Media?",
  subtitle:
    "Let's build a social media strategy that connects with your audience, strengthens your brand, and drives measurable results.",
  ctaPrimary: "Start Your Project",
  ctaSecondary: "Book a Free Consultation",
} as const;

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HUBSPOT_MEETING_URL, BRAND_LOGO } from "@/lib/site";
import { hrefForMegaItem } from "@/lib/seo/nav-item-hrefs";
import { HIRE_ROLES } from "@/lib/hire-developers/hire-developers-content";
import type { LucideIcon } from "lucide-react";
import {
  Menu,
  X,
  LayoutGrid,
  Users,
  Briefcase,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Megaphone,
  MousePointerClick,
  Link2,
  ShoppingCart,
  Search,
  Share2,
  ShoppingBag,
  BarChart3,
  PenLine,
  Radio,
  Code2,
  Globe,
  Smartphone,
  Server,
  Palette,
  Layers,
  GitBranch,
  Settings,
  Tag,
} from "lucide-react";

type MegaSection = { title: string; href: string; items: string[] };

type MegaIconStyle = { icon: LucideIcon; box: string };

const MEGA_SECTION_ICONS: Record<string, MegaIconStyle> = {
  "Digital Marketing": { icon: Megaphone, box: "bg-violet-100 text-violet-700 ring-1 ring-inset ring-violet-300/20" },
  "Pay Per Click (PPC) Marketing": { icon: MousePointerClick, box: "bg-violet-100 text-violet-700 ring-1 ring-inset ring-violet-300/20" },
  "Link Building": { icon: Link2, box: "bg-violet-100 text-violet-700 ring-1 ring-inset ring-violet-300/20" },
  "eCommerce Marketing": { icon: ShoppingCart, box: "bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-300/20" },
  "Search Engine Optimization (SEO)": { icon: Search, box: "bg-blue-100 text-blue-700 ring-1 ring-inset ring-blue-300/20" },
  "Social Media Marketing": { icon: Share2, box: "bg-pink-100 text-pink-700 ring-1 ring-inset ring-pink-300/20" },
  "Online Marketplace Marketing": { icon: ShoppingBag, box: "bg-orange-100 text-orange-700 ring-1 ring-inset ring-orange-300/20" },
  "CRO Services": { icon: BarChart3, box: "bg-teal-100 text-teal-700 ring-1 ring-inset ring-teal-300/20" },
  "Social Media Advertising": { icon: Radio, box: "bg-blue-100 text-blue-700 ring-1 ring-inset ring-blue-300/20" },
  "Content Marketing": { icon: PenLine, box: "bg-orange-100 text-orange-700 ring-1 ring-inset ring-orange-300/20" },
  "Software Development": { icon: Code2, box: "bg-indigo-100 text-indigo-700 ring-1 ring-inset ring-indigo-300/20" },
  "Web Development": { icon: Globe, box: "bg-sky-100 text-sky-700 ring-1 ring-inset ring-sky-300/20" },
  "Mobile App Development": { icon: Smartphone, box: "bg-violet-100 text-violet-700 ring-1 ring-inset ring-violet-300/20" },
  "Frontend Development": { icon: LayoutGrid, box: "bg-blue-100 text-blue-700 ring-1 ring-inset ring-blue-300/20" },
  "Backend Development": { icon: Server, box: "bg-white text-stone-700 ring-1 ring-inset ring-stone-300" },
  "UI/UX Design": { icon: Palette, box: "bg-pink-100 text-pink-700 ring-1 ring-inset ring-pink-300/20" },
  "Product Engineering": { icon: Layers, box: "bg-teal-100 text-teal-700 ring-1 ring-inset ring-teal-300/20" },
  "Business Solutions": { icon: Briefcase, box: "bg-amber-100 text-amber-700 ring-1 ring-inset ring-amber-300/20" },
  "Development Process": { icon: GitBranch, box: "bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-300/20" },
  "Hire Developers": { icon: Users, box: "bg-amber-100 text-amber-700 ring-1 ring-inset ring-amber-300/20" },
};

const DEFAULT_MEGA_ICON: MegaIconStyle = {
  icon: Settings,
  box: "bg-slate-400/15 text-stone-500 ring-1 ring-inset ring-slate-300/20",
};

function MegaSectionIcon({
  title,
  size = "md",
}: {
  title: string;
  size?: "sm" | "md";
}) {
  const { icon: Icon, box } = MEGA_SECTION_ICONS[title] ?? DEFAULT_MEGA_ICON;
  const dim = size === "sm" ? "h-8 w-8" : "h-7 w-7 sm:h-8 sm:w-8";
  const iconDim = size === "sm" ? "h-4 w-4" : "h-3.5 w-3.5 sm:h-4 sm:w-4";

  return (
    <span
      aria-hidden
      className={`flex shrink-0 items-center justify-center rounded-lg ${dim} ${box}`}
    >
      <Icon className={iconDim} strokeWidth={2} />
    </span>
  );
}

const servicesMegaSections: MegaSection[] = [
  {
    title: "Digital Marketing",
    href: "/digital-marketing",
    items: ["Digital Marketing Strategy", "Digital Marketing Development", "Franchise Digital Marketing", "Enterprise Digital Marketing"],
  },
  {
    title: "Pay Per Click (PPC) Marketing",
    href: "/digital-marketing-services/ppc",
    items: ["Search Engine Marketing (SEM)", "Google Ads Management", "YouTube Ads Management", "Programmatic Advertising", "Lead Generation Services", "Franchise PPC", "Enterprise PPC"],
  },
  {
    title: "Link Building",
    href: "/digital-marketing-services/link-building",
    items: ["Digital PR Outreach"],
  },
  {
    title: "eCommerce Marketing",
    href: "/digital-marketing/ecommerce",
    items: ["eCommerce SEO", "eCommerce PPC", "eCommerce Optimization", "Shopify SEO", "Shopify Web Design", "eCommerce Web Design"],
  },
  {
    title: "Search Engine Optimization (SEO)",
    href: "/seo",
    items: ["Local SEO", "Technical SEO", "AI SEO Services", "Franchise SEO", "Enterprise SEO", "SEO Audits", "Franchise SEO Audit", "Enterprise SEO Audit"],
  },
  {
    title: "Social Media Marketing",
    href: "/social-media",
    items: ["Social Media Management", "Social Media Brand Management", "Franchise Social Media", "Enterprise Social Media"],
  },
  {
    title: "Online Marketplace Marketing",
    href: "/digital-marketing-services/online-marketplace-marketing",
    items: ["Amazon Marketing Services", "Amazon SEO", "Amazon Advertising/PPC", "Amazon Storefront & Branding", "Amazon Seller Consulting", "Amazon Posts Management", "Amazon DSP Advertising Management", "Target Plus Marketplace"],
  },
  {
    title: "CRO Services",
    href: "/services",
    items: ["CRO Audits", "User Experience Testing", "User Behavior Analytics"],
  },
  {
    title: "Social Media Advertising",
    href: "/social-media",
    items: ["Facebook", "LinkedIn", "Twitter", "Instagram"],
  },
  {
    title: "Content Marketing",
    href: "/services",
    items: ["SEO Content Writing", "Copywriting Services", "Translation Services", "Email Marketing Services", "Outbound Marketing"],
  },
];

const designMegaSections: MegaSection[] = [
  {
    title: "Hire Developers",
    href: "/hire-developers",
    items: HIRE_ROLES.map((role) => role.label),
  },
  {
    title: "Software Development",
    href: "/design-and-development/software-development",
    items: ["Custom Software Development", "Full Stack Web Development", "Enterprise Application Development", "SaaS Product Development", "Startup MVP Development", "API Development & Integration", "Cloud-Based Applications"],
  },
  {
    title: "Web Development",
    href: "/design-and-development/web-development",
    items: ["Corporate Websites", "Business Websites", "Portfolio Websites", "Landing Pages", "Admin Dashboards", "CRM & ERP Systems", "Analytics Platforms", "E-commerce Platforms", "Booking & Management Systems"],
  },
  {
    title: "Mobile App Development",
    href: "/design-and-development/mobile-app-development",
    items: ["Android App Development", "React Native Applications", "Cross-Platform Mobile Apps", "Business Mobile Applications", "Real-Time Applications"],
  },
  {
    title: "Frontend Development",
    href: "/design-and-development/frontend-development",
    items: ["React.js Development", "TypeScript Applications", "Modern UI Development", "Responsive Web Interfaces", "Interactive User Experiences", "Tailwind CSS Development"],
  },
  {
    title: "Backend Development",
    href: "/design-and-development/backend-development",
    items: ["Node.js & Express.js Development", "REST API Development", "Authentication Systems", "Database Architecture", "Firebase Integration", "Scalable Backend Systems"],
  },
  {
    title: "UI/UX Design",
    href: "/design-and-development/ui-ux-design",
    items: ["Website UI Design", "Mobile App UI Design", "Dashboard Design", "SaaS Product Design", "Wireframing & Prototyping", "Responsive UI/UX", "Premium Modern Interfaces"],
  },
  {
    title: "Product Engineering",
    href: "/design-and-development/product-engineering",
    items: ["End-to-End Product Development", "Product Planning & Architecture", "Feature Development", "Performance Optimization", "System Integration", "Product Maintenance & Support"],
  },
  {
    title: "Business Solutions",
    href: "/design-and-development/business-solutions",
    items: ["Inventory Management Systems", "Employee Management Systems", "Customer Management Platforms", "Billing Systems", "Workflow Automation", "Reporting & Analytics Systems"],
  },
  {
    title: "Development Process",
    href: "/design-and-development/development-process",
    items: ["Requirement Analysis", "Product Planning", "UI/UX Design", "Development", "Testing", "Deployment", "Maintenance & Support"],
  },
];

const primaryNavItems: { label: string; href: string }[] = [
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
];

const navIconByHref: Record<string, LucideIcon> = {
  "/services": Briefcase,
  "/seo": Briefcase,
  "/social-media": Briefcase,
  "/digital-marketing-services/ppc": Briefcase,
  "/digital-marketing-services/link-building": Briefcase,
  "/digital-marketing-services/online-marketplace-marketing": Briefcase,
  "/branding": LayoutGrid,
  "/pricing": Tag,
  "/about": Users,
  "/blog": PenLine,
};

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function MobileMenuRow({
  label,
  href,
  isActive,
  onNavigate,
}: {
  label: string;
  href: string;
  isActive: boolean;
  onNavigate: () => void;
}) {
  const Icon = navIconByHref[href] ?? Briefcase;
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`flex items-center gap-3 rounded-xl px-3 py-3 transition active:scale-[0.99] ${
        isActive ? "bg-white" : "hover:bg-white"
      }`}
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
          isActive ? "bg-lux-gold text-lux-ink" : "bg-white text-lux-bronze"
        }`}
      >
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </span>
      <p
        className={`min-w-0 flex-1 truncate text-sm font-semibold ${
          isActive ? "text-stone-900" : "text-stone-800"
        }`}
      >
        {label}
      </p>
      <ChevronRight className="h-4 w-4 shrink-0 text-slate-500" strokeWidth={2} />
    </Link>
  );
}

function MobileServiceCategory({
  title,
  href,
  items,
  isOpen,
  onToggle,
  onNavigate,
}: {
  title: string;
  href: string;
  items: string[];
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  const resolveItemHref = (label: string) => hrefForMegaItem(label, href);
  const panelId = `mobile-cat-${title.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <li className="overflow-hidden rounded-xl border border-stone-200 bg-white/60">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center gap-3 px-3 py-3 text-left transition hover:bg-white active:scale-[0.99]"
      >
        <MegaSectionIcon title={title} size="sm" />
        <span className="min-w-0 flex-1 truncate text-sm font-semibold text-stone-800">
          {title}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-stone-900" : ""
          }`}
          strokeWidth={2}
        />
      </button>
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-0.5 border-t border-stone-200/70 bg-black/20 px-3 py-2">
            {items.map((item) => {
              const itemHref = resolveItemHref(item);
              return (
                <li key={item}>
                  {itemHref ? (
                    <Link
                      href={itemHref}
                      onClick={onNavigate}
                      className="flex items-start gap-2 rounded-md px-2 py-1.5 text-[13px] leading-snug text-stone-600 transition hover:bg-white hover:text-stone-900"
                    >
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white" />
                      <span>{item}</span>
                    </Link>
                  ) : (
                    <span className="flex items-start gap-2 rounded-md px-2 py-1.5 text-[13px] leading-snug text-stone-500">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white" />
                      <span>{item}</span>
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
}

type MegaAsideContent = {
  headingTop: string;
  headingMiddle: string;
  headingHighlight: string;
  description: string;
  ctaLabel: string;
  inputPlaceholder: string;
  stats: { value: string; label: string }[];
};

function MegaAside({ content }: { content: MegaAsideContent }) {
  return (
    <aside className="relative hidden overflow-hidden rounded-[24px] p-6 xl:block" style={{ background: "radial-gradient(120% 80% at 0% 0%, rgba(221,191,93,0.18), transparent 60%), linear-gradient(180deg, #ffffff, rgba(255,255,255,0.75))", boxShadow: "inset 0 0 0 1px rgba(120,96,50,0.14)" }}>
      <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-lux-bronze">BrandMarketing</p>
      <h3 className="mt-3 font-serif text-[2.1rem] leading-[1.02] text-stone-900">
        {content.headingTop}
        <br />
        {content.headingMiddle}
        <br />
        <span className="lux-gold-text italic">{content.headingHighlight}</span>
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-stone-600">{content.description}</p>
      <div className="mt-5 space-y-2.5">
        <input
          type="text"
          placeholder={content.inputPlaceholder}
          className="lux-input px-4 py-2.5 text-sm"
          readOnly
        />
        <a
          href={HUBSPOT_MEETING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="lux-cta inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
        >
          {content.ctaLabel}
          <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
        </a>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2 text-center">
        {content.stats.map((stat) => (
          <div key={stat.label} className="rounded-xl bg-white p-2.5 ring-1 ring-inset ring-stone-200">
            <p className="font-serif text-2xl leading-none text-stone-900">{stat.value}</p>
            <p className="mt-1 text-[10px] leading-tight text-stone-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}

const marketingAside: MegaAsideContent = {
  headingTop: "Scale Your",
  headingMiddle: "Business with",
  headingHighlight: "Proven Growth",
  description: "Data-driven digital marketing strategies that deliver real results and long-term growth.",
  ctaLabel: "Get My Free Proposal",
  inputPlaceholder: "Enter your website address",
  stats: [
    { value: "300%+", label: "Average ROI" },
    { value: "5M+", label: "Leads Generated" },
    { value: "15+", label: "Industry Awards" },
  ],
};

const designAside: MegaAsideContent = {
  headingTop: "Build Modern",
  headingMiddle: "Products with",
  headingHighlight: "Engineering Quality",
  description: "End-to-end software, web and mobile development tailored to your business needs.",
  ctaLabel: "Get a Free Consultation",
  inputPlaceholder: "Tell us about your project",
  stats: [
    { value: "100+", label: "Products Shipped" },
    { value: "50+", label: "Active Clients" },
    { value: "8+", label: "Years Experience" },
  ],
};

function MegaMenu({
  label,
  href,
  isActive,
  sections,
  panelId,
  asideContent,
  searchPlaceholder,
  pathname,
}: {
  label: string;
  href: string;
  isActive: boolean;
  sections: MegaSection[];
  panelId: string;
  asideContent: MegaAsideContent;
  searchPlaceholder: string;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [metrics, setMetrics] = useState<{ top: number; maxHeight: number }>({
    top: 68,
    maxHeight: 0,
  });
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const computeMetrics = useCallback(() => {
    if (typeof window === "undefined") return { top: 68, maxHeight: 0 };
    const nav = document.getElementById("site-navbar");
    const navHeight = nav ? nav.getBoundingClientRect().height : 68;
    return {
      top: navHeight,
      maxHeight: window.innerHeight - navHeight,
    };
  }, []);

  const openMenu = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setMetrics(computeMetrics());
    setOpen(true);
  }, [computeMetrics]);

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 160);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onResize = () => setMetrics(computeMetrics());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open, computeMetrics]);

  const panel = (
    <div
      id={panelId}
      data-mega-open={open}
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
      style={{
        top: `${metrics.top}px`,
        maxHeight: metrics.maxHeight ? `${metrics.maxHeight}px` : undefined,
      }}
      className={`fixed left-0 right-0 z-40 hidden overflow-y-auto overscroll-contain border-b border-stone-200 bg-[#f7f2e7]/95 px-[var(--lux-gutter)] py-4 shadow-[0_40px_120px_-40px_rgba(80,60,20,0.35)] backdrop-blur-2xl transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:block [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
        open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
      }`}
    >
        <div aria-hidden className="lux-hairline absolute inset-x-0 top-0" />
        <div className="mx-auto grid w-full grid-cols-1 gap-4 overflow-visible xl:grid-cols-[320px,1fr]">
          <MegaAside content={asideContent} />
          <section className="rounded-[24px] bg-white/60 p-4 ring-1 ring-inset ring-stone-200">
            <div className="mb-4 flex items-center gap-3 rounded-xl bg-white px-4 py-2.5 ring-1 ring-inset ring-stone-200">
              <Search className="h-4 w-4 text-stone-400" aria-hidden />
              <input
                type="text"
                placeholder={searchPlaceholder}
                className="w-full bg-transparent text-sm text-stone-900 outline-none placeholder:text-stone-400"
                readOnly
              />
            </div>
            <div
              className="columns-2 px-2 py-2 sm:columns-3 lg:columns-4"
              style={{ columnGap: "clamp(12px, 1.2vw, 32px)" }}
            >
              {sections.map((section) => (
                <article
                  key={section.title}
                  className="mb-3 break-inside-avoid xl:mb-4"
                >
                  <Link
                    href={section.href}
                    className="mb-2 inline-flex items-center gap-2.5 font-semibold text-stone-900 transition hover:text-lux-bronze"
                    style={{ fontSize: "clamp(12px, 0.85vw, 14px)" }}
                  >
                    <MegaSectionIcon title={section.title} />
                    <span className="leading-snug">{section.title}</span>
                  </Link>
                  <ul
                    className="list-disc space-y-1 pl-4 marker:text-lux-gold/50"
                    style={{ fontSize: "clamp(11px, 0.78vw, 12.5px)" }}
                  >
                    {section.items.map((item) => {
                      const itemHref = hrefForMegaItem(item, section.href);
                      return (
                        <li key={item} className="leading-[1.3] text-stone-500">
                          {itemHref ? (
                            <Link
                              href={itemHref}
                              className="transition hover:text-lux-bronze"
                            >
                              {item}
                            </Link>
                          ) : (
                            <span>{item}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </div>
    </div>
  );

  return (
    <div
      className="static"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <Link
        href={href}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={panelId}
        onFocus={openMenu}
        onBlur={scheduleClose}
        data-active={isActive || open}
        className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-2.5 text-[12px] font-semibold leading-none tracking-[-0.005em] transition-all duration-300 xl:px-4 xl:text-[14px] ${
          isActive
            ? "lux-nav-pill-active"
            : open
              ? "bg-white/[0.1] text-white"
              : "text-slate-300 hover:bg-white/[0.07] hover:text-white"
        }`}
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""} ${
            isActive ? "text-lux-bronze" : open ? "text-lux-gold" : "opacity-70"
          }`}
          strokeWidth={2.5}
          aria-hidden
        />
      </Link>
      {mounted && createPortal(panel, document.body)}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolledAway, setScrolledAway] = useState(false);
  const [pinned, setPinned] = useState(false);
  const pointerInside = useRef(false);
  const unpinTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const delta = y - lastY;
      setElevated(y > 8);
      if (y < 140) {
        setScrolledAway(false);
        lastY = y;
      } else if (Math.abs(delta) > 6) {
        setScrolledAway(delta > 0);
        if (delta > 0 && !pointerInside.current) setPinned(false);
        lastY = y;
      }
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pin = useCallback(() => {
    if (unpinTimer.current) clearTimeout(unpinTimer.current);
    pointerInside.current = true;
    setPinned(true);
  }, []);

  const unpin = useCallback(() => {
    pointerInside.current = false;
    if (unpinTimer.current) clearTimeout(unpinTimer.current);
    const release = () => {
      if (document.querySelector('[data-mega-open="true"]')) {
        unpinTimer.current = setTimeout(release, 250);
        return;
      }
      setPinned(false);
    };
    unpinTimer.current = setTimeout(release, 380);
  }, []);

  useEffect(() => {
    return () => {
      if (unpinTimer.current) clearTimeout(unpinTimer.current);
    };
  }, []);

  const concealed = scrolledAway && !pinned && !open;

  useEffect(() => {
    const root = document.documentElement;
    if (open) {
      root.style.overflow = "hidden";
    } else {
      root.style.overflow = "";
    }
    return () => {
      root.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const close = useCallback(() => setOpen(false), []);
  const isServicesActive =
    isActivePath(pathname, "/digital-marketing-services") ||
    servicesMegaSections.some((section) => isActivePath(pathname, section.href));
  const isDesignActive =
    isActivePath(pathname, "/design-and-development") ||
    designMegaSections.some((section) => isActivePath(pathname, section.href));

  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    () => new Set()
  );
  const toggleCategory = useCallback((title: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  }, []);
  useEffect(() => {
    if (!open) setExpandedCategories(new Set());
  }, [open]);

  const mobileMenu =
    mounted &&
    createPortal(
      <div
        className={`fixed inset-0 z-[200] lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Dimmed backdrop, tap to close */}
        <div
          className={`absolute inset-0 bg-slate-950/55 backdrop-blur-[2px] transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={close}
          aria-hidden
        />

        {/* Slide-in drawer */}
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={`absolute right-[var(--lux-gutter)] top-[max(0.5rem,env(safe-area-inset-top))] bottom-[max(0.5rem,env(safe-area-inset-bottom))] flex w-[calc(100%-2*var(--lux-gutter))] min-w-0 flex-col overflow-hidden rounded-[24px] border border-stone-200 bg-[#f7f2e7]/95 shadow-2xl backdrop-blur-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-[calc(100%+0.75rem)]"
          }`}
        >
          {/* Sticky header: logo + close */}
          <div className="flex shrink-0 items-center justify-between border-b border-stone-200 px-3 py-3 sm:px-4">
            <Link href="/" onClick={close} className="-ml-5 flex shrink-0 items-center leading-none sm:-ml-[25px]">
              <Image
                src={BRAND_LOGO.src}
                alt={BRAND_LOGO.alt}
                width={BRAND_LOGO.width}
                height={BRAND_LOGO.height}
                className={`${BRAND_LOGO.className} object-left scale-[1.35] sm:scale-[1.4]`}
                priority
              />
            </Link>
            <button
              type="button"
              onClick={close}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-900 transition active:bg-white"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>

          {/* Scrollable middle (hidden scrollbar) */}
          <nav
            className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-3 py-3 sm:px-4 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {[
              {
                id: "mobile-services-heading",
                heading: "Digital Marketing Services",
                sections: servicesMegaSections,
              },
              {
                id: "mobile-design-heading",
                heading: "Design and Development",
                sections: designMegaSections,
              },
            ].map((group, groupIndex) => (
              <section
                key={group.id}
                aria-labelledby={group.id}
                className={groupIndex === 0 ? "" : "mt-4"}
              >
                <p
                  id={group.id}
                  className="px-1 pb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-lux-gold/80"
                >
                  {group.heading}
                </p>
                <ul className="space-y-1.5">
                  {group.sections.map((section) => (
                    <MobileServiceCategory
                      key={`${group.id}-${section.title}`}
                      title={section.title}
                      href={section.href}
                      items={section.items}
                      isOpen={expandedCategories.has(`${group.id}-${section.title}`)}
                      onToggle={() => toggleCategory(`${group.id}-${section.title}`)}
                      onNavigate={close}
                    />
                  ))}
                </ul>
              </section>
            ))}

            <ul className="mt-4 space-y-1">
              {primaryNavItems.map((item) => (
                <li key={item.href}>
                  <MobileMenuRow
                    label={item.label}
                    href={item.href}
                    isActive={isActivePath(pathname, item.href)}
                    onNavigate={close}
                  />
                </li>
              ))}
            </ul>
          </nav>

          {/* Sticky footer: CTA + contact */}
          <div className="shrink-0 border-t border-stone-200 bg-[#f7f2e7] px-3 pb-3 pt-3 sm:px-4">
            <Link
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="lux-cta flex w-full items-center justify-center rounded-full py-3.5 text-[14px] font-semibold"
            >
              Book a Call
            </Link>
            <p className="mt-2.5 text-center text-[12px] leading-relaxed text-slate-400">
              or email us at{" "}
              <a
                href="mailto:connect@brandmarketing.digital"
                className="font-medium text-lux-bronze hover:underline"
              >
                connect@brandmarketing.digital
              </a>
            </p>
            <p className="mt-1.5 text-center text-[11px] text-slate-500">
              <a href="tel:+917003427553" className="hover:text-slate-400">
                +91 70034 27553
              </a>
              {" · "}
              Kolkata, India
            </p>
          </div>
        </div>
      </div>,
      document.body
    );

  return (
    <>
      <header
        onMouseEnter={pin}
        onMouseLeave={unpin}
        onFocusCapture={pin}
        onBlurCapture={unpin}
        data-floating={elevated}
        data-concealed={concealed}
        className="lux-nav sticky top-0 z-50"
      >
        <div aria-hidden className="lux-nav-accent absolute inset-x-0 top-0" />
        <div aria-hidden className="lux-hairline absolute inset-x-0 bottom-0" />
        <nav
          id="site-navbar"
          className={`relative mx-auto flex w-full items-center justify-between gap-3 px-[var(--lux-gutter)] transition-[padding] duration-500 ${
            elevated ? "py-1.5" : "py-3"
          }`}
        >
          {/* Negative margin cancels the logo PNG's transparent left padding so the mark sits on the gutter */}
          <Link href="/" className="-ml-5 flex shrink-0 items-center leading-none sm:-ml-[25px]">
            <Image
              src={BRAND_LOGO.src}
              alt={BRAND_LOGO.alt}
              width={BRAND_LOGO.width}
              height={BRAND_LOGO.height}
              className={`${BRAND_LOGO.className} object-left scale-[1.35] sm:scale-[1.4]`}
              priority
            />
          </Link>

          <div className="lux-nav-dock ml-auto hidden items-center gap-0.5 rounded-full p-1.5 lg:flex xl:gap-1">
            <MegaMenu
              label="Digital Marketing Services"
              href="/digital-marketing-services"
              isActive={isServicesActive}
              sections={servicesMegaSections}
              panelId="mega-services-panel"
              asideContent={marketingAside}
              searchPlaceholder="Search for services..."
              pathname={pathname}
            />
            <MegaMenu
              label="Design and Development"
              href="/design-and-development"
              isActive={isDesignActive}
              sections={designMegaSections}
              panelId="mega-design-panel"
              asideContent={designAside}
              searchPlaceholder="Search design & development..."
              pathname={pathname}
            />
            {primaryNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-active={isActivePath(pathname, item.href)}
                className={`whitespace-nowrap rounded-full px-2.5 py-2.5 text-[12px] font-semibold leading-none tracking-[-0.005em] transition-all duration-300 xl:px-4 xl:text-[14px] ${
                  isActivePath(pathname, item.href)
                    ? "lux-nav-pill-active"
                    : "text-slate-300 hover:bg-white/[0.07] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <span aria-hidden className="mx-1 hidden h-8 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent lg:block" />

          <Link
            href={HUBSPOT_MEETING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="lux-cta group hidden items-center gap-2.5 whitespace-nowrap rounded-full py-1.5 pl-4 pr-1.5 text-[12px] font-bold lg:inline-flex xl:pl-5 xl:text-sm"
          >
            Book a Call
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#172033] text-lux-gold transition-transform duration-300 group-hover:translate-x-0.5 xl:h-8 xl:w-8">
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.75} />
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="lux-nav-dock inline-flex h-11 w-11 items-center justify-center rounded-xl text-white transition hover:bg-white/10 lg:hidden"
            aria-label="Open menu"
            aria-controls="mobile-nav-drawer"
            aria-expanded={open}
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>
      <div
        aria-hidden
        onMouseEnter={pin}
        onMouseLeave={unpin}
        className={`fixed inset-x-0 top-0 z-50 h-4 ${concealed ? "block" : "hidden"}`}
      />
      <button
        type="button"
        aria-label="Show navigation"
        aria-hidden={!concealed}
        tabIndex={concealed ? 0 : -1}
        onMouseEnter={pin}
        onMouseLeave={unpin}
        onFocus={pin}
        onClick={pin}
        data-visible={concealed}
        className="lux-nav-handle fixed left-1/2 top-0 z-50 flex flex-col items-center gap-1 rounded-b-2xl px-6 pb-1.5 pt-2"
      >
        <span aria-hidden className="lux-nav-handle-bar" />
        <ChevronDown aria-hidden className="lux-nav-handle-chevron h-3.5 w-3.5" strokeWidth={2.75} />
      </button>
      {mobileMenu}
    </>
  );
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
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
} from "lucide-react";

type MegaSection = { title: string; href: string; items: string[] };

const servicesMegaSections: MegaSection[] = [
  {
    title: "Digital Marketing",
    href: "/services",
    items: ["Digital Marketing Strategy", "Digital Marketing Development", "Franchise Digital Marketing", "Enterprise Digital Marketing"],
  },
  {
    title: "Pay Per Click (PPC) Marketing",
    href: "/automation-performance",
    items: ["Search Engine Marketing (SEM)", "Google Ads Management", "YouTube Ads Management", "Programmatic Advertising", "Lead Generation Services", "Franchise PPC", "Enterprise PPC"],
  },
  {
    title: "Link Building",
    href: "/seo",
    items: ["Digital PR Outreach"],
  },
  {
    title: "eCommerce Marketing",
    href: "/services",
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
    href: "/services",
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
    title: "Software Development",
    href: "/branding",
    items: ["Custom Software Development", "Full Stack Web Development", "Enterprise Application Development", "SaaS Product Development", "Startup MVP Development", "API Development & Integration", "Cloud-Based Applications"],
  },
  {
    title: "Web Development",
    href: "/branding",
    items: ["Corporate Websites", "Business Websites", "Portfolio Websites", "Landing Pages", "Admin Dashboards", "CRM & ERP Systems", "Analytics Platforms", "E-commerce Platforms", "Booking & Management Systems"],
  },
  {
    title: "Mobile App Development",
    href: "/branding",
    items: ["Android App Development", "React Native Applications", "Cross-Platform Mobile Apps", "Business Mobile Applications", "Real-Time Applications"],
  },
  {
    title: "Frontend Development",
    href: "/branding",
    items: ["React.js Development", "TypeScript Applications", "Modern UI Development", "Responsive Web Interfaces", "Interactive User Experiences", "Tailwind CSS Development"],
  },
  {
    title: "Backend Development",
    href: "/branding",
    items: ["Node.js & Express.js Development", "REST API Development", "Authentication Systems", "Database Architecture", "Firebase Integration", "Scalable Backend Systems"],
  },
  {
    title: "UI/UX Design",
    href: "/branding",
    items: ["Website UI Design", "Mobile App UI Design", "Dashboard Design", "SaaS Product Design", "Wireframing & Prototyping", "Responsive UI/UX", "Premium Modern Interfaces"],
  },
  {
    title: "Product Engineering",
    href: "/branding",
    items: ["End-to-End Product Development", "Product Planning & Architecture", "Feature Development", "Performance Optimization", "System Integration", "Product Maintenance & Support"],
  },
  {
    title: "Business Solutions",
    href: "/branding",
    items: ["Inventory Management Systems", "Employee Management Systems", "Customer Management Platforms", "Billing Systems", "Workflow Automation", "Reporting & Analytics Systems"],
  },
  {
    title: "Development Process",
    href: "/branding",
    items: ["Requirement Analysis", "Product Planning", "UI/UX Design", "Development", "Testing", "Deployment", "Maintenance & Support"],
  },
];

const primaryNavItems: { label: string; href: string }[] = [
  { label: "About Us", href: "/about" },
];

const navIconByHref: Record<string, LucideIcon> = {
  "/services": Briefcase,
  "/seo": Briefcase,
  "/social-media": Briefcase,
  "/automation-performance": Briefcase,
  "/branding": LayoutGrid,
  "/about": Users,
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
        isActive ? "bg-white/[0.09]" : "hover:bg-white/[0.05]"
      }`}
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
          isActive ? "bg-[#2a2f5a] text-[#B8B3FF]" : "bg-[#1e2140] text-[#9B94FF]"
        }`}
      >
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </span>
      <p
        className={`min-w-0 flex-1 truncate text-sm font-semibold ${
          isActive ? "text-white" : "text-white/90"
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
  const panelId = `mobile-cat-${title.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <li className="overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center gap-3 px-3 py-3 text-left transition hover:bg-white/[0.04] active:scale-[0.99]"
      >
        <span
          aria-hidden
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1e2140] text-[#9B94FF]"
        >
          <Briefcase className="h-4 w-4" strokeWidth={1.75} />
        </span>
        <span className="min-w-0 flex-1 truncate text-sm font-semibold text-white/90">
          {title}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-white" : ""
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
          <ul className="space-y-0.5 border-t border-white/[0.06] bg-black/20 px-3 py-2">
            {items.map((item) => (
              <li key={item}>
                <Link
                  href={href}
                  onClick={onNavigate}
                  className="flex items-start gap-2 rounded-md px-2 py-1.5 text-[13px] leading-snug text-white/70 transition hover:bg-white/[0.05] hover:text-white"
                >
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                  <span>{item}</span>
                </Link>
              </li>
            ))}
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
    <aside className="hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-[#f4f8f1] via-white to-[#f3faee] p-4 xl:block">
      <h3 className="text-3xl font-semibold leading-tight text-slate-900">
        {content.headingTop}
        <br />
        {content.headingMiddle}
        <br />
        <span className="text-[#50b444]">{content.headingHighlight}</span>
      </h3>
      <p className="mt-3 text-sm text-slate-600">{content.description}</p>
      <div className="mt-4 space-y-2">
        <input
          type="text"
          placeholder={content.inputPlaceholder}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none focus:border-[#50b444]"
          readOnly
        />
        <button
          type="button"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ddbf5d] to-[#50b444] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#ddbf5d]/30 transition hover:brightness-105"
        >
          {content.ctaLabel}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        {content.stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-slate-200 bg-white p-2">
            <p className="text-lg font-bold text-[#50b444]">{stat.value}</p>
            <p className="text-[10px] text-slate-500">{stat.label}</p>
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
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
      style={{
        top: `${metrics.top}px`,
        maxHeight: metrics.maxHeight ? `${metrics.maxHeight}px` : undefined,
      }}
      className={`fixed left-0 right-0 z-40 hidden overflow-y-auto overscroll-contain border-b border-slate-200 bg-white p-4 shadow-2xl transition-opacity duration-150 md:block [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
        <div className="mx-auto grid w-full grid-cols-1 gap-4 overflow-visible xl:grid-cols-[300px,1fr]">
          <MegaAside content={asideContent} />
          <section className="rounded-2xl border border-slate-200 bg-slate-50/30 p-3">
            <div className="mb-3 rounded-lg border border-slate-200 bg-white px-3 py-2">
              <input
                type="text"
                placeholder={searchPlaceholder}
                className="w-full text-sm text-slate-700 outline-none placeholder:text-slate-400"
                readOnly
              />
            </div>
            <div
              className="columns-2 bg-white px-2 py-2 sm:columns-3 lg:columns-4"
              style={{ columnGap: "clamp(12px, 1.2vw, 32px)" }}
            >
              {sections.map((section) => (
                <article
                  key={section.title}
                  className="mb-3 break-inside-avoid xl:mb-4"
                >
                  <Link
                    href={section.href}
                    className="mb-2 inline-flex items-center gap-2 font-semibold text-slate-800 transition hover:text-[#50b444]"
                    style={{ fontSize: "clamp(12px, 0.85vw, 14px)" }}
                  >
                    <span
                      aria-hidden
                      className="inline-block h-4 w-4 shrink-0 rounded-sm bg-slate-200"
                    />
                    <span>{section.title}</span>
                  </Link>
                  <ul
                    className="list-disc space-y-1 pl-4 marker:text-slate-700"
                    style={{ fontSize: "clamp(11px, 0.78vw, 12.5px)" }}
                  >
                    {section.items.map((item) => (
                      <li key={item} className="leading-[1.3] text-slate-600">
                        <span>{item}</span>
                      </li>
                    ))}
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
        className={`inline-flex items-center gap-1 whitespace-nowrap rounded-lg px-1.5 py-3 text-[clamp(10px,1.15vw,14px)] leading-none transition hover:text-slate-900 hover:shadow-sm hover:shadow-cyan-100 lg:px-2 xl:px-3 ${
          isActive || open
            ? "bg-slate-100/90 text-slate-900 shadow-sm shadow-cyan-100"
            : ""
        }`}
      >
        {label}
        <ChevronDown className="h-4 w-4" aria-hidden />
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

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
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
        className={`fixed inset-0 z-[200] md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
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
          className={`absolute right-2 top-[max(0.5rem,env(safe-area-inset-top))] bottom-[max(0.5rem,env(safe-area-inset-bottom))] flex w-[calc(100vw-1rem)] min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0D17] shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-[calc(100%+0.75rem)]"
          }`}
        >
          {/* Sticky header: logo + close */}
          <div className="flex shrink-0 items-center justify-between border-b border-white/[0.08] px-3 py-3 sm:px-4">
            <Link href="/" onClick={close} className="flex min-w-0 items-center">
              <Image
                src="/assets/logo.png"
                alt="BrandMarketing logo"
                width={152}
                height={44}
                className="h-11 w-44 shrink-0 object-contain object-left"
                priority
              />
            </Link>
            <button
              type="button"
              onClick={close}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#15182b] text-white transition active:bg-white/10"
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
                  className="px-1 pb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500"
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
          <div className="shrink-0 border-t border-white/[0.08] bg-[#0B0D17] px-3 pb-3 pt-3 sm:px-4">
            <Link
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#ddbf5d] to-[#50b444] py-3 text-[14px] font-bold text-white transition hover:brightness-105"
            >
              Book a Call
            </Link>
            <p className="mt-2.5 text-center text-[12px] leading-relaxed text-slate-400">
              or email us at{" "}
              <a
                href="mailto:connect@brandmarketing.digital"
                className="font-medium text-[#5B8DEF] hover:underline"
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
        className={`sticky top-0 z-50 transition-all ${
          elevated ? "bg-white/92 shadow-lg backdrop-blur-md" : "bg-white/75 backdrop-blur"
        }`}
      >
        <nav
          id="site-navbar"
          className="relative mx-auto flex w-full items-center justify-between gap-2 px-4 py-3 sm:px-6 lg:px-8"
        >
          <Link
            href="/"
            className="flex min-w-0 items-center"
          >
            <Image
              src="/assets/logo.png"
              alt="BrandMarketing logo"
              width={184}
              height={52}
              className="h-10 w-40 shrink-0 object-contain object-left sm:h-11 sm:w-44 xl:h-12 xl:w-48"
              priority
            />
          </Link>

          <div className="ml-auto hidden items-center gap-0.5 pr-1 font-medium text-slate-700 md:flex lg:gap-1 xl:gap-2">
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
                className={`relative whitespace-nowrap rounded-lg px-1.5 py-2 text-[clamp(10px,1.15vw,14px)] leading-none transition hover:text-slate-900 hover:shadow-sm hover:shadow-cyan-100 lg:px-2 xl:px-3 ${
                  isActivePath(pathname, item.href)
                    ? "bg-slate-100/90 text-slate-900 shadow-sm shadow-cyan-100"
                    : ""
                }`}
              >
                {isActivePath(pathname, item.href) ? (
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600"
                  />
                ) : null}
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href={HUBSPOT_MEETING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden whitespace-nowrap rounded-full bg-gradient-to-r from-[#ddbf5d] to-[#50b444] px-2.5 py-2 text-[11px] font-semibold text-white shadow-lg shadow-[#ddbf5d]/30 transition hover:brightness-105 md:inline-flex lg:px-3 lg:text-xs xl:px-4 xl:text-sm"
          >
            Book a Call
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
            aria-label="Open menu"
            aria-controls="mobile-nav-drawer"
            aria-expanded={open}
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>
      {mobileMenu}
    </>
  );
}

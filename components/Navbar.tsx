"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import type { LucideIcon } from "lucide-react";
import {
  Menu,
  X,
  Hexagon,
  Coffee,
  Activity,
  LayoutGrid,
  Users,
  Briefcase,
  ChevronRight,
} from "lucide-react";

const navItems: { label: string; href: string }[] = [
  { label: "Services", href: "/services" },
  { label: "SEO", href: "/seo" },
  { label: "Social Media", href: "/social-media" },
  { label: "Automation & Performance", href: "/automation-performance" },
  { label: "About Us", href: "/about" },
];

const navIconByHref: Record<string, LucideIcon> = {
  "/services": Briefcase,
  "/seo": Hexagon,
  "/social-media": Coffee,
  "/automation-performance": Activity,
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
      className={`flex items-center gap-3 rounded-2xl px-3 py-3.5 transition active:scale-[0.99] ${
        isActive ? "bg-white/[0.09]" : "hover:bg-white/[0.05]"
      }`}
    >
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
          isActive ? "bg-[#2a2f5a] text-[#B8B3FF]" : "bg-[#1e2140] text-[#9B94FF]"
        }`}
      >
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <div className="min-w-0 flex-1">
        <p
          className={`break-words text-sm font-semibold leading-snug ${
            isActive ? "text-white" : "text-white/90"
          }`}
        >
          {label}
        </p>
      </div>
      <ChevronRight className="h-5 w-5 shrink-0 text-slate-500" strokeWidth={2} />
    </Link>
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

  const close = () => setOpen(false);

  const mobileMenu =
    mounted &&
    createPortal(
      <div
        className={`fixed inset-0 z-[200] lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Dimmed backdrop, tap to close; leaves strip of page visible on the left */}
        <div
          className={`absolute inset-0 bg-slate-950/55 backdrop-blur-[2px] transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={close}
          aria-hidden
        />

        {/* Narrow drawer, not full viewport width */}
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={`absolute right-2 top-[max(0.5rem,env(safe-area-inset-top))] bottom-[max(0.5rem,env(safe-area-inset-bottom))] flex w-[min(19rem,calc(100vw-1.25rem))] max-w-[85vw] min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0D17] shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-[calc(100%+0.75rem)]"
          }`}
        >
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

          <nav className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-3 py-2 sm:px-4 [-webkit-overflow-scrolling:touch]">
            <p className="px-1 pt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
              Menu
            </p>
            <ul className="mt-2 space-y-1.5 pb-2">
              {navItems.map((item) => (
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

          <div className="shrink-0 border-t border-white/[0.08] bg-[#0B0D17] px-3 pb-3 pt-3 sm:px-4">
            <Link
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex w-full items-center justify-center rounded-xl border border-white/30 bg-transparent py-3 text-[14px] font-bold text-white transition active:bg-white/5"
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
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:px-6 lg:px-8">
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative whitespace-nowrap rounded-lg px-1.5 py-2 text-[clamp(10px,1.15vw,14px)] leading-none transition hover:text-slate-900 hover:shadow-sm hover:shadow-cyan-100 lg:px-2 xl:px-3 ${
                  isActivePath(pathname, item.href)
                    ? "bg-slate-100/90 text-slate-900 shadow-sm shadow-cyan-100"
                    : ""
                }`}
              >
                <AnimatePresence>
                  {isActivePath(pathname, item.href) ? (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600"
                    />
                  ) : null}
                </AnimatePresence>
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href={HUBSPOT_MEETING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden whitespace-nowrap rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-2.5 py-2 text-[11px] font-semibold text-white shadow-lg shadow-cyan-200 transition hover:shadow-blue-200 hover:brightness-105 md:inline-flex lg:px-3 lg:text-xs xl:px-4 xl:text-sm"
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

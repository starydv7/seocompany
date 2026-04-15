"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
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

/** Same links everywhere: desktop bar + mobile menu */
const navItems: { label: string; href: string }[] = [
  { label: "Services", href: "/services" },
  { label: "SEO", href: "/seo" },
  { label: "Social Media", href: "/social-media" },
  { label: "Automation & Performance", href: "/automation-performance" },
  { label: "Branding & Content", href: "/branding" },
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

function MobileMenuRow({
  label,
  href,
  onNavigate,
}: {
  label: string;
  href: string;
  onNavigate: () => void;
}) {
  const Icon = navIconByHref[href] ?? Briefcase;
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="flex items-center gap-3 rounded-2xl px-3 py-3.5 transition hover:bg-white/[0.05] active:scale-[0.99]"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1e2140] text-[#9B94FF]">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="break-words text-sm font-semibold leading-snug text-white">{label}</p>
      </div>
      <ChevronRight className="h-5 w-5 shrink-0 text-slate-500" strokeWidth={2} />
    </Link>
  );
}

export default function Navbar() {
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

  const close = () => setOpen(false);

  const mobileMenu =
    mounted &&
    createPortal(
      <div
        className={`fixed inset-0 z-[200] md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Dimmed backdrop — tap to close; leaves strip of page visible on the left */}
        <div
          className={`absolute inset-0 bg-slate-950/55 backdrop-blur-[2px] transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={close}
          aria-hidden
        />

        {/* Narrow drawer — not full viewport width */}
        <div
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
                  <MobileMenuRow label={item.label} href={item.href} onNavigate={close} />
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
                href="mailto:hello@brandmarketing.com"
                className="font-medium text-[#5B8DEF] hover:underline"
              >
                hello@brandmarketing.com
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
        <nav className="mx-auto flex w-[90%] max-w-[90%] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex min-w-0 items-center"
          >
            <Image
              src="/assets/logo.png"
              alt="BrandMarketing logo"
              width={184}
              height={52}
              className="h-12 w-48 shrink-0 object-contain object-left"
              priority
            />
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 transition hover:text-slate-900 hover:shadow-sm hover:shadow-cyan-100"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-200 transition hover:shadow-blue-200 hover:brightness-105"
            >
              Book a Call
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>
      {mobileMenu}
    </>
  );
}

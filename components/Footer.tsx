import Link from "next/link";
import { Linkedin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-200/80 bg-white/80 text-sm text-slate-600 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-3 max-w-sm">
          <div className="flex items-center gap-2 text-base font-semibold tracking-tight text-slate-900">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 text-xs font-semibold text-white shadow-md shadow-cyan-200">
              SC
            </span>
            <span>BrandMarketing Digital</span>
          </div>
          <p className="text-xs text-slate-600">
            Where creativity meets conversion. We don&apos;t just build brands; we build businesses.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900"
              aria-label="YouTube"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid flex-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Services
            </h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="/services" className="hover:text-slate-900">
                  Branding & Identity
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-slate-900">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-slate-900">
                  SEO & Organic Growth
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-slate-900">
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-slate-900">
                  Paid Ads (PPC & Social)
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Company
            </h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="/about" className="hover:text-slate-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Contact
            </h3>
            <ul className="space-y-1 text-xs">
              <li>
                <a href="mailto:hello@brandmarketingdigital.com" className="hover:text-slate-900">
                  hello@brandmarketingdigital.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="hover:text-slate-900">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="text-slate-500">[Your Physical Location]</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200/80 bg-white/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-[11px] text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} BrandMarketing Digital. All rights reserved.</p>
          <p className="text-[10px]">
            Built for brands that care about strategy, execution and measurable growth.
          </p>
        </div>
      </div>
    </footer>
  );
}






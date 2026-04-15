import Link from "next/link";
import Image from "next/image";
import { Linkedin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-200/80 bg-white/80 text-sm text-slate-600 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm space-y-3">
          <div className="flex w-full items-start justify-start">
            <Image
              src="/assets/logo.png"
              alt="BrandMarketing logo"
              width={176}
              height={50}
              className="h-12 w-48 shrink-0 object-contain object-left"
            />
          </div>
          <p className="text-xs text-slate-600">
            Where creativity meets conversion. We don&apos;t just build brands, we build businesses.
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
                <a href="tel:+917003427553" className="hover:text-slate-900">
                  +91 70034 27553
                </a>
              </li>
              <li className="text-slate-500">Kolkata, India</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200/80 bg-white/70">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-4 text-left text-[11px] text-slate-500 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© {year} BrandMarketing. All rights reserved.</p>
          <p className="text-[10px]">
            Built for brands that care about strategy, execution and measurable growth.
          </p>
        </div>
      </div>
    </footer>
  );
}






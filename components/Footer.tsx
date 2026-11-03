import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { HUBSPOT_MEETING_URL, BRAND_LOGO } from "@/lib/site";

type FooterLink = { label: string; href: string; external?: boolean };

const digitalMarketingLinks: FooterLink[] = [
  { label: "Digital Marketing", href: "/services" },
  { label: "Search Engine Optimization", href: "/seo" },
  { label: "Social Media Marketing", href: "/social-media" },
  { label: "PPC & Performance", href: "/digital-marketing-services/ppc" },
  { label: "Content Marketing", href: "/services" },
  { label: "eCommerce Marketing", href: "/digital-marketing/ecommerce" },
];

const designDevelopmentLinks: FooterLink[] = [
  { label: "Software Development", href: "/design-and-development/software-development" },
  { label: "Web Development", href: "/design-and-development/web-development" },
  { label: "Mobile App Development", href: "/design-and-development/mobile-app-development" },
  { label: "UI/UX Design", href: "/design-and-development/ui-ux-design" },
  { label: "Product Engineering", href: "/design-and-development/product-engineering" },
  { label: "Business Solutions", href: "/design-and-development/business-solutions" },
];

const companyLinks: FooterLink[] = [
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Book a Call", href: HUBSPOT_MEETING_URL, external: true },
];

const socialLinks: { label: string; href: string; Icon: typeof Facebook }[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/brandmarketingdigital/",
    Icon: Linkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/brandmarketingdigital.official",
    Icon: Facebook,
  },
];

const WORDMARK: [char: string, bottom: string, top: string][] = [
  ["B", "#b08a2e", "#e6c870"],
  ["r", "#8fa035", "#c9d36a"],
  ["a", "#3f9e36", "#86d46f"],
  ["n", "#1a9466", "#4fd1a0"],
  ["d", "#0f9e8f", "#5eead4"],
  ["M", "#0b8fd0", "#67c7f5"],
  ["a", "#2f6fe0", "#7fb0ff"],
  ["r", "#5155e0", "#a5a8ff"],
  ["k", "#6d4cf0", "#b39bff"],
  ["e", "#9a45ea", "#d0a2ff"],
  ["t", "#c93bdc", "#f0a0f7"],
  ["i", "#e23a8a", "#f8a1c8"],
  ["n", "#e5354f", "#fda4af"],
  ["g", "#e08a07", "#fcd34d"],
];

const linkClass = "group inline-flex items-center gap-1 text-stone-500 transition hover:text-stone-900";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h3 className="font-mono text-[10px] uppercase tracking-[0.32em] text-lux-bronze">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            {link.external ? (
              <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {link.label}
                <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
              </a>
            ) : (
              <Link href={link.href} className={linkClass}>
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-lux-gold/70 transition-transform duration-500 group-hover:scale-x-100" />
                </span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate mt-20 overflow-hidden bg-[#f1ead9] text-stone-600">
      <div aria-hidden className="lux-hairline" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[30rem] w-[70rem] -translate-x-1/2 rounded-full opacity-50 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(221,191,93,0.22), transparent 60%)" }}
      />
      <div aria-hidden className="lux-grain" />

      <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Statement CTA */}
        <div className="flex flex-col gap-10 border-b border-stone-200 py-16 lg:flex-row lg:items-end lg:justify-between lg:py-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-lux-bronze">Where creativity meets conversion</p>
            <h2 className="mt-5 max-w-3xl font-serif text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.98] text-stone-900">
              Let&apos;s build what <span className="lux-gold-text italic">comes next.</span>
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="lux-cta inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold"
            >
              Book a strategy call
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
            <Link
              href="/pricing"
              className="lux-ghost inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-stone-900"
            >
              See pricing
            </Link>
          </div>
        </div>

        <div className="grid gap-12 py-14 lg:grid-cols-[1.2fr,2fr] lg:gap-16 lg:py-16">
          <div className="space-y-6">
            <Link href="/" className="-ml-3.5 inline-flex items-center sm:-ml-[18px]" aria-label="Home">
              <Image
                src={BRAND_LOGO.src}
                alt={BRAND_LOGO.alt}
                width={BRAND_LOGO.width}
                height={BRAND_LOGO.height}
                className={`${BRAND_LOGO.className} object-left`}
              />
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-stone-500">
              We don&apos;t just build brands, we build businesses.
            </p>

            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:connect@brandmarketing.digital"
                  className="inline-flex items-center gap-2.5 text-stone-700 transition hover:text-stone-900"
                >
                  <Mail className="h-4 w-4 text-lux-bronze" />
                  connect@brandmarketing.digital
                </a>
              </li>
              <li>
                <a
                  href="tel:+917003427553"
                  className="inline-flex items-center gap-2.5 text-stone-700 transition hover:text-stone-900"
                >
                  <Phone className="h-4 w-4 text-lux-bronze" />
                  +91 70034 27553
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5 text-stone-500">
                <MapPin className="h-4 w-4 text-lux-bronze" />
                Kolkata, India
              </li>
            </ul>

            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-stone-600 ring-1 ring-inset ring-stone-300 transition hover:bg-lux-gold hover:text-lux-ink hover:ring-lux-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
            <FooterColumn title="Digital Marketing" links={digitalMarketingLinks} />
            <FooterColumn title="Design & Development" links={designDevelopmentLinks} />
            <FooterColumn title="Company" links={companyLinks} />
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none relative select-none overflow-hidden">
        <p className="lux-footer-wordmark whitespace-nowrap pb-[0.08em] text-center font-serif text-[clamp(4rem,17vw,16rem)] leading-[0.9] tracking-[-0.03em]">
          {WORDMARK.map(([char, c1, c2], i) => (
            <span
              key={i}
              data-char={char}
              className="lux-fill-letter"
              style={{ "--i": i, "--c1": c1, "--c2": c2 } as CSSProperties}
            >
              {char}
            </span>
          ))}
        </p>
      </div>

      <div className="relative border-t border-stone-200">
        <div className="mx-auto flex w-full flex-col items-start justify-between gap-3 px-4 py-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© {year} BrandMarketing. All rights reserved.</p>
          <p>Built for brands that care about strategy, execution and measurable growth.</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";

type FooterLink = { label: string; href: string; external?: boolean };

const digitalMarketingLinks: FooterLink[] = [
  { label: "Digital Marketing", href: "/services" },
  { label: "Search Engine Optimization", href: "/seo" },
  { label: "Social Media Marketing", href: "/social-media" },
  { label: "PPC & Performance", href: "/automation-performance" },
  { label: "Content Marketing", href: "/services" },
  { label: "eCommerce Marketing", href: "/services" },
];

const designDevelopmentLinks: FooterLink[] = [
  { label: "Software Development", href: "/branding" },
  { label: "Web Development", href: "/branding" },
  { label: "Mobile App Development", href: "/branding" },
  { label: "UI/UX Design", href: "/branding" },
  { label: "Product Engineering", href: "/branding" },
  { label: "Business Solutions", href: "/branding" },
];

const companyLinks: FooterLink[] = [
  { label: "About Us", href: "/about" },
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

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-white">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition hover:text-white"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-slate-400 transition hover:text-white"
              >
                {link.label}
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
    <footer className="mt-20 bg-[#0B0D17] text-slate-300">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#ddbf5d]/40 to-transparent" />

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-14 lg:grid-cols-[1.2fr,2fr] lg:gap-16 lg:py-16">
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center" aria-label="Home">
              <Image
                src="/assets/logo.png"
                alt="BrandMarketing logo"
                width={192}
                height={56}
                className="h-12 w-auto object-contain object-left"
              />
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              Where creativity meets conversion. We don&apos;t just build brands,
              we build businesses.
            </p>

            <ul className="space-y-2 pt-1 text-sm">
              <li>
                <a
                  href="mailto:connect@brandmarketing.digital"
                  className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white"
                >
                  <Mail className="h-4 w-4 text-[#ddbf5d]" />
                  connect@brandmarketing.digital
                </a>
              </li>
              <li>
                <a
                  href="tel:+917003427553"
                  className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white"
                >
                  <Phone className="h-4 w-4 text-[#ddbf5d]" />
                  +91 70034 27553
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-slate-400">
                <MapPin className="h-4 w-4 text-[#ddbf5d]" />
                Kolkata, India
              </li>
            </ul>

            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-[#50b444]/60 hover:bg-white/[0.06] hover:text-white"
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

        <div className="border-t border-white/10">
          <div className="flex w-full flex-col items-start justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row sm:items-center">
            <p>© {year} BrandMarketing. All rights reserved.</p>
            <p className="text-slate-500">
              Built for brands that care about strategy, execution and measurable growth.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

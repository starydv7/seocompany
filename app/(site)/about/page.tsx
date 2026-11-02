import type { Metadata } from "next";
import Link from "next/link";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import {
  ArrowRight,
  BarChart3,
  Brush,
  Code2,
  Compass,
  Sparkles,
  Facebook,
  Instagram,
  Linkedin,
  Github,
  Trophy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import LuxBackdrop from "@/components/lux/LuxBackdrop";
import LuxCard from "@/components/lux/LuxCard";
import LuxPage, { LuxEyebrow, LuxPill } from "@/components/lux/LuxPage";
import { LUX_ACCENTS, type LuxAccent } from "@/components/lux/accents";

export const metadata: Metadata = {
  title: "About Us | BrandMarketing",
  description:
    "Meet the minds behind the metrics, a collective of strategists, creators, and analysts obsessed with growth.",
};

type SocialKey = "linkedin" | "github" | "leetcode" | "facebook" | "instagram";

type AboutMember = {
  title: string;
  name: string;
  role: string;
  quote: string;
  description: string;
  socials?: Partial<Record<SocialKey, string>>;
};

const SOCIAL_CONFIG: { key: SocialKey; label: string; Icon: LucideIcon }[] = [
  { key: "linkedin", label: "LinkedIn", Icon: Linkedin },
  { key: "github", label: "GitHub", Icon: Github },
  { key: "leetcode", label: "LeetCode", Icon: Trophy },
  { key: "facebook", label: "Facebook", Icon: Facebook },
  { key: "instagram", label: "Instagram", Icon: Instagram },
];

const members: AboutMember[] = [
  {
    title: "The Visionary",
    name: "Dhiraj Kumar Yadav",
    role: "Founder & Automation Specialist",
    quote: "Marketing is no longer about the stuff that you make, but about the stories you tell.",
    description:
      "Dhiraj founded BrandMarketing to end the war between branding and sales. He sets the north star strategy for every client, making sure long term positioning aligns with day to day execution.",
  },
  {
    title: "The Data Architect",
    name: "Sohail Islam",
    role: "Co Founder & Head of Performance & SEO",
    quote: "If you can't measure it, you can't improve it.",
    description:
      "Sohail builds the measurement and performance infrastructure that turns creative ideas into predictable outcomes. From technical SEO to paid acquisition, he treats every budget like it is his own.",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/sohail-islam-jijo-b40776181?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      facebook: "https://www.facebook.com/share/1BNmRvG5gu/",
      instagram:
        "https://www.instagram.com/_sohail.exe?igsh=anRjcHVvOWg3Ynhw",
    },
  },
  {
    title: "The Visual Storyteller",
    name: "Trisha Nandy",
    role: "Co Founder & Social Media Manager",
    quote: "Design is the silent ambassador of your brand.",
    description:
      "Trisha makes sure your brand does not just show up, it stands out. From logo concepts to the aesthetics of your social presence, she protects your identity with sharp detail and consistency.",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/trisha-nandy-a14688203?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      facebook: "https://www.facebook.com/share/1BV7iWZBmm/",
      instagram:
        "https://www.instagram.com/trisha.nandy?igsh=MWN2ZHdoMDY5bWI5Zg==",
    },
  },
  {
    title: "The Performance Engine",
    name: "Saitika Bhowmik",
    role: "Performance Marketer",
    quote: "If you can't measure it, you can't improve it.",
    description:
      "Saitika brings 7 years of digital marketing and 5 years of performance marketing expertise. She designs and optimizes Google Ads strategies, manages paid social campaigns (Meta, Instagram, LinkedIn, Pinterest), and implements marketing automation for clients across USA, Australia, Canada, and domestic markets. DV360 certified with hands-on programmatic advertising experience.",
    socials: {
      linkedin: "https://www.linkedin.com/in/saitika-bhowmik-aa12b015a/",
      facebook: "https://www.facebook.com/saitika.bhowmik/",
      instagram: "https://www.instagram.com/saitikabhowmik/",
    },
  },
  {
    title: "The Technical Guru",
    name: "Pawan Yadav",
    role: "Co Founder & Lead Developer",
    quote: "Great marketing needs great systems behind it.",
    description:
      "Pawan turns growth requirements into fast, secure, scalable web and mobile experiences. From tracking and analytics to full product builds, he makes sure the tech foundation can handle real users and real scale.",
    socials: {
      linkedin: "https://www.linkedin.com/in/pawanstarydv7/?locale=en",
      github: "https://github.com/starydv7",
      leetcode: "https://leetcode.com/u/Starydv7/",
    },
  },
];

const MEMBER_STYLE: { icon: LucideIcon; accent: LuxAccent }[] = [
  { icon: Compass, accent: LUX_ACCENTS.gold },
  { icon: BarChart3, accent: LUX_ACCENTS.sky },
  { icon: Brush, accent: LUX_ACCENTS.rose },
  { icon: Sparkles, accent: LUX_ACCENTS.violet },
  { icon: Code2, accent: LUX_ACCENTS.emerald },
];

const PILLARS = [
  { label: "Strategy", value: "Data led decision making" },
  { label: "Creative", value: "Strong identity and content" },
  { label: "Execution", value: "Fast systems for growth" },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export default function AboutPage() {
  return (
    <LuxPage>
      {/* Hero */}
      <section className="relative isolate overflow-hidden px-4 pb-24 pt-16 sm:px-6 sm:pb-32 sm:pt-24 lg:px-8">
        <LuxBackdrop />
        <div className="relative mx-auto w-full max-w-7xl">
          <Reveal>
            <LuxPill>Meet the team</LuxPill>
            <h1 className="mt-8 max-w-5xl text-[clamp(3rem,7.4vw,7rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-white">
              The Minds Behind
              <br />
              <span className="lux-gold-text font-serif font-normal italic tracking-[-0.02em]">the Metrics</span>
            </h1>
            <p className="mt-8 max-w-2xl text-[clamp(1rem,1.35vw,1.2rem)] leading-relaxed text-white/65">
              We are a collective of strategists, creators, and data analysts. While we each have our own specialty,
              from color theory to keyword density, we&apos;re united by a single obsession:{" "}
              <span className="font-serif text-[1.25em] italic text-lux-champagne">Growth.</span>
            </p>
          </Reveal>

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.label} delay={0.08 * i}>
                <div className="lux-panel flex items-center gap-5 px-6 py-5">
                  <span className="font-serif text-4xl leading-none text-white/20">0{i + 1}</span>
                  <div>
                    <LuxEyebrow>{pillar.label}</LuxEyebrow>
                    <p className="mt-1.5 text-sm font-medium text-white/85">{pillar.value}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <LuxEyebrow>The collective</LuxEyebrow>
                <h2 className="mt-4 font-serif text-[clamp(2.4rem,5vw,4.25rem)] leading-[1.02] text-white">
                  Five specialists. <span className="lux-gold-text italic">One obsession.</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-6">
            {members.map((m, index) => {
              const { icon: Icon, accent } = MEMBER_STYLE[index % MEMBER_STYLE.length];
              const links = m.socials ? SOCIAL_CONFIG.filter((s) => m.socials![s.key]) : [];
              return (
                <Reveal
                  key={m.name}
                  delay={index * 0.06}
                  className={`h-full lg:col-span-2 ${index === 3 ? "lg:col-start-2" : ""}`}
                >
                  <LuxCard as="article" accent={accent} className="flex h-full flex-col overflow-hidden p-7 sm:p-8">
                    <span
                      aria-hidden
                      className="lux-outline-numeral pointer-events-none absolute -right-1 -top-6 select-none font-serif text-[7rem] leading-none"
                    >
                      0{index + 1}
                    </span>

                    <div className="flex items-center gap-4">
                      <span className="lux-check flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-serif text-xl text-lux-ink">
                        {initials(m.name)}
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] ring-1 ring-inset ring-white/10"
                        style={{ color: accent.from }}
                      >
                        <Icon className="h-3 w-3" />
                        {m.title}
                      </span>
                    </div>

                    <h3 className="mt-7 text-2xl font-semibold tracking-[-0.02em] text-white">{m.name}</h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-white/45">{m.role}</p>

                    <blockquote className="mt-6 border-l pl-4 font-serif text-xl italic leading-snug text-white/85" style={{ borderColor: accent.to }}>
                      &ldquo;{m.quote}&rdquo;
                    </blockquote>

                    <p className="mt-6 flex-1 text-sm leading-relaxed text-white/60">{m.description}</p>

                    <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/[0.08] pt-6">
                      <div className="flex min-h-9 items-center gap-2">
                        {links.map(({ key, label, Icon: SocialIcon }) => (
                          <a
                            key={key}
                            href={m.socials![key]}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${m.name} on ${label}`}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.04] text-white/65 ring-1 ring-inset ring-white/10 transition hover:bg-lux-gold hover:text-lux-ink hover:ring-lux-gold"
                          >
                            <SocialIcon className="h-3.5 w-3.5" />
                          </a>
                        ))}
                      </div>
                      <Link
                        href={HUBSPOT_MEETING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-semibold text-white/75 transition hover:text-lux-gold"
                      >
                        Work with us
                        <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </LuxCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join */}
      <section className="relative px-4 pb-32 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative mx-auto grid w-full max-w-7xl gap-10 overflow-hidden rounded-[40px] px-6 py-16 sm:px-12 sm:py-20 lg:grid-cols-[1.3fr,1fr] lg:items-end">
            <div
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(ellipse at 0% 0%, rgba(221,191,93,0.26), transparent 55%), radial-gradient(ellipse at 100% 100%, rgba(108,71,255,0.22), transparent 55%), linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
              }}
            />
            <div aria-hidden className="absolute inset-0 -z-10 rounded-[40px] ring-1 ring-inset ring-white/10" />
            <div>
              <LuxEyebrow>Join our squad</LuxEyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-[1] text-white">
                Think you have <span className="lux-gold-text italic">what it takes?</span>
              </h2>
            </div>
            <div>
              <p className="text-base leading-relaxed text-white/65">
                We&apos;re always looking for ambitious talent to join our ranks. If you&apos;re obsessed with digital
                culture and results-driven marketing, we want to hear from you.
              </p>
              <Link
                href="/careers"
                className="lux-cta mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold"
              >
                View Open Positions
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </LuxPage>
  );
}

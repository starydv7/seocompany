import Link from "next/link";
import { ArrowRight, BarChart3, Rocket, Search, ShieldCheck, Target, TrendingUp, Zap } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import Reveal from "@/components/Reveal";
import LuxBackdrop from "@/components/lux/LuxBackdrop";
import LuxCard from "@/components/lux/LuxCard";
import { LUX_ACCENTS, withAlpha } from "@/components/lux/accents";
import LuxPage, { LuxEyebrow, LuxPill } from "@/components/lux/LuxPage";

const SERVICES_TICKER = [
  "Search Engine Optimization",
  "AI SEO",
  "Pay Per Click",
  "Social Media",
  "Link Building",
  "eCommerce Marketing",
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Product Engineering",
  "Marketing Automation",
  "Branding",
];

const PHILOSOPHY = [
  { icon: Search, title: "We don't guess.", body: "Every decision is backed by data and research.", accent: LUX_ACCENTS.violet },
  { icon: Target, title: "We test.", body: "A/B testing & tracking power every move.", accent: LUX_ACCENTS.rose },
  { icon: TrendingUp, title: "We optimize.", body: "We refine what works and cut what doesn't.", accent: LUX_ACCENTS.emerald },
  { icon: BarChart3, title: "We scale.", body: "We grow what's proven to drive real results.", accent: LUX_ACCENTS.gold },
];

const WHY_US = [
  {
    icon: ShieldCheck,
    title: "Full-Funnel Approach",
    body: "We don't operate in silos. Your SEO team talks to your Ads team to ensure a cohesive, compounding strategy.",
    accent: LUX_ACCENTS.sky,
  },
  {
    icon: Search,
    title: "Transparency First",
    body: "Live reporting dashboards. No hidden fees, no jargon-filled excuses. You see exactly what's happening, always.",
    accent: LUX_ACCENTS.emerald,
  },
  {
    icon: Zap,
    title: "Agile Execution",
    body: "The digital world moves fast. We pivot strategies in real-time based on data, not hunches or assumptions.",
    accent: LUX_ACCENTS.violet,
  },
];

const PROCESS = [
  { icon: Search, title: "Discovery", body: "We dive deep into your industry, competitors, and current pain points to uncover opportunities." },
  { icon: Target, title: "Strategy", body: "We build a roadmap tailored to your budget and KPIs - clear milestones, measurable checkpoints." },
  { icon: Rocket, title: "Execution", body: "Our creative and technical teams launch your campaigns with precision and speed." },
  { icon: TrendingUp, title: "Optimization", body: "We analyze data to refine, improve, and scale what's working for maximum ROI." },
];

const TESTIMONIALS = [
  {
    name: "Dr Biswaroop Chakarborty",
    role: "AIIMS, Delhi - Mother and Child Department",
    text: "The application development support was highly professional, detail-oriented, and reliable. The project was delivered with strong technical execution, clear communication, and a practical understanding of healthcare workflow needs.",
    initials: "DC",
    accent: LUX_ACCENTS.sky,
  },
  {
    name: "Debika Banerjee",
    role: "Founder, Barfi Resturant",
    text: "As a small business owner, I had no idea about digital marketing. They guided me step by step and helped me run my first successful ad campaign. Very supportive and transparent.",
    initials: "DB",
    accent: LUX_ACCENTS.emerald,
  },
  {
    name: "Subharata Sinha",
    role: "District Yellow Pages",
    text: "I worked with this team for lead generation campaigns and saw a noticeable improvement within the first 2 weeks. Clear communication, simple explanations, highly recommended for anyone looking to scale their business online.",
    initials: "SS",
    accent: LUX_ACCENTS.violet,
  },
  {
    name: "Pramod Sharma",
    role: "CEO, Shifto",
    text: "Professional and result-oriented approach. The team understood my requirements quickly and delivered beyond expectations. Looking forward to long-term collaboration with this outstanding team.",
    initials: "PS",
    accent: LUX_ACCENTS.gold,
  },
];

const AUDIT_FIELDS = [
  { type: "text", label: "Full Name", required: true },
  { type: "email", label: "Email Address", required: true },
  { type: "text", label: "Website", required: true },
  { type: "tel", label: "Phone Number", required: false },
];

function SectionHeading({
  eyebrow,
  title,
  accent,
  body,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  accent: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <LuxEyebrow>{eyebrow}</LuxEyebrow>
      <h2 className="mt-4 font-serif text-[clamp(2.4rem,5vw,4.25rem)] leading-[1.02] text-white">
        {title} <span className="lux-gold-text italic">{accent}</span>
      </h2>
      {body ? <p className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg">{body}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <LuxPage>
      {/* Hero */}
      <section className="relative isolate overflow-hidden px-4 pb-24 pt-14 sm:px-6 sm:pb-32 sm:pt-20 lg:px-8">
        <LuxBackdrop />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.25fr,0.95fr] lg:gap-12">
          <Reveal>
            <LuxPill>BrandMarketing</LuxPill>
            <h1 className="mt-8 text-[clamp(3rem,7.4vw,7rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-white">
              Where Creativity
              <br />
              <span className="lux-gold-text font-serif font-normal italic tracking-[-0.02em]">Meets Conversion</span>
            </h1>
            <p className="mt-8 max-w-2xl text-[clamp(1rem,1.35vw,1.2rem)] leading-relaxed text-white/65">
              We don&apos;t just build brands, we build businesses. From defining your identity to dominating search
              results, BrandMarketing is your partner in digital growth.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="lux-cta inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold"
              >
                Schedule a Strategy Call
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
              <Link
                href="/pricing"
                className="lux-ghost inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white"
              >
                Explore pricing
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
              {["120+ campaigns managed", "Technical + content + CRO"].map((item, i) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-lux-gold">0{i + 1}</span>
                  <span className="h-px w-6 bg-white/20" aria-hidden />
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <LuxCard featured className="p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <LuxEyebrow>Free audit</LuxEyebrow>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">No obligation</span>
              </div>
              <h2 className="mt-4 font-serif text-[clamp(2rem,3vw,2.6rem)] leading-[1.02] text-white">
                Get a Free <span className="lux-gold-text italic">SEO</span>
                <br />
                &amp; Marketing Audit
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Boost your traffic, leads, and sales with our expert SEO and marketing audit. Start with a free,
                no-obligation consultation.
              </p>
              <div className="mt-6 space-y-3">
                {AUDIT_FIELDS.map((field) => (
                  <label key={field.label} className="block">
                    <span className="sr-only">{field.label}</span>
                    <input
                      type={field.type}
                      required={field.required}
                      aria-required={field.required}
                      placeholder={field.required ? `${field.label} *` : field.label}
                      className="lux-input px-4 py-3 text-sm"
                    />
                  </label>
                ))}
                <a
                  href={HUBSPOT_MEETING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lux-cta mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
                >
                  Request Your Free Audit
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </a>
              </div>
              <p className="mt-4 text-center text-xs text-white/40">We respect your privacy. 100% spam-free.</p>
            </LuxCard>
          </Reveal>
        </div>
      </section>

      {/* Services ticker */}
      <div className="relative border-y border-white/[0.06] bg-white/[0.015] py-6">
        <div className="marquee-mask overflow-hidden">
          <div className="animate-marquee-ltr flex w-max items-center gap-12 [--marquee-duration:60s]">
            {[...SERVICES_TICKER, ...SERVICES_TICKER].map((item, i) => (
              <span key={i} className="flex items-center gap-12 whitespace-nowrap">
                <span className="font-serif text-2xl italic text-white/55 sm:text-3xl">{item}</span>
                <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-lux-gold/70" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Manifesto + philosophy */}
      <section className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-10 h-[36rem] w-[36rem] rounded-full opacity-40 blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(108,71,255,0.35), transparent 60%)" }}
        />
        <div className="relative mx-auto w-full max-w-7xl">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-end">
              <div>
                <LuxEyebrow>Our philosophy</LuxEyebrow>
                <h2 className="mt-4 font-serif text-[clamp(2.6rem,5.6vw,5rem)] leading-[0.98] text-white">
                  Data-Driven Strategies.
                  <br />
                  <span className="lux-gold-text italic">Human-Centric Design.</span>
                </h2>
              </div>
              <div>
                <p className="font-serif text-2xl italic leading-snug text-white/85">
                  In a crowded digital landscape, noise is easy to make. Impact is hard to achieve.
                </p>
                <p className="mt-5 text-base leading-relaxed text-white/55">
                  At BrandMarketing, we bridge the gap between art and science. We believe that stunning branding is
                  useless without visibility, and high traffic is meaningless without conversion. We fuse aesthetic
                  excellence with rigorous performance tracking to ensure every dollar you spend returns value to your
                  bottom line.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="relative mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div aria-hidden className="lux-hairline absolute left-0 right-0 top-1/2 hidden lg:block" />
            {PHILOSOPHY.map((item, i) => (
              <Reveal key={item.title} delay={0.08 * i} className="h-full">
                <LuxCard accent={item.accent} className="flex h-full flex-col overflow-hidden p-7">
                  <span
                    aria-hidden
                    className="lux-outline-numeral pointer-events-none absolute -right-1 -top-6 select-none font-serif text-[7rem] leading-none"
                  >
                    0{i + 1}
                  </span>
                  <span className="lux-check flex h-12 w-12 items-center justify-center rounded-2xl text-lux-ink">
                    <item.icon className="h-5 w-5" strokeWidth={2.25} />
                  </span>
                  <h3 className="mt-8 font-serif text-3xl leading-none text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{item.body}</p>
                </LuxCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading eyebrow="Why we're different" title="Why Choose" accent="Us?" />
              <p className="max-w-md text-sm leading-relaxed text-white/55">
                We operate with ruthless clarity - no fluff, no siloed teams, no guesswork. Just measurable impact.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {WHY_US.map((item, i) => (
              <Reveal key={item.title} delay={0.08 * i} className="h-full">
                <LuxCard as="article" accent={item.accent} className="flex h-full flex-col p-8 sm:p-10">
                  <div className="flex items-center justify-between">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-inset ring-white/10"
                      style={{ background: `linear-gradient(135deg, ${withAlpha(item.accent.glow, 0.25)}, transparent)`, color: item.accent.from }}
                    >
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs tracking-[0.3em] text-white/35">0{i + 1}</span>
                  </div>
                  <h3 className="mt-10 text-2xl font-semibold tracking-[-0.02em] text-white">{item.title}</h3>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-white/60">{item.body}</p>
                </LuxCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Our methodology"
              title="The Process:"
              accent="How We Work"
              body="A battle-tested four-stage framework built to launch fast and compound over time."
            />
          </Reveal>
          <div className="relative mt-16">
            <div
              aria-hidden
              className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px lg:block"
              style={{ background: "linear-gradient(90deg, rgba(108,71,255,0.6), rgba(32,150,255,0.6), rgba(80,180,68,0.6), rgba(221,191,93,0.8))" }}
            />
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {PROCESS.map((step, i) => (
                <Reveal key={step.title} delay={0.1 * i}>
                  <div className="relative flex flex-col items-center text-center">
                    <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-lux-ink ring-1 ring-lux-gold/60 shadow-[0_0_40px_-6px_rgba(221,191,93,0.7)]">
                      <span className="absolute inset-1 rounded-full bg-gradient-to-br from-lux-champagne/20 to-transparent" />
                      <step.icon className="relative h-5 w-5 text-lux-champagne" />
                    </span>
                    <span className="mt-6 font-mono text-[10px] tracking-[0.32em] text-white/40">STEP 0{i + 1}</span>
                    <h3 className="mt-2 font-serif text-3xl text-white">{step.title}</h3>
                    <p className="mt-3 max-w-[30ch] text-sm leading-relaxed text-white/55">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="lux-hairline mb-20" aria-hidden />
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading eyebrow="Client testimonials" title="Real Feedback From Businesses" accent="We Helped Grow" />
              <p className="max-w-md text-sm leading-relaxed text-white/55">
                Clear communication, measurable results, and practical execution that business owners can trust.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid auto-rows-fr gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((item, i) => (
              <Reveal key={item.name} delay={0.06 * i} className="h-full">
                <LuxCard as="figure" accent={item.accent} className="flex h-full flex-col overflow-hidden p-8 sm:p-10">
                  <span aria-hidden className="pointer-events-none absolute right-6 top-0 select-none font-serif text-[9rem] leading-none text-white/[0.06]">
                    &ldquo;
                  </span>
                  <blockquote className="flex-1 font-serif text-[1.35rem] leading-snug text-white/85 sm:text-2xl">
                    &ldquo;{item.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4 border-t border-white/[0.08] pt-6">
                    <span className="lux-check flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-bold text-lux-ink">
                      {item.initials}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-white">{item.name}</span>
                      <span className="block text-xs text-white/45">{item.role}</span>
                    </span>
                  </figcaption>
                </LuxCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-4 pb-32 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[40px] px-6 py-20 text-center sm:px-12 sm:py-28">
            <div
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(221,191,93,0.3), transparent 60%), radial-gradient(ellipse at 50% 120%, rgba(80,180,68,0.24), transparent 55%), linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
              }}
            />
            <div aria-hidden className="lux-horizon -z-10 opacity-60" />
            <div aria-hidden className="absolute inset-0 -z-10 rounded-[40px] ring-1 ring-inset ring-white/10" />
            <LuxEyebrow>Your move</LuxEyebrow>
            <h2 className="mx-auto mt-5 max-w-4xl font-serif text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.98] text-white">
              Ready to <span className="lux-gold-text italic">Dominate</span> Your Market?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              Stop leaving revenue on the table. Let&apos;s discuss how we can elevate your brand and multiply your ROI.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="lux-cta inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold"
              >
                Schedule a Strategy Call
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </LuxPage>
  );
}

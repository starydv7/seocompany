import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Mail, Phone, Video } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import Reveal from "@/components/Reveal";
import LuxBackdrop from "@/components/lux/LuxBackdrop";
import LuxCard from "@/components/lux/LuxCard";
import LuxPage, { LuxEyebrow, LuxPill } from "@/components/lux/LuxPage";
import { LUX_ACCENTS } from "@/components/lux/accents";

export const metadata: Metadata = {
  title: "Book a Strategy Call | BrandMarketing",
  description:
    "Book a free strategy call with BrandMarketing. Discuss your growth goals, uncover opportunities and leave with a roadmap tailored to your business.",
};

const BENEFITS = [
  {
    icon: Calendar,
    title: "Pick Your Time",
    body: "Choose a time that works for you. We're flexible and work across time zones.",
    accent: LUX_ACCENTS.sky,
  },
  {
    icon: Video,
    title: "Video Call",
    body: "Join via Zoom, Google Meet, or your preferred platform. We'll send the link.",
    accent: LUX_ACCENTS.emerald,
  },
  {
    icon: Clock,
    title: "30-45 Minutes",
    body: "Quick but thorough. We'll cover your goals, challenges, and next steps.",
    accent: LUX_ACCENTS.violet,
  },
];

const AGENDA = [
  { title: "Your current situation", body: "We'll understand your business, goals, and current marketing/SEO performance." },
  { title: "Growth opportunities", body: "We'll identify the biggest opportunities for traffic, leads, and revenue growth." },
  { title: "Custom roadmap", body: "We'll outline a clear, actionable plan tailored to your business and timeline." },
  { title: "Q&A", body: "Ask us anything about SEO, paid ads, automation, or our process." },
];

export default function ContactPage() {
  return (
    <LuxPage>
      {/* Hero */}
      <section className="relative isolate overflow-hidden px-4 pb-24 pt-16 sm:px-6 sm:pb-32 sm:pt-24 lg:px-8">
        <LuxBackdrop />
        <div className="relative mx-auto w-full max-w-5xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <LuxPill>Consultation</LuxPill>
            </div>
            <h1 className="mt-8 text-[clamp(3rem,7.4vw,7rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-stone-900">
              Book a
              <br />
              <span className="lux-gold-text font-serif font-normal italic tracking-[-0.02em]">Strategy Call</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-[clamp(1rem,1.35vw,1.2rem)] leading-relaxed text-stone-600">
              Let&apos;s discuss your growth goals, identify opportunities, and build a roadmap tailored to your
              business, no commitment required.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="lux-cta inline-flex items-center gap-2 rounded-full px-9 py-4 text-base font-semibold"
              >
                Schedule Meeting
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
              <p className="text-sm text-stone-500">Free and paid clients can both schedule here.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-6 md:grid-cols-3">
          {BENEFITS.map((item, i) => (
            <Reveal key={item.title} delay={0.08 * i} className="h-full">
              <LuxCard accent={item.accent} className="flex h-full flex-col p-8 sm:p-10">
                <span className="lux-check flex h-12 w-12 items-center justify-center rounded-2xl text-lux-ink">
                  <item.icon className="h-5 w-5" strokeWidth={2.25} />
                </span>
                <h2 className="mt-8 font-serif text-3xl leading-none text-stone-900">{item.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-stone-600">{item.body}</p>
              </LuxCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Agenda + schedule */}
      <section className="relative px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[1.35fr,1fr]">
          <Reveal className="h-full">
            <div className="lux-panel h-full p-8 sm:p-10 lg:p-12">
              <LuxEyebrow>The agenda</LuxEyebrow>
              <h2 className="mt-4 font-serif text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.02] text-stone-900">
                What we&apos;ll cover <span className="italic text-stone-600">in this call</span>
              </h2>
              <ol className="mt-10 space-y-2">
                {AGENDA.map((item, i) => (
                  <li
                    key={item.title}
                    className="group flex gap-6 rounded-2xl px-4 py-5 transition hover:bg-white"
                  >
                    <span className="font-serif text-4xl leading-none text-lux-gold/70 transition group-hover:text-lux-bronze">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-stone-900">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-stone-500">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal className="h-full" delay={0.1}>
            <LuxCard featured className="flex h-full flex-col p-8 sm:p-10 lg:p-12">
              <LuxEyebrow>Schedule your meeting</LuxEyebrow>
              <h2 className="mt-4 font-serif text-[clamp(2.2rem,4vw,3.25rem)] leading-[1.02] text-stone-900">
                Book a slot <span className="lux-gold-text italic">instantly.</span>
              </h2>
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="lux-cta mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold"
              >
                Schedule Meeting
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>

              <div className="lux-hairline my-10" aria-hidden />

              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="mailto:connect@brandmarketing.digital"
                    className="flex items-center gap-3 text-stone-700 transition hover:text-stone-900"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lux-bronze ring-1 ring-inset ring-stone-200">
                      <Mail className="h-4 w-4" />
                    </span>
                    connect@brandmarketing.digital
                  </a>
                </li>
                <li>
                  <a href="tel:+917003427553" className="flex items-center gap-3 text-stone-700 transition hover:text-stone-900">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lux-bronze ring-1 ring-inset ring-stone-200">
                      <Phone className="h-4 w-4" />
                    </span>
                    +91 70034 27553
                  </a>
                </li>
              </ul>

              <div className="mt-auto pt-10">
                <p className="rounded-2xl bg-white p-5 text-sm leading-relaxed text-stone-600 ring-1 ring-inset ring-stone-200">
                  <span className="font-semibold text-stone-900">No commitment required.</span> This is a free
                  consultation to see if we&apos;re a good fit. We&apos;ll send you a recording and summary after the
                  call.
                </p>
              </div>
            </LuxCard>
          </Reveal>
        </div>
      </section>
    </LuxPage>
  );
}

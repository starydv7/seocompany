import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | BrandMarketing Digital",
  description:
    "Meet the minds behind the metrics — a collective of strategists, creators, and analysts obsessed with growth.",
};

type AboutMember = {
  title: string;
  name: string;
  role: string;
  quote: string;
  description: string;
  superpower: string;
  favorite: { label: string; value: string };
};

const members: AboutMember[] = [
  {
    title: "The Visionary",
    name: "Dhiraj Kumar Yadav",
    role: "Founder & Automation Specialist",
    quote: "Marketing is no longer about the stuff that you make, but about the stories you tell.",
    description:
      "Dhiraj founded BrandMarketing Digital to end the war between “branding” and “sales.” He sets the north-star strategy for every client, making sure long-term positioning aligns with day-to-day execution.",
    superpower: "Seeing the big picture before the puzzle pieces are even out of the box.",
    favorite: { label: "Favorite Metric", value: "Customer Lifetime Value (CLV)" },
  },
  {
    title: "The Data Architect",
    name: "Sohail Islam",
    role: "Co‑Founder & Head of Performance & SEO",
    quote: "If you can't measure it, you can't improve it.",
    description:
      "Sohail builds the measurement and performance infrastructure that turns creative ideas into predictable outcomes. From technical SEO to paid acquisition, he treats every budget like it’s his own.",
    superpower: "Turning a confusing 100‑page data report into a 1‑page action plan.",
    favorite: { label: "Favorite Metric", value: "Return on Ad Spend (ROAS)" },
  },
  {
    title: "The Visual Storyteller",
    name: "Trisha Nandy",
    role: "Co‑Founder & Social Media Manager",
    quote: "Design is the silent ambassador of your brand.",
    description:
      "Trisha makes sure your brand doesn’t just show up — it stands out. From logo concepts to the aesthetics of your social presence, she protects your identity with sharp detail and consistency.",
    superpower: "Translating complex business concepts into stunning, simple visuals.",
    favorite: { label: "Favorite Tool", value: "Adobe Illustrator (and a sketchbook)" },
  },
  {
    title: "The Voice",
    name: "Saitika Bhowmick",
    role: "Co‑Founder & Social Media & Community Manager",
    quote: "People don't buy from businesses; they buy from people.",
    description:
      "Saitika is the pulse of the agency. Always on-trend, she keeps your community human — ensuring every comment, DM, and review gets a thoughtful response that builds trust and momentum.",
    superpower: "Writing captions that stop the scroll.",
    favorite: { label: "Favorite Platforms", value: "TikTok (trends) & LinkedIn (growth)" },
  },
  {
    title: "The Technical Guru",
    name: "Pawan Yadav",
    role: "Co‑Founder & Lead Developer",
    quote: "Great marketing needs great systems behind it.",
    description:
      "Pawan turns growth requirements into fast, secure, scalable web and mobile experiences. From tracking and analytics to full product builds, he makes sure the tech foundation can handle real users and real scale.",
    superpower: "Shipping reliable products that feel simple — even when the system is complex.",
    favorite: { label: "Favorite Stack", value: "MERN & React Native" },
  },
];

export default function AboutPage() {
  return (
    <section className="px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-12">
        <header className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
            Meet The Team
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            The Minds Behind the Metrics
          </h1>
          <p className="text-sm text-slate-600 sm:text-base">
            We are a collective of strategists, creators, and data analysts. While we each have our
            own specialty — from color theory to keyword density — we’re united by a single
            obsession: <span className="font-semibold text-slate-900">Growth.</span>
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {members.map((m) => (
            <article
              key={m.name}
              className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/90 p-6 text-sm shadow-sm shadow-sky-50"
            >
              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {m.title}
                </p>
                <h2 className="text-lg font-semibold tracking-tight text-slate-900">{m.name}</h2>
                <p className="text-xs font-medium text-slate-600">{m.role}</p>
              </div>

              <blockquote className="mt-4 rounded-xl border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-4 text-xs text-slate-700">
                “{m.quote}”
              </blockquote>

              <p className="mt-4 text-sm leading-relaxed text-slate-700">{m.description}</p>

              <dl className="mt-5 space-y-2 text-xs text-slate-600">
                <div>
                  <dt className="font-semibold text-slate-900">Superpower</dt>
                  <dd className="mt-0.5">{m.superpower}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">{m.favorite.label}</dt>
                  <dd className="mt-0.5">{m.favorite.value}</dd>
                </div>
              </dl>

              <div className="mt-auto pt-5">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-cyan-200 transition hover:shadow-blue-200 hover:brightness-105"
                >
                  Work with us
                </Link>
              </div>
            </article>
          ))}
        </div>

        <section className="rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-lg shadow-sky-50 sm:p-10">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
              Join Our Squad
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Think you have what it takes?
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              We’re always looking for ambitious talent to join our ranks. If you’re obsessed with
              digital culture and results-driven marketing, we want to hear from you.
            </p>
            <div className="pt-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800"
              >
                View Open Positions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}



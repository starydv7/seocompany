import Link from "next/link";
import type { Metadata } from "next";
import { Linkedin } from "lucide-react";
import { teamMembers } from "./data";

export const metadata: Metadata = {
  title: "Our Team | SEO Company",
};

export default function TeamPage() {
  return (
    <section className="px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
            The Team
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Senior specialists behind every strategy.
          </h1>
          <p className="text-sm text-slate-600 sm:text-base">
            Strategy, execution and reporting are handled by the people you see here – no handoffs
            to anonymous juniors. Click into any profile to see exactly how they think and work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {teamMembers.map((member) => (
            <article
              key={member.slug}
              className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/90 p-5 text-sm shadow-sm shadow-sky-50 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-md hover:shadow-sky-100"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 text-xs font-semibold text-white shadow-md shadow-cyan-200">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-slate-900">{member.name}</h2>
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                    {member.experience ? `${member.experience} • ` : ""}
                    {member.role}
                  </p>
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-600 line-clamp-3">{member.headline}</p>

              <ul className="mt-3 space-y-1 text-[11px] text-slate-500">
                <li>{member.location}</li>
                <li>Key focus: {member.specialties[0]}</li>
              </ul>

              <div className="mt-auto pt-4 flex items-center justify-between gap-3 border-t border-slate-100">
                <Link
                  href={`/team/${member.slug}`}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-cyan-200 transition hover:shadow-blue-200 hover:brightness-105"
                >
                  View full profile
                </Link>
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border-2 border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-sky-400 hover:bg-sky-50 hover:text-sky-700"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



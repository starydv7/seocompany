"use client";

import Link from "next/link";
import { Calendar, Clock, Video } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";

export default function ContactPage() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-12">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700 shadow-sm shadow-sky-100 ring-1 ring-slate-200/60 backdrop-blur">
            Consultation
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Book a Strategy Call
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl">
            Let&apos;s discuss your growth goals, identify opportunities, and build a roadmap tailored to
            your business—no commitment required.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8">
            <Link
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-200 transition hover:shadow-blue-200 hover:brightness-105"
            >
              Schedule Meeting
            </Link>
            <p className="text-sm text-slate-500">Free and paid clients can both schedule here.</p>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-sky-50">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-200">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900">Pick Your Time</h3>
            <p className="mt-1 text-xs text-slate-600">
              Choose a time that works for you. We're flexible and work across time zones.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-sky-50">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-200">
              <Video className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900">Video Call</h3>
            <p className="mt-1 text-xs text-slate-600">
              Join via Zoom, Google Meet, or your preferred platform. We'll send the link.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-sky-50">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-md shadow-purple-200">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900">30-45 Minutes</h3>
            <p className="mt-1 text-xs text-slate-600">
              Quick but thorough. We'll cover your goals, challenges, and next steps.
            </p>
          </div>
        </div>

        {/* Schedule CTA */}
        <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-sky-100/50 sm:p-12">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Schedule Your Meeting
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Book a slot instantly.
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-200 transition hover:shadow-blue-200 hover:brightness-105"
            >
              Schedule Meeting
            </Link>
          </div>
        </div>

        {/* What to Expect */}
        <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-sky-50/30 p-8 shadow-sm">
          <h2 className="mb-6 text-xl font-bold tracking-tight text-slate-900">
            What we'll cover in this call
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-xs font-bold text-white shadow-md shadow-cyan-200/50">
                1
              </span>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Your current situation</h3>
                <p className="mt-1 text-xs text-slate-600">
                  We'll understand your business, goals, and current marketing/SEO performance.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-xs font-bold text-white shadow-md shadow-emerald-200/50">
                2
              </span>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Growth opportunities</h3>
                <p className="mt-1 text-xs text-slate-600">
                  We'll identify the biggest opportunities for traffic, leads, and revenue growth.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 text-xs font-bold text-white shadow-md shadow-purple-200/50">
                3
              </span>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Custom roadmap</h3>
                <p className="mt-1 text-xs text-slate-600">
                  We'll outline a clear, actionable plan tailored to your business and timeline.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-xs font-bold text-white shadow-md shadow-amber-200/50">
                4
              </span>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Q&A</h3>
                <p className="mt-1 text-xs text-slate-600">
                  Ask us anything about SEO, paid ads, automation, or our process.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="rounded-2xl border border-dashed border-slate-300/80 bg-white/80 p-6 text-center">
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">No commitment required.</span> This is
            a free consultation to see if we're a good fit. We'll send you a recording and summary
            after the call.
          </p>
        </div>

      </div>
    </section>
  );
}


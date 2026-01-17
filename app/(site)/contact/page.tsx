"use client";

import { useState } from "react";
import { Calendar, Clock, Video, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add form submission logic (e.g., send to API, email service, etc.)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-12">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700 shadow-sm shadow-sky-100 ring-1 ring-slate-200/60 backdrop-blur">
            Free Consultation
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Book a Free Strategy Call
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl">
            Let's discuss your growth goals, identify opportunities, and build a roadmap tailored to
            your business—no commitment required.
          </p>
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

        {/* Contact Form */}
        <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-sky-100/50 sm:p-12">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Request a Free Strategy Call
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Fill out the form below and we'll get back to you within 24 hours to schedule your call.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50/50 p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-200/50">
                <Send className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Thank you!</h3>
              <p className="mt-2 text-sm text-slate-600">
                We've received your request. We'll contact you within 24 hours to schedule your free strategy call.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-900">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-900">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-900">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-semibold text-slate-900">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="website" className="mb-2 block text-sm font-semibold text-slate-900">
                  Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="preferredDate" className="mb-2 block text-sm font-semibold text-slate-900">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>
                <div>
                  <label htmlFor="preferredTime" className="mb-2 block text-sm font-semibold text-slate-900">
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-900">
                  Tell us about your goals or questions
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="What would you like to discuss? What are your main growth goals?"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-200 transition hover:shadow-blue-200 hover:brightness-105 sm:w-auto sm:px-8"
              >
                Submit Request
              </button>
            </form>
          )}
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


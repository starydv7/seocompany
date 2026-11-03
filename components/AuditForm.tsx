"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const FIELDS = [
  { name: "name", type: "text", label: "Full Name", required: true, autoComplete: "name" },
  { name: "email", type: "email", label: "Email Address", required: true, autoComplete: "email" },
  { name: "website", type: "text", label: "Website", required: true, autoComplete: "url" },
  { name: "phone", type: "tel", label: "Phone Number", required: false, autoComplete: "tel" },
] as const;

type Status = "idle" | "sending" | "sent" | "error";

export default function AuditForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => null)) as { message?: string } | null;
      if (!res.ok) {
        throw new Error(data?.message || "Something went wrong. Please try again.");
      }
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="mt-6 rounded-2xl bg-emerald-50/80 px-5 py-6 text-center ring-1 ring-emerald-200">
        <CheckCircle2 className="mx-auto h-9 w-9 text-emerald-600" strokeWidth={1.8} />
        <p className="mt-3 font-serif text-2xl text-stone-900">Thank you!</p>
        <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
          Your audit request is in. Our team will review your website and get back to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-lux-bronze hover:text-stone-900"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-3">
      {FIELDS.map((field) => (
        <label key={field.name} className="block">
          <span className="sr-only">{field.label}</span>
          <input
            name={field.name}
            type={field.type}
            required={field.required}
            aria-required={field.required}
            autoComplete={field.autoComplete}
            disabled={sending}
            placeholder={field.required ? `${field.label} *` : field.label}
            className="lux-input px-4 py-3 text-sm disabled:opacity-60"
          />
        </label>
      ))}
      <input
        name="company"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      {status === "error" && error ? (
        <p role="alert" className="rounded-xl bg-rose-50 px-4 py-2.5 text-sm text-rose-700 ring-1 ring-rose-200">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={sending}
        className="lux-cta mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold disabled:cursor-wait disabled:opacity-80"
      >
        {sending ? (
          <>
            Sending…
            <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.5} />
          </>
        ) : (
          <>
            Request Your Free Audit
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </>
        )}
      </button>
    </form>
  );
}

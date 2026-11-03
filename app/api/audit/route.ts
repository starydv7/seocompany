import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  name?: unknown;
  email?: unknown;
  website?: unknown;
  phone?: unknown;
  /** Honeypot — real users never see or fill this field. */
  company?: unknown;
};

const DEFAULT_RECIPIENT = "connect@brandmarketing.digital";
const EMAIL_RE = /^[^\s@<>()"',;:]+@[^\s@<>()"',;:]+\.[^\s@<>()"',;:]{2,}$/;

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_MAX;
}

/** Single-line value: trimmed, CR/LF stripped (prevents header injection), length-capped. */
function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.replace(/[\r\n]+/g, " ").trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function websiteHref(website: string) {
  return /^https?:\/\//i.test(website) ? website : `https://${website}`;
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  // Bots that fill the hidden field get a fake success so they don't retry.
  if (clean(body.company, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const website = clean(body.website, 300);
  const phone = clean(body.phone, 40);

  if (!name || !email || !website) {
    return NextResponse.json(
      { message: "Please fill in your name, email and website." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }
  if (phone && !/^[+()\-.\s\d]{6,40}$/.test(phone)) {
    return NextResponse.json({ message: "Please enter a valid phone number." }, { status: 400 });
  }

  const ip = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { message: "Too many requests. Please try again in a few minutes." },
      { status: 429 }
    );
  }

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) {
    console.error("[audit] SMTP_USER / SMTP_PASS are not set — cannot send audit request email.");
    return NextResponse.json(
      { message: "Our form is temporarily unavailable. Please email us directly." },
      { status: 500 }
    );
  }

  const port = Number(process.env.SMTP_PORT ?? 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const to = process.env.AUDIT_TO_EMAIL || DEFAULT_RECIPIENT;
  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const rows: [string, string][] = [
    ["Full Name", name],
    ["Email Address", email],
    ["Website", website],
    ["Phone Number", phone || "—"],
    ["Submitted", `${submittedAt} IST`],
  ];

  const text = [
    "New free SEO & marketing audit request",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Reply to this email to respond directly to the lead.",
  ].join("\n");

  const html = `<!doctype html>
<html><body style="margin:0;background:#f7f3ea;font-family:Arial,Helvetica,sans-serif;color:#1c1917">
  <div style="max-width:560px;margin:0 auto;padding:28px 20px">
    <div style="background:#ffffff;border:1px solid #e7e0cf;border-radius:16px;overflow:hidden">
      <div style="background:#172033;padding:20px 24px">
        <p style="margin:0;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#ddbf5d">Free audit request</p>
        <h1 style="margin:6px 0 0;font-size:20px;color:#ffffff">New lead from brandmarketing.digital</h1>
      </div>
      <table role="presentation" style="width:100%;border-collapse:collapse;font-size:14px">
        ${rows
          .map(([label, value]) => {
            let cell = escapeHtml(value);
            if (label === "Email Address") cell = `<a href="mailto:${escapeHtml(email)}" style="color:#1d4ed8">${cell}</a>`;
            if (label === "Website") cell = `<a href="${escapeHtml(websiteHref(website))}" style="color:#1d4ed8">${cell}</a>`;
            if (label === "Phone Number" && phone) cell = `<a href="tel:${escapeHtml(phone.replace(/[^\d+]/g, ""))}" style="color:#1d4ed8">${cell}</a>`;
            return `<tr>
          <td style="padding:12px 24px;border-top:1px solid #f0ebde;color:#78716c;width:140px;vertical-align:top">${label}</td>
          <td style="padding:12px 24px;border-top:1px solid #f0ebde;font-weight:600">${cell}</td>
        </tr>`;
          })
          .join("")}
      </table>
    </div>
    <p style="margin:16px 4px 0;font-size:12px;color:#78716c">Hit reply to respond directly to ${escapeHtml(name)}.</p>
  </div>
</body></html>`;

  try {
    await transporter.sendMail({
      from: { name: "BrandMarketing Website", address: user },
      to,
      replyTo: { name, address: email },
      subject: `Free audit request: ${name} (${website})`,
      text,
      html,
    });
  } catch (error) {
    console.error("[audit] Failed to send audit request email:", error);
    return NextResponse.json(
      { message: "We couldn't send your request right now. Please try again shortly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

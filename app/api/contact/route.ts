import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  matter?: string;
  message?: string;
  company?: string; // honeypot
};

const escape = (s: string) =>
  s.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" })[c]!);

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: silently accept, do nothing.
  if (body.company && body.company.trim() !== "") {
    return NextResponse.json({ message: "Thank you — your request has been received." });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const matter = (body.matter || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please provide your name, email, and a message." },
      { status: 400 }
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "info@fgllegalac.com";
  // Resend requires a verified sender; onboarding@resend.dev works out of the box.
  const from = process.env.CONTACT_FROM || "FGL LEGAL Website <onboarding@resend.dev>";

  const successMessage =
    "Thank you — your request has been received. A member of our team will be in touch shortly.";

  // Graceful degradation: without a key, don't 500 the build/deploy.
  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY not set — logging submission instead of emailing.",
      { name, email, phone, matter }
    );
    return NextResponse.json({
      message: successMessage,
      delivered: false,
    });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#17241c">
        <h2 style="color:#0a3d29;margin:0 0 12px">New consultation request</h2>
        <table style="border-collapse:collapse">
          <tr><td style="padding:4px 12px 4px 0;color:#45524a"><strong>Name</strong></td><td>${escape(name)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#45524a"><strong>Email</strong></td><td>${escape(email)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#45524a"><strong>Phone</strong></td><td>${escape(phone) || "—"}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#45524a"><strong>Matter</strong></td><td>${escape(matter) || "—"}</td></tr>
        </table>
        <p style="margin:16px 0 4px;color:#45524a"><strong>Message</strong></p>
        <p style="white-space:pre-wrap;margin:0">${escape(message)}</p>
      </div>`;

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New consultation request — ${name}`,
      html,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "We couldn't send your message right now. Please email us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: successMessage, delivered: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again, or email us directly." },
      { status: 500 }
    );
  }
}

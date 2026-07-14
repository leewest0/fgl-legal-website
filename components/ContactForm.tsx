"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { matterTypes } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";

const fieldCls =
  "w-full border border-ink/15 bg-paper px-4 py-3 text-forest-900 placeholder:text-ink-500/60 transition-colors focus:border-forest focus:outline-none";
const labelCls =
  "mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-ink-500";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setMessage(
          json?.error ||
            "Something went wrong. Please try again, or email us directly."
        );
        return;
      }
      setStatus("success");
      setMessage(
        json?.message ||
          "Thank you — your request has been received. We'll be in touch shortly."
      );
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "We couldn't reach the server. Please try again, or email info@fgllegalgh.com."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 border border-forest/25 bg-forest/5 p-8">
        <CheckCircle2 className="text-forest" size={32} />
        <h3 className="font-display text-2xl text-forest-900">Request received</h3>
        <p className="text-ink-500">{message}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-forest link-underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Full name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Ama Mensah"
            className={fieldCls}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldCls}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+233 …"
            className={fieldCls}
          />
        </div>
        <div>
          <label htmlFor="matter" className={labelCls}>
            Matter type
          </label>
          <select id="matter" name="matter" defaultValue="" className={fieldCls}>
            <option value="" disabled>
              Select an area…
            </option>
            {matterTypes.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>
          How can we help? <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Briefly describe your matter…"
          className={`${fieldCls} resize-y`}
        />
      </div>

      {/* Honeypot — hidden from users, catches bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {status === "error" && (
        <p className="flex items-start gap-2 border border-red-300 bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle size={18} className="mt-0.5 shrink-0" />
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group inline-flex items-center justify-center gap-2.5 bg-forest px-7 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-forest-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send Request
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </>
        )}
      </button>

      <p className="text-xs text-ink-500">
        By submitting, you agree to be contacted about your enquiry. We treat
        your information as confidential.
      </p>
    </form>
  );
}

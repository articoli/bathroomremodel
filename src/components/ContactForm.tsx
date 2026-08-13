"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    company: "",
  });

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.company) return;
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
      setError(
        "Sorry, we couldn't send your message. Please call us directly at (972) 391-8227."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <h3 className="font-display text-2xl text-brand-900">Thank you!</h3>
        <p className="mt-3 text-slate-600">
          Your request has been received. A member of our Plano team will reach out
          within one business day.
        </p>
        <p className="mt-4 text-sm text-slate-500">
          Prefer to talk now? Call{" "}
          <a href="tel:+19723918227" className="font-bold text-brand-700">
            (972) 391-8227
          </a>
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100";

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            value={form.company}
            onChange={update("company")}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-slate-700">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            className={inputCls}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-slate-700">
            Phone *
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={update("phone")}
            className={inputCls}
            placeholder="(972) 555-0123"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={update("email")}
          className={inputCls}
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-slate-700">
          Service Needed
        </label>
        <select id="service" value={form.service} onChange={update("service")} className={inputCls}>
          <option value="">Select a service…</option>
          <option value="Complete Bathroom Renovation">Complete Bathroom Renovation</option>
          <option value="Tub to Shower Conversion">Tub to Shower Conversion</option>
          <option value="Shower Installation / Replacement">Shower Installation / Replacement</option>
          <option value="Bathtub Installation / Replacement">Bathtub Installation / Replacement</option>
          <option value="Glass Enclosure Installation">Glass Enclosure Installation</option>
          <option value="Tile Flooring Installation">Tile Flooring Installation</option>
          <option value="Custom Vanity / Storage">Custom Vanity / Storage</option>
          <option value="Plumbing / Fixture Upgrades">Plumbing / Fixture Upgrades</option>
          <option value="Lighting / Ventilation">Lighting / Ventilation</option>
          <option value="Accessibility Modifications">Accessibility Modifications</option>
          <option value="Luxury Bathroom Upgrades">Luxury Bathroom Upgrades</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-slate-700">
          Tell Us About Your Project *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          className={inputCls}
          placeholder="e.g. We'd like to convert our master bath tub to a walk-in shower in Plano. Approx. size, timeline, budget…"
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-brand-800 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-800/20 transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : "Request My Free Quote"}
      </button>
      <p className="text-center text-xs text-slate-400">
        We&apos;ll never share your information. No spam, no pressure.
      </p>
    </form>
  );
}

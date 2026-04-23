"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const tourTypes = [
  "Sunrise Pony Tour",
  "Wild Pony Expedition",
  "Sunset Cruise",
  "Pony Swim Tour (July)",
  "Rocket Launch Charter",
  "Fireworks Charter",
  "Photography Charter",
  "Guided Waterfowl Hunt",
  "Other / General Inquiry",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Booking Request — ${fd.get("tourType") || "General"}`
    );
    const body = encodeURIComponent(
      `Name: ${fd.get("name")}\n` +
        `Email: ${fd.get("email")}\n` +
        `Phone: ${fd.get("phone")}\n` +
        `Tour: ${fd.get("tourType")}\n` +
        `Preferred date: ${fd.get("date")}\n` +
        `Guests: ${fd.get("guests")}\n\n` +
        `Message:\n${fd.get("message")}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <svg
          className="w-14 h-14 mx-auto text-green-600 mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-2xl font-bold text-primary mb-2">Thanks!</h3>
        <p className="text-gray-700">
          Your email client just opened with your request. If it didn&apos;t, call or
          text Susan at{" "}
          <a href={site.phoneHref} className="text-accent font-semibold">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Phone" name="phone" type="tel" />
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Tour Type <span className="text-accent">*</span>
          </label>
          <select
            name="tourType"
            required
            defaultValue=""
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
          >
            <option value="" disabled>
              Select a tour…
            </option>
            {tourTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Preferred Date" name="date" type="date" />
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Number of Guests
          </label>
          <select
            name="guests"
            defaultValue="2"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
          >
            {Array.from({ length: 6 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Message / Special Requests
        </label>
        <textarea
          name="message"
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 resize-y"
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-light text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-all"
      >
        Send Booking Request
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </div>
  );
}

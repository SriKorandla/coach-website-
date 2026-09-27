"use client";

import { FormEvent, useState } from "react";
import { site } from "@/content/site";

const fields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "sport", label: "Sport or background", type: "text", required: false },
] as const;

export default function ApplyForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const sport = String(data.get("sport") || "");
    const goal = String(data.get("goal") || "");
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Sport / background: ${sport}`,
      "",
      "Goal:",
      goal,
    ].join("\n");

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      `Coaching inquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line bg-raised px-6 py-10">
        <p className="text-[0.68rem] uppercase tracking-[0.2em] text-copper">
          Application started
        </p>
        <h2 className="mt-3 font-display text-3xl uppercase tracking-[0.08em] text-ink">
          Check your email client
        </h2>
        <p className="mt-4 max-w-md text-sm leading-6 text-muted">
          Your details are in a draft to {site.email}. Send it, and I will follow
          up if it looks like a fit. If nothing opened, email that address
          directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-line bg-raised p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="block sm:col-span-1">
            <span className="text-[0.68rem] uppercase tracking-[0.18em] text-muted">
              {field.label}
            </span>
            <input
              name={field.name}
              type={field.type}
              required={field.required}
              className="mt-2 w-full border-b border-line bg-transparent py-2 text-ink outline-none transition focus:border-copper"
            />
          </label>
        ))}
      </div>
      <label className="mt-5 block">
        <span className="text-[0.68rem] uppercase tracking-[0.18em] text-muted">
          What do you want out of training?
        </span>
        <textarea
          name="goal"
          required
          rows={5}
          className="mt-2 w-full resize-y border border-line bg-bg px-3 py-2 text-sm leading-6 text-ink outline-none transition focus:border-copper"
        />
      </label>
      <button
        type="submit"
        className="mt-8 inline-flex items-center bg-copper px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.16em] text-bg transition hover:bg-copper-dim"
      >
        Send application
      </button>
    </form>
  );
}

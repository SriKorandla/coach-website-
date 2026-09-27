import type { Metadata } from "next";
import Link from "next/link";
import ConsultScheduler from "@/components/ConsultScheduler";
import { consult, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Schedule",
};

export default function SchedulePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-[0.72rem] uppercase tracking-[0.22em] text-copper">
        Schedule
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold uppercase leading-[0.95] tracking-[0.04em] sm:text-7xl">
        {consult.title}
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-sand/85">
        {consult.lede}
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-copper">
            On the call
          </p>
          <ul className="mt-5 space-y-4">
            {consult.covers.map((item) => (
              <li
                key={item}
                className="border-l-2 border-copper pl-4 text-sm leading-6 text-sand/85"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-7 text-muted">
            Weekdays are 6–8am and 5–9pm Pacific. Weekends are 6am–9pm Pacific.
            Times convert to your timezone automatically — a late Pacific slot
            can land on the next day where you are. After you pick a time, you
            will send a request to {site.email} and I will confirm. Prefer to
            write first?{" "}
            <Link href="/contact" className="text-sand hover:text-copper">
              Go to contact
            </Link>
            .
          </p>
        </div>
        <ConsultScheduler />
      </div>
    </div>
  );
}

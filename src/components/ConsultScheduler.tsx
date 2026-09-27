"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { consult, site } from "@/content/site";
import {
  buildViewSlots,
  detectTimeZone,
  formatDayLabel,
  formatStamp,
  timeZoneDisplayName,
  timezoneOptions,
  uniqueDays,
  type ViewSlot,
} from "@/lib/consultSchedule";

const DAY_PLACEHOLDERS = 14;

export default function ConsultScheduler() {
  const [ready, setReady] = useState(false);
  const [timeZone, setTimeZone] = useState(consult.timezone);
  const [ymd, setYmd] = useState("");
  const [slotId, setSlotId] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const detected = detectTimeZone();
    setTimeZone(detected);
    setReady(true);
  }, []);

  const slots = useMemo(
    () => (ready ? buildViewSlots(timeZone) : []),
    [ready, timeZone],
  );
  const days = useMemo(() => uniqueDays(slots), [slots]);
  const selectedDay = ymd && days.includes(ymd) ? ymd : (days[0] ?? "");
  const daySlots = slots.filter((slot) => slot.viewYmd === selectedDay);
  const selectedSlot = slots.find((slot) => slot.id === slotId) ?? null;
  const zones = timezoneOptions(timeZone);
  const zoneName = ready
    ? timeZoneDisplayName(timeZone)
    : consult.timezoneLabel;
  const showPacificHint = ready && timeZone !== consult.timezone;

  useEffect(() => {
    if (!days.length) return;
    if (!days.includes(ymd)) {
      setYmd(days[0]);
      setSlotId(null);
    }
  }, [days, ymd]);

  function chooseDay(nextYmd: string) {
    setYmd(nextYmd);
    setSlotId(null);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedSlot) return;

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const note = String(data.get("note") || "");
    const localWhen = formatStamp(selectedSlot.start, timeZone);
    const pacificWhen = selectedSlot.pacificStamp;
    const body = [
      "Free 30-minute 1:1 consult request",
      "",
      `When (${zoneName}): ${localWhen}`,
      `When (Pacific Time): ${pacificWhen}`,
      `Duration: ${consult.duration}`,
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "What they want to cover:",
      note,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Consult request: ${localWhen}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent && selectedSlot) {
    return (
      <div className="border border-line bg-raised px-6 py-10 sm:px-8">
        <p className="text-[0.68rem] uppercase tracking-[0.2em] text-copper">
          Request started
        </p>
        <h2 className="mt-3 font-display text-3xl uppercase tracking-[0.08em] text-ink">
          Send the email to lock it in
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-6 text-muted">
          A draft to {site.email} should be open with{" "}
          <span className="text-sand">
            {formatStamp(selectedSlot.start, timeZone)}
          </span>
          {showPacificHint ? (
            <>
              {" "}
              ({selectedSlot.pacificStamp}).
            </>
          ) : (
            "."
          )}{" "}
          Send it and I will confirm the time.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-line bg-raised p-6 sm:p-8">
      <label className="block">
        <span className="text-[0.68rem] uppercase tracking-[0.2em] text-copper">
          Your timezone
        </span>
        <select
          value={timeZone}
          onChange={(event) => {
            setTimeZone(event.target.value);
            setSlotId(null);
          }}
          className="mt-2 w-full border border-line bg-bg px-3 py-2 text-sm text-ink outline-none focus:border-copper"
        >
          {zones.map((zone) => (
            <option key={zone.id} value={zone.id}>
              {zone.label}
            </option>
          ))}
        </select>
        <span className="mt-2 block text-xs leading-5 text-muted">
          Availability is set in Pacific Time. Slots are shown in {zoneName}.
        </span>
      </label>

      <div className="mt-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-copper">
            Step 1
          </p>
          <h2 className="mt-2 font-display text-2xl uppercase tracking-[0.08em]">
            Pick a day
          </h2>
        </div>
      </div>

      <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
        {!ready
          ? Array.from({ length: DAY_PLACEHOLDERS }, (_, index) => (
              <div
                key={index}
                className="min-w-[4.6rem] shrink-0 border border-line px-3 py-3 opacity-40"
              >
                <span className="block h-3 w-8 bg-line" />
                <span className="mt-2 block h-5 w-10 bg-line" />
              </div>
            ))
          : days.map((day) => {
              const label = formatDayLabel(day);
              const selected = day === selectedDay;
              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => chooseDay(day)}
                  className={`min-w-[4.6rem] shrink-0 border px-3 py-3 text-left transition ${
                    selected
                      ? "border-copper bg-copper text-bg"
                      : "border-line text-sand hover:border-sand/50"
                  }`}
                >
                  <span className="block text-[0.65rem] uppercase tracking-[0.16em]">
                    {label.weekday}
                  </span>
                  <span className="mt-1 block font-display text-lg uppercase tracking-[0.06em]">
                    {label.monthDay}
                  </span>
                </button>
              );
            })}
      </div>

      <div className="mt-10">
        <p className="text-[0.68rem] uppercase tracking-[0.2em] text-copper">
          Step 2
        </p>
        <h2 className="mt-2 font-display text-2xl uppercase tracking-[0.08em]">
          Pick a 30-minute time
        </h2>
        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
          {daySlots.map((slot) => (
            <SlotButton
              key={slot.id}
              slot={slot}
              selected={slotId === slot.id}
              showPacific={showPacificHint}
              onSelect={() => setSlotId(slot.id)}
            />
          ))}
        </div>
      </div>

      <form onSubmit={onSubmit} className="mt-10 border-t border-line pt-8">
        <p className="text-[0.68rem] uppercase tracking-[0.2em] text-copper">
          Step 3
        </p>
        <h2 className="mt-2 font-display text-2xl uppercase tracking-[0.08em]">
          Confirm the consult
        </h2>
        {selectedSlot ? (
          <p className="mt-3 text-sm text-sand">
            {formatStamp(selectedSlot.start, timeZone)}
            {showPacificHint ? ` · ${selectedSlot.pacificStamp}` : ""} ·{" "}
            {consult.duration}
          </p>
        ) : (
          <p className="mt-3 text-sm text-muted">
            Choose a day and time first.
          </p>
        )}

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-[0.68rem] uppercase tracking-[0.18em] text-muted">
              Name
            </span>
            <input
              name="name"
              type="text"
              required
              disabled={!selectedSlot}
              className="mt-2 w-full border-b border-line bg-transparent py-2 text-ink outline-none transition focus:border-copper disabled:opacity-40"
            />
          </label>
          <label className="block">
            <span className="text-[0.68rem] uppercase tracking-[0.18em] text-muted">
              Email
            </span>
            <input
              name="email"
              type="email"
              required
              disabled={!selectedSlot}
              className="mt-2 w-full border-b border-line bg-transparent py-2 text-ink outline-none transition focus:border-copper disabled:opacity-40"
            />
          </label>
        </div>
        <label className="mt-5 block">
          <span className="text-[0.68rem] uppercase tracking-[0.18em] text-muted">
            What should we cover?
          </span>
          <textarea
            name="note"
            rows={4}
            required
            disabled={!selectedSlot}
            className="mt-2 w-full resize-y border border-line bg-bg px-3 py-2 text-sm leading-6 text-ink outline-none transition focus:border-copper disabled:opacity-40"
          />
        </label>
        <button
          type="submit"
          disabled={!selectedSlot}
          className="mt-8 inline-flex bg-copper px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.16em] text-bg transition hover:bg-copper-dim disabled:cursor-not-allowed disabled:opacity-40"
        >
          Request this time
        </button>
      </form>
    </div>
  );
}

function SlotButton({
  slot,
  selected,
  showPacific,
  onSelect,
}: {
  slot: ViewSlot;
  selected: boolean;
  showPacific: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full px-3 py-2.5 text-sm tracking-[0.04em] transition ${
        selected
          ? "bg-copper text-bg"
          : "border border-line text-sand hover:border-copper"
      }`}
    >
      <span className="block">{slot.viewLabel}</span>
      {showPacific ? (
        <span
          className={`mt-1 block text-[0.65rem] uppercase tracking-[0.12em] ${
            selected ? "text-bg/80" : "text-muted"
          }`}
        >
          {slot.pacificLabel}
        </span>
      ) : null}
    </button>
  );
}

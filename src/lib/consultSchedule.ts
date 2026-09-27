import { consult } from "@/content/site";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export type TimeZoneOption = {
  id: string;
  label: string;
};

export const COMMON_TIMEZONES: TimeZoneOption[] = [
  { id: "America/Los_Angeles", label: "Pacific Time" },
  { id: "America/Denver", label: "Mountain Time" },
  { id: "America/Phoenix", label: "Arizona Time" },
  { id: "America/Chicago", label: "Central Time" },
  { id: "America/New_York", label: "Eastern Time" },
  { id: "America/Anchorage", label: "Alaska Time" },
  { id: "Pacific/Honolulu", label: "Hawaii Time" },
  { id: "UTC", label: "UTC" },
];

export type ViewSlot = {
  id: string;
  start: Date;
  viewYmd: string;
  viewLabel: string;
  pacificLabel: string;
  pacificStamp: string;
};

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function formatClock(totalMinutes: number) {
  const hours24 = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const period = hours24 >= 12 ? "PM" : "AM";
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  return `${hours12}:${pad(minutes)} ${period}`;
}

function partNumber(
  parts: Intl.DateTimeFormatPart[],
  type: Intl.DateTimeFormatPartTypes,
) {
  const value = Number(parts.find((part) => part.type === type)?.value ?? "0");
  return type === "hour" && value === 24 ? 0 : value;
}

function ymdFromParts(parts: Intl.DateTimeFormatPart[]) {
  return `${partNumber(parts, "year")}-${pad(partNumber(parts, "month"))}-${pad(partNumber(parts, "day"))}`;
}

export function ymdInZone(date: Date, timeZone: string) {
  return ymdFromParts(
    new Intl.DateTimeFormat("en-US", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).formatToParts(date),
  );
}

function getTimeZoneOffsetMs(date: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(date);
  const asUtc = Date.UTC(
    partNumber(parts, "year"),
    partNumber(parts, "month") - 1,
    partNumber(parts, "day"),
    partNumber(parts, "hour"),
    partNumber(parts, "minute"),
    partNumber(parts, "second"),
  );
  return asUtc - date.getTime();
}

export function zonedTimeToUtc(
  ymd: string,
  totalMinutes: number,
  timeZone: string,
) {
  const [year, month, day] = ymd.split("-").map(Number);
  const utcGuess = Date.UTC(
    year,
    month - 1,
    day,
    Math.floor(totalMinutes / 60),
    totalMinutes % 60,
    0,
  );
  const first = new Date(utcGuess);
  const offset = getTimeZoneOffsetMs(first, timeZone);
  const adjusted = new Date(utcGuess - offset);
  const offset2 = getTimeZoneOffsetMs(adjusted, timeZone);
  return offset2 === offset ? adjusted : new Date(utcGuess - offset2);
}

export function parseYmd(ymd: string) {
  const [year, month, day] = ymd.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function addDays(date: Date, amount: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

export function toYmd(date: Date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function formatDayLabel(ymd: string) {
  const date = parseYmd(ymd);
  return {
    weekday: WEEKDAYS[date.getDay()],
    monthDay: `${MONTHS[date.getMonth()]} ${date.getDate()}`,
  };
}

function isWeekend(ymd: string) {
  const day = parseYmd(ymd).getDay();
  return day === 0 || day === 6;
}

function pacificMinutesForDay(ymd: string) {
  const windows = isWeekend(ymd)
    ? [consult.weekendWindow]
    : consult.weekdayWindows;
  const minutes: number[] = [];
  for (const window of windows) {
    for (
      let value = window.start;
      value < window.end;
      value += consult.slotMinutes
    ) {
      minutes.push(value);
    }
  }
  return minutes;
}

export function detectTimeZone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone || consult.timezone;
}

export function timeZoneDisplayName(timeZone: string) {
  const options: Intl.DateTimeFormatOptions[] = [
    { timeZone, timeZoneName: "longGeneric", hour: "numeric" },
    { timeZone, timeZoneName: "long", hour: "numeric" },
    { timeZone, timeZoneName: "short", hour: "numeric" },
  ];
  for (const option of options) {
    try {
      const name = new Intl.DateTimeFormat("en-US", option)
        .formatToParts(new Date())
        .find((part) => part.type === "timeZoneName")?.value;
      if (name) return name;
    } catch {
      // Some browsers reject newer timeZoneName values.
    }
  }
  return timeZone.replaceAll("_", " ");
}

export function formatStamp(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(date);
}

export function formatTimeLabel(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

export function buildViewSlots(viewTimeZone: string): ViewSlot[] {
  const pacificToday = ymdInZone(new Date(), consult.timezone);
  const cutoff = Date.now() + 30 * 60 * 1000;
  const slots: ViewSlot[] = [];

  for (let offset = 0; offset < 18; offset += 1) {
    const ymd = toYmd(addDays(parseYmd(pacificToday), offset));
    for (const minutes of pacificMinutesForDay(ymd)) {
      const start = zonedTimeToUtc(ymd, minutes, consult.timezone);
      if (start.getTime() < cutoff) continue;
      slots.push({
        id: start.toISOString(),
        start,
        viewYmd: ymdInZone(start, viewTimeZone),
        viewLabel: formatTimeLabel(start, viewTimeZone),
        pacificLabel: `${formatClock(minutes)} PT`,
        pacificStamp: formatStamp(start, consult.timezone),
      });
    }
  }

  return slots;
}

export function uniqueDays(slots: ViewSlot[], limit = 14) {
  const seen = new Set<string>();
  const days: string[] = [];
  for (const slot of slots) {
    if (seen.has(slot.viewYmd)) continue;
    seen.add(slot.viewYmd);
    days.push(slot.viewYmd);
    if (days.length >= limit) break;
  }
  return days;
}

export function timezoneOptions(detected: string): TimeZoneOption[] {
  const options: TimeZoneOption[] = COMMON_TIMEZONES.map((zone) => ({
    ...zone,
  }));
  if (!options.some((zone) => zone.id === detected)) {
    options.unshift({ id: detected, label: timeZoneDisplayName(detected) });
  }
  return options;
}

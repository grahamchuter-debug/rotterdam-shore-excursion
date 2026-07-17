import type { ScheduleEntry, ShipSchedulePort } from "./types";
import {
  filterEntriesByMonth,
  filterEntriesByYear,
  getMonthsWithEntries,
  type ScheduleYear,
} from "@/lib/schedule-utils";
import rotterdamSchedule from "./imported-schedules/rotterdam.json";

const SCHEDULE_FAQS = [
  {
    question: "How accurate are Rotterdam cruise ship schedules?",
    answer:
      "The calls listed here are compiled for planning orientation and can change. Ship names, dates, times and berths are not a substitute for your cruise line's final programme. Always confirm your own call directly before booking excursions.",
  },
  {
    question: "Where do cruise ships berth in Rotterdam?",
    answer:
      "Most ships use the Wilhelminakade cruise terminal on Wilhelminapier. Always check the assigned berth and pier access on the day.",
  },
  {
    question: "Is a Rotterdam call long enough for Kinderdijk?",
    answer:
      "A call with roughly six or more usable hours can usually support a Kinderdijk half-day with a sensible return buffer. Shorter calls are better suited to harbour and city options near the pier.",
  },
];

const SCHEDULE_TIPS = [
  "Confirm all-aboard time rather than relying only on the published departure",
  "Check Wilhelminapier berth and water-taxi or tram options before estimating walking time",
  "Book Kinderdijk or Delft with enough margin for regional traffic",
  "Expect busier taxis and popular sights on multi-ship days",
];

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "rotterdam",
    name: "Rotterdam",
    country: "Netherlands",
    seoTitle: "Rotterdam Cruise Ship Schedule — Port Calls",
    metaDescription:
      "Rotterdam cruise ship schedule for planning shore excursions, with published arrivals, departures and berth orientation for Wilhelminakade.",
    intro:
      "Rotterdam is a major North Sea cruise gateway: modern harbour city near the pier, with Kinderdijk, Delft, The Hague and Gouda within regional reach.",
    description:
      "Plan your day ashore around published call windows — then confirm arrival, departure and all-aboard with your cruise line.",
    scheduleOverview:
      "Published 2026 calls (July–December) are listed below for planning orientation. No 2027 entries are available yet. Schedules can change; always confirm with your cruise line before you book.",
    planningTips: SCHEDULE_TIPS,
    faqs: SCHEDULE_FAQS,
  },
];

/** Port slug → schedule entries. 2027 is intentionally empty until new data is imported. */
const scheduleData: Record<string, ScheduleEntry[]> = {
  rotterdam: rotterdamSchedule as ScheduleEntry[],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((port) => port.slug === slug);
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((port) => port.slug);
}

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return scheduleData[slug] ?? [];
}

export function getScheduleEntryCount(slug: string): number {
  return getScheduleEntries(slug).length;
}

export function getScheduleEntriesForYear(slug: string, year: ScheduleYear): ScheduleEntry[] {
  return filterEntriesByYear(getScheduleEntries(slug), year);
}

export function getScheduleEntriesForMonth(slug: string, monthKey: string): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleEntries(slug), monthKey);
}

export function getVerifiedMonthKeys(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function searchSchedulesByShip(query: string): { portSlug: string; entries: ScheduleEntry[] }[] {
  const normalised = query.toLowerCase().trim();
  if (!normalised) return [];

  return schedulePorts
    .map((port) => ({
      portSlug: port.slug,
      entries: getScheduleEntries(port.slug).filter(
        (entry) =>
          entry.ship.toLowerCase().includes(normalised) ||
          entry.cruiseLine.toLowerCase().includes(normalised),
      ),
    }))
    .filter((result) => result.entries.length > 0);
}

export function getTodayTomorrowEntries(slug: string): {
  today: ScheduleEntry[];
  tomorrow: ScheduleEntry[];
} {
  const entries = getScheduleEntries(slug);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateKey = (date: Date) => date.toISOString().slice(0, 10);

  return {
    today: entries.filter((entry) => entry.date === dateKey(today)),
    tomorrow: entries.filter((entry) => entry.date === dateKey(tomorrow)),
  };
}

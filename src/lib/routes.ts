import { schedulePorts, getScheduleEntries } from "@/data/schedules";

/** Canonical destination route paths used across nav, sitemap helpers and editorial links. */
export const routes = {
  home: "/",
  shoreExcursions: "/shore-excursions/",
  cruisePortGuide: "/rotterdam-cruise-port-guide/",
  cruiseSchedule: "/rotterdam-cruise-schedule/",
  cruisePort: "/rotterdam-cruise-port/",
  kinderdijk: "/kinderdijk-from-rotterdam-cruise-port/",
  independent: "/can-you-walk-from-rotterdam-cruise-port/",
  oneDay: "/one-day-in-rotterdam-from-a-cruise/",
  bestExcursions: "/best-rotterdam-shore-excursions/",
  harbourGuide: "/rotterdam-harbour-cruise-guide/",
  foodGuide: "/rotterdam-food-tour-guide/",
  embarkation: "/rotterdam-embarkation-guide/",
  gettingAround: "/getting-around-rotterdam-from-the-cruise-port/",
  walkFromPort: "/can-you-walk-from-rotterdam-cruise-port/",
  nearTerminal: "/things-to-do-near-rotterdam-cruise-terminal/",
  portToCentre: "/rotterdam-cruise-port-to-city-centre/",
  cruiseTerminal: "/rotterdam-cruise-terminal/",
  delft: "/delft-from-rotterdam-cruise-port/",
  theHague: "/the-hague-from-rotterdam-cruise-port/",
  gouda: "/gouda-from-rotterdam-cruise-port/",
  privateExcursions: "/private-rotterdam-shore-excursions/",
  compare: "/compare/",
  compareRotterdamOrKinderdijk: "/compare/rotterdam-or-kinderdijk/",
  compareKinderdijkOrDelft: "/compare/kinderdijk-or-delft-from-rotterdam/",
  compareAmsterdam: "/compare/should-you-visit-amsterdam-from-rotterdam-cruise-port/",
  comparePrivateOrGroup: "/compare/private-or-group-rotterdam-shore-excursions/",
  /** Flat SEO aliases that also have GuidePage entries */
  rotterdamOrKinderdijk: "/rotterdam-or-kinderdijk/",
  kinderdijkOrDelft: "/kinderdijk-or-delft-from-rotterdam/",
  amsterdamGuidance: "/should-you-visit-amsterdam-from-rotterdam-cruise-port/",
  faq: "/faq/",
  cruisePlanner: "/cruise-planner/",
  guides: "/guides/",
  wowCollection: "/wow-collection/",
  signatureExperience: "/rotterdam-signature-experience/",
  shipSchedules: "/ship-schedules/",
  shipSchedulesRotterdam: "/ship-schedules/rotterdam/",
} as const;

export type SiteRouteKey = keyof typeof routes;

export function hasShipSchedule(slug: string): boolean {
  return schedulePorts.some((p) => p.slug === slug);
}

export function hasVerifiedScheduleData(slug: string): boolean {
  return hasShipSchedule(slug) && getScheduleEntries(slug).length > 0;
}

/** Primary schedule port for this destination site. */
export const PRIMARY_SCHEDULE_PORT_SLUG = "rotterdam";

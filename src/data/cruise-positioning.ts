/**
 * Central cruise-positioning copy for homepage A/B readiness.
 * Swap `message` (or toggle flags) here — do not scatter strings across components.
 *
 * Future Variant B (inactive): "Everything here is built around your time in port."
 */
export const cruisePositioning = {
  enabled: true,
  eyebrow: "Designed for Cruise Passengers",
  message:
    "Cruise-focused planning · Independent excursions · Secure booking · Local destination guidance",
  /** Reserved for a future split test — do not activate. */
  variantBMessage: "Everything here is built around your time in port.",
  activeVariant: "A" as "A" | "B",
  showDayAshoreSection: true,
} as const;

/** Cruise Passenger Snapshot — labels match the World 2.0 Gold brief. */
export const cruisePassengerSnapshot = [
  { label: "Terminal", value: "Wilhelminakade, Rotterdam" },
  { label: "Best known for", value: "Modern architecture and maritime identity" },
  {
    label: "Best for",
    value: "City exploration, harbour experiences and wider Dutch day trips",
  },
  {
    label: "Independent option",
    value: "Wilhelminapier, Erasmus Bridge and central Rotterdam",
  },
  { label: "Flagship regional trip", value: "Kinderdijk windmills" },
  {
    label: "Popular wider destinations",
    value: "Delft, The Hague and Gouda",
  },
  {
    label: "Planning priority",
    value: "Match longer private tours to the time available in port",
  },
  { label: "Currency", value: "Euro" },
] as const;

export function getCruiseTrustMessage(): string {
  if (cruisePositioning.activeVariant === "B") {
    return cruisePositioning.variantBMessage;
  }
  return cruisePositioning.message;
}

export interface DayAshoreItem {
  id: string;
  title: string;
  body: string;
  icon: "clock" | "route" | "walk" | "sunrise" | "viewpoint" | "food";
}

export const dayAshoreIntro =
  "The essential things cruise passengers should know before exploring Rotterdam.";

export const dayAshoreItems: DayAshoreItem[] = [
  {
    id: "time-in-port",
    title: "Typical time in port",
    body: "Most cruise calls allow several usable hours ashore, although passengers should always check their own ship schedule and confirm all-aboard time.",
    icon: "clock",
  },
  {
    id: "excursion-length",
    title: "Ideal excursion length",
    body: "A harbour cruise or city food walk can fit a shorter window. Kinderdijk and multi-town private days usually need a comfortable half-day or more including transfers.",
    icon: "route",
  },
  {
    id: "walking-level",
    title: "Walking level",
    body: "Central Rotterdam is largely flat and walkable from Wilhelminapier. Regional days add coach, tram or private-vehicle time rather than a long hike from the pier.",
    icon: "walk",
  },
  {
    id: "best-early-stop",
    title: "Best early stop",
    body: "Start with Erasmus Bridge views or a harbour orientation early, then decide whether the afternoon belongs to architecture, food or a Kinderdijk departure.",
    icon: "sunrise",
  },
  {
    id: "do-not-miss",
    title: "Do not miss",
    body: "The modern skyline from the water or Erasmus Bridge, and — on a long enough call — the Kinderdijk windmills as the classic Dutch counterpoint to the city.",
    icon: "viewpoint",
  },
  {
    id: "local-flavour",
    title: "Local flavour",
    body: "Make time for Markthal, a food walk or a café stop in the rebuilt centre before returning to the ship — Rotterdam rewards tasting as much as sightseeing.",
    icon: "food",
  },
];

export interface TravellerRecommendation {
  id: string;
  travellerType: string;
  recommendation: string;
  href: string;
  reason: string;
}

/**
 * Traveller type → recommended experience mapping for homepage and cruise planner.
 * Keep aligned with `experiencePaths` in `experiences.ts` and guide slugs in `guides.ts`.
 */
export const travellerRecommendations: TravellerRecommendation[] = [
  {
    id: "first-time",
    travellerType: "First time in Rotterdam",
    recommendation: "City highlights, then Kinderdijk if hours allow",
    reason:
      "See modern Rotterdam first; add Kinderdijk only when your call comfortably supports the road time.",
    href: "/one-day-in-rotterdam-from-a-cruise/",
  },
  {
    id: "architecture",
    travellerType: "Architecture and city focus",
    recommendation: "Modern Rotterdam on foot or private city touring",
    reason:
      "Erasmus Bridge, Markthal, Cube Houses and harbour viewpoints sit within a realistic independent or private circuit.",
    href: "/can-you-walk-from-rotterdam-cruise-port/",
  },
  {
    id: "short-call",
    travellerType: "Short call or late arrival",
    recommendation: "Harbour cruise or compact city loop",
    reason:
      "Stay close to Wilhelminapier — avoid committing half the day to Kinderdijk or multi-town transfers.",
    href: "/rotterdam-harbour-cruise-guide/",
  },
  {
    id: "classic-holland",
    travellerType: "Classic Dutch icons",
    recommendation: "Kinderdijk, Delft, The Hague or Gouda",
    reason:
      "These destinations need organised or private transport and enough usable hours ashore.",
    href: "/kinderdijk-from-rotterdam-cruise-port/",
  },
  {
    id: "food-culture",
    travellerType: "Food and culture lover",
    recommendation: "Food walk, brewery hop or private bites-and-sights",
    reason:
      "Rotterdam’s food scene sits close to the pier area and pairs well with a shorter sightseeing loop.",
    href: "/rotterdam-food-tour-guide/",
  },
  {
    id: "independent",
    travellerType: "Prefers independent exploring",
    recommendation: "Walk Wilhelminapier and central Rotterdam",
    reason:
      "The city is independently explorative; book tours for Kinderdijk and regional day trips.",
    href: "/can-you-walk-from-rotterdam-cruise-port/",
  },
  {
    id: "planner",
    travellerType: "Wants help deciding",
    recommendation: "Use the cruise planner",
    reason: "Tell us your port hours, party and interests for a tailored Rotterdam plan.",
    href: "/cruise-planner/",
  },
];

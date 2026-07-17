import { SIGNATURE_EXPERIENCE_PATH, rotterdamSignatureExperience } from "./signature-experience";

export interface PlannerInput {
  arrivalTime?: string;
  departureTime?: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  travelStyle: "diy" | "guided";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  transfers: PlannerLink[];
  stay: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

export const PLANNER_VISITOR_TYPES = [
  {
    id: "independent",
    label: "Independent city explorer",
    description: "A low-risk day using Wilhelminapier proximity, transit and your own return buffer.",
  },
  {
    id: "kinderdijk",
    label: "First-time Kinderdijk visitor",
    description: "A half-day road excursion for passengers with enough port time to enjoy the mills without rushing.",
  },
  {
    id: "harbour",
    label: "Harbour and skyline traveller",
    description: "A relaxed harbour cruise or pier-area loop rather than a full regional itinerary.",
  },
  {
    id: "culture",
    label: "Food, culture and private touring",
    description: "A tailored day built around food walks, Delft or private pacing rather than a fixed coach schedule.",
  },
] as const;

export const INTEREST_OPTIONS = [
  { id: "city", label: "Rotterdam city & architecture" },
  { id: "kinderdijk", label: "Kinderdijk windmills" },
  { id: "harbour", label: "Harbour & water" },
  { id: "delft", label: "Delft / The Hague / Gouda" },
  { id: "food", label: "Food & markets" },
  { id: "photography", label: "Photography & scenery" },
  { id: "family", label: "Family-friendly" },
  { id: "independent", label: "Independent travel" },
  { id: "private", label: "Private touring" },
];

type PlanKey = "independent" | "kinderdijk" | "harbour" | "culture";

export const ROTTERDAM_DAY_PLANS: Record<
  PlanKey,
  { headline: string; summary: string; minimumHours: number; links: PlannerLink[]; dayPlan: PlannerResult["dayPlan"] }
> = {
  independent: {
    headline: "Independent Rotterdam City Day",
    summary:
      "The most flexible choice: walk and transit from Wilhelminapier to architecture, Markthal and riverfront views with a conservative return buffer.",
    minimumHours: 3,
    links: [
      {
        label: "Independent Rotterdam",
        href: "/can-you-walk-from-rotterdam-cruise-port/",
        why: "DIY walking and timing advice from Wilhelminapier.",
      },
      {
        label: "Getting around from the port",
        href: "/getting-around-rotterdam-from-the-cruise-port/",
        why: "Walking, transit, taxis and water-taxi caveats.",
      },
      {
        label: "Rotterdam Bites and Sights",
        href: "/shore-excursions/rotterdam-bites-and-sights-foodie-walk/",
        why: "Optional guided food walk if you want structure.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Orient on Wilhelminapier and note your return route to the terminal." },
      { time: "Morning", text: "Architecture and river views; transit toward Markthal if hours allow." },
      { time: "Lunch", text: "Markthal snack or a short café stop." },
      { time: "Afternoon", text: "One more neighbourhood highlight, then return with a 60–90 minute buffer." },
    ],
  },
  kinderdijk: {
    headline: "Kinderdijk Windmills Half-Day",
    summary:
      "The classic Dutch landscape day — organised or private transport to the mills with enough usable hours for the transfer and site time.",
    minimumHours: 6,
    links: [
      {
        label: "Kinderdijk from Rotterdam",
        href: "/kinderdijk-from-rotterdam-cruise-port/",
        why: "Transfer reality, weather and pacing.",
      },
      {
        label: "Private Rotterdam & Kinderdijk",
        href: "/shore-excursions/private-rotterdam-kinderdijk-at-your-pace/",
        why: "Flexible private option for the mills.",
      },
      {
        label: "Rotterdam or Kinderdijk?",
        href: "/rotterdam-or-kinderdijk/",
        why: "Confirm the city-vs-mills trade-off.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Meet transfer and travel to Kinderdijk; allow roughly 30–45 minutes each way." },
      { time: "Midday", text: "Walk among the mills; protect time for photos and visitor facilities." },
      { time: "Afternoon", text: "Return drive to Wilhelminakade with a conservative buffer before all-aboard." },
    ],
  },
  harbour: {
    headline: "Harbour & Skyline Half-Day",
    summary:
      "A lower-walking harbour cruise or pier loop for guests who want Rotterdam's port identity without a regional coach day.",
    minimumHours: 3,
    links: [
      {
        label: "Harbour cruise guide",
        href: "/rotterdam-harbour-cruise-guide/",
        why: "What to expect and meeting-point notes.",
      },
      {
        label: "Rotterdam Harbour Sightseeing Cruise",
        href: "/shore-excursions/rotterdam-harbour-sightseeing-cruise/",
        why: "Compact water-based orientation.",
      },
      {
        label: "Getting around from the port",
        href: "/getting-around-rotterdam-from-the-cruise-port/",
        why: "Water taxi, tram and taxi options.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Confirm harbour-cruise or water-taxi meeting instructions from your e-ticket." },
      { time: "Morning or afternoon", text: "Harbour cruise and skyline views." },
      { time: "Afterward", text: "Optional short pier walk, then return to the terminal with time in hand." },
    ],
  },
  culture: {
    headline: "Food, Delft & Private Touring",
    summary:
      "A tailored day built around food walks, Delft or private routing when coach itineraries do not fit your party.",
    minimumHours: 5,
    links: [
      {
        label: "Rotterdam food tour guide",
        href: "/rotterdam-food-tour-guide/",
        why: "Markets, walks and tasting pacing.",
      },
      {
        label: "Delft from the cruise port",
        href: "/delft-from-rotterdam-cruise-port/",
        why: "Canal-town alternative to the mills.",
      },
      {
        label: "Private Rotterdam shore excursions",
        href: "/private-rotterdam-shore-excursions/",
        why: "Flexible private routing overview.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Food walk or depart for Delft / private regional routing." },
      { time: "Midday", text: "Main tasting or town highlight without overstuffing stops." },
      { time: "Afternoon", text: "Return to Wilhelminakade with a generous buffer." },
    ],
  },
};

function hoursAshore(arrival?: string, departure?: string): number {
  if (!arrival || !departure) return 8;
  const [ah, am] = arrival.split(":").map(Number);
  const [dh, dm] = departure.split(":").map(Number);
  return Math.max(0, (dh * 60 + dm - (ah * 60 + am)) / 60);
}

function pickPlanKey(input: PlannerInput, hours: number): PlanKey {
  const { interests, travelStyle, mobility } = input;
  if (interests.includes("kinderdijk") || interests.includes("photography")) {
    return hours >= 6 ? "kinderdijk" : "harbour";
  }
  if (interests.includes("harbour") && !interests.includes("city")) return "harbour";
  if (interests.includes("food") || interests.includes("delft") || interests.includes("private")) return "culture";
  if (travelStyle === "diy" || interests.includes("independent") || mobility === "limited") return "independent";
  return hours >= 6 ? "kinderdijk" : "independent";
}

export function generateRotterdamPlan(input: PlannerInput): PlannerResult {
  const hours = hoursAshore(input.arrivalTime, input.departureTime);
  const key = pickPlanKey(input, hours);
  const plan = ROTTERDAM_DAY_PLANS[key];

  const excursions = [...plan.links];
  if (input.budget === "premium" || input.interests.includes("private")) {
    excursions.unshift({
      label: rotterdamSignatureExperience.title,
      href: SIGNATURE_EXPERIENCE_PATH,
      why: "Future small-group harbour-city and Dutch-icons concept — in preparation and not bookable.",
    });
  }

  return {
    headline: plan.headline,
    summary:
      hours < plan.minimumHours
        ? `${plan.summary} Your published window looks shorter than ideal for this plan — consider a tighter harbour or city focus.`
        : plan.summary,
    excursions,
    transfers: [],
    stay: [],
    logistics: [
      {
        label: "Rotterdam Cruise Port Guide",
        href: "/rotterdam-cruise-port-guide/",
        why: "Terminal, city access and return planning.",
      },
      {
        label: "Rotterdam cruise schedule",
        href: "/rotterdam-cruise-schedule/",
        why: "Check published call windows before you commit.",
      },
      {
        label: "Compare your options",
        href: "/compare/",
        why: "Side-by-side Rotterdam, Kinderdijk and Delft choices.",
      },
    ],
    dayPlan: plan.dayPlan,
  };
}


/** @deprecated Prefer ROTTERDAM_DAY_PLANS */
export const RHODES_DAY_PLANS = ROTTERDAM_DAY_PLANS;

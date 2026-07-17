import type { EditorialCategory } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";

export interface EditorialCategoryDef {
  id: EditorialCategory;
  label: string;
  shortLabel: string;
  description: string;
}

export const EDITORIAL_CATEGORIES: EditorialCategoryDef[] = [
  {
    id: "editors-choice",
    label: "Editor's Choice",
    shortLabel: "Editor's Choice",
    description: "Our strongest overall choice for a well-timed Rotterdam cruise day.",
  },
  {
    id: "best-historic",
    label: "Best Classic Holland",
    shortLabel: "Classic Holland",
    description: "Kinderdijk windmills, Delft, The Hague and Gouda day trips.",
  },
  {
    id: "best-independent",
    label: "Best Independent Experience",
    shortLabel: "Independent",
    description: "A realistic self-guided Rotterdam day from Wilhelminapier into the city.",
  },
  {
    id: "best-coastal",
    label: "Best Harbour Experience",
    shortLabel: "Harbour",
    description: "Harbour cruises, water taxis and waterfront viewpoints on the Maas.",
  },
  {
    id: "best-view",
    label: "Best Views",
    shortLabel: "Views",
    description: "Erasmus Bridge skyline and harbour perspectives from land or water.",
  },
  {
    id: "best-got",
    label: "Signature Experience",
    shortLabel: "Signature",
    description:
      "Our future Architecture, Harbour and Kinderdijk small-group flagship, currently in preparation.",
  },
  {
    id: "best-families",
    label: "Best for Families",
    shortLabel: "Families",
    description: "Flexible city and private options with manageable transfers and walking.",
  },
  {
    id: "best-photography",
    label: "Best Photography",
    shortLabel: "Photography",
    description: "Modern architecture, harbour light and Kinderdijk windmills.",
  },
  {
    id: "best-food",
    label: "Best Food & Culture",
    shortLabel: "Food & Culture",
    description: "Markthal, food walks, breweries and Rotterdam’s contemporary food scene.",
  },
  {
    id: "best-luxury",
    label: "Best Private Tour",
    shortLabel: "Private",
    description: "Dedicated transport and flexible pacing for your own party.",
  },
  {
    id: "hidden-gem",
    label: "Hidden Gem",
    shortLabel: "Hidden Gem",
    description: "Quieter waterfront corners and neighbourhood stops beyond the first photo loop.",
  },
  {
    id: "best-value",
    label: "Best Value",
    shortLabel: "Best Value",
    description: "A rewarding port day without unnecessary long transfers.",
  },
  {
    id: "best-short-port",
    label: "Best Short Port Call",
    shortLabel: "Short Port",
    description: "Harbour and city highlights when there is not enough time for Kinderdijk.",
  },
];

export interface EditorsCollectionItem {
  id: string;
  emoji: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  signature?: boolean;
  comingSoon?: boolean;
}

export const editorsCollectionItems: EditorsCollectionItem[] = [
  {
    id: "editors-choice",
    emoji: "⭐",
    label: "Editor's Choice",
    description:
      "Rotterdam Harbour Sightseeing Cruise — an easy, scenic orientation that fits short calls or a morning slot.",
    href: "/shore-excursions/rotterdam-harbour-sightseeing-cruise/",
    cta: "View our top pick",
  },
  {
    id: "first-time",
    emoji: "🌬️",
    label: "Best First-Time Regional Trip",
    description:
      "Private Rotterdam & Kinderdijk — the flagship windmill day when your call has enough usable hours.",
    href: "/shore-excursions/private-rotterdam-kinderdijk-at-your-pace/",
    cta: "Discover Kinderdijk",
  },
  {
    id: "harbour",
    emoji: "⚓",
    label: "Best Harbour Half-Day",
    description:
      "Harbour sightseeing or breweries with water taxi — Rotterdam’s maritime identity without a long coach day.",
    href: "/rotterdam-harbour-cruise-guide/",
    cta: "See the harbour",
  },
  {
    id: "food-culture",
    emoji: "🍽️",
    label: "Best Food & Culture",
    description:
      "Rotterdam Bites & Sights — a foodie walk that pairs tasting stops with modern-city context.",
    href: "/shore-excursions/rotterdam-bites-and-sights-foodie-walk/",
    cta: "Taste Rotterdam",
  },
  {
    id: "private",
    emoji: "🚗",
    label: "Best Private Tour",
    description:
      "Private Rotterdam at Your Pace — a route built around your party’s pace, mobility and priorities.",
    href: "/shore-excursions/private-rotterdam-at-your-pace/",
    cta: "View private tour",
  },
  {
    id: "photography",
    emoji: "📸",
    label: "Best Photography",
    description:
      "Erasmus Bridge, Markthal and Kinderdijk — three of the strongest visual chapters from the port.",
    href: "/kinderdijk-from-rotterdam-cruise-port/",
    cta: "Photograph the day",
  },
  {
    id: "families",
    emoji: "👨‍👩‍👧",
    label: "Best for Families",
    description:
      "City highlights or a private Kinderdijk day keep pacing flexible for mixed ages and energy levels.",
    href: "/compare/rotterdam-or-kinderdijk/",
    cta: "Compare family days",
  },
  {
    id: "independent",
    emoji: "🚶",
    label: "Best Independent Day",
    description:
      "Independent Rotterdam — Wilhelminapier, Erasmus Bridge and central landmarks with a generous ship buffer.",
    href: "/can-you-walk-from-rotterdam-cruise-port/",
    cta: "Use the DIY guide",
  },
  {
    id: "signature-experience",
    emoji: "✨",
    label: "Rotterdam Signature Experience",
    description:
      "Architecture, Harbour and Kinderdijk — a future small-group day, currently in preparation and not bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "Preview the concept",
    signature: true,
    comingSoon: true,
  },
];

/** Spirit-of-destination copy for homepage / editorial surfaces. */
export const spiritOfRotterdam = {
  eyebrow: "The city revealed",
  title: "Spirit of Rotterdam",
  paragraphs: [
    "Rotterdam is a rebuilt harbour metropolis: modern architecture, working waterways and a food culture shaped by a global port — not a postcard canal town pretending otherwise.",
    "A cruise day could mean walking Wilhelminapier to Erasmus Bridge, tasting Markthal, boarding a harbour cruise, cycling the countryside or standing among Kinderdijk’s windmills.",
    "Every route reveals another side of the Netherlands — contemporary, maritime or classic Dutch — and the best version of your day depends on honest timing, not a longer checklist.",
  ],
  pillars: [
    { emoji: "🏙️", label: "Modern architecture" },
    { emoji: "⚓", label: "Harbour & waterways" },
    { emoji: "🌬️", label: "Kinderdijk & Dutch icons" },
  ],
} as const;

/**
 * Honest advice framework — Rotterdam IS walkable/independently explorative;
 * book tours for Kinderdijk, regional destinations and full-day combos.
 */
export const honestAdvice = {
  title: "Do You Need a Shore Excursion in Rotterdam?",
  subtitle:
    "The honest answer: you can enjoy much of the city independently. An excursion becomes worthwhile when you want Kinderdijk, classic Dutch towns or a tightly timed full-day combo.",
  independentTitle: "You can explore Rotterdam independently — and many passengers do",
  independentIntro:
    "From Wilhelminakade on Wilhelminapier, a well-paced independent day is realistic for most passengers:",
  independentPoints: [
    "Wilhelminapier towers and waterfront paths",
    "Erasmus Bridge views across the Maas",
    "Markthal and Cube Houses with enough hours",
    "Harbour viewpoints and café stops in the rebuilt centre",
  ],
  independentNote:
    "Set a 60–90 minute return buffer and confirm your all-aboard time. The ship will not wait.",
  tourTitle: "Kinderdijk and classic Dutch day trips need more planning",
  tourIntro:
    "Rotterdam’s wider highlights sit beyond casual walking distance from the terminal. Organised or private transport and disciplined timing matter for:",
  tourPoints: [
    {
      label: "Kinderdijk windmills",
      detail: "Roughly 30–45 minutes each way by road — a dedicated half-day",
    },
    {
      label: "Delft, The Hague and Gouda",
      detail: "Train, coach or private vehicle plus pier transfer time",
    },
    {
      label: "Full-day Dutch icon combos",
      detail: "Only with a long call and realistic sequencing",
    },
    {
      label: "Amsterdam",
      detail: "Possible but not automatic — often 1–1.5 hours each way by train before pier transfers",
    },
  ],
} as const;

export function getEditorialLabel(id: EditorialCategory): string {
  return EDITORIAL_CATEGORIES.find((category) => category.id === id)?.label ?? id;
}

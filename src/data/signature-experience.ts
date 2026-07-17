import type { FAQ } from "./types";

export const SIGNATURE_EXPERIENCE_PATH = "/rotterdam-signature-experience/";

export interface SignatureBenefit {
  emoji: string;
  title: string;
  description: string;
}

/**
 * Future flagship concept only. Architecture lives here so the product can go live later
 * without a data-model change. Do not present this as a bookable product anywhere in the UI
 * while comingSoon is true.
 */
export const rotterdamSignatureExperience = {
  slug: "rotterdam-signature-experience",
  title: "Rotterdam Signature: Architecture, Harbour and Kinderdijk",
  seoTitle: "Rotterdam Signature Experience — Future Architecture, Harbour & Kinderdijk Day",
  metaDescription:
    "Preview a future small-group Rotterdam signature day combining modern architecture, harbour views and Kinderdijk — designed around cruise timings. Not currently bookable.",
  tagline:
    "A future small-group day linking modern Rotterdam, the harbour and Kinderdijk windmills — built around your ship, not a generic coach circuit.",
  overview:
    "Rotterdam Signature is a product concept in preparation. The proposed experience would take a small number of guests through landmark architecture and harbour context in the city, then out to Kinderdijk for the windmills that define classic Holland for many first-time visitors. It does not currently exist as a bookable excursion, and no dates, guest limits or prices are final.",
  comingSoon: true,
  benefits: [
    {
      emoji: "👥",
      title: "Small-group by design",
      description:
        "A proposed intimate group size intended to keep architecture stops and Kinderdijk pacing personal rather than coach-tour rushed.",
    },
    {
      emoji: "🏛️",
      title: "Modern architecture focus",
      description:
        "Wilhelminapier context, Erasmus Bridge views and signature city landmarks woven into a coherent opening chapter.",
    },
    {
      emoji: "⚓",
      title: "Harbour identity",
      description:
        "Rotterdam’s maritime story told from the waterfront and skyline — the working port as character, not backdrop.",
    },
    {
      emoji: "🌬️",
      title: "Kinderdijk included",
      description:
        "UNESCO windmills as the classic Dutch counterpoint to the rebuilt city — subject to final partner and timing design.",
    },
    {
      emoji: "🍽️",
      title: "Local pause",
      description:
        "A thoughtful food or café stop proposed as part of the day, subject to final partner arrangements.",
    },
    {
      emoji: "🧭",
      title: "Flexible routing",
      description:
        "Sequencing designed to adapt to ship time, weather, crowding at Kinderdijk and the interests of each small group.",
    },
    {
      emoji: "🚢",
      title: "Cruise-first timing",
      description:
        "The future operating plan will be built backwards from all-aboard with a conservative return margin for the Kinderdijk road.",
    },
    {
      emoji: "📸",
      title: "Two landscapes, one day",
      description:
        "Contemporary skyline and historic windmills in a single itinerary, rather than choosing one and skipping the other.",
    },
  ] satisfies SignatureBenefit[],
  faqs: [
    {
      question: "Can I book Rotterdam Signature now?",
      answer:
        "No. The experience is in preparation and is not currently available to book. This page describes the intended concept only.",
    },
    {
      question: "What would the future experience include?",
      answer:
        "The current concept includes a small group size, modern Rotterdam architecture, harbour context, Kinderdijk windmills and cruise-timed routing. Details may change before launch.",
    },
    {
      question: "Why combine the city with Kinderdijk in one day?",
      answer:
        "They are Rotterdam’s two defining day-ashore stories — a rebuilt harbour metropolis and classic Dutch windmills nearby — and pairing them thoughtfully would let a long call cover both without treating either as an afterthought.",
    },
    {
      question: "What should I book in the meantime?",
      answer:
        "Use our current shore-excursion guides and editorial picks to compare bookable harbour, city, Kinderdijk, Delft, Gouda and private-touring options for your call.",
    },
  ] satisfies FAQ[],
};

/** @deprecated Prefer rotterdamSignatureExperience — kept for transitional imports. */
export const rotterdamSignatureAlias = rotterdamSignatureExperience;

export function getSignatureEditorialRecommendation() {
  return {
    category: "best-got" as const,
    title: rotterdamSignatureExperience.title,
    description:
      "A future small-group Architecture, Harbour and Kinderdijk day. In preparation and not currently bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    signature: true,
    comingSoon: true,
  };
}

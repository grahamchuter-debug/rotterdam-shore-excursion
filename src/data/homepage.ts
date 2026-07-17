import type { ExperienceCard, FAQ, VisitorType } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";
import { experiencePaths } from "./experiences";

export const homepageTagline = "Find the best version of your day in Rotterdam";

export const visitorTypes: VisitorType[] = [
  {
    id: "port-day",
    label: "I'm visiting Rotterdam for the day on a cruise",
    shortLabel: "Port day",
    description:
      "Match your hours ashore to a realistic city, harbour or Kinderdijk day with a proper return buffer.",
    href: "/shore-excursions/",
    cta: "Plan my port day",
  },
  {
    id: "first-time",
    label: "It's my first time in Rotterdam",
    shortLabel: "First visit",
    description:
      "Compare modern Rotterdam with Kinderdijk and classic Dutch day trips before you choose.",
    href: "/compare/rotterdam-or-kinderdijk/",
    cta: "See first-time picks",
  },
  {
    id: "independent",
    label: "I prefer to explore independently",
    shortLabel: "Independent",
    description:
      "Wilhelminapier, Erasmus Bridge and central Rotterdam are genuinely walkable — book tours for Kinderdijk and regional days.",
    href: "/can-you-walk-from-rotterdam-cruise-port/",
    cta: "Explore independently",
  },
  {
    id: "planner",
    label: "I want help choosing my day",
    shortLabel: "Cruise planner",
    description:
      "Tell us your port times, interests, mobility and budget for a tailored Rotterdam plan.",
    href: "/cruise-planner/",
    cta: "Use the planner",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

/**
 * Homepage experience cards — mirrors the four core experience pillars in
 * `experiences.ts` so the two stay in sync without duplicating copy.
 */
export const experienceCards: ExperienceCard[] = experiencePaths;

export const coreSections: HomeSection[] = [
  {
    slug: "shore-excursions",
    number: "01",
    title: "Shore Excursions",
    description:
      "Harbour cruises, food walks, Kinderdijk, Delft, Gouda and private touring — matched to cruise-port timings.",
    href: "/shore-excursions/",
    cta: "Browse excursions",
  },
  {
    slug: "cruise-port-guide",
    number: "02",
    title: "Rotterdam Cruise Port Guide",
    description:
      "Wilhelminakade terminal, Wilhelminapier walking routes, water taxis, trams and return-to-ship planning.",
    href: "/rotterdam-cruise-port-guide/",
    cta: "Read the port guide",
  },
  {
    slug: "kinderdijk",
    number: "03",
    title: "Kinderdijk from the Port",
    description:
      "The flagship regional trip — UNESCO windmills that need organised transport, not a casual walk from the pier.",
    href: "/kinderdijk-from-rotterdam-cruise-port/",
    cta: "Plan Kinderdijk",
  },
  {
    slug: "compare",
    number: "04",
    title: "Compare Your Options",
    description:
      "Rotterdam or Kinderdijk? Kinderdijk or Delft? Amsterdam from the port? Clear comparisons without overselling.",
    href: "/compare/",
    cta: "Compare day trips",
  },
  {
    slug: "independent",
    number: "05",
    title: "Explore Independently",
    description:
      "Honest guidance for a DIY Rotterdam day — and when a tour still makes more sense.",
    href: "/can-you-walk-from-rotterdam-cruise-port/",
    cta: "Plan a DIY day",
  },
  {
    slug: "ship-schedules",
    number: "06",
    title: "Ship Schedules",
    description:
      "Check published Rotterdam arrivals and departures before committing to a full-day regional tour.",
    href: "/rotterdam-cruise-schedule/",
    cta: "View schedules",
  },
  {
    slug: "faq",
    number: "07",
    title: "Rotterdam FAQs",
    description:
      "Honest answers on port access, Kinderdijk logistics, walking distances and timing.",
    href: "/faq/",
    cta: "Read the FAQs",
  },
  {
    slug: "signature",
    number: "08",
    title: "Rotterdam Signature Experience",
    description:
      "A future Architecture, Harbour and Kinderdijk small-group flagship — currently in preparation.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "Preview the concept",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "Can I explore Rotterdam independently from the cruise terminal?",
      answer:
        "Yes for much of the city. From Wilhelminakade on Wilhelminapier you can walk to Erasmus Bridge, the Kop van Zuid waterfront and onward into central Rotterdam. Markthal, Cube Houses and harbour viewpoints are realistic without a tour if you manage time carefully. Book organised transport for Kinderdijk, Delft, The Hague, Gouda or any full-day regional combo.",
    },
    {
      question: "How far is Kinderdijk from Rotterdam cruise port?",
      answer:
        "Kinderdijk sits southeast of the city and typically needs roughly 30–45 minutes each way by road, depending on traffic and exact pickup. It is not walkable from the terminal and is best treated as a dedicated half-day with organised or private transport.",
    },
    {
      question: "Is Rotterdam walkable on a short cruise call?",
      answer:
        "Often yes. A harbour stroll, Erasmus Bridge views and a focused architecture or Markthal loop can fill a satisfying two-to-four-hour visit without leaving the city. Save Kinderdijk and multi-town days for longer calls.",
    },
    {
      question: "Should I visit Amsterdam from a Rotterdam cruise call?",
      answer:
        "Usually only with a long call and a clear reason. Amsterdam is typically around 1–1.5 hours each way by train from Rotterdam Centraal, plus transfer time from the pier. Many passengers enjoy Rotterdam itself, Kinderdijk or Delft more realistically within a standard port day. See our Amsterdam comparison for the honest trade-offs.",
    },
    {
      question: "How early should I return to the ship in Rotterdam?",
      answer:
        "Aim to reach the terminal 60–90 minutes before all-aboard for a city day. Allow more margin after Kinderdijk or any regional tour — build contingency for traffic, water-taxi queues and tram connections rather than relying on a best-case map estimate.",
    },
  ];
}

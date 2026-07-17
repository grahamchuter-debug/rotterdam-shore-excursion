import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideContent = {
  title: "Rotterdam Cruise Port Guide",
  subtitle:
    "Wilhelminakade terminal, Wilhelminapier walking routes, harbour access, regional day trips and sensible return-to-ship planning.",
  terminals: [
    {
      name: "Cruise Terminal Rotterdam (Wilhelminakade)",
      quay: "Wilhelminakade 699, Wilhelminapier — south bank of the Nieuwe Maas",
      usedBy: "Most cruise ships calling at Rotterdam",
      cityAccess:
        "Wilhelminapier and Erasmus Bridge are typically walkable; metro, tram and water-taxi options connect onward into the city and harbour. Exact meeting points for tours are set per booking and may not be directly beside the ship.",
    },
  ] as Terminal[],
  sections: [
    {
      heading: "Where cruise ships dock in Rotterdam",
      paragraphs: [
        "Cruise ships calling at Rotterdam typically berth at Cruise Terminal Rotterdam on Wilhelminakade (Wilhelminakade 699) on Wilhelminapier. The pier sits in the modern Kop van Zuid / Wilhelminapier district, with striking contemporary architecture and direct visual links across the Maas via Erasmus Bridge.",
        "Treat berth assignments, gangway arrangements and any shuttle as subject to change by call. Your ship’s daily programme is the authoritative source for the specific date you are ashore.",
        "Rotterdam’s cruise operations serve a working harbour city rather than a compact historic harbour-only stop. That is an advantage for atmosphere and skyline views, but it also means tour meeting points, water-taxi hops and tram connections deserve a quick check before you leave the terminal area.",
      ],
    },
    {
      heading: "Walking from Wilhelminapier into the city",
      paragraphs: [
        "From the terminal area you can walk along Wilhelminapier toward Erasmus Bridge and the Kop van Zuid waterfront. Many passengers treat this as their first orientation loop: bridges, high-rises and harbour working views without committing to a coach.",
        "Central Rotterdam destinations such as Markthal and the Cube Houses are farther than the pier alone — still realistic for independent visitors who are comfortable walking or combining a short metro/tram hop with walking. Allow more time than a map’s best-case estimate, especially if you stop for photos and coffee.",
        "Footwear matters less than in medieval cobbled towns, but harbour wind and changeable North Sea weather still reward a light layer and a plan for rain.",
      ],
    },
    {
      heading: "Modern Rotterdam highlights near the port",
      paragraphs: [
        "Erasmus Bridge is the natural landmark for first photographs and orientation. Wilhelminapier’s towers and waterfront paths give an immediate sense of Rotterdam’s rebuilt, forward-looking identity.",
        "Markthal and the Cube Houses sit among the city’s best-known architecture stops and pair well with a food-focused pause. They are independent-friendly when your call is long enough for a loop back to the pier with buffer.",
        "A short harbour sightseeing cruise is the easiest way to understand Rotterdam’s maritime scale if you prefer sitting and watching to covering ground on foot.",
      ],
    },
    {
      heading: "Planning Kinderdijk and classic Dutch day trips",
      paragraphs: [
        "Kinderdijk’s UNESCO windmills are the flagship regional trip from Rotterdam. Expect roughly 30–45 minutes each way by road in typical conditions — longer in traffic — and treat the visit as a dedicated half-day rather than a quick add-on.",
        "Delft, The Hague and Gouda are popular wider destinations. Each needs coach, train, taxi or private transport plus transfer time from the pier. Delft is often the closest classic-town option; The Hague and Gouda need a clearer time budget.",
        "Amsterdam is not an automatic recommendation from a Rotterdam cruise call. Train time from Rotterdam Centraal is commonly around 1–1.5 hours each way before pier transfers and city exploration. Choose it only with a long call and a specific reason.",
      ],
    },
    {
      heading: "Taxis, metro, trams and water taxis",
      paragraphs: [
        "Taxis are usually available near the cruise area; confirm the destination and keep your ship name and terminal details for the return. Multi-ship days can increase demand.",
        "Metro and tram connections from the Wilhelminapier / Kop van Zuid area are useful for central Rotterdam once you are oriented. Public transport is not timed around cruise all-aboard — build your own buffer.",
        "Water taxis matter for some harbour experiences. They are often booked or paid separately from a cruise fare, can involve queues, and may depart from a point that is not beside your gangway. Follow e-ticket instructions exactly.",
      ],
    },
    {
      heading: "A realistic independent city day",
      paragraphs: [
        "Start with Wilhelminapier and Erasmus Bridge views, continue to one architecture or market focus (Markthal / Cube Houses is a common pairing), take a proper lunch break, then return toward the pier earlier than feels necessary.",
        "If you want a harbour cruise or food walk, treat it as the day’s anchor and keep the rest of the route short rather than stacking Kinderdijk on top.",
        "Trying to combine a full independent city loop with an independent Kinderdijk visit in the same day is rarely realistic without organised or private transport for the regional leg.",
      ],
    },
    {
      heading: "Return-to-ship planning",
      paragraphs: [
        "Confirm the ship’s all-aboard time, which is earlier than the published departure. For a city day, plan to reach the terminal 60–90 minutes before all-aboard.",
        "For Kinderdijk or any regional excursion, the operator should plan backwards from the ship with allowance for traffic and pickup logistics. A journey time shown by a map app is not an adequate return plan on a busy day.",
        "Independent travellers are responsible for reaching the ship on time. If a regional idea does not leave a conservative margin, stay in Rotterdam or choose a shorter harbour experience instead.",
      ],
    },
  ] as PortGuideSection[],
  faqs: [
    {
      question: "Can I walk into Rotterdam from the cruise terminal?",
      answer:
        "Yes for Wilhelminapier, Erasmus Bridge and a substantial city loop. Farther landmarks may need tram, metro or taxi. Kinderdijk and other regional destinations require dedicated transport.",
    },
    {
      question: "What can I see close to Rotterdam cruise port?",
      answer:
        "Wilhelminapier architecture, Erasmus Bridge views, harbour waterfront paths and — with a little more time — Markthal and Cube Houses. A short harbour cruise is another low-effort option.",
    },
    {
      question: "Do I need transport for Kinderdijk?",
      answer:
        "Yes. Kinderdijk is not walkable from Wilhelminakade. Plan a coach excursion, private tour or carefully timed independent transfer with a generous ship buffer.",
    },
    {
      question: "Is Rotterdam cruise port busy with multiple ships?",
      answer:
        "It can be, depending on the day’s published calls. Extra demand for taxis, water taxis and popular attractions is worth factoring into timing.",
    },
    {
      question: "How early should I be back at the ship?",
      answer:
        "Reach the terminal 60–90 minutes before all-aboard for a city day, with a larger contingency after Kinderdijk or any regional tour.",
    },
  ] as FAQ[],
};

export const terminals = portGuideContent.terminals;
export const portGuideSections = portGuideContent.sections;
export const portGuideFaqs = portGuideContent.faqs;

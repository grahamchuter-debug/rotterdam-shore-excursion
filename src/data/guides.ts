import type { GuidePage } from "./types";

/**
 * Substantive Rotterdam guide pages. Slugs match planned root-level routes —
 * do not rename without updating corresponding app routes.
 */
export const guidePages: GuidePage[] = [
  {
    slug: "rotterdam-cruise-port-guide",
    title: "Rotterdam Cruise Port Guide",
    seoTitle: "Rotterdam Cruise Port Guide — Wilhelminakade, Transport & City Access",
    metaDescription:
      "Complete Rotterdam cruise port guide covering Wilhelminakade terminal, Wilhelminapier walking routes, Kinderdijk logistics, transit and return-to-ship planning.",
    tagline: "Know Wilhelminapier, walk the modern waterfront, and plan Kinderdijk properly.",
    overview:
      "Rotterdam is a rewarding northern European cruise stop: modern architecture and harbour life sit close to Wilhelminakade, while Kinderdijk, Delft, The Hague and Gouda need genuine transfers. This guide covers the terminal, walking routes, transport options and a realistic return-to-ship plan — without inventing facilities or timings we cannot verify.",
    body: [
      "Cruise terminal: ships typically use Cruise Terminal Rotterdam at Wilhelminakade 699 on Wilhelminapier, on the south bank of the Nieuwe Maas. Exact gangway arrangements and meeting points can vary by call — use your ship’s daily programme as the final word.",
      "Walking from the pier: Wilhelminapier and Erasmus Bridge are the natural first loop. Central landmarks such as Markthal and the Cube Houses need more walking or a short metro/tram hop; they remain independently realistic with enough hours and a buffer.",
      "Harbour context: a short sightseeing cruise or waterfront walk explains Rotterdam’s maritime identity faster than another inland checklist. Water-taxi hops for some boat departures are often separate from tour fares.",
      "Kinderdijk: expect roughly 30–45 minutes each way by road in typical conditions. It is not walkable from the terminal and deserves a dedicated half-day plan.",
      "Classic Dutch towns: Delft is often the closest historic-town option; The Hague and Gouda need clearer time budgets. Amsterdam is optional, not automatic — commonly around 1–1.5 hours each way by train from Rotterdam Centraal before pier transfers.",
      "Transit: metro, tram and taxis serve the Kop van Zuid / Wilhelminapier area. Public transport is not timed to all-aboard; build your own margin.",
      "Accessibility: much of central Rotterdam is flatter and more modern than historic European cores, which helps many visitors. Individual attractions, boat boarding and Kinderdijk paths still need checking.",
      "Return planning: work backwards from all-aboard. Aim for 60–90 minutes at the terminal before all-aboard on a city day; allow more after regional tours.",
    ],
    highlights: [
      "Wilhelminakade 699 — Cruise Terminal Rotterdam",
      "Wilhelminapier and Erasmus Bridge within a realistic walk",
      "Kinderdijk requires roughly 30–45 minutes each way by road",
      "Delft, The Hague and Gouda need dedicated transfers",
      "Amsterdam is cautious optional guidance, not a default",
    ],
    tips: [
      "Photograph your ship and terminal exit before heading into the city",
      "Save ship name and terminal details offline for a taxi return",
      "Decide city vs Kinderdijk before you disembark, not on the quay",
      "Follow excursion meeting instructions — they may not be pier-side",
    ],
    faqs: [
      {
        question: "Can I walk into Rotterdam from the cruise terminal?",
        answer:
          "Yes for Wilhelminapier, Erasmus Bridge and a substantial city loop. Farther stops may need transit. Kinderdijk and regional towns need dedicated transport.",
      },
      {
        question: "What can I see close to Rotterdam port?",
        answer:
          "Pier architecture, Erasmus Bridge views, harbour waterfront paths and — with more time — Markthal and Cube Houses. A harbour cruise is another low-effort option.",
      },
      {
        question: "Is Kinderdijk an easy independent trip?",
        answer:
          "It is possible with careful transfers, but organised or private transport is the lower-risk approach for most cruise passengers.",
      },
      {
        question: "How early should I be back?",
        answer:
          "Reach the terminal 60–90 minutes before all-aboard for a city day, with a larger contingency after Kinderdijk or any regional excursion.",
      },
    ],
    recommendations: [
      {
        category: "best-independent",
        title: "Can You Walk from Port?",
        description: "DIY walking and timing advice from Wilhelminapier into the city.",
        href: "/can-you-walk-from-rotterdam-cruise-port/",
      },
      {
        category: "best-historic",
        title: "Kinderdijk from Rotterdam Cruise Port",
        description: "Plan the flagship regional windmill day realistically.",
        href: "/kinderdijk-from-rotterdam-cruise-port/",
      },
    ],
    relatedSlugs: [
      "rotterdam-cruise-port",
      "can-you-walk-from-rotterdam-cruise-port",
      "kinderdijk-from-rotterdam-cruise-port",
      "getting-around-rotterdam-from-the-cruise-port",
    ],
    imageKey: "cruise-port",
    hubPath: "/guides",
  },
  {
    slug: "rotterdam-cruise-port",
    title: "Rotterdam Cruise Port — Quick Overview",
    seoTitle: "Rotterdam Cruise Port — Quick Overview for Cruise Passengers",
    metaDescription:
      "Quick-reference overview of Rotterdam cruise port: Wilhelminakade terminal, city access, Kinderdijk logistics and essential planning facts.",
    tagline: "The essential facts before you step off the ship.",
    overview:
      "If you only have a few minutes to prepare, this is the short version of our full Rotterdam Cruise Port Guide: where ships berth, what is walkable, what needs transport, and how to plan your return.",
    body: [
      "Berth: Cruise Terminal Rotterdam, Wilhelminakade 699, Wilhelminapier. Confirm details on the ship’s daily programme.",
      "City access: Wilhelminapier and Erasmus Bridge are typically walkable; Markthal and Cube Houses need more time or short transit.",
      "Kinderdijk: roughly 30–45 minutes each way by road — organised or private transport recommended.",
      "Wider destinations: Delft, The Hague and Gouda are popular; Amsterdam needs a long call and honest transit maths.",
      "Return: work backwards from all-aboard. Build a 60–90 minute buffer for a city day; more for regional tours.",
    ],
    highlights: [
      "Wilhelminakade terminal on Wilhelminapier",
      "City highlights independently realistic",
      "Kinderdijk needs a half-day transfer plan",
      "60–90 minute minimum city-day return buffer",
    ],
    tips: [
      "Screenshot berth and all-aboard before leaving the ship",
      "Choose one regional ambition, not three",
      "Carry a light layer for harbour wind",
      "Read the full port guide if planning Kinderdijk",
    ],
    faqs: [
      {
        question: "Is Rotterdam port close to the city?",
        answer:
          "Yes for the modern waterfront and a substantial central loop. Exact times depend on your destination within the city.",
      },
      {
        question: "Do I need the full guide before visiting?",
        answer:
          "Not necessarily for a short pier-and-bridge walk. For Kinderdijk, multi-town days or Amsterdam questions, read the full port guide and comparisons first.",
      },
    ],
    relatedSlugs: [
      "rotterdam-cruise-port-guide",
      "can-you-walk-from-rotterdam-cruise-port",
      "kinderdijk-from-rotterdam-cruise-port",
    ],
    imageKey: "cruise-port",
    hubPath: "/guides",
  },

  {
    slug: "independent-rotterdam",
    title: "Independent Rotterdam from the Cruise Port",
    seoTitle: "Independent Rotterdam from the Cruise Port — DIY Day Guide",
    metaDescription:
      "Explore Rotterdam independently from Wilhelminakade: walking routes, Markthal, Erasmus Bridge, when to book tours and ship-return buffers.",
    tagline: "Rotterdam is walkable and independently explorative — use tours where distance demands them.",
    overview:
      "Unlike many cruise ports that force an excursion for anything interesting, Rotterdam rewards confident independent travellers. Wilhelminapier, Erasmus Bridge and central architecture can fill a strong day. Book shore excursions when you want Kinderdijk, classic Dutch towns, tightly timed private combos or narrated harbour context.",
    body: [
      "Start at the pier: walk Wilhelminapier for contemporary towers and waterfront orientation, then continue toward Erasmus Bridge for the skyline photograph most visitors want.",
      "Extend into the city: Markthal and Cube Houses are a natural architecture-and-food pairing. Use metro or tram if you want to preserve energy for the landmarks themselves.",
      "Harbour without a tour: viewpoints from land already deliver atmosphere. A sightseeing cruise remains worthwhile if you want working-port scale from the water — just follow meeting instructions carefully.",
      "What not to DIY casually: Kinderdijk, Delft, The Hague, Gouda and Amsterdam all involve transfers that compete with your all-aboard clock. Independent is possible for some; organised or private is lower risk for most.",
      "Food: Markthal is the simplest independent tasting stop. Food walks and brewery experiences add structure when you want local context without navigating alone.",
      "Return discipline: aim to be at the terminal 60–90 minutes before all-aboard. Independent travellers own the timing risk.",
    ],
    highlights: [
      "Wilhelminapier and Erasmus Bridge as the opening loop",
      "Markthal and Cube Houses for architecture and food",
      "Harbour viewpoints without committing to a coach",
      "Clear line between DIY city and booked regional days",
    ],
    tips: [
      "Download an offline map of the pier and centre before you lose signal in the terminal",
      "Pick one afternoon ambition — more architecture, a harbour cruise, or a café — not all three plus Kinderdijk",
      "Keep cash/card ready for transit tickets",
      "If mobility is limited, use taxis between clusters rather than abandoning the day",
    ],
    faqs: [
      {
        question: "Do I need a shore excursion in Rotterdam?",
        answer:
          "Not for a solid city day. You need organised or private transport for Kinderdijk and most classic Dutch town trips if you want lower timing risk.",
      },
      {
        question: "How long should an independent city loop take?",
        answer:
          "A satisfying pier-to-Markthal style day often takes 3–5 hours including lunch and photos. Leave earlier if you walk slowly or love lingering.",
      },
      {
        question: "Can I combine independent Rotterdam with Kinderdijk?",
        answer:
          "Only with a long call and booked transport for Kinderdijk. Do not improvise both halves without a hard return plan.",
      },
    ],
    recommendations: [
      {
        category: "best-independent",
        title: "Can you walk from the cruise port?",
        description: "Walking distances and honest limits from Wilhelminakade.",
        href: "/can-you-walk-from-rotterdam-cruise-port/",
      },
      {
        category: "best-independent",
        title: "One Day in Rotterdam from a Cruise",
        description: "Sample timed outlines for different call lengths.",
        href: "/one-day-in-rotterdam-from-a-cruise/",
      },
    ],
    relatedSlugs: [
      "can-you-walk-from-rotterdam-cruise-port",
      "one-day-in-rotterdam-from-a-cruise",
      "rotterdam-cruise-port-guide",
      "getting-around-rotterdam-from-the-cruise-port",
    ],
    imageKey: "walking",
    hubPath: "/guides",
  },
  {
    slug: "can-you-walk-from-rotterdam-cruise-port",
    title: "Can You Walk from Rotterdam Cruise Port?",
    seoTitle: "Can You Walk from Rotterdam Cruise Port? — Walking Distances & DIY Advice",
    metaDescription:
      "Honest walking guidance from Wilhelminakade: what is walkable, when to use transit, and when Kinderdijk needs a booked transfer.",
    tagline: "Yes for the pier and a substantial city loop — not for Kinderdijk or classic Dutch towns.",
    overview:
      "From Cruise Terminal Rotterdam at Wilhelminakade 699, Wilhelminapier and Erasmus Bridge are typically within a manageable walk. Central landmarks such as Markthal need more time or a short metro/tram hop. Kinderdijk, Delft, The Hague, Gouda and Amsterdam are not casual walk-outs from the pier.",
    body: [
      "Pier district: walk Wilhelminapier for contemporary towers and harbour working views, then continue toward Erasmus Bridge for orientation photographs.",
      "Into the centre: Markthal and Cube Houses are independently realistic with enough hours — combine walking with short transit if you want to preserve energy.",
      "What walking cannot solve: Kinderdijk typically needs roughly 30–45 minutes each way by road; classic Dutch towns and Amsterdam need dedicated transfer planning.",
      "Weather and wind on the Maas can make distances feel longer than a map suggests. Carry a light layer and set a terminal return time before you start.",
      "For a full DIY day structure, see Getting Around Rotterdam; for sample timed outlines, see One Day in Rotterdam from a Cruise.",
    ],
    highlights: [
      "Wilhelminapier and Erasmus Bridge are typically walkable",
      "Markthal / Cube Houses need more time or short transit",
      "Kinderdijk is not a walking destination from the pier",
      "Own your return buffer — the ship will not wait",
    ],
    tips: [
      "Photograph the terminal exit so the return route is obvious",
      "Prefer transit over rushing a too-long walk when hours are tight",
      "Do not improvise Kinderdijk after a long city stroll",
      "Aim for 60–90 minutes at the terminal before all-aboard on a city day",
    ],
    faqs: [
      {
        question: "How long does it take to walk to Erasmus Bridge?",
        answer:
          "Many passengers reach bridge viewpoints from the Wilhelminapier cruise area within a comfortable pier-district stroll. Exact time depends on berth, pace and photo stops — confirm signage on the day.",
      },
      {
        question: "Do I need a tour if I can walk?",
        answer:
          "Not for a solid city day. Book a tour when you want Kinderdijk, regional towns, narrated harbour context or private pacing.",
      },
    ],
    recommendations: [
      {
        category: "best-independent",
        title: "Independent Rotterdam",
        description: "Full DIY day structure from the pier.",
        href: "/can-you-walk-from-rotterdam-cruise-port/",
      },
      {
        category: "best-short-port",
        title: "Things to do near the terminal",
        description: "Pier-area highlights for short calls.",
        href: "/things-to-do-near-rotterdam-cruise-terminal/",
      },
    ],
    relatedSlugs: [
      "can-you-walk-from-rotterdam-cruise-port",
      "things-to-do-near-rotterdam-cruise-terminal",
      "rotterdam-cruise-port-to-city-centre",
      "getting-around-rotterdam-from-the-cruise-port",
    ],
    imageKey: "walking",
    hubPath: "/guides",
  },
  {
    slug: "one-day-in-rotterdam-from-a-cruise",
    title: "One Day in Rotterdam from a Cruise",
    seoTitle: "One Day in Rotterdam from a Cruise — Sample Port-Day Plans",
    metaDescription:
      "Sample one-day Rotterdam cruise itineraries: short calls, full city days and when to add Kinderdijk — honest timing, no invented hours.",
    tagline: "Match the day to your usable hours — not to someone else’s highlight reel.",
    overview:
      "A Rotterdam cruise day can be a pier-and-bridge stroll, a full architecture-and-food circuit, a harbour cruise morning, or a Kinderdijk half-day. The right plan starts from your all-aboard time and works backwards.",
    body: [
      "Short call (roughly under six usable hours): stay near Wilhelminapier and Erasmus Bridge; add Markthal only if the math still leaves a 60–90 minute terminal buffer. Skip Kinderdijk and Amsterdam.",
      "Standard city day: pier orientation, architecture cluster (Markthal / Cube Houses), lunch, optional short harbour cruise or food walk, early return.",
      "Long call with classic Holland: morning city highlights or harbour orientation, then organised/private Kinderdijk — or a Delft focus instead. Do not casually add Amsterdam.",
      "Private touring days: the value is sequencing control — Rotterdam + Kinderdijk, or Rotterdam + Delft — matched to real hours, not brochure optimism.",
      "Embarkation days differ from port-of-call days; see embarkation guidance if Rotterdam is your start or end point.",
    ],
    highlights: [
      "Short-call plan that stays near the pier",
      "Full city architecture and food outline",
      "Long-call Kinderdijk or Delft decision framework",
      "Private combo only when hours truly support it",
    ],
    tips: [
      "Write down all-aboard before you leave the ship",
      "Choose one ‘headline’ for the day",
      "Eat earlier than you would on holiday ashore overnight",
      "Use comparisons if you are stuck between Rotterdam and Kinderdijk",
    ],
    faqs: [
      {
        question: "What is the best one-day plan for first-timers?",
        answer:
          "See modern Rotterdam first. Add Kinderdijk only if your usable hours comfortably support the road time and a return buffer.",
      },
      {
        question: "Should food be its own half-day?",
        answer:
          "A food walk can be the day’s anchor on a medium call. On a long call it can sit beside a shortened city loop — not beside Kinderdijk and Delft.",
      },
    ],
    recommendations: [
      {
        category: "editors-choice",
        title: "Best Rotterdam Shore Excursions",
        description: "Match bookable options to call length and interests.",
        href: "/best-rotterdam-shore-excursions/",
      },
      {
        category: "best-historic",
        title: "Rotterdam or Kinderdijk?",
        description: "The core first-time decision.",
        href: "/rotterdam-or-kinderdijk/",
      },
    ],
    relatedSlugs: [
      "can-you-walk-from-rotterdam-cruise-port",
      "can-you-walk-from-rotterdam-cruise-port",
      "best-rotterdam-shore-excursions",
      "kinderdijk-from-rotterdam-cruise-port",
      "rotterdam-embarkation-guide",
    ],
    imageKey: "architecture",
    hubPath: "/guides",
  },
  {
    slug: "best-rotterdam-shore-excursions",
    title: "Best Rotterdam Shore Excursions",
    seoTitle: "Best Rotterdam Shore Excursions — Honest Cruise Passenger Guide",
    metaDescription:
      "Choose the best Rotterdam shore excursion for your port hours: harbour, food, Kinderdijk, Delft, Gouda and private touring.",
    tagline: "No universal winner — match the excursion to your hours and interests.",
    overview:
      "The best Rotterdam shore excursion depends on call length, mobility and whether you want modern city energy or classic Dutch icons. Harbour and food experiences suit shorter windows; Kinderdijk and multi-town private days need more usable time.",
    body: [
      "Best short-call picks: Rotterdam Harbour Sightseeing Cruise, or a compact independent pier-and-bridge loop if you prefer not to book.",
      "Best food-and-culture: Rotterdam Bites & Sights foodie walk, brewery and water-taxi experiences, or private bites-and-sights variants.",
      "Best classic Holland: private Kinderdijk options, or Dutch Icons combining Kinderdijk with Delft and The Hague on a long call.",
      "Best flexible private: Private Rotterdam at Your Pace for city control; add Delft canal, Gouda cheese or Kinderdijk variants when the clock allows.",
      "Active option: e-bike countryside for passengers who want movement beyond city pavement — still confirm meeting points and return buffers.",
      "We do not invent ratings or prices here. Compare inclusions, meeting instructions and your all-aboard time before booking.",
    ],
    highlights: [
      "Harbour cruise for easy orientation",
      "Food walks for city flavour",
      "Kinderdijk for classic windmills",
      "Private touring for combos and pacing",
    ],
    tips: [
      "Read related excursion pages for logistics caveats (especially water taxis)",
      "Prefer cruise-aware operators for regional days",
      "Do not book a full-day private combo on a tight published window",
      "Use our Amsterdam comparison before spending hours on trains",
    ],
    faqs: [
      {
        question: "What is safest for a six-hour call?",
        answer:
          "Stay in Rotterdam — harbour cruise, food walk or independent architecture. Kinderdijk is usually a stretch once buffers are included.",
      },
      {
        question: "Ship excursion or independent operator?",
        answer:
          "Ship tours often offer clearer delay protection. Independent and private options may offer better pacing — check return policies and inclusions carefully.",
      },
    ],
    recommendations: [
      {
        category: "best-coastal",
        title: "Harbour Sightseeing Cruise",
        description: "Low-effort harbour orientation from the water.",
        href: "/shore-excursions/rotterdam-harbour-sightseeing-cruise/",
      },
      {
        category: "best-historic",
        title: "Private Kinderdijk at Your Pace",
        description: "Flagship regional windmill day when hours allow.",
        href: "/shore-excursions/private-rotterdam-kinderdijk-at-your-pace/",
      },
    ],
    relatedSlugs: [
      "one-day-in-rotterdam-from-a-cruise",
      "rotterdam-harbour-cruise-guide",
      "rotterdam-food-tour-guide",
      "kinderdijk-from-rotterdam-cruise-port",
    ],
    imageKey: "compare",
    hubPath: "/guides",
  },
  {
    slug: "rotterdam-harbour-cruise-guide",
    title: "Rotterdam Harbour Cruise Guide",
    seoTitle: "Rotterdam Harbour Cruise Guide from the Cruise Port",
    metaDescription:
      "Plan a Rotterdam harbour sightseeing cruise from Wilhelminakade: meeting points, water taxis, timing and who it suits.",
    tagline: "See Rotterdam’s maritime identity from the water — an easy port-day choice.",
    overview:
      "A harbour sightseeing cruise is one of the simplest ways to understand Rotterdam on a cruise call. It suits short windows, mixed mobility and anyone who wants skyline and working-port context without a long coach day.",
    body: [
      "What you get: bridges, quays, harbour activity and skyline views narrated or guided from the water — atmosphere first, museum time second.",
      "Meeting points: many departures are not directly beside the ship. Water-taxi hops toward areas such as Parkhaven are common and often priced separately — follow the e-ticket.",
      "Timing: compact runtimes leave room for an independent walk afterward if your schedule allows.",
      "Who should skip it: travellers set on Kinderdijk as the day’s only headline may prefer to protect hours for the road transfer instead.",
      "Related bookable option on this site: Rotterdam Harbour Sightseeing Cruise, with brewery and water-taxi variants for a more social harbour day.",
    ],
    highlights: [
      "Low walking demand compared with a full city circuit",
      "Strong short-call fit",
      "Water-taxi logistics to confirm in advance",
      "Pairs with a short independent pier stroll",
    ],
    tips: [
      "Budget time and fare for water taxi if not included",
      "Bring a wind layer",
      "Confirm accessibility needs with the supplier before booking",
      "Do not cut the return buffer because the cruise itself feels short",
    ],
    faqs: [
      {
        question: "Does the harbour cruise start at the cruise terminal?",
        answer:
          "Not necessarily. Follow meeting instructions on your e-ticket rather than assuming pier-side boarding.",
      },
      {
        question: "Is a harbour cruise enough for a first visit?",
        answer:
          "It is an excellent orientation. Many first-timers still want Markthal or Erasmus Bridge on land — possible before or after if hours allow.",
      },
    ],
    recommendations: [
      {
        category: "best-coastal",
        title: "Rotterdam Harbour Sightseeing Cruise",
        description: "The compact harbour product featured in our excursions list.",
        href: "/shore-excursions/rotterdam-harbour-sightseeing-cruise/",
      },
      {
        category: "best-food",
        title: "Breweries and Water Taxi",
        description: "Harbour context with a tasting-led twist.",
        href: "/shore-excursions/rotterdam-breweries-and-water-taxi/",
      },
    ],
    relatedSlugs: [
      "best-rotterdam-shore-excursions",
      "can-you-walk-from-rotterdam-cruise-port",
      "rotterdam-cruise-port-guide",
    ],
    imageKey: "harbour",
    hubPath: "/guides",
  },
  {
    slug: "rotterdam-food-tour-guide",
    title: "Rotterdam Food Tour Guide",
    seoTitle: "Rotterdam Food Tour Guide from the Cruise Port",
    metaDescription:
      "Plan food walks, Markthal stops and brewery experiences in Rotterdam from the cruise port — timing and honest expectations.",
    tagline: "Taste the harbour city — food walks, Markthal and brewery hops timed to your ship.",
    overview:
      "Rotterdam’s food scene reflects a global port more than a single regional stereotype. For cruise passengers, Markthal, guided food walks and brewery experiences offer structured tasting without abandoning ship timing.",
    body: [
      "Markthal independently: the simplest tasting stop if you are already on an architecture loop — useful when you do not want a formal tour.",
      "Guided food walks: Rotterdam Bites & Sights style experiences add narrative and pacing; private variants help mixed groups move at their own speed.",
      "Breweries and water taxi: a social harbour-adjacent option; confirm transfers and what is included before you assume a door-to-door package.",
      "Gouda: choose a dedicated cheese-town plan when dairy heritage is the priority — not as a rushed extra after Kinderdijk and Delft.",
      "Timing: food tours fill a satisfying half-day. Stacking them with a full Kinderdijk outing needs a long call.",
    ],
    highlights: [
      "Markthal as an independent anchor",
      "Food walks for guided city flavour",
      "Brewery experiences with harbour links",
      "Gouda as a regional food day trip",
    ],
    tips: [
      "Tell guides about allergies before the day if the product involves tastings",
      "Eat enough early if your ship schedule is back-loaded",
      "Do not schedule a heavy lunch before a windy harbour cruise without checking timing",
      "Confirm whether drinks are included in brewery products",
    ],
    faqs: [
      {
        question: "Is Markthal enough without a food tour?",
        answer:
          "Often yes for a short call. Book a food walk when you want guided context and curated stops beyond a single market hall.",
      },
      {
        question: "Can vegetarians join food walks?",
        answer:
          "Many tasting routes can adapt, but you should confirm with the supplier when booking rather than assuming every stop has alternatives.",
      },
    ],
    recommendations: [
      {
        category: "best-food",
        title: "Rotterdam Bites & Sights",
        description: "Foodie walk featured in our live excursions list.",
        href: "/shore-excursions/rotterdam-bites-and-sights-foodie-walk/",
      },
      {
        category: "best-food",
        title: "Private Gouda Cheese",
        description: "Regional cheese-town focus when hours allow.",
        href: "/shore-excursions/private-rotterdam-gouda-cheese/",
      },
    ],
    relatedSlugs: [
      "best-rotterdam-shore-excursions",
      "one-day-in-rotterdam-from-a-cruise",
      "can-you-walk-from-rotterdam-cruise-port",
    ],
    imageKey: "food",
    hubPath: "/guides",
  },
  {
    slug: "rotterdam-embarkation-guide",
    title: "Rotterdam Cruise Embarkation Guide",
    seoTitle: "Rotterdam Cruise Embarkation & Debarkation Guidance",
    metaDescription:
      "Practical embarkation and turnaround guidance for Cruise Terminal Rotterdam at Wilhelminakade — timing, luggage and city plans.",
    tagline: "When Rotterdam is your start or end point — plan the terminal day differently from a mid-cruise call.",
    overview:
      "Embarkation and debarkation days are not the same as a leisure port call. Luggage, check-in windows, flights and hotel timing reshape what is realistic ashore. This guide keeps expectations honest for Wilhelminakade turnarounds.",
    body: [
      "Terminal: Cruise Terminal Rotterdam at Wilhelminakade 699 on Wilhelminapier. Arrive within the check-in window your cruise line assigns — early does not always mean you board sooner.",
      "Luggage: follow line instructions for dropping bags; do not plan a regional excursion while suitcases are in limbo unless your line’s process clearly allows it.",
      "Pre-embark city time: a short Wilhelminapier and Erasmus Bridge walk or Markthal visit can work if your hotel location and check-in time allow. Kinderdijk is rarely sensible on embarkation morning.",
      "Post-cruise: if you have a late flight, a focused city loop may be possible after debarkation — confirm luggage storage options with your line or hotel rather than assuming terminal facilities.",
      "Hotels: staying near Rotterdam Centraal or Kop van Zuid / Wilhelminapier simplifies terminal transfers compared with distant suburbs.",
      "Always defer to your cruise line’s embarkation documents for the authoritative process on your sailing.",
    ],
    highlights: [
      "Wilhelminakade turnaround basics",
      "Why embarkation mornings differ from port calls",
      "Short city ideas that fit check-in windows",
      "Hotel location tips for easier transfers",
    ],
    tips: [
      "Keep boarding documents and ID accessible, not buried in checked luggage",
      "Build flight buffers larger than you use for ordinary European travel",
      "Do not book non-refundable regional tours against an embarkation morning",
      "Screenshot terminal address: Wilhelminakade 699, Rotterdam",
    ],
    faqs: [
      {
        question: "Can I visit Kinderdijk on embarkation day?",
        answer:
          "Usually not recommended. Check-in windows, luggage and unexpected queues make regional road trips a poor fit. Save Kinderdijk for a full port call or a land stay.",
      },
      {
        question: "Is the terminal close to Rotterdam Centraal?",
        answer:
          "They are separate areas of the city. Plan a deliberate transfer by taxi, metro or tram rather than assuming a short casual walk with luggage.",
      },
    ],
    recommendations: [
      {
        category: "best-short-port",
        title: "Rotterdam Cruise Port Guide",
        description: "Full terminal and city-access orientation.",
        href: "/rotterdam-cruise-port-guide/",
      },
      {
        category: "best-independent",
        title: "Can You Walk from Port?",
        description: "Short DIY ideas if your embarkation window allows.",
        href: "/can-you-walk-from-rotterdam-cruise-port/",
      },
    ],
    relatedSlugs: [
      "rotterdam-cruise-port-guide",
      "getting-around-rotterdam-from-the-cruise-port",
      "one-day-in-rotterdam-from-a-cruise",
    ],
    imageKey: "cruise-port",
    hubPath: "/guides",
  },
  {
    slug: "kinderdijk-from-rotterdam-cruise-port",
    title: "Kinderdijk from Rotterdam Cruise Port",
    seoTitle: "Kinderdijk from Rotterdam Cruise Port — Complete Planning Guide",
    metaDescription:
      "Plan Kinderdijk from Rotterdam cruise port with realistic road times, site expectations and honest ship-return advice.",
    tagline: "UNESCO windmills — the flagship regional trip that needs real transport planning.",
    overview:
      "Kinderdijk is the classic Dutch landscape most visitors associate with a Rotterdam call. It is worth the journey when your usable hours support roughly 30–45 minutes each way by road, time among the mills and a conservative return buffer.",
    body: [
      "Getting there: organised coach excursions and private tours are the cruise-aware defaults. Independent transfers are possible but carry more timing risk.",
      "On site: expect outdoor walking between mills and visitor areas. Weather and wind matter; this is not an indoor museum day.",
      "Admission: confirm whether entry is included on your excursion e-ticket; independent visitors should check current ticketing.",
      "Combining with Rotterdam: a short morning pier orientation plus afternoon Kinderdijk can work on a long private day. A full Markthal deep-dive plus Kinderdijk plus Delft usually does not.",
      "Related products on this site include private Kinderdijk at your pace, Kinderdijk highlights with cruise elements, and wider Dutch Icons itineraries.",
    ],
    highlights: [
      "Flagship regional landscape from this port",
      "Roughly 30–45 minutes each way by road typical",
      "Outdoor site walking and photography",
      "Best as a dedicated half-day headline",
    ],
    tips: [
      "Wear shoes suited to paths",
      "Carry water and a wind layer",
      "Choose private touring if you need flexible pacing or a city+Kinderdijk combo",
      "Abort the idea if your published window is short",
    ],
    faqs: [
      {
        question: "Is Kinderdijk worth it from Rotterdam?",
        answer:
          "Yes for most first-timers with enough hours. It is the clearest classic Holland counterpoint to modern Rotterdam.",
      },
      {
        question: "Kinderdijk or Delft?",
        answer:
          "Windmills vs historic town — see our comparison. Neither is universally better.",
      },
    ],
    recommendations: [
      {
        category: "best-historic",
        title: "Private Kinderdijk at Your Pace",
        description: "Flexible private windmill day from the port area.",
        href: "/shore-excursions/private-rotterdam-kinderdijk-at-your-pace/",
      },
      {
        category: "editors-choice",
        title: "Kinderdijk or Delft?",
        description: "Choose your classic Dutch focus.",
        href: "/kinderdijk-or-delft-from-rotterdam/",
      },
    ],
    relatedSlugs: [
      "rotterdam-cruise-port-guide",
      "best-rotterdam-shore-excursions",
      "one-day-in-rotterdam-from-a-cruise",
    ],
    imageKey: "kinderdijk",
    hubPath: "/guides",
  },
  {
    slug: "getting-around-rotterdam-from-the-cruise-port",
    title: "Getting Around Rotterdam from the Cruise Port",
    seoTitle: "Getting Around Rotterdam from the Cruise Port — Transport Guide",
    metaDescription:
      "Walking, metro, tram, taxis and water taxis from Wilhelminakade — honest transport guidance for cruise passengers.",
    tagline: "Walking first for the pier — transit and tours when distance demands them.",
    overview:
      "How you move in Rotterdam depends on the day’s ambition. Wilhelminapier rewards walking; central clusters may need short transit; Kinderdijk and classic towns need dedicated vehicles or carefully buffered trains.",
    body: [
      "Walking: best for pier, bridge and nearby waterfront orientation. Flat compared with many historic ports.",
      "Metro and tram: useful from Kop van Zuid / Wilhelminapier into central Rotterdam. Not timed to all-aboard.",
      "Taxis: convenient for mobility needs and tighter schedules; keep terminal details for the return.",
      "Water taxis: common for some harbour products; often separate cost and queue time.",
      "Regional: coach, private driver or train+buffer for Kinderdijk, Delft, The Hague, Gouda and especially Amsterdam.",
    ],
    highlights: [
      "Walkable pier and bridge core",
      "Metro/tram for central clusters",
      "Water-taxi caveats for harbour tours",
      "Regional transport is a planning decision, not an afterthought",
    ],
    tips: [
      "Validate transit tickets correctly before boarding",
      "Agree taxi destinations clearly — ‘the cruise terminal’ plus Wilhelminakade helps",
      "Never let a map’s best-case drive time be your only Kinderdijk plan",
      "On multi-ship days, assume slower taxi pickup",
    ],
    faqs: [
      {
        question: "Do I need a taxi to see anything?",
        answer:
          "No for a pier and bridge day. Yes or transit for farther landmarks if walking time would erase your buffer.",
      },
      {
        question: "Is renting a car wise on a cruise day?",
        answer:
          "Usually not. Parking, unfamiliar roads and return stress make organised or private transport wiser for most passengers.",
      },
    ],
    recommendations: [
      {
        category: "best-independent",
        title: "Can You Walk from Port?",
        description: "DIY routes when walking is enough.",
        href: "/can-you-walk-from-rotterdam-cruise-port/",
      },
      {
        category: "best-luxury",
        title: "Private Rotterdam at Your Pace",
        description: "When you want door-to-door control.",
        href: "/shore-excursions/private-rotterdam-at-your-pace/",
      },
    ],
    relatedSlugs: [
      "rotterdam-cruise-port-guide",
      "can-you-walk-from-rotterdam-cruise-port",
      "rotterdam-embarkation-guide",
    ],
    imageKey: "walking",
    hubPath: "/guides",
  },

  {
    slug: "rotterdam-cruise-terminal",
    title: "Rotterdam Cruise Terminal",
    seoTitle: "Rotterdam Cruise Terminal — Wilhelminakade Guide for Passengers",
    metaDescription:
      "What to know about Cruise Terminal Rotterdam at Wilhelminakade: location, pier context, city access and return-to-ship planning.",
    tagline: "Wilhelminakade 699 — your practical gateway into the harbour city.",
    overview:
      "Most Rotterdam cruise calls use Cruise Terminal Rotterdam on Wilhelminapier. Knowing the terminal location helps you decide what is walkable, where taxis and transit connect, and how early to return before all-aboard.",
    body: [
      "Address context: Cruise Terminal Rotterdam is commonly referenced at Wilhelminakade 699 on Wilhelminapier, on the south bank of the Nieuwe Maas. Confirm your ship’s daily programme for exact gangway and meeting points.",
      "Immediate surroundings: Hotel New York, contemporary towers and riverfront paths give a strong first impression without leaving the pier area.",
      "Into the city: Erasmus Bridge is the natural landmark walk. Markthal and Cube Houses usually need more time or a short metro/tram hop.",
      "Meeting points: Shore excursions may gather pier-side or nearby — follow your booking confirmation rather than assuming the gangway is the meeting point.",
      "Return: save the terminal name and Wilhelminakade for taxi drivers, and aim for a 60–90 minute buffer on a city day.",
    ],
    highlights: [
      "Wilhelminakade terminal on Wilhelminapier",
      "Strong pier-area architecture within a short walk",
      "Transit and taxis for farther city clusters",
      "Clear return-buffer discipline",
    ],
    tips: [
      "Photograph your ship and exit path before exploring",
      "Keep offline notes of terminal and ship name",
      "Confirm excursion meeting instructions the night before",
      "Allow extra time on multi-ship days",
    ],
    faqs: [
      {
        question: "Where is the Rotterdam cruise terminal?",
        answer:
          "Cruise Terminal Rotterdam is on Wilhelminapier at Wilhelminakade. Exact berth arrangements can vary — use your cruise line’s programme as the final reference.",
      },
      {
        question: "Is the terminal close to central sights?",
        answer:
          "Pier architecture and Erasmus Bridge are close. Central clusters such as Markthal need more walking or short transit.",
      },
    ],
    relatedSlugs: [
      "rotterdam-cruise-port-guide",
      "rotterdam-cruise-port",
      "can-you-walk-from-rotterdam-cruise-port",
      "things-to-do-near-rotterdam-cruise-terminal",
    ],
    imageKey: "cruise-port",
    hubPath: "/guides",
  },
  {
    slug: "rotterdam-cruise-port-to-city-centre",
    title: "Rotterdam Cruise Port to City Centre",
    seoTitle: "Rotterdam Cruise Port to City Centre — Walking, Transit & Timing",
    metaDescription:
      "How to get from Rotterdam cruise port to the city centre: walking routes, metro/tram options, taxis and realistic cruise-day buffers.",
    tagline: "A clear path from Wilhelminapier into central Rotterdam.",
    overview:
      "Getting from the cruise terminal into central Rotterdam is straightforward compared with many European ports, but ‘city centre’ covers more than one cluster. Plan for Wilhelminapier first, then decide whether Markthal, Cube Houses or further stops fit your hours.",
    body: [
      "Walking: follow the pier toward Erasmus Bridge for skyline views and a sense of the harbour city. This alone can be a satisfying short outing.",
      "Transit: metro and tram from the Kop van Zuid / Wilhelminapier area shorten the hop to Markthal and other central stops. Public transport is not timed to all-aboard.",
      "Taxis: useful for mobility needs, families with limited walking time, or tighter schedules.",
      "Timing: a pier-to-Markthal style loop often needs several hours once you include photos, food and the return. Keep a 60–90 minute terminal buffer.",
      "What ‘city centre’ is not: Kinderdijk, Delft, The Hague and Gouda are regional trips, not city-centre walks.",
    ],
    highlights: [
      "Pier-to-bridge walking as the opening chapter",
      "Metro/tram for central architecture and food stops",
      "Taxi option for tighter windows",
      "Regional destinations need separate planning",
    ],
    tips: [
      "Decide your farthest stop before you leave the ship",
      "Validate transit tickets correctly",
      "Eat earlier than a leisurely land holiday would suggest",
      "Do not let a map’s optimistic walk time erase your return buffer",
    ],
    faqs: [
      {
        question: "How long does it take to reach central Rotterdam from the port?",
        answer:
          "Wilhelminapier and Erasmus Bridge are typically a manageable walk. Farther central landmarks vary — allow more time or use transit rather than treating every pin as adjacent to the gangway.",
      },
      {
        question: "Is a taxi necessary?",
        answer:
          "Not for a pier and bridge day. Consider a taxi or transit when mobility, weather or a tighter call makes longer walks risky.",
      },
    ],
    relatedSlugs: [
      "rotterdam-cruise-port-guide",
      "can-you-walk-from-rotterdam-cruise-port",
      "getting-around-rotterdam-from-the-cruise-port",
      "things-to-do-near-rotterdam-cruise-terminal",
    ],
    imageKey: "walking",
    hubPath: "/guides",
  },
  {
    slug: "delft-from-rotterdam-cruise-port",
    title: "Delft from Rotterdam Cruise Port",
    seoTitle: "Delft from Rotterdam Cruise Port — Day Trip Planning Guide",
    metaDescription:
      "Plan a Delft day trip from Rotterdam cruise port: transfer expectations, historic-town pacing and honest ship-return advice.",
    tagline: "Historic canals and town life — closer than Amsterdam, still a real transfer from the pier.",
    overview:
      "Delft is one of the strongest classic Dutch town options from a Rotterdam call. It rewards wandering squares, churches and canals, but it is not a walk from Wilhelminakade. Treat it as a planned half-day with clear return timing.",
    body: [
      "Why Delft: historic atmosphere, compact centre and a more urban Dutch character than Kinderdijk’s polder landscape.",
      "Getting there: expect a genuine transfer from the cruise terminal — train or road options usually involve pier-to-station or organised/private transport. Confirm live connections for your date.",
      "On site: leave time to wander rather than checklist-racing. Cobbles and church climbs matter for mobility planning.",
      "Versus Kinderdijk: windmills vs historic town — see our comparison if you are torn.",
      "Combining with Rotterdam: a short morning pier orientation plus Delft can work on a long call; a full Markthal deep-dive plus Delft plus Kinderdijk usually does not.",
    ],
    highlights: [
      "Historic canal-town character",
      "Transfer required from Wilhelminakade",
      "Good alternative to Amsterdam for many calls",
      "Pairs with private Rotterdam–Delft itineraries",
    ],
    tips: [
      "Wear comfortable shoes for cobbles",
      "Choose Delft or Kinderdijk as the regional headline unless you have a long private day",
      "Build a conservative return buffer",
      "Confirm whether any canal cruise or attraction tickets are separate",
    ],
    faqs: [
      {
        question: "Is Delft better than Kinderdijk?",
        answer:
          "Neither is universally better. Choose Delft for town and canal atmosphere; Kinderdijk for UNESCO windmills.",
      },
      {
        question: "Can I do Delft independently?",
        answer:
          "Yes with careful transit planning, but organised or private transport is lower risk for most cruise passengers.",
      },
    ],
    relatedSlugs: [
      "kinderdijk-or-delft-from-rotterdam",
      "kinderdijk-from-rotterdam-cruise-port",
      "the-hague-from-rotterdam-cruise-port",
      "best-rotterdam-shore-excursions",
    ],
    imageKey: "delft",
    hubPath: "/guides",
  },
  {
    slug: "the-hague-from-rotterdam-cruise-port",
    title: "The Hague from Rotterdam Cruise Port",
    seoTitle: "The Hague from Rotterdam Cruise Port — Day Trip Guide",
    metaDescription:
      "Plan The Hague from Rotterdam cruise port: government architecture, museums and Scheveningen context with realistic transfer timing.",
    tagline: "A different urban Dutch day — worth it when those specific interests lead.",
    overview:
      "The Hague offers civic architecture, museums and coastal options at Scheveningen, but it usually needs a clearer time budget than a compact Delft wander. Choose it when those interests matter more than a short historic-town loop.",
    body: [
      "Character: political and cultural capital energy rather than Rotterdam’s modern harbour story or Kinderdijk’s rural mills.",
      "Transfers: plan pier-to-station or organised/private transport; do not treat The Hague as adjacent to the cruise terminal.",
      "Focus: pick one or two anchors — a museum, the historic centre, or Scheveningen — rather than trying to ‘do The Hague’ entirely.",
      "Fit: better on longer calls. On short windows, Rotterdam city or a harbour cruise usually returns more for the time spent.",
    ],
    highlights: [
      "Museums and civic architecture",
      "Optional Scheveningen coast add-on on long calls",
      "Needs deliberate transfer planning",
      "Not the default short-call choice",
    ],
    tips: [
      "Decide your must-see before leaving the ship",
      "Check museum opening hours for your sailing date",
      "Prefer private touring if combining The Hague with Rotterdam highlights",
      "Keep Amsterdam as a separate, more ambitious decision",
    ],
    faqs: [
      {
        question: "Is The Hague better than Delft from Rotterdam?",
        answer:
          "Only when museums, government architecture or Scheveningen are the priority. Delft is often the more compact historic-town day.",
      },
      {
        question: "Can I combine The Hague with Kinderdijk?",
        answer:
          "Only on a long call with private or carefully designed touring. Most passengers enjoy one regional focus properly.",
      },
    ],
    relatedSlugs: [
      "delft-from-rotterdam-cruise-port",
      "gouda-from-rotterdam-cruise-port",
      "kinderdijk-or-delft-from-rotterdam",
      "should-you-visit-amsterdam-from-rotterdam-cruise-port",
    ],
    imageKey: "the-hague",
    hubPath: "/guides",
  },
  {
    slug: "gouda-from-rotterdam-cruise-port",
    title: "Gouda from Rotterdam Cruise Port",
    seoTitle: "Gouda from Rotterdam Cruise Port — Cheese Town Day Trip Guide",
    metaDescription:
      "Plan Gouda from Rotterdam cruise port: market-town atmosphere, cheese heritage and honest timing advice for cruise passengers.",
    tagline: "Market-town character and cheese heritage — a regional option with clear transfer needs.",
    overview:
      "Gouda offers historic-centre atmosphere and cheese-market associations that many visitors want from a Dutch call. It is a planned regional trip from Wilhelminakade, not a pier stroll. Confirm market days and opening patterns for your sailing date rather than assuming a weekly spectacle.",
    body: [
      "Why Gouda: compact historic centre and food heritage that complements Rotterdam’s modern harbour story.",
      "Transfers: expect organised, private or carefully buffered independent transport.",
      "On site: market atmosphere varies by day and season — build the day around the town itself, not a guaranteed show.",
      "Fit: works well as a private-tour focus or as part of a longer Dutch-icons style day when hours allow.",
    ],
    highlights: [
      "Historic market-town setting",
      "Cheese and local-food interest",
      "Transfer required from the cruise port",
      "Best with confirmed timing and return buffer",
    ],
    tips: [
      "Verify what is open on your call date",
      "Do not stack Gouda with Amsterdam",
      "Private touring helps if combining with Rotterdam or Delft",
      "Leave margin for traffic on the return",
    ],
    faqs: [
      {
        question: "Is there always a cheese market?",
        answer:
          "No. Market traditions are seasonal and date-specific. Plan for the town and any confirmed experiences rather than assuming a weekly event.",
      },
      {
        question: "Gouda or Delft?",
        answer:
          "Delft for canals and classic historic-town wandering; Gouda when cheese-town heritage is the clearer draw.",
      },
    ],
    relatedSlugs: [
      "delft-from-rotterdam-cruise-port",
      "private-rotterdam-shore-excursions",
      "best-rotterdam-shore-excursions",
      "kinderdijk-from-rotterdam-cruise-port",
    ],
    imageKey: "gouda",
    hubPath: "/guides",
  },
  {
    slug: "rotterdam-or-kinderdijk",
    title: "Rotterdam or Kinderdijk?",
    seoTitle: "Rotterdam vs Kinderdijk — Which Shore Excursion?",
    metaDescription:
      "Compare a modern Rotterdam city day with Kinderdijk windmills for a cruise port call, including travel time, walking and ship-return advice.",
    tagline: "Modern harbour city or UNESCO windmills — choose the day that fits your hours.",
    overview:
      "Rotterdam offers architecture, harbour views and food culture within reach of Wilhelminapier. Kinderdijk is a UNESCO windmill landscape southeast of the city that needs organised transport and a genuine half-day commitment.",
    body: [
      "Choose Rotterdam when your call is shorter, you prefer independent exploring, or you want harbour and architecture without road time.",
      "Choose Kinderdijk when you have enough usable hours and want the classic Dutch windmill experience as the day’s defining image.",
      "Wilhelminapier, Erasmus Bridge and central landmarks are independently explorative for many passengers.",
      "Kinderdijk typically needs roughly 30–45 minutes each way by road, plus time on site — not a walking add-on from the pier.",
      "On a comfortably long day with private touring, both can be combined — but only with disciplined timing.",
    ],
    highlights: [
      "Rotterdam: walkable modern city and harbour",
      "Kinderdijk: flagship regional windmill landscape",
      "Short calls favour the city",
      "Long calls can support Kinderdijk or a careful combo",
    ],
    tips: [
      "Write down usable hours before choosing",
      "Do not treat Kinderdijk as a quick add-on",
      "Use private touring if combining both",
      "Read the port guide for terminal logistics",
    ],
    faqs: [
      {
        question: "Can I do both Rotterdam and Kinderdijk in one day?",
        answer:
          "Yes on a comfortably long call — especially with a private tour that controls pacing. On a standard or short call, choose one as the day’s anchor.",
      },
      {
        question: "What if I only have five or six usable hours?",
        answer:
          "Stay in Rotterdam or take a compact harbour experience. Kinderdijk’s road time consumes a meaningful share of a short window once you include a return buffer.",
      },
    ],
    relatedSlugs: [
      "kinderdijk-or-delft-from-rotterdam",
      "kinderdijk-from-rotterdam-cruise-port",
      "best-rotterdam-shore-excursions",
      "can-you-walk-from-rotterdam-cruise-port",
    ],
    imageKey: "compare",
    hubPath: "/guides",
  },
  {
    slug: "kinderdijk-or-delft-from-rotterdam",
    title: "Kinderdijk or Delft from Rotterdam?",
    seoTitle: "Kinderdijk vs Delft from Rotterdam Cruise Port",
    metaDescription:
      "Compare Kinderdijk windmills with Delft from Rotterdam cruise port — travel times, atmosphere and which suits your hours ashore.",
    tagline: "UNESCO windmills or historic canal town — pick the classic Holland focus you care about most.",
    overview:
      "Kinderdijk is the iconic windmill landscape most first-time visitors picture near Rotterdam. Delft is a historic canal town with squares and churches — typically closer by train or road from central Rotterdam, but still a real transfer from the pier.",
    body: [
      "Choose Kinderdijk for the single most distinctive regional landscape from this port.",
      "Choose Delft when you want historic streets, canals and town life rather than polder windmills.",
      "Kinderdijk is primarily outdoor heritage — weather and path walking matter.",
      "Delft rewards wandering and is often more forgiving in changeable weather with indoor stops.",
      "Private Dutch-icon itineraries can combine both only when the call is long enough.",
    ],
    highlights: [
      "Kinderdijk: windmill headline experience",
      "Delft: historic town wandering",
      "Both need transport from the cruise terminal",
      "Combining both is ambitious",
    ],
    tips: [
      "Match the landscape you care about most",
      "Check weather before locking an outdoor-heavy Kinderdijk day",
      "Leave Amsterdam out of a Kinderdijk-or-Delft debate",
      "Use private touring for ambitious combos",
    ],
    faqs: [
      {
        question: "Which is better for first-time visitors?",
        answer:
          "Kinderdijk if windmills are the priority; Delft if you prefer a historic town you can wander.",
      },
      {
        question: "Can I visit both in one cruise day?",
        answer:
          "Only with a long call and private or carefully designed touring. Many passengers enjoy one destination properly instead.",
      },
    ],
    relatedSlugs: [
      "rotterdam-or-kinderdijk",
      "delft-from-rotterdam-cruise-port",
      "kinderdijk-from-rotterdam-cruise-port",
      "the-hague-from-rotterdam-cruise-port",
    ],
    imageKey: "compare",
    hubPath: "/guides",
  },
  {
    slug: "should-you-visit-amsterdam-from-rotterdam-cruise-port",
    title: "Should You Visit Amsterdam from Rotterdam Cruise Port?",
    seoTitle: "Amsterdam from Rotterdam Cruise Port — Honest Advice",
    metaDescription:
      "Honest guidance on visiting Amsterdam from a Rotterdam cruise call: train times, trade-offs and when Rotterdam, Kinderdijk or Delft fit better.",
    tagline: "Tempting on a map — often a poor default for a Rotterdam daytime call.",
    overview:
      "Amsterdam is not an automatic win from Rotterdam. Train journeys from Rotterdam Centraal commonly take around 1–1.5 hours each way before pier transfers and station navigation. Many passengers enjoy a stronger day in Rotterdam, at Kinderdijk or in Delft.",
    body: [
      "Rotterdam itself is a destination — modern, comparatively walkable from Wilhelminapier, and rich enough for a full port day.",
      "Kinderdijk and Delft deliver classic Holland with shorter typical transfer budgets than Amsterdam.",
      "Missing the ship because of a delayed train is a real risk; build buffers that would feel excessive on a city-only day.",
      "Consider Amsterdam only with a long call, a specific reason to be there, and a conservative return plan.",
    ],
    highlights: [
      "Transit time often dominates a daytime call",
      "Rotterdam, Kinderdijk and Delft are stronger defaults",
      "Long calls only for Amsterdam ambitions",
      "Return confidence matters more than map distance",
    ],
    tips: [
      "Do the door-to-door maths including pier transfers",
      "Prefer organised timing if you insist on Amsterdam",
      "First-timers: see Rotterdam first",
      "Never cut the return buffer to ‘fit more in’",
    ],
    faqs: [
      {
        question: "How long does Amsterdam take from Rotterdam cruise port?",
        answer:
          "Plan for pier transfer to Rotterdam Centraal, then commonly around 1–1.5 hours each way by train, plus exploration time and the return. Verify live connections for your date.",
      },
      {
        question: "Is Amsterdam ever a good idea from this port?",
        answer:
          "Yes for some overnight or very long calls, or when Amsterdam is the clear personal priority. It is a poor default for short or average daytime calls.",
      },
    ],
    relatedSlugs: [
      "rotterdam-or-kinderdijk",
      "delft-from-rotterdam-cruise-port",
      "one-day-in-rotterdam-from-a-cruise",
      "best-rotterdam-shore-excursions",
    ],
    imageKey: "compare",
    hubPath: "/guides",
  },
  {
    slug: "private-rotterdam-shore-excursions",
    title: "Private Rotterdam Shore Excursions",
    seoTitle: "Private Rotterdam Shore Excursions — When Private Touring Makes Sense",
    metaDescription:
      "When to choose private Rotterdam shore excursions for Kinderdijk, Delft and city touring — pacing, families and return confidence.",
    tagline: "Private touring for pacing control — not automatically ‘better’ for every call.",
    overview:
      "Private shore excursions shine when your party needs flexible pacing, mixed mobility, or a custom Rotterdam-plus-regional sequence. Standard group excursions can still be the right fit for a clear single-focus day at a lower complexity.",
    body: [
      "Choose private when you want door-to-door control for Kinderdijk, Delft, Gouda or a city deep-dive with exact timing.",
      "Choose group or standard excursions when a single well-defined product matches your hours and you prefer a simpler booking.",
      "Families and mixed-ability parties often benefit from private vehicles and stop control.",
      "Private does not remove the need for a return buffer — it simply gives you more levers if traffic or queues shift.",
      "Browse live private options on our shore-excursions pages and confirm inclusions on the partner booking page.",
    ],
    highlights: [
      "Best for custom sequencing and mixed parties",
      "Strong for Kinderdijk or multi-stop regional days",
      "Still requires honest hour maths",
      "Group tours remain valid for focused single days",
    ],
    tips: [
      "Share mobility needs when enquiring or booking",
      "Do not overstuff the itinerary because the vehicle is private",
      "Confirm meeting point instructions carefully",
      "Compare against harbour and food group options for short calls",
    ],
    faqs: [
      {
        question: "Are private tours always better?",
        answer:
          "No. They are better when flexibility matters. A focused group harbour or Kinderdijk product can be an excellent fit on the right day.",
      },
      {
        question: "Can a private tour combine Rotterdam and Kinderdijk?",
        answer:
          "Often that is exactly when private touring helps — provided your usable hours support both halves plus a conservative return.",
      },
    ],
    relatedSlugs: [
      "best-rotterdam-shore-excursions",
      "kinderdijk-from-rotterdam-cruise-port",
      "rotterdam-or-kinderdijk",
      "one-day-in-rotterdam-from-a-cruise",
    ],
    imageKey: "private",
    hubPath: "/guides",
  },
  {
    slug: "things-to-do-near-rotterdam-cruise-terminal",
    title: "Things to Do Near Rotterdam Cruise Terminal",
    seoTitle: "Things to Do Near Rotterdam Cruise Terminal — Pier & City Ideas",
    metaDescription:
      "Things to do near Rotterdam cruise terminal: Wilhelminapier architecture, Erasmus Bridge, harbour views and easy city add-ons.",
    tagline: "Make the most of Wilhelminapier without overcommitting your hours.",
    overview:
      "Some of Rotterdam’s strongest first impressions sit close to the cruise terminal: contemporary architecture, river views and the approach to Erasmus Bridge. Use this guide for short-call ideas and easy add-ons before you commit to Kinderdijk or a regional town.",
    body: [
      "On the pier: walk Wilhelminapier for skyline and harbour atmosphere, including the Hotel New York area context.",
      "Signature photo: Erasmus Bridge is the landmark most visitors want and is typically within a realistic walk.",
      "Easy add-ons: Markthal and Cube Houses with more walking or short transit when hours allow.",
      "On the water: a harbour sightseeing cruise for working-port scale without a coach day inland.",
      "Food: Markthal snacks or a guided food walk when you want local flavour without leaving the city story.",
    ],
    highlights: [
      "Wilhelminapier architecture walk",
      "Erasmus Bridge viewpoints",
      "Optional Markthal / Cube Houses cluster",
      "Harbour cruise as a low-effort orientation",
    ],
    tips: [
      "Start with the pier even if you later book Kinderdijk on another call",
      "Keep one headline for short windows",
      "Use transit instead of forcing every landmark on foot",
      "Return early enough that the terminal find is calm",
    ],
    faqs: [
      {
        question: "What can I see in two hours?",
        answer:
          "A focused Wilhelminapier and Erasmus Bridge loop is the realistic short-window plan. Save Markthal or a harbour cruise for fuller calls.",
      },
      {
        question: "Do I need a tour near the terminal?",
        answer:
          "Not for pier and bridge highlights. Tours add value for harbour narration, food structure, Kinderdijk and regional towns.",
      },
    ],
    relatedSlugs: [
      "can-you-walk-from-rotterdam-cruise-port",
      "rotterdam-cruise-terminal",
      "rotterdam-harbour-cruise-guide",
      "rotterdam-food-tour-guide",
    ],
    imageKey: "architecture",
    hubPath: "/guides",
  },

];

export function getGuidePageBySlug(slug: string): GuidePage | undefined {
  return guidePages.find((p) => p.slug === slug);
}

export function getAllGuidePageSlugs(): string[] {
  return guidePages.map((p) => p.slug);
}

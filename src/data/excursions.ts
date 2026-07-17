import type { ExcursionPage } from "./types";

/**
 * Cruise ships calling at Rotterdam typically use the Wilhelminakade cruise terminal on
 * Wilhelminapier. City highlights are comparatively accessible from the pier area, but meeting
 * points are set per tour and are not always directly beside the ship — confirm the exact
 * location from your e-ticket before sailing day. Kinderdijk, Delft, The Hague and Gouda all
 * require coach, taxi, private transport or a combination with public transport; they are not
 * realistic on foot from the terminal. Plan every day backwards from your ship's stated
 * all-aboard time, not just its published departure, and allow a buffer for water-taxi queues,
 * tram connections and regional traffic.
 */
export const PORT_LOGISTICS =
  "Cruise ships calling at Rotterdam typically use the Wilhelminakade cruise terminal on Wilhelminapier. The city is comparatively accessible from the pier area, but meeting points are set per tour and are not always directly beside the ship — always confirm the exact pickup or rendezvous from your booking confirmation or e-ticket. Kinderdijk, Delft, The Hague and Gouda require transport beyond a walk from the terminal. Plan your day backwards from the ship's stated all-aboard time rather than its published departure, and build in a buffer for water-taxi waits, public-transport connections and regional traffic.";

export const SEG_SUPPLIER = {
  kind: "shore-excursions-group" as const,
  name: "Shore Excursions Group",
};

export const excursions: ExcursionPage[] = [
  {
    slug: "rotterdam-harbour-sightseeing-cruise",
    title: "Rotterdam Harbour Sightseeing Cruise",
    seoTitle: "Rotterdam Harbour Sightseeing Cruise from the Cruise Port",
    metaDescription:
      "See Rotterdam's harbour and skyline from the water on a compact sightseeing cruise — an easy, scenic choice for a short window ashore.",
    category: "Rotterdam city and harbour",
    badge: "harbour-focus",
    tagline: "See Rotterdam from the water — an easy port-day choice.",
    duration: "1 Hour 15 Minutes",
    pace: "Relaxed",
    groupType: "Standard",
    activityLevel: "Easy",
    experienceStyle: "Scenic",
    foodBeverage: "Not included (per supplier)",
    locations: ["Parkhaven", "Rotterdam harbour", "Maas waterfront"],
    bestFor:
      "Passengers who want a low-effort orientation of the working harbour and modern skyline without committing to a half-day coach tour",
    overview:
      "A compact harbour sightseeing cruise that puts Rotterdam's bridges, quays and skyline in context from the water — useful when you want atmosphere more than museum time.",
    body: [
      "Rotterdam's story is inseparable from its port. This short cruise is built around that perspective: warehouses, bridges and the rebuilt city centre read differently when you see them from the river rather than from a coach window.",
      "Expect a guided or narrated run through active harbour scenery rather than a long walking loop. It suits guests who prefer sitting and watching to covering ground on foot, and it leaves room in the day for an independent stroll afterward if your ship schedule allows.",
      "Getting to the departure point typically involves a short water-taxi hop toward Parkhaven. That transfer is usually arranged separately and is not part of the cruise fare — budget roughly €5 each way and a little queue time, and confirm the exact meeting instructions on your e-ticket.",
    ],
    highlights: [
      "Harbour and skyline views from the water rather than another city walking circuit",
      "Compact runtime that fits short calls or a morning-or-afternoon slot",
      "Easy activity level for guests who want scenery without a strenuous pace",
      "ADA-accessible boarding with supplier caveats — confirm needs before booking",
    ],
    included: [
      "Harbour sightseeing cruise as described by the supplier",
      "Onboard commentary or narration per the supplier itinerary",
    ],
    notIncluded: [
      "Water taxi between the cruise area and Parkhaven (typically ~10–15 minutes; expect around €5 each way — confirm on the day)",
      "Food and drink",
      "Any optional purchases ashore before or after the cruise",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Confirm your water-taxi meeting point and timing from the e-ticket — do not assume the cruise boards beside the ship",
      "Bring a light layer; harbour wind can feel cooler than the city streets",
      "If you need step-free access, contact the supplier in advance — accessibility is offered with caveats",
    ],
    faqs: [
      {
        question: "Does the tour start at the cruise terminal?",
        answer:
          "Not necessarily. Many guests reach the cruise via a short water-taxi transfer toward Parkhaven. Follow the meeting instructions on your e-ticket rather than assuming boarding is pier-side.",
      },
      {
        question: "Is the water taxi included?",
        answer:
          "No. The water-taxi hop is typically separate from the cruise fare. Allow roughly €5 each way and a little buffer for queues, and confirm current details with the supplier.",
      },
      {
        question: "Is this suitable for guests with limited mobility?",
        answer:
          "The supplier lists ADA-accessible boarding with caveats. Share your requirements when booking and verify boarding assistance for your sailing date.",
      },
    ],
    relatedExcursionSlugs: [
      "rotterdam-bites-and-sights-foodie-walk",
      "private-rotterdam-at-your-pace",
      "private-dutch-icons-kinderdijk-delft-hague",
    ],
    featured: true,
    supplier: {
      ...SEG_SUPPLIER,
      name: "Rotterdam Sightseeing Cruise",
      url: "https://www.shoreexcursionsgroup.com/tour/rotterdam-sightseeing-cruise/eurdharborculture",
      productId: "eurdharborculture",
    },
    imageKey: "coast",
    cruiseSuitability: "Works well for short calls or as a low-commitment first activity ashore.",
    whyRecommend:
      "Gives an instant sense of Rotterdam's harbour identity without using up a full half-day.",
    planningCaveat:
      "Factor water-taxi timing into your all-aboard buffer — the transfer is short but not instantaneous.",
    suitabilityLabel: "Easy · Scenic · Near-harbour",
    ctaLabel: "Check harbour cruise availability",
  },

  {
    slug: "rotterdam-bites-and-sights-foodie-walk",
    title: "Rotterdam Bites and City Sights",
    seoTitle: "Rotterdam Foodie Walk & City Sights Shore Excursion",
    metaDescription:
      "A small-group food and city walking tour through Rotterdam with tastings included — plan a short taxi to the meeting point.",
    category: "Food and local culture",
    badge: "food-culture",
    tagline: "Local flavours and city landmarks on foot, with food built into the walk.",
    duration: "4 Hours",
    pace: "Moderate",
    groupType: "Small",
    activityLevel: "Moderate",
    experienceStyle: "Walking",
    foodBeverage: "Food included (per supplier)",
    locations: ["Rotterdam centre", "Market halls and neighbourhoods as per itinerary"],
    bestFor:
      "Travellers who want to eat and explore in one outing rather than booking a separate lunch stop",
    overview:
      "A small-group walking tour that pairs Rotterdam's contemporary city fabric with tasting stops, so the day feels like a neighbourhood introduction rather than a checklist of monuments.",
    body: [
      "Rotterdam rewards walking: postwar streetscapes, market culture and harbour-edge neighbourhoods sit close enough that a food-forward route can cover real ground without a coach.",
      "This itinerary leans on tastings and local stops rather than a sit-down restaurant marathon. Expect a moderate walking pace between venues, with time to listen as much as to eat.",
      "A short taxi ride — often around ten minutes — is commonly needed to reach the meeting point and is usually not included. Confirm the exact rendezvous on your e-ticket and keep small change or a card ready for the transfer.",
    ],
    highlights: [
      "Food included as part of the walking circuit",
      "Small-group format suited to questions and flexible pacing",
      "City sights woven between tasting stops",
      "Four-hour window that still leaves evening ship time for many calls",
    ],
    included: [
      "Guided small-group walking tour",
      "Food tastings as listed by the supplier",
    ],
    notIncluded: [
      "Taxi or other transfer to the meeting point (often ~10 minutes; not included)",
      "Additional drinks or purchases beyond the included tastings",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear comfortable walking shoes — this is a genuine city stroll, not a coach tour with short photo stops",
      "Mention dietary requirements when booking; inclusions vary by stop",
      "Budget time and fare for the short taxi to the meeting point",
    ],
    faqs: [
      {
        question: "Is lunch a full restaurant meal?",
        answer:
          "The supplier frames this as a foodie walk with tastings included. Treat it as a guided tasting circuit rather than a single plated lunch unless your confirmation says otherwise.",
      },
      {
        question: "How do I reach the start point from the ship?",
        answer:
          "Many guests use a short taxi (often about ten minutes). The transfer is typically not included — follow the meeting details on your e-ticket.",
      },
      {
        question: "Is this a large coach group?",
        answer:
          "No. It is listed as a small-group walking experience, which generally means a more intimate pace than a standard coach excursion.",
      },
    ],
    relatedExcursionSlugs: [
      "private-rotterdam-bites-and-sights",
      "rotterdam-breweries-and-water-taxi",
      "rotterdam-harbour-sightseeing-cruise",
    ],
    featured: true,
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/rotterdam-bites-and-sights-foodie-walk/eurdhikefood",
      productId: "eurdhikefood",
    },
    imageKey: "food",
    cruiseSuitability: "Best when you have a solid half-day ashore and can walk steadily between stops.",
    whyRecommend: "Combines orientation and tasting so you learn the city while you eat.",
    planningCaveat: "Do not skip the taxi/buffer to the meeting point when reverse-planning from all-aboard.",
    suitabilityLabel: "Small group · Walking · Food included",
    ctaLabel: "Check foodie walk availability",
  },

  {
    slug: "rotterdam-breweries-and-water-taxi",
    title: "Rotterdam Breweries and Water Taxi Adventure",
    seoTitle: "Rotterdam Brewery Tour & Water Taxi Shore Excursion",
    metaDescription:
      "Sample Rotterdam's craft beer scene with water-taxi hops between stops — adults-only, moderate pace, not suited to mobility restrictions.",
    category: "Food and local culture",
    badge: "food-culture",
    tagline: "Craft beer, water-taxi hops and a social afternoon on the Maas.",
    duration: "4 Hours",
    pace: "Moderate",
    groupType: "Small",
    activityLevel: "Moderate",
    experienceStyle: "Culinary",
    foodBeverage: "Beers and snacks as listed by the supplier",
    locations: ["Rotterdam harbour", "Local breweries per itinerary"],
    bestFor:
      "Adult travellers who want a sociable, beer-focused afternoon with short water-taxi links between venues",
    overview:
      "A small-group culinary outing that uses water taxis to stitch together brewery visits, keeping the harbour in play between tastings.",
    body: [
      "Rotterdam's brewery culture sits naturally beside its waterways. This tour uses short water-taxi legs to move between stops, so the afternoon feels tied to the harbour rather than to a single neighbourhood street.",
      "Expect a moderate pace with standing, boarding and walking between venues. It is designed as an adults-only experience; alcohol service follows the supplier's age rules.",
      "Guests with mobility restrictions should look elsewhere — boarding water taxis and navigating brewery spaces is not a gentle option. Confirm the exact meeting point from your e-ticket before you leave the terminal area.",
    ],
    highlights: [
      "Water-taxi hops between brewery stops",
      "Small-group social format",
      "Focus on local craft beer rather than a generic city highlights coach",
      "Four-hour runtime suited to many Rotterdam call lengths",
    ],
    included: [
      "Guided small-group brewery itinerary",
      "Water-taxi transfers between listed stops (per supplier)",
      "Beers and snacks as described on the booking page",
    ],
    notIncluded: [
      "Additional drinks beyond the included tastings",
      "Transport not specified on your confirmation",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Guests must be 18+; bring ID if you look close to the minimum age",
      "Wear shoes you can walk and board boats in comfortably",
      "This is not suitable if you have significant mobility limitations",
    ],
    faqs: [
      {
        question: "Is this tour adults only?",
        answer:
          "Yes. The experience is listed for guests 18 and over because of the alcohol focus. Check the supplier page for the exact age policy on your date.",
      },
      {
        question: "Can I join with limited mobility?",
        answer:
          "No. Water-taxi boarding and brewery layouts make this a poor fit for mobility restrictions. Consider a private city tour with clearer access notes instead.",
      },
      {
        question: "Will I get a full meal?",
        answer:
          "Plan on beers and snacks rather than a plated dinner. If you need a substantial meal, eat before or after the tour.",
      },
    ],
    relatedExcursionSlugs: [
      "private-rotterdam-breweries-water-taxi",
      "rotterdam-bites-and-sights-foodie-walk",
      "rotterdam-harbour-sightseeing-cruise",
    ],
    featured: false,
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/rotterdam-breweries-and-water-taxi-adventure/eurdboatabeer",
      productId: "eurdboatabeer",
    },
    imageKey: "coast",
    cruiseSuitability: "Choose this when you want a social half-day and can move easily between boats and venues.",
    whyRecommend: "Links Rotterdam's harbour transport culture with its craft-beer scene.",
    planningCaveat: "Alcohol and boat boarding mean this is not a family or accessibility-first option.",
    suitabilityLabel: "18+ · Small group · Culinary",
    ctaLabel: "Check brewery tour availability",
  },

  {
    slug: "e-bike-rotterdam-countryside",
    title: "E-Bike Rotterdam Countryside",
    seoTitle: "E-Bike Rotterdam Countryside Shore Excursion",
    metaDescription:
      "Ride e-bikes through the countryside around Rotterdam on a small-group outing that leaves from the cruise ship pier.",
    category: "Active experiences",
    badge: "active-experience",
    tagline: "Leave the pier on two wheels and see the green edges of the city.",
    duration: "4 Hours 30 Minutes",
    pace: "Moderate",
    groupType: "Small",
    activityLevel: "Moderate",
    experienceStyle: "Bicycling",
    foodBeverage: "Not included unless stated on your confirmation",
    locations: ["Rotterdam cruise pier area", "Countryside routes per itinerary"],
    bestFor:
      "Active guests who want fresh air and polder scenery without committing to a full-day coach tour",
    overview:
      "A small-group e-bike ride into the countryside around Rotterdam, starting from the cruise ship pier so you spend less time transferring and more time on the bike.",
    body: [
      "Beyond the skyline, Rotterdam sits against classic Dutch green space — dykes, farmland and quiet paths that feel a world away from Wilhelminapier within a short ride.",
      "E-bikes flatten the effort so a moderate rider can cover more ground, but this is still a genuine outdoor activity: helmets, weather and road sense matter. Follow the guide's pacing and stay aware of local cycle etiquette.",
      "The supplier lists departure from the cruise ship pier, which simplifies logistics compared with city-centre rendezvous points. Still confirm the exact pier-side meeting spot on your e-ticket, especially on multi-ship days.",
    ],
    highlights: [
      "Leaves from the cruise ship pier",
      "E-bike assist for countryside distances",
      "Small-group riding with a guide",
      "About four and a half hours — a solid half-day active slot",
    ],
    included: [
      "E-bike hire for the tour duration (per supplier)",
      "Guided small-group countryside route",
      "Pier-area meeting as described on the booking page",
    ],
    notIncluded: [
      "Meals and drinks unless your confirmation lists them",
      "Personal insurance beyond the supplier's stated cover",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear layered clothing suitable for wind and possible light rain",
      "Closed shoes are essential; avoid loose scarves that catch in wheels",
      "If you have not ridden in years, say so when booking — e-assist helps but balance still matters",
    ],
    faqs: [
      {
        question: "Do I need to be an experienced cyclist?",
        answer:
          "You should be comfortable on a bicycle and able to follow a group at a moderate pace. E-assist reduces effort, but it is not a leisurely stroll.",
      },
      {
        question: "Where does the tour meet?",
        answer:
          "The supplier lists departure from the cruise ship pier. Confirm the precise meeting marker on your e-ticket for your sailing date.",
      },
      {
        question: "What happens in poor weather?",
        answer:
          "Outdoor bike tours can be weather-dependent. Check the supplier's weather and cancellation notes on the booking page before you travel.",
      },
    ],
    relatedExcursionSlugs: [
      "private-rotterdam-at-your-pace",
      "private-dutch-icons-kinderdijk-delft-hague",
      "rotterdam-harbour-sightseeing-cruise",
    ],
    featured: false,
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/ebike-around-rotterdam-countryside/eurdpvtcntrysbiketr",
      productId: "eurdpvtcntrysbiketr",
    },
    imageKey: "scenic",
    cruiseSuitability: "Best for guests who want an active half-day and can ride confidently.",
    whyRecommend: "Shows a quieter, greener Rotterdam that harbour walks alone cannot deliver.",
    planningCaveat: "Build return buffer after a countryside ride — do not cut timing fine to all-aboard.",
    suitabilityLabel: "Active · E-bike · Leaves from pier",
    ctaLabel: "Check e-bike tour availability",
  },

  {
    slug: "private-dutch-icons-kinderdijk-delft-hague",
    title: "Dutch Icons: Kinderdijk, Delft and The Hague",
    seoTitle: "Private Kinderdijk, Delft & The Hague Tour from Rotterdam",
    metaDescription:
      "Private full-day tour from Rotterdam covering UNESCO Kinderdijk, Delft and The Hague, with lunch included and pier departure.",
    category: "Delft, The Hague and Gouda",
    badge: "rotterdam-essential",
    tagline: "Three Dutch icons in one private day — windmills, Delft and The Hague.",
    duration: "8 Hours",
    pace: "Moderate",
    groupType: "Private",
    activityLevel: "Moderate",
    experienceStyle: "Private touring",
    foodBeverage: "Lunch included (per supplier)",
    locations: ["Kinderdijk", "Delft", "The Hague", "Rotterdam cruise pier"],
    bestFor:
      "First-time visitors who want Kinderdijk plus classic city stops without joining a large coach group",
    overview:
      "A private full-day circuit linking UNESCO Kinderdijk with Delft and The Hague, leaving from the cruise pier so your group controls the pacing within the supplier's eight-hour framework.",
    body: [
      "Kinderdijk's windmills are the emotional centre of many Rotterdam port days — a UNESCO landscape that still needs road time and walking among the mills. Pairing it with Delft and The Hague turns the outing into a broader Dutch highlights day rather than a single-site dash.",
      "Because the tour is private, you can linger where your group cares most, within the overall duration and traffic realities of South Holland. Lunch is included per the supplier, which simplifies planning on a long day.",
      "Expect a moderate activity level with walking at each stop. Confirm the pier meeting point from your e-ticket and reverse-plan from all-aboard with a generous buffer — eight hours ashore still needs disciplined timing.",
    ],
    highlights: [
      "UNESCO Kinderdijk on a private itinerary",
      "Delft and The Hague combined in one day",
      "Lunch included per the supplier",
      "Leaves from the cruise pier",
    ],
    included: [
      "Private vehicle and driver/guide arrangement as listed by the supplier",
      "Visits to Kinderdijk, Delft and The Hague per the itinerary",
      "Lunch as described on the booking page",
    ],
    notIncluded: [
      "Optional entrance fees not listed as included",
      "Personal purchases and extra drinks",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Agree priority stops with your group before the day — three sites means trade-offs",
      "Wear shoes suitable for paths around the Kinderdijk mills",
      "Keep an eye on the clock after The Hague; return traffic toward Rotterdam can slow",
    ],
    faqs: [
      {
        question: "Is Kinderdijk definitely included?",
        answer:
          "Yes — the itinerary is built around UNESCO Kinderdijk together with Delft and The Hague. Exact time at each site depends on traffic and your group's pace.",
      },
      {
        question: "Is lunch a formal restaurant sitting?",
        answer:
          "Lunch is included per the supplier. Check your confirmation for the style of meal and any dietary notes you should send ahead.",
      },
      {
        question: "Does the tour leave from the ship?",
        answer:
          "The supplier lists departure from the cruise pier. Confirm the precise meeting instructions on your e-ticket.",
      },
    ],
    relatedExcursionSlugs: [
      "private-rotterdam-kinderdijk-at-your-pace",
      "private-rotterdam-delft-canal-cruise",
      "private-rotterdam-gouda-cheese",
    ],
    featured: true,
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/pvt-dutch-icon-kinderdijk-delft-hague-rotterdam/eurdpvtrovisdt",
      productId: "eurdpvtrovisdt",
    },
    imageKey: "scenic",
    cruiseSuitability: "Best for full-day calls with a reliable all-aboard buffer.",
    whyRecommend: "Covers the three names most first-timers ask about, without a large coach group.",
    planningCaveat: "Three stops in eight hours means prioritising — you will not linger endlessly at each.",
    suitabilityLabel: "Private · Full day · Lunch included",
    ctaLabel: "Check Dutch Icons availability",
  },

  {
    slug: "private-rotterdam-delft-canal-cruise",
    title: "Private Rotterdam and Delft with Canal Cruise",
    seoTitle: "Private Rotterdam & Delft Canal Cruise Shore Excursion",
    metaDescription:
      "Private eight-hour exploration of Rotterdam and Delft with a canal cruise, snacks included — walking-focused and not suited to mobility limits.",
    category: "Delft, The Hague and Gouda",
    badge: "private-experience",
    tagline: "Rotterdam and Delft at a private pace, finished with canal time in Delft.",
    duration: "8 Hours",
    pace: "Moderate",
    groupType: "Private",
    activityLevel: "Moderate",
    experienceStyle: "Walking",
    foodBeverage: "Snacks included (per supplier)",
    locations: ["Rotterdam", "Delft", "Delft canals"],
    bestFor:
      "Guests who want architecture and historic Delft with a canal cruise, without Kinderdijk on the same day",
    overview:
      "A private walking-led day linking Rotterdam highlights with Delft, including a canal cruise, snacks on the itinerary, and a pace that assumes you can walk and board comfortably.",
    body: [
      "Delft rewards slow looking: courtyards, canals and compact historic streets that sit a short journey from Rotterdam's modern centre. This private day keeps both cities in play rather than treating Delft as a rushed photo stop.",
      "A canal cruise adds a water-level view of Delft after or between walking segments. Snacks are included per the supplier; plan on light sustenance rather than a long restaurant lunch unless your confirmation says otherwise.",
      "The supplier notes this route is not suited to guests with mobility restrictions. Cobbles, boat boarding and sustained walking come with the territory — choose a different private option if access is a priority.",
    ],
    highlights: [
      "Private itinerary across Rotterdam and Delft",
      "Canal cruise in Delft",
      "Snacks included",
      "Walking-focused day for curious, mobile travellers",
    ],
    included: [
      "Private guiding/vehicle arrangement as listed by the supplier",
      "Delft canal cruise per the itinerary",
      "Snacks as described on the booking page",
    ],
    notIncluded: [
      "Full meals beyond included snacks",
      "Optional museum tickets not listed as included",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear supportive walking shoes for historic streets and boat boarding",
      "If mobility is limited, pick another private tour with clearer access notes",
      "Confirm meeting instructions from your e-ticket before leaving the terminal",
    ],
    faqs: [
      {
        question: "Is Kinderdijk on this itinerary?",
        answer:
          "No. This day focuses on Rotterdam and Delft with a canal cruise. For windmills, see the Kinderdijk-centred private options.",
      },
      {
        question: "Is the canal cruise private?",
        answer:
          "Your touring day is private; the canal boat arrangement follows the supplier's description on the booking page. Check whether you share the boat with others.",
      },
      {
        question: "Can wheelchair users join?",
        answer:
          "The supplier indicates this experience is not appropriate for guests with mobility restrictions. Consider a private tour that explicitly lists accessibility support.",
      },
    ],
    relatedExcursionSlugs: [
      "private-dutch-icons-kinderdijk-delft-hague",
      "private-rotterdam-at-your-pace",
      "private-rotterdam-gouda-cheese",
    ],
    featured: false,
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/private-rotterdam-delft-exploration-canal-cruise/eurdpvtrotdftwlk",
      productId: "eurdpvtrotdftwlk",
    },
    imageKey: "historic",
    cruiseSuitability: "For full-day calls when your group can walk and board boats without assistance.",
    whyRecommend: "Balances rebuilt Rotterdam with historic Delft and puts you on the canals.",
    planningCaveat: "Not a mobility-friendly choice — verify access needs before booking.",
    suitabilityLabel: "Private · Walking · Canal cruise",
    ctaLabel: "Check Delft canal day availability",
  },

  {
    slug: "private-rotterdam-kinderdijk-at-your-pace",
    title: "Private Rotterdam and Kinderdijk at Your Pace",
    seoTitle: "Private Kinderdijk Tour from Rotterdam Cruise Port",
    metaDescription:
      "Private seven-hour Rotterdam and Kinderdijk day using walking and public transport, with Dutch food and drink — collapsible wheelchair friendly notes apply.",
    category: "Kinderdijk and windmills",
    badge: "kinderdijk-focus",
    tagline: "Kinderdijk without the coach herd — private pacing with local food built in.",
    duration: "7 Hours",
    pace: "Relaxed",
    groupType: "Private",
    activityLevel: "Easy",
    experienceStyle: "Walking and public transport",
    foodBeverage: "Dutch food and beverage included (per supplier)",
    locations: ["Rotterdam", "Kinderdijk"],
    bestFor:
      "Guests who want UNESCO Kinderdijk with a gentler, private rhythm and are comfortable mixing walking with public transport",
    overview:
      "A private day shaped around Rotterdam and Kinderdijk, using walking and public transport, with Dutch food and drink included and a more accessible posture than high-intensity walking tours.",
    body: [
      "Not every Kinderdijk day needs a private coach circling three cities. This option keeps the focus tighter: time in Rotterdam, time among the mills, and a private guide to stitch the public-transport legs together.",
      "The activity level is listed as easy relative to long multi-stop days, but you should still expect walking and platform changes. The supplier notes collapsible wheelchair compatibility — confirm your specific chair and assistance needs when booking.",
      "Dutch food and beverage are included per the supplier, which helps on a seven-hour outing. Meeting details still come from your e-ticket; do not assume the day begins at the gangway without checking.",
    ],
    highlights: [
      "UNESCO Kinderdijk with private pacing",
      "Dutch food and beverage included",
      "Walking plus public-transport format",
      "Collapsible wheelchair noted as OK — verify details when booking",
    ],
    included: [
      "Private guide as listed by the supplier",
      "Public-transport legs per the itinerary",
      "Dutch food and beverage as described on the booking page",
    ],
    notIncluded: [
      "Any tickets or extras not listed as included",
      "Personal purchases",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "If using a collapsible wheelchair, contact the supplier before travel with dimensions and assistance needs",
      "Keep your public-transport tickets/passes with the guide's instructions — do not wander off mid-connection",
      "Wind at Kinderdijk can be sharp; bring a layer even in summer",
    ],
    faqs: [
      {
        question: "Is this a private car tour?",
        answer:
          "The day uses walking and public transport with a private guide, rather than a private coach circuit. Read the supplier page for the exact transport mix.",
      },
      {
        question: "How accessible is it?",
        answer:
          "The supplier notes collapsible wheelchairs are OK. That is not a blanket accessibility guarantee — confirm boarding, paths and assistance for your situation.",
      },
      {
        question: "Is food included?",
        answer:
          "Yes. Dutch food and beverage are listed as included. Check your confirmation for timing and any dietary constraints to share ahead.",
      },
    ],
    relatedExcursionSlugs: [
      "private-rotterdam-kinderdijk-highlights-cruise",
      "private-dutch-icons-kinderdijk-delft-hague",
      "private-rotterdam-at-your-pace",
    ],
    featured: true,
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/private-rotterdam-kinderdijk-your-pace/eurdpvtrotkindday",
      productId: "eurdpvtrotkindday",
    },
    imageKey: "scenic",
    cruiseSuitability: "Strong option when Kinderdijk is the priority and you prefer an easier activity grade.",
    whyRecommend: "Keeps the windmills central without forcing a three-city marathon.",
    planningCaveat: "Public-transport connections need punctuality — build buffer before all-aboard.",
    suitabilityLabel: "Private · Easy · Kinderdijk focus",
    ctaLabel: "Check Kinderdijk day availability",
  },

  {
    slug: "private-rotterdam-kinderdijk-highlights-cruise",
    title: "Private Rotterdam Highlights, Walk and Kinderdijk Cruise",
    seoTitle: "Private Rotterdam & Kinderdijk Boat Tour from Cruise Port",
    metaDescription:
      "Private eight-hour Rotterdam highlights walk with a boat transfer to Kinderdijk, snacks included — children 7 and over.",
    category: "Kinderdijk and windmills",
    badge: "kinderdijk-focus",
    tagline: "City highlights on foot, then a boat out to the Kinderdijk mills.",
    duration: "8 Hours",
    pace: "Moderate",
    groupType: "Private",
    activityLevel: "Moderate",
    experienceStyle: "Walking",
    foodBeverage: "Snacks included (per supplier)",
    locations: ["Rotterdam", "Kinderdijk"],
    bestFor:
      "Families and small groups who want both Rotterdam walking time and a boat approach to Kinderdijk",
    overview:
      "A private day that pairs a Rotterdam highlights walk with a boat transfer toward Kinderdijk, snacks included, aimed at guests who can walk at a moderate pace — children from age seven.",
    body: [
      "Arriving at Kinderdijk by water changes the first impression of the mills. This itinerary builds that approach into a private day that also covers Rotterdam walking highlights before or around the boat leg.",
      "Snacks are included; treat them as support for an eight-hour day rather than a substitute for a proper meal unless your confirmation describes otherwise. Children need to be at least seven years old per the supplier.",
      "Moderate walking is part of the design. Confirm meeting instructions from your e-ticket and keep a conservative return buffer — boat schedules and walking segments both eat clock time.",
    ],
    highlights: [
      "Boat transfer toward Kinderdijk",
      "Private Rotterdam highlights walking time",
      "Snacks included",
      "Suitable for children aged 7+",
    ],
    included: [
      "Private guiding as listed by the supplier",
      "Boat transfer to Kinderdijk per the itinerary",
      "Snacks as described on the booking page",
    ],
    notIncluded: [
      "Full meals beyond included snacks",
      "Optional extras not listed as included",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Confirm child ages meet the 7+ requirement before booking",
      "Bring sun and wind protection for both city streets and open mill landscapes",
      "Ask the guide early how return timing works from the boat leg",
    ],
    faqs: [
      {
        question: "Can younger children join?",
        answer:
          "The supplier lists children aged 7 and over. If you are travelling with younger children, choose a different itinerary or confirm exceptions directly with the supplier.",
      },
      {
        question: "Is the Kinderdijk leg by coach?",
        answer:
          "This option includes a boat transfer to Kinderdijk as part of the day. Exact boarding points follow your confirmation.",
      },
      {
        question: "How much walking is there?",
        answer:
          "Expect a moderate walking load in Rotterdam plus time on foot around the mills. Comfortable shoes are essential.",
      },
    ],
    relatedExcursionSlugs: [
      "private-rotterdam-kinderdijk-at-your-pace",
      "private-dutch-icons-kinderdijk-delft-hague",
      "rotterdam-harbour-sightseeing-cruise",
    ],
    featured: false,
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/rotterdam-kinderdijk-city-highlights-walk-cruise/eurdpvtrotterkinder",
      productId: "eurdpvtrotterkinder",
    },
    imageKey: "scenic",
    cruiseSuitability: "Full-day calls with families (7+) who can walk at a moderate pace.",
    whyRecommend: "Combines city context with a memorable water approach to the mills.",
    planningCaveat: "Boat timing is less flexible than a private car — stay with the guide's schedule.",
    suitabilityLabel: "Private · Boat to Kinderdijk · Ages 7+",
    ctaLabel: "Check highlights & cruise availability",
  },

  {
    slug: "private-rotterdam-at-your-pace",
    title: "Private Rotterdam at Your Pace",
    seoTitle: "Private Rotterdam City Tour from the Cruise Port",
    metaDescription:
      "Private four-hour Rotterdam day using walking and public transport, with a meal included and wheelchair-accessible notes from the supplier.",
    category: "Rotterdam city and harbour",
    badge: "best-near-port",
    tagline: "A private half-day in the city — walk, ride transit, eat, and set the pace.",
    duration: "4 Hours",
    pace: "Moderate",
    groupType: "Private",
    activityLevel: "Moderate",
    experienceStyle: "Walking and public transport",
    foodBeverage: "Meal included (per supplier)",
    locations: ["Rotterdam centre", "Harbour-edge districts per itinerary"],
    bestFor:
      "Guests who want Rotterdam itself — not Delft or Kinderdijk — with private guiding and a meal included",
    overview:
      "A private four-hour city immersion using walking and public transport, with a meal included and supplier notes indicating wheelchair accessibility.",
    body: [
      "If your priority is Rotterdam rather than a regional circuit, a focused private half-day is often the clearer choice. You cover architectural landmarks, harbour-edge views and neighbourhood texture without the dilution of three distant stops.",
      "Walking and public transport keep you in the city's own rhythm. A meal is included per the supplier; share dietary needs when you book.",
      "Wheelchair accessibility is noted by the supplier — still confirm vehicle/platform realities and your specific requirements in advance. Meeting points come from the e-ticket, not from assumptions about the gangway.",
    ],
    highlights: [
      "Private four-hour Rotterdam focus",
      "Meal included",
      "Walking and public-transport format",
      "Supplier notes wheelchair accessibility — verify your needs when booking",
    ],
    included: [
      "Private guide as listed by the supplier",
      "Public-transport legs per the itinerary",
      "Meal as described on the booking page",
    ],
    notIncluded: [
      "Attraction tickets not listed as included",
      "Extra drinks or purchases",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Tell the guide your must-see list at the start — four hours goes quickly",
      "If you use a wheelchair, contact the supplier with details before travel",
      "Keep tram/metro etiquette in mind during busy middle-of-day sailings",
    ],
    faqs: [
      {
        question: "Does this include Kinderdijk?",
        answer:
          "No. This is a Rotterdam city day. For windmills, choose one of the Kinderdijk private itineraries.",
      },
      {
        question: "Is it really wheelchair accessible?",
        answer:
          "The supplier lists wheelchair accessibility. Accessibility still depends on your chair, the day's routing and station lifts — confirm before you book.",
      },
      {
        question: "Is a meal included?",
        answer:
          "Yes. A meal is included per the supplier. Check your confirmation for timing and style.",
      },
    ],
    relatedExcursionSlugs: [
      "private-rotterdam-bites-and-sights",
      "rotterdam-harbour-sightseeing-cruise",
      "private-rotterdam-kinderdijk-at-your-pace",
    ],
    featured: false,
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/private-rotterdam-your-pace/eurdpvtrotallday",
      productId: "eurdpvtrotallday",
    },
    imageKey: "city",
    cruiseSuitability: "Ideal when you want the city itself on a shorter private window.",
    whyRecommend: "Avoids overstuffing the day with distant icons when Rotterdam is the point.",
    planningCaveat: "Public transport can be busy on multi-ship days — stay with your guide.",
    suitabilityLabel: "Private · Half day · Meal included",
    ctaLabel: "Check private city tour availability",
  },

  {
    slug: "private-rotterdam-bites-and-sights",
    title: "Private Rotterdam Bites and Sights",
    seoTitle: "Private Rotterdam Foodie Walk Shore Excursion",
    metaDescription:
      "Private four-hour Rotterdam food and sights walk with snacks and beer, wheelchair and stroller accessible notes — alcohol 18+.",
    category: "Food and local culture",
    badge: "food-culture",
    tagline: "Your own foodie walk through Rotterdam — snacks, beer and city texture.",
    duration: "4 Hours",
    pace: "Moderate",
    groupType: "Private",
    activityLevel: "Moderate",
    experienceStyle: "Walking",
    foodBeverage: "Snacks and beer included (per supplier)",
    locations: ["Rotterdam centre", "Food stops per itinerary"],
    bestFor:
      "Small private groups who want a tasting walk with more flexibility than the small-group foodie tour",
    overview:
      "A private version of Rotterdam's bites-and-sights idea: guided walking between tasting stops, snacks and beer included, with supplier notes on wheelchair and stroller access.",
    body: [
      "Private food walks let you ask more questions, skip what you have already tried, and keep the group together at every stop. Rotterdam's contemporary food scene sits close enough to walk if you are comfortable on your feet for a few hours.",
      "Snacks and beer are included per the supplier. Alcohol is for guests 18 and over; bring ID if needed. Stroller and wheelchair accessibility is noted — confirm kerbs, venues and assistance when booking.",
      "As with other city meets, follow the e-ticket for the rendezvous rather than assuming a pier-side start.",
    ],
    highlights: [
      "Private foodie walking format",
      "Snacks and beer included",
      "Wheelchair and stroller accessibility noted by the supplier",
      "Four-hour half-day window",
    ],
    included: [
      "Private guided walking tour",
      "Snacks and beer as described on the booking page",
    ],
    notIncluded: [
      "Additional drinks beyond inclusions",
      "Transfer to the meeting point if required",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Share allergies and dietary limits when you book",
      "Alcohol service is 18+ — plan accordingly for mixed-age families",
      "If using a stroller or wheelchair, verify venue access for your specific route",
    ],
    faqs: [
      {
        question: "How is this different from the small-group foodie walk?",
        answer:
          "The private version is for your party only, which usually means more flexibility on pacing and stops. Inclusions still follow the supplier page for this product.",
      },
      {
        question: "Is beer mandatory?",
        answer:
          "Beer is part of the listed inclusions. Non-drinkers should ask the supplier about soft-drink alternatives when booking.",
      },
      {
        question: "Can we bring a stroller?",
        answer:
          "The supplier notes stroller accessibility. Confirm the day's route if you have a large pram or need step-free venues throughout.",
      },
    ],
    relatedExcursionSlugs: [
      "rotterdam-bites-and-sights-foodie-walk",
      "private-rotterdam-breweries-water-taxi",
      "private-rotterdam-at-your-pace",
    ],
    featured: false,
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/private-rotterdam-bites-and-sights-foodie-walk/eurdpvthikedine",
      productId: "eurdpvthikedine",
    },
    imageKey: "food",
    cruiseSuitability: "Good when your group wants tastings without sharing the guide with strangers.",
    whyRecommend: "Keeps the food focus while giving a private group control of pace.",
    planningCaveat: "Alcohol rules still apply even on a private booking.",
    suitabilityLabel: "Private · Food · 18+ alcohol",
    ctaLabel: "Check private foodie walk availability",
  },

  {
    slug: "private-rotterdam-breweries-water-taxi",
    title: "Private Rotterdam Breweries and Water Taxi",
    seoTitle: "Private Rotterdam Brewery & Water Taxi Shore Excursion",
    metaDescription:
      "Private four-hour Rotterdam brewery outing with water-taxi hops, beers and snacks included — adults 18 and over.",
    category: "Food and local culture",
    badge: "food-culture",
    tagline: "Your own brewery circuit — water taxis, beers and snacks.",
    duration: "4 Hours",
    pace: "Moderate",
    groupType: "Private",
    activityLevel: "Moderate",
    experienceStyle: "Culinary",
    foodBeverage: "Beers and snacks included (per supplier)",
    locations: ["Rotterdam harbour", "Breweries per itinerary"],
    bestFor:
      "Adult private groups who want the brewery-and-water-taxi format without a shared small-group departure",
    overview:
      "A private adults-only brewery afternoon using water taxis between stops, with beers and snacks included for your party only.",
    body: [
      "The private format suits celebration groups and friends who want the same harbour-and-beer energy as the small-group tour, without sharing tasting time with strangers.",
      "Expect boarding water taxis, standing at venues and a sociable drinking pace. Guests must be 18 or over. Mobility-challenging segments still apply — this is not the accessibility-first city walk.",
      "Confirm meeting instructions from your e-ticket and keep all-aboard timing conservative after a tasting-heavy afternoon.",
    ],
    highlights: [
      "Private brewery itinerary",
      "Water-taxi hops between stops",
      "Beers and snacks included",
      "Adults 18+",
    ],
    included: [
      "Private guided brewery outing",
      "Water-taxi transfers per the itinerary",
      "Beers and snacks as described on the booking page",
    ],
    notIncluded: [
      "Extra drinks beyond inclusions",
      "Gratuities",
      "Any transport not listed on your confirmation",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Bring ID for age checks",
      "Pace your tastings — you still need a clear head for the return to the ship",
      "Wear shoes suitable for boat decks and brewery floors",
    ],
    faqs: [
      {
        question: "Is this suitable for teenagers?",
        answer:
          "No. The experience is listed for guests 18 and over because of the alcohol focus.",
      },
      {
        question: "Do we get a private water taxi?",
        answer:
          "Your tour is private; water-taxi arrangements follow the supplier's description. Check whether boats are exclusive to your group or shared.",
      },
      {
        question: "How does this differ from the small-group brewery tour?",
        answer:
          "You travel as a private party. The theme — breweries linked by water taxi — is similar; pacing and group dynamics are yours alone.",
      },
    ],
    relatedExcursionSlugs: [
      "rotterdam-breweries-and-water-taxi",
      "private-rotterdam-bites-and-sights",
      "rotterdam-harbour-sightseeing-cruise",
    ],
    featured: false,
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/private-rotterdam-breweries-water-taxi-adventure/eurdpvtboatbeer",
      productId: "eurdpvtboatbeer",
    },
    imageKey: "coast",
    cruiseSuitability: "Adult groups wanting a private social half-day on the water and in breweries.",
    whyRecommend: "Same harbour-beer idea as the shared tour, with a private group dynamic.",
    planningCaveat: "Not for mobility-restricted guests or anyone under 18.",
    suitabilityLabel: "Private · 18+ · Breweries",
    ctaLabel: "Check private brewery tour availability",
  },

  {
    slug: "private-rotterdam-gouda-cheese",
    title: "Private Rotterdam Highlights and Gouda Cheese Experience",
    seoTitle: "Private Gouda Cheese Tour from Rotterdam Cruise Port",
    metaDescription:
      "Private eight-hour Rotterdam and Gouda day with snacks included — Gouda experience entrance about €16 not included; children 7+.",
    category: "Delft, The Hague and Gouda",
    badge: "private-experience",
    tagline: "Rotterdam context plus Gouda's cheese heritage on a private full day.",
    duration: "8 Hours",
    pace: "Moderate",
    groupType: "Private",
    activityLevel: "Moderate",
    experienceStyle: "Walking",
    foodBeverage: "Snacks included (per supplier)",
    locations: ["Rotterdam", "Gouda"],
    bestFor:
      "Travellers who want a cheese-focused regional day with Rotterdam highlights, and are happy to pay a separate Gouda experience entrance",
    overview:
      "A private walking-oriented day linking Rotterdam highlights with Gouda, snacks included, while the Gouda experience entrance fee remains separate — typically around €16 per the supplier notes.",
    body: [
      "Gouda is close enough for a cruise-day outing yet distinct from Delft and The Hague. This private itinerary keeps Rotterdam in the morning or framing narrative, then shifts to Gouda's historic centre and cheese culture.",
      "Snacks are included; the Gouda experience entrance is not. Budget roughly €16 per person for that entrance unless your confirmation states otherwise, and confirm current pricing on the supplier page.",
      "Children need to be at least seven. Moderate walking is expected in both cities. Meeting points come from the e-ticket — plan return timing carefully on an eight-hour regional day.",
    ],
    highlights: [
      "Private Rotterdam and Gouda circuit",
      "Cheese-focused Gouda experience (entrance not included)",
      "Snacks included",
      "Children aged 7+",
    ],
    included: [
      "Private guiding/vehicle arrangement as listed by the supplier",
      "Rotterdam and Gouda itinerary segments",
      "Snacks as described on the booking page",
    ],
    notIncluded: [
      "Gouda experience entrance fee (commonly listed around €16 — confirm on booking)",
      "Full meals beyond included snacks",
      "Gratuities and personal purchases",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Carry cash or card for the Gouda experience entrance",
      "Confirm child ages meet the 7+ rule",
      "Wear comfortable shoes for historic centre walking",
    ],
    faqs: [
      {
        question: "Is the cheese experience entrance included?",
        answer:
          "No. The supplier typically lists the Gouda experience entrance as not included — often around €16. Confirm the current amount on your booking page.",
      },
      {
        question: "Can younger children join?",
        answer:
          "The tour is listed for children aged 7 and over. Check with the supplier if you are travelling with younger children.",
      },
      {
        question: "Is this mainly a shopping trip?",
        answer:
          "It is a guided highlights and cheese-experience day, not a free-time shopping transfer. Personal purchases are optional and separate.",
      },
    ],
    relatedExcursionSlugs: [
      "private-dutch-icons-kinderdijk-delft-hague",
      "private-rotterdam-delft-canal-cruise",
      "private-rotterdam-bites-and-sights",
    ],
    featured: false,
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/pvt-rotterdam-historical-highlights-gouda-cheese/eurdpvtrotgoudwlk",
      productId: "eurdpvtrotgoudwlk",
    },
    imageKey: "food",
    cruiseSuitability: "Full-day calls for groups keen on cheese heritage beyond the usual Delft loop.",
    whyRecommend: "Adds Gouda as a distinct alternative to the Kinderdijk–Delft–Hague circuit.",
    planningCaveat: "Budget separately for the Gouda experience entrance and confirm the amount when booking.",
    suitabilityLabel: "Private · Gouda · Ages 7+",
    ctaLabel: "Check Gouda day availability",
  },
];

export function getExcursionBySlug(slug: string): ExcursionPage | undefined {
  return excursions.find((excursion) => excursion.slug === slug);
}

export function getAllExcursionSlugs(): string[] {
  return excursions.map((excursion) => excursion.slug);
}

export function getFeaturedExcursions(): ExcursionPage[] {
  return excursions.filter((excursion) => excursion.featured);
}

export function getExcursionsByCategory(category: string): ExcursionPage[] {
  return excursions.filter((excursion) => excursion.category === category);
}

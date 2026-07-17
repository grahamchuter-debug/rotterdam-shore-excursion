export interface SiteImage {
  src: string;
  alt: string;
  base: string;
}

const B = "/images";

function img(base: string, alt: string): SiteImage {
  return { base, src: `${B}/${base}.jpg`, alt };
}

export const siteImages = {
  hero: img("hero-home", "Rotterdam harbour and skyline — the view that anchors a Rotterdam cruise day"),
  ogDefault: img("og-default", "Rotterdam cruise planning — harbour, Kinderdijk and Dutch city day trips"),
  logo: {
    base: "logo-mark",
    src: `${B}/logo-mark.svg`,
    alt: "Rotterdam Shore Excursion",
  },
  port: img("cruise-port", "Wilhelminakade cruise terminal on Wilhelminapier — gateway to Rotterdam ashore"),
} as const;

/**
 * Subject buckets for editorial pages and cards.
 * Keys match planned photography subjects; base filenames feed `npm run download:images`.
 */
export const subjectImages: Record<string, SiteImage> = {
  "hero-home": img("hero-home", "Rotterdam harbour and Erasmus Bridge skyline from the water"),
  "og-default": img("og-default", "Rotterdam cruise day — modern city, harbour and Dutch icons"),
  "cruise-port": img("cruise-port", "Cruise Terminal Rotterdam at Wilhelminakade on Wilhelminapier"),
  "erasmus-bridge": img("erasmus-bridge", "Erasmus Bridge spanning the Nieuwe Maas in Rotterdam"),
  markthal: img("markthal", "Markthal Rotterdam — food hall and modern architecture landmark"),
  "cube-houses": img("cube-houses", "Cube Houses (Kubuswoningen) in central Rotterdam"),
  harbour: img("harbour", "Rotterdam harbour quays, ships and working port waterfront"),
  kinderdijk: img("kinderdijk", "Kinderdijk windmills in the classic Dutch polder landscape"),
  delft: img("delft", "Historic canal street and townscape in Delft"),
  "the-hague": img("the-hague", "The Hague cityscape and civic architecture"),
  gouda: img("gouda", "Gouda historic centre and market-square atmosphere"),
  food: img("food", "Rotterdam food culture — market stalls and tasting stops"),
  cycling: img("cycling", "Cycling the Dutch countryside near Rotterdam"),
  architecture: img("architecture", "Modern Rotterdam architecture and skyline"),
  walking: img("walking", "Walking from Wilhelminapier into central Rotterdam"),
  private: img("private", "Private Rotterdam shore excursion from the cruise port"),
  compare: img("compare", "Comparing Rotterdam cruise excursion options from the port"),
  historic: img("historic", "Classic Dutch historic streets near Rotterdam — Delft and beyond"),
  /** Harbour water / Maas views */
  coast: img("harbour", "Rotterdam harbour water and skyline from the Maas"),
  /** Countryside / polder scenery */
  scenic: img("scenic", "Dutch countryside and polder scenery near Rotterdam"),
  // Legacy aliases so transitional references keep resolving
  port: img("cruise-port", "Cruise Terminal Rotterdam at Wilhelminakade"),
  city: img("architecture", "Modern Rotterdam city skyline"),
  highlights: img("erasmus-bridge", "Rotterdam highlights from the cruise port"),
  photography: img("erasmus-bridge", "Photography viewpoints across Rotterdam harbour"),
  history: img("kinderdijk", "Classic Dutch heritage near Rotterdam"),
  family: img("walking", "Families exploring Rotterdam from a cruise ship"),
  wine: img("food", "Food and drink culture in Rotterdam"),
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "rotterdam-harbour-sightseeing-cruise": "harbour",
  "rotterdam-bites-and-sights-foodie-walk": "food",
  "rotterdam-breweries-and-water-taxi": "harbour",
  "e-bike-rotterdam-countryside": "cycling",
  "private-dutch-icons-kinderdijk-delft-hague": "kinderdijk",
  "private-rotterdam-delft-canal-cruise": "delft",
  "private-rotterdam-kinderdijk-at-your-pace": "kinderdijk",
  "private-rotterdam-kinderdijk-highlights-cruise": "harbour",
  "private-rotterdam-at-your-pace": "architecture",
  "private-rotterdam-bites-and-sights": "food",
  "private-rotterdam-breweries-water-taxi": "harbour",
  "private-rotterdam-gouda-cheese": "gouda",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "highlights");
}

export const excursionsHubImage = pick("architecture");

const highlightImageKeys: Record<string, string> = {
  kinderdijk: "kinderdijk",
  delft: "delft",
  "the-hague": "the-hague",
  gouda: "gouda",
  "markthal-and-architecture": "markthal",
  "rotterdam-harbour": "harbour",
};

const comparisonImageKeys: Record<string, string> = {
  "rotterdam-or-kinderdijk": "compare",
  "kinderdijk-or-delft-from-rotterdam": "compare",
  "should-you-visit-amsterdam-from-rotterdam-cruise-port": "compare",
  "private-or-group-rotterdam-shore-excursions": "private",
};

export function getComparisonImage(slug: string): SiteImage {
  return pick(comparisonImageKeys[slug] ?? "compare");
}

export function getHighlightImage(slug: string): SiteImage {
  return pick(highlightImageKeys[slug] ?? "highlights");
}

export function getGuideImage(key: string): SiteImage {
  return pick(key in subjectImages ? key : "architecture");
}

export function getHotelImage(_slug: string): SiteImage {
  return pick("architecture");
}

export function getTransferImage(_slug: string): SiteImage {
  return pick("harbour");
}

export const guidesHubImage = pick("architecture");

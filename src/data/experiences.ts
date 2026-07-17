import type { ExperienceCard } from "./types";

/**
 * Four core experience pathways for Rotterdam — see AGENTS.md "Experience pillars".
 * These drive the homepage experience selector. `imageKey` must match a key in
 * `subjectImages` (src/lib/images.ts).
 */
export const experiencePaths: ExperienceCard[] = [
  {
    slug: "modern-rotterdam",
    title: "Modern Rotterdam",
    description:
      "Architecture, Markthal, Cube Houses and the rebuilt centre — a city day that starts almost at the pier.",
    href: "/independent-rotterdam/",
    cta: "Explore the City",
    imageKey: "architecture",
  },
  {
    slug: "harbour-and-waterways",
    title: "Harbour and Waterways",
    description:
      "See bridges, quays and the working port from the water — Rotterdam’s maritime identity in one easy outing.",
    href: "/rotterdam-harbour-cruise-guide/",
    cta: "See Rotterdam from the Water",
    imageKey: "harbour",
  },
  {
    slug: "windmills-and-dutch-icons",
    title: "Windmills and Dutch Icons",
    description:
      "Kinderdijk windmills, Delft, The Hague and Gouda — classic Holland day trips that need real transport planning.",
    href: "/kinderdijk-from-rotterdam-cruise-port/",
    cta: "Discover Classic Holland",
    imageKey: "kinderdijk",
  },
  {
    slug: "food-cycling-and-private",
    title: "Food, Cycling and Private",
    description:
      "Food walks, e-bike countryside, brewery hops and private touring shaped around your hours ashore.",
    href: "/rotterdam-food-tour-guide/",
    cta: "Find Your Experience",
    imageKey: "food",
  },
];

export function getExperiencePathBySlug(slug: string): ExperienceCard | undefined {
  return experiencePaths.find((p) => p.slug === slug);
}

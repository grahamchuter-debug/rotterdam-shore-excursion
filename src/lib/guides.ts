import { getHighlightBySlug, getAllHighlightSlugs } from "@/data/highlights";
import { getGuidePageBySlug, getAllGuidePageSlugs } from "@/data/guides";
import type { AttractionPage, GuidePage } from "@/data/types";

/**
 * `/guides/[slug]` serves attraction highlight pages (Kinderdijk, Delft, The Hague,
 * Gouda, Markthal/architecture, harbour). Substantive GuidePage entries in
 * `@/data/guides` each have dedicated root-level routes.
 */
export type GuideEntry = { kind: "highlight"; page: AttractionPage };

export function getGuideBySlug(slug: string): GuideEntry | undefined {
  const highlight = getHighlightBySlug(slug);
  if (highlight) return { kind: "highlight", page: highlight };
  return undefined;
}

export function getAllGuideSlugs(): string[] {
  return getAllHighlightSlugs();
}

/** Root-level GuidePage lookup — used by flat `/[guide-slug]/ routes. */
export function getRootGuidePage(slug: string): GuidePage | undefined {
  return getGuidePageBySlug(slug);
}

export function getAllRootGuideSlugs(): string[] {
  return getAllGuidePageSlugs();
}

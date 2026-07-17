import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { absoluteUrl } from "@/lib/paths";
import { getAllExcursionSlugs } from "@/data/excursions";
import { getAllGuideSlugs } from "@/lib/guides";
import { getAllGuidePageSlugs } from "@/data/guides";
import { getAllComparisonSlugs } from "@/data/comparisons";
import { getAllSchedulePortSlugs, getVerifiedMonthKeys } from "@/data/schedules";
import { SCHEDULE_YEARS, portYearPath, portMonthPath } from "@/lib/schedule-utils";
import { SIGNATURE_EXPERIENCE_PATH } from "@/data/signature-experience";

export const dynamic = "force-static";

const NOINDEX_PATHS = new Set(["/privacy", "/terms"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    "/",
    "/shore-excursions",
    "/guides",
    "/cruise-planner",
    "/ship-schedules",
    "/rotterdam-cruise-schedule",
    "/rotterdam-cruise-port-guide",
    "/faq",
    "/enquire",
    "/about",
    SIGNATURE_EXPERIENCE_PATH,
    "/wow-collection",
    "/compare",
  ];

  const dynamicPages = [
    ...getAllExcursionSlugs().map((s) => `/shore-excursions/${s}`),
    ...getAllGuideSlugs().map((s) => `/guides/${s}`),
    ...getAllGuidePageSlugs().map((s) => `/${s}`),
    ...getAllComparisonSlugs().map((s) => `/compare/${s}`),
    ...getAllSchedulePortSlugs().map((s) => `/ship-schedules/${s}`),
    ...getAllSchedulePortSlugs().flatMap((s) => SCHEDULE_YEARS.map((y) => portYearPath(s, y))),
    ...getAllSchedulePortSlugs().flatMap((s) => getVerifiedMonthKeys(s).map((mk) => portMonthPath(s, mk))),
  ];

  const all = [...staticPages, ...dynamicPages].filter((path) => !NOINDEX_PATHS.has(path));

  return all.map((path) => {
    const url = absoluteUrl(SITE.url, path).replace(/\/?$/, "/");
    return {
      url,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.7,
    };
  });
}

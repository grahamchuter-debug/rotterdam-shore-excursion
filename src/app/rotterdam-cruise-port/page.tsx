import { notFound } from "next/navigation";
import { getGuidePageBySlug } from "@/data/guides";
import { GuideArticle } from "@/components/GuideArticle";
import { guideRootPageMetadata } from "@/lib/seo";

const SLUG = "rotterdam-cruise-port";

export function generateMetadata() {
  const page = getGuidePageBySlug(SLUG);
  if (!page) return {};
  return guideRootPageMetadata(page.slug, page.seoTitle, page.metaDescription, page.imageKey);
}

export default function Page() {
  const page = getGuidePageBySlug(SLUG);
  if (!page) notFound();

  return (
    <GuideArticle
      page={page}
      hubLabel="Rotterdam Planning Guides"
      getRelatedPage={(slug) => getGuidePageBySlug(slug)}
    />
  );
}

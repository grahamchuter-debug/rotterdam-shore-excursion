import { notFound } from "next/navigation";
import { highlightPageMetadata } from "@/lib/seo";
import { HighlightArticle } from "@/components/HighlightArticle";
import { getGuideBySlug, getAllGuideSlugs } from "@/lib/guides";

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getGuideBySlug(slug);
  if (!entry) return {};
  return highlightPageMetadata(slug, entry.page.seoTitle, entry.page.metaDescription);
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getGuideBySlug(slug);
  if (!entry) notFound();

  return <HighlightArticle page={entry.page} />;
}

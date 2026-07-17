import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema, itemListSchema } from "@/lib/schema";
import { excursions } from "@/data/excursions";
import { getExcursionImage, excursionsHubImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SignatureRotterdamFeature } from "@/components/SignatureRotterdamFeature";
import { AFFILIATE_DISCLOSURE_SHORT } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Rotterdam Shore Excursions — Harbour, Kinderdijk & Day Trips",
  description:
    "Browse Rotterdam shore excursions: harbour cruises, food walks, Kinderdijk, Delft, The Hague, Gouda and private tours — with cruise-aware guidance.",
  path: "/shore-excursions",
  image: excursionsHubImage.src,
  imageAlt: excursionsHubImage.alt,
  keywords: [
    "Rotterdam shore excursions",
    "Kinderdijk shore excursion",
    "Rotterdam cruise excursions",
    "private Rotterdam shore excursions",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Shore Excursions", path: "/shore-excursions" },
];

const CATEGORY_ORDER = [
  "Rotterdam city and harbour",
  "Kinderdijk and windmills",
  "Delft, The Hague and Gouda",
  "Food and local culture",
  "Active experiences",
];

export default function ShoreExcursionsPage() {
  const byCategory = CATEGORY_ORDER.map((category) => ({
    category,
    items: excursions.filter((e) => e.category === category),
  })).filter((g) => g.items.length > 0);

  const uncategorised = excursions.filter((e) => !CATEGORY_ORDER.includes(e.category));
  if (uncategorised.length) {
    byCategory.push({ category: "More Rotterdam experiences", items: uncategorised });
  }

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title: "Rotterdam Shore Excursions",
            description:
              "Cruise-aware Rotterdam shore excursions for harbour, Kinderdijk, Delft and private touring.",
            path: "/shore-excursions",
          }),
          itemListSchema(
            excursions.map((e) => ({
              name: e.title,
              url: `/shore-excursions/${e.slug}/`,
            })),
          ),
        ]}
      />
      <PageHero
        image={excursionsHubImage}
        title="Rotterdam Shore Excursions"
        subtitle="Harbour cruises, Kinderdijk, Delft day trips and private touring — organised by experience type, not as one undifferentiated list."
        compact
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={breadcrumbs} />
          <p className="mt-4 max-w-3xl text-sm text-gray-500">{AFFILIATE_DISCLOSURE_SHORT}</p>

          <div className="mt-10">
            <SignatureRotterdamFeature embedded />
          </div>

          {byCategory.map((group) => (
            <div key={group.category} className="mt-14">
              <h2 className="section-title text-2xl">{group.category}</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((ex) => {
                  const image = getExcursionImage(ex.slug);
                  return (
                    <Link
                      key={ex.slug}
                      href={`/shore-excursions/${ex.slug}/`}
                      className="card-editorial group flex h-full flex-col overflow-hidden"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <ResponsiveImage
                          image={image}
                          role="card"
                          imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        {ex.badge ? (
                          <span className="text-xs font-semibold uppercase tracking-wide text-orange-600">
                            {ex.badge.replace(/-/g, " ")}
                          </span>
                        ) : null}
                        <h3 className="mt-1 font-display text-lg font-semibold text-gray-900 group-hover:text-harbour-800">
                          {ex.title}
                        </h3>
                        <p className="mt-2 flex-1 text-sm text-gray-600">{ex.tagline}</p>
                        <p className="mt-3 text-xs font-medium text-gray-500">
                          {ex.duration} · {ex.activityLevel ?? ex.pace}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/rotterdam-or-kinderdijk/" className="btn-secondary">
              Rotterdam or Kinderdijk?
            </Link>
            <Link href="/cruise-planner/" className="btn-secondary">
              Use the planner
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

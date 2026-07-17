import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { highlights } from "@/data/highlights";
import { guidePages } from "@/data/guides";
import { getHighlightImage, getGuideImage, guidesHubImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

const path = "/guides";
const description =
  "Rotterdam cruise planning guides — harbour city days, Kinderdijk, Delft, The Hague, Gouda and practical port-day advice.";

export const metadata = buildMetadata({
  title: "Rotterdam Cruise Planning Guides",
  description,
  path,
  keywords: [
    "Rotterdam cruise port guide",
    "Kinderdijk from Rotterdam",
    "Rotterdam shore excursions guide",
    "Getting around Rotterdam",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Planning Guides", path },
];

export default function GuidesHubPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({ title: "Rotterdam Cruise Planning Guides", description, path }),
        ]}
      />
      <PageHero
        title="Rotterdam Cruise Planning Guides"
        subtitle="Harbour city days, Kinderdijk windmills, Delft and practical advice for every type of cruise passenger."
        image={guidesHubImage}
        compact
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={breadcrumbs} />

          <h2 className="section-title mt-10 text-2xl">Destination &amp; planning guides</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guidePages.map((g) => {
              const image = getGuideImage(g.imageKey);
              return (
                <Link key={g.slug} href={`/${g.slug}/`} className="card-editorial group overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <ResponsiveImage
                      image={image}
                      role="card"
                      imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-harbour-800">
                      {g.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">{g.tagline}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          {highlights.length > 0 ? (
            <>
              <h2 className="section-title mt-14 text-2xl">Attraction highlights</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {highlights.map((h) => {
                  const image = getHighlightImage(h.slug);
                  return (
                    <Link
                      key={h.slug}
                      href={`/guides/${h.slug}/`}
                      className="card-feature group"
                    >
                      <h3 className="font-display text-base font-bold text-gray-900 group-hover:text-harbour-800">
                        {h.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600">{h.tagline}</p>
                    </Link>
                  );
                })}
              </div>
            </>
          ) : null}
        </div>
      </section>
    </>
  );
}

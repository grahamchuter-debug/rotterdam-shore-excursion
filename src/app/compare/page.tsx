import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { comparisons, getComparisonDisplayTitle, getComparisonHref } from "@/data/comparisons";
import { getComparisonImage } from "@/lib/images";

const path = "/compare";
const description =
  "Honest comparisons for Rotterdam cruise passengers — city or Kinderdijk, Kinderdijk or Delft, independent or guided, and the best shore excursions for different travellers.";

export const metadata = buildMetadata({
  title: "Compare Rotterdam Cruise Options",
  description,
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Compare", path },
];

export default function CompareHubPage() {
  const image = getComparisonImage("rotterdam-or-kinderdijk");
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Compare Rotterdam Cruise Options", description, path })]} />
      <PageHero
        title="Compare Rotterdam Cruise Options"
        subtitle="Editorial comparisons to help you choose between the harbour city, Kinderdijk, Delft and different touring styles."
        image={image}
        compact
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid gap-4 sm:grid-cols-2">
            {comparisons.map((c) => (
              <Link key={c.slug} href={getComparisonHref(c.slug)} className="nav-card group">
                <h2 className="font-display text-lg font-bold text-gray-900 group-hover:text-harbour-800">
                  {getComparisonDisplayTitle(c)}
                </h2>
                <p className="mt-2 text-sm text-gray-600">{c.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

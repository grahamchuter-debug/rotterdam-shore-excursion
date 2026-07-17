import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShipScheduleHubView } from "@/components/ShipScheduleHubView";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { getSchedulePortBySlug } from "@/data/schedules";
import { notFound } from "next/navigation";

const path = "/rotterdam-cruise-schedule";

export const metadata = buildMetadata({
  title: "Rotterdam Cruise Schedule — Ship Arrivals & Port Calls",
  description:
    "Rotterdam cruise schedule planning for published ship calls. Use call windows to decide between the city, Kinderdijk and Delft — then confirm with your cruise line.",
  path,
  keywords: [
    "Rotterdam cruise schedule",
    "Rotterdam cruise ship schedule",
    "Rotterdam port calls",
    "Rotterdam cruise arrivals",
  ],
});

export default function RotterdamCruiseSchedulePage() {
  const port = getSchedulePortBySlug("rotterdam");
  if (!port) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Rotterdam Cruise Schedule", path },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title: port.seoTitle,
            description: port.intro,
            path,
          }),
          ...(port.faqs ? [faqSchema(port.faqs)] : []),
        ]}
      />
      <PageHero
        title="Rotterdam Cruise Schedule"
        subtitle="Plan your day ashore around published call windows — then confirm arrival, departure and all-aboard times with your cruise line."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-5xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="mt-4 max-w-3xl text-sm text-gray-600">
            Schedules can change. Use this page to move toward excursion recommendations, Kinderdijk
            planning and city guidance — not as a substitute for your cruise line&apos;s final programme.
          </p>
          <div className="mt-8">
            <ShipScheduleHubView port={port} />
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/shore-excursions/" className="btn-primary">
              Explore Rotterdam excursions
            </Link>
            <Link href="/kinderdijk-from-rotterdam-cruise-port/" className="btn-secondary">
              Kinderdijk planning
            </Link>
            <Link href="/rotterdam-cruise-port-guide/" className="btn-secondary">
              Port guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

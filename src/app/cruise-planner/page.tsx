import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { RotterdamCruisePlanner } from "@/components/RotterdamCruisePlanner";

const path = "/cruise-planner";
const description =
  "Build a personalised Rotterdam cruise plan. Enter your port times, party size, interests, mobility, budget and travel style for tailored recommendations.";

export const metadata = buildMetadata({
  title: "Rotterdam Cruise Planner — Port Day Itinerary",
  description,
  path,
  keywords: [
    "Rotterdam cruise planner",
    "Rotterdam cruise day plan",
    "Rotterdam port day itinerary",
    "Kinderdijk planner",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Rotterdam Cruise Planner", path },
];

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Rotterdam Cruise Planner", description, path })]} />
      <PageHero
        title="Rotterdam Cruise Planner"
        subtitle="Tell us your ship's hours ashore, who is travelling and what you enjoy — get editorial recommendations for the city, harbour, Kinderdijk, Delft and private touring."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <RotterdamCruisePlanner />
        </div>
      </section>
    </>
  );
}

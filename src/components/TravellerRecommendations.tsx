import Link from "next/link";
import { travellerRecommendations } from "@/data/cruise-positioning";

export function TravellerRecommendations() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <p className="section-eyebrow">Decision support</p>
        <h2 className="section-title mt-2">Which Rotterdam experience is right for you?</h2>
        <p className="section-subtitle">
          Recommendations are based on genuine passenger fit — not commission rates.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {travellerRecommendations.map((row) => (
            <Link
              key={row.id}
              href={row.href}
              className="rounded-2xl border border-gray-100 bg-harbour-50/40 p-5 transition-shadow hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-harbour-600">
                {row.travellerType}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-gray-900">
                {row.recommendation}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{row.reason}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

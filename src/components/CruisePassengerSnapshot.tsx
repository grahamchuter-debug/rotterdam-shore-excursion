import { cruisePassengerSnapshot } from "@/data/cruise-positioning";

/**
 * Reusable cruise passenger snapshot — key facts for a Rotterdam port day.
 */
export function CruisePassengerSnapshot() {
  const s = cruisePassengerSnapshot;

  return (
    <section className="section-padding bg-gradient-to-b from-brick-300/20 to-white">
      <div className="container-wide">
        <p className="section-eyebrow">Cruise passenger snapshot</p>
        <h2 className="section-title mt-2">Rotterdam at a glance</h2>
        <p className="section-subtitle">
          A quick orientation before you choose between the city, Kinderdijk and Delft.
        </p>
        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {s.map((row) => (
            <div key={row.label} className="rounded-2xl border border-harbour-100 bg-white p-5 shadow-sm">
              <dt className="text-xs font-semibold uppercase tracking-wide text-harbour-600">
                {row.label}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-gray-800">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

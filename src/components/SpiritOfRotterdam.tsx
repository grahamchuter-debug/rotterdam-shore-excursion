import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

export function SpiritOfRotterdam() {
  const image = subjectImages.architecture ?? subjectImages.historic;

  return (
    <section className="section-padding bg-gradient-to-b from-harbour-50 via-white to-white border-b border-harbour-100">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-eyebrow">The harbour city revealed</p>
            <h2 className="section-title mt-2 max-w-xl">Spirit of Rotterdam</h2>
            <p className="mt-6 text-base leading-relaxed text-gray-700">
              Rotterdam blends a rebuilt modern skyline, a working harbour and easy access to classic
              Dutch icons — Kinderdijk windmills, Delft canals and market towns — within a single
              North Sea cruise call.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              A cruise day could mean walking Wilhelminapier, seeing the city from the water, standing
              among the mills at Kinderdijk or tasting the city on a food walk near Markthal.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Every route reveals another side of the port city.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { emoji: "🏗️", label: "Modern harbour city" },
                { emoji: "🌬️", label: "Kinderdijk windmills" },
                { emoji: "🏘️", label: "Delft & Dutch towns" },
              ].map((item) => (
                <div key={item.label} className="card-feature text-center">
                  <span className="text-2xl" aria-hidden="true">{item.emoji}</span>
                  <p className="mt-2 text-sm font-semibold text-gray-900">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <ResponsiveImage
              image={image}
              role="card"
              imgClassName="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-harbour-900/30 to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export function HonestAdvice() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide max-w-4xl">
        <p className="section-eyebrow">Honest advice</p>
        <h2 className="section-title mt-2">Do You Need a Shore Excursion in Rotterdam?</h2>
        <p className="section-subtitle">
          The honest answer: you can enjoy the city independently. An excursion becomes worthwhile
          when you want to reach Kinderdijk and the wider region properly.
        </p>

        <div className="mt-10 space-y-8">
          <div className="card-feature">
            <h3 className="font-display text-xl font-bold text-gray-900">
              You can explore Rotterdam independently — and many passengers do
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Rotterdam&apos;s Wilhelminapier and nearby city highlights make an independent day
              realistic for most passengers:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-harbour-600">✓</span> Wilhelminapier architecture and river views
              </li>
              <li className="flex items-center gap-2">
                <span className="text-harbour-600">✓</span> Erasmusbrug approaches and skyline photos
              </li>
              <li className="flex items-center gap-2">
                <span className="text-harbour-600">✓</span> Markthal and Cube Houses with short transit
              </li>
              <li className="flex items-center gap-2">
                <span className="text-harbour-600">✓</span> Harbour orientation without a coach day
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Set a 60–90 minute return buffer and confirm your all-aboard time. The ship will not wait.
            </p>
          </div>

          <div className="card-accent">
            <h3 className="font-display text-xl font-bold text-gray-900">
              Kinderdijk and regional towns need more planning
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Rotterdam&apos;s other great days ashore sit beyond casual walking distance from the
              terminal. Organised transport and disciplined timing matter for:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">→</span>
                <span>
                  <strong>Kinderdijk windmills</strong> — a road journey and outdoor site time
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">→</span>
                <span>
                  <strong>Delft, The Hague and Gouda</strong> — regional transfers, not pier strolls
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">→</span>
                <span>
                  <strong>Multi-stop private days</strong> — only on comfortably long calls
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">→</span>
                <span>
                  <strong>Amsterdam</strong> — usually not the default from a Rotterdam call
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/rotterdam-or-kinderdijk/" className="btn-secondary text-sm">
            Rotterdam or Kinderdijk?
          </Link>
          <Link href="/can-you-walk-from-rotterdam-cruise-port/" className="btn-secondary text-sm">
            Can you walk from port?
          </Link>
          <Link href="/should-you-visit-amsterdam-from-rotterdam-cruise-port/" className="btn-secondary text-sm">
            Amsterdam from Rotterdam?
          </Link>
        </div>
      </div>
    </section>
  );
}

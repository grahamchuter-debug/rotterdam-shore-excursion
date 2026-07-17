"use client";

import Link from "next/link";
import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

const CHOOSE_CARDS = [
  {
    slug: "city-harbour",
    emoji: "🏗️",
    title: "Rotterdam city and harbour",
    tagline: "Modern architecture, Wilhelminapier skyline and harbour views — the easiest way to read the city from a cruise call.",
    highlights: [
      "Pier-area architecture often within reach of the terminal",
      "Harbour cruises for low-effort orientation",
      "Markthal and Cube Houses with short transit",
      "Best fit for shorter port calls",
      "Strong independent-exploring option",
    ],
    cta: "Explore Rotterdam",
    href: "/things-to-do-near-rotterdam-cruise-terminal/",
    imageKey: "historic",
    wide: true,
  },
  {
    slug: "kinderdijk",
    emoji: "🌬️",
    title: "Kinderdijk windmills",
    tagline: "UNESCO mills and classic Dutch water management — a genuine half-day, not a walk from the pier.",
    highlights: [
      "The region's most iconic Dutch landscape",
      "Road transfer of roughly 30–45 minutes each way",
      "Outdoor paths between mills",
      "Best on a long enough call with organised transport",
      "Our flagship regional day trip",
    ],
    cta: "Plan Kinderdijk",
    href: "/kinderdijk-from-rotterdam-cruise-port/",
    imageKey: "scenic",
    wide: true,
  },
  {
    slug: "delft-hague-gouda",
    emoji: "🏘️",
    title: "Delft, The Hague and Gouda",
    tagline: "Canal towns, government squares and cheese-market heritage within regional reach of Rotterdam.",
    highlights: [
      "Delft for canals and ceramics",
      "The Hague for a different urban character",
      "Gouda for market-town atmosphere",
      "Best with organised or private timing",
    ],
    cta: "See day trips",
    href: "/delft-from-rotterdam-cruise-port/",
    imageKey: "photography",
    wide: false,
  },
  {
    slug: "food-private",
    emoji: "🍽️",
    title: "Food, culture and private touring",
    tagline: "Foodie walks, brewery stops and private vehicles shaped around your party rather than a fixed coach circuit.",
    highlights: [
      "Markthal snacks and guided tasting walks",
      "Brewery and water-taxi combinations",
      "Private pacing for families and mixed mobility",
      "Cruise-first return planning",
    ],
    cta: "Find your experience",
    href: "/private-rotterdam-shore-excursions/",
    imageKey: "food",
    wide: false,
  },
] as const;

export function ChooseYourRotterdam() {
  return (
    <section id="choose" className="section-padding bg-white">
      <div className="container-wide">
        <p className="section-eyebrow">Choose Your Rotterdam</p>
        <h2 className="section-title mt-2 max-w-3xl">
          How Would You Like to Experience Rotterdam?
        </h2>
        <p className="section-subtitle">
          From the modern harbour city and Kinderdijk windmills to Delft day trips and food culture,
          choose the experience that best fits your interests and time ashore.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {CHOOSE_CARDS.map((card) => {
            const image = subjectImages[card.imageKey] ?? subjectImages.historic;
            return (
              <Link
                key={card.slug}
                href={card.href}
                className={`card-editorial group flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                  card.wide ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${card.wide ? "aspect-[21/9]" : "aspect-[16/10]"}`}
                >
                  <ResponsiveImage
                    image={image}
                    role="card"
                    imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-harbour-900/80 via-harbour-900/25 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute left-5 top-5 text-3xl" aria-hidden="true">
                    {card.emoji}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                    <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <p className="text-base leading-relaxed text-gray-600 italic">
                    &ldquo;{card.tagline}&rdquo;
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-gray-100 pt-5">
                    {card.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-orange-500" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 text-sm font-semibold tracking-wide text-orange-600 group-hover:text-orange-500">
                    {card.cta} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

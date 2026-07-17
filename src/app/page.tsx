import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { ChooseYourRotterdam } from "@/components/ChooseYourRotterdam";
import { SpiritOfRotterdam } from "@/components/SpiritOfRotterdam";
import { HonestAdvice } from "@/components/HonestAdvice";
import { CruisePassengerSnapshot } from "@/components/CruisePassengerSnapshot";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";
import { getHomepageFaqs, homepageTagline } from "@/data/homepage";
import { getFeaturedExcursions } from "@/data/excursions";
import { siteImages, getExcursionImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { PreloadImage } from "@/components/PreloadImage";
import { CruiseHeroTrust } from "@/components/CruiseHeroTrust";
import { TravellerRecommendations } from "@/components/TravellerRecommendations";
import { AFFILIATE_DISCLOSURE_SHORT, SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Rotterdam Shore Excursion | Kinderdijk, Delft & City Tours",
  description: SITE.description,
  path: "/",
  keywords: [
    "Rotterdam shore excursion",
    "Rotterdam shore excursions",
    "Kinderdijk from Rotterdam",
    "Rotterdam cruise port",
    "best Rotterdam shore excursions",
    "Delft from Rotterdam cruise port",
  ],
});

const SITE_DESCRIPTION =
  "Independent Rotterdam shore excursions and cruise-port guidance for the harbour city, Kinderdijk windmills, Delft day trips and food culture — planned around your time ashore.";

const WHY_CHOOSE = [
  {
    title: "Built around usable hours",
    body: "Every recommendation starts from your call length and all-aboard buffer — not a generic sightseeing checklist.",
  },
  {
    title: "Honest distance maths",
    body: "We separate what is walkable from Wilhelminapier from what needs a coach, taxi or private transfer to Kinderdijk and nearby towns.",
  },
  {
    title: "City and classic Holland",
    body: "Modern architecture and harbour life sit beside UNESCO windmills and canal towns — choose the day that matches your curiosity.",
  },
  {
    title: "Independent when it fits",
    body: "Many passengers enjoy Rotterdam without a tour. We say when booking adds real value, and when it does not.",
  },
] as const;

export default function HomePage() {
  const faqs = getHomepageFaqs();
  const featured = getFeaturedExcursions().slice(0, 6);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          faqSchema(faqs),
          travelGuideSchema({
            title: "Rotterdam Shore Excursion",
            description: SITE_DESCRIPTION,
            path: "/",
          }),
        ]}
      />

      <PreloadImage base={siteImages.hero.base} role="hero" />

      {/* 1–2. Hero + trust line */}
      <section className="home-hero">
        <ResponsiveImage
          image={siteImages.hero}
          role="hero"
          priority
          className="absolute inset-0 block h-full w-full"
          imgClassName="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
          <p className="section-eyebrow mb-2 text-harbour-100 animate-fade-up">
            Rotterdam Shore Excursion
          </p>
          <h1 className="home-hero-heading animate-fade-up-delay">{homepageTagline}</h1>
          <CruiseHeroTrust />
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg animate-fade-up-delay">
            Explore modern Rotterdam and its harbour, reach Kinderdijk windmills, or day-trip to Delft,
            The Hague and Gouda — matched to your hours ashore.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up-delay-2">
            <Link href="/shore-excursions/" className="btn-accent">
              Explore Rotterdam Excursions
            </Link>
            <Link
              href="/rotterdam-cruise-schedule/"
              className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              View Your Ship Schedule
            </Link>
          </div>
          <p className="mt-6 animate-fade-up-delay-2">
            <Link
              href="/can-you-walk-from-rotterdam-cruise-port/"
              className="text-sm font-medium text-white/85 underline-offset-4 hover:underline"
            >
              Can I walk into Rotterdam from the ship?
            </Link>
          </p>
        </div>
      </section>

      {/* 3. How would you like to experience Rotterdam? */}
      <ChooseYourRotterdam />

      {/* 4. Featured excursions */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <p className="section-eyebrow">Featured excursions</p>
          <h2 className="section-title mt-2">Rotterdam shore excursions worth considering</h2>
          <p className="section-subtitle">
            Independently written guides to live partner excursions — check availability and current
            pricing on the booking page.
          </p>
          <p className="mt-3 max-w-3xl text-sm text-gray-500">{AFFILIATE_DISCLOSURE_SHORT}</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((ex) => {
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
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    {ex.badge ? (
                      <span className="text-xs font-semibold uppercase tracking-wide text-orange-600">
                        {ex.badge.replace(/-/g, " ")}
                      </span>
                    ) : null}
                    <h3 className="mt-1 font-display text-xl font-semibold text-gray-900 group-hover:text-harbour-800">
                      {ex.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{ex.tagline}</p>
                    <p className="mt-4 text-xs font-medium text-gray-500">
                      {ex.duration} · {ex.activityLevel ?? ex.pace}
                      {ex.groupType ? ` · ${ex.groupType}` : ""}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-8">
            <Link href="/shore-excursions/" className="btn-primary">
              View all Rotterdam excursions
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Which Rotterdam experience is right for you? */}
      <TravellerRecommendations />

      {/* 6. Cruise Passenger Snapshot */}
      <CruisePassengerSnapshot />

      {/* 7. Why cruise passengers choose these excursions */}
      <section className="section-padding bg-harbour-50/50">
        <div className="container-wide">
          <p className="section-eyebrow">Why these excursions</p>
          <h2 className="section-title mt-2">Why cruise passengers choose these excursions</h2>
          <p className="section-subtitle">
            Editorial reasons — not star ratings or invented review scores.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {WHY_CHOOSE.map((item) => (
              <article key={item.title} className="rounded-2xl border border-harbour-100 bg-white p-6">
                <h3 className="font-display text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Spirit of Rotterdam */}
      <SpiritOfRotterdam />

      {/* 9. Cruise-terminal overview */}
      <section className="section-padding bg-harbour-50/40">
        <div className="container-wide max-w-3xl">
          <p className="section-eyebrow">Cruise port overview</p>
          <h2 className="section-title mt-2">Wilhelminapier is walkable — Kinderdijk is not</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            Cruise Terminal Rotterdam at Wilhelminakade puts modern architecture and harbour views within
            realistic walking distance for many passengers. Kinderdijk, Delft, The Hague and Gouda need
            genuine transfers and a clearer time budget. Start with the port guide, then decide whether
            your call favours the city or a regional day.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/rotterdam-cruise-port-guide/" className="btn-primary">
              Rotterdam cruise port guide
            </Link>
            <Link href="/kinderdijk-from-rotterdam-cruise-port/" className="btn-secondary">
              Kinderdijk from the cruise port
            </Link>
            <Link href="/things-to-do-near-rotterdam-cruise-terminal/" className="btn-secondary">
              Near the terminal
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Rotterdam vs Kinderdijk vs Delft */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <p className="section-eyebrow">Compare your options</p>
          <h2 className="section-title mt-2">Rotterdam vs Kinderdijk vs Delft</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            Stay in the modern harbour city for shorter calls and independent exploring. Choose Kinderdijk
            for UNESCO windmills when you have a half-day. Pick Delft when you want historic canals and
            town life closer than Amsterdam. Use the comparisons to match the day to your hours.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/rotterdam-or-kinderdijk/" className="btn-primary">
              Rotterdam or Kinderdijk?
            </Link>
            <Link href="/kinderdijk-or-delft-from-rotterdam/" className="btn-secondary">
              Kinderdijk or Delft?
            </Link>
            <Link href="/compare/" className="btn-secondary">
              All comparisons
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Cruise-schedule preview */}
      <section className="section-padding bg-white border-y border-harbour-100">
        <div className="container-wide">
          <p className="section-eyebrow">Ship schedules</p>
          <h2 className="section-title mt-2">Check your Rotterdam cruise schedule</h2>
          <p className="section-subtitle">
            Use published call windows to judge whether Kinderdijk or a regional town fits — then confirm
            times with your cruise line before you book.
          </p>
          <Link href="/rotterdam-cruise-schedule/" className="btn-accent mt-6 inline-flex">
            View Rotterdam cruise schedule
          </Link>
        </div>
      </section>

      {/* 12. Independent / should you book? */}
      <HonestAdvice />

      {/* 13. Embarkation / disembarkation */}
      <section className="section-padding bg-harbour-50/40">
        <div className="container-wide max-w-3xl">
          <p className="section-eyebrow">Embarkation &amp; disembarkation</p>
          <h2 className="section-title mt-2">Starting or ending your cruise in Rotterdam?</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            Port-of-call timing differs from embarkation and disembarkation days. Luggage, check-in windows
            and hotel transfers change what is realistic ashore. Read the embarkation guidance before you
            plan a Kinderdijk morning on a turnaround day.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/rotterdam-embarkation-guide/" className="btn-primary">
              Embarkation guide
            </Link>
            <Link href="/rotterdam-cruise-terminal/" className="btn-secondary">
              Cruise terminal overview
            </Link>
          </div>
        </div>
      </section>

      {/* 14. FAQs */}
      <FAQSection faqs={faqs} title="Rotterdam cruise FAQs" />

      {/* 15. Final CTA */}
      <section className="section-padding bg-harbour-900 text-white">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Ready to plan your day in Rotterdam?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80">
            Compare the city, Kinderdijk and Delft — then check live availability with our excursion
            partner.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/shore-excursions/" className="btn-accent">
              Explore Rotterdam Excursions
            </Link>
            <Link
              href="/rotterdam-or-kinderdijk/"
              className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              Rotterdam or Kinderdijk?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

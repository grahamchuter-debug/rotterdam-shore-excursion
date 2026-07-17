import Link from "next/link";
import { SignatureExperienceBadge } from "@/components/SignatureExperienceBadge";
import { rotterdamSignatureExperience, SIGNATURE_EXPERIENCE_PATH } from "@/data/signature-experience";
import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

export function SignatureRotterdamFeature({ embedded = false }: { embedded?: boolean }) {
  const image = subjectImages.photography ?? subjectImages.scenic;
  const comingSoon = rotterdamSignatureExperience.comingSoon;

  const inner = (
    <div className="card-signature grid gap-0 overflow-hidden lg:grid-cols-2">
      <div className="relative min-h-[280px] lg:min-h-full">
        <ResponsiveImage
          image={image}
          role="card"
          className="absolute inset-0 block h-full w-full"
          imgClassName="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-harbour-900/70 via-harbour-900/30 to-transparent lg:bg-gradient-to-t lg:from-harbour-900/60 lg:via-transparent lg:to-transparent"
          aria-hidden="true"
        />
        <div className="absolute bottom-6 left-6 right-6 lg:hidden">
          {comingSoon ? (
            <span className="badge-signature">⭐ Signature Experience — In preparation</span>
          ) : (
            <SignatureExperienceBadge showEditorsChoice />
          )}
        </div>
      </div>

      <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
        <div className="hidden lg:block">
          {comingSoon ? (
            <span className="badge-signature">⭐ Signature Experience — In preparation</span>
          ) : (
            <SignatureExperienceBadge showEditorsChoice />
          )}
        </div>
        <p className="section-eyebrow mt-4 lg:mt-6">Flagship product</p>
        <h2 className="font-display text-3xl font-semibold text-gray-900 sm:text-4xl mt-1">
          {rotterdamSignatureExperience.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600 italic">
          &ldquo;{rotterdamSignatureExperience.tagline}&rdquo;
        </p>
        <p className="mt-4 text-sm leading-relaxed text-gray-700">
          {comingSoon
            ? "Our flagship Signature Experience is in development — a curated small-group day that will become the primary recommendation on this site. The homepage is designed so this slot becomes your first choice without a redesign."
            : "The experience we would honestly recommend to a first-time cruise passenger who wants the very best of Rotterdam in a single port day."}
        </p>

        {comingSoon ? (
          <div className="placeholder-widget mt-6 text-left">
            <p className="placeholder-widget-label">In preparation</p>
            <p className="mt-2 text-sm text-gray-600">
              Harbour-city highlights, Kinderdijk or Delft, and a local lunch — proposed as a
              small-group day with cruise-first timing. Register your interest to hear when the
              concept is ready.
            </p>
          </div>
        ) : (
          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {rotterdamSignatureExperience.benefits.slice(0, 4).map((b) => (
              <div key={b.title} className="flex items-start gap-2 text-sm text-gray-700">
                <span aria-hidden="true">{b.emoji}</span>
                <span>{b.title}</span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={SIGNATURE_EXPERIENCE_PATH} className="btn-accent">
            {comingSoon ? "Learn more →" : `Discover ${rotterdamSignatureExperience.title} →`}
          </Link>
          {comingSoon && (
            <Link href="/enquire" className="btn-secondary">
              Register interest
            </Link>
          )}
        </div>
      </div>
    </div>
  );

  if (embedded) return inner;

  return (
    <section className="section-padding bg-gradient-to-b from-amber-50/40 via-white to-white border-b border-amber-100/60">
      <div className="container-wide">{inner}</div>
    </section>
  );
}

import Link from "next/link";
import { SignatureExperienceBadge } from "@/components/SignatureExperienceBadge";
import { rotterdamSignatureExperience, SIGNATURE_EXPERIENCE_PATH } from "@/data/signature-experience";
import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

interface SignatureExperienceCalloutProps {
  context?: "kinderdijk" | "old-town" | "general";
  compact?: boolean;
}

const CONTEXT_COPY = {
  kinderdijk: "Considering Kinderdijk? Our future Rotterdam Signature Experience is being designed as a carefully paced small-group harbour-city and Dutch-icons day.",
  "old-town": "Exploring the city? Our future Wow Collection will add distinctive small-group Rotterdam routes developed around cruise timings.",
  general: "Our future flagship Rotterdam Signature Experience is a proposed small-group harbour-city and Dutch-icons day. It is still in preparation.",
};

export function SignatureExperienceCallout({ context = "general", compact = false }: SignatureExperienceCalloutProps) {
  const image = subjectImages.photography;
  const comingSoon = rotterdamSignatureExperience.comingSoon;

  if (compact) {
    return (
      <div className="card-signature mt-10">
        {comingSoon ? (
          <span className="badge-signature">⭐ Signature Experience — In preparation</span>
        ) : (
          <SignatureExperienceBadge showEditorsChoice />
        )}
        <h2 className="mt-4 font-display text-xl font-bold text-gray-900">{rotterdamSignatureExperience.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">{CONTEXT_COPY[context]}</p>
        <Link href={SIGNATURE_EXPERIENCE_PATH} className="btn-accent mt-5 inline-flex text-sm">
          Learn more →
        </Link>
      </div>
    );
  }

  return (
    <div className="card-signature mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
      <div>
        {comingSoon ? (
          <span className="badge-signature">⭐ Signature Experience — In preparation</span>
        ) : (
          <SignatureExperienceBadge showEditorsChoice />
        )}
        <h2 className="mt-4 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
          {rotterdamSignatureExperience.title}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-gray-600">{CONTEXT_COPY[context]}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={SIGNATURE_EXPERIENCE_PATH} className="btn-accent">
            View Signature Experience →
          </Link>
          <Link href="/wow-collection" className="btn-secondary text-sm">
            The Wow Collection
          </Link>
        </div>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <ResponsiveImage
          image={image}
          role="card"
          imgClassName="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-harbour-900/40 to-transparent" aria-hidden="true" />
      </div>
    </div>
  );
}

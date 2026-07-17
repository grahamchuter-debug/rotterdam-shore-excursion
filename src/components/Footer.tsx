import Link from "next/link";
import { SITE } from "@/lib/site";
import { SIGNATURE_EXPERIENCE_PATH } from "@/data/signature-experience";
import { DestinationLogo } from "@/components/DestinationLogo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-depth mt-auto text-white">
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="container-wide grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="inline-flex rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-harbour-900"
              aria-label={`${SITE.name} — home`}
            >
              <DestinationLogo variant="compact" tone="on-dark" decorative />
            </Link>
            <p className="mt-4 text-sm text-harbour-100/70 leading-relaxed">
              Helping cruise passengers choose between Rotterdam city and harbour, Kinderdijk
              windmills, and Delft day trips with honest independent advice for every day ashore.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Choose your Rotterdam</h3>
            <ul className="space-y-1.5 text-sm text-harbour-100/70">
              <li><Link href="/rotterdam-or-kinderdijk/" className="hover:text-white">Rotterdam or Kinderdijk?</Link></li>
              <li><Link href="/can-you-walk-from-rotterdam-cruise-port/" className="hover:text-white">Can you walk from port?</Link></li>
              <li><Link href="/best-rotterdam-shore-excursions/" className="hover:text-white">Best Rotterdam excursion</Link></li>
              <li><Link href="/wow-collection" className="hover:text-white">The Wow Collection</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Plan your port day</h3>
            <ul className="space-y-1.5 text-sm text-harbour-100/70">
              <li><Link href="/cruise-planner" className="hover:text-white">Rotterdam Cruise Planner</Link></li>
              <li><Link href="/shore-excursions" className="hover:text-white">Shore Excursions</Link></li>
              <li><Link href="/kinderdijk-from-rotterdam-cruise-port/" className="hover:text-white">Kinderdijk guide</Link></li>
              <li><Link href="/can-you-walk-from-rotterdam-cruise-port/" className="hover:text-white">Independent Rotterdam guide</Link></li>
              <li><Link href="/rotterdam-cruise-port-guide/" className="hover:text-white">Rotterdam Port Guide</Link></li>
              <li><Link href="/rotterdam-cruise-schedule/" className="hover:text-white">Cruise schedule</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Editor&apos;s Collection</h3>
            <ul className="space-y-1.5 text-sm text-harbour-100/70">
              <li><Link href="/shore-excursions/rotterdam-harbour-sightseeing-cruise/" className="hover:text-white">Editor&apos;s Choice</Link></li>
              <li><Link href={SIGNATURE_EXPERIENCE_PATH} className="hover:text-white">Signature Experience</Link></li>
              <li><Link href="/rotterdam-or-kinderdijk/" className="hover:text-white">First-timers</Link></li>
              <li><Link href="/private-rotterdam-shore-excursions/" className="hover:text-white">Private touring</Link></li>
              <li><Link href="/enquire" className="hover:text-white">Enquire</Link></li>
            </ul>
          </div>
        </div>
        <div className="container-wide mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs text-harbour-100/60">
          <DestinationLogo variant="mark" tone="on-dark" className="opacity-90" decorative />
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/faq" className="hover:text-white">FAQ</Link>
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <span className="ml-auto">{SITE.email}</span>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-harbour-300/75">
        <p>
          &copy; {year} {SITE.name}. Independent Rotterdam cruise planning resource — not affiliated with
          any cruise line or port operator.
        </p>
        <p className="mx-auto mt-3 max-w-3xl leading-relaxed">
          Some excursion links are provided through our booking partners. We may receive a commission
          when you make a reservation, at no additional cost to you. We do not operate partner tours
          ourselves — availability, pricing and inclusions are confirmed on the partner booking page.
        </p>
      </div>
    </footer>
  );
}

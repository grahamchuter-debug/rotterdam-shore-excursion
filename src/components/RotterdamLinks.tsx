import Link from "next/link";

const ROTTERDAM_LINKS = [
  {
    title: "Rotterdam or Kinderdijk?",
    description:
      "Compare a modern harbour-city day with the classic Dutch windmill landscape — including transfer time and call-length fit.",
    href: "/rotterdam-or-kinderdijk/",
  },
  {
    title: "Can you walk from the cruise port?",
    description:
      "Honest guidance on what is realistically walkable near Wilhelminapier, and where you need transit instead.",
    href: "/can-you-walk-from-rotterdam-cruise-port/",
  },
  {
    title: "Things to do near the terminal",
    description:
      "Pier architecture, harbour views and easy city add-ons without committing to a coach day.",
    href: "/things-to-do-near-rotterdam-cruise-terminal/",
  },
  {
    title: "Compare Rotterdam excursions",
    description:
      "Choose between the city, Kinderdijk, Delft and private touring with candid trade-offs.",
    href: "/compare",
  },
  {
    title: "Private or coach touring",
    description:
      "Compare private vs coach pacing and short-call realism before you book a Rotterdam day.",
    href: "/private-rotterdam-shore-excursions/",
  },
  {
    title: "Rotterdam cruise schedules",
    description:
      "Check your published port hours before committing to Kinderdijk or a longer regional excursion.",
    href: "/rotterdam-cruise-schedule/",
  },
];

export function RotterdamLinks() {
  return (
    <section className="section-padding bg-harbour-50 border-t border-harbour-100">
      <div className="container-wide">
        <p className="section-eyebrow">Keep planning</p>
        <h2 className="section-title mt-2">Your Rotterdam planning hub</h2>
        <p className="section-subtitle">
          Use these guides and comparisons to shape a port day that matches your ship hours, energy
          and curiosity — whether you stay in the city or travel to Kinderdijk.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ROTTERDAM_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="card-feature group">
              <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-harbour-800">
                {link.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{link.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/guides" className="btn-secondary text-sm">
            All Rotterdam planning guides
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const LINKS = [
  { href: "/rotterdam-cruise-port-guide/", label: "Rotterdam Cruise Port Guide" },
  { href: "/cruise-planner", label: "Rotterdam Cruise Planner" },
  { href: "/rotterdam-cruise-schedule/", label: "Ship Schedules" },
  { href: "/compare", label: "Compare Rotterdam" },
  { href: "/wow-collection", label: "The Wow Collection" },
];

export function PlanningLinks() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {LINKS.map((link) => (
        <Link key={link.href} href={link.href} className="btn-secondary text-sm">
          {link.label}
        </Link>
      ))}
    </div>
  );
}

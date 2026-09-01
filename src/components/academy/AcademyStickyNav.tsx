"use client";

const links = [
  { label: "Start here", href: "/resources#lead" },
  { label: "Programs", href: "/resources#treatments" },
  { label: "Library", href: "/resources#library" },
  { label: "Guides", href: "/resources#guides" },
  { label: "Topics", href: "/resources#categories" },
  { label: "Tools", href: "/resources/tools" },
  { label: "Report", href: "/resources/report" },
];

export default function AcademyStickyNav() {
  return (
    <nav className="rv-academy-sticky" aria-label="Health Academy sections">
      <div className="container rv-academy-sticky-inner">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

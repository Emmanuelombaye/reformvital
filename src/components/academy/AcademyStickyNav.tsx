"use client";

const links = [
  { label: "Start here", href: "#lead" },
  { label: "Categories", href: "#categories" },
  { label: "Stories", href: "#stories" },
  { label: "Library", href: "#library" },
  { label: "Tools", href: "#tools" },
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

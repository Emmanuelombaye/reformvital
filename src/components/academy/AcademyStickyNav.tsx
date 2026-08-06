"use client";

const links = [
  { label: "Categories", href: "#categories" },
  { label: "Topics", href: "#topics" },
  { label: "Guides", href: "#guides" },
  { label: "Tools", href: "/resources/tools" },
  { label: "Stories", href: "#stories" },
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

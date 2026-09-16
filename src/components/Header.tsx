"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

const links = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function Navigation({ pathname }: { pathname: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <Link href="/" className="wordmark" aria-label="MU. — Home">
        MU.
      </Link>
      <button
        ref={toggleRef}
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      <nav
        id="site-navigation"
        className={`text-links site-navigation${menuOpen ? " is-open" : ""}`}
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            aria-current={
              pathname === link.href ||
              (link.href === "/projects" && pathname.startsWith("/projects/"))
                ? "page"
                : undefined
            }
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default function Header() {
  const pathname = usePathname();
  return <Navigation key={pathname} pathname={pathname} />;
}

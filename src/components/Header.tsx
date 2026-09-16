"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function Navigation({ pathname }: { pathname: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const main = document.querySelector("main");
    const previousOverflow = document.body.style.overflow;
    const previousInert = main?.inert ?? false;
    document.body.style.overflow = "hidden";
    if (main) main.inert = true;
    const desktop = window.matchMedia("(min-width: 601px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      if (main) main.inert = previousInert;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  return (
    <header
      className={`site-header${menuOpen ? " menu-is-open" : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Tab" && menuOpen) {
          const items = Array.from(
            event.currentTarget.querySelectorAll<HTMLElement>("a, button"),
          ).filter((item) => item.getClientRects().length > 0);
          const first = items[0];
          const last = items[items.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          }
          if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <Link href="/" className="wordmark" aria-label="MU. - Home">
        <Logo />
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

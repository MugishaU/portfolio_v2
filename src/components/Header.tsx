"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "ABOUT ME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/contact", label: "CONTACT ME" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 w-full px-6 md:px-12 py-6 flex justify-between items-center z-50 bg-[var(--color-background)]/80 backdrop-blur-sm">
        {/* Logo/Home link */}
        <Link
          href="/"
          className="text-lg font-bold text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          MUGISHA
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`link-underline transition-colors ${
                pathname === link.href
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger - animated to X */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden flex flex-col justify-center items-center w-10 h-10 ${menuOpen ? "hamburger-open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="hamburger-line w-8 h-0.5 bg-[var(--color-foreground)] mb-2" />
          <span className="hamburger-line w-8 h-0.5 bg-[var(--color-foreground)]" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-[var(--color-background)] flex flex-col transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Menu Links */}
        <div className="flex-1 flex flex-col items-center justify-center gap-10">
          {navLinks.map((link, index) => (
            <div
              key={link.label}
              className={`transform transition-all duration-500 ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: menuOpen ? `${index * 100}ms` : "0ms" }}
            >
              <Link
                href={link.href}
                onClick={(e) => e.stopPropagation()}
                className="text-[1.65rem] font-semibold text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors uppercase"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

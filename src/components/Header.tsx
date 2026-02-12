"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/about", label: "ABOUT ME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/contact", label: "CONTACT ME" },
];

function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 512 512"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M180.431 289.156L262.4 150H301.724V267C301.724 288.6 306.324 304.3 315.523 314.1C324.923 323.9 338.123 328.8 355.123 328.8C372.123 328.8 385.224 323.9 394.424 314.1C403.624 304.3 408.224 288.6 408.224 267V150H446.623V268.5C446.623 299.1 438.423 322.5 422.023 338.7C405.823 354.9 383.423 363 354.823 363C326.023 363 303.423 354.9 287.023 338.7C270.823 322.5 262.724 299.1 262.724 268.5V212.364L188.6 336H171.2L102.2 222.681V360H65V150H97.0996L180.431 289.156Z" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuMounted(true);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 w-full px-6 md:px-12 py-3 flex justify-between items-center z-50 bg-[var(--color-background)]/80 backdrop-blur-sm">
        {/* Logo/Home link */}
        <Link
          href="/"
          className="text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
        >
          <Logo />
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

      {/* Mobile Menu Overlay — only mounted after hydration to prevent FOUC */}
      {menuMounted && (
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
                  className="text-[1.6rem] font-normal text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors uppercase"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "ABOUT ME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/contact", label: "CONTACT ME" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-dvh flex flex-col relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-background)] via-[var(--color-background)] to-[#112240] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--color-foreground) 1px, transparent 1px),
                           linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Navigation */}
      <nav className="sticky top-0 w-full px-6 md:px-12 py-6 flex justify-end items-center animate-fade-in z-50 bg-[var(--color-background)]/80 backdrop-blur-sm">
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-lg text-[var(--color-muted)]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="link-underline hover:text-[var(--color-foreground)] transition-colors"
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
                className="text-[1.6rem] font-normal text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors uppercase"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <main className="relative flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h1
          className="text-7xl md:text-9xl font-bold tracking-tight gradient-text animate-fade-up leading-tight pb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          MUGISHA
        </h1>

        <p
          className="mt-4 text-lg md:text-xl text-[var(--color-muted)] font-light tracking-widest animate-fade-up animate-delay-100"
          style={{ fontFamily: "var(--font-pronunciation)" }}
        >
          /mu · gi · ʃa/
        </p>

        <p className="mt-8 max-w-lg text-[var(--color-muted)] leading-relaxed text-base md:text-lg animate-fade-up animate-delay-200">
          <span className="text-[var(--color-accent-secondary)] font-medium">(n.)</span>{" "}
          a software engineer who specializes in building secure & scalable back-end solutions.
        </p>

        <Link
          href="/projects"
          className="mt-12 px-10 py-4 bg-[var(--color-accent)] text-[var(--color-background)] font-semibold rounded-sm glow-hover animate-fade-up animate-delay-300"
        >
          PROJECTS
        </Link>
      </main>

      {/* Contact Me Footer */}
      <footer className="relative w-full py-6 flex justify-center animate-fade-up animate-delay-400">
        <Link
          href="/contact"
          className="group flex items-center gap-2 text-[var(--color-accent)] hover:gap-3 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
          >
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" />
          </svg>
          <span className="text-sm font-medium">Contact Me</span>
        </Link>
      </footer>
    </div>
  );
}

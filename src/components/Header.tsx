"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label="MU. — Home">
        MU.
      </Link>
      <nav className="text-links" aria-label="Main navigation">
        <Link
          href="/projects"
          aria-current={
            pathname.startsWith("/projects") || pathname.startsWith("/tags")
              ? "page"
              : undefined
          }
        >
          Work
        </Link>
        <Link
          href="/about"
          aria-current={pathname === "/about" ? "page" : undefined}
        >
          About
        </Link>
      </nav>
    </header>
  );
}

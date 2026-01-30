import Link from "next/link";

export default function ContactFooter() {
  return (
    <footer className="w-full py-8 flex justify-center border-t border-[var(--color-muted)]/10">
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
  );
}

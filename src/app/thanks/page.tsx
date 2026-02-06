import Link from "next/link";

const names = [
  { name: "Nadin Bart-Williams", accent: true },
  { name: "Cenone Collins", accent: false },
  { name: "Monique Day", accent: true },
  { name: "Quinnyne Henry-Fender", accent: false },
  { name: "Dashe Illuyemi", accent: true },
  { name: "Lydia Johnson", accent: false },
  { name: "David Kasali", accent: true },
  { name: "Mohsin Malik", accent: false },
  { name: "Caleb Mapoma", accent: true },
  { name: "Naomi Mapoma", accent: false },
  { name: "Jesse Ngizwenayo", accent: true },
  { name: "Leanne Oyeyemi", accent: false },
  { name: "Janie Shepherd", accent: true },
  { name: "Kanon Tsuda", accent: false },
  { name: "Chinazam Ukata", accent: true },
];

export default function ThanksPage() {
  return (
    <div className="min-h-dvh flex flex-col relative">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[var(--color-background)] via-[var(--color-background)] to-[#112240] pointer-events-none" />
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--color-foreground) 1px, transparent 1px),
                           linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top nav */}
      <nav className="relative w-full px-6 md:px-12 py-6 flex justify-between items-center z-10">
        <Link
          href="/"
          className="text-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
          aria-label="Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </nav>

      {/* Content */}
      <main className="relative flex-1 flex flex-col items-center px-6 md:px-12 pb-12">
        <h1
          className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)] mb-4 animate-fade-up"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Special Thanks
        </h1>

        <p className="text-center text-[var(--color-muted)] max-w-md leading-relaxed mb-6 animate-fade-up animate-delay-100">
          To my great design consultants who helped me make stylistic choices
          throughout the process ;)
        </p>

        {/* Heart icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e25555"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mb-6 animate-fade-up animate-delay-200"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>

        {/* Divider */}
        <hr className="border-[var(--color-muted)]/30 w-40 mb-8 animate-fade-up animate-delay-200" />

        {/* Names list */}
        <div className="flex flex-col items-center gap-3 animate-fade-up animate-delay-300">
          {names.map((person) => (
            <span
              key={person.name}
              className={`text-base md:text-lg tracking-wide ${
                person.accent
                  ? "text-[var(--color-accent)] font-medium"
                  : "text-[var(--color-foreground)]"
              }`}
            >
              {person.name}
            </span>
          ))}
        </div>
      </main>
    </div>
  );
}

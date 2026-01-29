import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-background)] via-[var(--color-background)] to-[#112240] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--color-foreground) 1px, transparent 1px),
                           linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Navigation */}
      <nav className="relative w-full px-6 md:px-12 py-6 flex justify-end gap-4 md:gap-8 text-xs md:text-sm text-[var(--color-muted)] animate-fade-in">
        <Link href="#about" className="link-underline hover:text-[var(--color-foreground)] transition-colors">
          ABOUT ME
        </Link>
        <a
          href="https://github.com/MugishaU"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline hover:text-[var(--color-foreground)] transition-colors"
        >
          GITHUB
        </a>
        <a
          href="https://linkedin.com/in/mugisha-uwiragiye"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline hover:text-[var(--color-foreground)] transition-colors"
        >
          LINKEDIN
        </a>
        <a
          href="mailto:mugaboroyal@gmail.com"
          className="link-underline hover:text-[var(--color-foreground)] transition-colors"
        >
          EMAIL ME
        </a>
        <Link href="/cv" className="link-underline hover:text-[var(--color-foreground)] transition-colors">
          CV
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="relative flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter gradient-text animate-fade-up">
          Mugisha
        </h1>

        <p className="mt-4 text-lg md:text-xl text-[var(--color-muted)] font-light tracking-widest animate-fade-up animate-delay-100">
          /mu · gi · ʃa/
        </p>

        <p className="mt-8 max-w-lg text-[var(--color-muted)] leading-relaxed text-base md:text-lg animate-fade-up animate-delay-200">
          <span className="text-[var(--color-accent-secondary)] font-medium">(n.)</span>{" "}
          a software engineer who specializes in building secure & scalable back-end solutions.
        </p>

        <Link
          href="#projects"
          className="mt-12 px-10 py-4 bg-[var(--color-accent)] text-[var(--color-background)] font-semibold rounded-sm glow-hover animate-fade-up animate-delay-300"
        >
          PROJECTS
        </Link>
      </main>

      {/* Contact Me Footer */}
      <footer className="relative w-full py-8 flex justify-center animate-fade-up animate-delay-400">
        <a
          href="mailto:mugaboroyal@gmail.com"
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
        </a>
      </footer>
    </div>
  );
}

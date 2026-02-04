import Header from "@/components/Header";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
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

      <Header />

      <main className="relative flex-1 flex flex-col px-6 md:px-12 pt-8 md:pt-12 pb-2 max-w-7xl mx-auto w-full">
        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)] mb-4 uppercase text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Projects
        </h1>

        <p className="text-[var(--color-muted)] text-center mb-10 max-w-2xl mx-auto">
          A selection of client websites I&apos;ve designed and built.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block"
            >
              <article className="bg-[#112240]/50 rounded-lg overflow-hidden border border-[var(--color-muted)]/20 hover:border-[var(--color-accent)]/50 transition-all duration-300 hover:-translate-y-1">
                {/* Thumbnail */}
                <div className="aspect-[16/9] bg-[#0a192e] overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-[var(--color-muted)] mt-1">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center py-8 border-t border-[var(--color-muted)]/20">
          <p className="text-[var(--color-foreground)] text-lg mb-2">
            Interested in working together?
          </p>
          <p className="text-[var(--color-muted)] mb-6">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-background)] font-medium rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors"
          >
            Get in Touch
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
}

import Header from "@/components/Header";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug, tagToSlug } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: `${project.title} | Mugisha Uwiragiye`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

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

      <main className="relative flex-1 flex flex-col px-6 md:px-12 pt-4 md:pt-6 pb-2 max-w-4xl mx-auto w-full">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors mb-4 group"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          Back to Projects
        </Link>

        {/* Title */}
        <h1
          className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)] mb-3"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {project.title}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tagToSlug(tag)}`}
              className="text-sm px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] hover:bg-[var(--color-accent)]/20 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>

        {/* Project Images */}
        <div className="flex gap-4 mb-6 items-stretch">
          {/* Desktop Screenshot */}
          <div className={`rounded-lg overflow-hidden border border-[var(--color-muted)]/20 ${project.mobileImage ? "md:flex-1" : "w-full"}`}>
            <img
              src={project.image}
              alt={`${project.title} - Desktop`}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Mobile Screenshot - hidden on mobile */}
          {project.mobileImage && (
            <div className="hidden md:flex w-[120px] shrink-0 rounded-lg overflow-hidden border border-[var(--color-muted)]/20">
              <img
                src={project.mobileImage}
                alt={`${project.title} - Mobile`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          )}
        </div>

        {/* Description */}
        <div className="mb-8">
          <h2
            className="text-xl md:text-2xl font-semibold text-[var(--color-foreground)] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            About This Project
          </h2>
          <p className="text-[var(--color-foreground)] leading-relaxed text-base md:text-lg">
            {project.description}
          </p>
        </div>

        {/* Links */}
        {(project.websiteUrl || project.githubUrl) && (
          <div className="flex flex-wrap gap-4 mb-8">
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--color-accent)] text-[var(--color-background)] font-medium rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Visit Website
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] font-medium rounded-lg hover:bg-[var(--color-accent)]/10 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            )}
          </div>
        )}

        {/* Navigation to other projects */}
        <div className="border-t border-[var(--color-muted)]/20 pt-8 mt-4">
          <p className="text-[var(--color-muted)] text-sm mb-4">
            Check out more projects
          </p>
          <div className="flex flex-wrap gap-3">
            {projects
              .filter((p) => p.slug !== project.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors underline underline-offset-4 decoration-[var(--color-muted)]/30 hover:decoration-[var(--color-accent)]"
                >
                  {p.title}
                </Link>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}

import Header from "@/components/Header";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getAllTags, tagToSlug } from "@/data/projects";

export function generateStaticParams() {
  return getAllTags().map((tag) => ({
    tag: tagToSlug(tag),
  }));
}

function getTagFromSlug(slug: string): string | undefined {
  const tags = getAllTags();
  return tags.find((tag) => tagToSlug(tag) === slug);
}

export function generateMetadata({ params }: { params: { tag: string } }) {
  const tag = getTagFromSlug(params.tag);
  if (!tag) {
    return { title: "Tag Not Found" };
  }
  return {
    title: `${tag} Projects | Mugisha Uwiragiye`,
    description: `Projects using ${tag}`,
  };
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const tag = getTagFromSlug(params.tag);

  if (!tag) {
    notFound();
  }

  const filteredProjects = projects.filter((project) =>
    project.tags.includes(tag)
  );

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

      <main className="relative flex-1 flex flex-col px-6 md:px-12 pt-8 md:pt-12 pb-8 max-w-5xl mx-auto w-full">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors mb-6 group"
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
          className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)] mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="text-[var(--color-accent)]">{tag}</span> Projects
        </h1>

        <p className="text-[var(--color-muted)] mb-10">
          {filteredProjects.length === 1
            ? "1 project"
            : `${filteredProjects.length} projects`}{" "}
          tagged with {tag}
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block"
            >
              <article className="bg-[#112240]/50 rounded-lg overflow-hidden border border-[var(--color-muted)]/20 hover:border-[var(--color-accent)]/50 transition-all duration-300 hover:-translate-y-1">
                {/* Thumbnail */}
                <div className="aspect-video bg-[#0a192e] overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className={`text-xs px-2 py-1 rounded ${
                          t === tag
                            ? "bg-[var(--color-accent)]/30 text-[var(--color-accent)]"
                            : "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* All Tags */}
        <div className="mt-12 pt-8 border-t border-[var(--color-muted)]/20">
          <p className="text-[var(--color-muted)] text-sm mb-4">
            Browse other tags
          </p>
          <div className="flex flex-wrap gap-2">
            {getAllTags()
              .filter((t) => t !== tag)
              .map((t) => (
                <Link
                  key={t}
                  href={`/tags/${tagToSlug(t)}`}
                  className="text-sm px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] hover:bg-[var(--color-accent)]/20 transition-colors"
                >
                  {t}
                </Link>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}

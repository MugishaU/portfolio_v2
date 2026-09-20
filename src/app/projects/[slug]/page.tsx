import ProjectImages from "@/components/ProjectImages";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";

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
    return {};
  }
  return {
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
    <>
      <main id="main-content" className="page-content project-content">
        <h1>{project.title}</h1>
        <p className="page-intro">{project.description}</p>
        <ProjectImages
          image={project.image}
          mobileImage={project.mobileImage}
          title={project.title}
        />
        <div className="project-links">
          {project.websiteUrl && (
            <a
              className="project-link"
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit website
            </a>
          )}
          {project.githubUrl && (
            <a
              className="project-link"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          <Link href="/projects" className="project-link">
            Back to Projects
          </Link>
        </div>
      </main>
    </>
  );
}

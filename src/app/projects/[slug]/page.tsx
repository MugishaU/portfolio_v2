import Header from "@/components/Header";
import ProjectImages from "@/components/ProjectImages";
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
    <>
      <Header />
      <main id="main-content" className="page-content project-content">
        <Link href="/projects" className="back-link">
          Back to Work
        </Link>
        <h1>{project.title}</h1>
        <p className="page-intro">{project.description}</p>
        <div className="text-links project-links">
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit website
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          {project.tags.map((tag) => (
            <Link key={tag} href={`/tags/${tagToSlug(tag)}`}>
              {tag}
            </Link>
          ))}
        </div>
        <ProjectImages
          image={project.image}
          mobileImage={project.mobileImage}
          title={project.title}
        />
      </main>
    </>
  );
}

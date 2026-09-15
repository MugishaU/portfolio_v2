import WorkList from "@/components/WorkList";
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag: tagSlug } = await params;
  const tag = getTagFromSlug(tagSlug);
  if (!tag) {
    return { title: "Tag Not Found" };
  }
  return {
    title: `${tag} Projects | Mugisha Uwiragiye`,
    description: `Projects using ${tag}`,
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag: tagSlug } = await params;
  const tag = getTagFromSlug(tagSlug);

  if (!tag) {
    notFound();
  }

  const filteredProjects = projects.filter((project) =>
    project.tags.includes(tag),
  );

  return (
    <>
      <Header />
      <main id="main-content" className="page-content">
        <Link href="/projects" className="back-link">
          Back to Work
        </Link>
        <h1>{tag}.</h1>
        <WorkList projects={filteredProjects} />
      </main>
    </>
  );
}

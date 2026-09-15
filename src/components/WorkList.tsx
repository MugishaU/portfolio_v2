import Link from "next/link";
import type { Project } from "@/data/projects";

export default function WorkList({ projects }: { projects: Project[] }) {
  return (
    <ul className="work-list">
      {projects.map((project) => (
        <li key={project.slug}>
          <Link href={`/projects/${project.slug}`}>
            <span>{project.title}</span>
            <span className="work-description">{project.shortDescription}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

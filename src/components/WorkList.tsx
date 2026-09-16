import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

export default function WorkList({ projects }: { projects: Project[] }) {
  return (
    <ul className="work-list">
      {projects.map((project) => (
        <li key={project.slug}>
          <Link href={`/projects/${project.slug}`}>
            <span className="work-preview">
              <Image
                src={project.image}
                alt={`${project.title} website preview`}
                fill
                sizes="(max-width: 800px) calc(100vw - 56px), 744px"
              />
            </span>
            <span className="work-title">
              {project.title}
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M5 19 19 5M5 5h14v14" />
              </svg>
            </span>
            <span className="work-description">{project.shortDescription}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  thumbnail: string;
  image: string;
  mobileImage?: string;
  websiteUrl?: string;
  githubUrl?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "7styles",
    title: "7 Styles",
    shortDescription: "Hairdresser & wig retailer",
    description:
      "A WordPress website built for 7 Styles, a London-based barbershop. The site showcases their services, team, and allows customers to book appointments. Features a clean, modern design with mobile responsiveness and integration with booking systems.",
    thumbnail: "/projects/7styles-thumb.svg",
    image: "/projects/7styles.svg",
    mobileImage: "/projects/7styles-mobile.svg",
    websiteUrl: "https://www.7styles.co.uk",
    tags: ["WordPress", "Web Design"],
  },
  {
    slug: "amos-onchiri",
    title: "Amos Onchiri",
    shortDescription: "Life coach",
    description:
      "A portfolio website designed and built for Amos Onchiri, showcasing their professional work and achievements. The site features a clean, minimalist design with smooth animations and a focus on content presentation.",
    thumbnail: "/projects/amos-onchiri-thumb.svg",
    image: "/projects/amos-onchiri.svg",
    mobileImage: "/projects/amos-onchiri-mobile.svg",
    websiteUrl: "https://www.amosonchiri.com",
    tags: ["WordPress", "Web Design"],
  },
  {
    slug: "mirror-mirror-play",
    title: "Mirror Mirror Play",
    shortDescription: "Theatre production",
    description:
      "A promotional website for Mirror Mirror, a theatre production. Built with React, featuring show information, cast details, and performance dates. A clean, focused design that serves the production's promotional needs.",
    thumbnail: "/projects/mirror-mirror-thumb.svg",
    image: "/projects/mirror-mirror.svg",
    mobileImage: "/projects/mirror-mirror-mobile.svg",
    websiteUrl: "https://www.mirrormirrorplay.com",
    tags: ["React", "Web Design"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function tagToSlug(tag: string): string {
  return tag.toLowerCase().replace(/\s+/g, "-");
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  projects.forEach((project) => {
    project.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags);
}

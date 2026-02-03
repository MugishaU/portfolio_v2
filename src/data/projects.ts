export type Project = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  image: string;
  websiteUrl?: string;
  githubUrl?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "7styles",
    title: "7 Styles",
    description:
      "A WordPress website built for 7 Styles, a London-based barbershop. The site showcases their services, team, and allows customers to book appointments. Features a clean, modern design with mobile responsiveness and integration with booking systems.",
    thumbnail: "/projects/7styles-thumb.svg",
    image: "/projects/7styles.svg",
    websiteUrl: "https://www.7styles.co.uk",
    tags: ["WordPress", "Web Design"],
  },
  {
    slug: "amos-onchiri",
    title: "Amos Onchiri",
    description:
      "A portfolio website designed and built for Amos Onchiri, showcasing their professional work and achievements. The site features a clean, minimalist design with smooth animations and a focus on content presentation.",
    thumbnail: "/projects/amos-onchiri-thumb.svg",
    image: "/projects/amos-onchiri.svg",
    websiteUrl: "https://www.amosonchiri.com",
    tags: ["WordPress", "Web Design"],
  },
  {
    slug: "twitter-bot",
    title: "Twitter Bot",
    description:
      "A TypeScript-based Twitter bot that automates interactions on the platform. Built as a personal project to explore the Twitter API and automation techniques. Deployed using GitHub Actions for CI/CD, Terraform for infrastructure as code, and hosted on AWS.",
    thumbnail: "/projects/twitter-bot-thumb.svg",
    image: "/projects/twitter-bot.svg",
    githubUrl: "https://github.com/MugishaU/twitter-bot",
    tags: ["TypeScript", "GitHub Actions", "Terraform", "AWS"],
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

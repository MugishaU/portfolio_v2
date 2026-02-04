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
    slug: '7styles',
    title: '7 Styles',
    shortDescription: 'Hair salon & products',
    description:
      'A website for 7 Styles, a UK-based hair salon and product retailer. Customers can shop for hair products or book styling appointments online.',
    thumbnail: '/projects/7-styles-desktop.jpeg',
    image: '/projects/7-styles-desktop.jpeg',
    mobileImage: '/projects/7-styles-mobile.jpeg',
    websiteUrl: 'https://www.7styles.co.uk',
    tags: ['WordPress', 'Web Design'],
  },
  {
    slug: 'amos-onchiri',
    title: 'Amos Onchiri Life Coaching',
    shortDescription: 'Life & relationship coach',
    description:
      'A website for Amos Onchiri, a life coach helping clients find clarity, build confidence, and strengthen relationships. Visitors can explore his coaching services, read his blog, and book sessions with him.',
    thumbnail: '/projects/amos-onchiri-desktop.jpeg',
    image: '/projects/amos-onchiri-desktop.jpeg',
    mobileImage: '/projects/amos-onchiri-mobile.jpeg',
    websiteUrl: 'https://www.amosonchiri.com',
    tags: ['WordPress', 'Web Design'],
  },
  {
    slug: 'mirror-mirror',
    title: 'Mirror Mirror',
    shortDescription: 'Theatre production',
    description:
      'A simple promotional website for Mirror Mirror, a theatre production. Everything audiences needed to know about the show lived here, from the story and cast to tickets and directions.',
    thumbnail: '/projects/mirror-mirror-desktop.jpeg',
    image: '/projects/mirror-mirror-desktop.jpeg',
    mobileImage: '/projects/mirror-mirror-mobile.jpeg',
    websiteUrl: 'https://www.mirrormirrorplay.com',
    tags: ['React', 'Web Design'],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function tagToSlug(tag: string): string {
  return tag.toLowerCase().replace(/\s+/g, '-');
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  projects.forEach((project) => {
    project.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags);
}

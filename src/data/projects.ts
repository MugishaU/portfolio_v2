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
};

export const projects: Project[] = [
  {
    slug: "lewisham-youth-theatre",
    title: "Lewisham Youth Theatre",
    shortDescription: "Youth theatre and creative programmes",
    description:
      "A website for Lewisham Youth Theatre, a charity offering free, inclusive theatre opportunities for young people aged 8–25. Visitors can explore performance and backstage programmes, discover upcoming events, and find ways to get involved.",
    thumbnail: "/projects/lewisham-youth-theatre-free-youth-desktop.jpeg",
    image: "/projects/lewisham-youth-theatre-free-youth-desktop.jpeg",
    mobileImage: "/projects/lewisham-youth-theatre-free-youth-mobile.jpeg",
    websiteUrl: "https://lewishamyouththeatre.com",
  },
  {
    slug: "7styles",
    title: "7 Styles",
    shortDescription: "Hair salon and retailer",
    description:
      "A WordPress website for 7 Styles, a UK-based hair salon and product retailer. Customers can shop for hair products or book styling appointments online.",
    thumbnail: "/projects/7-styles-desktop.jpeg",
    image: "/projects/7-styles-desktop.jpeg",
    mobileImage: "/projects/7-styles-mobile.jpeg",
    websiteUrl: "https://www.7styles.co.uk",
  },
  {
    slug: "amos-onchiri",
    title: "Amos Onchiri Life Coaching",
    shortDescription: "Life coaching services",
    description:
      "A WordPress website for Amos Onchiri, a life coach helping clients find clarity, build confidence, and strengthen relationships. Visitors can explore his coaching services, read his blog, and book sessions with him.",
    thumbnail: "/projects/amos-onchiri-desktop.jpeg",
    image: "/projects/amos-onchiri-desktop.jpeg",
    mobileImage: "/projects/amos-onchiri-mobile.jpeg",
    websiteUrl: "https://www.amosonchiri.com",
  },
  {
    slug: "mirror-mirror",
    title: "Mirror Mirror",
    shortDescription: "Theatre production",
    description:
      "A simple promotional website for Mirror Mirror, a theatre production. Everything audiences needed to know about the show lived here, from the story and cast to tickets and directions.",
    thumbnail: "/projects/mirror-mirror-desktop.jpeg",
    image: "/projects/mirror-mirror-desktop.jpeg",
    mobileImage: "/projects/mirror-mirror-mobile.jpeg",
    websiteUrl: "https://www.mirrormirrorplay.com",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

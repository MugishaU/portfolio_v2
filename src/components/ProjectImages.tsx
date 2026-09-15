import Image from "next/image";

interface ProjectImagesProps {
  image: string;
  mobileImage?: string;
  title: string;
}

export default function ProjectImages({
  image,
  mobileImage,
  title,
}: ProjectImagesProps) {
  return (
    <div className="project-images">
      <div className="project-desktop-image">
        <Image
          src={image}
          alt={`${title} — desktop website`}
          fill
          sizes="(max-width: 760px) calc(100vw - 56px), 540px"
          className="object-contain object-top"
        />
      </div>
      {mobileImage && (
        <div className="project-mobile-image">
          <Image
            src={mobileImage}
            alt={`${title} — mobile website`}
            fill
            sizes="(max-width: 760px) 140px, 160px"
            className="object-contain object-top"
          />
        </div>
      )}
    </div>
  );
}

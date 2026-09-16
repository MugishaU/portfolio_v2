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
          alt={`${title} - desktop website`}
          fill
          sizes="(max-width: 600px) calc(100vw - 56px), (max-width: 800px) 72vw, 547px"
        />
      </div>
      {mobileImage && (
        <div className="project-mobile-image">
          <Image
            src={mobileImage}
            alt={`${title} - mobile website`}
            fill
            sizes="(max-width: 600px) 32vw, (max-width: 800px) 23vw, 173px"
          />
        </div>
      )}
    </div>
  );
}

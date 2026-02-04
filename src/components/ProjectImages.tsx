"use client";

import { useRef, useState, useEffect } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageHeight, setImageHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        // Calculate height based on container width and 16:9 aspect ratio
        const width = containerRef.current.offsetWidth;
        setImageHeight(width * (9 / 16));
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="flex gap-4 mb-6 items-start">
      {/* Desktop Screenshot */}
      <div
        ref={containerRef}
        className="flex-1 rounded-lg overflow-hidden border border-[var(--color-muted)]/20"
        style={imageHeight ? { height: imageHeight } : undefined}
      >
        <img
          src={image}
          alt={`${title} - Desktop`}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Mobile Screenshot - hidden on mobile, same height as desktop */}
      {mobileImage && imageHeight && (
        <div
          className="hidden md:block shrink-0 rounded-lg overflow-hidden border border-[var(--color-muted)]/20"
          style={{ height: imageHeight }}
        >
          <img
            src={mobileImage}
            alt={`${title} - Mobile`}
            className="h-full w-auto"
          />
        </div>
      )}
    </div>
  );
}

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
  const [height, setHeight] = useState<number>(400);

  useEffect(() => {
    const calculateHeight = () => {
      if (containerRef.current) {
        // Height based on container width * 0.4 (reasonable proportion)
        const width = containerRef.current.offsetWidth;
        setHeight(Math.min(width * 0.45, 500)); // Cap at 500px
      }
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  return (
    <div ref={containerRef} className="mb-6">
      <div
        className="flex gap-4 items-center"
        style={{ height }}
      >
        {/* Desktop Screenshot */}
        <div className="h-full rounded-lg overflow-hidden border border-[var(--color-muted)]/20">
          <img
            src={image}
            alt={`${title} - Desktop`}
            className="h-full w-auto"
          />
        </div>
        {/* Mobile Screenshot - hidden on mobile */}
        {mobileImage && (
          <div className="hidden md:block h-full rounded-lg overflow-hidden border border-[var(--color-muted)]/20">
            <img
              src={mobileImage}
              alt={`${title} - Mobile`}
              className="h-full w-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
}

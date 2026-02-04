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
        const width = containerRef.current.offsetWidth;
        setHeight(Math.min(width * 0.45, 500));
      }
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  return (
    <div ref={containerRef} className="mb-6">
      {/* Mobile layout - just desktop image, full width, centered */}
      <div className="md:hidden">
        <div className="rounded-lg overflow-hidden border border-[var(--color-muted)]/20">
          <img
            src={image}
            alt={`${title} - Desktop`}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Desktop layout - both images side by side */}
      <div
        className="hidden md:flex gap-4 items-center justify-center"
        style={{ height }}
      >
        <div className="h-full rounded-lg overflow-hidden border border-[var(--color-muted)]/20">
          <img
            src={image}
            alt={`${title} - Desktop`}
            className="h-full w-auto"
          />
        </div>
        {mobileImage && (
          <div className="h-full rounded-lg overflow-hidden border border-[var(--color-muted)]/20">
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

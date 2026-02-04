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
  const desktopRef = useRef<HTMLImageElement>(null);
  const [desktopHeight, setDesktopHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (desktopRef.current) {
        setDesktopHeight(desktopRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="flex gap-4 mb-6">
      {/* Desktop Screenshot */}
      <div className="flex-1 rounded-lg overflow-hidden border border-[var(--color-muted)]/20">
        <img
          ref={desktopRef}
          src={image}
          alt={`${title} - Desktop`}
          className="w-full h-auto block"
          onLoad={() => {
            if (desktopRef.current) {
              setDesktopHeight(desktopRef.current.offsetHeight);
            }
          }}
        />
      </div>
      {/* Mobile Screenshot - hidden on mobile, same height as desktop */}
      {mobileImage && desktopHeight && (
        <div
          className="hidden md:block shrink-0 rounded-lg overflow-hidden border border-[var(--color-muted)]/20"
          style={{ height: desktopHeight }}
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

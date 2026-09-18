"use client";

import { useState, type ReactNode } from "react";

export default function ExperienceDisclosure({
  id,
  company,
  dateRange,
  children,
}: {
  id: string;
  company: string;
  dateRange: string;
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="experience-disclosure">
      <button
        type="button"
        className="experience-toggle"
        aria-expanded={isOpen}
        aria-controls={`${id}-roles`}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="experience-company">
          <span className="experience-indicator" aria-hidden="true" />
          {company}
        </span>
        <span className="experience-date">{dateRange}</span>
      </button>
      <div
        id={`${id}-roles`}
        className="experience-panel"
        inert={!isOpen}
        data-open={isOpen}
      >
        <div className="experience-panel-inner">{children}</div>
      </div>
    </div>
  );
}

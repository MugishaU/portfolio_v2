"use client";

import Header from "@/components/Header";
import ContactFooter from "@/components/ContactFooter";
import { useState } from "react";

type TimelineEntry = {
  id: string;
  company: string;
  dateRange: string;
  roles: {
    title: string;
    dateRange: string;
    bullets: string[];
  }[];
};

const experience: TimelineEntry[] = [
  {
    id: "lapse",
    company: "Lapse",
    dateRange: "Jul 2024 - Present",
    roles: [
      {
        title: "Senior Software Engineer",
        dateRange: "Jan 2026 - Present",
        bullets: [
          "TypeScript, DevOps, and other technologies.",
        ],
      },
      {
        title: "Software Engineer",
        dateRange: "Jul 2024 - Jan 2026",
        bullets: [
          "Kubernetes, TypeScript, and other technologies.",
        ],
      },
    ],
  },
  {
    id: "kaluza",
    company: "Kaluza",
    dateRange: "Nov 2020 - Jul 2024",
    roles: [
      {
        title: "Software Engineer",
        dateRange: "May 2022 - Jul 2024",
        bullets: [
          "Backend TypeScript engineer, utilising AWS, Docker, Apache Kafka and Terraform (Infrastructure as Code) amongst other technologies.",
        ],
      },
      {
        title: "Junior Software Engineer",
        dateRange: "Nov 2020 - May 2022",
        bullets: [
          "Backend Scala engineer, utilising AWS, Apache Kafka and Terraform (Infrastructure as Code) amongst other technologies.",
        ],
      },
    ],
  },
  {
    id: "lafosse",
    company: "La Fosse",
    dateRange: "Jul 2020 - Nov 2020",
    roles: [
      {
        title: "Trainee Software Engineer",
        dateRange: "Jul 2020 - Nov 2020",
        bullets: [
          "Trained to become a full-stack software engineer. Training in HTML/CSS, JavaScript, React.js, and more.",
        ],
      },
    ],
  },
];

export default function AboutPage() {
  const [selectedId, setSelectedId] = useState<string>(experience[0].id);

  return (
    <div className="min-h-dvh flex flex-col relative">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[var(--color-background)] via-[var(--color-background)] to-[#112240] pointer-events-none" />
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--color-foreground) 1px, transparent 1px),
                           linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <Header />

      <main className="relative flex-1 flex flex-col px-6 md:px-12 py-8 md:py-12 max-w-5xl mx-auto w-full">
        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)] mb-8 uppercase text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          About Me
        </h1>

        {/* Bio with Photo */}
        <div className="flex flex-col-reverse md:flex-row gap-8 mb-10 items-center md:items-start">
          <p className="text-[var(--color-foreground)] text-base md:text-lg leading-relaxed max-w-xl">
            My name is <span className="text-[var(--color-accent)]">Mugisha Uwiragiye</span>, and I am currently a{" "}
            <span className="text-[var(--color-accent)]">Senior Software Engineer</span> at{" "}
            <a
              href="https://www.lapse.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] underline hover:text-[var(--color-accent-secondary)] transition-colors"
            >
              Lapse
            </a>
            . I primarily work with{" "}
            <span className="text-[var(--color-accent)]">TypeScript</span>,{" "}
            <span className="text-[var(--color-accent)]">Kubernetes</span>, and{" "}
            <span className="text-[var(--color-accent)]">DevOps</span> technologies.
          </p>
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-[var(--color-accent)]/30 shrink-0 md:ml-auto">
            <img
              src="/profile.jpg"
              alt="Mugisha Uwiragiye"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <hr className="border-[var(--color-muted)]/30 mb-10" />

        {/* Experience Section - Accordion Timeline */}
        <div className="max-w-2xl">
          {experience.map((entry, index) => {
            const isOpen = selectedId === entry.id;
            return (
              <div key={entry.id} className="flex gap-4">
                {/* Timeline line and dot */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-3 h-3 rounded-full shrink-0 mt-1 ${
                      isOpen
                        ? "bg-[var(--color-accent)]"
                        : "bg-[var(--color-muted)]/50"
                    } transition-colors`}
                  />
                  {index < experience.length - 1 && (
                    <div className="w-0.5 flex-1 bg-[var(--color-muted)]/30" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-6 flex-1">
                  <button
                    onClick={() => setSelectedId(isOpen ? "" : entry.id)}
                    className="flex items-center gap-3 text-left w-full group"
                  >
                    <span
                      className={`text-xs ${
                        isOpen ? "text-[var(--color-accent)]" : "text-[var(--color-muted)]"
                      }`}
                    >
                      {entry.dateRange}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        isOpen
                          ? "text-[var(--color-foreground)]"
                          : "text-[var(--color-muted)] group-hover:text-[var(--color-foreground)]"
                      } transition-colors`}
                    >
                      {entry.company}
                    </span>
                  </button>

                  {/* Expandable content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-4">
                        {entry.roles.map((role, roleIndex) => (
                          <div key={roleIndex}>
                            <div className="mb-2">
                              <h3 className="text-[var(--color-accent-secondary)] font-medium text-sm">
                                {role.title}
                              </h3>
                              <span className="text-[var(--color-muted)] text-xs">
                                {role.dateRange}
                              </span>
                            </div>
                            <ul className="space-y-2">
                              {role.bullets.map((bullet, bulletIndex) => (
                                <li
                                  key={bulletIndex}
                                  className="text-[var(--color-muted)] text-sm flex gap-2"
                                >
                                  <span className="text-[var(--color-accent)]">•</span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <div className="relative">
        <ContactFooter />
      </div>
    </div>
  );
}

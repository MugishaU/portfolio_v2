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
    bullets: string[];
  }[];
};

const experience: TimelineEntry[] = [
  {
    id: "kaluza",
    company: "Kaluza",
    dateRange: "2020 - Present",
    roles: [
      {
        title: "Senior Back-end Engineer",
        bullets: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Cras sagittis tortor lorem ipsum dolor sit amet.",
        ],
      },
      {
        title: "Back-end Engineer",
        bullets: [
          "Porttitor, dapibus mi id, egestas lectus.",
          "Donec vitae tempus augue. Duis porttitor nibh eget ullamcorper lobortis.",
        ],
      },
    ],
  },
  {
    id: "futureproof",
    company: "futureproof",
    dateRange: "2020",
    roles: [
      {
        title: "Trainee Software Engineer",
        bullets: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Cras sagittis tortor lorem ipsum dolor sit amet.",
        ],
      },
    ],
  },
  {
    id: "exeter",
    company: "Exeter University",
    dateRange: "2016 - 2020",
    roles: [
      {
        title: "BSc Computer Science",
        bullets: [
          "Porttitor, dapibus mi id, egestas lectus.",
          "Donec vitae tempus augue.",
        ],
      },
    ],
  },
];

export default function AboutPage() {
  const [selectedId, setSelectedId] = useState<string>(experience[0].id);
  const selectedEntry = experience.find((e) => e.id === selectedId) || experience[0];

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
          className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)] mb-8 uppercase"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          About Me
        </h1>

        {/* Bio */}
        <p className="text-[var(--color-foreground)] text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
          My name is <span className="text-[var(--color-accent)]">Mugisha Uwiragiye</span>, and I am currently a{" "}
          <span className="text-[var(--color-accent)]">back-end</span> engineer. I primarily use{" "}
          <span className="text-[var(--color-accent)]">Scala</span> &{" "}
          <span className="text-[var(--color-accent)]">AWS</span> to help build an Intelligent SaaS Energy Platform at{" "}
          <a
            href="https://www.kaluza.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] underline hover:text-[var(--color-accent-secondary)] transition-colors"
          >
            Kaluza
          </a>
          .
        </p>

        <hr className="border-[var(--color-muted)]/30 mb-10 max-w-md" />

        {/* Experience Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 flex-1">
          {/* Timeline */}
          <div className="flex flex-row md:flex-col gap-4 md:gap-0 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
            {experience.map((entry, index) => (
              <button
                key={entry.id}
                onClick={() => setSelectedId(entry.id)}
                className="flex items-center gap-3 md:gap-4 text-left group shrink-0"
              >
                {/* Date and line */}
                <div className="flex flex-col items-center">
                  <span className={`text-xs whitespace-nowrap ${selectedId === entry.id ? "text-[var(--color-accent)]" : "text-[var(--color-muted)]"}`}>
                    {entry.dateRange}
                  </span>
                  <div className="hidden md:flex flex-col items-center">
                    {/* Dot */}
                    <div
                      className={`w-3 h-3 rounded-full mt-2 ${
                        selectedId === entry.id
                          ? "bg-[var(--color-accent)]"
                          : "bg-[var(--color-muted)]/50 group-hover:bg-[var(--color-muted)]"
                      } transition-colors`}
                    />
                    {/* Line */}
                    {index < experience.length - 1 && (
                      <div className="w-0.5 h-16 bg-[var(--color-muted)]/30" />
                    )}
                  </div>
                </div>

                {/* Company name (mobile) */}
                <span
                  className={`md:hidden text-sm ${
                    selectedId === entry.id
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-muted)] group-hover:text-[var(--color-foreground)]"
                  } transition-colors`}
                >
                  {entry.company}
                </span>
              </button>
            ))}
          </div>

          {/* Experience Details */}
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-foreground)] mb-6">
              Experience{" "}
              <span className="text-[var(--color-accent)]">@{selectedEntry.company}</span>
            </h2>

            <div className="space-y-6">
              {selectedEntry.roles.map((role, roleIndex) => (
                <div key={roleIndex}>
                  {selectedEntry.roles.length > 1 && (
                    <h3 className="text-[var(--color-accent-secondary)] font-medium mb-2">
                      {role.title}
                    </h3>
                  )}
                  <ul className="space-y-2">
                    {role.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="text-[var(--color-muted)] text-sm md:text-base flex gap-2"
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

        {/* Profile Picture */}
        <div className="flex justify-center mt-12">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-[var(--color-accent)]/30">
            <img
              src="/profile.jpg"
              alt="Mugisha Uwiragiye"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>

      <ContactFooter />
    </div>
  );
}

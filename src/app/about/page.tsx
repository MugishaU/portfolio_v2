import Header from "@/components/Header";
import ContactFooter from "@/components/ContactFooter";
import type { ReactNode } from "react";
import Link from "next/link";

type TimelineEntry = {
  id: string;
  company: string;
  dateRange: string;
  roles: {
    title: string;
    dateRange: string;
    bullets: ReactNode[];
  }[];
};

const Num = ({ children }: { children: ReactNode }) => (
  <span className="text-[var(--color-accent)]">{children}</span>
);

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
          "Led backend development for multiple core features on a new initiative, helping shape the architecture and take systems into production.",
          "Built a production deployment pipeline with GitHub Actions, Terraform, and Kubernetes, with Slack and Linear integrations to give non-technical stakeholders better visibility and reduce engineering overhead.",
        ],
      },
      {
        title: "Software Engineer",
        dateRange: "Jul 2024 - Jan 2026",
        bullets: [
          <>
            Built Streaks, a lenient retention system with timezone-aware
            notifications and live activity reminders, contributing to an
            increase in media sent by engaged users from <Num>400k</Num> to{" "}
            <Num>600k</Num> on high-frequency days.
          </>,
          <>
            Built content moderation systems, including user reporting and
            blocking for App Store compliance, and shipped a self-serve
            dashboard that reduced banned-list update time from{" "}
            <Num>over a day</Num> to under <Num>30 seconds</Num>.
          </>,
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
          <>
            Built a secure payments API from scratch supporting{" "}
            <Num>98,000+</Num> customers in Australia, helping Kaluza establish
            its first billing platform overseas.
          </>,
          <>
            Optimised release pipelines to halve run times, saving{" "}
            <Num>~15 minutes</Num> per deployment through parallelising
            independent jobs.
          </>,
          "Pioneered a project to consolidate essential packages into independently deployable libraries within a monorepo.",
        ],
      },
      {
        title: "Junior Software Engineer",
        dateRange: "Nov 2020 - May 2022",
        bullets: [
          "Maintained payment management APIs integrated with third-party providers like GoCardless, serving millions of customers across the OVO group.",
          <>
            Led load testing efforts that exposed bottlenecks, ensuring smooth
            operation on National Meter Read Day despite <Num>1400%</Num>{" "}
            traffic increases.
          </>,
        ],
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="page-content about-content">
        <h1>About.</h1>
        <p className="page-intro">
          I’m Mugisha Uwiragiye, a Senior Software Engineer at Lapse. I build
          backend systems and the infrastructure that supports them.
        </p>
        <p>
          Before Lapse, I worked on payments at Kaluza. My work spans APIs,
          cloud infrastructure, and deployment pipelines.
        </p>
        <section className="experience" aria-labelledby="experience-heading">
          <h2 id="experience-heading">Experience</h2>
          {experience.map((entry) => (
            <details key={entry.id}>
              <summary>
                <span>{entry.company}</span>
                <span className="experience-date">{entry.dateRange}</span>
              </summary>
              <div className="experience-roles">
                {entry.roles.map((role) => (
                  <section key={role.title}>
                    <h3>{role.title}</h3>
                    <p className="role-date">{role.dateRange}</p>
                    <ul>
                      {role.bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </details>
          ))}
        </section>
        <ContactFooter />
        <Link href="/thanks" className="thanks-link">
          A few thank-yous
        </Link>
      </main>
    </>
  );
}

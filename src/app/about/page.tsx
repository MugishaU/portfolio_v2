'use client';

import Header from '@/components/Header';
import ContactFooter from '@/components/ContactFooter';
import { useState, ReactNode } from 'react';

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
  <span className='text-[var(--color-accent)]'>{children}</span>
);

const experience: TimelineEntry[] = [
  {
    id: 'lapse',
    company: 'Lapse',
    dateRange: 'Jul 2024 - Present',
    roles: [
      {
        title: 'Senior Software Engineer',
        dateRange: 'Jan 2026 - Present',
        bullets: [
          'Led backend development for multiple core features on a new initiative, helping shape the architecture and take systems into production.',
          'Built a production deployment pipeline with GitHub Actions, Terraform, and Kubernetes (Helm), with Slack and Linear integrations to give non-technical stakeholders better visibility and reduce engineering overhead.',
        ],
      },
      {
        title: 'Software Engineer',
        dateRange: 'Jul 2024 - Jan 2026',
        bullets: [
          <>
            Built Streaks, a lenient retention system with timezone-aware
            notifications and live activity reminders, contributing to an
            increase in media sent by engaged users from <Num>400k</Num> to{' '}
            <Num>600k</Num> on high-frequency days.
          </>,
          <>
            Built content moderation systems, including user reporting and
            blocking for App Store compliance, and shipped a self-serve
            dashboard that reduced banned-list update time from{' '}
            <Num>over a day</Num> to under <Num>30 seconds</Num>.
          </>,
        ],
      },
    ],
  },
  {
    id: 'kaluza',
    company: 'Kaluza',
    dateRange: 'Nov 2020 - Jul 2024',
    roles: [
      {
        title: 'Software Engineer',
        dateRange: 'May 2022 - Jul 2024',
        bullets: [
          <>
            Built a secure payments API from scratch supporting{' '}
            <Num>98,000+</Num> customers in Australia, helping Kaluza establish
            its first billing platform overseas.
          </>,
          <>
            Optimised release pipelines to halve run times, saving{' '}
            <Num>~15 minutes</Num> per deployment through parallelising
            independent jobs.
          </>,
          'Pioneered a project to consolidate essential packages into independently deployable libraries within a monorepo.',
        ],
      },
      {
        title: 'Junior Software Engineer',
        dateRange: 'Nov 2020 - May 2022',
        bullets: [
          'Maintained payment management APIs integrated with third-party providers like GoCardless, serving millions of customers across the OVO group.',
          <>
            Led load testing efforts that exposed bottlenecks, ensuring smooth
            operation on National Meter Read Day despite <Num>1400%</Num>{' '}
            traffic increases.
          </>,
        ],
      },
    ],
  },
];

export default function AboutPage() {
  const [selectedId, setSelectedId] = useState<string>(experience[0].id);

  return (
    <div className='min-h-dvh flex flex-col relative'>
      {/* Background */}
      <div className='fixed inset-0 bg-gradient-to-br from-[var(--color-background)] via-[var(--color-background)] to-[#112240] pointer-events-none' />
      <div
        className='fixed inset-0 opacity-[0.02] pointer-events-none'
        style={{
          backgroundImage: `linear-gradient(var(--color-foreground) 1px, transparent 1px),
                           linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <Header />

      <main className='relative flex-1 flex flex-col px-6 md:px-12 pt-8 md:pt-12 pb-2 max-w-5xl mx-auto w-full'>
        {/* Title */}
        <h1
          className='text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)] mb-8 uppercase text-center'
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          About Me
        </h1>

        {/* Bio with Photo */}
        <div className='flex flex-col md:flex-row gap-6 mb-10 items-center md:items-start'>
          <div className='text-[var(--color-foreground)] text-base md:text-lg leading-relaxed flex-1 text-left order-2 md:order-1'>
            <p>
              My name is{' '}
              <span className='text-[var(--color-accent)]'>
                Mugisha Uwiragiye
              </span>
              , and I am currently a{' '}
              <span className='text-[var(--color-accent)]'>
                Senior Software Engineer
              </span>{' '}
              at <span className='text-[var(--color-accent)]'>Lapse</span>.
            </p>
            <p className='mt-4'>
              I specialise in building{' '}
              <span className='text-[var(--color-accent)]'>
                secure and scalable backend systems
              </span>
              , leveraging{' '}
              <span className='text-[var(--color-accent)]'>
                infrastructure as code
              </span>
              ,{' '}
              <span className='text-[var(--color-accent)]'>
                CI/CD pipelines
              </span>
              , and{' '}
              <span className='text-[var(--color-accent)]'>
                cloud computing
              </span>
              . I enjoy solving complex problems and delivering reliable systems
              at scale.
            </p>
          </div>
          <div className='w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden shrink-0 order-1 md:order-2 shadow-lg shadow-black/20'>
            <img
              src='/profile.png'
              alt='Mugisha Uwiragiye'
              className='w-full h-full object-cover'
            />
          </div>
        </div>

        <hr className='border-[var(--color-muted)]/30 mb-10' />

        {/* Experience Section - Accordion Timeline */}
        <h2
          className='text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-foreground)] mb-6 uppercase'
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Work Experience
        </h2>
        <div className='max-w-3xl'>
          {experience.map((entry, index) => {
            const isOpen = selectedId === entry.id;
            return (
              <div key={entry.id} className='flex gap-4 md:gap-6'>
                {/* Timeline line and dot */}
                <div className='flex flex-col items-center'>
                  <div
                    className={`w-3 h-3 md:w-4 md:h-4 rounded-full shrink-0 mt-1 ${
                      isOpen
                        ? 'bg-[var(--color-accent)]'
                        : 'bg-[var(--color-muted)]/50'
                    } transition-colors`}
                  />
                  {index < experience.length - 1 && (
                    <div className='w-0.5 flex-1 bg-[var(--color-muted)]/30' />
                  )}
                </div>

                {/* Content */}
                <div className='pb-6 md:pb-8 flex-1'>
                  <button
                    onClick={() => setSelectedId(isOpen ? '' : entry.id)}
                    className='flex items-center gap-3 md:gap-4 text-left w-full group'
                  >
                    <span
                      className={`text-sm md:text-base ${
                        isOpen
                          ? 'text-[var(--color-accent)]'
                          : 'text-[var(--color-muted)] group-hover:text-[var(--color-accent)]'
                      } transition-colors`}
                    >
                      {entry.dateRange}
                    </span>
                    <span
                      className={`text-base md:text-lg font-medium ${
                        isOpen
                          ? 'text-[var(--color-foreground)]'
                          : 'text-[var(--color-muted)] group-hover:text-[var(--color-accent)]'
                      } transition-colors`}
                    >
                      {entry.company}
                    </span>
                  </button>

                  {/* Expandable content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100 mt-4'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className='overflow-hidden'>
                      <div className='space-y-4 md:space-y-5'>
                        {entry.roles.map((role, roleIndex) => (
                          <div key={roleIndex}>
                            <div className='mb-2'>
                              <h3 className='text-[var(--color-accent)] font-medium text-sm md:text-base'>
                                {role.title}
                              </h3>
                              <span className='text-[var(--color-muted)] text-xs md:text-sm'>
                                {role.dateRange}
                              </span>
                            </div>
                            <ul className='space-y-4'>
                              {role.bullets.map((bullet, bulletIndex) => (
                                <li
                                  key={bulletIndex}
                                  className='text-[var(--color-foreground)] text-sm md:text-base flex gap-2'
                                >
                                  <span className='text-[var(--color-accent)]'>
                                    •
                                  </span>
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

      <div className='relative'>
        <ContactFooter />
      </div>
    </div>
  );
}

import Header from "@/components/Header";

const names = [
  { name: "Nadin Bart-Williams", accent: true },
  { name: "Cenone Collins", accent: false },
  { name: "Quinnyne Henry-Fender", accent: true },
  { name: "Dashe Illuyemi", accent: false },
  { name: "Lydia Johnson", accent: true },
  { name: "David Kasali", accent: false },
  { name: "Mohsin Malik", accent: true },
  { name: "Caleb Mapoma", accent: false },
  { name: "Naomi Mapoma", accent: true },
  { name: "Jesse Ngizwenayo", accent: false },
  { name: "Leanne Oyeyemi", accent: true },
  { name: "Janie Shepherd", accent: false },
  { name: "Kanon Tsuda", accent: true },
  { name: "Chinazam Ukata", accent: false },
  { name: "Monique Uwiragiye", accent: true },
];

export default function ThanksPage() {
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

      {/* Content */}
      <main className="relative flex-1 flex flex-col items-center px-6 md:px-12 pb-12">
        <h1
          className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)] mb-4 animate-fade-up"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Special Thanks
        </h1>

        <p className="text-center text-[var(--color-muted)] max-w-md leading-relaxed mb-6 animate-fade-up animate-delay-100">
          To my great design consultants who helped me make stylistic choices
          throughout the process (4 years later lol) 💛
        </p>

        {/* Divider */}
        <hr className="border-[var(--color-muted)]/30 w-40 mb-8 animate-fade-up animate-delay-200" />

        {/* Names list */}
        <div className="flex flex-col items-center gap-3 animate-fade-up animate-delay-300">
          {names.map((person) => (
            <span
              key={person.name}
              className={`text-base md:text-lg tracking-wide ${
                person.accent
                  ? "text-[var(--color-accent)] font-medium"
                  : "text-[var(--color-foreground)]"
              }`}
            >
              {person.name}
            </span>
          ))}
        </div>
      </main>
    </div>
  );
}

import Header from "@/components/Header";
import ContactFooter from "@/components/ContactFooter";

export default function ProjectsPage() {
  return (
    <div className="h-dvh flex flex-col relative overflow-hidden">
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

      <main className="relative flex-1 flex flex-col items-center justify-center px-6 py-12">
        <h1
          className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--color-foreground)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Projects
        </h1>
        <p className="mt-4 text-[var(--color-muted)]">Coming soon...</p>
      </main>

      <ContactFooter />
    </div>
  );
}

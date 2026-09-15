import Link from "next/link";

export default function Home() {
  return (
    <main id="main-content" className="home">
      <div className="home-intro">
        <h1 className="home-logo" aria-label="Mugisha Uwiragiye">
          MU.
        </h1>
        <p>
          Software engineer at Lapse.
          <br />I build backend systems.
        </p>
        <nav className="text-links" aria-label="Main navigation">
          <Link href="/projects">Work</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </main>
  );
}

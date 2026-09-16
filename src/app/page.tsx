import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="home">
        <div className="home-intro">
          <h1 className="home-logo" aria-label="Mugisha Uwiragiye">
            Mugisha Uwiragiye
          </h1>
          <p>Senior Software Engineer.</p>
          <nav className="text-links" aria-label="Main navigation">
            <Link href="/projects">Work</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </main>
    </>
  );
}

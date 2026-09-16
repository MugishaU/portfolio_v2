import Link from "next/link";
import Header from "@/components/Header";
import WorkList from "@/components/WorkList";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="page-content">
        <h1>Work.</h1>
        <p className="page-intro">
          A few websites I’ve designed and built for clients.
        </p>
        <WorkList projects={projects} />
        <p className="contact-footer work-contact">
          Interested? <Link href="/contact">Get in touch.</Link>
        </p>
      </main>
    </>
  );
}

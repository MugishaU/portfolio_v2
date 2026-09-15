import Header from "@/components/Header";
import WorkList from "@/components/WorkList";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="page-content">
        <h1>Work.</h1>
        <p className="page-intro">A few websites I’ve designed and built.</p>
        <WorkList projects={projects} />
      </main>
    </>
  );
}

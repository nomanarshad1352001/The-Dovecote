import Link from "next/link";
import type { Project } from "@/lib/content";
import { ArrowUpRight } from "./Icons";

export default function ProjectCard({ project, index, layout = "grid" }: { project: Project; index: number; layout?: "grid" | "list" }) {
  return (
    <article className={`project-card project-card-${layout}`}>
      <Link className="project-image" href={`/work/${project.slug}`} tabIndex={-1} aria-hidden="true">
        <img src={`${project.image}?format=1000w`} alt="" loading="lazy" />
        <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
      </Link>
      <div className="project-card-body">
        <p className="eyebrow">{project.category}</p>
        <h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3>
        <p>{project.summary}</p>
        <Link className="text-link" href={`/work/${project.slug}`}>Explore project <ArrowUpRight width={17} height={17} /></Link>
      </div>
    </article>
  );
}

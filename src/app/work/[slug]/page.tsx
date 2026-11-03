import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NominationForm from "@/components/NominationForm";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";
import { assetUrls, projects, researchPaperUrl } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const projectIndex = projects.indexOf(project);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const isNomination = project.slug === "nominate-a-candidate";

  return (
    <>
      <section className="project-detail-hero">
        <div className="shell project-detail-grid">
          <div className="project-detail-copy">
            <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/work">Work</Link><span>/</span><span>{project.shortTitle}</span></nav>
            <p className="eyebrow">{project.category}</p>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            {project.cta && !isNomination && (
              <a className="button button-light" href={project.cta.href} target={project.cta.external ? "_blank" : undefined} rel={project.cta.external ? "noreferrer" : undefined}>
                {project.cta.label} <ArrowUpRight width={18} height={18} />
              </a>
            )}
            {isNomination && <a className="button button-light" href="#nomination-form">Make a nomination <ArrowRight width={18} height={18} /></a>}
          </div>
          <div className="project-detail-image">
            <img src={`${project.image}?format=1500w`} alt={project.imageAlt} fetchPriority="high" />
            <span>Project {String(projectIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
          </div>
        </div>
      </section>

      <section className="content-section project-article-section">
        <div className="shell content-grid">
          <aside className="content-label article-sidebar">
            <p className="eyebrow">The project</p>
            <div className="article-side-links">
              {isNomination && <a href="#nomination-form">Nomination form</a>}
              {project.slug === "partnerships-and-opportunities" && <Link href="/careers">Careers</Link>}
              {(project.category === "Research & policy" || project.slug === "partnerships-and-opportunities") && <a href={researchPaperUrl} target="_blank" rel="noreferrer">Research paper ↗</a>}
              <Link href="/contact">Contact the institute</Link>
            </div>
          </aside>
          <article className="rich-text">
            <h2>{project.intro}</h2>
            {project.paragraphs.map((paragraph, index) => <p className={index === 0 ? "lead" : undefined} key={paragraph}>{paragraph}</p>)}
            {project.slug === "about-nomination-day" && <Link className="text-link" href="/work/nominate-a-candidate">Nominate someone you know <ArrowUpRight width={17} height={17} /></Link>}
            {project.slug === "the-most-important-podcast" && (
              <div className="project-inline-actions">
                <a className="text-link" href="https://themostimportantpodcast.buzzsprout.com/" target="_blank" rel="noreferrer">Listen to the podcast <ArrowUpRight width={17} height={17} /></a>
                <Link className="text-link" href="/contact?interest=general">Join us on the show <ArrowUpRight width={17} height={17} /></Link>
              </div>
            )}
            {project.slug === "partnerships-and-opportunities" && (
              <div className="project-inline-actions"><Link className="text-link" href="/contact?interest=partnership">Become a partner <ArrowUpRight width={17} height={17} /></Link><Link className="text-link" href="/careers">View open roles <ArrowUpRight width={17} height={17} /></Link></div>
            )}
            {project.slug === "life-satisfaction-appropriations-request" && <Link className="text-link" href="/contact?interest=partnership">Partner on the survey <ArrowUpRight width={17} height={17} /></Link>}
          </article>
        </div>
      </section>

      {project.slug === "partnerships-and-opportunities" && (
        <section className="project-source-image"><div className="shell"><p className="eyebrow">From the research</p><img src={`${assetUrls.graph}?format=1500w`} alt="Spanning graph illustrating the institute’s life satisfaction research" loading="lazy" /></div></section>
      )}
      {project.slug === "the-most-important-podcast" && (
        <section className="project-source-image podcast-source"><div className="shell"><p className="eyebrow">The Most Important Podcast</p><a href="https://themostimportantpodcast.buzzsprout.com/" target="_blank" rel="noreferrer"><img src={`${assetUrls.podcastScreen}?format=1500w`} alt="The Most Important Podcast website" loading="lazy" /></a></div></section>
      )}

      {isNomination && (
        <section className="nomination-section" id="nomination-form">
          <div className="shell nomination-grid">
            <div><p className="eyebrow">Nomination Day · July 5</p><h2>Who do you know?</h2><p>Tell us about someone whose character, judgment, and service make them right for public office. Required fields are marked with an asterisk.</p><Link className="text-link" href="/work/about-nomination-day">Why nomination matters <ArrowUpRight width={17} height={17} /></Link></div>
            <NominationForm />
          </div>
        </section>
      )}

      <nav className="project-pagination shell" aria-label="More projects">
        <Link href="/work"><span>←</span> All work</Link>
        <Link href={`/work/${nextProject.slug}`}><span><small>Next project</small>{nextProject.shortTitle}</span><ArrowRight width={24} height={24} /></Link>
      </nav>
    </>
  );
}

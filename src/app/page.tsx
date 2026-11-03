import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import ProjectCard from "@/components/ProjectCard";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";
import { assetUrls, news, projects, researchPaperUrl, researchPdfUrl } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <img className="home-hero-image" src={`${assetUrls.hero}?format=2500w`} alt="Aerial view of a forested landscape" fetchPriority="high" />
        <div className="home-hero-shade" />
        <div className="shell home-hero-content">
          <p className="hero-kicker"><span /> Research · Policy · Human flourishing</p>
          <h1 id="home-title">
            <span>It’s time to go in a better direction.</span>
            <span>Our research points the way.</span>
          </h1>
          <div className="hero-bottom">
            <p>We turn evidence about what makes life better into research, policy, partnerships, and action.</p>
            <div className="hero-actions">
              <Link className="button button-light" href="/research">Explore the research <ArrowRight width={18} height={18} /></Link>
              <Link className="button button-ghost-light" href="/work">See our work <ArrowUpRight width={17} height={17} /></Link>
            </div>
          </div>
        </div>
        <div className="hero-location">WASHINGTON, DC <span>38.9072° N</span></div>
      </section>

      <section className="section research-intro" id="research" aria-labelledby="research-title">
        <div className="shell">
          <div className="section-topline">
            <p className="eyebrow"><span>01</span> Research</p>
            <p>A new compass for human progress</p>
          </div>
          <div className="research-intro-grid">
            <div className="research-statement">
              <h2 id="research-title">A more powerful, more objective, and more actionable compass.</h2>
              <p>The Dovecote Institute has created what is measurably the most accurate model of life satisfaction in history, using almost 20 years of data on over 5,000 variables from sources such as the World Bank, World Health Organization (WHO), Varieties of Democracy, and many more. Now, with this more powerful, more objective, and more actionable compass, we want to help the world steer in a better direction for all of us.</p>
              <div className="research-links">
                <a className="text-link" href={researchPaperUrl} target="_blank" rel="noreferrer">Read the groundbreaking research <ArrowUpRight width={17} height={17} /></a>
                <a className="text-link muted-link" href={researchPdfUrl} target="_blank" rel="noreferrer">Download the white paper <ArrowUpRight width={15} height={15} /></a>
              </div>
            </div>
            <aside className="research-facts" aria-label="Research at a glance">
              <div className="fact"><strong>~20</strong><span>years of data</span><small>A nearly two-decade evidence base</small></div>
              <div className="fact"><strong>5,000<span>+</span></strong><span>variables</span><small>Across public global datasets</small></div>
              <div className="fact fact-wide"><strong>8<span>B</span></strong><span>lives to learn from</span><small>We let the world itself tell us what a good life looks like.</small></div>
              <div className="source-note"><span className="eyebrow">Evidence from</span><p>World Bank · WHO · Varieties of Democracy · and more</p></div>
            </aside>
          </div>
        </div>
      </section>

      <section className="consulting-section" id="consulting" aria-labelledby="consulting-title">
        <div className="shell consulting-grid">
          <div className="consulting-copy">
            <p className="eyebrow"><span>02</span> Work with us</p>
            <h2 id="consulting-title">What can we do for you?</h2>
            <p>We provide consulting to organizations who don’t just want to <em>change</em> the world — but who want to <em>improve</em> the world. Whether you have a clear vision for a project, or just want to explore the possibilities, please reach out — we’d love to talk.</p>
            <Link className="text-link light-link" href="/contact">Tell us what you’re working on <ArrowUpRight width={18} height={18} /></Link>
          </div>
          <div className="newsletter-panel">
            <p className="eyebrow">The Dovecote dispatch</p>
            <h3>Follow the research.<br />Join the work.</h3>
            <p>Occasional updates on life satisfaction, better policy, and opportunities to participate.</p>
            <NewsletterForm />
          </div>
        </div>
      </section>

      <section className="section news-section" id="news" aria-labelledby="news-title">
        <div className="shell">
          <div className="section-topline">
            <p className="eyebrow"><span>03</span> News</p>
            <p>Ideas moving into the world</p>
          </div>
          <div className="news-heading-row">
            <h2 id="news-title">News</h2>
            <p>Research only matters when it changes what happens next.</p>
          </div>
          <div className="news-grid">
            {news.map((item, index) => (
              <article className="news-card" key={item.title}>
                <div className="news-card-meta"><span>{item.label}</span><span>{String(index + 1).padStart(2, "0")}</span></div>
                <h3><Link href={item.href}>{item.title}</Link></h3>
                <p>{item.body}</p>
                <Link className="text-link" href={item.href}>Read the full story <ArrowUpRight width={17} height={17} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section work-home" id="work" aria-labelledby="work-title">
        <div className="shell">
          <div className="section-topline">
            <p className="eyebrow"><span>04</span> Work</p>
            <Link href="/work">View all projects <ArrowRight width={15} height={15} /></Link>
          </div>
          <div className="work-home-heading">
            <h2 id="work-title">Work</h2>
            <p>Our work rests on a deep understanding of the true causes behind a satisfied life. We also know that research is just the beginning. Through legislation, partnerships, consulting, media, advocacy and more we work to bring our findings into the world.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
          </div>
        </div>
      </section>
    </>
  );
}

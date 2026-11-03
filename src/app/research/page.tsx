import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/Icons";
import { assetUrls, researchPaperUrl, researchPdfUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research",
  description: "Explore The Dovecote Institute’s model of life satisfaction and its global evidence base.",
};

const sources = [
  { name: "World Bank", description: "Global development indicators across economies, societies, and environments." },
  { name: "World Health Organization", description: "International evidence on health, wellbeing, and the conditions that shape lives." },
  { name: "Varieties of Democracy", description: "Detailed measures of political institutions and democratic life around the world." },
];

export default function ResearchPage() {
  return (
    <>
      <section className="page-hero research-page-hero">
        <div className="shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Research</span></nav>
          <div className="page-hero-grid">
            <div><p className="eyebrow">Our evidence base</p><h1 className="page-title">A new model of life satisfaction.</h1><p className="page-deck">A more powerful, more objective, and more actionable compass for steering the world in a better direction.</p></div>
            <aside className="page-hero-aside"><p>“We let the world itself tell us what a good life looks like.”</p></aside>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="shell content-grid">
          <div className="content-label"><p className="eyebrow">01 / The model</p></div>
          <div className="rich-text">
            <h2>Begin with the lives people actually want to live.</h2>
            <p className="lead">The Dovecote Institute has created what is measurably the most accurate model of life satisfaction in history.</p>
            <p>The model uses almost 20 years of data on over 5,000 variables from sources such as the World Bank, World Health Organization (WHO), Varieties of Democracy, and many more. Rather than guessing about the factors that create satisfaction, we look carefully at the 8 billion lives we can learn from, and work backwards from there.</p>
            <p>The answers we get back allow us not just to be effective, but to prioritize — finding the places where our energy will do the most to make life better, for everyone, and for as far into the future as we can imagine.</p>
            <div className="project-inline-actions"><a className="button button-primary" href={researchPaperUrl} target="_blank" rel="noreferrer">Read on SSRN <ArrowUpRight width={18} height={18} /></a><a className="text-link" href={researchPdfUrl} target="_blank" rel="noreferrer">Download the white paper <ArrowUpRight width={17} height={17} /></a></div>
          </div>
        </div>
      </section>

      <section className="research-stat-band" aria-label="Research in numbers">
        <div className="shell research-stat-grid">
          <div><strong>~20</strong><span>years of data</span><p>Nearly two decades of observable evidence.</p></div>
          <div><strong>5,000<span>+</span></strong><span>variables</span><p>A broad view of the conditions around a life.</p></div>
          <div><strong>8<span>B</span></strong><span>lives to learn from</span><p>A model grounded in human experience.</p></div>
        </div>
      </section>

      <section className="content-section research-graph-section">
        <div className="shell content-grid">
          <div className="content-label"><p className="eyebrow">02 / The research</p><p>Explore the original research artifact from the institute’s published work.</p></div>
          <div><a className="research-graph-link" href={researchPdfUrl} target="_blank" rel="noreferrer"><img src={`${assetUrls.graph}?format=1500w`} alt="Spanning graph from the Dovecote Institute life satisfaction research" loading="lazy" /><span>Open the full white paper <ArrowUpRight width={18} height={18} /></span></a></div>
        </div>
      </section>

      <section className="content-section evidence-section">
        <div className="shell">
          <div className="section-topline"><p className="eyebrow"><span>03</span> Selected evidence sources</p><p>Global, public, and varied</p></div>
          <div className="evidence-grid">
            {sources.map((source, index) => <article key={source.name}><span>0{index + 1}</span><h2>{source.name}</h2><p>{source.description}</p></article>)}
          </div>
          <p className="evidence-note">Alongside many more public sources. Read the paper for the complete methodology and evidence base.</p>
        </div>
      </section>
    </>
  );
}

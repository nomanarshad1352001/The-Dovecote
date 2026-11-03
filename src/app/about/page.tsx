import type { Metadata } from "next";
import Link from "next/link";
import WorkTogether from "@/components/WorkTogether";
import { assetUrls } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "The Dovecote Institute exists to find and solve the biggest problems in the world.",
};

const approach = [
  { number: "01", title: "Define “better” carefully", body: "A responsible answer is a world in which people themselves say they are satisfied with their lives." },
  { number: "02", title: "Let evidence lead", body: "We don’t guess about the factors that create satisfaction. We learn from the lives around us and work backwards." },
  { number: "03", title: "Prioritize for impact", body: "Time and resources are finite. We look for the places where our energy will do the most to make life better." },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>About</span></nav>
          <div className="page-hero-grid">
            <div><p className="eyebrow">Why we exist</p><h1 className="page-title">Find and solve the biggest problems in the world.</h1></div>
            <aside className="page-hero-aside"><p>“You want to save the world. And we want to help you do it.”</p></aside>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="shell content-grid">
          <div className="content-label"><p className="eyebrow">01 / Our purpose</p></div>
          <div className="rich-text about-purpose">
            <p className="lead">The goal of the Dovecote Institute is to find and solve the biggest problems in the world.</p>
            <div className="two-column-copy">
              <div><p>We believe this is only possible by being clear and careful about what a “better” world means — and we believe that the only possible responsible answer is a world in which the people themselves say they are satisfied with their lives.</p><p>Similarly, we don’t guess about the factors that create that satisfaction — we look carefully at the 8 billion lives we can learn from, and work backwards from there. In other words, we let the world itself tell us what a good life looks like.</p><p>The answers we get back allow us not just to be effective, but to prioritize.</p></div>
              <div><p>The problems in front of us are huge, and hugely varied, and almost endless. We face climate change, ecosystem collapse, global authoritarian revival, global pandemics, genocide, poverty, and more — all while needing to balance our simple daily needs of living lives in which we feel healthy, happy, and valued.</p><p>While every one of these problems could easily consume a well-spent lifetime, there are simply too many of them to fight naively, compared to the resources, energy, and irreplaceable time that we can use in our fight — especially when this generation may be looking at our very last chance for a solution.</p><p>The Dovecote Institute is dedicated to finding the places where our energy will do the most to make life better — for everyone, and for as far into the future as we can imagine.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="shell">
          <div className="section-topline"><p className="eyebrow"><span>02</span> Our approach</p><p>Clear about ends. Careful about means.</p></div>
          <div className="approach-grid">{approach.map((item) => <article key={item.number}><span>{item.number}</span><h2>{item.title}</h2><p>{item.body}</p></article>)}</div>
        </div>
      </section>
      <WorkTogether image={assetUrls.about} />
    </>
  );
}

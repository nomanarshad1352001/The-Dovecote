import type { Metadata } from "next";
import Link from "next/link";
import WorkTogether from "@/components/WorkTogether";
import { ArrowUpRight } from "@/components/Icons";
import { assetUrls } from "@/lib/content";

export const metadata: Metadata = {
  title: "Press & Accolades",
  description: "Press and comments on The Dovecote Institute’s research and policy work.",
};

const quotes = [
  {
    quote: "Magnificent",
    name: "Shelley Fraser Mickle",
    role: "Award-winning author",
    subject: "on a draft of The Most Important Problem",
  },
  {
    quote: "I printed it out to give it a glance and ended up spending half an hour reading the whole thing.",
    name: "Tova Wang",
    role: "Ash Center for Democratic Governance and Innovation",
    subject: "on a draft of The Most Important Problem",
  },
  {
    quote: "It is important we understand life satisfaction and how to improve it",
    name: "Congresswoman Eleanor Holmes Norton (DC)",
    role: "United States Congress",
    subject: "in her letter asking Congress to fund a permanent survey on American life satisfaction",
  },
];

export default function PressPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Press</span></nav>
          <div className="page-hero-grid">
            <div><p className="eyebrow">In others’ words</p><h1 className="page-title">Press & Accolades</h1><p className="page-deck">Responses to the institute’s research, writing, and advocacy for a better understanding of human life satisfaction.</p></div>
            <aside className="page-hero-aside media-aside"><p>For interviews, research questions, and media requests, please contact the institute.</p><Link className="text-link" href="/contact?interest=media">Media inquiries <ArrowUpRight width={16} height={16} /></Link></aside>
          </div>
        </div>
      </section>

      <section className="content-section press-section">
        <div className="shell">
          <div className="section-topline"><p className="eyebrow"><span>01</span> Selected comments</p><p>Research · Writing · Policy</p></div>
          <div className="quote-list">
            {quotes.map((item, index) => (
              <figure key={item.name} className="quote-card">
                <span className="quote-index">0{index + 1}</span>
                <blockquote>“{item.quote}”</blockquote>
                <figcaption><strong>{item.name}</strong><span>{item.role}</span><small>{item.subject}</small></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <WorkTogether image={assetUrls.press} />
    </>
  );
}

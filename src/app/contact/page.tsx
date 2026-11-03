import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { ArrowUpRight } from "@/components/Icons";
import { contactEmail } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact The Dovecote Institute about consulting, research, media, partnerships, or a new idea.",
};

const validInterests = ["consulting", "partnership", "media", "research", "general"];

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ interest?: string }> }) {
  const { interest } = await searchParams;
  const defaultInterest = interest && validInterests.includes(interest) ? interest : "consulting";

  return (
    <>
      <section className="page-hero contact-page-hero">
        <div className="shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Contact</span></nav>
          <div className="page-hero-grid">
            <div><p className="eyebrow">Start a conversation</p><h1 className="page-title">What can we do for you?</h1><p className="page-deck">Clear vision or early idea, consulting project or media request — reach out. We are always looking for partners, collaborators, and friends.</p></div>
            <aside className="page-hero-aside"><p>“Whether you have a clear vision for a project, or just want to explore the possibilities, please reach out — we’d love to talk.”</p></aside>
          </div>
        </div>
      </section>

      <section className="content-section contact-section">
        <div className="shell contact-layout">
          <div className="contact-form-wrap">
            <div className="contact-form-heading"><p className="eyebrow">Send a note</p><h2>Tell us what you’re thinking.</h2><p>Required fields are marked with an asterisk. The form prepares an email in your usual mail app; select Send there to deliver it.</p></div>
            <ContactForm key={defaultInterest} defaultInterest={defaultInterest} />
          </div>
          <aside className="contact-aside">
            <div><p className="eyebrow">Consulting</p><p>For organizations who don’t just want to <em>change</em> the world — but who want to <em>improve</em> it.</p></div>
            <div><p className="eyebrow">Media requests</p><p>Choose “A media request” in the form and include your outlet, deadline, and area of interest.</p></div>
            <div><p className="eyebrow">Join the team</p><p>Interested in applying for a position? See our current roles and resume bank.</p><Link className="text-link" href="/careers">View careers <ArrowUpRight width={16} height={16} /></Link></div>
            <div><p className="eyebrow">Email directly</p><p><a className="direct-email" href={`mailto:${contactEmail}`}>{contactEmail}</a></p></div>
            <div className="contact-location"><p className="eyebrow">Based in</p><strong>Washington, DC</strong><span>Working with collaborators everywhere.</span></div>
          </aside>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/Icons";
import { assetUrls } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join The Dovecote Institute as Director of Research, Director of Partnerships, or through our resume bank.",
};

const roles = [
  { number: "01", title: "Director of Research", type: "Leadership role", description: "Help guide the research at the center of the institute’s model of life satisfaction and its work in the world.", href: "https://forms.gle/R5Fh84zUkNPCba1n6", action: "Apply for Director of Research" },
  { number: "02", title: "Director of Partnerships", type: "Leadership role", description: "Help expand the network of funders, collaborators, institutions, and friends moving this work forward.", href: "https://forms.gle/NfR1YvQfx4fBZ2NXA", action: "Apply for Director of Partnerships" },
  { number: "03", title: "Resume bank", type: "General interest", description: "Don’t see the right fit? If you have other skills you want to contribute, introduce yourself for future opportunities.", href: "https://forms.gle/UBXXsLB5kxkQa1HSA", action: "Join the resume bank" },
];

export default function CareersPage() {
  return (
    <>
      <section className="page-hero careers-page-hero">
        <div className="shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Careers</span></nav>
          <div className="page-hero-grid">
            <div><p className="eyebrow">Careers</p><h1 className="page-title">Help build what comes next.</h1><p className="page-deck">The Dovecote Institute is currently raising funds for its work, but we have a strong vision of where we need to go, and what we need to accomplish. If you are excited to be part of what we’re building, either now or in the future, please reach out and send us a resume.</p></div>
            <aside className="page-hero-aside"><p>Research needs people who can carry it into the world — with rigor, imagination, and care.</p></aside>
          </div>
        </div>
      </section>

      <section className="content-section careers-section">
        <div className="shell">
          <div className="section-topline"><p className="eyebrow"><span>01</span> Opportunities</p><p>Applications open via Google Forms</p></div>
          <div className="role-list">
            {roles.map((role) => (
              <article className="role-card" key={role.title}>
                <div className="role-number">{role.number}</div>
                <div><p className="eyebrow">{role.type}</p><h2>{role.title}</h2></div>
                <p>{role.description}</p>
                <a href={role.href} target="_blank" rel="noreferrer" aria-label={`${role.action} (opens in a new tab)`}><span>{role.action}</span><ArrowUpRight width={23} height={23} /></a>
              </article>
            ))}
          </div>
          <p className="careers-note">Application links open securely in a new tab. For other questions about working together, please use our <Link href="/contact">contact form</Link>.</p>
        </div>
      </section>
      <section className="careers-image"><img src={`${assetUrls.careers}?format=1500w`} alt="White doves at the Blue Mosque" loading="lazy" /></section>
    </>
  );
}

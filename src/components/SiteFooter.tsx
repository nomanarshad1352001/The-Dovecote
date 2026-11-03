import Link from "next/link";
import { ArrowUpRight } from "./Icons";
import { researchPaperUrl } from "@/lib/content";
import { contactEmail } from "@/lib/contact";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div>
          <p className="eyebrow">A better direction starts here</p>
          <h2>Bring us the problem<br />you can’t stop thinking about.</h2>
        </div>
        <Link className="circle-link" href="/contact" aria-label="Contact the Dovecote Institute">
          <span>Let’s talk</span><ArrowUpRight width={28} height={28} />
        </Link>
      </div>
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link className="brand brand-footer" href="/">
            <span className="brand-type"><strong>The Dovecote</strong><span>Institute</span></span>
          </Link>
          <p>Research and action for a world in which more people can say they are satisfied with their lives.</p>
          <a className="footer-email" href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <span>Washington, DC</span>
        </div>
        <div className="footer-links">
          <p className="eyebrow">Explore</p>
          <Link href="/research">Research</Link>
          <Link href="/work">Our work</Link>
          <Link href="/about">About</Link>
          <Link href="/press-1">Press</Link>
        </div>
        <div className="footer-links">
          <p className="eyebrow">Participate</p>
          <Link href="/work/nominate-a-candidate">Nominate a candidate</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact?interest=partnership">Partner with us</Link>
          <a href={researchPaperUrl} target="_blank" rel="noreferrer">Read the paper <ArrowUpRight width={13} height={13} /></a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} The Dovecote Institute</span>
        <span>Smart about what matters. Serious about making it better.</span>
        <a href="#main-content">Back to top ↑</a>
      </div>
    </footer>
  );
}

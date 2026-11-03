import type { Metadata } from "next";
import Link from "next/link";
import WorkExplorer from "@/components/WorkExplorer";

export const metadata: Metadata = {
  title: "Work",
  description: "Research, legislation, partnerships, consulting, media, and advocacy from The Dovecote Institute.",
};

export default function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Work</span></nav>
          <div className="page-hero-grid">
            <div>
              <p className="eyebrow">Research, made useful</p>
              <h1 className="page-title">Work</h1>
              <p className="page-deck">Through legislation, partnerships, consulting, media, advocacy and more, we bring our findings into the world. See what we’ve been up to — and think about the project that you want to add to the list.</p>
            </div>
            <aside className="page-hero-aside"><p>“Our work rests on a deep understanding of the true causes behind a satisfied life.”</p></aside>
          </div>
        </div>
      </section>
      <section className="content-section work-index-section">
        <div className="shell"><WorkExplorer /></div>
      </section>
    </>
  );
}

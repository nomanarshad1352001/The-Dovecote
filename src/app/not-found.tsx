import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="not-found shell">
      <p className="eyebrow">404 · Wrong direction</p>
      <h1>This path doesn’t lead anywhere.</h1>
      <p>The page may have moved, but the institute’s research and work are still right where you left them.</p>
      <div><Link className="button button-primary" href="/">Return home <ArrowRight width={18} height={18} /></Link><Link className="text-link" href="/work">Explore our work</Link></div>
    </section>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "./Icons";

export default function WorkTogether({ image, label = "Let’s Work Together" }: { image: string; label?: string }) {
  return (
    <section className="work-together">
      <img src={`${image}?format=1500w`} alt="" loading="lazy" />
      <div className="work-together-overlay" />
      <div className="shell work-together-content">
        <p className="eyebrow">Research is just the beginning</p>
        <h2>{label}</h2>
        <Link className="button button-light" href="/contact">Start a conversation <ArrowUpRight width={18} height={18} /></Link>
      </div>
    </section>
  );
}

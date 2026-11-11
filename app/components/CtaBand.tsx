import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="end px" data-tint="#0f4a4c">
      <div className="tag" style={{ marginBottom: 24 }}>[Contact]</div>
      <Link className="cta rv" data-split="rise" href="/contact">Join the<br />next descent →</Link>
    </section>
  );
}

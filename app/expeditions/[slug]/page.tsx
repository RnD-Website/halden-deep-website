import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHead from "../../components/PageHead";
import CtaBand from "../../components/CtaBand";
import { entries } from "../../data";

export function generateStaticParams() {
  return entries.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const e = entries.find((x) => x.slug === slug);
  return e ? { title: `${e.title} · ${e.year}`, description: e.summary } : {};
}

export default async function Expedition({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = entries.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const e = entries[i];
  const prev = entries[i - 1];
  const next = entries[i + 1];

  return (
    <main>
      <PageHead tag={`Expedition · ${e.year}`} title={e.title} intro={e.summary} tint="#031a20" />

      <section className="px detail" data-tint="#031a20">
        <div className="hero-img rv">
          <Image src={`/assets/${e.img}.jpg`} alt={e.alt} fill sizes="100vw" priority style={e.pos ? { objectPosition: e.pos } : undefined} />
        </div>
        <dl className="facts">
          <div><dt>Year</dt><dd>{e.year}</dd></div>
          <div><dt>Region</dt><dd>North Atlantic <small>(to be confirmed)</small></dd></div>
          <div><dt>Platform</dt><dd>To be confirmed</dd></div>
          <div><dt>Status</dt><dd>Concept chapter</dd></div>
        </dl>
        <div className="prose">
          <div className="tag">[Field notes]</div>
          <p className="body rv" data-split="scrub">{e.note} Field notes, crew lists, instruments and results for this chapter are placeholders and to be confirmed.</p>
        </div>
      </section>

      <section className="px pager" data-tint="#031a20">
        {prev ? <Link href={`/expeditions/${prev.slug}`}><span className="tag">← Previous</span><b>{prev.year} · {prev.title}</b></Link> : <span />}
        {next ? <Link className="nx" href={`/expeditions/${next.slug}`}><span className="tag">Next →</span><b>{next.year} · {next.title}</b></Link> : <Link className="nx" href="/expeditions"><span className="tag">Back →</span><b>All expeditions</b></Link>}
      </section>

      <CtaBand />
    </main>
  );
}

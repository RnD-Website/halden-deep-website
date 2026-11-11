import Image from "next/image";
import Link from "next/link";
import Film from "./Film";
import CtaBand from "./components/CtaBand";
import { entries, links, trio } from "./data";

const recent = entries.slice(-3).reverse();

export default function Home() {
  return (
    <>
      <header className="hero" id="home">
        <video src="/assets/hero.mp4" poster="/assets/hero.jpg" autoPlay muted loop playsInline aria-hidden="true" />
        <h1 className="a"><span><i>Halden</i></span></h1>
        <h1 className="b"><span><i>Deep</i></span></h1>
        <nav>
          {links.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
        </nav>
        <div className="coord">N 62°14′ · W 04°51′</div>
        <div className="copy">© 2026</div>
      </header>

      <main>
        <section className="intro px" data-tint="#01080a">
          <p className="lead rv" data-split="scrub">
            Halden Deep is an independent ocean research institute. We go where the light runs out, and bring back the questions the surface can&apos;t ask.
          </p>
          <p className="body rv" data-split="scrub">
            Our teams pair slow, patient instruments with small crews and long seasons at sea. <em>The work is a record of the water as it is,</em> kept carefully, shared openly, and handed on to whoever dives next.
          </p>
        </section>

        <section className="px">
          <div className="trio">
            {trio.map((t) => (
              <div className="item rv" key={t.img}>
                <figure>
                  <Image src={`/assets/${t.img}.jpg`} alt={t.alt} fill sizes="33vw" />
                </figure>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
          <div className="rule" />
        </section>

        <section className="feat px" data-tint="#031a20">
          <div className="feat-head">
            <div>
              <div className="tag">[Expeditions]</div>
              <h2 className="lead rv" data-split="rise">Recent descents</h2>
            </div>
            <Link className="more" href="/expeditions">All expeditions →</Link>
          </div>
          <div className="feat-grid">
            {recent.map((e) => (
              <Link className="fcard rv" href={`/expeditions/${e.slug}`} key={e.slug}>
                <figure><Image src={`/assets/${e.img}.jpg`} alt={e.alt} fill sizes="33vw" style={e.pos ? { objectPosition: e.pos } : undefined} /></figure>
                <span className="y">{e.year}</span>
                <h3>{e.title}</h3>
                <p>{e.note}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="bio px" data-tint="#0a2a2c">
          <p className="big rv" data-split="rise"><span>→</span> 2003–2026<br />North Atlantic</p>
          <div className="cols">
            <div className="tag">[Institute]</div>
            <p className="body rv" data-split="scrub">
              Through slow, careful survey work, Halden Deep seeks a science of attention, where the instrument and the observer share the same patience.
            </p>
            <div className="pic rv">
              <Image src="/assets/divers.jpg" alt="Divers" fill sizes="45vw" />
            </div>
            <div className="more-wrap">
              <Link className="more" href="/institute">About the institute →</Link>
            </div>
          </div>
        </section>

        <section className="quote px" data-tint="#01080a">
          <p className="rv" data-split="scrub">“We did not set out to find a creature. We set out to listen long enough that the dark would answer on its own terms.”</p>
          <div className="tag">[Concept copy, not a real quotation]</div>
        </section>

        <section className="px">
          <Film src="/assets/wreck.mp4" />
        </section>

        <section className="ambient">
          <video src="/assets/jelly.mp4" autoPlay muted loop playsInline aria-hidden="true" />
          <p className="rv" data-split="rise">The deep is not empty. It is only quiet.</p>
        </section>

        <CtaBand />
      </main>
    </>
  );
}

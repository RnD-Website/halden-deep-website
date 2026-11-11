import Image from "next/image";
import type { Metadata } from "next";
import PageHead from "../components/PageHead";
import CtaBand from "../components/CtaBand";

export const metadata: Metadata = { title: "Institute", description: "How Halden Deep works: patience, openness and care (concept)." };

const principles = [
  { n: "01", t: "Patience", d: "Long seasons and small crews. We would rather watch one reef for years than skim a hundred." },
  { n: "02", t: "Openness", d: "What we record is kept carefully and shared freely, so the next team starts where we stopped." },
  { n: "03", t: "Care", d: "We leave the water as we found it, and treat every instrument as a guest in someone else's home." },
];

const teams = [
  { t: "Field crews", d: "Small teams who live with a site through a full season." },
  { t: "Instrument lab", d: "Builds and tends the listening posts, cameras and sensors." },
  { t: "Data stewardship", d: "Keeps the record clean, documented and open to reuse." },
  { t: "Education and outreach", d: "Takes the work back to classrooms, harbours and coastal towns." },
];

export default function Institute() {
  return (
    <main>
      <PageHead tag="Institute" title="Institute" intro="An independent ocean research institute built around slow, careful attention to the water." tint="#0a2a2c" />

      <section className="bio px" data-tint="#0a2a2c" style={{ paddingTop: "clamp(40px,6vw,100px)" }}>
        <p className="big rv" data-split="rise"><span>→</span> 2003–2026<br />North Atlantic</p>
        <div className="cols">
          <div className="tag">[Why we exist]</div>
          <p className="body rv" data-split="scrub">
            Through slow, careful survey work, Halden Deep seeks a science of attention, where the instrument and the observer share the same patience.
          </p>
          <div className="pic rv"><Image src="/assets/divers.jpg" alt="Divers" fill sizes="45vw" /></div>
        </div>
      </section>

      <section className="px blk" data-tint="#0a2a2c">
        <div className="tag">[How we work]</div>
        <div className="pri">
          {principles.map((p) => (
            <div className="rv" key={p.n}>
              <span className="n">{p.n}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px blk" data-tint="#07201f">
        <div className="tag">[Teams]</div>
        <div className="rows">
          {teams.map((t) => (
            <div className="r rv" key={t.t}>
              <h3>{t.t}</h3>
              <p>{t.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px blk" data-tint="#031a20">
        <div className="tag">[Partners]</div>
        <div className="partners">
          {["Partner one", "Partner two", "Partner three", "Partner four"].map((p) => (
            <div className="rv" key={p}>{p}<small>to be confirmed</small></div>
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  );
}

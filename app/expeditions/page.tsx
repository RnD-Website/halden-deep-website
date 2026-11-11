import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHead from "../components/PageHead";
import CtaBand from "../components/CtaBand";
import { entries } from "../data";

export const metadata: Metadata = { title: "Expeditions", description: "Five chapters of long-season ocean survey work (concept)." };

export default function Expeditions() {
  return (
    <main>
      <PageHead tag="Expeditions" title="Expeditions" intro="Five chapters of slow survey work, from the first coastal transect to the season still underway. All details are concept placeholders." tint="#031a20" />
      <section className="exp px" data-tint="#031a20">
        <div className="exp-bg" aria-hidden="true">
          <div className="topo" />
          <div className="fx">
            {bubbles.map((b, i) => (
              <i key={i} style={{ left: `${b[0]}%`, width: b[1], height: b[1], animationDuration: `${b[2]}s`, animationDelay: `-${b[3]}s` }} />
            ))}
            <span className="gauge l" />
            <span className="gauge r" />
          </div>
        </div>
        <div className="spine"><i /><u /></div>
        {entries.map((e) => (
          <div className={`row o${e.offset}`} key={e.year}>
            <div className="yr">{e.year}</div>
            <Link href={`/expeditions/${e.slug}`} className={`card w${e.size} ${e.side}`} aria-label={`${e.title}, ${e.year}`}>
              <Image src={`/assets/${e.img}.jpg`} alt={e.alt} fill sizes="46vw" style={e.pos ? { objectPosition: e.pos } : undefined} />
            </Link>
            <div className={`cap ${e.side === "l" ? "cl" : "cr"}`}>
              <b>{e.title}</b>
              {e.note}
              <Link className="go" href={`/expeditions/${e.slug}`}>View expedition →</Link>
            </div>
          </div>
        ))}
      </section>
      <CtaBand />
    </main>
  );
}

// [left %, size px, duration s, negative delay s]
const bubbles = [
  [6, 6, 17, 3], [11, 10, 23, 11], [18, 5, 15, 7], [27, 8, 21, 2], [34, 4, 14, 9], [42, 9, 25, 15],
  [58, 5, 16, 5], [66, 11, 24, 13], [73, 6, 18, 1], [81, 8, 22, 8], [88, 4, 15, 12], [94, 9, 26, 6],
];

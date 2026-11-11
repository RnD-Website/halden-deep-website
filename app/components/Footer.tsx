import Link from "next/link";
import { links, entries } from "../data";

export default function Footer() {
  return (
    <footer className="sitefoot">
      <div className="cols">
        <div className="brand">
          <b>Halden Deep</b>
          <p>An independent ocean research institute. A concept site: names, places and programmes are placeholders.</p>
        </div>
        <div>
          <div className="tag">[Explore]</div>
          {links.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
        </div>
        <div>
          <div className="tag">[Expeditions]</div>
          {entries.slice().reverse().map((e) => <Link key={e.slug} href={`/expeditions/${e.slug}`}>{e.year} · {e.title}</Link>)}
        </div>
        <div>
          <div className="tag">[Contact]</div>
          <a href="mailto:hello@example.com">hello@example.com</a>
          <span>Address to be confirmed</span>
          <span>N 62°14′ · W 04°51′</span>
        </div>
      </div>
      <div className="base">
        <span>Halden Deep, a concept site. All rights reserved ©2026</span>
        <span>Imagery and footage: Magnific stock</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import PageHead from "../components/PageHead";
import CtaBand from "../components/CtaBand";
import ArchiveGrid from "../components/ArchiveGrid";
import { archive } from "../data";

export const metadata: Metadata = { title: "Archive", description: "Photographs and footage from the deep (concept archive, stock imagery)." };

export default function Archive() {
  return (
    <main>
      <PageHead tag="Archive" title="Archive" intro="Photographs and footage kept from the water. Everything here is stock imagery standing in for the real record." tint="#07201f" />
      <section className="px archive" data-tint="#07201f">
        <ArchiveGrid items={archive} />
      </section>
      <section className="quote px" data-tint="#01080a">
        <p className="rv" data-split="scrub">“We did not set out to find a creature. We set out to listen long enough that the dark would answer on its own terms.”</p>
        <div className="tag">[Concept copy, not a real quotation]</div>
      </section>
      <CtaBand />
    </main>
  );
}

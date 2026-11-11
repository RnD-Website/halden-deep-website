"use client";
import { useEffect, useState } from "react";
import type { Item } from "../data";

const filters = ["All", "Photos", "Footage"] as const;

export default function ArchiveGrid({ items }: { items: Item[] }) {
  const [f, setF] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);
  const shown = items.filter((i) => f === "All" || (f === "Photos" ? i.type === "photo" : i.type === "film"));
  const photos = shown.filter((i) => i.type === "photo");
  const cur = open === null ? null : photos[open];

  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o === null ? o : (o + 1) % photos.length));
      if (e.key === "ArrowLeft") setOpen((o) => (o === null ? o : (o - 1 + photos.length) % photos.length));
    };
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, [open, photos.length]);

  return (
    <>
      <div className="chips">
        {filters.map((x) => (
          <button key={x} className={x === f ? "on" : undefined} onClick={() => { setF(x); setOpen(null); }}>{x}</button>
        ))}
      </div>
      <div className="ag">
        {shown.map((it) => (
          <figure className="ag-item" key={it.src}>
            {it.type === "photo" ? (
              <button className="ph" onClick={() => setOpen(photos.indexOf(it))} aria-label={`Open ${it.title}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.src} alt={it.alt || it.title} loading="lazy" />
              </button>
            ) : (
              <div className="ph film" onMouseEnter={(e) => e.currentTarget.querySelector("video")?.play()} onMouseLeave={(e) => e.currentTarget.querySelector("video")?.pause()}>
                <video src={it.src} muted loop playsInline preload="metadata" />
                <span className="badge">Footage · hover to play</span>
              </div>
            )}
            <figcaption><b>{it.title}</b>{it.text}</figcaption>
          </figure>
        ))}
      </div>

      {cur && (
        <div className="lb" data-lenis-prevent role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={cur.src} alt={cur.alt || cur.title} onClick={(e) => e.stopPropagation()} />
          <div className="lbcap" onClick={(e) => e.stopPropagation()}>
            <b>{cur.title}</b> {cur.text}
            <span>
              <button onClick={() => setOpen((open! - 1 + photos.length) % photos.length)}>← Prev</button>
              <button onClick={() => setOpen((open! + 1) % photos.length)}>Next →</button>
              <button onClick={() => setOpen(null)}>Close ✕</button>
            </span>
          </div>
        </div>
      )}
    </>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const enter = () => document.querySelectorAll(".hero,.phead").forEach((e) => e.classList.add("in"));

/** Loader counter, hero entrance, scroll reveals and the timeline spine. */
export default function Effects() {
  const [n, setN] = useState(0);
  const [done, setDone] = useState(false);
  const ready = useRef(false);
  const pathname = usePathname();

  // loader counter, first load only
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
    let v = 0;
    const t = setInterval(() => {
      v = Math.min(100, v + Math.ceil(Math.random() * 9));
      setN(v);
      if (v >= 100) {
        clearInterval(t);
        setTimeout(() => {
          ready.current = true;
          setDone(true);
          enter();
        }, 200);
      }
    }, reduce ? 1 : 35);
    return () => clearInterval(t);
  }, []);

  // page effects, re-run on every route change
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
    if (ready.current) requestAnimationFrame(() => requestAnimationFrame(enter));

    // text animation: split into words
    type Scrub = { el: HTMLElement; words: NodeListOf<HTMLElement>; n: number; k: number };
    const scrubs: Scrub[] = [];
    if (!reduce) {
      document.querySelectorAll(".tag,.row .cap,footer span,footer a").forEach((el) => el.classList.add("rv"));
      document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
        if (el.querySelector(".w")) return;
        let n = 0;
        const walk = (node: Node) => {
          Array.from(node.childNodes).forEach((c) => {
            if (c.nodeType === 3) {
              const f = document.createDocumentFragment();
              (c.textContent || "").split(/(\s+)/).forEach((t) => {
                if (!t) return;
                if (/^\s+$/.test(t)) { f.appendChild(document.createTextNode(" ")); return; }
                const w = document.createElement("span");
                w.className = "w";
                const wi = document.createElement("span");
                wi.className = "wi";
                wi.style.setProperty("--i", String(n++));
                wi.textContent = t;
                w.appendChild(wi);
                f.appendChild(w);
              });
              (c as ChildNode).replaceWith(f);
            } else if (c.nodeType === 1 && (c as Element).tagName !== "BR") walk(c);
          });
        };
        walk(el);
        if (el.dataset.split === "scrub") scrubs.push({ el, words: el.querySelectorAll<HTMLElement>(".wi"), n, k: -1 });
      });
    } else {
      document.querySelectorAll("[data-split]").forEach((el) => el.removeAttribute("data-split"));
    }
    const scrubText = () => {
      scrubs.forEach((s) => {
        const r = s.el.getBoundingClientRect();
        const p = Math.max(0, Math.min(1, (innerHeight * 0.9 - r.top) / (r.height + innerHeight * 0.3)));
        const k = Math.round(p * s.n);
        if (k !== s.k) { s.k = k; s.words.forEach((w, i) => w.classList.toggle("lit", i < k)); }
      });
    };
    addEventListener("scroll", scrubText, { passive: true });
    addEventListener("resize", scrubText);

    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("on")),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".rv,.row").forEach((el) => io.observe(el));
    scrubText();

    const exp = document.querySelector<HTMLElement>(".exp");
    const spine = () => {
      if (!exp) return;
      const r = exp.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, (innerHeight * 0.55 - r.top) / r.height));
      exp.style.setProperty("--p", p * 100 + "%");
      exp.style.setProperty("--d", String(Math.round(p * 200)));
    };
    // section background colour shift, blended continuously while scrolling
    const hex = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-tint]")).map((el) => ({ el, c: hex(el.dataset.tint || "#01080a") }));
    const tint = () => {
      let cur = hex("#01080a");
      for (const { el, c } of els) {
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        const t = Math.max(0, Math.min(1, (innerHeight * 0.85 - top) / (innerHeight * 0.55)));
        cur = cur.map((v, i) => v + (c[i] - v) * t);
      }
      document.documentElement.style.setProperty("--bg", `rgb(${cur.map(Math.round).join(",")})`);
    };
    addEventListener("scroll", tint, { passive: true });
    tint();
    addEventListener("scroll", spine, { passive: true });
    spine();

    // water ripple on photos, driven by scroll speed
    let raf = 0;
    if (!reduce) {
      const wt = document.getElementById("wt");
      const wd = document.getElementById("wd");
      const root = document.documentElement;
      const max = innerWidth < 760 ? 22 : 48;
      let lastY = scrollY, vel = 0, amp = 0, on = false;
      const tick = (ts: number) => {
        const y = scrollY;
        vel = vel * 0.82 + (y - lastY) * 0.18;
        lastY = y;
        amp += (Math.min(max, Math.abs(vel) * 2.2) - amp) * 0.14;
        const s = ts / 1000;
        if (amp > 0.6) {
          if (!on) { root.classList.add("waving"); on = true; }
          wd?.setAttribute("scale", amp.toFixed(2));
          wt?.setAttribute("baseFrequency", `${(0.006 + Math.sin(s * 1.3) * 0.002).toFixed(4)} ${(0.018 + Math.sin(s * 0.9 + 1) * 0.006).toFixed(4)}`);
        } else if (on) {
          root.classList.remove("waving"); on = false; wd?.setAttribute("scale", "0");
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }

    return () => {
      io.disconnect();
      removeEventListener("scroll", spine);
      removeEventListener("scroll", tint);
      cancelAnimationFrame(raf);
      removeEventListener("scroll", scrubText);
      removeEventListener("resize", scrubText);
    };
  }, [pathname]);

  return (
    <div className={"loader" + (done ? " done" : "")} aria-hidden="true">
      <b>{n}</b>
      <b>Deep</b>
    </div>
  );
}

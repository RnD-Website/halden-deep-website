"use client";
import { useRef, useState } from "react";

export default function Film({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.muted = false;
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className={"film rv" + (playing ? " playing" : "")} onClick={toggle}>
      <video ref={ref} src={src} playsInline preload="metadata" loop />
      <button aria-label="Play film">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l16 9-16 9z" /></svg>
      </button>
    </div>
  );
}

export const links = [
  { href: "/", label: "Home" },
  { href: "/expeditions", label: "Expeditions" },
  { href: "/institute", label: "Institute" },
  { href: "/archive", label: "Archive" },
  { href: "/contact", label: "Contact" },
];

export type Entry = {
  slug: string;
  year: string;
  title: string;
  note: string;
  summary: string;
  img: string;
  alt: string;
  offset: 1 | 2 | 3 | 4;
  size: 1 | 2 | 3;
  side: "l" | "r";
  pos?: string;
};

export const entries: Entry[] = [
  { slug: "kelp-line", year: "2003", title: "Kelp Line", note: "First coastal transect (to be confirmed).", summary: "A first slow survey along the kelp margin, where the coast gives way to open water. Concept chapter: dates, crew and findings are to be confirmed.", img: "boats", alt: "Survey boats on turquoise water", offset: 1, size: 1, side: "l" },
  { slug: "wreck-ledger", year: "2009", title: "Wreck Ledger", note: "Mapping a submerged hull, year one.", summary: "A season spent mapping a submerged hull and the life gathering around it. Concept chapter: details are to be confirmed.", img: "divers", alt: "Divers over a sunken wreck", offset: 2, size: 2, side: "r" },
  { slug: "outer-light-station", year: "2014", title: "Outer Light Station", note: "A permanent listening post.", summary: "A fixed listening post beside a remote light, built for long and patient observation. Concept chapter: details are to be confirmed.", img: "lighthouse", alt: "Lighthouse in open sea", offset: 3, size: 3, side: "l" },
  { slug: "hull-garden", year: "2019", title: "Hull Garden", note: "How a wreck becomes a reef.", summary: "Following a wreck as it slowly turns into habitat. Concept chapter: details are to be confirmed.", img: "wrecked", alt: "Aerial view of a wrecked ship", offset: 4, size: 1, side: "r", pos: "center 40%" },
  { slug: "blue-cathedral", year: "2024", title: "Blue Cathedral", note: "The ongoing season (concept).", summary: "The current season, centred on a reef wall of blue coral. Concept chapter: details are to be confirmed.", img: "coral", alt: "Blue coral", offset: 1, size: 2, side: "l" },
];

export const trio = [
  { img: "reef", alt: "Coral reef fish", title: "Reef Edge", text: "Where the shallows fold into the blue, small lives crowd the rock and the light starts to thin." },
  { img: "coral", alt: "Blue coral on the seabed", title: "Living Colour", text: "Up close, the seabed is a landscape of pattern, texture and colour that rarely meets the surface." },
  { img: "fish", alt: "Fish around corals", title: "Open Water", text: "Schools move as one body through the current, and the reef keeps its own slow time below them." },
];

export type Item = { type: "photo" | "film"; src: string; title: string; text: string; alt?: string };

export const archive: Item[] = [
  { type: "photo", src: "/assets/reef.jpg", title: "Reef Edge", text: "Small lives crowding the rock as the light thins.", alt: "Coral reef fish" },
  { type: "film", src: "/assets/wreck.mp4", title: "Wreck, slow pass", text: "A long, quiet pass along a submerged hull." },
  { type: "photo", src: "/assets/coral.jpg", title: "Living Colour", text: "Pattern and texture on the seabed.", alt: "Blue coral" },
  { type: "photo", src: "/assets/divers.jpg", title: "Over the Wreck", text: "Divers hovering above the hull.", alt: "Divers over a wreck" },
  { type: "photo", src: "/assets/lighthouse.jpg", title: "Outer Light", text: "A lone light in open sea.", alt: "Lighthouse in open sea" },
  { type: "film", src: "/assets/jelly.mp4", title: "Drift", text: "Slow bodies moving through dark water." },
  { type: "photo", src: "/assets/fish.jpg", title: "Open Water", text: "A school moving as one body.", alt: "Fish around corals" },
  { type: "photo", src: "/assets/wrecked.jpg", title: "Hull from Above", text: "A wreck seen from the air.", alt: "Aerial view of a wrecked ship" },
  { type: "photo", src: "/assets/boats.jpg", title: "Survey Boats", text: "Small boats on turquoise water.", alt: "Survey boats" },
];

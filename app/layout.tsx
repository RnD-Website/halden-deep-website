import type { Metadata } from "next";
import localFont from "next/font/local";
import Effects from "./Effects";
import Smooth from "./components/Smooth";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

// Self-hosted (via @fontsource) so the build never depends on fetching Google Fonts.
const inter = localFont({
  src: [
    { path: "../node_modules/@fontsource/inter-tight/files/inter-tight-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../node_modules/@fontsource/inter-tight/files/inter-tight-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Halden Deep — Ocean Research Institute", template: "%s — Halden Deep" },
  description: "Concept site: Halden Deep, an independent ocean research institute. Stock imagery from Magnific.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body id="top">
        <Effects />
        <Smooth />
        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
          <filter id="wave" x="-4%" y="-4%" width="108%" height="108%" colorInterpolationFilters="sRGB">
            <feTurbulence id="wt" type="fractalNoise" baseFrequency="0.006 0.018" numOctaves={1} seed={3} result="n" />
            <feDisplacementMap id="wd" in="SourceGraphic" in2="n" scale={0} xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import Effects from "./Effects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter_Tight({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: { default: "Halden Deep — Ocean Research Institute", template: "%s — Halden Deep" },
  description: "Concept site: Halden Deep, an independent ocean research institute. Stock imagery from Magnific.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body id="top">
        <Effects />
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

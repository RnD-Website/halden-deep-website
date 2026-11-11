"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "../data";

/** Sticky top bar for inner pages. The home page has its own hero navigation. */
export default function Header() {
  const path = usePathname();
  if (path === "/") return null;
  return (
    <header className="topbar">
      <Link href="/" className="logo"><i />Halden Deep</Link>
      <nav className="links">
        {links.filter((l) => l.href !== "/").map((l) => {
          const on = path === l.href || path.startsWith(l.href + "/");
          return <Link key={l.href} href={l.href} className={on ? "on" : undefined}>{l.label}</Link>;
        })}
      </nav>
    </header>
  );
}

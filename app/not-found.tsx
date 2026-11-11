import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px nf">
      <div className="tag">[404]</div>
      <h1 className="display">Lost at depth</h1>
      <p className="body">That page isn&apos;t on our charts.</p>
      <Link className="btn" href="/">Back to the surface →</Link>
    </main>
  );
}

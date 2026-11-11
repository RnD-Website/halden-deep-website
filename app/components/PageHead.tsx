export default function PageHead({ tag, title, intro, tint = "#01080a" }: { tag: string; title: string; intro?: string; tint?: string }) {
  return (
    <header className="phead" data-tint={tint}>
      <div className="tag">[{tag}]</div>
      <h1 className="display"><span><i>{title}</i></span></h1>
      {intro && <p className="body rv" data-split="rise">{intro}</p>}
    </header>
  );
}

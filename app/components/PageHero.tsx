type PageHeroProps = {
  eyebrow: string;
  titleLines: readonly string[];
  description: string;
  tone?: 'light' | 'dark';
};

export function PageHero({eyebrow, titleLines, description, tone = 'light'}: PageHeroProps) {
  return (
    <section className={`page-hero page-hero--${tone}`}>
      <div className="page-hero-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{titleLines.map(line => <span className="title-line" key={line}>{line}</span>)}</h1>
        <p className="page-hero-description">{description}</p>
      </div>
    </section>
  );
}

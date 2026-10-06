import { hero, site } from "../content";
import Lines, { renderText } from "./Lines";

const meta = [
  { label: "Discipline", value: site.role },
  { label: "Based in", value: site.location },
  { label: "Currently", value: site.currently },
];

export default function Hero() {
  const statement = hero.lines.map((l) => l.text).join(" ");
  const captionRow = Math.max(0, hero.lines.findIndex((l) => l.caption));

  return (
    <section className="hero" id="top" aria-label="Introduction">
      <dl className="hero__meta">
        {meta.map((m, i) => (
          <div key={m.label} className="load" style={{ "--d": `${0.9 + i * 0.08}s` }}>
            <dt className="label">{m.label}</dt>
            <dd>{m.value}</dd>
          </div>
        ))}
        <div className="hero__status load" style={{ "--d": "1.14s" }}>
          <dt className="label">Status</dt>
          <dd>{site.availability}</dd>
        </div>
      </dl>

      {/* The caption sits outside the heading so the statement reads cleanly;
          the anchor positions it beside the "apps," line. */}
      <div className="hero__statement" data-fit="" data-fit-offset={300}>
        <Lines
          as="h1"
          className="hero__title"
          reveal={false}
          label={statement}
          lines={hero.lines.map((l, i) => ({
            content: <span className="load-line" style={{ "--d": `${0.12 + i * 0.1}s` }}>{renderText(l.text)}</span>,
            className: `is-${l.align}`,
          }))}
        />
        <div className="hero__caption-anchor" style={{ "--row": captionRow }}>
          <p className="hero__caption load" style={{ "--d": "1s" }}>
            {hero.caption}
          </p>
        </div>
      </div>

      <div className="hero__foot label load" style={{ "--d": "1.2s" }}>
        <a href="#work" className="link-underline">
          Selected work <span aria-hidden="true">↓</span>
        </a>
        <span>Portfolio, {new Date().getFullYear()}</span>
      </div>
    </section>
  );
}

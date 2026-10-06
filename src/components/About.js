import { about } from "../content";
import Lines from "./Lines";
import SectionLabel from "./SectionLabel";

const TOKENS = /(\{portrait\}|\*[^*]+\*|_[^_]+_)/;

// A loose, two-pass underline, as if drawn quickly with a marker.
function Scribble() {
  return (
    <svg viewBox="0 0 200 24" preserveAspectRatio="none" aria-hidden="true">
      <path pathLength="1" vectorEffect="non-scaling-stroke" d="M3 13 C 46 5, 112 4, 197 9 M 24 20 C 78 14, 142 13, 186 17" />
    </svg>
  );
}

// Turns "{portrait}", *italic* and _underlined_ markers into elements.
function format(line) {
  const parts = line.split(TOKENS).filter(Boolean);
  const content = parts.map((part, i) => {
    if (part === "{portrait}") return <img key={i} className="inline-portrait" src={about.portrait} alt="" />;
    if (part.startsWith("*")) return <span key={i} className="serif">{part.slice(1, -1)}</span>;
    if (part.startsWith("_"))
      return (
        <span key={i} className="scribble">
          {part.slice(1, -1)}
          <Scribble />
        </span>
      );
    return part;
  });
  return { content: <>{content}</>, className: line.includes("_") ? "has-scribble" : "" };
}

export default function About() {
  const statement = about.lines.join(" ").replace("{portrait} ", "").replace(/[*_]/g, "");

  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <SectionLabel number="02" aside="Biography">
        About
      </SectionLabel>

      <h2 id="about-title" className="about__statement" aria-label={statement}>
        <Lines as="span" className="about__lines about__lines--wide" lines={about.lines.map(format)} />
        <Lines as="span" className="about__lines about__lines--narrow" lines={about.mobileLines.map(format)} />
      </h2>

      <div className="about__body">
        <div className="about__bio" data-reveal="">
          {about.bio.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        <dl className="about__facts" data-reveal="">
          <div>
            <dt className="label">Capabilities</dt>
            <dd>
              <ul>
                {about.capabilities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div>
            <dt className="label">Off duty</dt>
            <dd>{about.offDuty}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

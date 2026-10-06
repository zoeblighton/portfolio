// One art-directed project. Every layout shares the same parts – kicker,
// title, image, details – arranged differently. A cover link spans the whole
// project so it is clickable anywhere; the title link is the keyboard
// target, and the Live/Code links sit above the cover.

function Kicker({ number, project }) {
  return (
    <p className="project__kicker label" data-reveal="">
      <span>Project {number}</span>
      <span>{project.discipline}</span>
      <span className="project__kicker-end">
        {project.status ? (
          <span className="project__status">{project.status}</span>
        ) : (
          project.year
        )}
      </span>
    </p>
  );
}

function Title({ project, className = "", fit = false }) {
  return (
    <h3
      className={`project__title lines ${className}`}
      data-reveal="lines"
      data-fit={fit ? "" : undefined}
    >
      <a className="project__link" href={project.href} target="_blank" rel="noopener noreferrer">
        {project.titleLines.map((line, i) => (
          <span className="lines__mask" key={line}>
            <span className="lines__line" data-fit-line="" style={{ "--i": i }}>
              {line}
            </span>
          </span>
        ))}
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>
    </h3>
  );
}

function Media({ project, className = "" }) {
  return (
    <div className={`project__media ${className}`} style={{ "--tone": project.tone }} data-reveal="image">
      <div className="project__frame">
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
      </div>
    </div>
  );
}

// `compact` swaps the facts table for a single line of tools.
function Details({ project, showSummary = true, compact = false }) {
  return (
    <div className="project__details" data-reveal="">
      {showSummary && <p className="project__summary">{project.summary}</p>}
      {compact ? (
        <p className="project__stack">{project.tags.join(" · ")}</p>
      ) : (
        <dl className="project__facts">
          <div>
            <dt className="label">Role</dt>
            <dd>{project.role}</dd>
          </div>
          {/* The kicker shows the year unless a status takes its place. */}
          {project.status && (
            <div>
              <dt className="label">Year</dt>
              <dd>{project.year}</dd>
            </div>
          )}
          <div>
            <dt className="label">Built with</dt>
            <dd>{project.tags.join(", ")}</dd>
          </div>
        </dl>
      )}
      <ul className="project__links" data-cursor-off="">
        {project.links.map((l) => (
          <li key={l.label}>
            <a className="link-underline" href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label} <span aria-hidden="true">↗</span>
              <span className="visually-hidden"> {project.title} (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Project({ project, index }) {
  const number = String(index + 1).padStart(2, "0");
  const { layout } = project;
  // Only the type-led project, which has no visible image, previews on hover.
  const cursor = layout === "type" ? { "data-cursor": "image", "data-cursor-src": project.slug } : {};

  return (
    <article className={`project project--${layout}`} id={`project-${project.slug}`} {...cursor}>
      <a
        className="project__cover"
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
      >
        {" "}
      </a>

      {layout === "feature" && (
        <>
          <Kicker number={number} project={project} />
          <Media project={project} />
          <div className="project__row">
            <Title project={project} />
            <Details project={project} />
          </div>
        </>
      )}

      {layout === "split" && (
        <>
          <div className="project__side">
            <Kicker number={number} project={project} />
            <Title project={project} />
            <Details project={project} />
          </div>
          <Media project={project} />
        </>
      )}

      {layout === "type" && (
        <>
          <Kicker number={number} project={project} />
          <Title project={project} fit />
          <div className="project__entry">
            <p className="project__phonetic">{project.phonetic}</p>
            <p className="project__definition" data-reveal="">
              <span className="project__sense" aria-hidden="true">
                1.
              </span>
              {project.summary}
            </p>
            <Details project={project} showSummary={false} />
          </div>
          {/* Shown inline only where there is no hover preview. */}
          <Media project={project} className="project__media--touch" />
        </>
      )}

      {layout === "pair" && (
        <>
          <p className="project__bignum" aria-hidden="true" data-reveal="">
            {number}
          </p>
          <Kicker number={number} project={project} />
          <Media project={project} />
          <Title project={project} />
          <Details project={project} compact />
        </>
      )}
    </article>
  );
}

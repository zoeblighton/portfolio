import { useEffect } from "react";
import { caseStudies, projects, site } from "../content";
import Lines from "./Lines";

// Projects with a case study, in portfolio order: drives "Next case study".
export const caseStudyProjects = projects.filter((p) => caseStudies[p.slug]);

export const caseStudyPath = (slug) => `/work/${slug}`;

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

// Each case study is its own page (/work/<slug>), so it can be linked to
// directly. Titles, descriptions and the canonical link are updated for
// search engines and link previews that run JavaScript.
function usePageMeta(project, study) {
  useEffect(() => {
    const title = `${project.title} case study | ${site.firstName} ${site.lastName}`;
    const url = `https://zoeblighton.com${caseStudyPath(project.slug)}`;
    document.title = title;
    setMeta('meta[name="description"]', "content", study.lede);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", study.lede);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('link[rel="canonical"]', "href", url);
  }, [project, study]);
}

function Figure({ image, className = "" }) {
  return (
    <figure className={`case__figure case__figure--${image.shape} ${className}`} data-reveal="image">
      <img src={image.src} alt={image.alt} loading="lazy" />
    </figure>
  );
}

export default function CaseStudy({ slug }) {
  const project = projects.find((p) => p.slug === slug);
  const study = caseStudies[slug];
  usePageMeta(project, study);

  const position = caseStudyProjects.findIndex((p) => p.slug === slug);
  const next = caseStudyProjects[(position + 1) % caseStudyProjects.length];

  return (
    <article className="case" id="case-study" aria-labelledby="case-title">
      <div className="case__top label" data-reveal="">
        <a className="link-underline" href="/#work">
          <span aria-hidden="true">←</span> All work
        </a>
        <span>
          Case study · {project.discipline} · {project.year}
        </span>
      </div>

      <Lines as="h1" id="case-title" className="case__title" fit lines={project.titleLines} />

      <div className="case__intro">
        <p className="case__lede" data-reveal="">
          {study.lede}
        </p>
        <div className="case__aside" data-reveal="">
          <dl className="project__facts case__facts">
            {study.facts.map((f) => (
              <div key={f.label}>
                <dt className="label">{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
          <ul className="project__links">
            {project.links.map((l) => (
              <li key={l.label}>
                <a className="link-underline" href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label === "Live" ? "Visit the site" : "View the code"} <span aria-hidden="true">↗</span>
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="project__media case__hero" style={{ "--tone": project.tone }} data-reveal="image">
        <div className="project__frame">
          <img src={project.image} alt={project.imageAlt} />
        </div>
      </div>

      {study.sections.map((s, i) => (
        <section
          className={`case__section${s.image ? ` case__section--${s.image.shape}` : ""}`}
          key={s.title}
          aria-labelledby={`case-section-${i}`}
        >
          <div className="case__head" data-reveal="">
            <span className="case__num label">{String(i + 1).padStart(2, "0")}</span>
            <h2 id={`case-section-${i}`} className="case__heading">
              {s.title}
            </h2>
          </div>
          <div className="case__body" data-reveal="">
            {s.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          {s.image && <Figure image={s.image} />}
        </section>
      ))}

      {next && next.slug !== slug && (
        <nav className="case__next" aria-label="Next case study" data-reveal="">
          <span className="label">Next case study</span>
          <a className="case__next-link" href={caseStudyPath(next.slug)}>
            {next.title} <span aria-hidden="true">→</span>
          </a>
        </nav>
      )}
    </article>
  );
}

import { projects } from "../content";
import Project from "./Project";
import SectionLabel from "./SectionLabel";

// Consecutive "pair" projects are grouped so they can sit side by side.
function groupProjects(list) {
  const groups = [];
  list.forEach((project, index) => {
    const last = groups[groups.length - 1];
    if (project.layout === "pair" && last?.pair) {
      last.items.push({ project, index });
    } else {
      groups.push({ pair: project.layout === "pair", items: [{ project, index }] });
    }
  });
  return groups;
}

export default function Work() {
  return (
    <section className="section work" id="work" aria-labelledby="work-title">
      <SectionLabel number="01" aside={`${String(projects.length).padStart(2, "0")} projects`}>
        Selected work
      </SectionLabel>

      <div className="work__intro">
        <h2 id="work-title" className="work__lede" data-reveal="">
          A small body of work — client sites, experiments, and <em>the product I’m building now.</em>
        </h2>
        <ol className="index" data-reveal="">
          {projects.map((p, i) => (
            <li key={p.slug}>
              <a
                className="index__row"
                href={`#project-${p.slug}`}
                data-cursor="image"
                data-cursor-src={p.slug}
              >
                <span className="index__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="index__title">{p.title}</span>
                <span className="index__disc">{p.discipline}</span>
                <span className="index__year">{p.year}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>

      <div className="work__list">
        {groupProjects(projects).map((group) =>
          group.pair ? (
            <div className="work__pair" key={group.items[0].project.slug}>
              {group.items.map(({ project, index }) => (
                <Project key={project.slug} project={project} index={index} />
              ))}
            </div>
          ) : (
            <Project key={group.items[0].project.slug} project={group.items[0].project} index={group.items[0].index} />
          ),
        )}
      </div>
    </section>
  );
}

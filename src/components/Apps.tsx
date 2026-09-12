import type { Project } from '../data/profile'

type Props = {
  projects: Project[]
}

export function Apps({ projects }: Props) {
  return (
    <section className="section" id="apps">
      <div className="section-head">
        <h2>Live projects</h2>
        <p>
          Production apps and live releases — Flutter, native Android, and
          native iOS under Mubeen Official.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <div className="project-top">
              {project.icon ? (
                <img
                  src={project.icon}
                  alt=""
                  width={64}
                  height={64}
                  loading="lazy"
                />
              ) : (
                <div className="project-fallback" aria-hidden="true">
                  {project.name.slice(0, 2)}
                </div>
              )}
              <div>
                <strong>{project.name}</strong>
                <span>{project.tagline}</span>
              </div>
            </div>
            <p>{project.desc}</p>
            <div className="project-tags">
              {project.platforms.map((p) => (
                <span key={p}>{p}</span>
              ))}
            </div>
            {project.links.length > 0 && (
              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

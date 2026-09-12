import { experience, highlights } from '../data/profile'

export function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="section-head">
        <h2>Experience</h2>
        <p>
          Flutter delivery across native Android and native iOS —
          architecture, integrations, and store-ready releases.
        </p>
      </div>

      <div className="stat-row">
        {highlights.map((h) => (
          <div key={h.label} className="stat">
            <strong>{h.value}</strong>
            <span>{h.label}</span>
          </div>
        ))}
      </div>

      <div className="timeline">
        {experience.map((job) => (
          <article key={job.role} className="job">
            <div className="job-top">
              <h3>{job.role}</h3>
              <time>{job.period}</time>
            </div>
            <p className="job-org">{job.org}</p>
            <ul>
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

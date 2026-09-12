import type { CSSProperties } from 'react'
import { profile } from '../data/profile'
import type { Project } from '../data/profile'

type Props = {
  projects: Project[]
}

export function Hero({ projects }: Props) {
  const icons = projects.filter((p) => p.icon)

  return (
    <header className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <nav className="nav">
        <a className="nav-brand" href="#top">
          <span className="nav-mark" aria-hidden="true" />
          {profile.brand}
        </a>
        <div className="nav-links">
          <a href="#apps">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#stack">Stack</a>
          <a className="nav-cta" href="#contact">
            Contact
          </a>
        </div>
      </nav>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">
            {profile.title} · {profile.stackLine}
          </p>
          <h1 className="hero-brand">{profile.brand}</h1>
          <p className="hero-domain">{profile.domain}</p>
          <p className="hero-lead">
            <strong className="hero-name">{profile.name}</strong>
            <br />
            {profile.tagline}
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#apps">
              View live projects
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              Email me
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="icon-orbit">
            {icons.map((app, i) => (
              <img
                key={app.name}
                className="orbit-icon"
                src={app.icon}
                alt=""
                loading="eager"
                style={
                  {
                    '--i': i,
                    '--n': icons.length,
                    animationDelay: `${i * 0.08}s`,
                  } as CSSProperties
                }
              />
            ))}
          </div>
          <div className="orbit-glow" />
        </div>
      </div>
    </header>
  )
}

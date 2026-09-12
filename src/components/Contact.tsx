import { profile } from '../data/profile'

export function Contact() {
  return (
    <section className="section section-contact" id="contact">
      <div className="contact-panel">
        <h2>Let’s build the next live app</h2>
        <p>
          Available for Flutter, native Android, and native iOS — new products,
          store launches, and ongoing maintenance.
        </p>
        <div className="contact-actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a
            className="btn btn-ghost"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="btn btn-ghost"
            href={profile.url}
            target="_blank"
            rel="noreferrer"
          >
            {profile.domain}
          </a>
        </div>
      </div>
      <footer className="site-footer">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a href={profile.url}>{profile.domain}</a>
      </footer>
    </section>
  )
}

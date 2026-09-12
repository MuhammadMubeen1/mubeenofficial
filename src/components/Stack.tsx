import { technologies } from '../data/profile'

export function Stack() {
  return (
    <section className="section" id="stack">
      <div className="section-head">
        <h2>Technologies</h2>
        <p>
          Flutter cross-platform plus native Android (Kotlin) and native iOS
          (Swift) — the full stack I use to ship under Mubeen Official.
        </p>
      </div>

      <div className="stack-grid">
        {technologies.map((group) => (
          <div
            key={group.group}
            className={
              group.group.startsWith('Native')
                ? 'stack-group stack-group-native'
                : 'stack-group'
            }
          >
            <h3>{group.group}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

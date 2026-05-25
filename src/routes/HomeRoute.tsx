import { Link } from 'react-router-dom'

const highlights = [
  'Vite for fast local iteration and production builds.',
  'Strict TypeScript plus route-level tests with Vitest.',
  'React Three Fiber wired in for the future 3D board work.',
]

export function HomeRoute() {
  return (
    <section className="hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">Initial Scaffold</p>
        <h1>3D chess, staged for the browser</h1>
        <p className="hero-body">
          This workspace starts with a typed React shell, a dedicated game route,
          and a lightweight 3D preview surface. It is intentionally narrow so the
          next graph tasks can add chess rules and real scene rendering cleanly.
        </p>
        <div className="hero-actions">
          <Link
            className="button button--primary"
            to="/game"
          >
            Open the game shell
          </Link>
          <a
            className="button button--ghost"
            href="https://vite.dev/guide/"
            rel="noreferrer"
            target="_blank"
          >
            Vite docs
          </a>
        </div>
      </div>

      <aside className="info-card">
        <p className="eyebrow">What’s Included</p>
        <ul className="feature-list">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </aside>
    </section>
  )
}

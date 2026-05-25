import { Link } from 'react-router-dom'

import { ScenePreview } from '@/components/scene/ScenePreview'

const milestones = [
  'Scaffolded route structure ready for additional pages.',
  'A minimal React Three Fiber scene proves the 3D stack is connected.',
  'Testing and linting are set up before chess rules arrive.',
]

export function GameRoute() {
  return (
    <section className="game-layout">
      <div className="game-meta">
        <p className="eyebrow">Route: /game</p>
        <h1>Game shell</h1>
        <p className="hero-body">
          The actual board, pieces, and move logic land in later tasks. For now,
          this route is the stable shell they will plug into.
        </p>
        <ul className="feature-list">
          {milestones.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link
          className="button button--ghost"
          to="/"
        >
          Back to home
        </Link>
      </div>

      <div className="preview-panel">
        <div className="preview-header">
          <div>
            <p className="eyebrow">Canvas Preview</p>
            <h2>3D foundation online</h2>
          </div>
          <span className="status-pill">ready</span>
        </div>
        <ScenePreview />
      </div>
    </section>
  )
}

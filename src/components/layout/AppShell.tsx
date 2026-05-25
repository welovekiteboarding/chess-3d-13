import { NavLink, Outlet } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/game', label: 'Game Shell' },
]

export function AppShell() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <NavLink
          className="brand"
          to="/"
        >
          <img
            alt=""
            className="brand-mark"
            height="28"
            src="/chess-mark.svg"
            width="28"
          />
          <div>
            <p className="eyebrow">Chess 3D</p>
            <span>React + TypeScript + R3F scaffold</span>
          </div>
        </NavLink>

        <nav className="topnav">
          {links.map((link) => (
            <NavLink
              key={link.to}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link--active' : 'nav-link'
              }
              end={link.end}
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="page-shell">
        <Outlet />
      </main>
    </div>
  )
}

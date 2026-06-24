import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/careers', label: 'Careers' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-navy-50">
      <nav className="content-container flex items-center justify-between h-18 py-4">
        <NavLink to="/" className="font-serif text-xl font-semibold text-navy tracking-tight">
          Alpha<span className="text-gold">.AI</span>
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium pb-1 border-b-2 transition-colors ${
                  isActive
                    ? 'text-navy border-gold'
                    : 'text-navy-700 border-transparent hover:text-navy hover:border-gold-light'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/careers"
            className="text-sm font-medium px-4 py-2 bg-navy text-white rounded-sm hover:bg-navy-700 transition-colors"
          >
            View Open Roles
          </NavLink>
        </div>

        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="w-6 h-px bg-navy" />
          <span className="w-6 h-px bg-navy" />
          <span className="w-6 h-px bg-navy" />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-navy-50 bg-white">
          <div className="content-container flex flex-col py-4 gap-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-navy-700"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

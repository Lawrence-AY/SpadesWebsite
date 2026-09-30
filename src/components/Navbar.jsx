import { useState,  } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
];

const aboutLinks = [
  { to: '/about#thecompany', label: 'The Company' },
  { to: '/about#mission', label: 'Mission' },
  { to: '/about#ethics', label: 'Ethics & Integrity' },
];

export default function Navbar() {
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <NavLink to="/" className="brand" end>
        <img
          src="/Logo.png"
          alt="Spades Atlas"
          className="brand-logo"
        />
      </NavLink>

      <nav className="nav-links">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            {link.label}
          </NavLink>
        ))}

        <div className={`nav-item dropdown ${aboutMenuOpen ? 'open' : ''}`}>
          <div className="nav-about-group">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              onClick={() => setAboutMenuOpen(false)}
            >
              About Us
            </NavLink>

            <button
              type="button"
              className="nav-dropdown-toggle"
              aria-label="Toggle About Us menu"
              aria-expanded={aboutMenuOpen}
              onClick={() => setAboutMenuOpen((open) => !open)}
            >
              ▾
            </button>
          </div>

          {aboutMenuOpen && (
            <div className="dropdown-menu" aria-label="About us submenu">
              {aboutLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="dropdown-link"
                  onClick={() => setAboutMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        <NavLink to="/contact" className="nav-cta">
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
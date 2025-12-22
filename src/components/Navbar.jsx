import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/who-we-are', label: 'About' },
    { path: '/problem', label: 'Problem' },
    { path: '/services', label: 'Services' },
    { path: '/core-values', label: 'Values' },
    { path: '/impact', label: 'Impact' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/team', label: 'Team' },
    { path: '/contacts', label: 'Contact' },
  ]

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container">
        <Link 
          className="navbar-brand fw-bold d-flex align-items-center" 
          to="/"
          style={{ textDecoration: 'none' }}
        >
          <img 
            src="/logo.jpeg" 
            alt="GreenNov Africa Ltd Logo" 
            style={{ 
              height: '40px', 
              width: '40px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginRight: '10px',
              transition: 'transform 0.3s ease'
            }}
            className="hover-scale"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
          <span style={{ color: 'var(--primary-green)', fontSize: '1rem', fontWeight: '600' }}>
            GreenNov Africa Ltd
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          style={{ border: 'none' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center" style={{ gap: '0.25rem' }}>
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <Link
                  className={`nav-link ${isActive(link.path) ? 'active fw-semibold' : ''}`}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: isActive(link.path) ? 'var(--primary-green)' : 'var(--text-dark)',
                    fontSize: '0.9rem',
                    padding: '0.4rem 0.75rem !important',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


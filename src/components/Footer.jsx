import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinkStyle = {
    color: 'rgba(255, 255, 255, 0.8)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    display: 'block',
    marginBottom: '8px'
  }

  const handleLinkHover = (e, isEnter) => {
    if (isEnter) {
      e.currentTarget.style.color = '#22c55e'
      e.currentTarget.style.transform = 'translateX(5px)'
    } else {
      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'
      e.currentTarget.style.transform = 'translateX(0)'
    }
  }

  return (
    <footer className="mt-5" style={{ 
      backgroundColor: '#000000',
      color: '#ffffff'
    }}>
      {/* Top Section - Logo, Slogan, Social Media */}
      <div className="py-4" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <div className="d-flex align-items-center gap-3">
                <Link to="/" style={{ textDecoration: 'none', display: 'inline-block' }}>
                  <div style={{
                      height: '40px', 
                      width: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '3px',
                    boxShadow: '0 2px 8px rgba(255, 255, 255, 0.2)'
                  }}>
                    <img 
                      src="/logo.jpeg" 
                      alt="Greenov Africa Logo" 
                      style={{ 
                        height: '100%', 
                        width: '100%',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                  </div>
                </Link>
                <span style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: '600',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  Greenov Africa
                </span>
              </div>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="d-flex align-items-center justify-content-md-end gap-3">
                <span style={{ 
                  fontSize: '0.95rem', 
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontWeight: '500'
                }}>
                  Sustainably Transforming Lives
                </span>
                <div className="d-flex gap-3">
                  <a href="https://www.linkedin.com/company/greenov-africa-ltd/" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: '1.3rem', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#22c55e'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}>
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://x.com/i_freshtech" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: '1.3rem', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#22c55e'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}>
                    <i className="bi bi-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Column 1 - Services */}
            <div className="col-lg-2 col-md-4 col-sm-6">
              <h6 className="mb-3 fw-bold" style={{ color: '#22c55e', fontSize: '1rem' }}>Our Services</h6>
              <ul className="list-unstyled">
                <li>
                  <Link 
                    to="/services" 
                    style={footerLinkStyle}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    onMouseEnter={(e) => handleLinkHover(e, true)}
                    onMouseLeave={(e) => handleLinkHover(e, false)}>
                    Solar-Powered Cooling
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    style={footerLinkStyle}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    onMouseEnter={(e) => handleLinkHover(e, true)}
                    onMouseLeave={(e) => handleLinkHover(e, false)}>
                    Farmer Training Programs
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    style={footerLinkStyle}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    onMouseEnter={(e) => handleLinkHover(e, true)}
                    onMouseLeave={(e) => handleLinkHover(e, false)}>
                    Post-Harvest Management
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    style={footerLinkStyle}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    onMouseEnter={(e) => handleLinkHover(e, true)}
                    onMouseLeave={(e) => handleLinkHover(e, false)}>
                    Off-Grid Solutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 - Company */}
            <div className="col-lg-2 col-md-4 col-sm-6">
              <h6 className="mb-3 fw-bold" style={{ color: '#22c55e', fontSize: '1rem' }}>Company</h6>
              <ul className="list-unstyled">
                <li>
                  <Link to="/who-we-are" style={footerLinkStyle}
                    onMouseEnter={(e) => handleLinkHover(e, true)}
                    onMouseLeave={(e) => handleLinkHover(e, false)}>
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link to="/core-values" style={footerLinkStyle}
                    onMouseEnter={(e) => handleLinkHover(e, true)}
                    onMouseLeave={(e) => handleLinkHover(e, false)}>
                    Core Values
                  </Link>
                </li>
                <li>
                  <Link to="/impact" style={footerLinkStyle}
                    onMouseEnter={(e) => handleLinkHover(e, true)}
                    onMouseLeave={(e) => handleLinkHover(e, false)}>
                    Our Impact
                  </Link>
                </li>
                <li>
                  <Link to="/problem" style={footerLinkStyle}
                    onMouseEnter={(e) => handleLinkHover(e, true)}
                    onMouseLeave={(e) => handleLinkHover(e, false)}>
                    The Problem
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Help & Support */}
            <div className="col-lg-2 col-md-4 col-sm-6">
              <h6 className="mb-3 fw-bold" style={{ color: '#22c55e', fontSize: '1rem' }}>Help & Support</h6>
              <ul className="list-unstyled">
                <li>
                  <Link to="/contacts" style={footerLinkStyle}
                    onMouseEnter={(e) => handleLinkHover(e, true)}
                    onMouseLeave={(e) => handleLinkHover(e, false)}>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/faq" style={footerLinkStyle}
                    onMouseEnter={(e) => handleLinkHover(e, true)}
                    onMouseLeave={(e) => handleLinkHover(e, false)}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contacts" style={footerLinkStyle}
                    onMouseEnter={(e) => handleLinkHover(e, true)}
                    onMouseLeave={(e) => handleLinkHover(e, false)}>
                    Report an Issue
                  </Link>
                </li>
                <li>
                  <Link to="/contacts" style={footerLinkStyle}
                    onMouseEnter={(e) => handleLinkHover(e, true)}
                    onMouseLeave={(e) => handleLinkHover(e, false)}>
                    Request Callback
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 - Contact & CTA Combined */}
            <div className="col-lg-6 col-md-12">
              <div className="row g-3">
                {/* Contact Info */}
                <div className="col-md-6">
                  <h6 className="mb-3 fw-bold" style={{ color: '#22c55e', fontSize: '1rem' }}>Contact Us</h6>
                  <ul className="list-unstyled">
                    <li className="mb-2" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
                      <i className="bi bi-envelope me-2" style={{ color: '#22c55e' }}></i>
                      greenovafrica@gmail.com
                    </li>
                    <li className="mb-2" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
                      <i className="bi bi-telephone me-2" style={{ color: '#22c55e' }}></i>
                      0789366522
                    </li>
                    <li style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
                      <i className="bi bi-telephone me-2" style={{ color: '#22c55e' }}></i>
                      0786367490
                    </li>
                  </ul>
                </div>
                
                {/* CTA Button & Powered By */}
                <div className="col-md-6">
                  <h6 className="mb-3 fw-bold" style={{ color: '#22c55e', fontSize: '1rem' }}>Take Action</h6>
                  <Link to="/contacts" className="btn w-100" style={{
                    background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
                    color: '#ffffff',
                    borderRadius: '12px',
                    padding: '12px 20px',
                    fontWeight: '600',
                    border: 'none',
                    boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(245, 158, 11, 0.5)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(245, 158, 11, 0.3)'
                  }}>
                    <i className="bi bi-gear-fill"></i>
                    Take Action
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-3" style={{ 
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 mb-2 mb-md-0">
              <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                &copy; {currentYear} Greenov Africa. All rights reserved.
              </p>
            </div>
            <div className="col-md-4 text-center mb-2 mb-md-0">
              <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>
                Powered By : <span style={{ color: '#22c55e', fontWeight: '600' }}>Cloud Sync</span>
              </p>
            </div>
            <div className="col-md-4 text-md-end">
              <div className="d-flex gap-4 justify-content-md-end flex-wrap">
                <a href="#" style={{ 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#22c55e'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}>
                  Privacy Policy
                </a>
                <a href="#" style={{ 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#22c55e'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}>
                  Terms and Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


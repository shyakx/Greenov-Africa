import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { initScrollAnimations } from '../utils/animations'

const Home = () => {
  useEffect(() => {
    initScrollAnimations()
  }, [])

  return (
    <div>
      {/* Hero Section - Creative Design */}
      <section
        className="hero-section text-white d-flex align-items-center position-relative"
        style={{
          minHeight: '56vh',
          overflow: 'hidden',
        }}
      >
        {/* Animated Background Elements */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div className="position-absolute" style={{
            top: '10%',
            left: '10%',
            width: '300px',
            height: '300px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            animation: 'float 8s ease-in-out infinite',
            filter: 'blur(40px)',
            zIndex: 0
          }}></div>
          <div className="position-absolute" style={{
            bottom: '20%',
            right: '15%',
            width: '400px',
            height: '400px',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '50%',
            animation: 'float 10s ease-in-out infinite',
            animationDelay: '2s',
            filter: 'blur(50px)',
            zIndex: 0
          }}></div>
        </div>

        <div className="container position-relative" style={{ zIndex: 10 }}>
          <div className="row">
            <div className="col-lg-10 mx-auto text-center fade-in-up">
              <div className="mb-4 position-relative d-inline-block" style={{ zIndex: 10 }}>
                <div className="position-absolute top-50 start-50 translate-middle" style={{
                  width: '120px',
                  height: '120px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  animation: 'pulse 3s ease-in-out infinite',
                  zIndex: 1
                }}></div>
                <img 
                  src="/logo.jpeg" 
                  alt="GreenNov Africa Ltd Logo" 
                  className="position-relative float-animation"
                  style={{ 
                    height: '80px', 
                    width: '80px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))',
                    animation: 'float 4s ease-in-out infinite',
                    zIndex: 2,
                    position: 'relative'
                  }}
                />
              </div>
              <h1 className="display-1 fw-bold mb-3" style={{ 
                fontSize: 'clamp(1.6rem, 3.2vw, 2.8rem)',
                lineHeight: '1.1',
                color: '#ffffff',
                textShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}>
                Welcome to <span style={{
                  color: '#dcfce7',
                  textShadow: '0 2px 10px rgba(0,0,0,0.2)'
                }}>GreenNov Africa Ltd</span>
              </h1>
              <p className="lead mb-4" style={{ 
                fontSize: 'clamp(0.8rem, 1.44vw, 0.96rem)', 
                maxWidth: '700px', 
                margin: '0 auto',
                color: '#ffffff',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}>
                Empowering African smallholder farmers with solar-powered cooling technology to reduce post-harvest losses and improve food security through clean energy solutions.
              </p>
              <div className="d-flex gap-4 justify-content-center flex-wrap">
                <Link to="/services" className="btn btn-light btn-lg px-5 py-3" style={{
                  borderRadius: '50px',
                  fontWeight: '700',
                  fontSize: '0.88rem',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                }}>
                  <i className="bi bi-arrow-right me-2"></i>
                  Our Services
                </Link>
                <Link to="/contacts" className="btn btn-outline-light btn-lg px-5 py-3" style={{
                  borderRadius: '50px',
                  fontWeight: '700',
                  fontSize: '0.88rem',
                  borderWidth: '2px',
                  borderColor: '#ffffff',
                  color: '#ffffff'
                }}>
                  <i className="bi bi-envelope me-2"></i>
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title-wrapper animate-on-scroll">
            <h2 className="section-title">Why Choose GreenNov Africa Ltd?</h2>
          </div>
          <p className="section-subtitle animate-on-scroll animate-on-scroll-delay-1">
            We provide solar-powered cooling solutions that reduce post-harvest losses and empower farmers with clean energy technology
          </p>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card p-4 text-center h-100 animate-on-scroll animate-on-scroll-delay-1 hover-lift position-relative overflow-hidden">
                <div className="position-absolute top-0 end-0" style={{
            width: '80px',
            height: '80px',
                  background: 'var(--gradient-creative)',
                  borderRadius: '0 24px 0 100%',
                  opacity: 0.1
                }}></div>
                <div className="mb-4 position-relative">
                  <div 
                    style={{ 
                      width: '80px', 
                      height: '80px', 
                      borderRadius: '50%', 
                      background: 'var(--gradient-creative)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 25px rgba(22, 163, 74, 0.3)'
                    }}
                    className="float-animation"
                  >
                    <i className="bi bi-leaf-fill" style={{ fontSize: '2.4rem', color: 'white' }}></i>
                  </div>
                </div>
                <h4 className="mb-3 fw-bold" style={{
                  color: 'var(--dark-green)'
                }}>Solar-Powered Cooling</h4>
                <p className="text-muted mb-0">
                  100% solar-powered cooling technology that extends produce shelf life and reduces post-harvest losses by up to 60%.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 text-center h-100 animate-on-scroll animate-on-scroll-delay-2 hover-lift position-relative overflow-hidden">
                <div className="position-absolute bottom-0 start-0" style={{
            width: '80px',
            height: '80px',
                  background: 'var(--gradient-creative)',
                  borderRadius: '0 100% 0 24px',
                  opacity: 0.1
                }}></div>
                <div className="mb-4 position-relative">
                  <div 
                    style={{ 
                      width: '80px', 
                      height: '80px', 
                      borderRadius: '50%', 
                      background: 'var(--gradient-creative)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 25px rgba(22, 163, 74, 0.3)'
                    }}
                    className="float-animation"
                  >
                    <i className="bi bi-lightbulb-fill" style={{ fontSize: '2.4rem', color: 'white' }}></i>
                  </div>
                </div>
                <h4 className="mb-3 fw-bold" style={{
                  color: 'var(--dark-green)'
                }}>Off-Grid Solutions</h4>
                <p className="text-muted mb-0">
                  Designed specifically for off-grid farming communities with no grid electricity required, zero fuel costs and emissions.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 text-center h-100 animate-on-scroll animate-on-scroll-delay-3 hover-lift position-relative overflow-hidden">
                <div className="position-absolute top-50 start-50 translate-middle" style={{
                  width: '120px',
                  height: '120px',
                  background: 'var(--light-green)',
                  borderRadius: '50%',
                  opacity: 0.3,
                  transform: 'translate(-50%, -50%)',
                  animation: 'pulse 4s ease-in-out infinite'
                }}></div>
                <div className="mb-4 position-relative">
                  <div 
                    style={{ 
            width: '80px',
            height: '80px',
                      borderRadius: '50%', 
                      background: 'var(--gradient-creative)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 25px rgba(22, 163, 74, 0.3)'
                    }}
                    className="float-animation-delayed"
                  >
                    <i className="bi bi-people-fill" style={{ fontSize: '2.4rem', color: 'white' }}></i>
                  </div>
                </div>
                <h4 className="mb-3 fw-bold" style={{
                  color: 'var(--dark-green)'
                }}>Farmer Training</h4>
                <p className="text-muted mb-0">
                  Comprehensive training programs to ensure farmers maximize benefits of our cooling technology and improve post-harvest management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="section-padding cta-section position-relative" 
        style={{ 
          background: '#16a34a',
          overflow: 'hidden'
        }}
      >
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="mb-4 fw-bold animate-on-scroll" style={{ 
                fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)',
                color: '#ffffff',
                fontWeight: '700',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
              }}>
                Ready to Make a Difference?
              </h2>
              <p className="lead mb-4 animate-on-scroll animate-on-scroll-delay-1" style={{ 
                fontSize: 'clamp(0.8rem, 1.6vw, 1.04rem)', 
                color: 'rgba(255, 255, 255, 0.95)',
                maxWidth: '600px',
                margin: '0 auto',
                fontWeight: '400',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.2)'
              }}>
                Join us in reducing post-harvest losses and improving food security for African farmers through clean energy solutions.
              </p>
              <Link to="/contacts" className="btn btn-lg animate-on-scroll animate-on-scroll-delay-2 hover-scale px-5 py-3" style={{
                borderRadius: '50px',
                fontSize: '0.88rem',
                fontWeight: '700',
                background: '#22c55e',
                color: '#ffffff',
                border: 'none',
                boxShadow: '0 4px 15px rgba(22, 163, 74, 0.4)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                transition: 'all 0.3s ease',
                padding: '10px 20px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(22, 163, 74, 0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(22, 163, 74, 0.4)'
              }}>
                <i className="bi bi-arrow-right me-2"></i>
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home


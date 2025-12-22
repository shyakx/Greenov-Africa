import React, { useEffect } from 'react'
import { initScrollAnimations } from '../utils/animations'

const CoreValues = () => {
  useEffect(() => {
    initScrollAnimations()
  }, [])

  const values = [
    {
      title: 'Innovation',
      description: 'Creating cutting-edge solutions for African agriculture',
      icon: 'bi-lightbulb-fill',
    },
    {
      title: 'Sustainability',
      description: 'Commitment to eco-friendly, renewable energy',
      icon: 'bi-leaf-fill',
    },
    {
      title: 'Accessibility',
      description: 'Making technology affordable for all farmers',
      icon: 'bi-people-fill',
    },
    {
      title: 'Impact',
      description: 'Driving measurable improvements in farmer livelihoods',
      icon: 'bi-heart-fill',
    },
    {
      title: 'Community',
      description: 'Building partnerships and local capacity',
      icon: 'bi-shield-check-fill',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section text-white d-flex align-items-center"
        style={{
          minHeight: '40vh',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center fade-in-up">
              <h1 className="display-2 fw-bold mb-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
                Our Core Values
              </h1>
              <p className="lead" style={{ fontSize: '1.3rem' }}>
                The principles that guide everything we do
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="section-padding" style={{ background: 'var(--primary-green)' }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card p-5 h-100" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '20px'
              }}>
                <h2 className="mb-4 text-white fw-bold">Our Mission</h2>
                <p className="text-white" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  To empower African smallholder farmers with sustainable, affordable cooling technology that reduces post-harvest losses, increases farmer income, improves food security, and promotes environmental sustainability through clean energy solutions.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-5 h-100" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '20px'
              }}>
                <h2 className="mb-4 text-white fw-bold">Core Values</h2>
                <ul className="list-unstyled">
                  {values.map((value, index) => (
                    <li key={index} className="mb-3">
                      <div className="d-flex align-items-start">
                        <span className="me-3" style={{ color: '#ffffff', fontSize: '0.6rem' }}>◆</span>
                        <div>
                          <strong className="text-white d-block mb-1">{value.title}</strong>
                          <span className="text-white-50" style={{ fontSize: '0.95rem' }}>{value.description}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row g-4">
            {values.map((value, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className={`card p-4 h-100 text-center animate-on-scroll animate-on-scroll-delay-${index + 1} hover-lift`}>
                  <div className="mb-3">
                    <div 
                      style={{ 
                        width: '70px', 
                        height: '70px', 
                        borderRadius: '50%', 
                        background: 'var(--light-green)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <i
                        className={`bi ${value.icon}`}
                        style={{ fontSize: '2rem', color: 'var(--primary-green)' }}
                      ></i>
                    </div>
                  </div>
                  <h4 className="mb-3 fw-bold" style={{ color: 'var(--dark-green)' }}>{value.title}</h4>
                  <p className="text-muted mb-0">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CoreValues

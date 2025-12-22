import React, { useEffect } from 'react'
import { initScrollAnimations } from '../utils/animations'

const Impact = () => {
  useEffect(() => {
    initScrollAnimations()
  }, [])
  const impacts = [
    {
      metric: '50+',
      label: 'Projects Completed',
      description: 'Successfully delivered green solutions across various industries in Rwanda',
    },
    {
      metric: '5,000+',
      label: 'Tons CO₂ Reduced',
      description: 'Helped clients reduce their carbon footprint significantly',
    },
    {
      metric: '30+',
      label: 'Happy Clients',
      description: 'Organizations that have transformed their sustainability practices',
    },
    {
      metric: '25+',
      label: 'MW Renewable Energy',
      description: 'Clean energy capacity installed through our projects in Rwanda',
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
                Our Impact
              </h1>
              <p className="lead" style={{ fontSize: '1.3rem' }}>
                Making a measurable difference for the planet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row g-4">
            {impacts.map((impact, index) => (
              <div key={index} className={`col-md-6 col-lg-3`}>
                <div className={`card p-5 text-center h-100 animate-on-scroll animate-on-scroll-delay-${index + 1} hover-scale hover-glow`}>
                  <h2 className="display-3 fw-bold mb-3" style={{ 
                    color: 'var(--primary-green)',
                    background: 'var(--gradient-primary)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animationDelay: `${(index + 1) * 0.2}s`
                  }}>
                    {impact.metric}
                  </h2>
                  <h5 className="mb-3 fw-bold">{impact.label}</h5>
                  <p className="text-muted mb-0">{impact.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="mb-4 text-center" style={{ color: 'var(--dark-green)' }}>
                Creating Lasting Change
              </h2>
              <p className="lead mb-4 text-center" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                At GreenNov Africa Ltd, we measure our success by the positive impact we create for
                our clients, communities, and the environment.
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h4 className="mb-3" style={{ color: 'var(--primary-green)' }}>
                  Environmental Impact
                </h4>
                <ul className="list-unstyled">
                  <li className="mb-2" style={{ color: '#374151' }}>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Significant reduction in greenhouse gas emissions
                  </li>
                  <li className="mb-2" style={{ color: '#374151' }}>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Increased adoption of renewable energy sources
                  </li>
                  <li className="mb-2" style={{ color: '#374151' }}>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Improved waste management and recycling rates
                  </li>
                  <li style={{ color: '#374151' }}>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Enhanced biodiversity and ecosystem health
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h4 className="mb-3" style={{ color: 'var(--primary-green)' }}>
                  Business Impact
                </h4>
                <ul className="list-unstyled">
                  <li className="mb-2" style={{ color: '#374151' }}>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Reduced operational costs through energy efficiency
                  </li>
                  <li className="mb-2" style={{ color: '#374151' }}>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Enhanced brand reputation and market position
                  </li>
                  <li className="mb-2" style={{ color: '#374151' }}>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Improved compliance with environmental regulations
                  </li>
                  <li style={{ color: '#374151' }}>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Increased employee engagement and satisfaction
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-10 mx-auto">
              <div className="card p-5" style={{ backgroundColor: 'rgba(220, 252, 231, 0.8)', backdropFilter: 'blur(10px)' }}>
                <h3 className="mb-4 text-center" style={{ color: 'var(--dark-green)' }}>
                  Our Commitment
                </h3>
                <p className="lead text-center" style={{ color: '#374151' }}>
                  We're committed to transparency and accountability. We track and report on
                  our impact regularly, ensuring that our work delivers real, measurable
                  results. Together with our clients, we're building a more sustainable future
                  for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Impact


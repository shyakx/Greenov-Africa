import React, { useEffect } from 'react'
import { initScrollAnimations } from '../utils/animations'

const Gallery = () => {
  useEffect(() => {
    initScrollAnimations()
  }, [])
  const projects = [
    {
      title: 'Solar Cooling Installation - Kigali Market',
      description: 'Solar-powered cooling system installed at major fresh produce market, reducing post-harvest losses by 55%',
      location: 'Kigali, Rwanda',
      impact: '55% reduction in post-harvest losses',
      icon: 'bi-thermometer-half',
    },
    {
      title: 'Off-Grid Farm Cooling Project',
      description: 'Automated solar-powered cooling appliance for off-grid farming community, extending produce shelf life significantly',
      location: 'Muhanga, Rwanda',
      impact: '60% reduction in losses, 100% solar-powered',
      icon: 'bi-sun-fill',
    },
    {
      title: 'Farmer Training Program - Eastern Province',
      description: 'Comprehensive training program teaching post-harvest management and cooling system operation to 30+ farmers',
      location: 'Gisenyi, Rwanda',
      impact: '30+ farmers trained, improved income',
      icon: 'bi-person-badge',
    },
    {
      title: 'Community Cooling Hub',
      description: 'Stationary cooling system serving multiple smallholder farmers in rural community',
      location: 'Kigali, Rwanda',
      impact: 'Extended shelf life by 3-5 days',
      icon: 'bi-building',
    },
    {
      title: 'Market Vendor Cooling Solution',
      description: 'Solar-powered cooling technology for fresh produce vendors, reducing waste and increasing profits',
      location: 'Muhanga, Rwanda',
      impact: '50% reduction in produce spoilage',
      icon: 'bi-shop',
    },
    {
      title: 'Agricultural Cooperative Cooling',
      description: 'Large-scale solar cooling installation for agricultural cooperative, improving food security',
      location: 'Gisenyi, Rwanda',
      impact: 'Improved food security for 200+ families',
      icon: 'bi-people-fill',
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
                Our Projects
              </h1>
              <p className="lead" style={{ fontSize: '1.3rem' }}>
                Solar-powered cooling solutions reducing post-harvest losses across Rwanda
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {projects.map((project, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className={`card h-100 animate-on-scroll animate-on-scroll-delay-${index + 1} hover-lift hover-glow`}>
                  <div className="card-body p-4">
                    <div className="mb-3 text-center">
                      <div 
                        style={{ 
                          width: '60px', 
                          height: '60px', 
                          borderRadius: '50%', 
                          background: 'var(--light-green)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <i
                          className={`bi ${project.icon}`}
                          style={{ fontSize: '1.8rem', color: 'var(--primary-green)' }}
                        ></i>
                      </div>
                    </div>
                    <h5 className="card-title mb-3 fw-bold" style={{ fontSize: '1rem', minHeight: '48px' }}>{project.title}</h5>
                    <p className="card-text text-muted mb-3" style={{ fontSize: '0.875rem', minHeight: '40px' }}>{project.description}</p>
                    <div className="mb-2">
                      <small className="text-muted d-flex align-items-start" style={{ fontSize: '0.8rem' }}>
                        <i className="bi bi-geo-alt me-2 mt-1" style={{ fontSize: '0.9rem', flexShrink: 0 }}></i>
                        <span><strong>Location:</strong> {project.location}</span>
                      </small>
                    </div>
                    <div>
                      <small className="text-success d-flex align-items-start" style={{ fontSize: '0.8rem' }}>
                        <i className="bi bi-check-circle-fill me-2 mt-1" style={{ fontSize: '0.9rem', flexShrink: 0 }}></i>
                        <span><strong>Impact:</strong> {project.impact}</span>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery

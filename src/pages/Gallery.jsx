import React, { useEffect } from 'react'
import { initScrollAnimations } from '../utils/animations'

const Gallery = () => {
  useEffect(() => {
    initScrollAnimations()
  }, [])
  const projects = [
    {
      title: 'Solar Farm Installation',
      description: 'Large-scale solar energy project providing clean power to 10,000+ homes',
      location: 'Kigali, Rwanda',
      impact: 'Reduced CO₂ by 25,000 tons annually',
      icon: 'bi-sun-fill',
    },
    {
      title: 'Corporate Sustainability Program',
      description: 'Comprehensive green transformation for major Rwandan company',
      location: 'Kigali, Rwanda',
      impact: 'Achieved 40% reduction in carbon footprint',
      icon: 'bi-building',
    },
    {
      title: 'Waste-to-Energy Facility',
      description: 'Innovative recycling and energy generation system',
      location: 'Muhanga, Rwanda',
      impact: 'Diverted 50,000 tons from landfills',
      icon: 'bi-recycle',
    },
    {
      title: 'Green Building Certification',
      description: 'Sustainable building certification for commercial complex',
      location: 'Kigali, Rwanda',
      impact: '60% energy savings vs. conventional buildings',
      icon: 'bi-award-fill',
    },
    {
      title: 'Hydroelectric Energy Project',
      description: 'Community hydroelectric project powering rural communities',
      location: 'Gisenyi, Rwanda',
      impact: '15MW clean energy capacity',
      icon: 'bi-water',
    },
    {
      title: 'Carbon Offset Program',
      description: 'Reforestation and carbon capture initiative',
      location: 'Nyungwe Forest, Rwanda',
      impact: '100,000 trees planted, 5,000 tons CO₂ captured',
      icon: 'bi-tree-fill',
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
                A showcase of our impactful work and achievements
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
                  <div className="card-body p-5">
                    <div className="mb-4 text-center">
                      <div 
                        style={{ 
                          width: '80px', 
                          height: '80px', 
                          borderRadius: '50%', 
                          background: 'var(--light-green)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <i
                          className={`bi ${project.icon}`}
                          style={{ fontSize: '2.5rem', color: 'var(--primary-green)' }}
                        ></i>
                      </div>
                    </div>
                    <h5 className="card-title mb-3 fw-bold">{project.title}</h5>
                    <p className="card-text text-muted mb-4">{project.description}</p>
                    <div className="mb-3">
                      <small className="text-muted d-flex align-items-center">
                        <i className="bi bi-geo-alt me-2" style={{ fontSize: '1.1rem' }}></i>
                        <strong>Location:</strong> {project.location}
                      </small>
                    </div>
                    <div>
                      <small className="text-success d-flex align-items-center">
                        <i className="bi bi-check-circle-fill me-2" style={{ fontSize: '1.1rem' }}></i>
                        <strong>Impact:</strong> {project.impact}
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


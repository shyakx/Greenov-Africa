import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { initScrollAnimations } from '../utils/animations'

const Services = () => {
  useEffect(() => {
    initScrollAnimations()
  }, [])

  const services = [
    {
      title: 'Solar-Powered Cooling Solution',
      description:
        'Our flagship automated solar-powered fresh produce cooling appliance is specifically designed for off-grid farming communities. Available in both portable and stationary configurations, this cooling system provides reliable, all-day temperature control to dramatically extend the shelf life of fruits and vegetables.',
      icon: 'bi-thermometer-half',
      features: [
        '100% solar-powered with no grid electricity required',
        'Portable and Automated evaporative cooling technology',
        'Portable and stationary design options for farm and market installations',
        'Zero fuel costs and emissions',
        'Low maintenance requirements',
        'Smart automation for optimal temperature control',
        'Extends produce shelf life significantly',
        'Reduces post-harvest losses by up to 60%'
      ]
    },
    {
      title: 'Farmer Training Programs',
      description:
        'We provide comprehensive training to ensure farmers and vendors maximize the benefits of our cooling technology and improve their overall post-harvest management practices.',
      icon: 'bi-person-badge',
      features: [
        'Proper produce handling techniques',
        'Cooling system operation and maintenance',
        'Best practices for storage and preservation',
        'Quality control and grading methods',
        'Market timing and value optimization',
        'Ongoing technical support and consultation',
        'Community knowledge sharing networks'
      ]
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
                Our Services
              </h1>
              <p className="lead" style={{ fontSize: '1.3rem' }}>
                Solar-powered solutions to reduce post-harvest losses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-lg-6">
                <div className={`card p-4 h-100 animate-on-scroll animate-on-scroll-delay-${index + 1} hover-lift`}>
                  <div className="mb-3">
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
                        className={`bi ${service.icon}`}
                        style={{ fontSize: '1.8rem', color: 'var(--primary-green)' }}
                      ></i>
                    </div>
                  </div>
                  <h4 className="mb-3 fw-bold" style={{ color: 'var(--dark-green)' }}>{service.title}</h4>
                  <p className="text-muted mb-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>{service.description}</p>
                  <ul className="list-unstyled">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span className="text-muted" style={{ fontSize: '1rem', lineHeight: '1.6' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="mb-4">Ready to Get Started?</h2>
              <p className="lead mb-4">
                Let's discuss how our solar-powered cooling solutions can help reduce your post-harvest losses.
              </p>
              <Link to="/contacts" className="btn btn-primary btn-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

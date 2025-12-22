import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { initScrollAnimations } from '../utils/animations'

const Services = () => {
  useEffect(() => {
    initScrollAnimations()
  }, [])
  const services = [
    {
      title: 'Renewable Energy Solutions',
      description:
        'Solar, wind, and hydroelectric power systems designed to meet your energy needs while reducing carbon footprint.',
      icon: 'bi-lightning-charge-fill',
    },
    {
      title: 'Energy Efficiency Consulting',
      description:
        'Comprehensive audits and recommendations to optimize energy usage and reduce costs.',
      icon: 'bi-speedometer2',
    },
    {
      title: 'Waste Management',
      description:
        'Sustainable waste reduction, recycling programs, and circular economy solutions.',
      icon: 'bi-recycle',
    },
    {
      title: 'Carbon Footprint Assessment',
      description:
        'Detailed analysis of your environmental impact with actionable reduction strategies.',
      icon: 'bi-graph-up',
    },
    {
      title: 'Green Building Design',
      description:
        'Eco-friendly construction and renovation solutions for sustainable infrastructure.',
      icon: 'bi-building',
    },
    {
      title: 'Environmental Compliance',
      description:
        'Guidance and support to meet environmental regulations and achieve certifications.',
      icon: 'bi-shield-check',
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
                Comprehensive green solutions tailored to your needs
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
              <div key={index} className="col-md-6 col-lg-4">
                <div className={`card p-5 h-100 text-center animate-on-scroll animate-on-scroll-delay-${index + 1} hover-lift hover-glow`}>
                  <div className="mb-4">
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
                      className="float-animation"
                    >
                      <i
                        className={`bi ${service.icon} hover-rotate`}
                        style={{ fontSize: '2.5rem', color: 'var(--primary-green)' }}
                      ></i>
                    </div>
                  </div>
                  <h4 className="mb-3 fw-bold">{service.title}</h4>
                  <p className="text-muted mb-0">{service.description}</p>
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
                Let's discuss how our services can help you achieve your sustainability goals.
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


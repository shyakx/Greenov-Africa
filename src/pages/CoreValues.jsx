import React, { useEffect } from 'react'
import { initScrollAnimations } from '../utils/animations'

const CoreValues = () => {
  useEffect(() => {
    initScrollAnimations()
  }, [])
  const values = [
    {
      title: 'Sustainability',
      description:
        'We are committed to environmental stewardship and creating solutions that benefit both business and the planet.',
      icon: 'bi-leaf-fill',
    },
    {
      title: 'Innovation',
      description:
        'We continuously explore new technologies and approaches to stay at the forefront of green solutions.',
      icon: 'bi-lightbulb-fill',
    },
    {
      title: 'Integrity',
      description:
        'Honesty, transparency, and ethical practices guide all our business relationships and operations.',
      icon: 'bi-shield-check-fill',
    },
    {
      title: 'Excellence',
      description:
        'We strive for the highest quality in everything we do, delivering exceptional results for our clients.',
      icon: 'bi-star-fill',
    },
    {
      title: 'Collaboration',
      description:
        'We believe in working together with clients, partners, and communities to achieve shared goals.',
      icon: 'bi-people-fill',
    },
    {
      title: 'Impact',
      description:
        'We measure success not just by profit, but by the positive environmental and social impact we create.',
      icon: 'bi-heart-fill',
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

      {/* Values Grid */}
      <section className="section-padding">
        <div className="container">

          <div className="row g-4">
            {values.map((value, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className={`card p-5 h-100 text-center animate-on-scroll animate-on-scroll-delay-${index + 1} hover-lift`}>
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
                    >
                      <i
                        className={`bi ${value.icon}`}
                        style={{ fontSize: '2.5rem', color: 'var(--primary-green)' }}
                      ></i>
                    </div>
                  </div>
                  <h4 className="mb-3 fw-bold">{value.title}</h4>
                  <p className="text-muted mb-0">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-lg-10 mx-auto">
              <div className="card p-5" style={{ backgroundColor: 'rgba(220, 252, 231, 0.8)', backdropFilter: 'blur(10px)' }}>
                <h3 className="mb-4 text-center" style={{ color: 'var(--dark-green)' }}>
                  Living Our Values
                </h3>
                <p className="lead text-center mb-4">
                  These core values aren't just words on a page—they're the foundation of our
                  company culture and the driving force behind every project we undertake. We
                  integrate these principles into our daily operations, decision-making
                  processes, and client relationships.
                </p>
                <p className="text-center mb-0">
                  When you work with GreenNov Africa Ltd, you're partnering with a company that's
                  genuinely committed to making a positive difference in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CoreValues


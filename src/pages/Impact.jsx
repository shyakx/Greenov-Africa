import React, { useEffect } from 'react'
import { initScrollAnimations } from '../utils/animations'

const Impact = () => {
  useEffect(() => {
    initScrollAnimations()
  }, [])
  const impacts = [
    {
      metric: '60%',
      label: 'Post-Harvest Loss Reduction',
      description: 'Average reduction in post-harvest losses for farmers using our solar-powered cooling solutions',
    },
    {
      metric: '100%',
      label: 'Solar-Powered',
      description: 'All our cooling systems operate entirely on clean solar energy with zero grid electricity required',
    },
    {
      metric: '30+',
      label: 'Farmers Trained',
      description: 'Farmers and vendors trained in post-harvest management and cooling system operation',
    },
    {
      metric: '0',
      label: 'Emissions',
      description: 'Zero fuel costs and emissions - completely clean energy solution for off-grid communities',
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
                Reducing post-harvest losses and improving farmer livelihoods
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
                At GreenNov Africa Ltd, we measure our success by the reduction in post-harvest losses, 
                improvement in farmer income, and increase in food security we create for farming communities.
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h4 className="mb-3" style={{ color: 'var(--primary-green)' }}>
                  Impact on Farmers
                </h4>
                <ul className="list-unstyled">
                  <li className="mb-2" style={{ color: '#374151' }}>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Up to 60% reduction in post-harvest losses
                  </li>
                  <li className="mb-2" style={{ color: '#374151' }}>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Significant extension of produce shelf life
                  </li>
                  <li className="mb-2" style={{ color: '#374151' }}>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Increased farmer income through reduced losses
                  </li>
                  <li style={{ color: '#374151' }}>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Improved food security for communities
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h4 className="mb-3" style={{ color: 'var(--primary-green)' }}>
                  Clean Energy Impact
                </h4>
                <ul className="list-unstyled">
                  <li className="mb-2" style={{ color: '#374151' }}>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    100% solar-powered with zero grid electricity required
                  </li>
                  <li className="mb-2" style={{ color: '#374151' }}>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Zero fuel costs and emissions
                  </li>
                  <li className="mb-2" style={{ color: '#374151' }}>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Accessible to off-grid farming communities
                  </li>
                  <li style={{ color: '#374151' }}>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Low maintenance and sustainable operation
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
                  We're committed to reducing post-harvest losses and improving food security for African farmers. 
                  We track and report on our impact regularly, ensuring that our solar-powered cooling solutions 
                  deliver real, measurable results in reducing food waste and increasing farmer income. Together 
                  with farming communities, we're building a more food-secure future through clean energy solutions.
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


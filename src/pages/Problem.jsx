import React from 'react'

const Problem = () => {
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
                The Problem We're Solving
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="mb-4 text-center" style={{ color: 'var(--dark-green)' }}>
                Environmental Challenges We Face
              </h2>
              <p className="lead mb-4 text-center">
                Our planet is facing unprecedented environmental challenges that require
                immediate action and innovative solutions.
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card p-4 h-100 border-start border-4 border-danger">
                <h4 className="mb-3">Climate Change</h4>
                <p>
                  Rising global temperatures, extreme weather events, and changing climate
                  patterns threaten ecosystems and communities worldwide. We need sustainable
                  solutions to reduce greenhouse gas emissions.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100 border-start border-4 border-warning">
                <h4 className="mb-3">Resource Depletion</h4>
                <p>
                  Non-renewable resources are being consumed at an unsustainable rate. We must
                  transition to renewable energy sources and circular economy models.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100 border-start border-4 border-info">
                <h4 className="mb-3">Pollution</h4>
                <p>
                  Air, water, and soil pollution continue to harm human health and
                  biodiversity. Effective waste management and pollution control are essential.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100 border-start border-4 border-success">
                <h4 className="mb-3">Biodiversity Loss</h4>
                <p>
                  Species extinction rates are accelerating due to habitat destruction and
                  environmental degradation. Conservation efforts are critical.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-10 mx-auto">
              <div className="card p-5" style={{ backgroundColor: 'rgba(220, 252, 231, 0.8)', backdropFilter: 'blur(10px)' }}>
                <h3 className="mb-4" style={{ color: 'var(--dark-green)' }}>
                  Our Solution
                </h3>
                <p className="lead mb-3">
                  GreenNov Africa Ltd addresses these challenges through innovative, practical, and
                  scalable solutions. We help businesses and communities:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Reduce carbon emissions and environmental impact
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Implement renewable energy systems
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Optimize resource usage and minimize waste
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Adopt sustainable business practices
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Achieve environmental compliance and certifications
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Problem


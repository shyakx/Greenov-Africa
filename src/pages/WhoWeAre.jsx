import React from 'react'

const WhoWeAre = () => {
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
              <h1 className="display-2 fw-bold mb-3" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Who We Are
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-10 mx-auto">
              <h2 className="mb-4 text-center" style={{ 
                color: '#22c55e',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
              }}>
                Our Story
              </h2>
              <p className="mb-4" style={{ 
                color: 'rgba(255, 255, 255, 0.95)',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                fontSize: '1rem',
                lineHeight: '1.7',
                textAlign: 'left'
              }}>
                Greenov Africa was founded with a vision to empower African smallholder farmers with sustainable, affordable cooling technology. We specialize in reducing post-harvest losses through clean energy solutions.
              </p>
              <p className="mb-4" style={{ 
                color: 'rgba(255, 255, 255, 0.95)',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                fontSize: '1rem',
                lineHeight: '1.7',
                textAlign: 'left'
              }}>
                Our team consists of passionate engineers, agricultural experts, and business professionals dedicated to creating innovative solar-powered cooling solutions. We combine expertise in renewable energy and post-harvest management to deliver technology that extends produce shelf life and reduces losses.
              </p>
              <p className="mb-4" style={{ 
                color: 'rgba(255, 255, 255, 0.95)',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                fontSize: '1rem',
                lineHeight: '1.7',
                textAlign: 'left'
              }}>
                With a commitment to excellence, we've helped numerous farmers reduce post-harvest losses by up to 60%, increase their income, and improve food security. Our mission is to make solar-powered cooling technology accessible and affordable for all farmers, especially those in off-grid communities.
              </p>
              <div className="row g-4 mt-4">
                <div className="col-md-6">
                  <div className="card p-4 h-100" style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                    borderRadius: '20px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                  }}>
                    <h5 className="mb-3" style={{ color: '#22c55e', fontWeight: '600' }}>
                      <i className="bi bi-people-fill me-2"></i>
                      Our Team
                    </h5>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      A diverse group of experts including solar energy engineers, agricultural specialists, post-harvest management consultants, and business strategists working together to reduce food losses and improve farmer livelihoods.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card p-4 h-100" style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                    borderRadius: '20px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                  }}>
                    <h5 className="mb-3" style={{ color: '#22c55e', fontWeight: '600' }}>
                      <i className="bi bi-award-fill me-2"></i>
                      Our Expertise
                    </h5>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      Specialized knowledge in solar-powered cooling systems, automated evaporative cooling technology, post-harvest management, farmer training programs, and off-grid renewable energy solutions for agricultural applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <div className="card p-4 h-100" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}>
                <h4 className="mb-3" style={{ color: '#22c55e', fontWeight: '600' }}>
                  Our Mission
                </h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  To empower African smallholder farmers with sustainable, affordable cooling technology that reduces post-harvest losses, increases farmer income, improves food security, and promotes environmental sustainability through clean energy solutions.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}>
                <h4 className="mb-3" style={{ color: '#22c55e', fontWeight: '600' }}>
                  Our Vision
                </h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  A world where African farmers have access to affordable, clean energy cooling technology that eliminates post-harvest losses and ensures food security for all.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}>
                <h4 className="mb-3" style={{ color: '#22c55e', fontWeight: '600' }}>
                  Our Values
                </h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Innovation, sustainability, accessibility, impact, and community guide everything we do. We're committed to reducing post-harvest losses and improving farmer livelihoods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhoWeAre


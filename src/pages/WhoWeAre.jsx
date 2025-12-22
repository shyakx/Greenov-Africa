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
                GreenNov Africa Ltd was founded with a vision to revolutionize the way we approach
                environmental sustainability. We believe that businesses can thrive while
                protecting our planet.
              </p>
              <p className="mb-4" style={{ 
                color: 'rgba(255, 255, 255, 0.95)',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                fontSize: '1rem',
                lineHeight: '1.7',
                textAlign: 'left'
              }}>
                Our team consists of passionate environmentalists, engineers, and business
                professionals who are dedicated to creating innovative green solutions. We
                combine expertise in renewable energy, waste management, and sustainable
                practices to deliver comprehensive environmental services.
              </p>
              <p className="mb-4" style={{ 
                color: 'rgba(255, 255, 255, 0.95)',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                fontSize: '1rem',
                lineHeight: '1.7',
                textAlign: 'left'
              }}>
                With years of experience and a commitment to excellence, we've helped
                numerous organizations reduce their environmental impact while improving their
                bottom line. Our mission is to make sustainability accessible, practical, and
                profitable for everyone.
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
                      A diverse group of experts including environmental scientists, renewable
                      energy engineers, sustainability consultants, and business strategists
                      working together to create impactful solutions.
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
                      Specialized knowledge in solar and wind energy systems, waste-to-energy
                      conversion, carbon footprint analysis, green building certifications, and
                      sustainable supply chain management.
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
                  To provide innovative, sustainable solutions that help businesses and
                  communities reduce their environmental footprint while achieving their goals.
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
                  A world where sustainable practices are the norm, and businesses thrive in
                  harmony with the environment.
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
                  Integrity, innovation, sustainability, and excellence guide everything we do.
                  We're committed to making a positive impact.
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


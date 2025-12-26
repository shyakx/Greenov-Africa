import React from 'react'

const Team = () => {
  const teamMembers = [
    {
      name: 'NDAYISABA Patrick',
      role: 'Founder and CEO',
      image: '/Staff images/Patrick.jpeg',
      placeholder: 'https://via.placeholder.com/300x300/22c55e/ffffff?text=Patrick',
      email: 'patindayisaba@gmail.com',
      linkedin: 'https://www.linkedin.com/in/patrick-ndayisaba-2a50a8265'
    },
    {
      name: 'DUSHIMIMANA Olivier',
      role: 'Co-Founder and Director of Research and Development',
      image: '/Staff images/Olivier.jpeg',
      placeholder: 'https://via.placeholder.com/300x300/22c55e/ffffff?text=Olivier',
      email: 'dushimimanaolivier4@gmail.com',
      linkedin: 'https://www.linkedin.com/in/dushimimana-olivier-35266a1b5'
    },
    {
      name: 'HATANGIMBABAZI ISHIMWE Divine',
      role: 'Chief Finance Officer',
      image: '/Staff images/Divine.jpeg',
      placeholder: 'https://via.placeholder.com/300x300/22c55e/ffffff?text=Divine'
    },
    {
      name: 'DUSHIME Dieudonne',
      role: 'Director of Operations and Supply Chain',
      image: '/Staff images/DUSHIME.jpg',
      placeholder: 'https://via.placeholder.com/300x300/22c55e/ffffff?text=Dieudonne'
    },
    {
      name: 'UWICYEZA Pamela',
      role: 'Head of Marketing and Communication',
      image: '/Staff images/Pamella.jpeg',
      placeholder: 'https://via.placeholder.com/300x300/22c55e/ffffff?text=Pamela'
    }
  ]

  const handleImageError = (e, placeholder) => {
    e.target.src = placeholder
  }

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
                Meet Our Team
              </h1>
              <p className="lead" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>
                The passionate professionals driving Greenov Africa forward
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                <div 
                  className="card h-100 text-center animate-on-scroll hover-lift"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                    borderRadius: '20px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div className="position-relative" style={{ padding: '0.75rem 0.75rem 0.5rem' }}>
                    <div 
                      className="mx-auto mb-2 position-relative"
                      style={{
                        width: '140px',
                        height: '140px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '2.5px solid rgba(34, 197, 94, 0.3)',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-100 h-100"
                        style={{
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                        onError={(e) => handleImageError(e, member.placeholder)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.1)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)'
                        }}
                      />
                    </div>
                  </div>
                  <div className="card-body" style={{ padding: '0 0.75rem 0.75rem' }}>
                    <h4 className="mb-1 fw-bold" style={{ color: '#22c55e', fontSize: '0.95rem' }}>
                      {member.name}
                    </h4>
                    <p className="mb-2" style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.8rem' }}>
                      {member.role}
                    </p>
                    {(member.email || member.linkedin) && (
                      <div className="d-flex justify-content-center gap-3 mt-2" style={{ fontSize: '0.75rem' }}>
                        {member.email && (
                          <a 
                            href={`mailto:${member.email}`}
                            className="d-flex align-items-center text-decoration-none"
                            style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#22c55e'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)'}
                          >
                            <i className="bi bi-envelope-fill me-1" style={{ fontSize: '0.9rem' }}></i>
                            <span style={{ fontSize: '0.75rem' }}>Email</span>
                          </a>
                        )}
                        {member.linkedin && (
                          <a 
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="d-flex align-items-center text-decoration-none"
                            style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#22c55e'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)'}
                          >
                            <i className="bi bi-linkedin me-1" style={{ fontSize: '0.9rem' }}></i>
                            <span style={{ fontSize: '0.75rem' }}>LinkedIn</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Description Section */}
      <section className="section-padding" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="card p-3 animate-on-scroll" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
              }}>
                <h3 className="mb-2 text-center" style={{ color: '#22c55e', fontSize: '1.1rem' }}>
                  Our Commitment
                </h3>
                <p className="text-center mb-0" style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.8rem', lineHeight: '1.6' }}>
                  Our diverse team brings together expertise in leadership, research, finance, operations, and marketing. 
                  Together, we're committed to driving innovation in green technology and sustainable solutions, 
                  working tirelessly to create a positive environmental impact for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team


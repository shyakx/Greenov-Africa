import React from 'react'

const Problem = () => {
  const problems = [
    {
      title: 'Lack of Electricity Access',
      statistic: '42.6%',
      description: 'of people in Rwanda lack connection to the national grid, making traditional refrigeration impossible for rural farmers.',
      color: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
    },
    {
      title: 'Massive Post-Harvest Losses',
      statistic: '30-40%',
      description: 'of total fruits and vegetables are lost in Rwanda due to inadequate storage facilities and poor handling practices.',
      color: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)'
    },
    {
      title: 'Regional Food Waste Crisis',
      statistic: '45-65%',
      description: 'of fresh produce in Sub-Saharan Africa is lost before consumption, threatening food security and farmer livelihoods.',
      color: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
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
                The Problem We're Solving
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {problems.map((problem, index) => (
              <div key={index} className="col-md-4">
                <div className="card p-4 h-100 text-white" style={{
                  background: problem.color,
                  borderRadius: '16px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                }}>
                  <h4 className="mb-3 fw-bold">{problem.title}</h4>
                  <div className="mb-3" style={{ fontSize: '3rem', fontWeight: '700', lineHeight: '1' }}>
                    {problem.statistic}
                  </div>
                  <p className="mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-lg-10 mx-auto">
              <div className="card p-5" style={{ backgroundColor: 'rgba(220, 252, 231, 0.8)', backdropFilter: 'blur(10px)' }}>
                <h3 className="mb-4" style={{ color: 'var(--dark-green)' }}>
                  Our Solution
                </h3>
                <p className="lead mb-3">
                  Greenov Africa addresses these challenges through solar-powered cooling technology that helps farmers:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Reduce post-harvest losses by up to 60%
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Extend produce shelf life significantly
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Operate without grid electricity using 100% solar power
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Improve food security and farmer livelihoods
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Access affordable, low-maintenance cooling technology
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

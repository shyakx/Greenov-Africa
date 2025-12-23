import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { initScrollAnimations } from '../utils/animations'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  React.useEffect(() => {
    initScrollAnimations()
  }, [])

  const faqs = [
    {
      question: 'What is Greenov Africa?',
      answer: 'Greenov Africa is a company focused on empowering African smallholder farmers with solar-powered cooling technology. We specialize in reducing post-harvest losses through clean energy solutions, helping farmers extend produce shelf life and improve food security.'
    },
    {
      question: 'How does solar-powered cooling work?',
      answer: 'Our solar-powered cooling systems use automated evaporative cooling technology that operates entirely on solar energy. The system requires no grid electricity, making it perfect for off-grid farming communities. It maintains optimal temperature and humidity levels to extend the shelf life of fruits and vegetables.'
    },
    {
      question: 'What percentage of post-harvest losses can be reduced?',
      answer: 'Our solar-powered cooling solutions have been proven to reduce post-harvest losses by up to 60% for farmers using our technology. This significant reduction helps increase farmer income and improves food security in communities.'
    },
    {
      question: 'Do I need grid electricity to use your cooling systems?',
      answer: 'No, you do not need grid electricity. Our cooling systems are 100% solar-powered and designed specifically for off-grid farming communities. They operate entirely on clean solar energy with zero fuel costs and emissions.'
    },
    {
      question: 'What training do you provide to farmers?',
      answer: 'We provide comprehensive training programs covering proper produce handling techniques, cooling system operation and maintenance, best practices for storage and preservation, quality control methods, market timing optimization, and ongoing technical support. Our goal is to ensure farmers maximize the benefits of our cooling technology.'
    },
    {
      question: 'How much does a solar-powered cooling system cost?',
      answer: 'Pricing varies based on the size and specific requirements of your farm or market. We offer customized cooling solutions tailored to your needs. Please contact us directly for a personalized quote and consultation.'
    },
    {
      question: 'What maintenance is required for the cooling systems?',
      answer: 'Our cooling systems are designed with low maintenance requirements. We provide training on basic maintenance during our farmer training programs, and we offer ongoing technical support. Regular cleaning and simple checks are typically all that\'s needed to keep the system running efficiently.'
    },
    {
      question: 'Where do you operate?',
      answer: 'We primarily operate in Rwanda and are expanding to serve more African countries. Our solutions are designed for African smallholder farmers, especially those in off-grid communities who lack access to reliable electricity.'
    },
    {
      question: 'Can I visit your facilities or see a demonstration?',
      answer: 'Yes! We welcome visits and demonstrations. Please contact us through our contact form or email us at greenovafrica@gmail.com to schedule a visit or demonstration of our solar-powered cooling technology.'
    },
    {
      question: 'Do you offer financing options?',
      answer: 'We understand that affordability is important for smallholder farmers. We work with various partners and financing options to make our technology accessible. Please contact us to discuss financing options that may be available for your situation.'
    },
    {
      question: 'What types of produce can be stored in your cooling systems?',
      answer: 'Our cooling systems are designed to store a wide variety of fruits and vegetables including tomatoes, peppers, leafy greens, fruits, and other perishable produce. The system maintains optimal conditions for most common agricultural products.'
    },
    {
      question: 'How long does installation take?',
      answer: 'Installation time varies depending on the size and complexity of the system. Typically, installation can be completed within a few days. Our team will provide a detailed timeline during the consultation process.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
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
              <h1 className="display-2 fw-bold mb-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
                Frequently Asked Questions
              </h1>
              <p className="lead" style={{ fontSize: '1.3rem' }}>
                Find answers to common questions about our solar-powered cooling solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="row g-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="col-12">
                    <div 
                      className="card animate-on-scroll" 
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(34, 197, 94, 0.2)',
                        borderRadius: '15px',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <div
                        onClick={() => toggleFAQ(index)}
                        style={{
                          padding: '20px',
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          backgroundColor: openIndex === index ? 'rgba(34, 197, 94, 0.1)' : 'transparent',
                          transition: 'background-color 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          if (openIndex !== index) {
                            e.currentTarget.style.backgroundColor = 'rgba(34, 197, 94, 0.05)'
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (openIndex !== index) {
                            e.currentTarget.style.backgroundColor = 'transparent'
                          }
                        }}
                      >
                        <h5 className="mb-0 fw-bold" style={{ 
                          color: '#22c55e',
                          fontSize: '1.1rem',
                          flex: 1,
                          paddingRight: '20px'
                        }}>
                          {faq.question}
                        </h5>
                        <i
                          className={`bi ${openIndex === index ? 'bi-chevron-up' : 'bi-chevron-down'}`}
                          style={{
                            color: '#22c55e',
                            fontSize: '1.2rem',
                            transition: 'transform 0.3s ease',
                            flexShrink: 0
                          }}
                        ></i>
                      </div>
                      {openIndex === index && (
                        <div
                          style={{
                            padding: '0 20px 20px 20px',
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: '1rem',
                            lineHeight: '1.7',
                            animation: 'fadeIn 0.3s ease'
                          }}
                        >
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="row mt-5">
            <div className="col-lg-10 mx-auto">
              <div className="card p-5 text-center animate-on-scroll" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}>
                <h3 className="mb-3 fw-bold" style={{ color: '#22c55e' }}>
                  Still have questions?
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem', marginBottom: '25px' }}>
                  Can't find the answer you're looking for? Please get in touch with our friendly team.
                </p>
                <Link 
                  to="/contacts" 
                  className="btn btn-lg px-5 py-3"
                  style={{
                    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '50px',
                    fontWeight: '700',
                    fontSize: '1.1rem',
                    boxShadow: '0 4px 15px rgba(34, 197, 94, 0.4)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(34, 197, 94, 0.6)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(34, 197, 94, 0.4)'
                  }}
                >
                  <i className="bi bi-envelope-fill me-2"></i>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ


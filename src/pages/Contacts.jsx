import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: '', message: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    // EmailJS configuration
    // Using environment variables for better security (fallback to hardcoded values)
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_do036ib'
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_vnv5v7h'
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '987WIncPXtXx0lfYz'

    // Template parameters
    const templateParams = {
      to_email: 'greenovafrica@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      message: formData.message,
      subject: `Contact Form Message from ${formData.name}`,
    }

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey)
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.'
      })
      
      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly at greenovafrica@gmail.com'
      })
    } finally {
      setIsSubmitting(false)
    }
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
                Contact Us
              </h1>
              <p className="lead" style={{ fontSize: '1.3rem' }}>
                Get in touch with us today
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="card p-4 h-100 animate-on-scroll" style={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}>
                <h3 className="mb-4" style={{ 
                  color: '#22c55e',
                  fontWeight: '700',
                  fontSize: '1.8rem'
                }}>
                  Why Contact Us?
                </h3>
                <p className="mb-4" style={{ 
                  color: 'rgba(255, 255, 255, 0.95)',
                  fontSize: '1rem',
                  lineHeight: '1.7'
                }}>
                  Whether you're looking to reduce your carbon footprint, implement renewable
                  energy solutions, or achieve sustainability certifications, we're here to help.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3" style={{ 
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '1rem'
                  }}>
                    <i className="bi bi-check-circle-fill me-2" style={{ color: '#22c55e', fontSize: '1.2rem' }}></i>
                    Free initial consultation
                  </li>
                  <li className="mb-3" style={{ 
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '1rem'
                  }}>
                    <i className="bi bi-check-circle-fill me-2" style={{ color: '#22c55e', fontSize: '1.2rem' }}></i>
                    Customized solutions for your needs
                  </li>
                  <li className="mb-3" style={{ 
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '1rem'
                  }}>
                    <i className="bi bi-check-circle-fill me-2" style={{ color: '#22c55e', fontSize: '1.2rem' }}></i>
                    Expert guidance and support
                  </li>
                  <li style={{ 
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '1rem'
                  }}>
                    <i className="bi bi-check-circle-fill me-2" style={{ color: '#22c55e', fontSize: '1.2rem' }}></i>
                    Proven track record of success
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4 animate-on-scroll" style={{ 
                color: '#22c55e',
                fontWeight: '700',
                fontSize: '2rem'
              }}>
                Get in Touch
              </h2>
              <p className="mb-4 animate-on-scroll animate-on-scroll-delay-1" style={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1.1rem',
                lineHeight: '1.6'
              }}>
                Have a question or want to learn more about our services? We'd love to hear
                from you.
              </p>

              <div className="mb-4 animate-on-scroll animate-on-scroll-delay-1">
                <h5 className="mb-2" style={{ 
                  color: 'rgba(34, 197, 94, 0.9)',
                  fontWeight: '600',
                  fontSize: '1.1rem'
                }}>
                  <i className="bi bi-envelope-fill me-2" style={{ color: '#22c55e' }}></i>
                  Email
                </h5>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '1rem',
                  marginLeft: '28px'
                }}>greenovafrica@gmail.com</p>
              </div>

              <div className="mb-4 animate-on-scroll animate-on-scroll-delay-2">
                <h5 className="mb-2" style={{ 
                  color: 'rgba(34, 197, 94, 0.9)',
                  fontWeight: '600',
                  fontSize: '1.1rem'
                }}>
                  <i className="bi bi-telephone-fill me-2" style={{ color: '#22c55e' }}></i>
                  Phone
                </h5>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '1rem',
                  marginLeft: '28px',
                  marginBottom: '4px'
                }}>0789366522</p>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '1rem',
                  marginLeft: '28px'
                }}>0786367490</p>
              </div>

              <div className="animate-on-scroll animate-on-scroll-delay-2">
                <h5 className="mb-2" style={{ 
                  color: 'rgba(34, 197, 94, 0.9)',
                  fontWeight: '600',
                  fontSize: '1.1rem'
                }}>
                  <i className="bi bi-clock-fill me-2" style={{ color: '#22c55e' }}></i>
                  Business Hours
                </h5>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '1rem',
                  marginLeft: '28px'
                }}>
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="row mt-5">
            <div className="col-lg-8 mx-auto">
              <div className="card p-4 p-md-5 animate-on-scroll" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}>
                <h3 className="mb-4 text-center" style={{ 
                  color: '#22c55e',
                  fontWeight: '700',
                  fontSize: '2rem'
                }}>
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label" style={{ 
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: '500',
                        marginBottom: '8px'
                      }}>
                        Name *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(34, 197, 94, 0.3)',
                          color: '#ffffff',
                          borderRadius: '10px',
                          padding: '12px 16px',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#22c55e'
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(34, 197, 94, 0.2)'
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.3)'
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label" style={{ 
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: '500',
                        marginBottom: '8px'
                      }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(34, 197, 94, 0.3)',
                          color: '#ffffff',
                          borderRadius: '10px',
                          padding: '12px 16px',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#22c55e'
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(34, 197, 94, 0.2)'
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.3)'
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label" style={{ 
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: '500',
                        marginBottom: '8px'
                      }}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+250 788 123 456"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(34, 197, 94, 0.3)',
                          color: '#ffffff',
                          borderRadius: '10px',
                          padding: '12px 16px',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#22c55e'
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(34, 197, 94, 0.2)'
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.3)'
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label" style={{ 
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: '500',
                        marginBottom: '8px'
                      }}>
                        Message *
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(34, 197, 94, 0.3)',
                          color: '#ffffff',
                          borderRadius: '10px',
                          padding: '12px 16px',
                          transition: 'all 0.3s ease',
                          resize: 'vertical'
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#22c55e'
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(34, 197, 94, 0.2)'
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.3)'
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      ></textarea>
                    </div>
                    {submitStatus.type && (
                      <div className="col-12 mb-3">
                        <div 
                          className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'}`}
                          style={{
                            backgroundColor: submitStatus.type === 'success' 
                              ? 'rgba(34, 197, 94, 0.2)' 
                              : 'rgba(239, 68, 68, 0.2)',
                            border: `1px solid ${submitStatus.type === 'success' ? '#22c55e' : '#ef4444'}`,
                            color: submitStatus.type === 'success' ? '#22c55e' : '#ef4444',
                            borderRadius: '10px',
                            padding: '12px 16px',
                            fontSize: '0.95rem'
                          }}
                        >
                          <i className={`bi ${submitStatus.type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill'} me-2`}></i>
                          {submitStatus.message}
                        </div>
                      </div>
                    )}
                    <div className="col-12 text-center">
                      <button 
                        type="submit" 
                        className="btn btn-lg px-5 py-3"
                        disabled={isSubmitting}
                        style={{
                          background: isSubmitting 
                            ? 'rgba(34, 197, 94, 0.6)' 
                            : 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '50px',
                          fontWeight: '700',
                          fontSize: '1.1rem',
                          boxShadow: '0 4px 15px rgba(34, 197, 94, 0.4)',
                          transition: 'all 0.3s ease',
                          cursor: isSubmitting ? 'not-allowed' : 'pointer',
                          opacity: isSubmitting ? 0.7 : 1
                        }}
                        onMouseEnter={(e) => {
                          if (!isSubmitting) {
                            e.currentTarget.style.transform = 'translateY(-2px)'
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(34, 197, 94, 0.6)'
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSubmitting) {
                            e.currentTarget.style.transform = 'translateY(0)'
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(34, 197, 94, 0.4)'
                          }
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send-fill me-2"></i>
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacts


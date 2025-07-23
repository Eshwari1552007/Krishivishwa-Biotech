"use client"

import { useState } from "react"
import "./Consultancy.css"
import useAOS from "../utils/useAos"  // Ensure this path matches your actual folder

const ConsultancyPage = () => {
  useAOS()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    farmSize: "",
    cropType: "",
    consultationType: "phone",
    preferredDate: "",
    preferredTime: "",
    location: "",
    message: "",
    experience: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        farmSize: "",
        cropType: "",
        consultationType: "phone",
        preferredDate: "",
        preferredTime: "",
        location: "",
        message: "",
        experience: "",
      })
    }, 3000)
  }

  return (
    <div className="consultancy-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="floating-elements">
          <div className="floating-leaf floating-leaf-1">🌱</div>
          <div className="floating-leaf floating-leaf-2">🌾</div>
          <div className="floating-leaf floating-leaf-3">🍃</div>
          <div className="floating-leaf floating-leaf-4">🌿</div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-line-1">Expert Agricultural</span>
              <span className="title-line-2">Consultancy Services</span>
            </h1>
            <p className="hero-description">
              Transform your farming with personalized guidance from certified agricultural experts. Choose between
              comprehensive field visits or convenient phone consultations.
            </p>
            <div className="hero-features">
              <div className="feature-badge">
                <span className="feature-icon">✅</span>
                <span>Certified Experts</span>
              </div>
              <div className="feature-badge">
                <span className="feature-icon">✅</span>
                <span>Personalized Solutions</span>
              </div>
              <div className="feature-badge">
                <span className="feature-icon">✅</span>
                <span>Proven Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Choose Your Consultation Type</h2>
          <div className="services-grid">
            {/* Field Visit Card */}
            <div className="service-card field-visit-card">
              <div className="card-header">
                <div className="service-icon">
                  <span className="icon-symbol">🚜</span>
                </div>
                <h3 className="service-title">Field Visit Consultation</h3>
                <p className="service-subtitle">On-site expert analysis with comprehensive recommendations</p>
              </div>

              <div className="service-image">
                <img
                  src="/placeholder.svg?height=200&width=400&text=Field+Expert+Consultation"
                  alt="Field consultation"
                />
                <div className="image-overlay">
                  <span className="overlay-text">Expert Analysis</span>
                </div>
              </div>

              <ul className="service-features">
                <li className="feature-item">
                  <span className="check-icon">✓</span>
                  <span>Comprehensive soil testing & analysis</span>
                </li>
                <li className="feature-item">
                  <span className="check-icon">✓</span>
                  <span>Detailed crop health assessment</span>
                </li>
                <li className="feature-item">
                  <span className="check-icon">✓</span>
                  <span>Pest & disease identification</span>
                </li>
                <li className="feature-item">
                  <span className="check-icon">✓</span>
                  <span>Customized treatment plan</span>
                </li>
              </ul>

              <div className="pricing-section">
                <div className="price">₹2,500</div>
                <p className="price-note">Per visit (up to 5 acres)</p>
              </div>
            </div>

            {/* Phone Consultation Card */}
            <div className="service-card phone-consultation-card">
              <div className="card-header">
                <div className="service-icon">
                  <span className="icon-symbol">📞</span>
                </div>
                <h3 className="service-title">Phone Consultation</h3>
                <p className="service-subtitle">Expert advice and recommendations over the phone</p>
              </div>

              <div className="service-image">
                <img
                  src="/placeholder.svg?height=200&width=400&text=Phone+Consultation+Expert"
                  alt="Phone consultation"
                />
                <div className="image-overlay">
                  <span className="overlay-text">Remote Support</span>
                </div>
              </div>

              <ul className="service-features">
                <li className="feature-item">
                  <span className="check-icon">✓</span>
                  <span>Strategic crop planning guidance</span>
                </li>
                <li className="feature-item">
                  <span className="check-icon">✓</span>
                  <span>Fertilizer recommendations</span>
                </li>
                <li className="feature-item">
                  <span className="check-icon">✓</span>
                  <span>Problem diagnosis & solutions</span>
                </li>
                <li className="feature-item">
                  <span className="check-icon">✓</span>
                  <span>Follow-up support included</span>
                </li>
              </ul>

              <div className="pricing-section">
                <div className="price">₹500</div>
                <p className="price-note">Per 30-minute session</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="booking-section">
        <div className="container">
          <h2 className="section-title">Book Your Consultation</h2>

          {isSubmitted ? (
            <div className="success-message">
              <div className="success-icon">🎉</div>
              <h3>Booking Confirmed!</h3>
              <p>Thank you for choosing Krushivishwa. Our agricultural expert will contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">
                    <span className="label-icon">👤</span>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <span className="label-icon">📧</span>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <span className="label-icon">📱</span>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <span className="label-icon">📏</span>
                    Farm Size (in acres)
                  </label>
                  <input
                    type="number"
                    name="farmSize"
                    value={formData.farmSize}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter farm size"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <span className="label-icon">🌾</span>
                    Primary Crop Type
                  </label>
                  <select name="cropType" value={formData.cropType} onChange={handleInputChange} className="form-input">
                    <option value="">Select crop type</option>
                    <option value="rice">Rice</option>
                    <option value="wheat">Wheat</option>
                    <option value="cotton">Cotton</option>
                    <option value="sugarcane">Sugarcane</option>
                    <option value="vegetables">Vegetables</option>
                    <option value="fruits">Fruits</option>
                    <option value="pulses">Pulses</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Consultation Type *</label>
                  <select
                    name="consultationType"
                    value={formData.consultationType}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  >
                    <option value="phone">📞 Phone Consultation (₹500)</option>
                    <option value="field">🚜 Field Visit (₹2,500)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <span className="label-icon">📅</span>
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <span className="label-icon">⏰</span>
                    Preferred Time *
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  >
                    <option value="">Select time</option>
                    <option value="morning">🌅 Morning (9:00 AM - 12:00 PM)</option>
                    <option value="afternoon">☀️ Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="evening">🌆 Evening (4:00 PM - 7:00 PM)</option>
                  </select>
                </div>

                {formData.consultationType === "field" && (
                  <div className="form-group full-width">
                    <label className="form-label">
                      <span className="label-icon">📍</span>
                      Farm Location/Address *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required={formData.consultationType === "field"}
                      className="form-input"
                      placeholder="Enter complete address with landmarks"
                    />
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label">
                    <span className="label-icon">⭐</span>
                    Farming Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="form-input"
                  >
                    <option value="">Select experience</option>
                    <option value="beginner">🌱 Beginner (0-2 years)</option>
                    <option value="intermediate">🌿 Intermediate (3-10 years)</option>
                    <option value="experienced">🌳 Experienced (10+ years)</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label className="form-label">
                    <span className="label-icon">💬</span>
                    Specific Issues/Questions
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="form-input form-textarea"
                    placeholder="Describe your specific farming challenges, pest issues, soil problems, or any questions you have..."
                  />
                </div>
              </div>

              <div className="form-submit">
                <button type="submit" className="submit-button">
                  <span className="button-text">🚀 Book Consultation Now</span>
                  <div className="button-ripple"></div>
                </button>
                <p className="submit-note">⭐ Our expert will contact you within 24 hours to confirm the booking</p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Choose Krushivishwa Consultancy?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-large">
                <span className="feature-emoji">👥</span>
              </div>
              <h3 className="feature-title">Expert Team</h3>
              <p className="feature-description">
                Certified agricultural experts with 10+ years of field experience and proven track record
              </p>
              <div className="feature-image">
                <img src="/placeholder.svg?height=150&width=300&text=Expert+Agricultural+Team" alt="Expert team" />
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon-large">
                <span className="feature-emoji">⭐</span>
              </div>
              <h3 className="feature-title">Proven Results</h3>
              <p className="feature-description">
                Helped 5000+ farmers increase their crop yield by 30-50% with sustainable practices
              </p>
              <div className="feature-image">
                <img src="/placeholder.svg?height=150&width=300&text=Successful+Crop+Results" alt="Proven results" />
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon-large">
                <span className="feature-emoji">🤝</span>
              </div>
              <h3 className="feature-title">Comprehensive Support</h3>
              <p className="feature-description">
                End-to-end guidance from planning to harvest with continuous follow-up support
              </p>
              <div className="feature-image">
                <img
                  src="/placeholder.svg?height=150&width=300&text=Comprehensive+Farm+Support"
                  alt="Comprehensive support"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">Need Immediate Assistance?</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3 className="contact-title">Call Us</h3>
              <p className="contact-info">+91 98765 43210</p>
              <p className="contact-hours">Mon-Sat: 9 AM - 7 PM</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3 className="contact-title">Email Us</h3>
              <p className="contact-info">consultancy@krushivishwa.com</p>
              <p className="contact-hours">24/7 Support</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3 className="contact-title">Visit Us</h3>
              <p className="contact-info">Agricultural Complex, Sector 15</p>
              <p className="contact-hours">Pune, Maharashtra</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  )
}

export default ConsultancyPage

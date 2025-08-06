"use client"

import { useState } from "react"
import "./Consultancy_Booking.css"

const Consultancy_Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    farmSize: "",
    cropType: "",
    location: "",
    consultationType: "",
    description: "",
  })

  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [showNotice, setShowNotice] = useState(false)

  const validate = () => {
    const newErrors = {}
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) newErrors[key] = "This field is required"
    })
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setErrors({ ...errors, [name]: "" })
  }

  const handleRadioChange = (value) => {
    setFormData({ ...formData, consultationType: value })
    setErrors({ ...errors, consultationType: "" })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      setSubmitting(true)
      setTimeout(() => {
        setSubmitting(false)
        setShowNotice(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          farmSize: "",
          cropType: "",
          location: "",
          consultationType: "",
          description: "",
        })
      }, 2000)
    }
  }

  return (
    <section className="krishivishwa-consultancy-container consultation-section">
      {/* Background Pattern */}
      <div className="krishivishwa-consultancy-container background-pattern"></div>

      {/* Decorative Elements */}
      <div className="krishivishwa-consultancy-container decorative-element decorative-left"></div>
      <div className="krishivishwa-consultancy-container decorative-element decorative-right"></div>

      <div className="krishivishwa-consultancy-container container">
        <div className="krishivishwa-consultancy-container header-section">
          <h2 className="krishivishwa-consultancy-container main-title">Book Your Consultation</h2>
          <p className="krishivishwa-consultancy-container subtitle">
            Get expert agricultural guidance tailored to your farming needs
          </p>
        </div>

        <div className="krishivishwa-consultancy-container form-card">
          <div className="krishivishwa-consultancy-container card-header">
            <h3 className="krishivishwa-consultancy-container card-title">Consultation Request Form</h3>
            <p className="krishivishwa-consultancy-container card-description">
              Fill in your details and we'll connect you with our agricultural experts
            </p>
          </div>

          <div className="krishivishwa-consultancy-container card-content">
            <form onSubmit={handleSubmit} className="krishivishwa-consultancy-container consultation-form">
              {/* Personal Information */}
              <div className="krishivishwa-consultancy-container form-row">
                <div className="krishivishwa-consultancy-container form-group">
                  <label htmlFor="name" className="krishivishwa-consultancy-container form-label">
                    Full Name *
                  </label>
                  <div className="krishivishwa-consultancy-container input-wrapper">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="krishivishwa-consultancy-container form-input name-input"
                    />
                  </div>
                  {errors.name && <span className="krishivishwa-consultancy-container error-text">{errors.name}</span>}
                </div>

                <div className="krishivishwa-consultancy-container form-group">
                  <label htmlFor="email" className="krishivishwa-consultancy-container form-label">
                    Email Address *
                  </label>
                  <div className="krishivishwa-consultancy-container input-wrapper">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      className="krishivishwa-consultancy-container form-input email-input"
                    />
                  </div>
                  {errors.email && (
                    <span className="krishivishwa-consultancy-container error-text">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="krishivishwa-consultancy-container form-row">
                <div className="krishivishwa-consultancy-container form-group">
                  <label htmlFor="phone" className="krishivishwa-consultancy-container form-label">
                    Phone Number *
                  </label>
                  <div className="krishivishwa-consultancy-container input-wrapper">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="krishivishwa-consultancy-container form-input phone-input"
                    />
                  </div>
                  {errors.phone && (
                    <span className="krishivishwa-consultancy-container error-text">{errors.phone}</span>
                  )}
                </div>

                <div className="krishivishwa-consultancy-container form-group">
                  <label htmlFor="location" className="krishivishwa-consultancy-container form-label">
                    Location *
                  </label>
                  <div className="krishivishwa-consultancy-container input-wrapper">
                    <input
                      id="location"
                      name="location"
                      type="text"
                      placeholder="Enter your location"
                      value={formData.location}
                      onChange={handleChange}
                      className="krishivishwa-consultancy-container form-input location-input"
                    />
                  </div>
                  {errors.location && (
                    <span className="krishivishwa-consultancy-container error-text">{errors.location}</span>
                  )}
                </div>
              </div>

              {/* Farm Information */}
              <div className="krishivishwa-consultancy-container form-row">
                <div className="krishivishwa-consultancy-container form-group">
                  <label htmlFor="farmSize" className="krishivishwa-consultancy-container form-label">
                    Farm Size *
                  </label>
                  <div className="krishivishwa-consultancy-container input-wrapper">
                    <input
                      id="farmSize"
                      name="farmSize"
                      type="text"
                      placeholder="e.g., 2 acres"
                      value={formData.farmSize}
                      onChange={handleChange}
                      className="krishivishwa-consultancy-container form-input farm-size-input"
                    />
                  </div>
                  {errors.farmSize && (
                    <span className="krishivishwa-consultancy-container error-text">{errors.farmSize}</span>
                  )}
                </div>

                <div className="krishivishwa-consultancy-container form-group">
                  <label htmlFor="cropType" className="krishivishwa-consultancy-container form-label">
                    Crop / Food Type *
                  </label>
                  <div className="krishivishwa-consultancy-container input-wrapper">
                    <input
                      id="cropType"
                      name="cropType"
                      type="text"
                      placeholder="Enter crop or food type"
                      value={formData.cropType}
                      onChange={handleChange}
                      className="krishivishwa-consultancy-container form-input crop-type-input"
                    />
                  </div>
                  {errors.cropType && (
                    <span className="krishivishwa-consultancy-container error-text">{errors.cropType}</span>
                  )}
                </div>
              </div>

              {/* Consultation Type */}
              <div className="krishivishwa-consultancy-container form-group">
                <label className="krishivishwa-consultancy-container form-label">Consultation Type *</label>
                <div className="krishivishwa-consultancy-container radio-group">
                  <div
                    className="krishivishwa-consultancy-container radio-option phone-option"
                    onClick={() => handleRadioChange("Phone Call")}
                  >
                    <input
                      type="radio"
                      id="phone-call"
                      name="consultationType"
                      value="Phone Call"
                      checked={formData.consultationType === "Phone Call"}
                      onChange={handleChange}
                      className="krishivishwa-consultancy-container radio-input"
                    />
                    <label htmlFor="phone-call" className="krishivishwa-consultancy-container radio-label">
                      <span className="krishivishwa-consultancy-container radio-icon">📞</span>
                      <span className="krishivishwa-consultancy-container radio-text">
                        Phone Call
                        <br />
                        <span className="krishivishwa-consultancy-container radio-subtext">
                          (Within 7 Days after Login)
                        </span>
                      </span>
                    </label>
                  </div>
                  <div
                    className="krishivishwa-consultancy-container radio-option field-option"
                    onClick={() => handleRadioChange("Field Visit")}
                  >
                    <input
                      type="radio"
                      id="field-visit"
                      name="consultationType"
                      value="Field Visit"
                      checked={formData.consultationType === "Field Visit"}
                      onChange={handleChange}
                      className="krishivishwa-consultancy-container radio-input"
                    />
                    <label htmlFor="field-visit" className="krishivishwa-consultancy-container radio-label">
                      <span className="krishivishwa-consultancy-container radio-icon">📍</span>
                      <span className="krishivishwa-consultancy-container radio-text">Field Visit</span>
                    </label>
                  </div>
                </div>
                {errors.consultationType && (
                  <span className="krishivishwa-consultancy-container error-text">{errors.consultationType}</span>
                )}
              </div>

              {/* Description */}
              <div className="krishivishwa-consultancy-container form-group">
                <label htmlFor="description" className="krishivishwa-consultancy-container form-label">
                  Description *
                </label>
                <div className="krishivishwa-consultancy-container input-wrapper">
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Describe your specific farming challenges, pest issues, soil problems, or any questions you have..."
                    rows="5"
                    value={formData.description}
                    onChange={handleChange}
                    className="krishivishwa-consultancy-container form-textarea description-input"
                  />
                </div>
                {errors.description && (
                  <span className="krishivishwa-consultancy-container error-text">{errors.description}</span>
                )}
              </div>

              {/* Submit Button */}
              <div className="krishivishwa-consultancy-container submit-section">
                <button
                  type="submit"
                  disabled={submitting}
                  className="krishivishwa-consultancy-container submit-button"
                >
                  {submitting ? (
                    <>
                      <span className="krishivishwa-consultancy-container loader"></span>
                      Processing Your Request...
                    </>
                  ) : (
                    "Book Consultation Now"
                  )}
                </button>
              </div>

              {/* Success Notice */}
              {showNotice && (
                <div className="krishivishwa-consultancy-container success-notice">
                  🎉 Consultation booked successfully! Our team will contact you within 2–3 days via WhatsApp or phone
                  call to schedule your appointment.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Consultancy_Booking;

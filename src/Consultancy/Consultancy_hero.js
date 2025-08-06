import React from 'react'
import './Consultancy_hero.css'
import { FaUserTie, FaTools, FaChartLine } from "react-icons/fa";
const Consultancy_hero = () => {
  return (
    <div>
        {/* Hero Section */}
            <section className="hero-section">
              <div className="hero-background"></div>
              <div className="overlay"></div>
              <div className="container">
                <div className="hero-wrapper">
                  <div className="hero-content">
                    <h1 className="hero-title">
                      <span className="title-line-1">Expert Agricultural</span>
                      <span className="title-line-2">Consultancy</span>
                    </h1>
                    <p className="hero-description">
                      Transform your farming with personalized guidance from certified agricultural experts.
                    </p>
                    <div className="hero-features">
                      <div className="feature-badge">
                        <span className="feature-icon"><FaUserTie /></span>
                        <span>Certified Experts</span>
                      </div>
                      <div className="feature-badge">
                        <span className="feature-icon"><FaTools /></span>
                        <span>Personalized Solutions</span>
                      </div>
                      <div className="feature-badge">
                        <span className="feature-icon"><FaChartLine /></span>
                        <span>Proven Results</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    </div>
  )
}

export default Consultancy_hero

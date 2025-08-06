"use client";
import { useEffect, useState, useRef } from "react";
import "./Consultancy_Us.css";

const Consultancy_Us = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [countVisible, setCountVisible] = useState(false);
  const statsRef = useRef(null);

  const features = [
    {
      id: 0,
      icon: "👥",
      title: "Expert Team",
      description:
        "Certified agricultural experts with 10+ years of field experience and proven track record in sustainable farming practices.",
      stats: "50+ Certified Experts",
      image: "/icons/expert.svg",
    },
    {
      id: 1,
      icon: "⭐",
      title: "Proven Results",
      description:
        "Helped 5000+ farmers increase yield by 30–50% using sustainable and tech-supported farming.",
      stats: "5000+ Success Stories",
      image: "/icons/proven.svg",
    },
    {
      id: 2,
      icon: "🤝",
      title: "Comprehensive Support",
      description:
        "From soil health to post-harvest guidance — we offer full-circle consultancy support.",
      stats: "24/7 Support Access",
      image: "/icons/support.svg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Count-up animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCountVisible(true);
      },
      { threshold: 0.6 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const useCountUp = (max, visible, duration = 3000) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (!visible) return;
      let start = 0;
      const step = Math.ceil(max / (duration / 30));
      const interval = setInterval(() => {
        start += step;
        if (start >= max) {
          setCount(max);
          clearInterval(interval);
        } else {
          setCount(start);
        }
      }, 30);
      return () => clearInterval(interval);
    }, [visible, max]);
    return count;
  };

  const countFarmers = useCountUp(5000, countVisible);
  const countYield = useCountUp(50, countVisible);
  const countYears = useCountUp(10, countVisible);


  return (
    <section className="consultancy-us">
      <div className="section-container">
        {/* Header */}
        <div className="section-header" data-aos="fade-up">
          <div className="header-badge animate-bounce-in">
            <span className="badge-icon">✨</span>
            <span className="badge-text">Why Choose Us</span>
          </div>
          <h2 className="section-title">
            Why Choose Krishivishwa?
          </h2>
          <p className="section-subtitle">
            Professional agricultural consulting with proven expertise and results
          </p>
        </div>

        {/* Main */}
        <div className="main-content">
          {/* Orbit Section */}
          <div className="hub-side">
            <div className="orbital-container">
              <div className="central-hub">
                <div className="halo-glow"></div>
                <div className="hub-circle">
                  <span className="hub-icon">🌱</span>
                </div>
              </div>

              {features.map((feature, index) => {
                const angle = (360 / features.length) * index - 90;
                const isActive = activeFeature === index;
                const theme =
                  index === 0
                    ? "theme-yellow"
                    : index === 1
                      ? "theme-blue"
                      : "theme-orange";

                return (
                  <>
                    <div
                      key={feature.id}
                      className={`orbit-element ${theme} ${isActive ? "active glow-pulse" : ""}`}
                      style={{ "--orbit-angle": `${angle}deg` }}
                      onClick={() => setActiveFeature(index)}
                    >
                      <div className="orbit-button">
                        <span className="orbit-icon">{feature.icon}</span>
                      </div>
                      <div className="orbit-label">{feature.title.split(" ")[0]}</div>
                    </div>

                    <div
                      className="orbit-connector"
                      style={{ "--orbit-angle": `${angle}deg` }}
                    ></div>
                  </>
                );
              })}
              <div className="orbit-ring"></div>
            </div>
          </div>

          {/* Feature Card */}
          <div className="content-side">
            <div className="carousel-wrapper">
              {features.map((feature, index) => {
                const position =
                  index === activeFeature
                    ? "active"
                    : index === (activeFeature + 1) % features.length
                      ? "next"
                      : index === (activeFeature - 1 + features.length) % features.length
                        ? "prev"
                        : "hidden";

                return (
                  <div
                    key={feature.id}
                    className={`content-card ${position} ${index === 0
                      ? "theme-yellow"
                      : index === 1
                        ? "theme-blue"
                        : "theme-orange"
                      }`}
                  >
                    <div className="feature-header">
                      <div className="feature-icon-container">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="feature-image"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/60";
                          }}
                        />
                      </div>
                      <div className="feature-meta">
                        <h3 className="feature-title">{feature.title}</h3>
                        <div className="feature-stats">
                          <span className="stats-check">✓</span>
                          <span className="stats-text">{feature.stats}</span>
                        </div>
                      </div>
                    </div>
                    <p className="feature-description">{feature.description}</p>
                    <div className="progress-dots">
                      {features.map((_, i) => (
                        <button
                          key={i}
                          className={`progress-dot ${activeFeature === i ? "active" : ""}`}
                          onClick={() => setActiveFeature(i)}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>


        </div>

        {/* Stats Section */}
        <div className="bottom-stats" ref={statsRef}>
          <div className="stat-group">
            <div className="stat-number">{countFarmers}+</div>
            <div className="stat-label">Farmers Helped</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-group">
            <div className="stat-number">{countYield}%</div>
            <div className="stat-label">Avg. Yield Increase</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-group">
            <div className="stat-number">{countYears}+</div>
            <div className="stat-label">Years of Experience</div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Consultancy_Us;

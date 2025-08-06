import { useState, useEffect } from "react"
import './Consultancy_Service.css'
import { FaInfoCircle, FaCalendarAlt, FaEdit, FaPhoneAlt, FaTimes } from "react-icons/fa";
import Field from '../Assets/Images/Field-Consultancy.jpg';
import Call from '../Assets/Images/Call-Consultancy.jpg';

const Consultancy_Service = () => {
  const cardsData = [
    {
      id: 1,
      title: "Free Consultation Offer",
      desc: "Enjoy a complimentary expert call within 7 days of login.",
      img: Call,
      icon: "🎁",
      price: "Free",
      theme: "yellow", // 🟡
      features: [
        "✓ 1-on-1 expert phone call",
        "✓ Ask about crop, soil, or pest issues",
        "✓ Customized recommendations",
        "✓ Valid within 7 days",
      ],
    },
    {
      id: 2,
      title: "Phone Consultation",
      desc: "Expert advice and recommendations over the phone.",
      img: Call,
      icon: "📞",
      price: "₹500",
      theme: "blue", // 🔵
      features: [
        "✓ Strategic crop planning",
        "✓ Fertilizer suggestions",
        "✓ Problem diagnosis",
        "✓ Follow-up included",
      ],
    },
    {
      id: 3,
      title: "Field Visit Consultation",
      desc: "On-site expert analysis with comprehensive report.",
      img: Field,
      icon: "🚜",
      price: "₹2,500",
      theme: "orange", // 🟠
      features: [
        "✓ Soil testing & analysis",
        "✓ Crop health assessment",
        "✓ Pest & disease detection",
        "✓ Treatment recommendations",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cardsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
  };

  useEffect(() => {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
      });
    });
  }, []);

  const [showModal, setShowModal] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
  if (isMobile) {
    setActiveIndex(0); // reset to first card on mobile
  }
}, [isMobile]);


  return (
    <div>
      {/* Service Section */}

      <section className="services-section">
        <div className="services-container">

          {/* Left Intro Section */}
          <div className="services-intro">
            <h2 className="section-title">Choose Your Consultation Type</h2>
            <p className="section-subtitle">
              Select from our professional consultancy services tailored to meet your specific farming needs.
            </p>
            <button className="btn-more instruction-btn" onClick={() => setShowModal(true)}>
              <FaInfoCircle className="btn-icon" /> Instructions
            </button>


          </div>

          <div className={`consultancy-page-cards-wrapper ${isMobile ? 'mobile-mode' : ''}`}>

            <div className="carousel-controls">

            </div>
            {isMobile && (
              <div className="carousel-controls">
                <button onClick={handlePrev}>&lt;</button>
                <button onClick={handleNext}>&gt;</button>
              </div>
            )}

            {cardsData.map((card, index) => {
              let position = "next";
              if (index === activeIndex) {
                position = "active";
              } else if (index === (activeIndex - 1 + cardsData.length) % cardsData.length) {
                position = "prev";
              }

              // ❗ KEY FIX: Only render relevant cards on mobile
              const shouldRenderCard = !isMobile || position === "active" || position === "prev" || position === "next";

              return shouldRenderCard ? (
                <div
                  key={card.id}
                  className={`consultancy-page-custom-card ${position} theme-${card.theme} ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="card-inner">
                    <div className="card-icon">{card.icon}</div>
                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-desc">{card.desc}</p>
                    <img src={card.img} alt={card.title} className="card-img" />
                    <ul className="card-features">
                      {card.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <div className="card-price">{card.price}</div>
                  </div>
                </div>
              ) : null;
            })}

          </div>
        </div>
      </section>


      {showModal && (
        <div className="popup-overlay" onClick={() => setShowModal(false)}>
          <div className="popup-modal" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h3><FaInfoCircle className="info-icon" /> Consultation Instructions</h3>
              <FaTimes className="close-icon" onClick={() => setShowModal(false)} />
            </div>
            <ul className="popup-points">
              <li>
                <FaInfoCircle className="list-icon" />
                Select your suitable consultation plan.
              </li>
              <hr className="popup-separator" />
              <li>
                <FaEdit className="list-icon" />
                Fill the form according to the currently selected consultation card.
              </li>
              <hr className="popup-separator" />
              <li>
                <FaCalendarAlt className="list-icon" />
                After booking, our team will contact you within 2–3 days to schedule your appointment.
              </li>
              <hr className="popup-separator" />
              <li>
                <FaPhoneAlt className="list-icon" />
                Ensure the number you provide is active and has WhatsApp access.
              </li>
              <hr className="popup-separator" />
              <li>
                <FaEdit className="list-icon" />
                Fill the form carefully with accurate and up-to-date information.
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default Consultancy_Service

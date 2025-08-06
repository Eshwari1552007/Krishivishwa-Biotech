import React from 'react';
import './Consultancy_Contact.css';
import PhoneIcon from '../Assets/Phone.png';
import EmailIcon from '../Assets/Email.png';
import LocationIcon from '../Assets/Map.png';

const Consultancy_Contact = () => {
  return (
    <section className="consultancy-page contact-section" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">Need Immediate Assistance?</h2>
        <div className="contact-enhanced-grid">
          <div className="contact-enhanced-item" data-aos="zoom-in" data-aos-delay="100">
            <a href="tel:+919876543210" className="icon-link" target="_blank" rel="noopener noreferrer">
              <img src={PhoneIcon} alt="Call Icon" className="icon-3d-img" />
            </a>
            <h3>Call Us</h3>
            <p><a href="tel:+919876543210">+91 98765 43210</a></p>
            <span>Mon-Sat: 9 AM - 7 PM</span>
          </div>

          <div className="contact-enhanced-item" data-aos="zoom-in" data-aos-delay="200">
            <a href="mailto:krishivishwabiotech@gmail.com" className="icon-link" target="_blank" rel="noopener noreferrer">
              <img src={EmailIcon} alt="Email Icon" className="icon-3d-img" />
            </a>
            <h3>Email Us</h3>
            <p><a href="mailto:krishivishwabiotech@gmail.com">krishivishwabiotech@gmail.com</a></p>
            <span>24/7 Support</span>
          </div>

          <div className="contact-enhanced-item" data-aos="zoom-in" data-aos-delay="300">
            <a
              href="https://www.google.com/maps/place/Gat+No.+227,+At.+Virgaon,+Tal.+Akole,+Dist.+Ahmednagar+(MH),+422605"
              className="icon-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LocationIcon} alt="Location Icon" className="icon-3d-img Map" />
            </a>
            <h3>Visit Us</h3>
            <p>
              <a
                href="https://www.google.com/maps/place/Gat+No.+227,+At.+Virgaon,+Tal.+Akole,+Dist.+Ahmednagar+(MH),+422605"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gat No. 227, At. Virgaon,<br />Tal. Akole, Dist. Ahmednagar (MH), 422605
              </a>
            </p>
            <span>Google Maps</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultancy_Contact;

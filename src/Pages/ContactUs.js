import React, { useEffect, useRef, useState } from 'react';
import './ContactUs.css';

export default function ContactUs() {
    const headingRef = useRef(null);
    const infoRefs = useRef([]);
    const formSectionRef = useRef(null);
    const companyInfoRef = useRef(null);
    const contactFormRef = useRef(null);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const dialogueRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (dialogueRef.current) {
            observer.observe(dialogueRef.current);
        }

        return () => {
            if (dialogueRef.current) {
                observer.unobserve(dialogueRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (headingRef.current) observer.observe(headingRef.current);
        infoRefs.current.forEach((ref) => ref && observer.observe(ref));
        if (formSectionRef.current) observer.observe(formSectionRef.current);
        if (companyInfoRef.current) observer.observe(companyInfoRef.current);
        if (contactFormRef.current) observer.observe(contactFormRef.current);

        return () => observer.disconnect();
    }, []);

    const validateForm = () => {
        let tempErrors = {};
        let valid = true;

        if (!formData.name.trim()) {
            tempErrors.name = "Name is required";
            valid = false;
        }
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            tempErrors.email = "Enter a valid email";
            valid = false;
        }
        if (!formData.phone.match(/^\d{10}$/)) {
            tempErrors.phone = "Phone must be 10 digits";
            valid = false;
        }
        if (!formData.message.trim()) {
            tempErrors.message = "Message is required";
            valid = false;
        }

        setErrors(tempErrors);
        setIsFormValid(valid);
        return valid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSent(true);
                setFormData({ name: '', email: '', phone: '', message: '' });
                setErrors({});
            }, 1500);
        }
    };

    return (
        <div className="main-contact-page">
            {/* Header Section */}
            <div className="contact-header-section">
                <div className="overlay"></div>
                <h1 ref={headingRef} className="contact-title">Contact Us</h1>
            </div>

            {/* Contact Info Cards */}
            <div className="main-contact-info">
                <div ref={(el) => (infoRefs.current[0] = el)} className="info-card fade-left">
                    <div className="contact-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z" />
                        </svg>
                    </div>
                    <h3>Mob.: 9960492426 <br /> Ph.: 02424-261100</h3>
                    <p> Call us for queries, support, or product details</p>
                </div>
                <div ref={(el) => (infoRefs.current[1] = el)} className="info-card fade-center">
                    <div className="contact-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16">
                            <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765zM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516M0 13.373l5.693-3.163L0 6.873z" />
                        </svg>
                    </div>
                    <h3 >krishivishwabiotech@gmail.com</h3>
                    <p> Write to us for partnerships, services, and feedback</p>
                </div>
                <div ref={(el) => (infoRefs.current[2] = el)} className="info-card fade-right">
                    <div className="contact-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16">
                            <path d="M8 0a5 5 0 0 0-5 5c0 4.5 5 11 5 11s5-6.5 5-11a5 5 0 0 0-5-5zm0 7.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                        </svg>
                    </div>
                    <h3>Akole , Ahmednagar</h3>
                    <p>Gat. No.: 227 At. Virgaon, Tal. Akole, Dist. Ahmednagar (MH). Pin. 422605.</p>
                </div>
            </div>

            {/* Dialogue Section */}
            <div ref={dialogueRef} className={`Get-connect-dialogue ${isVisible ? 'show' : ''}`}>
                <div className="overlay"></div>
                <p>Reach out to us with any questions or inquiries</p>
            </div>


            {/* Form Section */}
            <div className="form-container">
                <div className="form-left">
                    <h2 className="form-heading">Form</h2>
                    <h1 className="form-title">Get In Touch !!</h1>
                    <p className="form-desc">
                        Krishivishwa Biotech is dedicated to eco-friendly farming solutions. From biofertilizers to plant growth promoters, we help farmers achieve better yield sustainably. Let’s build a healthier future together.
                    </p>
                </div>
                <form className="form-right" onSubmit={handleSubmit}>
                    {["name", "email", "phone", "message"].map((field, i) => (
                        <div className="form-group" key={i}>
                            {field !== "message" ? (
                                <input
                                    type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                                    name={field}
                                    placeholder=" "
                                    value={formData[field]}
                                    onChange={handleChange}
                                    required
                                />
                            ) : (
                                <textarea
                                    name={field}
                                    placeholder=" "
                                    value={formData[field]}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            )}
                            <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                            {errors[field] && <span className="error">{errors[field]}</span>}
                        </div>
                    ))}
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? <span className="loader"></span> : isSent ? <span className="tick">✓ Sent</span> : "Submit"}
                    </button>
                </form>
            </div>

            <div className='map-section'>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30062.96693794592!2d74.08232365013733!3d19.632817735159154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdda83a14c89ee9%3A0x55a8e3ee2501477a!2sKrishivishwa%20Bio-Tech!5e0!3m2!1sen!2sin!4v1752481686211!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </div>
    );
}

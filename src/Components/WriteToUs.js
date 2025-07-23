import React, { useEffect, useRef, useState } from "react";
import './WriteToUs.css';

export default function WriteToUs() {
    const sectionRef = useRef(null);
    const [sent, setSent] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5, rootMargin: "0px 0px -100px 0px" }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleButtonClick = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone must be exactly 10 digits";
        }

        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const btn = document.querySelector(".animated-button");
            btn.classList.add("sending");

            setTimeout(() => {
                btn.classList.remove("sending");
                btn.classList.add("sent");
                setSent(true);
            }, 1500);

            setTimeout(() => {
                btn.classList.remove("sent");
                setSent(false);
            }, 4000);

            // Clear form
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
            });
        }
    };

    return (
        <div className="write-to-us-section">
            <div className="right-to-use-container" ref={sectionRef}>
                <div className="contact-left">
                    <p className="subheading">GET CONNECT WITH US</p>
                    <h1><span className="highlight">Discuss</span> Your<br />Chemical Solution Needs</h1>
                    <p className="description">
                        Reach out to Krishivishwa Biotech for your agricultural solutions. We are ready to assist you with expert guidance and sustainable products.
                    </p>

                    <div className="contact-info">
                        <p>
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-open-fill" viewBox="0 0 16 16">
                                    <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765zM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516M0 13.373l5.693-3.163L0 6.873z" />
                                </svg>
                            </i>
                            <a href="mailto:krishivishwabiotech@gmail.com" className="contact-link">
                                krishivishwabiotech@gmail.com
                            </a>
                        </p>

                        <p>
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                </svg>
                            </i>
                            <a href="tel:9960492426" className="contact-link">Mob.: 9960492426</a>
                            <span style={{ margin: "0 6px" }}>|</span>
                            <a href="tel:02424261100" className="contact-link">Ph.: 02424-261100</a>
                        </p>

                        <p className="mobile-address">
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                </svg>
                            </span>
                            <span className="address-text">
                                Gat No. 227, At. Virgaon,<br />
                                Tal. Akole, Dist. Ahmednagar (MH), 422605
                            </span>
                        </p>



                    </div>
                </div>

                <div className="contact-right">
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="input-group">
                            <input type="text" name="name" placeholder=" " value={formData.name} onChange={handleChange} required />
                            <label>Name</label>
                            {errors.name && <small className="error-msg">{errors.name}</small>}
                        </div>

                        <div className="input-group">
                            <input type="email" name="email" placeholder=" " value={formData.email} onChange={handleChange} required />
                            <label>Email</label>
                            {errors.email && <small className="error-msg">{errors.email}</small>}
                        </div>

                        <div className="input-group">
                            <input type="tel" name="phone" placeholder=" " value={formData.phone} onChange={handleChange} required />
                            <label>Phone</label>
                            {errors.phone && <small className="error-msg">{errors.phone}</small>}
                        </div>

                        <div className="input-group">
                            <textarea name="message" placeholder=" " rows="3" value={formData.message} onChange={handleChange} required></textarea>
                            <label>Message</label>
                            {errors.message && <small className="error-msg">{errors.message}</small>}
                        </div>

                        <button type="button" className={`animated-button ${sent ? "sent" : ""}`} onClick={handleButtonClick}>
                            <span className="btn-wrapper">
                                {!sent ? (
                                    <>
                                        <span className="btn-text">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                                                <path d="M15.964 0.686a.5.5 0 0 0-.65-.65L.354 7.438a.5.5 0 0 0 .062.94l6.748 1.844 1.844 6.748a.5.5 0 0 0 .94.062L15.964.686z" />
                                            </svg>
                                            Send Message
                                        </span>
                                        <span className="btn-arrow-line"></span>
                                    </>
                                ) : (
                                    <span className="sent-text">✅ Message Sent</span>
                                )}
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

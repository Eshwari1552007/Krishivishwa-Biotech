import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BannerImage from '../Assets/Images/Krishiwishwa.png';
import Button from 'react-bootstrap/Button';
import './Story.css';
import Image1 from '../Assets/Images/B.png';
import Image2 from '../Assets/Images/A.png';
import Image3 from '../Assets/Images/C.png';

function Story() {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <>
            <div className='story'>

                {/* Fade-up effect on whole banner */}
                <div className="offer-banner container" data-aos="fade-up">
                    
                    {/* Optional: You can add fade-up separately if you want staggered animation */}
                    <div className="offer-content" data-aos="fade-up">
                        <h2>Our <span>Story</span></h2>
                        <p>
                            Founded in 2007 in the heart of Maharashtra, Krishivishwa Biotech has grown from a humble vision to become a trusted name in India’s bio-fertilizer and sustainable agriculture industry. What began as a Sole Proprietorship firm has evolved into a respected Manufacturer, Wholesaler, and Retailer of Bio Fertilizers, Potash Mobilizing Bacteria, and a wide range of microbial-based solutions.
                            We are driven by one purpose — to empower Indian farmers with innovative, eco-friendly products that enhance soil health, improve crop yield, and restore natural balance to the land.
                        </p>
                        <div className="button-contact">
                            <Button variant="success">Learn More</Button>
                        </div>
                    </div>

                    <div className="kvt-img" data-aos="fade-up">
                        <img src={BannerImage} alt="KVT" />
                    </div>
                </div>

                {/* Floating images with fade-up */}
                <div className="floating-images container" data-aos="fade-up">
                    <img src={Image1} alt="Farm 1" className="floating-img" />
                    <img src={Image2} alt="Farm 2" className="floating-img" />
                    <img src={Image3} alt="Farm 3" className="floating-img" />
                </div>
            </div>
            
            
        </>
    );
}

export default Story;

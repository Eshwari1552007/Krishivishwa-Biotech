import React from 'react';
import Banner from '../Assets/Images/Banner.jpeg';
import Button from 'react-bootstrap/Button';
import AboutImage from '../Assets/Images/Krishiwishwa.png';
import Card from 'react-bootstrap/Card';

function Aboutus() {
    return (
        <>
        <div className="hero-section" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="overlay-content">
                    Learn More
                </div>
            </div>
             <div className="about-section container">
                <div className="about-content">
                    <div className="about-text">
                        <h2>ABOUT US</h2>
                        <p className="about-description">
                            Krishivishwa Biotech was established in the year 2007 with a vision to serve the farming community. The company is focused on providing quality agricultural inputs, especially biological products, to farmers. With a team of highly educated and devoted professionals, Krishivishwa Biotech emphasizes production, research, and development to enhance agricultural productivity.
                        </p>
                        <Button variant="dark">Learn More</Button>
                    </div>
                    <div className="about-image">
                        <img src={AboutImage} alt="Grapes" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Aboutus;

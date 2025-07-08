import React from 'react';
import Banner from '../Assets/Images/Banner.jpeg';
import Button from 'react-bootstrap/Button';
import AboutImage from '../Assets/Images/Krishiwishwa.png';
import Card from 'react-bootstrap/Card';
import Story from '../Components/Story';
import Footer from '../Components/Footer';
import '../Components/Home.css';



function Home() {
    return (
        <>
            <div className="hero-section" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="overlay-content">
                    <p className="tagline">Better Farming By Every Farmer</p>
                    <h1>Empowering Organic Farming <br />and Sustainable Agriculture</h1>
                    <p className="description">
                        Organic farming with Krushiwishwa Biotech products can improve crop yields and soil health, driving sustainable growth for farmers.
                    </p>
                    <div className="button-group">
                        <Button variant="success" className="me-3">Discover More</Button>
                        <Button variant="outline-warning">Shop Now</Button>
                    </div>
                </div>
            </div>
            <Story/>
         
        
        </>
    );
}

export default Home;

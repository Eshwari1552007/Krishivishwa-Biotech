import React, { useState, useRef, useEffect } from 'react';
import Banner from '../Assets/Images/Banner.jpeg';
import FarmingVideo from '../Assets/Images/FarmingVideo.mp4';
import Button from 'react-bootstrap/Button';
import { FiSearch } from "react-icons/fi";
import { BsCartPlus } from "react-icons/bs";
import Story from '../Components/Story';
import '../Components/Home.css';
import useAOS from '../utils/useAos';
import Facts from '../Facts/Facts'
import WriteToUs from '../Components/WriteToUs.js'
import ImageSlider from '../Components/ImageSlider.js'

function Home() {
    const [playVideo, setPlayVideo] = useState(false);
    const videoRef = useRef(null);

    // ✅ Init AOS
    useAOS();

    // ✅ Slow down video speed
    useEffect(() => {
        if (playVideo && videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }
    }, [playVideo]);
    const [contentFadeIn, setContentFadeIn] = useState(false);

    const handleVideoEnd = () => {
        setPlayVideo(false);

        // Trigger content fade-in after a short delay
        setTimeout(() => {
            setContentFadeIn(true);
            setTimeout(() => setContentFadeIn(false), 1000); // remove after animation
        }, 100);
    };

    return (
        <>
            <div className="hero-section" style={{ backgroundImage: !playVideo ? `url(${Banner})` : 'none' }}>
                {playVideo && (
                    <div className="hero-video-wrapper">
                        <div className="video-overlay"></div>
                        <video
                            className="hero-video"
                            src={FarmingVideo}
                            autoPlay
                            muted
                            ref={videoRef}
                            onEnded={handleVideoEnd}
                        />
                    </div>
                )}

                <div className={`overlay-content ${contentFadeIn ? 'fade-in' : ''}`}>

                    <p
                        className="tagline interactive-tagline"
                        onClick={() => setPlayVideo(true)}
                        data-aos="fade-up"
                    >
                        Better Farming By Every Farmer
                    </p>

                    <h1 className="hero-heading" data-aos="fade-up" data-aos-delay="100">
                        <span className="heading-line">Empowering Organic Farming</span>
                        <span className="and-line">And</span>
                        <span className="heading-line">Sustainable Agriculture</span>
                    </h1>


                    <p className="description" data-aos="fade-up" data-aos-delay="200">
                        Organic farming with Krushiwishwa Biotech products can improve crop yields and soil health, driving sustainable growth for farmers.
                    </p>

                    <div className="button-group" data-aos="fade-up" data-aos-delay="300">
                        <Button className="hero-btn discover-btn me-3">
                            <span className="btn-hover-icon"><FiSearch /></span>
                            <span className="btn-text">Explore more</span>
                        </Button>

                        <Button className="hero-btn shop-btn">
                            <span className="btn-hover-icon"><BsCartPlus /></span>
                            <span className="btn-text">Shop Now</span>
                        </Button>
                    </div>
                </div>
            </div>

            <Story />
            <ImageSlider/>
            <Facts/>
            <WriteToUs/>
            
        </>
    );
}

export default Home;

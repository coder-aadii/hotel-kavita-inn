import React from "react";
import "../styles/css/Hero.css";
import hotelLogo from "../assets/hotel-brand-logo.png";

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero-overlay">
                {/* Hotel Logo */}
                <img src={hotelLogo} alt="Hotel Kavita Inn Logo" className="hero-logo" />

                <h1 className="hero-title">Welcome to Hotel Kavita Inn</h1>
                <p className="hero-subtitle">
                    Luxury and comfort amidst Ujjain’s rich heritage and historic wonders
                </p>
                <div className="hero-buttons">
                    {/* WhatsApp Inquiry */}
                    <a
                        href="https://wa.me/7247241112?text=Hello%20Hotel%20Kavitha%20Inn,%20I'm%20here%20for%20inquiry."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        Inquire Now
                    </a>

                    {/* Call Now */}
                    <a href="tel:+917247241112" className="btn-secondary">
                        Call Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../styles/css/Hero.css";
import hotelLogo from "../assets/webp_images/hotel-brand-logo.webp";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero-overlay">
                {/* Hotel Logo */}
                <LazyLoadImage
                    alt="Hotel Kavita Inn Logo"
                    src={hotelLogo}
                    className="hero-logo"
                    effect="blur"
                />

                <h1 className="hero-title">Welcome to Hotel Kavita Inn</h1>
                <p className="hero-subtitle">
                    Luxury and comfort amidst Ujjain’s rich heritage and historic wonders
                </p>
                <div className="hero-buttons">
                    <a
                        href="https://wa.me/7247241112?text=Hello%20Hotel%20Kavitha%20Inn,%20I'm%20here%20for%20inquiry."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        <FaWhatsapp /> Inquire Now
                    </a>

                    <a
                        href="tel:+917247241112"
                        className="btn-secondary"
                    >
                        <FaPhoneAlt /> Call Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

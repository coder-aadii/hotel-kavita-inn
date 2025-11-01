import React, { useEffect, useState, useRef } from "react";
import "../styles/css/Navbar.css";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            {/* <div className="logo">Hotel Kavita Inn</div> */}
            <a href="#hero" className="logo">Hotel Kavita Inn</a>
            <ul ref={menuRef} className={`nav-links ${isMenuOpen ? "active" : ""}`}>
                <li onClick={handleLinkClick}><a href="#hero">Home</a></li>
                <li onClick={handleLinkClick}><a href="#about">About</a></li>
                <li onClick={handleLinkClick}><a href="#rooms">Rooms</a></li>
                <li onClick={handleLinkClick}><a href="#amenities">Amenities</a></li>
                <li onClick={handleLinkClick}><a href="#gallery">Gallery</a></li>
                <li onClick={handleLinkClick}><a href="#location">Location</a></li>
                <li onClick={handleLinkClick}><a href="#footer">Contact</a></li>
            </ul>
            {/* <button className="cta-button">Book Now</button> */}
            <a
                href="https://wa.me/7247241112?text=Hello%20Hotel%20Kavitha%20Inn,%20I'm%20here%20for%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
            >
                Book Now
            </a>
            <div ref={hamburgerRef} className="mobile-menu" onClick={toggleMenu}>☰</div>
        </nav>
    );
};

export default Navbar;

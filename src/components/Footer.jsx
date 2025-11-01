import React from "react";
import "../styles/css/Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        {/* Left Section: About + Social + Newsletter */}
        <div className="footer-left">
          <div className="footer-about">
            <h3>Hotel Kavita Inn</h3>
            <p>
              Luxury and comfort in the heart of Ujjain. Cozy rooms, modern amenities, and easy access to attractions.
            </p>
          </div>

          <div className="footer-social-newsletter">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="!#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="!#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="!#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="!#" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>

            <h4>Subscribe</h4>
            <p>Want updates from us? Send your email via your email client:</p>
            <a
              href="mailto:info@hotelkavithainn.com?subject=Subscribe%20to%20Newsletter"
              className="btn-primary"
            >
              Subscribe via Email
            </a>
          </div>
        </div>

        {/* Right Section: Quick Links + Contact */}
        <div className="footer-right">
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#rooms">Rooms</a></li>
              <li><a href="#amenities">Amenities</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#location">Location</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Address :</h4>
            <p>Hotel Kavita Inn</p>
            <p>68, Saidhaam Colony, Harifatak Bridge, Ujjain, MP 456001</p>
            <p>Phone: +91 72472 41112</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Hotel Kavita Inn. All Rights Reserved.</p>
        <div className="signature">
          Designed with <span role="img" aria-label="love">❤️</span> for Luxury & Comfort by{" "}
          <a
            href="https://github.com/coder-aadii"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coder-aadii
          </a>{" "}
          — Follow on{" "}
          <a
            href="https://www.instagram.com/mr_aadi.insane/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer >
  );
};

export default Footer;

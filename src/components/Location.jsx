import React from "react";
import "../styles/css/Location.css";

const Location = () => {
    return (
        <section className="location" id="location">
            <h2 className="section-title">Our Location</h2>
            <div className="location-container">
                <div className="map">
                    <img src={require("../assets/location-map.jpg")} alt="Hotel Kavita Inn proximity map" />
                </div>
                <div className="location-info">
                    <h3 style={{ textDecoration: "underline" }}>Hotel Kavita Inn</h3>
                    <p>
                        Located in the heart of Ujjain, Hotel Kavita Inn offers easy access
                        to the city's famous attractions and comforts.
                    </p>
                    <ul>
                        <li>Near Mahakaleshwar Jyotirlinga Mandir</li>
                        <li>Alongside the sacred Kshipra River - Ramghat</li>
                        <li>5 min drive from Ujjain Railway Station</li>
                        <li>Close to local markets & street food spots</li>
                        <li>Walking distance to nearby temples & other ghats</li>
                    </ul>
                    <a
                        href="https://maps.app.goo.gl/jyAD4FcuzFmTTRei6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        Get Directions
                    </a>
                    {/* Embedded Google Map */}
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.9002689423974!2d75.77264207531833!3d23.17383977906811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963750032800877%3A0x63022c6f57e44709!2sHotel%20Kavita%20Inn!5e0!3m2!1sen!2sin!4v1761991195040!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            style={{ border: 0, borderRadius: "12px", marginTop: "20px" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Hotel Kavita Inn Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;

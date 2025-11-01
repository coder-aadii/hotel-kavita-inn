import React from "react";
import "../styles/css/Amenities.css";
import { FaSnowflake, FaWifi, FaParking, FaUtensils } from "react-icons/fa";

const amenities = [
  { icon: <FaSnowflake />, name: "Air Conditioned" },
  { icon: <FaWifi />, name: "Free Wi-Fi" },
  { icon: <FaParking />, name: "Free Parking" },
  { icon: <FaUtensils />, name: "Food & Beverages" },
];

const Amenities = () => {
  return (
    <section className="amenities" id="amenities">
      <h2 className="section-title">Our Amenities</h2>
      <div className="amenities-grid">
        {amenities.map((amenity, index) => (
          <div className="amenity-card" key={index}>
            <div className="amenity-icon">{amenity.icon}</div>
            <h3>{amenity.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;

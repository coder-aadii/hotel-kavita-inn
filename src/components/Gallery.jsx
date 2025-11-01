import React from "react";
import "../styles/css/Gallery.css";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h2 className="section-title">Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-card" key={index}>
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

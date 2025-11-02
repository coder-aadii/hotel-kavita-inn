import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../styles/css/Gallery.css";
import gallery1 from "../assets/webp_images/gallery1.webp";
import gallery2 from "../assets/webp_images/gallery2.webp";
import gallery3 from "../assets/webp_images/gallery3.webp";
import gallery4 from "../assets/webp_images/gallery4.webp";
import gallery5 from "../assets/webp_images/gallery5.webp";
import gallery6 from "../assets/webp_images/gallery6.webp";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h2 className="section-title">Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-card" key={index}>
            <LazyLoadImage
              alt={`Gallery ${index + 1}`}
              src={img}
              effect="blur"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

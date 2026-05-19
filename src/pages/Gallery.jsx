
import React, { useState } from "react";

export default function Gallery() {
  const images = [
  "/project-1.png",
  "/project-2.png",
  "/project-3.png",
  "/project-4.png",
  "/project-5.png",
  "/project-6.png",
  "/project-7.png",
    "/project-8.png",
  "project-9.png",
  "project-10.png",
  "project-11.png",
  "project-12.png",
  "project-13.png",
  "project-14.png",
  "project-15.png",
  "project-16.png",
  "project-17.png",
  "project-18.png",
  "project-19.png",
  "project-20.png",
  "project-21.png",
  "project-22.png",
  "project-23.png",
  "project-24.png",
];
  const [selectedImage, setSelectedImage] = useState(null);

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2>Project Gallery</h2>
        <div className="underline"></div>
      </div>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            className="gallery-card"
            key={index}
            onClick={() => setSelectedImage(index)}
          >
            <img src={img} alt={`Project ${index + 1}`} />
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="lightbox">
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <button className="lightbox-arrow left" onClick={prevImage}>
            ‹
          </button>

          <img
            src={images[selectedImage]}
            alt="Expanded project"
            className="lightbox-image"
          />

          <button className="lightbox-arrow right" onClick={nextImage}>
            ›
          </button>
        </div>
      )}
    </section>
  );
}
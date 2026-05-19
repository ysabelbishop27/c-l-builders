import React, { useState } from "react";

export default function Contact() {
  const [showDiscountPopup, setShowDiscountPopup] = useState(true);

  return (
    <section className="contact-section">
      {showDiscountPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button
              className="popup-close"
              onClick={() => setShowDiscountPopup(false)}
            >
              ×
            </button>

            <h2>Special Discounts</h2>
            <p>Ask us about our Senior and Military Discounts.</p>

            <button
              className="gold-btn"
              onClick={() => setShowDiscountPopup(false)}
            >Ask Us Today
            </button>
          </div>
        </div>
      )}

      <div className="contact-box">
        <h2>Contact C&L Builders</h2>
        <p className="contact-intro">Reach out today for decks, fences, improvements, windows, and general repairs.</p>

        <div className="contact-details">
          <p><strong>Owner/Operator:</strong> Cody Carden</p>
          <p><strong>Office Manager:</strong> Lauren Bray</p>
          <p><strong>Service Area:</strong> The Carolinas and Virginia</p>
          <p><strong>Services:</strong> Decks • Fences • Windows • Improvements • General Repairs</p>
          <p><strong>Phone:</strong> 252-339-8992</p>
        </div>

        <div className="contact-buttons">
          <a className="gold-btn" href="tel:2523398992">Call Us Today!</a>
          <a className="gold-btn secondary-btn" href="mailto:cl.builders25@gmail.com">Email Us</a>
        </div>
      </div>
    </section>
  );
}
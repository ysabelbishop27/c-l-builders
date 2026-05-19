import React from "react";
import { Link } from "react-router-dom";

export default function Flooring() {
  return (
    <section className="page-hero flooring-page">
      <div className="page-card">
        <h2>Flooring Services</h2>
        <p>
          Give your home a fresh, clean look with dependable flooring installation, repairs, and replacement work. We help with practical flooring updates that improve the comfort, value, and appearance of your space.
        </p>
        <div className="feature-list">
          <span>Floor Installation</span>
          <span>Floor Repairs</span>
          <span>Replacement Flooring</span>
          <span>Trim & Finish Work</span>
        </div>
        <Link className="gold-btn" to="/contact">Request Flooring Work</Link>
      </div>
    </section>
  );
}

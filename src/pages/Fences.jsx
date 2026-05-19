import React from "react";
import { Link } from "react-router-dom";

export default function Fences() {
  return (
    <section className="page-hero fence-page">
      <div className="page-card">
        <h2>Fence Services</h2>
        <p>Privacy fencing, wood fences, gate work, repairs, and custom property solutions.</p>
        <div className="feature-list">
          <span>Wood Fences</span>
          <span>Privacy Fences</span>
          <span>Gate Repairs</span>
          <span>Fence Repairs</span>
        </div>
        <Link className="gold-btn" to="/contact">Request Fence Work</Link>
      </div>
    </section>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Improvements() {
  return (
    <section className="page-hero improvements-page">
      <div className="page-card">
        <h2>Improvements & General Labor</h2>
        <p>Home upgrades, general repairs, window work, installs, and dependable labor help.</p>
        <div className="feature-list">
          <span>Home Improvements</span>
          <span>General Repairs</span>
          <span>Window Work</span>
          <span>Labor Services</span>
        </div>
        <Link className="gold-btn" to="/contact">Request Help</Link>
      </div>
    </section>
  );
}
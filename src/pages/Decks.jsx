import React from "react";
import { Link } from "react-router-dom";

export default function Decks() {
  return (
    <section className="page-hero deck-page">
      <div className="page-card">
        <h2>Deck Services</h2>
        <p>Custom deck builds, repairs, railing work, stairs, and outdoor living upgrades.</p>
        <div className="feature-list">
          <span>Custom Deck Builds</span>
          <span>Deck Repairs</span>
          <span>Railings & Stairs</span>
          <span>Outdoor Upgrades</span>
        </div>
        <Link className="gold-btn" to="/contact">Request Deck Work</Link>
      </div>
    </section>
  );
}
import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="brand-wrap">
        <div className="logo-box">
          <img src="/logo.png" alt="C&L Builders Logo" className="logo" />
        </div>

        <div className="brand-text">
          {/* <h1>C&L Builders</h1> */}
          
  <Link to="/" className="logo-link">
  <h1>C&L Builders</h1>
</Link>
          <p>Serving the Carolinas and Virginia</p>
        </div>
      </div>

      <nav className="main-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/decks">Decks</NavLink>
        <NavLink to="/fences">Fences</NavLink>
        <NavLink to="/improvements">Improvements</NavLink>
        <NavLink to="/flooring">Flooring</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

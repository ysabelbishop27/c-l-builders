import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Decks from "./pages/Decks.jsx";
import Fences from "./pages/Fences.jsx";
import Improvements from "./pages/Improvements.jsx";
import Contact from "./pages/Contact.jsx";
import Flooring from "./pages/Flooring.jsx";
import Gallery from "./pages/Gallery.jsx";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/decks" element={<Decks />} />
          <Route path="/fences" element={<Fences />} />
          <Route path="/improvements" element={<Improvements />} />
          <Route path="/flooring" element={<Flooring />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}


import React, { useState } from "react";
import ServiceCard from "../components/ServiceCard.jsx";
import { supabase } from "../supabaseClient";

export default function Home() {
  const THREE_DAYS = 3 * 24 * 60 * 60 * 1000;

  const shouldShowPopup = () => {
    const closedTime = localStorage.getItem("powerWashPopupClosed");

    if (!closedTime) return true;

    return Date.now() - Number(closedTime) > THREE_DAYS;
  };

  const [showPopup, setShowPopup] = useState(shouldShowPopup);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [showGeneralQuoteForm, setShowGeneralQuoteForm] = useState(false);

  const closePopup = () => {
    localStorage.setItem("powerWashPopupClosed", Date.now().toString());
    setShowPopup(false);
  };

  const handleAskNow = () => {
    if (window.confetti) {
      window.confetti({
        particleCount: 180,
        spread: 90,
        origin: { y: 0.6 },
      });
    }

    localStorage.setItem("powerWashPopupClosed", Date.now().toString());

    setTimeout(() => {
      setShowPopup(false);
      setShowQuoteForm(true);
    }, 600);
  };

 const handleQuoteSubmit = async (e, source) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  // SAVE TO SUPABASE
  const { error } = await supabase.from("quote_requests").insert([
    {
      name: formData.get("name"),
      phone: formData.get("phone"),
      quote_type:
        formData.get("quoteType") || "Power Washing",
      message:
        formData.get("description") ||
        formData.get("quoteType"),
      source,
    },
  ]);

  if (error) {
    console.error(error);
    alert("Something went wrong.");
    return;
  }

  // SEND EMAIL
  fetch("https://formsubmit.co/ajax/cl.builders25@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: formData.get("name"),
      phone: formData.get("phone"),
      message:
        formData.get("description") ||
        formData.get("quoteType"),
    }),
  });

  alert("Quote request submitted!");

  e.target.reset();
  setShowQuoteForm(false);
  setShowGeneralQuoteForm(false);
};

  return (
    <div className="home-shell">
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="popup-close" onClick={closePopup}>
              ×
            </button>

            <h2>Summer Special!</h2>
            <p>
              Ask us about our professional power washing services this summer.
            </p>

            <button className="gold-btn" onClick={handleAskNow}>
              Ask Now
            </button>
          </div>
        </div>
      )}

      {showQuoteForm && (
        <div className="popup-overlay">
          <div className="popup-box quote-form-box">
            <button
              className="popup-close"
              onClick={() => setShowQuoteForm(false)}
            >
              ×
            </button>

            <h2>Get A Free Power Washing Quote</h2>

            <p>
              Interested in our professional power washing services? Fill out
              the form below and a member of C&L Builders will contact you with
              a free personalized quote.
            </p>

            <form
              className="quote-form"
              onSubmit={(e) => handleQuoteSubmit(e, "Power Washing Popup")}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
              />

              <textarea
                name="description"
                placeholder="Tell us about the area or project you would like power washed"
                rows="5"
                required
              ></textarea>

              <button className="gold-btn" type="submit">
                Get My Free Quote
              </button>
            </form>
          </div>
        </div>
      )}

      {showGeneralQuoteForm && (
        <div className="popup-overlay">
          <div className="popup-box quote-form-box">
            <button
              className="popup-close"
              onClick={() => setShowGeneralQuoteForm(false)}
            >
              ×
            </button>

            <h2>Get A Free Quote</h2>

            <p>
              Tell us what kind of project you need help with, and C&L Builders
              will contact you with a free personalized quote.
            </p>

            <form
              className="quote-form"
              onSubmit={(e) => handleQuoteSubmit(e, "Homepage Quote Button")}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
              />

              <textarea
                name="quoteType"
                placeholder="What kind of free quote would you like? Decks, fences, flooring, repairs, improvements, etc."
                rows="5"
                required
              ></textarea>

              <button className="gold-btn" type="submit">
                Submit Free Quote Request
              </button>
            </form>
          </div>
        </div>
      )}

      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h2>
              Quality Craftsmanship
              <br />
              You Can Trust
            </h2>

            <p>
              Decks <span>•</span> Fences <span>•</span> Improvements{" "}
              <span>•</span> Flooring <span>•</span> General Repairs
            </p>

            <button
              className="gold-btn"
              type="button"
              onClick={() => setShowGeneralQuoteForm(true)}
            >
              Get A Free Quote
            </button>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="service-grid four">
          <ServiceCard
            icon="decks"
            title="Decks"
            text="Custom deck builds and repairs built to last."
            link="/decks"
          />

          <ServiceCard
            icon="fences"
            title="Fences"
            text="Privacy, picket, and custom fencing solutions."
            link="/fences"
          />

          <ServiceCard
            icon="improvements"
            title="Improvements"
            text="Home improvements and general labor services."
            link="/improvements"
          />

          <ServiceCard
            icon="flooring"
            title="Flooring"
            text="Professional flooring installation and repair services."
            link="/flooring"
          />
        </div>
      </section>

      <section className="about-section">
        <div className="about-card">
          <img
            src="/about-image.png"
            alt="C&L Builders"
            className="about-image"
          />

          <h2>Who Are We?</h2>
          <div className="underline"></div>

          <p>
            C&L Builders was built from the ground up by Cody and Lauren with a
            passion for quality craftsmanship and honest work. Through hard work,
            dedication, and pride in every project, they have built a trusted
            business serving homeowners across the Carolinas and Virginia.
          </p>

          <p>
            From custom decks and fencing to flooring, repairs, and home
            improvements, Cody and Lauren believe every project should be done
            professionally and with attention to detail. They take pride in
            dependable service, strong communication, and results customers can
            count on.
          </p>
        </div>
      </section>

      <section className="why-section">
        <h2>Why Choose C&L Builders?</h2>
        <div className="underline"></div>

        <div className="why-grid">
          <div className="why-card">
            <h3>Reliable Work</h3>
            <p>
              We show up on time, communicate clearly, and complete projects the
              right way.
            </p>
          </div>

          <div className="why-card">
            <h3>Quality Craftsmanship</h3>
            <p>
              From decks to flooring, we focus on durable work and clean finishes
              built to last.
            </p>
          </div>

          <div className="why-card">
            <h3>Serving The Carolinas & Virginia</h3>
            <p>
              Proudly helping homeowners with repairs, improvements, and custom
              construction services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
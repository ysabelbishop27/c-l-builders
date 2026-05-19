// import React from "react";
// import { Link } from "react-router-dom";

// function ServiceIcon({ type }) {
//   if (type === "decks") {
//     return (
//       <svg viewBox="0 0 64 64" aria-hidden="true">
//         <path d="M10 34h44M14 34v18M50 34v18M20 34v18M44 34v18" />
//         <path d="M14 26h36v8H14z" />
//         <path d="M18 18h28v8H18z" />
//       </svg>
//     );
//   }

//   if (type === "fences") {
//     return (
//       <svg viewBox="0 0 64 64" aria-hidden="true">
//         <path d="M10 30h44M10 44h44" />
//         <path d="M16 14l6 8v30H10V22l6-8z" />
//         <path d="M32 14l6 8v30H26V22l6-8z" />
//         <path d="M48 14l6 8v30H42V22l6-8z" />
//       </svg>
//     );
//   } if (type === "improvements") {
//     return (
//       <svg viewBox="0 0 64 64" aria-hidden="true">
//         <path d="M10 32L32 14l22 18" />
//         <path d="M18 30v22h28V30" />
//         <path d="M26 52V38h12v14" />
//         <path d="M42 18v8" />
//       </svg>
//     );
//   }

//   if (type === "repairs") {
//     return (
//       <svg viewBox="0 0 64 64" aria-hidden="true">
//         <path d="M42 12a12 12 0 0 0-14 15L12 43l9 9 16-16a12 12 0 0 0 15-14l-8 8-10-10 8-8z" />
//       </svg>
//     );
//   }

//   return (
//     <svg viewBox="0 0 64 64" aria-hidden="true">
//       <path d="M12 18h40v34H12z" />
//       <path d="M12 28h40M12 38h40M24 18v34M40 18v34" />
//     </svg>
//   );
// }export default function ServiceCard({ icon, title, text, link }) {
//   return (
//     <div className="service-card">
//       <div className="service-icon-wrap">
//         <ServiceIcon type={icon} />
//       </div>
//       <h3>{title}</h3>
//       <p>{text}</p>
//       <Link to={link}>Learn More →</Link>
//     </div>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";

function ServiceIcon({ type }) {
  if (type === "decks") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M10 34h44M14 34v18M50 34v18M20 34v18M44 34v18" />
        <path d="M14 26h36v8H14z" />
        <path d="M18 18h28v8H18z" />
      </svg>
    );
  }

  if (type === "fences") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M10 30h44M10 44h44" />
        <path d="M16 14l6 8v30H10V22l6-8z" />
        <path d="M32 14l6 8v30H26V22l6-8z" />
        <path d="M48 14l6 8v30H42V22l6-8z" />
      </svg>
    );
  }

  if (type === "improvements") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M10 32L32 14l22 18" />
        <path d="M18 30v22h28V30" />
        <path d="M26 52V38h12v14" />
        <path d="M42 18v8" />
      </svg>
    );
  }

  if (type === "flooring") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M12 18h40v28H12z" />
        <path d="M12 28h40" />
        <path d="M12 38h40" />
        <path d="M24 18v28" />
        <path d="M40 18v28" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M12 18h40v34H12z" />
      <path d="M12 28h40M12 38h40M24 18v34M40 18v34" />
    </svg>
  );
}

export default function ServiceCard({ icon, title, text, link }) {
  return (
    <div className="service-card">
      <div className="service-icon-wrap">
        <ServiceIcon type={icon} />
      </div>

      <h3>{title}</h3>

      <p>{text}</p>

      <Link to={link}>Learn More →</Link>
    </div>
  );
}
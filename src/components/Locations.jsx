// src/components/Locations.jsx

import React from "react";
import './location.css';

// Import images src/image/
import gateway from "../image/gateway-of-india.jpg";
import indiaGate from "../image/Delhi_India_Gate.jpg";
import mysore from "../image/download.jpeg";
import unity from "../image/statue-of-unity.webp";
import meenakshi from "../image/Meenakshi-Tamil-Nadu.jpg";
import goldenTemple from "../image/The_Golden_Temple.jpg";

const Locations = () => {
  const states = [
    { name: "Maharashtra", img: gateway },
    { name: "Delhi", img: indiaGate },
    { name: "Karnataka", img: mysore },
    { name: "Gujarat", img: unity },
    { name: "Tamil Nadu", img: meenakshi },
    { name: "Punjab", img: goldenTemple },
  ];

  const handleClick = (state) => {
    alert(`Home loan options in ${state} coming soon!`);
  };

  return (
    <section className="locations">
      <h2>Home Loans Available in These States</h2>
      <div className="location-cards">
        {states.map((state) => (
          <div
            key={state.name}
            className="location-card"
            onClick={() => handleClick(state.name)}
          >
            <img src={state.img} alt={state.name} />
            <span>{state.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Locations;

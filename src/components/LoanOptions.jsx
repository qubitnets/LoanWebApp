// src/components/LoanOptions.jsx

import React from "react";
import { FaHome, FaCar, FaPiggyBank } from "react-icons/fa";
import './loanoption.css';
import option1 from "../image/Offer1.jpg";
import option2 from "../image/homeConstruct.jpeg";
import option3 from "../image/renovation.jpg";

const LoanOptions = () => {
  const loans = [
    {
      icon: <FaHome />,
      image: option1,
      title: "Home Purchase Loan",
      desc: "Buy your dream home with affordable interest rates.",
    },
    {
      icon: <FaCar />,
      image: option2,
      title: "Home Construction Loan",
      desc: "Build your house exactly how you want it with flexible finance.",
    },
    {
      icon: <FaPiggyBank />,
      image: option3,
      title: "Home Renovation Loan",
      desc: "Upgrade your existing house with quick loan approval.",
    },
  ];

  return (
    <section className="loan-options">
      <div className="section-header">
        <h2>Loan Options</h2>
        <p>Choose the right type of home loan to fit your needs</p>
      </div>
      <div className="loan-cards">
        {loans.map((loan) => (
          <div className="loan-card" key={loan.title}>
            <img src={loan.image} alt={loan.title} className="loan-image" />
            <div className="card-icon">{loan.icon}</div>
            <h3>{loan.title}</h3>
            <p>{loan.desc}</p>
            <a href="#apply" aria-label={`Apply for ${loan.title}`}>Apply Now</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoanOptions;

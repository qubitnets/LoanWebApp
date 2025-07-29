import React from "react";
import './offer.css';
import offer1 from "../image/Offer1.jpg";
import offer2 from "../image/offer2.jpg";
import offer3 from "../image/offer3.jpg";
import offer4 from "../image/offer4.webp";
import offer5 from "../image/offer5.jpg";
import offer6 from "../image/offer6.webp";
import offer7 from "../image/offer7.jpg";
import offer8 from "../image/offer8.png";

const offers = [
  {
    id: 1,
    image: offer1,
    title: "Home Loan",
    description: "Get a low-interest home loan with flexible tenure options.",
  },
  {
    id: 2,
    image: offer2,
    title: " Quick Medical Emergency ",
    description: "Be it a surgery or a regular doctor consultation,",
  },
  {
    id: 3,
    image: offer3,
    title: "Small business needs",
    description: "Grow your ambitions with a loan for your startup or business",
  },
   {
    id: 4,
    image: offer4,
    title: "Gold Loan",
    description: "Your Gold ,Your Goals: Fulfill your financial requirements through Gold Loan.",
  },
  {
    id: 5,
    image: offer5,
    title: "Self Employed ",
    description: "Instant Personal Loans for Self Employed",
  },
  {
    id: 6,
    image: offer6,
    title: "Loan Against Property",
    description: "Take your business to new heights with hassle free and Affordable Loan Against Property",
  },
  {
    id: 7,
    image: offer7,
    title: "Travel Loan",
    description: "When you have travel on your mind, why delay it? Avail our easy Personal Loan today, and make your vacation more comfortabl",
  },
  {
    id: 8,
    image: offer8,
    title: "Higher studies",
    description: ">When it comes to your education, don’t compromise. Avail our hassle-free Personal Loan&nbsp;and jump start your career today",
  },
];

const Offers = () => {
  const scrollContainerRef = React.useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="offers" id="offers">
      <h2>Latest Offers</h2>
      <div className="offers-wrapper">
        <button className="scroll-btn prev" onClick={scrollLeft}>
          &#8249;
        </button>
        <div className="offer-cards-scroll" ref={scrollContainerRef}>
          {offers.map((offer) => (
            <div className="offer-card" key={offer.id}>
              <img src={offer.image} alt={offer.title} />
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
        <button className="scroll-btn next" onClick={scrollRight}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Offers;

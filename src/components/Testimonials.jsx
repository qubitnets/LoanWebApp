// src/components/Testimonials.jsx

import React from "react";
import user1 from "../image/user1.png";
import user2 from "../image/user2.webp";
import user3 from "../image/user3.png"; 
import "./testimonial.css"



const Testimonials = () => {
  const testimonials = [
    {
      name: "Sahil More",
      review:
        "Trading Platform app has transformed my investment experience. It is user-friendly, and offers insightful analytics that have significantly boosted my portfolio performance. Highly recommend for both traders and investors.",
      image: user1,
    },
    {
      name: "Anjali Sharma",
      review:
        "This loan platform made my dream home a reality! Super fast processing and great customer support.",
      image: user2,
    },
    {
      name: "Raj Verma",
      review:
        "The calculator helped me plan my EMI perfectly. 5 stars to their professional team!",
      image: user3,
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((t, idx) => (
          <div className="testimonial" key={idx}>
            <blockquote>{t.review}</blockquote>
            <footer>
              <img src={t.image} alt={t.name} />
              <div>{t.name}</div>
            </footer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

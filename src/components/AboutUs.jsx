// src/components/AboutUs.jsx
import React, { useState } from 'react';

import './aboutus.css';

import indiaMap from '../image/india-Map.svg';
import success1 from '../image/success1.jpeg';
import success2 from '../image/success2.jpeg';
import success3 from '../image/success3.jpeg';
import leader1 from '../image/leader1.png';
import leader2 from '../image/leader2.jpg';
import leader3 from '../image/leader3.jpg';
import leader4 from '../image/leader4.png';
import leader5 from '../image/leader5.png';

const leaders = [
  {
    name: "Vivek Singh",
    role: "Chief Executive Officer",
    image: leader1,
    description:
      "Vivek Singh joined Home Credit India as CEO in 2025. With over two decades of extensive experience across NBFCs & Banks, he has expertise in successfully leading and scaling new business lines for large financial institutions. His unwavering commitment towards financial inclusion and his proven leadership in building growth-driven teams aligns perfectly with our mission of expanding credit access across India.",
  },
  {
    name: "Esha Pruthi",
    role: "Chief Legal Officer",
    image: leader2,
    description:
      "Esha joined Home Credit India in July 2018 and has been an integral part of the growth journey of the organization.</p><p>Prior to joining Home Credit, she was associated with tier-1 law firms AZB &amp; Partners, Delhi for 10 years and with Wong Partnership, Singapore.</p><p>Esha brings a keen focus on legal and compliance matters, necessary for ensuring that organization operates within the regulatory framework. She has extensive experience of working on a range of cross border and domestic transactions relating to acquisitions, joint ventures, private equity, debt financing, including project financing in infrastructure and energy sectors, structured finance and co-lending arrangements.</p><p>She is committed to acting as a business facilitator, aligning legal expertise with business acumen to promote growth and strategy, while ensuring compliance.",
  },
   {
    name: "Shivam Sehgal",
    role: "Chief Sales Officer",
    image: leader3,
    description:
      "Prior to joining Home Credit, Bhrigu was heading the BNPL unit in Bajaj Finance Ltd. He comes with 14+ years of rich experience in BFSi sector &amp; worked with organizations like Bajaj finance, Kotak, yesbank and around 2 years experience in e-commerce organizations like magicbricks and quikr.com.",

  },
  {
    name: "Kirti",
    role: "Chief CRM & Digital Officer<",
    image: leader4,
    description:
      "With over 15 years of work experience, Prosonjit Basu is responsible for Corporate Strategy and Alliances at Home Credit India. His core responsibilities lie in leading and managing strategic partnerships with Fin Techs and Big Data companies Prosonjit has been instrumental in contributing towards strategic business outcomes at Home Credit. His ability to lead cross-functional teams that collaborate as a focused unit, help the organization to achieve its business goals and drive the evolution of concepts into achievable business strategies.",
  },
  {
    name: "Dev Sharma",
    role: "Chief Information Officer",
    image: leader5,
    description:
      "Ladislav Simicek has over 20 years’ experience in the banking sector with a strong background in strategic planning, building high-performance teams, implementing innovative technological solutions and continuous improvement programs. Prior to being appointed as CIO of Home Credit India, he was serving as COO &amp; CIO at Home Credit Bank in Kazakhstan. In the past, he was associated with Hypotecni Banka and eBanka, a.s. He has a Master’s Degree in Information Technology and Management from Prague-based Banking Institute College. He is also a Microsoft certified solutions developer with a C++ certification.",
  },
];

const AboutUs = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);

  const openModal = (leader) => {
    setSelectedLeader(leader);
  };

  const closeModal = () => {
    setSelectedLeader(null);
  };
  return (
    <div className="about-us-wrapper">
      {/* Top Section */}
      <div className="about-top">
        <div className="left">
          <h2>We are making credit accessible to every Indian</h2>
          <img src={indiaMap} alt="India map" className="india-map" />
        </div>
        <div className="right">
          <p>
            Home Credit India Finance Pvt. Ltd., a subsidiary of TVS Holdings Ltd. is a leading consumer finance company committed to driving credit penetration and financial inclusion across India. Home Credit India offers a diversified range of innovative products, supported by a superior customer experience, and continues to expand its pan-India presence. With a focus on providing simple, trustworthy, transparent, tech-driven accessible financial solutions, Home Credit India has been part of financial journey for over 1.8 Crore customers through a robust network of approximately 53,000 points-of-sale (PoS) spread across 625 cities nationwide.
          </p>
          <div className="stats">
            <div className="stat-item">50Mn+<span>Happy Customers</span></div>
            <div className="stat-item">15,000+<span>Retail Partners</span></div>
            <div className="stat-item">300+<span>Locations</span></div>
            <div className="stat-item">10+<span>Years in India</span></div>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <section className="leadership-section">
      <h2>Leadership at Home Credit India</h2>
      <div className="leaders-container">
        {leaders.map((leader, index) => (
          <div className="leader-card" key={index}>
            <img src={leader.image} alt={leader.name} />
            <h3>{leader.name}</h3>
            <p>{leader.role}</p>
            <button className="plus-icon" onClick={() => openModal(leader)}>+</button>
          </div>
        ))}
      </div>

      {selectedLeader && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>X</button>
            <div className="modal-body">
              <img src={selectedLeader.image} alt={selectedLeader.name} />
              <div>
                <h3>{selectedLeader.name}</h3>
                <p><strong>{selectedLeader.role}</strong></p>
                <p>{selectedLeader.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      </section>

      {/* Success Stories */}
      <div className="success-stories">
        <h3>Our Success Stories</h3>
        <div className="stories-grid">
          <div className="story-card">
            <img src={success1} alt="Story 1" />
            <p>Anjali is among the 1300 strong telesales team of Home Credit India. She understands and recognizes people who work hard to give their families the big and small things in life because she herself comes from a similar background. Like the customer who needed a loan to pay for his son's education. Anjali got the loan approved and disbursed within 24 hrs.</p>
          </div>
          <div className="story-card">
            <img src={success2} alt="Story 2" />
            <p>There was a time when Jitender used to stand outside restaurants and small shops with TVs to catch a glimpse of IPL matches.&nbsp;He and his friends wished for the day when they could watch it together and support their favorite teams.&nbsp;When Jitender finally managed to buy a TV, it was not only his dream that got fulfilled but also that of his friends. We take pride in these joyful moments and in fulfilling many dreams.</p>
          </div>
          <div className="story-card">
            <img src={success3} alt="Story 3" />
            <p>There was a time when Sonu from Gurgaon used to spend over 2 hours in a bus and metro to reach the hair salon he works at, in Delhi. Riding on his own bike saves him 1 hour of daily travel time. Also, he and his wife can go out more often because of the two-wheeler. We are proud of such moments of joy&nbsp;and so many dreams fulfilled.</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="pay-emi-footer">
        <p className="faq-note">
            If you have any questions related to repayment, please visit the <span className="faq-link">FAQs</  span> section to know more.
        </p>

       <div className="footer-logo">HOME CREDIT</div>

       <div className="footer-links">
        <span>Privacy Policy</span>
        <span>RBI Disclaimer</span>
        <span>Corporate Governance</span>
       </div>

       <div className="footer-icons">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-linkedin-in"></i>
       </div>

       <p className="copyright">
          Copyright © Home Credit. All rights reserved
       </p>
      </footer>
    </div>
  );
};

export default AboutUs;

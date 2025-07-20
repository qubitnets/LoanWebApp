// src/components/ApplyNow.jsx
import React, { useState } from "react";
import customerImg from "../image/Customer.jpg";
import './applynow.css';

const ApplyNow = () => {
  const [showServices, setShowServices] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [showProductMenu, setShowProductMenu] = useState(false);

  return (
    <section className="apply-section">
      <div className="apply-container">
        <h2>Enquiry for Your Loan Now</h2>
        <p>Fill in the details below to get started with your loan application.</p>

        {/* Loan Info Section with Image */}
        <div className="loan-info-section">
          <div className="loan-image">
            <img src={customerImg} alt="Customer applying for loan" />
          </div>
          <div className="loan-text">
            <h2>Easy and hassle-free loans with Home Credit!</h2>
            <p>Apply now to get quick approvals and flexible EMI options tailored for you.</p>
          </div>
        </div>

        {/* Dropdown Search Box with Custom Product Menu */}
        <div className="product-select-section">
          <h3>A few easy steps is all it takes to upgrade your life!</h3>

          <div className="custom-dropdown">
            <input
              type="text"
              placeholder="Click here and select a product to get started"
              readOnly
              value={selectedProduct}
              onClick={() => setShowProductMenu(!showProductMenu)}
            />
            <span className="dropdown-arrow">&#9662;</span>

            {showProductMenu && (
              <div className="dropdown-content product-dropdown-content">
                <div className="dropdown-column">
                  <h4>LOANS</h4>
                  <a onClick={() => setSelectedProduct("Personal Loan")}>Personal Loan</a>
                  <a onClick={() => setSelectedProduct("Home Credit Ujjwal EMI Card")}>Home Credit Ujjwal EMI Card</a>
                  <a onClick={() => setSelectedProduct("Mobile Phone on EMIs")}>Mobile Phone on EMIs</a>
                  <a onClick={() => setSelectedProduct("Home Appliances on EMIs")}>Home Appliances on EMIs</a>
                </div>
                <div className="dropdown-column">
                  <h4>SERVICES</h4>
                  <a onClick={() => setSelectedProduct("Extended Warranty")}>Extended Warranty</a>
                  <a onClick={() => setSelectedProduct("Mobile Protect")}>Mobile Protect</a>
                  <a onClick={() => setSelectedProduct("Safe Pay")}>Safe Pay</a>
                  <a onClick={() => setSelectedProduct("Credit Score Check")}>Credit Score Check</a>
                  <a onClick={() => setSelectedProduct("Health Services")}>Health Services</a>
                </div>
                <div className="dropdown-column">
                  <h4>OFFERS</h4>
                  <a onClick={() => setSelectedProduct("Personal Loan Offer")}>Personal Loan Offer</a>
                  <a onClick={() => setSelectedProduct("Online Shopping with EMI Card")}>Online Shopping with EMI Card</a>
                  <a onClick={() => setSelectedProduct("Upgrade Life #ZindagiHit")}>Upgrade Life #ZindagiHit</a>
                </div>
                <div className="dropdown-column">
                  <h4>MORE PRODUCTS</h4>
                  <a onClick={() => setSelectedProduct("Two-wheeler Loan")}>Two-wheeler Loan</a>
                  <a onClick={() => setSelectedProduct("Used Car Loan")}>Used Car Loan</a>
                  <a onClick={() => setSelectedProduct("Tractor Loan")}>Tractor Loan</a>
                  <a onClick={() => setSelectedProduct("Gold Loan")}>Gold Loan</a>
                  <a onClick={() => setSelectedProduct("Loan Against Property")}>Loan Against Property</a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Toggle Buttons */}
        <div className="toggle-section">
          <button
            className={showServices ? "active" : ""}
            onClick={() => setShowServices(true)}
          >
            Services
          </button>
          <button
            className={!showServices ? "active" : ""}
            onClick={() => setShowServices(false)}
          >
            Loan & EMI Card
          </button>
        </div>

        {/* Conditional Rendered Content */}
        {showServices ? (
          <div className="service-content">
            <h3>Our Loan Services</h3>
            <ul>
              <li>Personal Loan</li>
              <li>Consumer Durable Loan</li>
              <li>Cash Loan</li>
              <li>Travel Loan</li>
            </ul>
          </div>
        ) : (
          <div className="loan-content">
            <h3>Loan & EMI Card Features</h3>
            <ul>
              <li>No cost EMI</li>
              <li>Low interest rate</li>
              <li>Accepted in all major stores</li>
              <li>Quick approval</li>
            </ul>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <footer className="pay-emi-footer">
        <p className="faq-note">
          If you have any questions related to repayment, please visit the <span className="faq-link">FAQs</span> section to know more.
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
    </section>
  );
};

export default ApplyNow;

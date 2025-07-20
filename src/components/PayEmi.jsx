// src/components/PayEmi.jsx
import React from "react";
import loanemi from "../image/loanemi.jpeg";
import './payemi.css';

const PayEmi = () => {
  return (
    <section className="pay-emi-section">
      <div className="pay-emi-container">
        <div className="pay-emi-left">
          <h3>Enter your Registered Mobile Number</h3>
          <div className="input-wrapper">
            <span>+91</span>
            <input type="tel" placeholder="Registered Mobile Number*" />
          </div>
          <button className="disabled-btn" disabled>Continue</button>
          <div className="or-divider">OR</div>
          <p>
            <span className="login-text">Login</span> using Loan Contract Number
          </p>
        </div>

        <div className="pay-emi-right">
          <h2>Hassle free EMI payments</h2>
          <p>Pay your EMIs digitally with ease</p>
          <img src={loanemi} alt="Customer Support" className="emi-image" />
        </div>
      </div>

      <div className="payment-methods">
        <h3>You Can Pay With</h3>
        <div className="methods">
          <div className="method-box">Debit Card</div>
          <div className="method-box">Net Banking</div>
          <div className="method-box">UPI</div>
        </div>
      </div>

      <p className="faq-note">
        If you have any questions related to repayment, please visit the <span className="faq-link">FAQs</span> section to know more.
      </p>

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

    </section>
  );
};

export default PayEmi;

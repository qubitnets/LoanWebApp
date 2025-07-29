import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import './navbar.css';
import { FaHome } from "react-icons/fa"; 


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
            <FaHome className="logo-icon" />
          <span className="brand-text">HomeCredit</span>
        </div>

        <ul className="nav-links">
           
          <li>
            <Link to="/">Home</Link>
          </li>

          {/* Products Dropdown */}
          <li className="dropdown">
            <span>Products ▾</span>
            <div className="dropdown-content">
              <div className="dropdown-column">
                <h4>LOANS </h4>
                <a href="#">Personal Loan</a>
                <a href="#">Home Credit Ujjwal EMI Card</a>
                <a href="#">Mobile Phone on EMIs</a>
                <a href="#">Home Appliances on EMIs</a>
              </div>
              <div className="dropdown-column">
                <h4>SERVICES</h4>
                <a href="#">Extended Warranty</a>
                <a href="#">Mobile Protect</a>
                <a href="#">Safe Pay</a>
                <a href="#">Credit Score Check</a>
                <a href="#">Health Services</a>
              </div>
              <div className="dropdown-column">
                <h4>OFFERS</h4>
                <a href="#">Personal Loan Offer</a>
                <a href="#">Online Shopping with EMI Card</a>
                <a href="#">Upgrade Life #ZindagiHit</a>
              </div>
              <div className="dropdown-column">
                <h4>MORE PRODUCTS</h4>
                <a href="#">Two-wheeler Loan</a>
                <a href="#">Used Car Loan</a>
                <a href="#">Tractor Loan</a>
                <a href="#">Gold Loan</a>
                <a href="#">Loan Against Property</a>
              </div>
            </div>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/offers">Offers</Link>
          </li>

          <li className="dropdown">
            <span className="dropdown-trigger">Loan Management ▾</span>
            <div className="dropdown-content loan-dropdown">
               <div className="dropdown-grid">
                  <a href="#"><span className="line"></span> Where to Pay</a>
                  <a href="#"><span className="line"></span> Payment FAQs</a>
                  <a href="#"><span className="line"></span> Paise Ki Paathshala</a>
                  <a href="#"><span className="line"></span> Download App</a>
                  <a href="#"><span className="line"></span> Direct Debit/Auto Debit</a>
                  <a href="#"><span className="line"></span> Update Your KYC</a>
                  <a href="#"><span className="line"></span> Setup Auto Debit</a>
                  <a href="#"><span className="line"></span> Complete Your KYC</a>
               </div>
             </div>
          </li>


          <li>
            <ScrollLink to="calculator" smooth={true} duration={500}>
              Calculator
            </ScrollLink>
          </li>

          <li>
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>

        <Link to="/apply" className="apply-btn">
          Apply Now
        </Link>
        <Link to="/pay-emi" className="apply-btn">
          Pay EMI
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

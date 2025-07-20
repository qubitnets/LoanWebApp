// src/components/Calculator.jsx
import React, { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import './calculator.css';

const Calculator = () => {
  const [price, setPrice] = useState(37000);
  const [downPayment, setDownPayment] = useState(10000);
  const [tenure, setTenure] = useState(6);

  const loanAmount = price - downPayment;
  const interestRate = 0.015; 
  const estimatedEMI = Math.round(
    (loanAmount * interestRate * Math.pow(1 + interestRate, tenure)) /
    (Math.pow(1 + interestRate, tenure) - 1)
  );

  return (
    <section className="calculator-section" id="calculator">
      <div className="calculator-box">
        <h2>EMI Calculator</h2>

        <div className="calculator-content">
          {/* LEFT SIDE */}
          <div className="calculator-left">
            <div className="input-group">
              <label>Price of mobile phone</label>
              <div className="rupee-input">
                <span><FaRupeeSign /></span>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>
              <input
                type="range"
                min="1000"
                max="100000"
                step="500"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
              <div className="range-labels">
                <span>₹1000</span>
                <span>₹100000</span>
              </div>
            </div>

            <div className="input-group">
              <label>Your preferred down payment amount</label>
              <div className="rupee-input">
                <span><FaRupeeSign /></span>
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                />
              </div>
              <input
                type="range"
                min="0"
                max={price}
                step="1000"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
              />
              <div className="range-labels">
                <span>₹0</span>
                <span>₹{price}</span>
              </div>
            </div>

            <div className="input-group">
              <label>Your preferred loan term</label>
              <div className="tenure-options">
                {[3, 6, 12, 24].map((month) => (
                  <button
                    key={month}
                    className={tenure === month ? "active" : ""}
                    onClick={() => setTenure(month)}
                  >
                    {month}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="calculator-right">
            <h4>Your estimated EMI</h4>
            <p><FaRupeeSign />{estimatedEMI}*</p>
            <div className="emi-buttons">
              <button className="btn-red">APPLY NOW</button>
              <button className="btn-grey">KNOW MORE</button>
            </div>
            <small>
              *This is an approximate EMI calculation. The actual processing fee
              and rate of interest may vary.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;

import React, { useState, useEffect } from 'react';
import './LocCalculator.css'

const LocCalculator = () => {
  const rate = 0.01;
  const time = 24;
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const [amount, setAmount] = useState(formatNumber('150000'));
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [interestAmount, setInterestAmount] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);

  useEffect(() => {
    calculateMonthlyPayment();
    // eslint-disable-next-line
  }, []);

  const calculateMonthlyPayment = () => {
    const principal = parseFloat(amount.replace(/,/g, ''));
    const interest = principal * rate;
    const principalPayment = principal / time;
    const payment = principalPayment + interest;
    const totalInterestAmount = interest * time;

    setMonthlyPayment(formatNumber(payment.toFixed(2)));
    setInterestAmount(formatNumber(interest.toFixed(2)));
    setTotalInterest(formatNumber(totalInterestAmount.toFixed(2)));
  };

  const handleChange = (e) => {
    const value = e.target.value.replace(/,/g, '');
    if (!isNaN(value)) {
      setAmount(formatNumber(value));
    }
  };

  return (
    <div className="calculator-container">
      <h2 className="calculator-header">Line of Credit Calculator</h2>
      <div className="calculator-input-group">
        <label htmlFor="loan-amount" className="calculator-label">
          Loan Amount ($):
        </label>
        <input type="text" id="loan-amount" className="calculator-input" value={amount} onChange={handleChange} />
      </div>
      <button className="calculator-button" onClick={calculateMonthlyPayment}>Calculate</button>
      <div className="calculator-result">Monthly Payment: ${monthlyPayment}</div>
      <div className="calculator-result">Monthly Interest Amount: ${interestAmount}</div>
      <div className="calculator-result">Total Interest Over 24 Months: ${totalInterest}</div>
    </div>
  );
};

export default LocCalculator;

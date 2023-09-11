import React from 'react';
import './BusinessCreditSecondSection.css';
import checkmark from '../images/checkmark.svg';

const BusinessCreditSecondSection = () => {
  return (
    <div className="qualificationWrapper">
      <div className="titleWrapper">
        <h2>Do I qualify?</h2>
      </div>
      <div className="criteriaWrapper">
        <div className="criteriaItem">
          <img src={checkmark} alt="checkmark" />
          <h4>Based in the U.S.</h4>
        </div>
        <div className="criteriaItem">
          <img src={checkmark} alt="checkmark" />
          <h4>600+ personal FICO score</h4>
        </div>
        <div className="criteriaItem">
          <img src={checkmark} alt="checkmark" />
          <h4>$100,000+ in annual revenue</h4>
        </div>
        <div className="criteriaItem">
          <img src={checkmark} alt="checkmark" />
          <h4>Business checking account</h4>
        </div>
        <div className="criteriaItem">
          <img src={checkmark} alt="checkmark" />
          <h4>Ideally 6+ months in business</h4>
        </div>
      </div>
    </div>
  );
}

export default BusinessCreditSecondSection;

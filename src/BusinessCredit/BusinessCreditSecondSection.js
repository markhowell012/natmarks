import React from 'react';
import './BusinessCreditSecondSection.css';
import checkmark from '../images/checkmark.svg';

const BusinessCreditSecondSection = () => {
  const criteriaList = [
    'Based in the U.S.',
    '600+ personal FICO score',
    '$100,000+ in annual revenue',
    'Business checking account',
    'Ideally 6+ months in business',
  ];
  
  return (
    <section className="qualification">
      <div className="qualification__title">
        <h2>Eligibility Criteria</h2>
      </div>
      <div className="qualification__criteria">
        {criteriaList.map((criteria, index) => (
          <div key={index} className="criteria__item">
            <img src={checkmark} alt="checkmark" />
            <h4>{criteria}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};



export default BusinessCreditSecondSection;

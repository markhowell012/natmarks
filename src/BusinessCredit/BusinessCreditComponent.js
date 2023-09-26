import React from 'react';
import './BusinessCreditComponent.css';
import SecondSection from '../components/SecondSection';
import BusinessCreditSecondSection from './BusinessCreditSecondSection';
import ladyYellow from '../images/lady grey yellow line.webp'
import LocCalculator from './LocCalculator';
import { useNavigate } from 'react-router-dom';

const BusinessCreditComponent = () => {
  const navigate = useNavigate()

  function handleApplyNowClick() {
    navigate('/application')
  }
  return (
    <div className="business-container">
      <div className="business-content">
        <h1 className="business-title">
          Get a business line of credit up to $1,000,000
        </h1>
        <h3 className="business-description">
          Apply for a GFN Capital Line of Credit to help with expenses like payroll, buying inventory, purchasing raw materials, maintenance, and more.
        </h3>
        <p onClick={handleApplyNowClick} className="business-apply-btn">
          Apply Now
        </p>
        <div className="business-note">
          *Credit line amounts, rates, and terms are based on creditworthiness and subject to change.
        </div>
      </div>
      <div className="business-image-wrapper">
        <figure className="business-image-container">
          <img 
            src={ladyYellow}
            alt="Female business owner holding model of office" 
            className="business-image"
          />
        </figure>
      </div>
      <SecondSection />
      <BusinessCreditSecondSection />
      <LocCalculator />
    </div>
  );
}

export default BusinessCreditComponent;

import React from 'react';
import './BusinessCreditComponent.css';
import SecondSection from '../components/SecondSection';
import BusinessCreditSecondSection from './BusinessCreditSecondSection';
import ladyYellow from '../images/lady grey yellow line.png';
import LocCalculator from './LocCalculator';
import { useNavigate } from 'react-router-dom';
import './BusinessCreditComponent.css'

const BusinessCreditComponent = () => {
  const navigate = useNavigate();

  function handleApplyNowClick() {
    navigate('/application');
  }

  return (
    <div className="business-container">
      <div className="business-content">
        <h1 className="business-title">
          Unlock Your Business Potential with up to $1,000,000 Line of Credit
        </h1>
        <p className="business-description">
          Apply for a GFN Capital Line of Credit to bolster your business needs, from payroll and inventory to raw materials and maintenance.
        </p>
        <button onClick={handleApplyNowClick} className="business-apply-btn">
          Apply Now
        </button>
        <div className="business-note">
          *Credit line amounts, rates, and terms are based on creditworthiness and subject to change.
        </div>
      </div>
      <div className="business-image-container">
        <img 
          src={ladyYellow}
          alt="Female business owner holding a model of an office" 
          className="business-image"
        />
      </div>
      <SecondSection />
      <BusinessCreditSecondSection />
      <LocCalculator />
    </div>
  );
}

export default BusinessCreditComponent;

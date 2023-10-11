import React from 'react';
import './PhoneApp.css'; // Import a separate CSS file for styling
import phonePic from '../images/GFN (2).png';
import fastFunding from '../images/fast_funding.svg'
import sameDay from '../images/same_day_decision.svg'
import easySign from '../images/easy_sign_up.svg'

const PhoneApp = () => {
  return (
    <div className="phone-app-container">
      <div className="phone-image">
        <img src={phonePic} alt="phonepic" />
      </div>
      <div className="funding-info-container">
        <h1 className="info-heading">Over $3B Funded</h1>
        <h2 className="info-subheading">to over 500,000 businesses</h2>
        <br />
        <div className="info-item">
          <div className="info-icon">
            <img src={easySign} alt="information icon" />
          </div>
          <div className="info-details">
            <h5 className="info-title">Easy Sign Up</h5>
            <p className="info-text">Simple online application completed within minutes.</p>
          </div>
        </div>
        <div className="info-item">
          <div className="info-icon">
            <img src={sameDay} alt="information icon" />
          </div>
          <div className="info-details">
            <h5 className="info-title">Same-Day Decision</h5>
            <p className="info-text">Easy and fast so you can focus on running your business. No need to compromise today; grab our proposal and explore your options, completely free of charge.</p>
          </div>
        </div>
        <div className="info-item">
          <div className="info-icon">
            <img src={fastFunding} alt="information icon" />
          </div>
          <div className="info-details">
            <h5 className="info-title">Fast Funding</h5>
            <p className="info-text">Funds automatically deposited into your business account the moment you decide to move forward.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneApp;

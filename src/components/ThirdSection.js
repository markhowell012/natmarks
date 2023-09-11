import React from 'react';
import './ThirdSection.css';
import threeBillIcon from '../images/3b.webp'
import trustIcon from '../images/trust.webp'
import aPlusIcon from '../images/aplus.webp'

function ThirdSection() {
    return (
        <div className="custom-container">
            <h2 className="custom-title">Join the 500,000 businesses that have connected to GFN Capital</h2>
            <div className="custom-card-container">
                <div className="custom-card">
                    <img src={threeBillIcon} alt="$3B+" className="custom-image" />
                    <p className="custom-card-text">Working capital unlocked</p>
                </div>
                <div className="custom-card">
                        <img src={trustIcon} alt="trustpilot rating" className="custom-image" />
                    <p className="custom-card-text">Rated <strong>4.5/5</strong> stars from <strong>3k+</strong> reviews</p>
                </div>
                <div className="custom-card">
                    <img src={aPlusIcon} alt="BBB score" className="custom-image" />
                    <p className="custom-card-text">A+ Rating, Better Business Bureau</p>
                </div>
            </div>
        </div>
    );
}

export default ThirdSection;
